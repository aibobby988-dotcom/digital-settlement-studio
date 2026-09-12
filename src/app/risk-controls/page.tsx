"use client";

import { useMemo, useState } from "react";
import {
  Banknote,
  Cog,
  Gavel,
  Scale,
  ShieldAlert,
  Workflow,
} from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { StrategyContext } from "@/components/ui/StrategyContext";
import { TermsOnThisPage } from "@/components/ui/TermsOnThisPage";
import { Card } from "@/components/ui/Card";
import { RiskBadge, StatusBadge, Badge } from "@/components/ui/Badge";
import { PrintButton } from "@/components/ui/PrintButton";
import { WalkthroughBar } from "@/components/ui/WalkthroughBar";
import { cn } from "@/lib/utils";
import { riskCategoryOrder, riskControls } from "@/lib/mock/risk";
import type { RiskControl } from "@/lib/types";

const categoryIcons: Record<RiskControl["category"], React.ComponentType<{ size?: number }>> = {
  "Financial Crime": ShieldAlert,
  "Legal & Regulatory": Gavel,
  Technology: Cog,
  Operational: Workflow,
  Financial: Banknote,
  Governance: Scale,
};

export default function RiskControlsPage() {
  const [activeCategory, setActiveCategory] = useState<RiskControl["category"] | "All">("All");

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? riskControls
        : riskControls.filter((r) => r.category === activeCategory),
    [activeCategory]
  );

  const summary = useMemo(() => {
    const high = riskControls.filter((r) => r.riskLevel === "High").length;
    const medium = riskControls.filter((r) => r.riskLevel === "Medium").length;
    const low = riskControls.filter((r) => r.riskLevel === "Low").length;
    return { high, medium, low, total: riskControls.length };
  }, []);

  return (
    <div className="space-y-8">
      <WalkthroughBar step={6} />
      <PageHeader
        eyebrow="Risk & Controls"
        title="Risk and control framework"
        description="Every identified risk maps to a named control, an accountable owner, a current status and traceable evidence — the same standard applied to traditional wholesale payment products."
        actions={<PrintButton onBeforePrint={() => setActiveCategory("All")} />}
      />

      <TermsOnThisPage terms={["AML", "KYC", "Sanctions screening", "Legal finality", "Reconciliation", "NPA", "RTO and RPO", "SLA"]} />

      <StrategyContext track="evidence" />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Card>
          <p className="text-[11.5px] text-ink-500">Total controls</p>
          <p className="mt-2 text-[22px] font-semibold text-charcoal-900 tabular-nums">{summary.total}</p>
        </Card>
        <Card>
          <p className="text-[11.5px] text-ink-500">High risk</p>
          <p className="mt-2 text-[22px] font-semibold text-rose-600 tabular-nums">{summary.high}</p>
        </Card>
        <Card>
          <p className="text-[11.5px] text-ink-500">Medium risk</p>
          <p className="mt-2 text-[22px] font-semibold text-amber-500 tabular-nums">{summary.medium}</p>
        </Card>
        <Card>
          <p className="text-[11.5px] text-ink-500">Low risk</p>
          <p className="mt-2 text-[22px] font-semibold text-emerald-600 tabular-nums">{summary.low}</p>
        </Card>
      </div>

      <div className="no-print flex flex-wrap gap-2">
        <button
          onClick={() => setActiveCategory("All")}
          className={cn(
            "rounded-full px-3.5 py-1.5 text-[12px] font-medium ring-1 ring-inset transition-colors",
            activeCategory === "All"
              ? "bg-charcoal-900 text-paper-0 ring-charcoal-900"
              : "bg-paper-0 text-ink-700 ring-paper-200 hover:bg-paper-50"
          )}
        >
          All categories
        </button>
        {riskCategoryOrder.map((cat) => {
          const Icon = categoryIcons[cat];
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12px] font-medium ring-1 ring-inset transition-colors",
                activeCategory === cat
                  ? "bg-charcoal-900 text-paper-0 ring-charcoal-900"
                  : "bg-paper-0 text-ink-700 ring-paper-200 hover:bg-paper-50"
              )}
            >
              <Icon size={12} />
              {cat}
            </button>
          );
        })}
      </div>

      <div className="space-y-8">
        {riskCategoryOrder
          .filter((cat) => activeCategory === "All" || activeCategory === cat)
          .map((cat) => {
            const items = filtered.filter((r) => r.category === cat);
            if (!items.length) return null;
            const Icon = categoryIcons[cat];
            return (
              <section key={cat} className="print-break">
                <div className="mb-3 flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-charcoal-900 text-brand-400">
                    <Icon size={14} />
                  </div>
                  <h2 className="text-[14px] font-semibold text-charcoal-900">{cat}</h2>
                  <Badge tone="neutral">{items.length} controls</Badge>
                </div>
                <Card padded={false}>
                  <div className="overflow-x-auto scrollbar-thin">
                    <table className="w-full min-w-[880px] border-collapse text-left">
                      <thead>
                        <tr className="border-b border-paper-200 text-[11px] uppercase tracking-wide text-ink-400">
                          <th className="py-3 pl-5 pr-4 font-medium">Risk</th>
                          <th className="py-3 pr-4 font-medium">Level</th>
                          <th className="py-3 pr-4 font-medium">Control</th>
                          <th className="py-3 pr-4 font-medium">Owner</th>
                          <th className="py-3 pr-4 font-medium">Status</th>
                          <th className="py-3 pr-5 font-medium">Evidence / audit trail</th>
                        </tr>
                      </thead>
                      <tbody>
                        {items.map((r) => (
                          <tr key={r.id} className="border-b border-paper-100 text-[12.5px] last:border-0">
                            <td className="py-3.5 pl-5 pr-4 max-w-[220px] text-charcoal-900">{r.risk}</td>
                            <td className="py-3.5 pr-4">
                              <RiskBadge level={r.riskLevel} />
                            </td>
                            <td className="py-3.5 pr-4 max-w-[220px] text-charcoal-900">{r.control}</td>
                            <td className="py-3.5 pr-4 whitespace-nowrap text-ink-500">{r.owner}</td>
                            <td className="py-3.5 pr-4">
                              <StatusBadge status={r.status} />
                            </td>
                            <td className="py-3.5 pr-5 max-w-[260px] text-ink-500">{r.evidence}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>
              </section>
            );
          })}
      </div>
    </div>
  );
}
