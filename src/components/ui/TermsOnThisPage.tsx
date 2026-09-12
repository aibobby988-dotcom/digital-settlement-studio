import Link from "next/link";
import { BookOpen } from "lucide-react";
import { findExplainer } from "@/lib/mock/explainers";

/**
 * A compact "jargon on this page" strip. Drop it at the top of any page and pass
 * the terms that page uses — a reader who does not know one can expand it in
 * place instead of leaving to find a glossary.
 */
export function TermsOnThisPage({ terms }: { terms: string[] }) {
  const entries = terms.map(findExplainer).filter((entry) => entry !== undefined);

  if (entries.length === 0) return null;

  return (
    <details className="group rounded-xl border border-paper-200 bg-paper-0 px-4 py-3">
      <summary className="flex cursor-pointer list-none items-center gap-2.5 text-[12.5px] font-medium text-charcoal-900 marker:content-['']">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-paper-100 text-brand-600">
          <BookOpen size={13} />
        </span>
        <span>
          New to the wording on this page? {entries.length} terms explained
        </span>
        <span className="ml-auto text-[11.5px] font-normal text-ink-400 group-open:hidden">
          Show
        </span>
        <span className="ml-auto hidden text-[11.5px] font-normal text-ink-400 group-open:inline">
          Hide
        </span>
      </summary>

      <div className="mt-3.5 grid grid-cols-1 gap-3 border-t border-paper-100 pt-3.5 lg:grid-cols-2">
        {entries.map((entry) => (
          <div key={entry.term} className="rounded-lg bg-paper-50 px-3.5 py-3">
            <p className="text-[12.5px] font-semibold text-charcoal-900">
              {entry.term}
              {entry.full && (
                <span className="ml-1.5 font-medium text-brand-600">{entry.full}</span>
              )}
            </p>
            <p className="mt-1 text-[12px] leading-relaxed text-ink-700">{entry.simple}</p>
            <p className="mt-1.5 text-[11.5px] leading-relaxed text-ink-500">
              <strong className="font-semibold text-charcoal-900">For example:</strong>{" "}
              {entry.example}
            </p>
          </div>
        ))}
      </div>

      <Link
        href="/plain-english"
        className="mt-3 inline-block text-[11.5px] font-medium text-brand-600"
      >
        See every term used across this site
      </Link>
    </details>
  );
}
