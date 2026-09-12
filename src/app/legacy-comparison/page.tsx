import Link from "next/link";
import { ArrowRight, CheckCircle2, XCircle , Scale} from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { StrategyContext } from "@/components/ui/StrategyContext";
import { TermsOnThisPage } from "@/components/ui/TermsOnThisPage";
import { Card, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  advantages,
  comparisonRows,
  disadvantages,
  effortBreakdown,
  worthItFramework,
} from "@/lib/mock/legacyComparison";

const totalPoints = effortBreakdown.reduce((sum, e) => sum + e.points, 0);

export default function LegacyComparisonPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="Why This Approach"
        title="Legacy vs. tokenised — the honest trade-off"
        description="What tokenised settlement actually buys you versus today's rails, what it costs to build, and where it isn't worth it yet."
      />

      <TermsOnThisPage terms={["Correspondent banking", "RTGS", "Netting", "ISO 20022", "Cut-off time", "Nostro account", "Settlement"]} />

      <StrategyContext track="evidence" />

      <div className="flex items-start gap-3 rounded-xl border border-paper-200 bg-paper-50 px-4 py-3.5">
        <Scale size={16} className="mt-0.5 shrink-0 text-ink-500" />
        <p className="text-[12.5px] leading-relaxed text-charcoal-900">
          <strong className="font-semibold">What legacy means here.</strong> Not HSBC&apos;s
          tokenised rail, which is already live — the comparison is against the conventional,
          cut-off-bound payment process a treasurer uses today. This page answers &ldquo;is the
          change worth the cost?&rdquo; for the two extension tracks, so state the limitations as
          plainly as the benefits.
        </p>
      </div>

      <section>
        <Card padded={false}>
          <div className="p-5 pb-0">
            <CardHeader title="Side-by-side comparison" />
          </div>
          <div className="overflow-x-auto scrollbar-thin px-5 pb-5">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="border-b border-paper-200 text-[11px] uppercase tracking-wide text-ink-400">
                  <th className="py-2.5 pr-4 font-medium">Dimension</th>
                  <th className="py-2.5 pr-4 font-medium">Legacy rails</th>
                  <th className="py-2.5 pr-4 font-medium">Tokenised settlement</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((r) => (
                  <tr key={r.dimension} className="border-b border-paper-100 text-[12.5px] last:border-0">
                    <td className="py-3.5 pr-4 font-semibold text-charcoal-900">{r.dimension}</td>
                    <td className="py-3.5 pr-4 max-w-[260px] text-ink-500">{r.legacy}</td>
                    <td className="py-3.5 pr-4 max-w-[260px] text-charcoal-900">{r.tokenised}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <div className="mb-1 flex items-center gap-2">
            <CheckCircle2 size={16} className="text-emerald-600" />
            <h2 className="text-[15px] font-semibold text-charcoal-900">Advantages</h2>
          </div>
          <div className="mt-3 space-y-3">
            {advantages.map((a) => (
              <div key={a.point} className="border-l-2 border-emerald-500 pl-3">
                <p className="text-[12.5px] font-semibold text-charcoal-900">{a.point}</p>
                <p className="mt-0.5 text-[12px] leading-relaxed text-ink-500">{a.detail}</p>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <div className="mb-1 flex items-center gap-2">
            <XCircle size={16} className="text-rose-600" />
            <h2 className="text-[15px] font-semibold text-charcoal-900">Disadvantages</h2>
          </div>
          <div className="mt-3 space-y-3">
            {disadvantages.map((d) => (
              <div key={d.point} className="border-l-2 border-rose-500 pl-3">
                <p className="text-[12.5px] font-semibold text-charcoal-900">{d.point}</p>
                <p className="mt-0.5 text-[12px] leading-relaxed text-ink-500">{d.detail}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section>
        <PageHeader
          eyebrow="Cost"
          title="What it actually takes to build"
          description="Using this case study's own delivery backlog as a real effort proxy, in story points — not a made-up number."
        />
        <Card className="mt-5" padded={false}>
          <div className="p-5 pb-0">
            <CardHeader title="Effort by area" subtitle={`${totalPoints} points total across 7 epics — see the full backlog for story-level detail`} />
          </div>
          <div className="space-y-0 px-5 pb-5">
            {effortBreakdown.map((e) => (
              <div key={e.area} className="flex items-center gap-4 border-b border-paper-100 py-3 last:border-0">
                <div className="flex-1">
                  <p className="text-[12.5px] font-semibold text-charcoal-900">{e.area}</p>
                  <p className="text-[11.5px] text-ink-500">{e.effort}</p>
                </div>
                <div className="flex w-32 shrink-0 items-center gap-2">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-paper-100">
                    <div
                      className="h-full rounded-full bg-brand-500"
                      style={{ width: `${(e.points / Math.max(...effortBreakdown.map((x) => x.points))) * 100}%` }}
                    />
                  </div>
                  <Badge tone="neutral">{e.points} pts</Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>
        <p className="mt-3 text-[12px] text-ink-500">
          <Link href="/backlog" className="font-medium text-brand-600">
            See the full delivery backlog
          </Link>{" "}
          for every story and acceptance criterion behind these totals.
        </p>
      </section>

      <section>
        <PageHeader eyebrow="The real question" title="Is it worth it?" />
        <p className="mt-3 mb-5 max-w-2xl text-[13px] leading-relaxed text-ink-500">
          Not a yes/no answer — it depends on the client, the corridor and the counterparty.
          That&apos;s exactly why the roadmap is phased rather than a single big-bang launch.
        </p>
        <div className="space-y-3">
          {worthItFramework.map((w) => (
            <Card key={w.condition} className="flex items-start gap-3">
              <ArrowRight size={15} className="mt-0.5 shrink-0 text-brand-500" />
              <div>
                <p className="text-[12.5px] font-semibold text-charcoal-900">{w.condition}</p>
                <p className="mt-1 text-[12.5px] leading-relaxed text-ink-500">{w.verdict}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
