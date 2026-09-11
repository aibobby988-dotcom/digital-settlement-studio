import { ArrowDown, Info } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  appointments,
  careerTimeline,
  currentFocusTags,
  education,
  globalStats,
  hkStats,
  orgChain,
  recentNews,
  strategyPillars,
  values,
} from "@/lib/mock/companyContext";

export default function CompanyNotesPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="Study Materials"
        title="Company & interviewer notes"
        description="Background on the hiring team's reporting structure and the employer itself — sourced from public profiles, bios and HSBC's own published materials."
      />

      <div className="flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-100/20 px-4 py-3.5">
        <Info size={16} className="mt-0.5 shrink-0 text-blue-600" />
        <p className="text-[12.5px] leading-relaxed text-charcoal-900">
          Everything below is drawn from public LinkedIn profiles, conference bios, and HSBC&apos;s
          own published recruiting and investor materials — background research ahead of a job
          interview, not confidential information.
        </p>
      </div>

      <section>
        <h2 className="mb-5 text-[18px] font-semibold text-charcoal-900">
          Where this role sits
        </h2>
        <Card>
          <div className="flex flex-col gap-2">
            {orgChain.map((node, idx) => (
              <div key={node.role} className="flex flex-col items-start" style={{ marginLeft: idx * 28 }}>
                {idx > 0 && <ArrowDown size={14} className="mb-2 ml-4 text-ink-400" />}
                <div
                  className={`rounded-lg border px-4 py-3 ${
                    idx === orgChain.length - 1
                      ? "border-brand-500 bg-brand-50/40"
                      : "border-paper-200 bg-paper-50"
                  }`}
                >
                  <p className="text-[13px] font-semibold text-charcoal-900">{node.role}</p>
                  <p className="mt-0.5 text-[12px] text-ink-500">{node.who}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[11.5px] text-ink-500">
            Not fully confirmed by public sources: the exact reporting line between the Digital
            Money team and the Group Head of Digital Assets &amp; Currencies — a legitimate,
            interest-signalling question to ask directly.
          </p>
        </Card>
      </section>

      <section>
        <h2 className="mb-5 text-[18px] font-semibold text-charcoal-900">
          What kind of role is this?
        </h2>
        <Card>
          <p className="text-[13px] leading-relaxed text-charcoal-900">
            Closer to a portfolio owner than a delivery-focused PM. The mandate — strategy,
            commercialisation, RFP/deal solutioning, direct regulator engagement, media and
            thought leadership — is strategic and external-facing, not backlog-writing. The
            likely bind: high accountability without much direct authority. A &ldquo;Senior
            Product Manager&rdquo; title (versus a &ldquo;Head of&rdquo; title) at this grade
            usually signals a senior individual contributor who owns an outcome, not a team —
            worth confirming directly rather than assuming either way.
          </p>
          <div className="mt-4 grid grid-cols-1 gap-3 border-t border-paper-200 pt-4 sm:grid-cols-2">
            <div>
              <p className="text-[11.5px] font-semibold uppercase tracking-wide text-ink-400">
                Read as
              </p>
              <ul className="mt-1.5 space-y-1 text-[12.5px] text-charcoal-900">
                <li>Strategic, commercial, external-facing</li>
                <li>Cross-functional influence over Risk, Legal, Compliance, Engineering</li>
                <li>Accountable for outcomes, likely limited direct headcount</li>
              </ul>
            </div>
            <div>
              <p className="text-[11.5px] font-semibold uppercase tracking-wide text-ink-400">
                Soft skills that matter most
              </p>
              <ul className="mt-1.5 space-y-1 text-[12.5px] text-charcoal-900">
                <li>Influence without authority</li>
                <li>Executive / narrative communication</li>
                <li>Commercial and pricing judgment</li>
                <li>Calibrated risk judgment under ambiguity</li>
                <li>Diplomatic external (regulator) engagement</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      <section>
        <h2 className="mb-2 text-[18px] font-semibold text-charcoal-900">
          Global Head of Digital Money — career background
        </h2>
        <p className="mb-5 text-[13px] text-ink-500">
          20+ years of transaction-banking experience across HSBC, Citi and ANZ.
        </p>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Card>
            <CardHeader title="Career timeline" />
            <div className="relative space-y-4 pl-5">
              <div className="absolute left-[7px] top-1 bottom-1 w-px bg-paper-200" />
              {careerTimeline.map((stop) => (
                <div key={stop.role + stop.dates} className="relative">
                  <div className="absolute -left-5 top-1 h-2.5 w-2.5 rounded-full border-2 border-brand-500 bg-paper-0" />
                  <p className="text-[12.5px] font-semibold text-charcoal-900">{stop.role}</p>
                  <p className="text-[12px] font-medium text-brand-600">{stop.org}</p>
                  <p className="text-[11px] text-ink-500">{stop.dates}</p>
                  {stop.note && <p className="mt-1 text-[11.5px] text-ink-500">{stop.note}</p>}
                </div>
              ))}
            </div>
          </Card>

          <div className="flex flex-col gap-4">
            <Card>
              <CardHeader title="Education" />
              <ul className="space-y-1.5">
                {education.map((e) => (
                  <li key={e} className="text-[12.5px] text-charcoal-900">
                    {e}
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <CardHeader title="Public / industry appointments" />
              <ul className="space-y-2">
                {appointments.map((a) => (
                  <li key={a} className="text-[12px] leading-relaxed text-charcoal-900">
                    {a}
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <CardHeader title="Current focus (public profile)" />
              <div className="flex flex-wrap gap-1.5">
                {currentFocusTags.map((t) => (
                  <Badge key={t} tone="brand">
                    {t}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-5 text-[18px] font-semibold text-charcoal-900">
          HSBC — Hong Kong reach &amp; impact
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {hkStats.map((s) => (
            <Card key={s.label}>
              <p className="text-[22px] font-semibold tracking-tight text-brand-600 tabular-nums">
                {s.value}
              </p>
              <p className="mt-1.5 text-[12px] text-ink-500">{s.label}</p>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-5 text-[18px] font-semibold text-charcoal-900">Global scale</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {globalStats.map((s) => (
            <Card key={s.label}>
              <p className="text-[22px] font-semibold tracking-tight text-charcoal-900 tabular-nums">
                {s.value}
              </p>
              <p className="mt-1.5 text-[12px] text-ink-500">{s.label}</p>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-5 text-[18px] font-semibold text-charcoal-900">Recent HSBC news</h2>
        <Card>
          <ul className="space-y-2.5">
            {recentNews.map((n) => (
              <li key={n} className="flex items-start gap-2.5 text-[12.5px] leading-relaxed text-charcoal-900">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-500" />
                {n}
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <section>
        <h2 className="mb-5 text-[18px] font-semibold text-charcoal-900">Stated values</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <Card key={v.title} className="border-l-4 border-l-brand-500">
              <p className="text-[13px] font-semibold text-charcoal-900">{v.title}</p>
              <p className="mt-1 text-[12px] text-ink-500">{v.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-5 text-[18px] font-semibold text-charcoal-900">Strategy pillars</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {strategyPillars.map((p) => (
            <Card key={p.title}>
              <p className="text-[13px] font-semibold text-charcoal-900">{p.title}</p>
              <p className="mt-1 text-[12.5px] leading-relaxed text-ink-500">{p.description}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
