import { CircleHelp, MessageSquareText, ShieldCheck, Target, TriangleAlert } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { TermsOnThisPage } from "@/components/ui/TermsOnThisPage";
import { Card, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  closingQuestions,
  experienceGapAnswer,
  preparedAnswers,
  vincentTests,
  whatTheyAreReallyHiring,
} from "@/lib/mock/vincentTests";

export default function VincentTestsPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="Study Materials · Private"
        title="The 45 minutes — what will actually be tested"
        description="Five things a Global Head of Digital Money is most likely to probe, with answers checked against the facts elsewhere on this site. Where a draft answer was imprecise, the correction is stated rather than smoothed over."
      />

      <TermsOnThisPage terms={["Tokenised deposit", "Stablecoin", "DvP", "PvP", "Legal finality", "Atomic settlement", "Herstatt risk"]} />

      <section>
        <Card className="border-brand-100 bg-brand-50/30">
          <div className="flex items-start gap-3">
            <Target size={18} className="mt-0.5 shrink-0 text-brand-600" />
            <div>
              <p className="text-[13px] font-semibold text-charcoal-900">
                What they are actually hiring for
              </p>
              <ul className="mt-2.5 grid gap-1.5 sm:grid-cols-2">
                {whatTheyAreReallyHiring.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-[12.5px] leading-relaxed text-charcoal-900"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </section>

      <section>
        <div className="mb-4">
          <h2 className="text-[18px] font-semibold text-charcoal-900">The five tests</h2>
          <p className="mt-1 max-w-3xl text-[12.5px] leading-relaxed text-ink-500">
            Each answer has been checked against the rest of the site. Read the &ldquo;watch
            out&rdquo; notes carefully — those are the places a confident-sounding answer is
            actually wrong.
          </p>
        </div>

        <div className="space-y-4">
          {vincentTests.map((t) => (
            <Card key={t.n}>
              <div className="flex gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-500 text-[12px] font-semibold text-paper-0">
                  {t.n}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-[14px] font-semibold text-charcoal-900">{t.test}</h3>
                  <p className="mt-1 text-[12px] leading-relaxed text-ink-500">{t.why}</p>
                </div>
              </div>

              <div className="mt-3.5 ml-10 rounded-xl border border-brand-100 bg-paper-0 px-3.5 py-3">
                <p className="text-[10.5px] font-semibold uppercase tracking-wide text-brand-600">
                  Your answer
                </p>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-charcoal-900">{t.answer}</p>
              </div>

              <div className="ml-10 mt-2.5 flex gap-2.5 rounded-lg bg-paper-50 px-3 py-2">
                <ShieldCheck size={14} className="mt-0.5 shrink-0 text-emerald-600" />
                <p className="text-[11.5px] leading-relaxed text-ink-700">
                  <strong className="font-semibold text-charcoal-900">Fact-checked:</strong>{" "}
                  {t.checked}
                </p>
              </div>

              {t.watchOut && (
                <div className="ml-10 mt-2 flex gap-2.5 rounded-lg border border-amber-100 bg-amber-50/50 px-3 py-2.5">
                  <TriangleAlert size={14} className="mt-0.5 shrink-0 text-amber-600" />
                  <p className="text-[12px] leading-relaxed text-charcoal-900">
                    <strong className="font-semibold">Watch out:</strong> {t.watchOut}
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center gap-2">
          <MessageSquareText size={18} className="text-brand-500" />
          <h2 className="text-[18px] font-semibold text-charcoal-900">
            Prepared answers to the predictable questions
          </h2>
        </div>
        <div className="space-y-3">
          {preparedAnswers.map((a) => (
            <Card key={a.question}>
              <p className="text-[13px] font-semibold text-charcoal-900">{a.question}</p>
              <p className="mt-2 text-[12.5px] leading-relaxed text-ink-700">{a.answer}</p>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <Card className="border-l-4 border-l-amber-400">
          <p className="text-[13px] font-semibold text-charcoal-900">
            {experienceGapAnswer.question}
          </p>
          <p className="mt-2 text-[12.5px] italic leading-relaxed text-charcoal-900">
            &ldquo;{experienceGapAnswer.answer}&rdquo;
          </p>
          <p className="mt-2.5 rounded-lg bg-paper-50 px-3 py-2 text-[12px] leading-relaxed text-brand-600">
            <strong className="font-semibold">Why it works:</strong>{" "}
            {experienceGapAnswer.whyItWorks}
          </p>
        </Card>
      </section>

      <section>
        <div className="mb-4 flex items-center gap-2">
          <CircleHelp size={18} className="text-brand-500" />
          <h2 className="text-[18px] font-semibold text-charcoal-900">What to ask him</h2>
        </div>
        <div className="space-y-3">
          {closingQuestions.map((q) => (
            <Card key={q.q}>
              <div className="flex flex-wrap items-start justify-between gap-2">
                <p className="max-w-2xl text-[13px] font-semibold text-charcoal-900">{q.q}</p>
                <Badge tone="neutral">Ask this</Badge>
              </div>
              <p className="mt-1.5 text-[12px] leading-relaxed text-ink-700">{q.why}</p>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <Card className="border-charcoal-900 bg-charcoal-950">
          <CardHeader title="The sentence that ties it all together" />
          <p className="text-[14px] italic leading-relaxed text-paper-0">
            &ldquo;The Tokenised Deposit Service is the digital-cash leg. Delivery-versus-payment
            and payment-versus-payment are the settlement models that use that digital cash to
            exchange safely against an asset or another currency.&rdquo;
          </p>
          <p className="mt-3 text-[12px] leading-relaxed text-ink-400">
            If the conversation drifts, come back to this. It shows the product, the two
            settlement models and the organisational boundary in one sentence.
          </p>
        </Card>
      </section>
    </div>
  );
}
