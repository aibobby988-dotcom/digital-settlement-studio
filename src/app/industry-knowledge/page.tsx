import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardHeader } from "@/components/ui/Card";
import {
  digitalMoneySpectrum,
  glossary,
  regulatoryLandscape,
  settlementStandards,
} from "@/lib/mock/industryKnowledge";

export default function IndustryKnowledgePage() {
  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="Study Materials"
        title="Industry & regulatory knowledge"
        description="A primer on the settlement standards, digital-money terminology and regulatory landscape this role explicitly tests — SWIFT, CLS, DvP/PvP models, and jurisdiction-by-jurisdiction context."
      />

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
        <h2 className="mb-5 text-[18px] font-semibold text-charcoal-900">
          Settlement message standards & models
        </h2>
        <div className="space-y-3">
          {settlementStandards.map((t) => (
            <Card key={t.term}>
              <p className="text-[13px] font-semibold text-charcoal-900">{t.term}</p>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-700">{t.explanation}</p>
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
                    <td className="py-3.5 pr-4 max-w-[220px] text-charcoal-900">{r.regime}</td>
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
