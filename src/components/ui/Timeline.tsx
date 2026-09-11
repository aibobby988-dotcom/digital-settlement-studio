import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TimelineStepState {
  label: string;
  state: "done" | "current" | "pending";
}

export function Timeline({ steps }: { steps: TimelineStepState[] }) {
  return (
    <ol className="grid grid-cols-2 gap-y-6 sm:flex sm:items-start sm:gap-0">
      {steps.map((step, idx) => (
        <li key={step.label} className="flex flex-col items-start sm:flex-1 sm:items-center">
          <div className="flex w-full items-center">
            <div
              className={cn(
                "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 text-[11px] font-semibold transition-colors",
                step.state === "done" && "border-brand-500 bg-brand-500 text-paper-0",
                step.state === "current" &&
                  "border-brand-500 bg-paper-0 text-brand-600 animate-pulse",
                step.state === "pending" && "border-paper-200 bg-paper-0 text-ink-400"
              )}
            >
              {step.state === "done" ? <Check size={14} strokeWidth={3} /> : idx + 1}
            </div>
            {idx < steps.length - 1 && (
              <div
                className={cn(
                  "ml-1.5 hidden h-0.5 flex-1 sm:block",
                  step.state === "done" ? "bg-brand-500" : "bg-paper-200"
                )}
              />
            )}
          </div>
          <p
            className={cn(
              "mt-2 text-[12px] font-medium leading-tight sm:text-center sm:px-1",
              step.state === "pending" ? "text-ink-400" : "text-charcoal-900"
            )}
          >
            {step.label}
          </p>
        </li>
      ))}
    </ol>
  );
}
