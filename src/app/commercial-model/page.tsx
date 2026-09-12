import { AlertTriangle, Calculator, Coins, MessageSquareText, Octagon, TrendingDown } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { TermsOnThisPage } from "@/components/ui/TermsOnThisPage";
import { Card, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import {
  businessCase,
  cfoQuestions,
  killCriteria,
  pricingApproaches,
  revenueLines,
  sensitivities,
  unitEconomics,
} from "@/lib/mock/commercialModel";

const dependabilityTone = {
  Predictable: "emerald",
  "Volume-linked": "blue",
  "Rate-sensitive": "amber",
} as const;

const severityTone = {
  Critical: "rose",
  Material: "amber",
  Manageable: "neutral",
} as const;

export default function CommercialModelPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="Why this approach"
        title="How this actually makes money"
        description="The job description leads with commercialisation and go-to-market strategy. This is the business case: where the revenue comes from, what it costs to run, what breaks it, and what would make me stop."
      />

      <TermsOnThisPage terms={["Treasurer", "Nostro account", "Cut-off time", "RM", "RFP", "Go/no-go gate"]} />

      <div className="flex items-start gap-3 rounded-xl border border-amber-100 bg-amber-100/30 px-4 py-3.5">
        <AlertTriangle size={16} className="mt-0.5 shrink-0 text-amber-600" />
        <p className="text-[12.5px] leading-relaxed text-charcoal-900">
          All figures are illustrative and internally consistent for this case study. They are
          not HSBC numbers and are not a forecast. What matters is the shape of the reasoning —
          say this out loud before walking anyone through the numbers.
        </p>
      </div>

      <section>
        <Card className="border-brand-100 bg-brand-50/30">
          <div className="flex items-start gap-3">
            <Coins size={18} className="mt-0.5 shrink-0 text-brand-600" />
            <div>
              <p className="text-[13px] font-semibold text-charcoal-900">
                The one insight to lead with
              </p>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-700">
                A tokenised treasury product does not make its money on transaction fees. In the
                worked example below, fees contribute about{" "}
                <strong className="font-semibold text-charcoal-900">US$86,000</strong> per client
                a year while retained deposit balances contribute about{" "}
                <strong className="font-semibold text-charcoal-900">US$450,000</strong> — roughly
                five times as much. The commercial purpose of the product is to attract and
                defend operating balances. Everything about how you price it follows from that,
                and most candidates miss it entirely.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section>
        <div className="mb-4">
          <h2 className="text-[18px] font-semibold text-charcoal-900">Where the revenue comes from</h2>
          <p className="mt-1 max-w-3xl text-[12.5px] leading-relaxed text-ink-500">
            Five lines, and they behave very differently. Knowing which are predictable, which
            follow client volume and which follow interest rates is the difference between a
            business case and a wish.
          </p>
        </div>

        <div className="space-y-3">
          {revenueLines.map((line) => (
            <Card key={line.line}>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-[13.5px] font-semibold text-charcoal-900">{line.line}</p>
                  <Badge tone={dependabilityTone[line.dependability]}>{line.dependability}</Badge>
                </div>
                <p className="text-[12.5px] font-semibold tabular-nums text-brand-600">
                  {line.illustrative}
                </p>
              </div>
              <p className="mt-2 text-[12.5px] leading-relaxed text-ink-700">{line.how}</p>
              <p className="mt-2 rounded-lg bg-paper-50 px-3 py-2 text-[12px] leading-relaxed text-charcoal-900">
                {line.note}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1fr_1fr]">
        <Card padded={false}>
          <div className="p-5 pb-0">
            <CardHeader
              title="Unit economics per anchor client"
              subtitle="One mid-size multinational, eight entities, four markets"
            />
          </div>
          <div className="px-5 pb-5">
            <table className="w-full border-collapse text-left text-[12.5px]">
              <tbody>
                {unitEconomics.map((row) => (
                  <tr
                    key={row.item}
                    className={cn(
                      "border-b border-paper-100 last:border-0",
                      row.kind === "total" && "border-t-2 border-t-paper-200 font-semibold"
                    )}
                  >
                    <td
                      className={cn(
                        "py-3 pr-4 leading-relaxed",
                        row.kind === "total" ? "text-charcoal-900" : "text-ink-700"
                      )}
                    >
                      {row.item}
                    </td>
                    <td
                      className={cn(
                        "py-3 text-right tabular-nums",
                        row.kind === "revenue" && "text-emerald-600",
                        row.kind === "cost" && "text-rose-600",
                        row.kind === "total" && "text-charcoal-900"
                      )}
                    >
                      {row.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-2">
            <Calculator size={17} className="text-brand-600" />
            <CardHeader title="The investment ask and payback" />
          </div>
          <dl className="space-y-3 text-[12.5px]">
            <div>
              <dt className="font-semibold text-charcoal-900">Build: {businessCase.buildInvestment}</dt>
              <dd className="mt-0.5 leading-relaxed text-ink-500">{businessCase.buildDetail}</dd>
            </div>
            <div>
              <dt className="font-semibold text-charcoal-900">Run: {businessCase.annualRunCost}</dt>
              <dd className="mt-0.5 leading-relaxed text-ink-500">{businessCase.runDetail}</dd>
            </div>
          </dl>

          <div className="mt-4 grid grid-cols-2 gap-3 border-t border-paper-200 pt-4">
            <div className="rounded-lg bg-paper-50 px-3 py-2.5">
              <p className="text-[10.5px] font-semibold uppercase tracking-wide text-ink-400">
                Covers run cost
              </p>
              <p className="mt-1 text-[15px] font-semibold text-charcoal-900">
                {businessCase.breakEvenRunOnly}
              </p>
            </div>
            <div className="rounded-lg bg-brand-50/60 px-3 py-2.5">
              <p className="text-[10.5px] font-semibold uppercase tracking-wide text-brand-600">
                Full payback over 3 years
              </p>
              <p className="mt-1 text-[15px] font-semibold text-charcoal-900">
                {businessCase.breakEvenFull}
              </p>
            </div>
          </div>
          <p className="mt-3 text-[12px] leading-relaxed text-ink-700">
            {businessCase.breakEvenDetail}
          </p>
        </Card>
      </section>

      <section>
        <div className="mb-4 flex items-center gap-2">
          <TrendingDown size={18} className="text-brand-500" />
          <div>
            <h2 className="text-[18px] font-semibold text-charcoal-900">What breaks this case</h2>
            <p className="mt-0.5 text-[12.5px] text-ink-500">
              Volunteering these before you are asked is what makes the rest of the numbers
              believable.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {sensitivities.map((item) => (
            <Card
              key={item.scenario}
              className={item.severity === "Critical" ? "border-l-4 border-l-rose-400" : undefined}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <p className="text-[13.5px] font-semibold text-charcoal-900">{item.scenario}</p>
                <Badge tone={severityTone[item.severity]}>{item.severity}</Badge>
              </div>
              <p className="mt-1.5 text-[12px] font-medium text-ink-500">{item.change}</p>
              <p className="mt-2 text-[12.5px] leading-relaxed text-ink-700">{item.effect}</p>
              <p className="mt-2.5 rounded-lg bg-paper-50 px-3 py-2 text-[12px] leading-relaxed text-brand-600">
                <strong className="font-semibold">So what:</strong> {item.soWhat}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4">
          <h2 className="text-[18px] font-semibold text-charcoal-900">How you would price it</h2>
          <p className="mt-1 max-w-3xl text-[12.5px] leading-relaxed text-ink-500">
            Three approaches, with a clear recommendation. Being able to say why you rejected
            the other two is worth more than the recommendation itself.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {pricingApproaches.map((item) => (
            <Card
              key={item.approach}
              className={item.recommended ? "border-brand-300 bg-brand-50/25 ring-1 ring-brand-100" : undefined}
            >
              <div className="flex items-start justify-between gap-2">
                <p className="text-[13.5px] font-semibold text-charcoal-900">{item.approach}</p>
                {item.recommended && <Badge tone="brand">Recommended</Badge>}
              </div>
              <p className="mt-1.5 text-[12px] leading-relaxed text-ink-700">{item.how}</p>

              <p className="mt-3 text-[10.5px] font-semibold uppercase tracking-wide text-emerald-700">
                For
              </p>
              <ul className="mt-1 space-y-1">
                {item.pros.map((p) => (
                  <li key={p} className="text-[12px] leading-relaxed text-charcoal-900">
                    + {p}
                  </li>
                ))}
              </ul>

              <p className="mt-2.5 text-[10.5px] font-semibold uppercase tracking-wide text-amber-700">
                Against
              </p>
              <ul className="mt-1 space-y-1">
                {item.cons.map((c) => (
                  <li key={c} className="text-[12px] leading-relaxed text-charcoal-900">
                    − {c}
                  </li>
                ))}
              </ul>

              <p className="mt-3 border-t border-paper-100 pt-2.5 text-[12px] leading-relaxed text-brand-600">
                {item.verdict}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center gap-2">
          <MessageSquareText size={18} className="text-brand-500" />
          <h2 className="text-[18px] font-semibold text-charcoal-900">
            The four questions a finance director will ask
          </h2>
        </div>
        <div className="space-y-3">
          {cfoQuestions.map((item) => (
            <Card key={item.question}>
              <p className="text-[13px] font-semibold text-charcoal-900">{item.question}</p>
              <p className="mt-2 text-[12.5px] leading-relaxed text-ink-700">{item.answer}</p>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <Card className="border-charcoal-900 bg-charcoal-950">
          <div className="flex items-start gap-3">
            <Octagon size={18} className="mt-0.5 shrink-0 text-brand-400" />
            <div>
              <p className="text-[13px] font-semibold text-paper-0">What would make me stop</p>
              <p className="mt-1 text-[12px] leading-relaxed text-ink-400">
                Naming your own kill criteria unprompted is one of the strongest senior signals
                available in an interview. It says you own an outcome, not a project.
              </p>
              <ul className="mt-3 space-y-2">
                {killCriteria.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[12.5px] leading-relaxed text-paper-100">
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
