import { Bot, Sparkles, ShieldAlert } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardHeader } from "@/components/ui/Card";
import { aiInDomain, aiPrepPrinciples, aiPrepUseCases } from "@/lib/mock/aiPrep";

export default function AiPreparationPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="Study Materials"
        title="Using AI to prepare — and AI in the role itself"
        description="Two different things worth separating: how AI tools can help you prepare for an interview like this one, and how AI/agentic technology actually shows up in the digital-currencies product domain this role covers."
      />

      <section>
        <div className="mb-1 flex items-center gap-2">
          <Sparkles size={18} className="text-brand-500" />
          <h2 className="text-[18px] font-semibold text-charcoal-900">How AI can help you prepare</h2>
        </div>
        <p className="mb-5 text-[13px] text-ink-500">
          This entire site — the working prototype, the diagrams, the research behind the
          Ecosystem and Company Notes pages — was built this way. It&apos;s a reasonable
          demonstration of the approach, not just a claim about it.
        </p>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {aiPrepUseCases.map((u) => (
            <Card key={u.title}>
              <p className="text-[13px] font-semibold text-charcoal-900">{u.title}</p>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-700">{u.description}</p>
              {u.caution && (
                <p className="mt-2.5 rounded-lg bg-amber-100/40 px-3 py-2 text-[12px] leading-relaxed text-amber-500">
                  <strong className="font-semibold">Caution:</strong> {u.caution}
                </p>
              )}
            </Card>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-1 flex items-center gap-2">
          <ShieldAlert size={18} className="text-brand-500" />
          <h2 className="text-[18px] font-semibold text-charcoal-900">Principles for using it well</h2>
        </div>
        <Card>
          <ul className="space-y-2.5">
            {aiPrepPrinciples.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-[12.5px] leading-relaxed text-ink-700">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-500" />
                {p}
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <section>
        <div className="mb-1 flex items-center gap-2">
          <Bot size={18} className="text-brand-500" />
          <h2 className="text-[18px] font-semibold text-charcoal-900">AI &amp; agentic technology in this product domain</h2>
        </div>
        <p className="mb-5 text-[13px] text-ink-500">
          This JD explicitly names AI/ML and agentic payments as a technology area — worth being
          able to speak to it as a control and product-design question, not just a buzzword.
        </p>
        <div className="space-y-3">
          {aiInDomain.map((t) => (
            <Card key={t.topic}>
              <p className="text-[13px] font-semibold text-charcoal-900">{t.topic}</p>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-700">{t.explanation}</p>
            </Card>
          ))}
        </div>
      </section>

      <Card className="bg-charcoal-950 border-charcoal-900">
        <CardHeader title="The honest version" />
        <p className="text-[12.5px] leading-relaxed text-paper-100">
          If asked directly whether you used AI to prepare or to build a supporting artifact, say
          so plainly rather than implying otherwise — most senior interviewers today are far more
          interested in how you used the tool and what judgment you applied on top of it, than in
          whether you used one at all.
        </p>
      </Card>
    </div>
  );
}
