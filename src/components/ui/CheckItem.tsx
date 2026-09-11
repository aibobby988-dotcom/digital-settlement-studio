import { Check, X, Loader2, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

export type CheckState = "pending" | "checking" | "pass" | "fail";

export function CheckItem({
  label,
  detail,
  state,
}: {
  label: string;
  detail?: string;
  state: CheckState;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-3 rounded-lg border px-4 py-3 transition-colors",
        state === "pass" && "border-emerald-100 bg-emerald-100/30",
        state === "fail" && "border-rose-100 bg-rose-100/30",
        state === "checking" && "border-blue-100 bg-blue-100/20",
        state === "pending" && "border-paper-200 bg-paper-50"
      )}
    >
      <div>
        <p className="text-[13px] font-medium text-charcoal-900">{label}</p>
        {detail && <p className="mt-0.5 text-[12px] text-ink-500">{detail}</p>}
      </div>
      <div
        className={cn(
          "flex h-6 w-6 shrink-0 items-center justify-center rounded-full",
          state === "pass" && "bg-emerald-500 text-paper-0",
          state === "fail" && "bg-rose-600 text-paper-0",
          state === "checking" && "bg-blue-500 text-paper-0",
          state === "pending" && "bg-paper-200 text-ink-400"
        )}
      >
        {state === "pass" && <Check size={14} strokeWidth={3} />}
        {state === "fail" && <X size={14} strokeWidth={3} />}
        {state === "checking" && <Loader2 size={13} className="animate-spin" />}
        {state === "pending" && <Circle size={8} fill="currentColor" />}
      </div>
    </div>
  );
}
