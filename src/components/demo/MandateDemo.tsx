"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, Check, PlayCircle, RotateCcw, ShieldX, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader } from "@/components/ui/Card";
import { cn, formatCurrency } from "@/lib/utils";

/**
 * The agentic layer, demonstrated through the thing that actually matters in a
 * bank: the mandate that constrains the agent, not the agent's cleverness. The
 * blocked attempt is the point of the demo.
 */

const MANDATE = [
  { rule: "May fund only these entities", value: "Meridian Singapore, Meridian UK" },
  { rule: "Maximum per transaction", value: "USD 2,000,000" },
  { rule: "Maximum per day", value: "USD 3,000,000" },
  { rule: "Trigger", value: "Balance below USD 500,000" },
  { rule: "Revocable", value: "Instantly, by any authorised approver" },
];

type Outcome = "allowed" | "blocked";
interface Step {
  actor: "agent" | "mandate" | "ledger";
  text: string;
  outcome?: Outcome;
}

const scenarioAllowed: Step[] = [
  { actor: "agent", text: "Observed: Meridian Singapore at USD 380,000, below the trigger." },
  { actor: "agent", text: "Proposed action: fund USD 1,620,000 from the Hong Kong hub." },
  { actor: "mandate", text: "Beneficiary is on the permitted list.", outcome: "allowed" },
  { actor: "mandate", text: "USD 1,620,000 is within the USD 2,000,000 transaction limit.", outcome: "allowed" },
  { actor: "mandate", text: "Within the USD 3,000,000 daily limit.", outcome: "allowed" },
  { actor: "ledger", text: "Settled. Action attributed to mandate MND-2026-0114, not to the agent." },
];

const scenarioBlocked: Step[] = [
  { actor: "agent", text: "Observed: an invoice due to Apex Components, an external supplier." },
  { actor: "agent", text: "Proposed action: pay USD 840,000 to Apex Components." },
  { actor: "mandate", text: "Beneficiary is NOT on the permitted list.", outcome: "blocked" },
  { actor: "mandate", text: "Action refused. No value moved, and the agent cannot retry or appeal.", outcome: "blocked" },
  { actor: "ledger", text: "Refusal written to the audit trail with the rule that caused it." },
];

const actorMeta = {
  agent: { label: "Agent", icon: Bot, tone: "text-blue-600" },
  mandate: { label: "Mandate", icon: ShieldX, tone: "text-brand-600" },
  ledger: { label: "Ledger", icon: Check, tone: "text-emerald-600" },
} as const;

export function MandateDemo() {
  const [steps, setSteps] = useState<Step[]>([]);
  const [running, setRunning] = useState(false);
  const [mode, setMode] = useState<"allowed" | "blocked" | null>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  function reset() {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setSteps([]);
    setRunning(false);
    setMode(null);
  }

  function run(which: "allowed" | "blocked") {
    reset();
    setMode(which);
    setRunning(true);
    const script = which === "allowed" ? scenarioAllowed : scenarioBlocked;
    script.forEach((s, i) => {
      timers.current.push(
        setTimeout(() => {
          setSteps((prev) => [...prev, s]);
          if (i === script.length - 1) setRunning(false);
        }, (i + 1) * 900)
      );
    });
  }

  return (
    <div className="space-y-4">
      <Card className="border-charcoal-900 bg-charcoal-950">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <Badge tone="brand" className="bg-brand-500/10 text-brand-300 ring-brand-400/25">
              Forward look · agentic payments
            </Badge>
            <h2 className="mt-3 max-w-2xl text-[19px] font-semibold leading-snug text-paper-0">
              The mandate is the product, not the agent.
            </h2>
            <p className="mt-2 max-w-2xl text-[12.5px] leading-relaxed text-ink-400">
              The job description names agentic payments in wholesale transaction banking as a
              strong advantage. The interesting question is not whether software can initiate a
              payment — it is what stops it. Run the refused scenario second; it is the one worth
              talking about.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button size="sm" onClick={() => run("allowed")} disabled={running} icon={<PlayCircle size={14} />}>
              Within mandate
            </Button>
            <Button size="sm" variant="secondary" onClick={() => run("blocked")} disabled={running}>
              Outside mandate
            </Button>
            <Button size="sm" variant="secondary" onClick={reset} icon={<RotateCcw size={13} />}>
              Reset
            </Button>
          </div>
        </div>
      </Card>

      <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <Card>
          <CardHeader
            title="Mandate MND-2026-0114"
            subtitle="Granted by the client's authorised approver"
          />
          <dl className="space-y-2.5 text-[12.5px]">
            {MANDATE.map((m) => (
              <div
                key={m.rule}
                className="flex items-start justify-between gap-3 border-b border-paper-100 pb-2 last:border-0 last:pb-0"
              >
                <dt className="text-ink-500">{m.rule}</dt>
                <dd className="text-right font-medium text-charcoal-900">{m.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-3.5 flex gap-2.5 rounded-lg border border-brand-100 bg-brand-50/50 px-3 py-2.5">
            <UserCheck size={14} className="mt-0.5 shrink-0 text-brand-600" />
            <p className="text-[11.5px] leading-relaxed text-charcoal-900">
              A named human granted this and can revoke it instantly. Every action the agent takes
              is attributed to the mandate, so accountability never sits with the software.
            </p>
          </div>
        </Card>

        <Card padded={false}>
          <div className="flex items-center justify-between border-b border-paper-200 px-5 py-3">
            <p className="text-[12.5px] font-semibold text-charcoal-900">Decision trace</p>
            {mode && (
              <Badge tone={mode === "allowed" ? "emerald" : "rose"}>
                {mode === "allowed" ? "Executed within mandate" : "Refused — outside mandate"}
              </Badge>
            )}
          </div>
          <div className="min-h-[240px] px-5 py-4">
            {steps.length === 0 ? (
              <p className="py-10 text-center text-[12px] text-ink-400">
                Choose a scenario. The second one — outside mandate — is the answer to
                &ldquo;what stops the agent?&rdquo;
              </p>
            ) : (
              <ul className="space-y-3">
                {steps.map((s, i) => {
                  const meta = actorMeta[s.actor];
                  const Icon = meta.icon;
                  return (
                    <li key={i} className="flex gap-3">
                      <span
                        className={cn(
                          "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-paper-100",
                          s.outcome === "blocked" ? "text-rose-600" : meta.tone
                        )}
                      >
                        <Icon size={13} />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[10.5px] font-semibold uppercase tracking-wide text-ink-400">
                          {meta.label}
                        </p>
                        <p
                          className={cn(
                            "mt-0.5 text-[12.5px] leading-relaxed",
                            s.outcome === "blocked"
                              ? "font-medium text-rose-700"
                              : "text-charcoal-900"
                          )}
                        >
                          {s.text}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </Card>
      </div>

      <Card className="border-brand-100 bg-brand-50/30">
        <p className="text-[13px] font-semibold text-charcoal-900">
          What to say while this is on screen
        </p>
        <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-700">
          &ldquo;The agent proposed a perfectly sensible payment — an invoice genuinely was due.
          It was refused anyway, because the beneficiary was not on the mandate. That is the
          design point: the agent does not get to decide what is reasonable. A human set the
          boundary in advance, the boundary is machine-enforced, and the refusal is auditable.
          Tokenised deposits matter here because a mandate needs a rail that can settle at{" "}
          {formatCurrency(1_620_000, "USD")} at three in the morning and confirm it
          instantly — which a batch rail with daily cut-offs simply cannot do.&rdquo;
        </p>
      </Card>
    </div>
  );
}
