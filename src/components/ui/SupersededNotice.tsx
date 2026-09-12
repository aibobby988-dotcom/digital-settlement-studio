import Link from "next/link";
import { Archive } from "lucide-react";

/**
 * Marks a page that predates the current strategy. Nothing is deleted — but
 * while revising, you need to know at a glance which pages still reflect the
 * latest thinking and which do not.
 */
export function SupersededNotice({
  what,
  insteadHref = "/tds-strategy",
  insteadLabel = "Extending TDS",
}: {
  what: string;
  insteadHref?: string;
  insteadLabel?: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-100/40 px-4 py-3.5">
      <Archive size={16} className="mt-0.5 shrink-0 text-amber-700" />
      <div>
        <p className="text-[12.5px] font-semibold text-charcoal-900">
          Superseded — kept for reference, not current thinking
        </p>
        <p className="mt-1 text-[12px] leading-relaxed text-charcoal-900">{what}</p>
        <Link
          href={insteadHref}
          className="mt-1.5 inline-block text-[11.5px] font-medium text-brand-700"
        >
          Current thinking: {insteadLabel} →
        </Link>
      </div>
    </div>
  );
}
