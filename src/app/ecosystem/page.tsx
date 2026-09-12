import { Building2, Lightbulb, Link2, Info, Network, Trophy } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { TermsOnThisPage } from "@/components/ui/TermsOnThisPage";
import { Card, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ExternalLink } from "@/components/ui/ExternalLink";
import {
  benchmarkLessons,
  benchmarks,
  buildBuyPartner,
  buildBuyPartnerPrinciple,
  capabilityLandscape,
  decisionLog,
  infrastructureInitiatives,
  partnerScorecardDimensions,
  publicContextDisclaimer,
  publicIndustryContext,
  vendorDeepDive,
} from "@/lib/mock/ecosystem";

export default function EcosystemPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="Ecosystem & Market Landscape"
        title="Build, buy, partner — and who else is building this"
        description="Senior product judgement on infrastructure dependencies, vendor evaluation and where this proposition sits in the wider institutional digital-assets market."
      />

      <TermsOnThisPage terms={["Permissioned network", "DLT", "MPC", "HSM", "CSD", "SPV"]} />

      <div className="flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-100/20 px-4 py-3.5">
        <Info size={16} className="mt-0.5 shrink-0 text-blue-600" />
        <p className="text-[12.5px] leading-relaxed text-charcoal-900">
          This is an independent fictional case study. No named vendor is used, selected, or
          endorsed by this platform. Illustrative market participants are shown as examples of a
          capability category only, subject to procurement, architecture, legal, risk and
          regulatory approval in any real implementation.
        </p>
      </div>

      <section>
        <Card>
          <CardHeader
            title="Build / buy / partner decision framework"
            subtitle="Where to build, where to license, and where to interoperate rather than own"
          />
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {buildBuyPartner.map((col) => (
              <div key={col.mode} className="rounded-lg border border-paper-200 bg-paper-50 p-4">
                <p className="text-[12.5px] font-semibold text-charcoal-900">{col.mode}</p>
                <p className="mt-1 text-[10.5px] font-medium uppercase tracking-wide text-ink-400">Best for</p>
                <ul className="mt-2 space-y-1.5">
                  {col.bestFor.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-[12px] leading-relaxed text-ink-700">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-500" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-start gap-3 rounded-lg border border-brand-100 bg-brand-50/50 px-4 py-3.5">
            <Lightbulb size={16} className="mt-0.5 shrink-0 text-brand-600" />
            <p className="text-[12.5px] leading-relaxed text-charcoal-900">{buildBuyPartnerPrinciple}</p>
          </div>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader
            title="Partner and Network Selection Framework"
            subtitle="Technology selection follows the client use case, settlement asset and regulatory perimeter — it is not a blockchain-first decision."
          />
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {partnerScorecardDimensions.map((d) => (
              <div
                key={d}
                className="rounded-lg border border-paper-200 bg-paper-50 px-3.5 py-2.5 text-[12px] text-charcoal-900"
              >
                {d}
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section>
        <Card padded={false}>
          <div className="p-5 pb-0">
            <CardHeader
              title="Illustrative capability landscape"
              subtitle="Not vendors this platform uses — categories a PM must evaluate, with examples of who operates in each"
            />
          </div>
          <div className="overflow-x-auto scrollbar-thin px-5 pb-5">
            <table className="w-full min-w-[820px] border-collapse text-left">
              <thead>
                <tr className="border-b border-paper-200 text-[11px] uppercase tracking-wide text-ink-400">
                  <th className="py-2.5 pr-4 font-medium">Capability</th>
                  <th className="py-2.5 pr-4 font-medium">Illustrative market participants</th>
                  <th className="py-2.5 pr-4 font-medium">What the product manager must assess</th>
                </tr>
              </thead>
              <tbody>
                {capabilityLandscape.map((row) => (
                  <tr key={row.capability} className="border-b border-paper-100 text-[12.5px] last:border-0">
                    <td className="py-3.5 pr-4 max-w-[180px] font-medium text-charcoal-900">{row.capability}</td>
                    <td className="py-3.5 pr-4 max-w-[220px]">
                      <div className="flex flex-wrap gap-1">
                        {row.participants.map((p) =>
                          p.url ? (
                            <a
                              key={p.name}
                              href={p.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 rounded-full bg-paper-100 px-2.5 py-1 text-[11px] font-medium text-ink-700 ring-1 ring-inset ring-paper-200 hover:bg-brand-50 hover:text-brand-600 hover:ring-brand-100"
                            >
                              {p.name}
                            </a>
                          ) : (
                            <Badge key={p.name} tone="neutral">
                              {p.name}
                            </Badge>
                          )
                        )}
                      </div>
                    </td>
                    <td className="py-3.5 pr-4 max-w-[280px] text-ink-500">{row.assess}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </section>

      <section>
        <PageHeader
          eyebrow="Vendor deep-dive"
          title="What each vendor actually offers — and where the public evidence points"
          description="Knowing the category (custody, network, financial crime) is a weak answer on its own. Knowing which specific vendor HSBC has already backed, piloted with or gone live on is what separates real research from a rehearsed answer. Read these as evidence of where HSBC has committed, not as procurement recommendations you are making — you would have no basis for the latter."
        />
        <div className="mt-6 space-y-8">
          {vendorDeepDive.map((cat) => (
            <div key={cat.category}>
              <h3 className="text-[15px] font-semibold text-charcoal-900">{cat.category}</h3>
              <p className="mt-1 max-w-2xl text-[12.5px] leading-relaxed text-ink-500">{cat.context}</p>

              <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
                {cat.vendors.map((v) => (
                  <Card
                    key={v.name}
                    className={v.isPick ? "border-brand-300 bg-brand-50/30 ring-1 ring-brand-100" : undefined}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <p className="text-[13.5px] font-semibold text-charcoal-900">
                          {v.url ? <ExternalLink href={v.url}>{v.name}</ExternalLink> : v.name}
                        </p>
                        {v.isPick && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-brand-500 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                            <Trophy size={10} />
                            Strongest public evidence
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="mt-2.5 text-[10.5px] font-semibold uppercase tracking-wide text-ink-400">
                      What they offer
                    </p>
                    <p className="mt-1 text-[12px] leading-relaxed text-charcoal-900">{v.offer}</p>

                    <p className="mt-2.5 text-[10.5px] font-semibold uppercase tracking-wide text-ink-400">
                      How they differ from the others here
                    </p>
                    <p className="mt-1 text-[12px] leading-relaxed text-charcoal-900">{v.differentiator}</p>

                    <p className="mt-2.5 text-[10.5px] font-semibold uppercase tracking-wide text-ink-400">
                      The HSBC-specific signal
                    </p>
                    <p className="mt-1 text-[12px] leading-relaxed text-ink-700">{v.hsbcSignal}</p>
                  </Card>
                ))}
              </div>

              <div className="mt-4 flex items-start gap-3 rounded-xl border border-brand-100 bg-brand-50/50 px-4 py-3.5">
                <Trophy size={16} className="mt-0.5 shrink-0 text-brand-600" />
                <div>
                  <p className="text-[12.5px] leading-relaxed text-charcoal-900">{cat.verdict}</p>
                  {cat.verdictUrl && (
                    <ExternalLink href={cat.verdictUrl} className="mt-2 text-[11.5px]">
                      Source
                    </ExternalLink>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <Card>
          <CardHeader title="Public industry context" subtitle="Factual, publicly reported — not a claim about this product's own architecture" />
          <ul className="space-y-3">
            {publicIndustryContext.map((item) => (
              <li key={item.text} className="rounded-lg border border-paper-200 bg-paper-50 px-4 py-3">
                <p className="text-[12.5px] leading-relaxed text-charcoal-900">{item.text}</p>
                <p className="mt-1.5 text-[11px] text-ink-400">
                  {item.url ? (
                    <ExternalLink href={item.url} className="text-[11px] text-brand-600">
                      {item.source}
                    </ExternalLink>
                  ) : (
                    item.source
                  )}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[11.5px] leading-relaxed text-ink-500">{publicContextDisclaimer}</p>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader
            title="Multi-bank and central-bank infrastructure"
            subtitle="Where this product's later phases would eventually have to connect — not built by any single bank alone"
          />
          <div className="space-y-3">
            {infrastructureInitiatives.map((item) => (
              <div key={item.name} className="rounded-lg border border-paper-200 p-4">
                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-charcoal-900 text-brand-400">
                    <Network size={14} />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-charcoal-900">{item.name}</p>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-ink-700">{item.description}</p>
                    <p className="mt-2 text-[12px] leading-relaxed text-brand-600">
                      <strong className="font-semibold">Relevance:</strong> {item.relevance}
                    </p>
                    <p className="mt-1.5 text-[11px] text-ink-400">
                      {item.url ? (
                        <ExternalLink href={item.url} className="text-[11px] text-brand-600">
                          {item.source}
                        </ExternalLink>
                      ) : (
                        item.source
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section>
        <PageHeader eyebrow="Market context" title="Competitive and market benchmarks" />
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {benchmarks.map((b) => (
            <Card key={b.name}>
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-charcoal-900 text-brand-400">
                <Building2 size={16} />
              </div>
              <h3 className="mt-3.5 text-[13.5px] font-semibold text-charcoal-900">
                {b.url ? <ExternalLink href={b.url}>{b.name}</ExternalLink> : b.name}
              </h3>
              <p className="mt-1.5 text-[12px] font-medium uppercase tracking-wide text-ink-400">Focus</p>
              <p className="text-[12.5px] leading-relaxed text-ink-700">{b.focus}</p>
              <p className="mt-2 text-[12px] font-medium uppercase tracking-wide text-ink-400">Lesson</p>
              <p className="text-[12.5px] leading-relaxed text-ink-700">{b.lesson}</p>
            </Card>
          ))}
        </div>
        <Card className="mt-4 bg-charcoal-950 border-charcoal-900">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-300">
            What Digital Settlement Studio learns from all four
          </p>
          <ul className="mt-2.5 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
            {benchmarkLessons.map((l) => (
              <li key={l} className="flex items-start gap-2 text-[12.5px] text-paper-100">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-400" />
                {l}
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader title="Product-manager decision log" subtitle="Why the roadmap sequences the way it does" />
          <div className="space-y-4">
            {decisionLog.map((entry) => (
              <div key={entry.question} className="rounded-lg border border-paper-200 p-4">
                <div className="flex items-start gap-2.5">
                  <Link2 size={15} className="mt-0.5 shrink-0 text-brand-500" />
                  <p className="text-[13px] font-semibold text-charcoal-900">{entry.question}</p>
                </div>
                <ul className="mt-2.5 space-y-1.5 pl-6">
                  {entry.rationale.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-[12.5px] leading-relaxed text-ink-700">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink-400" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
}
