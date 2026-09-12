import { AlertTriangle, EyeOff, Link2, Sparkles, Target, TriangleAlert } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  cvRoles,
  cvToSiteBridge,
  gaps,
  narrativeArc,
  starSeeds,
  strengths,
} from "@/lib/mock/cvAlignment";

const severityTone = {
  "Will decide the outcome": "rose",
  "Will be probed": "amber",
  Minor: "neutral",
} as const;

export default function CvAlignmentPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="Study Materials · Private"
        title="Your CV against this job description"
        description="What to lead with, what will be probed, and how to answer the three things that could actually decide the outcome. Drawn entirely from your CV — nothing here is invented, and nothing here should be claimed if it is not true."
      />

      <div className="flex items-start gap-3 rounded-xl border border-rose-100 bg-rose-50/50 px-4 py-3.5">
        <EyeOff size={16} className="mt-0.5 shrink-0 text-rose-600" />
        <p className="text-[12.5px] leading-relaxed text-charcoal-900">
          <strong className="font-semibold">Private preparation — never screen-share this page.</strong>{" "}
          It contains your personal career history and a frank assessment of your weaknesses. It
          is written to be useful to you, not flattering.
        </p>
      </div>

      <section>
        <Card className="border-brand-100 bg-brand-50/30">
          <div className="flex items-start gap-3">
            <Sparkles size={18} className="mt-0.5 shrink-0 text-brand-600" />
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-600">
                {narrativeArc.headline}
              </p>
              <p className="mt-2 text-[13px] italic leading-relaxed text-charcoal-900">
                &ldquo;{narrativeArc.story}&rdquo;
              </p>
              <p className="mt-3 border-t border-brand-100 pt-3 text-[12px] leading-relaxed text-ink-700">
                <strong className="font-semibold text-charcoal-900">Why this works:</strong>{" "}
                {narrativeArc.whyItWorks}
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section>
        <div className="mb-4 flex items-center gap-2">
          <Target size={18} className="text-brand-500" />
          <div>
            <h2 className="text-[18px] font-semibold text-charcoal-900">
              Your six strongest cards, in the order to play them
            </h2>
            <p className="mt-0.5 text-[12.5px] text-ink-500">
              Ranked by how rare each is among the other people interviewing for this role.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {strengths.map((s) => (
            <Card key={s.claim} className={s.rank <= 2 ? "border-brand-200 bg-brand-50/20" : undefined}>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex max-w-2xl gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500 text-[11px] font-semibold text-paper-0">
                    {s.rank}
                  </span>
                  <h3 className="text-[13.5px] font-semibold text-charcoal-900">{s.claim}</h3>
                </div>
                <Badge tone="brand">{s.jdRefs}</Badge>
              </div>

              <ul className="mt-3 space-y-1.5 pl-9">
                {s.evidence.map((e) => (
                  <li key={e} className="flex items-start gap-2 text-[12px] leading-relaxed text-ink-700">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink-400" />
                    {e}
                  </li>
                ))}
              </ul>

              <p className="mt-3 ml-9 rounded-lg bg-paper-50 px-3 py-2.5 text-[12px] leading-relaxed text-charcoal-900">
                <strong className="font-semibold">How to use it:</strong> {s.howToUseIt}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center gap-2">
          <TriangleAlert size={18} className="text-rose-500" />
          <div>
            <h2 className="text-[18px] font-semibold text-charcoal-900">
              The gaps — and exactly how to answer each one
            </h2>
            <p className="mt-0.5 max-w-3xl text-[12.5px] text-ink-500">
              This is the most valuable section on the page. Three of these could decide the
              outcome, and all three are survivable if you address them before you are asked.
              None of them are survivable if you bluff.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {gaps.map((g) => (
            <Card
              key={g.gap}
              className={
                g.severity === "Will decide the outcome" ? "border-l-4 border-l-rose-400" : undefined
              }
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="text-[13.5px] font-semibold text-charcoal-900">{g.gap}</h3>
                <Badge tone={severityTone[g.severity]}>{g.severity}</Badge>
              </div>
              <p className="mt-1 text-[11.5px] font-medium text-brand-600">{g.jdRef}</p>

              <div className="mt-3 grid gap-3 lg:grid-cols-2">
                <div className="rounded-xl border border-rose-100 bg-rose-50/40 p-3.5">
                  <p className="text-[10.5px] font-semibold uppercase tracking-wide text-rose-700">
                    The honest problem
                  </p>
                  <p className="mt-1.5 text-[12px] leading-relaxed text-charcoal-900">{g.theProblem}</p>
                </div>
                <div className="rounded-xl border border-emerald-100 bg-emerald-50/40 p-3.5">
                  <p className="text-[10.5px] font-semibold uppercase tracking-wide text-emerald-700">
                    What you genuinely do have
                  </p>
                  <p className="mt-1.5 text-[12px] leading-relaxed text-charcoal-900">
                    {g.whatYouDoHave}
                  </p>
                </div>
              </div>

              <div className="mt-3 flex gap-2.5 rounded-xl border border-brand-100 bg-paper-0 px-3.5 py-3">
                <AlertTriangle size={15} className="mt-0.5 shrink-0 text-brand-600" />
                <p className="text-[12.5px] leading-relaxed text-charcoal-900">
                  <strong className="font-semibold">How to answer it:</strong> {g.howToAnswer}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4">
          <h2 className="text-[18px] font-semibold text-charcoal-900">
            Behavioural questions — which part of your CV to reach for
          </h2>
          <p className="mt-1 max-w-3xl text-[12.5px] text-ink-500">
            These point at real material from your career. Write the actual story yourself — the
            specifics have to be true, and only you know them.
          </p>
        </div>

        <div className="space-y-3">
          {starSeeds.map((seed) => (
            <Card key={seed.competency}>
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-[13px] font-semibold text-charcoal-900">{seed.competency}</p>
              </div>
              <p className="mt-2 text-[12.5px] italic leading-relaxed text-ink-700">
                &ldquo;{seed.likelyQuestion}&rdquo;
              </p>
              <p className="mt-2.5 text-[12px] leading-relaxed text-charcoal-900">
                <strong className="font-semibold">Material to use:</strong> {seed.cvMaterial}
              </p>
              <p className="mt-2 rounded-lg bg-paper-50 px-3 py-2 text-[12px] leading-relaxed text-brand-600">
                <strong className="font-semibold">What to emphasise:</strong> {seed.whatToEmphasise}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <Card padded={false}>
          <div className="p-5 pb-0">
            <CardHeader
              title="Your career, and what each role proves"
              subtitle="Every line below is from your CV — use it to keep dates and numbers exact under pressure"
            />
          </div>
          <div className="space-y-4 px-5 pb-5">
            {cvRoles.map((role) => (
              <div key={role.org} className="rounded-xl border border-paper-200 p-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <p className="text-[13.5px] font-semibold text-charcoal-900">{role.org}</p>
                    <p className="text-[12px] font-medium text-brand-600">{role.title}</p>
                  </div>
                  <p className="text-[11.5px] text-ink-500">{role.dates}</p>
                </div>
                <ul className="mt-2.5 space-y-1.5">
                  {role.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-[12px] leading-relaxed text-ink-700">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink-400" />
                      {h}
                    </li>
                  ))}
                </ul>
                <p className="mt-2.5 rounded-lg bg-paper-50 px-3 py-2 text-[12px] leading-relaxed text-charcoal-900">
                  <strong className="font-semibold">Against the posting:</strong> {role.jdRelevance}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section>
        <Card className="border-charcoal-900 bg-charcoal-950">
          <div className="flex items-start gap-3">
            <Link2 size={17} className="mt-0.5 shrink-0 text-brand-400" />
            <div>
              <p className="text-[13px] font-semibold text-paper-0">
                How the CV and this case study work together
              </p>
              <ul className="mt-3 space-y-2">
                {cvToSiteBridge.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[12.5px] leading-relaxed text-paper-100"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
