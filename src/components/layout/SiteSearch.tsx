"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { BookOpen, CornerDownLeft, FileText, Loader2, Search, X } from "lucide-react";
import { navItems } from "@/lib/nav";
import { explainers } from "@/lib/mock/explainers";
import { cn } from "@/lib/utils";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const OPEN_EVENT = "dss:open-search";
const PENDING_KEY = "dss:search-jump";

export function openSearch() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

interface PageDoc {
  href: string;
  label: string;
  text: string;
  lower: string;
}

interface Hit {
  key: string;
  kind: "term" | "page";
  href: string;
  title: string;
  subtitle: string;
  snippet: string;
  jumpText: string;
  occurrence: number;
}

let indexCache: PageDoc[] | null = null;
let indexPromise: Promise<PageDoc[]> | null = null;

function pageUrl(href: string) {
  return `${BASE}${href === "/" ? "/" : `${href}/`}`;
}

// Every page is statically exported, so its rendered text can be fetched and
// searched in the browser without a server or a separately maintained index.
function loadIndex(onProgress: (done: number) => void): Promise<PageDoc[]> {
  if (indexCache) return Promise.resolve(indexCache);
  if (indexPromise) return indexPromise;
  let done = 0;
  indexPromise = Promise.all(
    navItems.map(async (item) => {
      try {
        const res = await fetch(pageUrl(item.href));
        // Spacing between tags stops "Heading" and "Paragraph" fusing into one word.
        const html = (await res.text()).replace(/></g, "> <");
        const doc = new DOMParser().parseFromString(html, "text/html");
        const main = doc.querySelector("main");
        main?.querySelectorAll("script, style, svg").forEach((n) => n.remove());
        const text = (main?.textContent ?? "")
          .replace(/\s+/g, " ")
          .replace(/\s+([,.;:!?)’”])/g, "$1")
          .trim();
        return { href: item.href, label: item.label, text, lower: text.toLowerCase() };
      } catch {
        return { href: item.href, label: item.label, text: "", lower: "" };
      } finally {
        onProgress(++done);
      }
    })
  ).then((docs) => {
    indexCache = docs;
    return docs;
  });
  return indexPromise;
}

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function Highlighted({ text, terms }: { text: string; terms: string[] }) {
  if (!terms.length) return <>{text}</>;
  const re = new RegExp(`(${terms.map(escapeRegExp).join("|")})`, "gi");
  const lowered = terms.map((t) => t.toLowerCase());
  return (
    <>
      {text.split(re).map((part, i) =>
        part.length > 0 && lowered.includes(part.toLowerCase()) ? (
          <mark key={i} className="rounded bg-amber-200/80 px-0.5 text-charcoal-900">
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

function search(docs: PageDoc[], query: string): Hit[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  const hits: Hit[] = [];

  // Definitions first: if the query is a term you are trying to learn, the plain
  // explanation is usually the answer you want.
  for (const e of explainers) {
    const hay = `${e.term} ${e.full} ${e.simple}`.toLowerCase();
    if (!terms.every((t) => hay.includes(t))) continue;
    const exactTerm = e.term.toLowerCase() === q || e.full.toLowerCase() === q;
    hits.push({
      key: `term:${e.term}`,
      kind: "term",
      href: "/plain-english",
      title: e.full ? `${e.term} — ${e.full}` : e.term,
      subtitle: exactTerm ? "Exact definition · Plain English" : "Definition · Plain English",
      snippet: e.simple,
      // The opening of the definition only appears on that term's own card, so the
      // jump lands there rather than on an earlier passing mention of the term.
      jumpText: e.simple.slice(0, 48),
      occurrence: 0,
    });
  }
  hits.sort((a, b) => Number(b.subtitle.startsWith("Exact")) - Number(a.subtitle.startsWith("Exact")));
  const termHits = hits.splice(0, 4);

  const pageHits: { score: number; items: Hit[] }[] = [];
  for (const doc of docs) {
    if (!doc.lower || !terms.every((t) => doc.lower.includes(t))) continue;
    const needle = doc.lower.includes(q) ? q : terms[0];
    const positions: number[] = [];
    for (let i = doc.lower.indexOf(needle); i !== -1; i = doc.lower.indexOf(needle, i + needle.length)) {
      positions.push(i);
    }
    const items: Hit[] = [];
    let lastEnd = -1;
    positions.forEach((pos, occurrence) => {
      if (items.length >= 3 || pos < lastEnd) return;
      const start = Math.max(0, pos - 70);
      const end = Math.min(doc.text.length, pos + needle.length + 90);
      lastEnd = end;
      items.push({
        key: `page:${doc.href}:${pos}`,
        kind: "page",
        href: doc.href,
        title: doc.label,
        subtitle: `${positions.length} match${positions.length === 1 ? "" : "es"} on this page`,
        snippet: `${start > 0 ? "…" : ""}${doc.text.slice(start, end)}${end < doc.text.length ? "…" : ""}`,
        jumpText: doc.text.slice(pos, pos + needle.length),
        occurrence,
      });
    });
    const labelBonus = terms.some((t) => doc.label.toLowerCase().includes(t)) ? 50 : 0;
    const phraseBonus = needle === q && terms.length > 1 ? 25 : 0;
    pageHits.push({ score: positions.length + labelBonus + phraseBonus, items });
  }
  pageHits.sort((a, b) => b.score - a.score);
  return [...termHits, ...pageHits.flatMap((p) => p.items)];
}

/** Finds the nth occurrence of a phrase in the live page, reveals it and selects it. */
function jumpToText(phrase: string, occurrence: number): boolean {
  const root = document.querySelector("main");
  if (!root) return false;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  let full = "";
  const starts: number[] = [];
  for (let n = walker.nextNode(); n; n = walker.nextNode()) {
    const t = n as Text;
    if (t.parentElement?.closest("script, style")) continue;
    starts.push(full.length);
    nodes.push(t);
    full += t.data;
  }
  const lower = full.toLowerCase();
  const needle = phrase.toLowerCase();
  const found: number[] = [];
  for (let i = lower.indexOf(needle); i !== -1; i = lower.indexOf(needle, i + needle.length)) found.push(i);
  if (!found.length) return false;
  const at = found[Math.min(occurrence, found.length - 1)];

  const locate = (offset: number) => {
    let idx = 0;
    while (idx < starts.length - 1 && starts[idx + 1] <= offset) idx++;
    return { node: nodes[idx], offset: offset - starts[idx] };
  };
  const s = locate(at);
  const e = locate(at + needle.length);

  // Terms inside a collapsed "terms explained" panel would otherwise stay hidden.
  for (let el = s.node.parentElement; el; el = el.parentElement) {
    if (el instanceof HTMLDetailsElement) el.open = true;
  }

  const range = document.createRange();
  range.setStart(s.node, s.offset);
  range.setEnd(e.node, Math.min(e.offset, e.node.length));
  const sel = window.getSelection();
  sel?.removeAllRanges();
  sel?.addRange(range);
  (s.node.parentElement ?? root).scrollIntoView({ behavior: "smooth", block: "center" });
  return true;
}

export function SiteSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [debounced, setDebounced] = useState("");
  const [docs, setDocs] = useState<PageDoc[] | null>(indexCache);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
        return;
      }
      const target = e.target as HTMLElement | null;
      const typing = target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable);
      if (e.key === "/" && !typing) {
        e.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener(OPEN_EVENT, onOpen);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener(OPEN_EVENT, onOpen);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    // Select any previous query so typing replaces it rather than appending to it.
    const t = setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    }, 20);
    document.body.style.overflow = "hidden";
    if (!docs) loadIndex(setProgress).then(setDocs);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, [open, docs]);

  useEffect(() => {
    const t = setTimeout(() => {
      setDebounced(query);
      setActive(0);
    }, 120);
    return () => clearTimeout(t);
  }, [query]);

  // After navigating to a result, find and select the exact match once the page has rendered.
  useEffect(() => {
    let raw: string | null = null;
    try {
      raw = sessionStorage.getItem(PENDING_KEY);
    } catch {
      return;
    }
    if (!raw) return;
    const pending = JSON.parse(raw) as { href: string; text: string; occurrence: number };
    const here = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
    if (pending.href !== here) return;
    let tries = 0;
    const attempt = () => {
      const found = jumpToText(pending.text, pending.occurrence);
      // A phrase can span markup differently in the live page; fall back to its first word.
      if (!found && tries === 20) jumpToText(pending.text.split(/\s+/)[0], 0);
      if (found || tries++ > 20) {
        try {
          sessionStorage.removeItem(PENDING_KEY);
        } catch {
          /* ignore */
        }
        return;
      }
      setTimeout(attempt, 100);
    };
    attempt();
  }, [pathname]);

  const results = useMemo(() => (docs ? search(docs, debounced) : []), [docs, debounced]);
  const terms = useMemo(
    () => debounced.trim().split(/\s+/).filter((t) => t.length > 0),
    [debounced]
  );

  function go(hit: Hit) {
    const here = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
    setOpen(false);
    if (hit.href === here) {
      jumpToText(hit.jumpText, hit.occurrence);
      return;
    }
    try {
      sessionStorage.setItem(
        PENDING_KEY,
        JSON.stringify({ href: hit.href, text: hit.jumpText, occurrence: hit.occurrence })
      );
    } catch {
      /* navigation still works without the jump */
    }
    router.push(hit.href);
  }

  function onInputKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Escape") close();
    if (!results.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      go(results[active]);
    }
  }

  useEffect(() => {
    listRef.current
      ?.querySelector<HTMLElement>(`[data-index="${active}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [active]);

  if (!open) return null;

  const indexing = !docs;
  const pageCount = new Set(results.filter((r) => r.kind === "page").map((r) => r.href)).size;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center bg-charcoal-950/60 px-4 pt-[10vh] backdrop-blur-[2px]"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search the site"
        className="flex max-h-[75vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-paper-200 bg-paper-0 shadow-2xl"
      >
        <div className="flex items-center gap-3 border-b border-paper-200 px-4 py-3">
          <Search size={17} className="shrink-0 text-ink-400" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onInputKey}
            placeholder="Search every page — try CHATS, finality, cash pooling, Vincent…"
            className="min-w-0 flex-1 bg-transparent text-[14px] text-charcoal-900 outline-none placeholder:text-ink-400"
            aria-label="Search query"
          />
          <button
            type="button"
            onClick={close}
            aria-label="Close search"
            className="flex h-7 w-7 items-center justify-center rounded-md text-ink-400 hover:bg-paper-100"
          >
            <X size={16} />
          </button>
        </div>

        <div ref={listRef} className="flex-1 overflow-y-auto scrollbar-thin">
          {indexing ? (
            <div className="flex items-center justify-center gap-2.5 px-4 py-10 text-[12.5px] text-ink-500">
              <Loader2 size={15} className="animate-spin" />
              Reading every page… {progress} of {navItems.length}
            </div>
          ) : debounced.trim().length < 2 ? (
            <div className="px-5 py-8 text-center text-[12.5px] leading-relaxed text-ink-500">
              Searches the full text of all {navItems.length} pages plus every Plain English
              definition.
              <br />
              Pick a result to jump straight to that exact spot on the page.
            </div>
          ) : results.length === 0 ? (
            <div className="px-5 py-8 text-center text-[12.5px] text-ink-500">
              No matches for &ldquo;{debounced}&rdquo;.
            </div>
          ) : (
            <ul className="py-2">
              {results.map((hit, i) => {
                const prev = results[i - 1];
                const newGroup =
                  !prev || prev.kind !== hit.kind || (hit.kind === "page" && prev.href !== hit.href);
                return (
                  <li key={hit.key}>
                    {newGroup && (
                      <div className="flex items-center gap-2 px-4 pb-1 pt-3 text-[10.5px] font-semibold uppercase tracking-wide text-ink-400">
                        {hit.kind === "term" ? <BookOpen size={11} /> : <FileText size={11} />}
                        {hit.kind === "term" ? "Definitions" : hit.title}
                        {hit.kind === "page" && (
                          <span className="font-normal normal-case tracking-normal">
                            · {hit.subtitle}
                          </span>
                        )}
                      </div>
                    )}
                    <button
                      type="button"
                      data-index={i}
                      onMouseEnter={() => setActive(i)}
                      onClick={() => go(hit)}
                      className={cn(
                        "flex w-full items-start gap-3 px-4 py-2.5 text-left",
                        i === active ? "bg-brand-50/70" : "hover:bg-paper-50"
                      )}
                    >
                      <div className="min-w-0 flex-1">
                        {hit.kind === "term" && (
                          <p className="text-[12.5px] font-semibold text-charcoal-900">
                            <Highlighted text={hit.title} terms={terms} />
                          </p>
                        )}
                        <p
                          className={cn(
                            "text-[12px] leading-relaxed text-ink-700",
                            hit.kind === "term" && "mt-0.5 line-clamp-2"
                          )}
                        >
                          <Highlighted text={hit.snippet} terms={terms} />
                        </p>
                      </div>
                      {i === active && <CornerDownLeft size={13} className="mt-1 shrink-0 text-ink-400" />}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-paper-200 bg-paper-50 px-4 py-2 text-[11px] text-ink-400">
          <span>
            {results.length > 0 &&
              `${results.length} result${results.length === 1 ? "" : "s"}${pageCount ? ` across ${pageCount} page${pageCount === 1 ? "" : "s"}` : ""}`}
          </span>
          <span>↑↓ to move · Enter to open · Esc to close · ⌘K anywhere</span>
        </div>
      </div>
    </div>
  );
}

export function SearchButton({ variant }: { variant: "sidebar" | "mobile" }) {
  if (variant === "mobile") {
    return (
      <button
        type="button"
        onClick={openSearch}
        aria-label="Search the site"
        className="flex h-8 w-8 items-center justify-center rounded-md text-ink-400 hover:bg-charcoal-800"
      >
        <Search size={17} />
      </button>
    );
  }
  return (
    <button
      type="button"
      onClick={openSearch}
      className="flex w-full items-center gap-2.5 rounded-lg border border-charcoal-700 bg-charcoal-900 px-3 py-2 text-left text-[12.5px] text-ink-400 transition-colors hover:border-charcoal-600 hover:text-paper-100"
    >
      <Search size={14} />
      <span className="flex-1">Search the site</span>
      <kbd className="rounded border border-charcoal-700 px-1.5 py-0.5 font-mono text-[10px] text-ink-500">
        ⌘K
      </kbd>
    </button>
  );
}
