import { PageHeader } from "@/components/layout/PageHeader";
import { TermsOnThisPage } from "@/components/ui/TermsOnThisPage";
import { Card, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ExternalLink } from "@/components/ui/ExternalLink";
import {
  digitalMoneySpectrum,
  glossary,
  marketUpdates,
  regulatoryLandscape,
  settlementStandards,
  type TechStage,
} from "@/lib/mock/industryKnowledge";

const stageTone: Record<TechStage, "emerald" | "amber" | "neutral" | "rose"> = {
  "Live today": "emerald",
  "Actively migrating": "amber",
  "Reference framework": "neutral",
  "Being challenged": "rose",
};

export default function IndustryKnowledgePage() {
  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="Study Materials"
        title="Industry & regulatory knowledge"
        description="A primer on the settlement standards, digital-money terminology and regulatory landscape this role explicitly tests — SWIFT, CLS, DvP/PvP models, and jurisdiction-by-jurisdiction context."
      />

      <TermsOnThisPage terms={["ISO 20022", "MT and MX", "CLS", "RTGS", "DvP", "PvP", "CBDC", "Stablecoin", "Tokenised deposit"]} />

      <section>
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-[18px] font-semibold text-charcoal-900">Verified market signals</h2>
            <p className="mt-1 text-[13px] leading-relaxed text-ink-500">
              Fact-checked as of 12 September 2026. These are product and regulatory signals,
              not legal advice or proof that a pilot is a production rail.
            </p>
          </div>
          <Badge tone="brand">Primary sources linked</Badge>
        </div>
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          {marketUpdates.map((update) => (
            <Card key={update.title}>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <Badge tone="neutral">{update.region}</Badge>
                <span className="text-[11px] font-medium text-ink-400">{update.date}</span>
              </div>
              <h3 className="mt-3 text-[13px] font-semibold text-charcoal-900">{update.title}</h3>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-700">{update.summary}</p>
              <div className="mt-3 rounded-lg bg-paper-50 px-3 py-2.5 text-[12px] leading-relaxed text-brand-600">
                <strong className="font-semibold">Why it matters here:</strong> {update.implication}
              </div>
              <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5">
                {update.sources.map((source) => (
                  <ExternalLink key={source.url} href={source.url} className="text-[11.5px]">
                    {source.label}
                  </ExternalLink>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-[18px] font-semibold text-charcoal-900">Glossary</h2>
        <p className="mb-5 text-[13px] leading-relaxed text-ink-500">
          Definitions where the term isn&apos;t self-explanatory, each paired with a concrete
          example from this case study rather than a textbook abstraction.
        </p>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {glossary.map((g) => (
            <Card key={g.term}>
              <p className="text-[13px] font-semibold text-charcoal-900">{g.term}</p>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-700">{g.definition}</p>
              <p className="mt-2.5 rounded-lg bg-paper-50 px-3 py-2 text-[12px] leading-relaxed text-brand-600">
                <strong className="font-semibold">Example:</strong> {g.example}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-[18px] font-semibold text-charcoal-900">
          Settlement message standards & models
        </h2>
        <p className="mb-5 text-[13px] leading-relaxed text-ink-500">
          What&apos;s actually live in banks today versus what&apos;s mid-upgrade versus what&apos;s
          a stable reference framework not going anywhere — each card below states its current
          stage explicitly, plus where (if anywhere) it&apos;s headed next.
        </p>
        <div className="mb-5 flex flex-wrap gap-2">
          {(Object.keys(stageTone) as TechStage[]).map((stage) => (
            <Badge key={stage} tone={stageTone[stage]}>
              {stage}
            </Badge>
          ))}
        </div>
        <div className="space-y-3">
          {settlementStandards.map((t) => (
            <Card key={t.term}>
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-[13px] font-semibold text-charcoal-900">{t.term}</p>
                  <Badge tone={stageTone[t.stage]}>{t.stage}</Badge>
                </div>
                {t.url && (
                  <ExternalLink href={t.url} className="shrink-0 text-[11.5px]">
                    Reference
                  </ExternalLink>
                )}
              </div>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-700">{t.explanation}</p>
              <div className="mt-3 grid grid-cols-1 gap-2.5 border-t border-paper-200 pt-3 sm:grid-cols-2">
                <div>
                  <p className="text-[10.5px] font-semibold uppercase tracking-wide text-ink-400">
                    Where it is today
                  </p>
                  <p className="mt-1 text-[12px] leading-relaxed text-charcoal-900">{t.today}</p>
                </div>
                <div>
                  <p className="text-[10.5px] font-semibold uppercase tracking-wide text-ink-400">
                    Where it&apos;s headed
                  </p>
                  <p className="mt-1 text-[12px] leading-relaxed text-charcoal-900">{t.direction}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-5 text-[18px] font-semibold text-charcoal-900">
          The digital-money spectrum
        </h2>
        <p className="mb-4 text-[13px] leading-relaxed text-ink-500">
          Interviewers in this space often test whether a candidate conflates these — worth being
          precise about the distinctions, not just the similarities.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {digitalMoneySpectrum.map((t) => (
            <Card key={t.term}>
              <p className="text-[13px] font-semibold text-charcoal-900">{t.term}</p>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-700">{t.explanation}</p>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <Card padded={false}>
          <div className="p-5 pb-0">
            <CardHeader
              title="Regulatory landscape by jurisdiction"
              subtitle="Enough to speak confidently corridor by corridor, not a legal opinion"
            />
          </div>
          <div className="overflow-x-auto scrollbar-thin px-5 pb-5">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="border-b border-paper-200 text-[11px] uppercase tracking-wide text-ink-400">
                  <th className="py-2.5 pr-4 font-medium">Jurisdiction</th>
                  <th className="py-2.5 pr-4 font-medium">Regime</th>
                  <th className="py-2.5 pr-4 font-medium">Note</th>
                </tr>
              </thead>
              <tbody>
                {regulatoryLandscape.map((r) => (
                  <tr key={r.jurisdiction} className="border-b border-paper-100 text-[12.5px] last:border-0">
                    <td className="py-3.5 pr-4 font-semibold text-charcoal-900">{r.jurisdiction}</td>
                    <td className="py-3.5 pr-4 max-w-[220px] text-charcoal-900">
                      {r.url ? <ExternalLink href={r.url}>{r.regime}</ExternalLink> : r.regime}
                    </td>
                    <td className="py-3.5 pr-4 max-w-[320px] text-ink-500">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </section>
    </div>
  );
}
