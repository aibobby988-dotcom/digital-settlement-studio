import { Bot, Info, ShieldCheck, MessageSquareText } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { MandateDemo } from "@/components/demo/MandateDemo";
import { Badge } from "@/components/ui/Badge";
import { Explain } from "@/components/ui/Explain";
import { aiControls, aiInterviewAngles, aiUseCases } from "@/lib/mock/aiInProduct";

const maturityTone = {
  "Deployable today": "emerald",
  "Near term": "blue",
  Exploratory: "amber",
} as const;

export default function AiInProductPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="The product"
        title="Artificial intelligence in this product"
        description="The job description names AI and machine learning under Technology savvy, and calls out agentic payments in wholesale transaction banking as a strong advantage. This page is the answer to 'where does AI actually fit, and what would you refuse to let it do?'"
      />

      <div className="flex items-start gap-3 rounded-xl border border-brand-100 bg-brand-50/40 px-4 py-3.5">
        <Bot size={16} className="mt-0.5 shrink-0 text-brand-600" />
        <p className="text-[12.5px] leading-relaxed text-charcoal-900">
          <strong className="font-semibold">The one line to lead with:</strong> artificial
          intelligence prepares the evidence; a human or a pre-authorised mandate approves the
          movement of money. Say this before describing any use case and most risk objections
          are answered before they are raised.
        </p>
      </div>

      <section>
        <MandateDemo />
      </section>

      <section>
        <div className="mb-4">
          <h2 className="text-[18px] font-semibold text-charcoal-900">
            Where it genuinely helps
          </h2>
          <p className="mt-1 max-w-3xl text-[12.5px] leading-relaxed text-ink-500">
            Ordered from safest to most speculative, because the credible position in a bank is
            to start where a mistake is recoverable. Each one states what a human still owns —
            that boundary is the product decision, not a technical detail.
          </p>
        </div>

        <div className="space-y-4">
          {aiUseCases.map((item, index) => (
            <Card key={item.area}>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-paper-100 text-[11px] font-semibold text-ink-600">
                    {index + 1}
                  </span>
                  <h3 className="text-[14px] font-semibold text-charcoal-900">{item.area}</h3>
                </div>
                <Badge tone={maturityTone[item.maturity]}>{item.maturity}</Badge>
              </div>

              <p className="mt-3 text-[12.5px] leading-relaxed text-ink-700">{item.whatItDoes}</p>

              <div className="mt-3 rounded-xl bg-paper-50 px-3.5 py-3">
                <p className="text-[10.5px] font-semibold uppercase tracking-wide text-ink-400">
                  Concrete example
                </p>
                <p className="mt-1 text-[12px] leading-relaxed text-charcoal-900">{item.example}</p>
              </div>

              <div className="mt-3 grid gap-3 lg:grid-cols-2">
                <div className="rounded-xl border border-emerald-100 bg-emerald-50/40 p-3.5">
                  <p className="text-[10.5px] font-semibold uppercase tracking-wide text-emerald-700">
                    The value
                  </p>
                  <p className="mt-1.5 text-[12px] leading-relaxed text-charcoal-900">{item.value}</p>
                </div>
                <div className="rounded-xl border border-amber-100 bg-amber-50/40 p-3.5">
                  <p className="text-[10.5px] font-semibold uppercase tracking-wide text-amber-700">
                    The risk, and how it is contained
                  </p>
                  <p className="mt-1.5 text-[12px] leading-relaxed text-charcoal-900">{item.risk}</p>
                </div>
              </div>

              <div className="mt-3 flex gap-2.5 border-t border-paper-100 pt-3">
                <ShieldCheck size={15} className="mt-0.5 shrink-0 text-brand-600" />
                <p className="text-[12px] leading-relaxed text-ink-700">
                  <strong className="font-semibold text-charcoal-900">
                    What a human still owns:
                  </strong>{" "}
                  {item.humanBoundary}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4">
          <h2 className="text-[18px] font-semibold text-charcoal-900">
            The control framework that makes it acceptable
          </h2>
          <p className="mt-1 max-w-3xl text-[12.5px] leading-relaxed text-ink-500">
            Any of the above is only viable inside a bank if these hold. Being able to recite
            this framework matters more than naming the models — it is what a{" "}
            <Explain t="NPA" /> committee will actually ask about.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {aiControls.map((item) => (
            <Card key={item.control}>
              <p className="text-[13px] font-semibold text-charcoal-900">{item.control}</p>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-700">{item.why}</p>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center gap-2">
          <MessageSquareText size={18} className="text-brand-500" />
          <h2 className="text-[18px] font-semibold text-charcoal-900">
            Questions you are likely to be asked
          </h2>
        </div>
        <div className="space-y-3">
          {aiInterviewAngles.map((item) => (
            <Card key={item.question}>
              <p className="text-[13px] font-semibold text-charcoal-900">{item.question}</p>
              <p className="mt-2 text-[12.5px] leading-relaxed text-ink-700">{item.answer}</p>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <Card className="border-blue-100 bg-blue-100/15">
          <div className="flex items-start gap-3">
            <Info size={16} className="mt-0.5 shrink-0 text-blue-600" />
            <div>
              <p className="text-[13px] font-semibold text-charcoal-900">
                Why this pairs with tokenised money rather than sitting beside it
              </p>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-700">
                Software agents need money that can move under rules, around the clock, with
                instant confirmation of whether it worked. A batch-based legacy rail with daily{" "}
                <Explain t="Cut-off time">cut-off times</Explain> cannot serve an agent acting at
                3am. That is the strongest long-term argument for tokenisation — not that it is
                faster, but that it is the only settlement layer software can actually operate on
                its own. If you want one forward-looking point to close on, this is it.
              </p>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
