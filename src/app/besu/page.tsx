import { Cpu, Lightbulb, MessageSquareText, ShieldAlert, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { TermsOnThisPage } from "@/components/ui/TermsOnThisPage";
import { StrategyContext } from "@/components/ui/StrategyContext";
import { Card, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ExternalLink } from "@/components/ui/ExternalLink";
import {
  besuInOneParagraph,
  concepts,
  hsbcRelevance,
  interviewUse,
  likelyProbes,
  originFacts,
  platformComparison,
  strategicInsight,
  type BesuFact,
} from "@/lib/mock/besu";

const statusTone = {
  "Primary source": "emerald",
  Reported: "amber",
  Documentation: "blue",
} as const;

function FactList({ facts }: { facts: BesuFact[] }) {
  return (
    <ul className="space-y-3">
      {facts.map((f) => (
        <li key={f.fact} className="rounded-lg border border-paper-200 bg-paper-0 px-3.5 py-3">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <p className="max-w-3xl text-[12.5px] leading-relaxed text-charcoal-900">{f.fact}</p>
            <Badge tone={statusTone[f.status]}>{f.status}</Badge>
          </div>
          {f.source && (
            <ExternalLink href={f.source.url} className="mt-1.5 text-[11.5px]">
              {f.source.label}
            </ExternalLink>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function BesuPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="Technology"
        title="Hyperledger Besu — what to know and what to show off"
        description="The blockchain software reported to underpin HSBC's Tokenised Deposit Service network and Swift's shared ledger, briefed at product-manager altitude: what it is, the concepts worth using in the room, and how to use them without overclaiming."
      />

      <TermsOnThisPage terms={["Hyperledger Besu", "EVM", "QBFT", "Permissioned network", "Smart contract", "HSM", "Legal finality"]} />

      <StrategyContext track="foundation" />

      <section>
        <Card className="border-brand-100 bg-brand-50/30">
          <div className="flex items-start gap-3">
            <Cpu size={18} className="mt-0.5 shrink-0 text-brand-600" />
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-600">
                Besu in one paragraph
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-charcoal-900">{besuInOneParagraph}</p>
            </div>
          </div>
        </Card>
      </section>

      <section>
        <div className="mb-4">
          <h2 className="text-[18px] font-semibold text-charcoal-900">Why it matters for HSBC</h2>
          <p className="mt-1 max-w-3xl text-[12.5px] leading-relaxed text-ink-500">
            Each fact carries its source status. &ldquo;Reported&rdquo; means trade press rather than
            HSBC or Swift saying it directly — safe to reference as reporting, not as confirmed fact.
          </p>
        </div>
        <FactList facts={hsbcRelevance} />

        <Card className="mt-4 border-charcoal-900 bg-charcoal-950">
          <div className="flex items-start gap-3">
            <Lightbulb size={17} className="mt-0.5 shrink-0 text-brand-400" />
            <div>
              <p className="text-[13px] font-semibold text-paper-0">{strategicInsight.headline}</p>
              <p className="mt-2 text-[12.5px] leading-relaxed text-paper-100">{strategicInsight.body}</p>
              <p className="mt-2.5 border-t border-charcoal-800 pt-2.5 text-[12px] leading-relaxed text-ink-400">
                <strong className="font-semibold text-paper-100">But:</strong> {strategicInsight.caveat}
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section>
        <div className="mb-4 flex items-center gap-2">
          <Sparkles size={18} className="text-brand-500" />
          <div>
            <h2 className="text-[18px] font-semibold text-charcoal-900">
              Seven concepts worth showing off
            </h2>
            <p className="mt-0.5 max-w-3xl text-[12.5px] text-ink-500">
              Each one: what it means in plain English, how Besu does it, why a product manager
              should care, and a line you can actually say. The privacy one is the most
              differentiating.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {concepts.map((c, i) => (
            <Card key={c.concept} className={c.concept.startsWith("Privacy") ? "border-brand-200" : undefined}>
              <div className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-paper-100 text-[11px] font-semibold text-ink-600">
                  {i + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-[14px] font-semibold text-charcoal-900">{c.concept}</h3>
                  <p className="mt-0.5 text-[12px] text-ink-500">{c.plain}</p>
                </div>
              </div>

              <div className="mt-3 grid gap-3 lg:grid-cols-2">
                <div className="rounded-xl bg-paper-50 p-3.5">
                  <p className="text-[10.5px] font-semibold uppercase tracking-wide text-ink-400">
                    How Besu does it
                  </p>
                  <p className="mt-1 text-[12px] leading-relaxed text-charcoal-900">{c.howItWorks}</p>
                </div>
                <div className="rounded-xl bg-brand-50/50 p-3.5">
                  <p className="text-[10.5px] font-semibold uppercase tracking-wide text-brand-600">
                    Why a product manager cares
                  </p>
                  <p className="mt-1 text-[12px] leading-relaxed text-charcoal-900">{c.productAngle}</p>
                </div>
              </div>

              <div className="mt-3 flex gap-2.5 rounded-xl border border-brand-100 bg-paper-0 px-3.5 py-3">
                <MessageSquareText size={15} className="mt-0.5 shrink-0 text-brand-600" />
                <p className="text-[12.5px] leading-relaxed text-charcoal-900">
                  <strong className="font-semibold">Say it like this:</strong> &ldquo;{c.showOffLine}&rdquo;
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <Card padded={false}>
          <div className="p-5 pb-0">
            <CardHeader
              title="Besu against the alternatives"
              subtitle="The comparison to have ready if asked why a bank would choose it"
            />
          </div>
          <div className="overflow-x-auto scrollbar-thin">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead>
                <tr className="border-b border-paper-200 text-[11px] uppercase tracking-wide text-ink-400">
                  <th className="py-2.5 pl-5 pr-4 font-medium">Platform</th>
                  <th className="py-2.5 pr-4 font-medium">Model</th>
                  <th className="py-2.5 pr-4 font-medium">Strength</th>
                  <th className="py-2.5 pr-5 font-medium">Trade-off</th>
                </tr>
              </thead>
              <tbody>
                {platformComparison.map((p) => (
                  <tr key={p.platform} className="border-b border-paper-100 text-[12.5px] last:border-0">
                    <td className="py-3.5 pl-5 pr-4 font-semibold text-charcoal-900">{p.platform}</td>
                    <td className="py-3.5 pr-4 max-w-[180px] leading-relaxed text-ink-500">{p.model}</td>
                    <td className="py-3.5 pr-4 max-w-[260px] leading-relaxed text-charcoal-900">{p.strength}</td>
                    <td className="py-3.5 pr-5 max-w-[240px] leading-relaxed text-ink-500">{p.tradeOff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </section>

      <section>
        <div className="mb-4 flex items-center gap-2">
          <MessageSquareText size={18} className="text-brand-500" />
          <h2 className="text-[18px] font-semibold text-charcoal-900">Questions you may be asked</h2>
        </div>
        <div className="space-y-3">
          {likelyProbes.map((p) => (
            <Card key={p.q}>
              <p className="text-[13px] font-semibold text-charcoal-900">{p.q}</p>
              <p className="mt-2 text-[12.5px] leading-relaxed text-ink-700">{p.a}</p>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <Card className="border-amber-200 bg-amber-50/40">
          <div className="flex items-start gap-3">
            <ShieldAlert size={17} className="mt-0.5 shrink-0 text-amber-700" />
            <div>
              <p className="text-[13px] font-semibold text-charcoal-900">{interviewUse.headline}</p>
              <ul className="mt-2.5 space-y-2">
                {interviewUse.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-[12.5px] leading-relaxed text-charcoal-900">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-600" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader title="Where Besu came from" subtitle="Useful context, not something to lead with" />
          <FactList facts={originFacts} />
        </Card>
      </section>
    </div>
  );
}
