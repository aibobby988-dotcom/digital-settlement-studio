import { Check, X } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/Badge";
import { PrintButton } from "@/components/ui/PrintButton";
import { WalkthroughBar } from "@/components/ui/WalkthroughBar";
import { roadmapPhases } from "@/lib/mock/roadmap";
import { cn } from "@/lib/utils";

export default function RoadmapPage() {
  return (
    <div className="space-y-10">
      <WalkthroughBar step={5} />
      <PageHeader
        eyebrow="Product Roadmap"
        title="Phased delivery plan"
        description="Each phase expands scope only after measurable go/no-go gates are met — client value, legal readiness, operational and financial-crime controls, resilience, and a supportable commercial model."
        actions={<PrintButton />}
      />

      <div className="relative space-y-6">
        <div className="absolute left-[19px] top-2 bottom-2 hidden w-px bg-paper-200 sm:block" />
        {roadmapPhases.map((phase) => (
          <div key={phase.id} className="print-break relative flex flex-col gap-4 sm:flex-row sm:gap-6">
            <div className="hidden sm:block">
              <div
                className={cn(
                  "relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 bg-paper-0 text-[12px] font-semibold",
                  phase.status === "Complete" && "border-emerald-500 bg-emerald-500 text-paper-0",
                  phase.status === "In Progress" && "border-blue-500 text-blue-600",
                  phase.status === "Planned" && "border-paper-200 text-ink-400"
                )}
              >
                {phase.status === "Complete" ? <Check size={16} strokeWidth={3} /> : phase.phase.split(" ")[1]}
              </div>
            </div>
            <Card className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-600">
                    {phase.phase} · {phase.window}
                  </p>
                  <h2 className="mt-1 text-[16px] font-semibold text-charcoal-900">{phase.title}</h2>
                </div>
                <StatusBadge status={phase.status} />
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-ink-500">{phase.summary}</p>

              <div className="mt-5 grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div>
                  <p className="mb-2 text-[11.5px] font-semibold uppercase tracking-wide text-ink-400">
                    Key deliverables
                  </p>
                  <ul className="space-y-1.5">
                    {phase.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-[12.5px] text-charcoal-900">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-500" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-2 text-[11.5px] font-semibold uppercase tracking-wide text-ink-400">
                    Go / no-go gates
                  </p>
                  <ul className="space-y-1.5">
                    {phase.gates.map((g) => (
                      <li key={g.label} className="flex items-center gap-2 text-[12.5px]">
                        <span
                          className={cn(
                            "flex h-4 w-4 shrink-0 items-center justify-center rounded-full",
                            g.met ? "bg-emerald-500 text-paper-0" : "bg-paper-200 text-ink-400"
                          )}
                        >
                          {g.met ? <Check size={10} strokeWidth={3} /> : <X size={10} strokeWidth={3} />}
                        </span>
                        <span className={g.met ? "text-charcoal-900" : "text-ink-500"}>{g.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
