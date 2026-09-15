import Link from "next/link";
import { ArrowRight, Ban, Layers, Megaphone, Route, Telescope } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { WalkthroughBar } from "@/components/ui/WalkthroughBar";
import { TermsOnThisPage } from "@/components/ui/TermsOnThisPage";
import { Card, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ExternalLink } from "@/components/ui/ExternalLink";
import {
  cashLegThesis,
  demoRoute,
  doNotLeadWith,
  forwardLook,
  hsbcEstate,
  openingNarrative,
  tracks,
  utilityMap,
} from "@/lib/mock/tdsStrategy";

const estateTone = {
  Live: "emerald",
  "Proven in pilot": "blue",
  "Proven, separate platform": "amber",
} as const;

const vectorTone = {
  Live: "emerald",
  "Proven in pilot": "blue",
  "Separate platform": "amber",
  Open: "brand",
} as const;

export default function TdsStrategyPage() {
  return (
    <div className="space-y-10">
      <WalkthroughBar step={1} />
      <PageHeader
        eyebrow="Start here"
        title="Extending the cash leg — the strategy this case study argues for"
        description="HSBC already has a Tokenised Deposit Service, live in six markets. The job is not to build one. It is to make the cash leg useful in more places. This page is the frame for everything else on the site."
      />

      <TermsOnThisPage terms={["Tokenised deposit", "DvP", "PvP", "Hyperledger Besu", "GPS", "Settlement", "Treasurer"]} />

      <section>
        <Card className="border-brand-100 bg-brand-50/30">
          <div className="flex items-start gap-3">
            <Layers size={18} className="mt-0.5 shrink-0 text-brand-600" />
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-600">
                {cashLegThesis.headline}
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-charcoal-900">{cashLegThesis.body}</p>
              <p className="mt-3 border-t border-brand-100 pt-3 text-[12px] leading-relaxed text-ink-700">
                <strong className="font-semibold text-charcoal-900">Why this lands:</strong>{" "}
                {cashLegThesis.whyItLands}
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section>
        <div className="mb-4">
          <h2 className="text-[18px] font-semibold text-charcoal-900">
            What HSBC already has — know this cold
          </h2>
          <p className="mt-1 max-w-3xl text-[12.5px] leading-relaxed text-ink-500">
            Proposing something the team has already shipped is the fastest way to lose the room.
            Every item below is public and sourced. Read it before you rehearse anything else.
          </p>
        </div>

        <div className="space-y-3">
          {hsbcEstate.map((item) => (
            <Card key={item.asset}>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <p className="text-[13.5px] font-semibold text-charcoal-900">{item.asset}</p>
                <Badge tone={estateTone[item.status]}>{item.status}</Badge>
              </div>
              <p className="mt-2 text-[12.5px] leading-relaxed text-ink-700">{item.what}</p>
              <p className="mt-2.5 rounded-lg bg-paper-50 px-3 py-2 text-[12px] leading-relaxed text-brand-600">
                <strong className="font-semibold">So what:</strong> {item.soWhat}
              </p>
              {item.source && (
                <ExternalLink href={item.source.url} className="mt-2.5 text-[11.5px]">
                  {item.source.label}
                </ExternalLink>
              )}
            </Card>
          ))}
        </div>
      </section>

      <section>
        <Card padded={false}>
          <div className="p-5 pb-0">
            <CardHeader
              title="The utility map"
              subtitle="Every direction the cash leg can be extended, and what is genuinely unbuilt"
            />
          </div>
          <div className="overflow-x-auto scrollbar-thin">
            <table className="w-full min-w-[620px] border-collapse text-left">
              <thead>
                <tr className="border-b border-paper-200 text-[11px] uppercase tracking-wide text-ink-400">
                  <th className="py-2.5 pl-5 pr-4 font-medium">Utility vector</th>
                  <th className="py-2.5 pr-4 font-medium">Status</th>
                  <th className="py-2.5 pr-5 font-medium">Note</th>
                </tr>
              </thead>
              <tbody>
                {utilityMap.map((v) => (
                  <tr key={v.vector} className="border-b border-paper-100 text-[12.5px] last:border-0">
                    <td className="py-3.5 pl-5 pr-4 max-w-[220px] font-medium text-charcoal-900">
                      {v.vector}
                    </td>
                    <td className="py-3.5 pr-4">
                      <Badge tone={vectorTone[v.status]}>{v.status}</Badge>
                    </td>
                    <td className="py-3.5 pr-5 max-w-[380px] leading-relaxed text-ink-500">{v.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </section>

      <section>
        <div className="mb-4">
          <h2 className="text-[18px] font-semibold text-charcoal-900">
            The two tracks to pitch
          </h2>
          <p className="mt-1 max-w-3xl text-[12.5px] leading-relaxed text-ink-500">
            Both run on the same rail, serve different clients and revenue, and — critically —
            neither asks the bank to build a new platform. That is what makes them fundable.
          </p>
        </div>

        <div className="space-y-5">
          {tracks.map((track) => (
            <Card key={track.number} className="border-brand-100">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500 text-[13px] font-semibold text-paper-0">
                  {track.number}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-[15px] font-semibold text-charcoal-900">{track.name}</h3>
                  <p className="mt-0.5 text-[12.5px] font-medium text-brand-600">{track.headline}</p>
                </div>
              </div>

              <div className="mt-4 grid gap-3 lg:grid-cols-3">
                <div className="rounded-xl bg-paper-50 p-3.5">
                  <p className="text-[10.5px] font-semibold uppercase tracking-wide text-ink-400">
                    Target client
                  </p>
                  <p className="mt-1 text-[12px] leading-relaxed text-charcoal-900">{track.targetClient}</p>
                </div>
                <div className="rounded-xl bg-paper-50 p-3.5">
                  <p className="text-[10.5px] font-semibold uppercase tracking-wide text-ink-400">
                    Their problem
                  </p>
                  <p className="mt-1 text-[12px] leading-relaxed text-charcoal-900">{track.problem}</p>
                </div>
                <div className="rounded-xl bg-brand-50/60 p-3.5">
                  <p className="text-[10.5px] font-semibold uppercase tracking-wide text-brand-600">
                    The proposition
                  </p>
                  <p className="mt-1 text-[12px] leading-relaxed text-charcoal-900">{track.proposition}</p>
                </div>
              </div>

              <div className="mt-3 grid gap-3 lg:grid-cols-2">
                <div>
                  <p className="text-[10.5px] font-semibold uppercase tracking-wide text-emerald-700">
                    Why it matters to HSBC
                  </p>
                  <ul className="mt-1.5 space-y-1.5">
                    {track.whyHsbc.map((w) => (
                      <li key={w} className="flex items-start gap-2 text-[12px] leading-relaxed text-charcoal-900">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-500" />
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[10.5px] font-semibold uppercase tracking-wide text-amber-700">
                    Risks to own
                  </p>
                  <ul className="mt-1.5 space-y-1.5">
                    {track.risks.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-[12px] leading-relaxed text-charcoal-900">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-500" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="mt-3 rounded-lg border border-paper-200 bg-paper-50 px-3.5 py-2.5 text-[12px] leading-relaxed text-ink-700">
                <strong className="font-semibold text-charcoal-900">Why it is approvable:</strong>{" "}
                {track.whyApprovable}
              </p>

              <div className="mt-3 flex gap-2.5 rounded-xl border border-brand-100 bg-paper-0 px-3.5 py-3">
                <Megaphone size={15} className="mt-0.5 shrink-0 text-brand-600" />
                <p className="text-[12.5px] leading-relaxed text-charcoal-900">
                  <strong className="font-semibold">Say it like this:</strong> &ldquo;
                  {track.interviewLine}&rdquo;
                </p>
              </div>

              <Link
                href={track.demoPage.href}
                className="mt-3 inline-flex items-center gap-1 text-[12px] font-medium text-brand-600"
              >
                Demo this on {track.demoPage.label}
                <ArrowRight size={13} />
              </Link>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center gap-2">
          <Telescope size={18} className="text-brand-500" />
          <div>
            <h2 className="text-[18px] font-semibold text-charcoal-900">
              Forward look — raise these carefully
            </h2>
            <p className="mt-0.5 text-[12.5px] text-ink-500">
              Genuinely interesting, genuinely riskier. Neither should open the conversation.
            </p>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {forwardLook.map((item) => (
            <Card key={item.item}>
              <p className="text-[13px] font-semibold text-charcoal-900">{item.item}</p>
              <p className="mt-2 text-[12.5px] leading-relaxed text-ink-700">{item.why}</p>
              <p className="mt-2.5 rounded-lg border border-amber-100 bg-amber-50/40 px-3 py-2 text-[12px] leading-relaxed text-charcoal-900">
                <strong className="font-semibold">How to raise it:</strong> {item.howToRaise}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <Card className="border-rose-100 bg-rose-50/30">
          <div className="flex items-start gap-3">
            <Ban size={17} className="mt-0.5 shrink-0 text-rose-600" />
            <div>
              <p className="text-[13px] font-semibold text-charcoal-900">What not to say</p>
              <p className="mt-1 text-[12px] leading-relaxed text-ink-600">
                Each of these is a moment the conversation turns against you, and each is
                avoidable with the research already on this page.
              </p>
              <ul className="mt-3 space-y-2">
                {doNotLeadWith.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[12.5px] leading-relaxed text-charcoal-900">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-rose-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <Card className="border-charcoal-900 bg-charcoal-950">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-300">
            Your opening, word for word
          </p>
          <p className="mt-2.5 text-[13px] italic leading-relaxed text-paper-0">
            &ldquo;{openingNarrative.script}&rdquo;
          </p>
          <p className="mt-3 border-t border-charcoal-800 pt-3 text-[12px] leading-relaxed text-ink-400">
            <strong className="font-semibold text-paper-100">Why it works:</strong>{" "}
            {openingNarrative.whyItWorks}
          </p>
        </Card>

        <Card>
          <div className="flex items-center gap-2">
            <Route size={16} className="text-brand-600" />
            <CardHeader title="The demo route" />
          </div>
          <ol className="space-y-2.5">
            {demoRoute.map((s) => (
              <li key={s.step} className="flex gap-2.5">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-paper-100 text-[10.5px] font-semibold text-ink-600">
                  {s.step}
                </span>
                <p className="text-[12px] leading-relaxed text-ink-700">
                  <Link href={s.href} className="font-semibold text-brand-600">
                    {s.page}
                  </Link>{" "}
                  — {s.say}
                </p>
              </li>
            ))}
          </ol>
        </Card>
      </section>
    </div>
  );
}
