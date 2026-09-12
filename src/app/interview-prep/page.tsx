import { HelpCircle, ListChecks, Info, Sparkles, MessageCircleQuestion } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SupersededNotice } from "@/components/ui/SupersededNotice";
import { Card, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { caseStudyQA, logisticsNotes, questionsToAsk, quickFacts } from "@/lib/mock/interviewPrep";
import { behavioralGeneralAdvice, behavioralQuestions } from "@/lib/mock/behavioralPrep";

export default function InterviewPrepPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="Study Materials"
        title="Interview prep"
        description="Defending the case study, likely behavioral questions, questions worth asking, and logistics — written to be reusable by anyone preparing for a senior digital-currencies product interview, not only the author."
      />

      <SupersededNotice what="Broader preparation material — behavioural questions, questions to ask, logistics. The five things most likely to be tested, with fact-checked answers, now live on The 45 Minutes. Read that first, then use this for breadth." insteadHref="/vincent-tests" insteadLabel="The 45 Minutes" />

      <div className="flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-100/20 px-4 py-3.5">
        <Info size={16} className="mt-0.5 shrink-0 text-blue-600" />
        <p className="text-[12.5px] leading-relaxed text-charcoal-900">
          This page is public, like the rest of the case study — it&apos;s product reasoning and
          reusable frameworks, not personal information. The behavioral-question guidance below
          gives you the framework and what a strong answer demonstrates; it deliberately doesn&apos;t
          write out anyone&apos;s actual personal story — that&apos;s real career history, and stays
          in a private document, not published here.
        </p>
      </div>

      <section>
        <div className="mb-1 flex items-center gap-2">
          <HelpCircle size={18} className="text-brand-500" />
          <h2 className="text-[18px] font-semibold text-charcoal-900">Defending the case study</h2>
        </div>
        <p className="mb-5 text-[13px] text-ink-500">
          Questions a sharp interviewer is likely to ask about the product itself. Answer in your
          own words — don&apos;t recite these.
        </p>
        <div className="space-y-6">
          {caseStudyQA.map((cat) => (
            <div key={cat.category}>
              <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-wide text-ink-400">
                {cat.category}
              </p>
              <div className="space-y-3">
                {cat.items.map((qa) => (
                  <Card key={qa.question} className="print-break">
                    <p className="text-[13px] font-semibold text-charcoal-900">Q: {qa.question}</p>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-ink-700">{qa.answer}</p>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-1 flex items-center gap-2">
          <MessageCircleQuestion size={18} className="text-brand-500" />
          <h2 className="text-[18px] font-semibold text-charcoal-900">Likely behavioral &amp; competency questions</h2>
        </div>
        <p className="mb-5 text-[13px] text-ink-500">
          What a senior product interview for this kind of role typically probes — the underlying
          competency each question tests, and a framework for a strong answer. Bring your own real
          story to each; a generic answer here reads exactly as generic as it is.
        </p>
        <div className="space-y-3">
          {behavioralQuestions.map((bq) => (
            <Card key={bq.question} className="print-break">
              <p className="text-[13px] font-semibold text-charcoal-900">Q: {bq.question}</p>
              <p className="mt-2 text-[11.5px] font-semibold uppercase tracking-wide text-ink-400">
                Tests
              </p>
              <p className="text-[12.5px] leading-relaxed text-ink-700">{bq.tests}</p>
              <p className="mt-2 text-[11.5px] font-semibold uppercase tracking-wide text-ink-400">
                Framework for a strong answer
              </p>
              <p className="text-[12.5px] leading-relaxed text-ink-700">{bq.framework}</p>
            </Card>
          ))}
        </div>
        <Card className="mt-4 bg-charcoal-950 border-charcoal-900">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-300">
            General advice across all of these
          </p>
          <ul className="mt-2.5 space-y-1.5">
            {behavioralGeneralAdvice.map((a) => (
              <li key={a} className="flex items-start gap-2 text-[12.5px] leading-relaxed text-paper-100">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-400" />
                {a}
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <section>
        <div className="mb-1 flex items-center gap-2">
          <ListChecks size={18} className="text-brand-500" />
          <h2 className="text-[18px] font-semibold text-charcoal-900">Questions to ask them</h2>
        </div>
        <p className="mb-5 text-[13px] text-ink-500">
          Ask 2–3 total, not all of them — pick ones that signal you&apos;ve thought about the
          organisational reality, not just the product.
        </p>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {questionsToAsk.map((group) => (
            <Card key={group.theme}>
              <CardHeader title={group.theme} />
              <ul className="space-y-2">
                {group.questions.map((q) => (
                  <li key={q} className="flex items-start gap-2 text-[12.5px] leading-relaxed text-charcoal-900">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-500" />
                    {q}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-1 flex items-center gap-2">
          <Sparkles size={18} className="text-brand-500" />
          <h2 className="text-[18px] font-semibold text-charcoal-900">Logistics notes</h2>
        </div>
        <Card>
          <ul className="space-y-2.5">
            {logisticsNotes.map((n) => (
              <li key={n} className="flex items-start gap-2.5 text-[12.5px] leading-relaxed text-ink-700">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink-400" />
                {n}
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <section>
        <h2 className="mb-5 text-[18px] font-semibold text-charcoal-900">Quick-facts cheat sheet</h2>
        <Card className="bg-charcoal-950 border-charcoal-900">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-300">
            The product, in one breath
          </p>
          <p className="mt-1.5 text-[13px] leading-relaxed text-paper-100">{quickFacts.pitch}</p>
        </Card>
        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Card>
            <CardHeader title="Phases (relative horizons)" />
            <ul className="space-y-1.5">
              {quickFacts.phases.map((p) => (
                <li key={p} className="text-[12.5px] text-charcoal-900">
                  {p}
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <CardHeader title="Go / no-go gates (every phase)" />
            <div className="flex flex-wrap gap-1.5">
              {quickFacts.gates.map((g) => (
                <Badge key={g} tone="neutral">
                  {g}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
        <Card className="mt-4">
          <CardHeader title="Verified real-world facts you can cite confidently" subtitle="All independently confirmed — not guesses" />
          <ul className="space-y-2">
            {quickFacts.verifiedFacts.map((f) => (
              <li key={f} className="flex items-start gap-2 text-[12.5px] leading-relaxed text-charcoal-900">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-500" />
                {f}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-[11.5px] leading-relaxed text-ink-500">
            If you misremember a date or detail live, say you&apos;d want to check the exact figure
            rather than guess — admitting uncertainty on a detail reads far better than confidently
            stating something wrong.
          </p>
        </Card>
      </section>
    </div>
  );
}
