"use client";

import { useId, useState } from "react";
import { findExplainer } from "@/lib/mock/explainers";
import { cn } from "@/lib/utils";

/**
 * Inline plain-English explainer. Wraps a term so a beginner can expand the full
 * name and a simple definition without leaving the page.
 *
 * Usage: <Explain t="DvP" /> or <Explain t="DvP">delivery-versus-payment</Explain>
 */
export function Explain({
  t,
  children,
  className,
}: {
  t: string;
  children?: React.ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const entry = findExplainer(t);

  // If the term isn't in the dictionary, render plain text rather than a dead control.
  if (!entry) return <>{children ?? t}</>;

  return (
    <span className="relative inline-block">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onBlur={() => setOpen(false)}
        className={cn(
          "cursor-help border-b border-dotted border-brand-400 font-medium text-brand-700 underline-offset-2 transition-colors hover:text-brand-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1",
          className
        )}
      >
        {children ?? entry.term}
      </button>

      {open && (
        <span
          id={panelId}
          role="tooltip"
          className="absolute left-0 top-[calc(100%+6px)] z-50 block w-[min(20rem,calc(100vw-2.5rem))] rounded-xl border border-paper-200 bg-paper-0 p-3.5 text-left shadow-[0_8px_24px_rgba(15,21,33,0.14)]"
        >
          <span className="block text-[12.5px] font-semibold text-charcoal-900">
            {entry.full ? `${entry.term} — ${entry.full}` : entry.term}
          </span>
          <span className="mt-1.5 block text-[12px] font-normal leading-relaxed text-ink-700">
            {entry.simple}
          </span>
          {entry.status && (
            <span className="mt-2 block rounded-lg bg-amber-50 px-2.5 py-1.5 text-[11.5px] leading-relaxed text-amber-700">
              <strong className="font-semibold">Status:</strong> {entry.status}
            </span>
          )}
          <span className="mt-2 block rounded-lg bg-paper-50 px-2.5 py-1.5 text-[11.5px] leading-relaxed text-brand-600">
            <strong className="font-semibold">Why it matters here:</strong> {entry.why}
          </span>
        </span>
      )}
    </span>
  );
}
