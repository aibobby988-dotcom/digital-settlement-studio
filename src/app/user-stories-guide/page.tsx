import Link from "next/link";
import { AlertTriangle, ArrowRight, CheckCircle2, Layers, XCircle } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardHeader } from "@/components/ui/Card";
import {
  acFormats,
  commonMistakes,
  investPrinciples,
  storyStructure,
  worstBestExamples,
} from "@/lib/mock/userStoryGuide";

export default function UserStoriesGuidePage() {
  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="Study Materials"
        title="Writing user stories & acceptance criteria"
        description="The craft behind the Delivery Backlog page — how to write a story that's actually ready to build, not just a sentence with 'As a user' at the front."
      />

      <section>
        <div className="mb-1 flex items-center gap-2">
          <Layers size={18} className="text-brand-500" />
          <h2 className="text-[18px] font-semibold text-charcoal-900">Structure: As a / I want / so that</h2>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {storyStructure.map((s) => (
            <Card key={s.part}>
              <p className="font-mono text-[13px] font-semibold text-brand-600">{s.part}</p>
              <p className="mt-2 text-[12.5px] leading-relaxed text-ink-700">{s.purpose}</p>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-5 text-[18px] font-semibold text-charcoal-900">
          INVEST — what makes a story ready
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {investPrinciples.map((p) => (
            <Card key={p.letter} className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-charcoal-900 text-[14px] font-bold text-brand-400">
                {p.letter}
              </div>
              <div>
                <p className="text-[12.5px] font-semibold text-charcoal-900">{p.word}</p>
                <p className="mt-0.5 text-[12px] leading-relaxed text-ink-500">{p.explanation}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-5 text-[18px] font-semibold text-charcoal-900">Weak vs. strong — a worked example</h2>
        {worstBestExamples.map((ex) => (
          <Card key={ex.title}>
            <CardHeader title={ex.title} />
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div className="rounded-lg border border-rose-100 bg-rose-100/20 p-4">
                <div className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-rose-600">
                  <XCircle size={13} />
                  Weak
                </div>
                <p className="text-[12.5px] italic text-charcoal-900">&ldquo;{ex.weak}&rdquo;</p>
                <ul className="mt-3 space-y-1.5">
                  {ex.weakProblems.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-[11.5px] leading-relaxed text-ink-700">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-rose-500" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-emerald-100 bg-emerald-100/20 p-4">
                <div className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-emerald-600">
                  <CheckCircle2 size={13} />
                  Strong
                </div>
                <p className="text-[12.5px] italic text-charcoal-900">&ldquo;{ex.strong}&rdquo;</p>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-ink-400">
                  Acceptance criteria
                </p>
                <ul className="mt-1.5 space-y-1.5">
                  {ex.strongCriteria.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-[11.5px] leading-relaxed text-charcoal-900">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-500" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}
        <p className="mt-3 text-[12px] text-ink-500">
          This exact story (DST-202) appears in full on the{" "}
          <Link href="/backlog" className="font-medium text-brand-600">
            Delivery Backlog
          </Link>{" "}
          page, alongside 23 others written the same way.
        </p>
      </section>

      <section>
        <h2 className="mb-5 text-[18px] font-semibold text-charcoal-900">Two acceptance-criteria formats</h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {acFormats.map((f) => (
            <Card key={f.name}>
              <p className="text-[13px] font-semibold text-charcoal-900">{f.name}</p>
              <p className="mt-1.5 text-[12px] leading-relaxed text-ink-500">{f.when}</p>
              <pre className="mt-3 overflow-x-auto rounded-lg bg-charcoal-950 p-3 font-mono text-[11px] leading-relaxed text-paper-100">
{f.example}
              </pre>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-1 flex items-center gap-2">
          <AlertTriangle size={18} className="text-brand-500" />
          <h2 className="text-[18px] font-semibold text-charcoal-900">Common mistakes</h2>
        </div>
        <div className="mt-4 space-y-3">
          {commonMistakes.map((m) => (
            <Card key={m.mistake} className="flex items-start gap-3">
              <ArrowRight size={15} className="mt-0.5 shrink-0 text-brand-500" />
              <div>
                <p className="text-[12.5px] font-semibold text-charcoal-900">{m.mistake}</p>
                <p className="mt-1 text-[12px] leading-relaxed text-ink-500">{m.fix}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
