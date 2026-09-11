import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function KpiCard({
  label,
  value,
  helpText,
  icon,
  accent = "brand",
}: {
  label: string;
  value: string;
  helpText?: string;
  icon?: ReactNode;
  accent?: "brand" | "blue";
}) {
  return (
    <div className="rounded-xl border border-paper-200 bg-paper-0 p-5">
      <div className="flex items-center justify-between">
        <p className="text-[12px] font-medium text-ink-500">{label}</p>
        {icon && (
          <div
            className={cn(
              "flex h-7 w-7 items-center justify-center rounded-md",
              accent === "brand" ? "bg-brand-50 text-brand-600" : "bg-blue-100/60 text-blue-600"
            )}
          >
            {icon}
          </div>
        )}
      </div>
      <p className="mt-3 text-[26px] font-semibold tracking-tight text-charcoal-900 tabular-nums">
        {value}
      </p>
      {helpText && <p className="mt-1.5 text-[12px] text-ink-500">{helpText}</p>}
    </div>
  );
}
