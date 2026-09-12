"use client";

import { useEffect, useRef, useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Bot,
  Check,
  CheckCircle2,
  Circle,
  Clock3,
  Landmark,
  PlayCircle,
  RefreshCw,
  ShieldCheck,
  Users,
  Workflow,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader } from "@/components/ui/Card";
import { cn, formatCurrency } from "@/lib/utils";

const TRANSFER_AMOUNT = 3_250_000;

type FlowStep = {
  client: string;
  system: string;
  control: string;
  detail: string;
  presenterCue: string;
  status: "passed" | "checking" | "held";
};

const happyFlowSteps: FlowStep[] = [
  {
    client: "Submit a transfer",
    system: "API receives a structured treasury instruction",
    control: "Entity and user entitlements",
    detail: "Meridian HK requests a USD liquidity transfer to its approved Singapore entity.",
    presenterCue: "Start with the client problem: Singapore needs operating cash before its local window, not a new blockchain product.",
    status: "passed",
  },
  {
    client: "See an immediate decision",
    system: "Policy and sanctions services evaluate the instruction",
    control: "Purpose, beneficiary and watchlist screening",
    detail: "The client is not asked to chase a back-office team for a payment status update.",
    presenterCue: "The important change is shared status and evidence. The bank is applying controls before value moves, not after an exception occurs.",
    status: "passed",
  },
  {
    client: "Approve with evidence",
    system: "Funds and maker-checker approval are confirmed",
    control: "Balance, limits and dual authorisation",
    detail: "The workflow shows exactly what was checked before any value is committed.",
    presenterCue: "AI has prepared the evidence, but it has not approved or moved money. An authorised person remains accountable.",
    status: "passed",
  },
  {
    client: "Receive a settlement receipt",
    system: "Orchestrator writes debit and credit atomically",
    control: "Both legs settle or neither does",
    detail: "The tokenised-deposit movement is committed only once all controls pass.",
    presenterCue: "This is the settlement proposition: the debit and credit are one governed event, so there is no partial movement to chase.",
    status: "passed",
  },
  {
    client: "Use the updated cash position",
    system: "Core-ledger reconciliation and reporting complete",
    control: "Continuous reconciliation and exception SLA",
    detail: "Treasury, operations and finance consume the same transaction evidence.",
    presenterCue: "Close on the business outcome: timely liquidity visibility and less reconciliation effort, with an auditable receipt for both entities.",
    status: "passed",
  },
];

const exceptionFlowSteps: FlowStep[] = [
  {
    client: "Submit a transfer",
    system: "API receives a structured treasury instruction",
    control: "Entity and user entitlements",
    detail: "Meridian HK requests the same USD liquidity transfer to its Singapore entity.",
    presenterCue: "The starting point is identical. A safe product must make the unhappy path just as understandable as the happy path.",
    status: "passed",
  },
  {
    client: "See an immediate decision",
    system: "Screening service identifies a potential watchlist match",
    control: "Pre-settlement sanctions screening",
    detail: "The instruction is held before settlement. The client sees a clear status rather than a silent failure or an ambiguous delay.",
    presenterCue: "This is the key control moment: speed does not outrank screening. No money moves while the potential match is assessed.",
    status: "held",
  },
  {
    client: "Receive a clear next step",
    system: "Case management creates an owned review task",
    control: "Named case owner, audit record and client communication",
    detail: "Operations and Financial Crime receive the evidence needed to resolve the hold; the client receives a reference and next step.",
    presenterCue: "The product has not simply rejected the client. It has turned a risky break into an owned, auditable operational workflow.",
    status: "held",
  },
];

const stakeholderStories = [
  {
    id: "client",
    label: "Institution client",
    icon: Landmark,
    promise: "Move approved group liquidity when the business needs it, with a clear audit trail.",
    say: "Start with the missed cut-off or trapped-cash problem. Then run the transfer: the client sees the instruction, policy result, approval and receipt in one workflow instead of across several portals and teams.",
    proof: "The win is measured in reduced idle cash, fewer manual hand-offs and faster visibility, not in the fact that a token was created.",
  },
  {
    id: "rm",
    label: "Relationship manager",
    icon: Users,
    promise: "Sell an operating outcome, not blockchain infrastructure.",
    say: "Position this as a controlled treasury service for clients with multiple entities and time-zone exposure. Qualify for liquidity pain, urgent transfers, reconciliation cost and ERP/API readiness before discussing a pilot.",
    proof: "A strong first pilot is one client, approved entities and a narrow intrabank flow with a baseline for cut-off delays and reconciliation hours.",
  },
  {
    id: "ops",
    label: "Operations, risk & compliance",
    icon: ShieldCheck,
    promise: "More evidence and fewer blind hand-offs, not fewer controls.",
    say: "Run the same flow from the control plane. Every stage has a named owner, an immutable event and an exception path. If screening or funds fail, no value settles and a case is created.",
    proof: "Success is a lower break rate and faster exception resolution while maintaining control coverage and auditability.",
  },
  {
    id: "executive",
    label: "Executive sponsor",
    icon: Workflow,
    promise: "A phased product with measurable economics and bounded regulatory risk.",
    say: "Frame Phase 1 as intrabank treasury: the client problem is real, the control model is reusable and dependencies are bounded. Expansion into DvP, PvP and external networks follows only after legal and operational gates clear.",
    proof: "Track activated clients, payment volume, retained balances, time saved, reconciliation breaks, exception rates and revenue per client instead of vanity technology metrics.",
  },
] as const;

const comparison = [
  ["Client experience", "Instruction, status and receipt split across systems", "One governed workflow with live stage visibility"],
  ["Availability", "Business-day cut-offs and operational queues", "Supported 24/7 corridor with explicit policy controls"],
  ["Reconciliation", "Post-event matching and investigation", "Continuous core-to-token-ledger reconciliation"],
  ["Risk handling", "Manual escalation after a break", "Pre-settlement controls; atomic commit or no movement"],
  ["Product delivery", "Point integration per payment use case", "Reusable policy, orchestration and evidence layer"],
] as const;

type ClientView = "overview" | "review" | "receipt";
type FlowMode = "happy" | "exception";

export function StakeholderDemo() {
  const [activeStep, setActiveStep] = useState(-1);
  const [isRunning, setIsRunning] = useState(false);
  const [flowMode, setFlowMode] = useState<FlowMode>("happy");
  const [audience, setAudience] = useState<(typeof stakeholderStories)[number]["id"]>("client");
  const [clientView, setClientView] = useState<ClientView>("overview");
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const currentStory = stakeholderStories.find((story) => story.id === audience) ?? stakeholderStories[0];

  useEffect(() => {
    return () => timers.current.forEach((timer) => clearTimeout(timer));
  }, []);

  function reset() {
    timers.current.forEach((timer) => clearTimeout(timer));
    timers.current = [];
    setActiveStep(-1);
    setIsRunning(false);
    setClientView("overview");
  }

  function runDemo(nextMode: FlowMode = flowMode) {
    reset();
    setFlowMode(nextMode);
    setClientView("review");
    setIsRunning(true);
    const flow = nextMode === "happy" ? happyFlowSteps : exceptionFlowSteps;
    flow.forEach((_, index) => {
      timers.current.push(
        setTimeout(() => {
          setActiveStep(index);
          if (index === flow.length - 1) {
            timers.current.push(
              setTimeout(() => {
                setClientView("receipt");
                setIsRunning(false);
              }, 950)
            );
          }
        }, index * 1450)
      );
    });
  }

  const flowSteps = flowMode === "happy" ? happyFlowSteps : exceptionFlowSteps;
  const flowComplete = activeStep === flowSteps.length - 1;
  const settled = flowComplete && flowMode === "happy";
  const held = flowComplete && flowMode === "exception";
  const senderBalance = settled ? 5_250_000 : 8_500_000;
  const receiverBalance = settled ? 4_450_000 : 1_200_000;
  const currentStep = activeStep >= 0 ? flowSteps[activeStep] : null;

  return (
    <div className="space-y-8">
      <Card className="overflow-hidden border-charcoal-900 bg-charcoal-950 p-0">
        <div className="grid gap-0 lg:grid-cols-[1fr_auto]">
          <div className="p-5 sm:p-6">
            <Badge tone="brand" className="bg-brand-500/10 text-brand-300 ring-brand-400/25">
              Interactive product demo
            </Badge>
            <h2 className="mt-4 max-w-2xl text-[21px] font-semibold leading-snug text-paper-0 sm:text-[25px]">
              One transfer, two views: what the client sees and what the bank has to prove.
            </h2>
            <p className="mt-3 max-w-2xl text-[13px] leading-relaxed text-ink-400">
              Do not lead with the ledger. Lead with one client need, then show the bank proving it
              can either settle safely or stop safely. Choose a scenario below and run it live.
            </p>
          </div>
          <div className="flex items-center gap-2 border-t border-charcoal-800 p-5 lg:border-l lg:border-t-0">
            <Button size="sm" onClick={() => runDemo("happy")} disabled={isRunning} icon={<PlayCircle size={14} />}>
              {isRunning ? "Running flow" : "Run happy path"}
            </Button>
            <Button size="sm" variant="secondary" onClick={reset} icon={<RefreshCw size={13} />}>
              Reset
            </Button>
          </div>
        </div>
      </Card>

      <section className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="border-brand-100 bg-brand-50/30">
          <CardHeader title="The story you are showing" subtitle="Use this before touching the interface" />
          <ol className="space-y-2.5 text-[12.5px] leading-relaxed text-ink-700">
            <li><strong className="text-charcoal-900">1. Client problem:</strong> Meridian Singapore needs operating cash before its local window; the old process means cut-offs, fragmented status and reconciliation work.</li>
            <li><strong className="text-charcoal-900">2. Product promise:</strong> one governed instruction gives the client clear status, while the bank applies the required controls before settlement.</li>
            <li><strong className="text-charcoal-900">3. Proof:</strong> run the happy path to show a shared receipt, then the unhappy path to prove that a control hit creates a managed case and no funds move.</li>
          </ol>
        </Card>
        <Card>
          <CardHeader title="Choose the scenario" subtitle="The controls are not a footnote - they are the product" />
          <div className="grid gap-3 sm:grid-cols-2">
            <button type="button" onClick={() => runDemo("happy")} disabled={isRunning} className={cn("rounded-xl border p-3.5 text-left transition-colors disabled:cursor-not-allowed disabled:opacity-60", flowMode === "happy" ? "border-emerald-300 bg-emerald-50/50" : "border-paper-200 bg-paper-0 hover:bg-paper-50")}>
              <div className="flex items-center justify-between gap-3"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-paper-0"><Check size={14} strokeWidth={3} /></span><Badge tone="emerald">Happy path</Badge></div>
              <p className="mt-3 text-[12.5px] font-semibold text-charcoal-900">All controls pass. Funds settle and reconcile.</p>
              <p className="mt-1 text-[11.5px] leading-relaxed text-ink-600">Use this to demonstrate speed, visibility and an auditable receipt.</p>
            </button>
            <button type="button" onClick={() => runDemo("exception")} disabled={isRunning} className={cn("rounded-xl border p-3.5 text-left transition-colors disabled:cursor-not-allowed disabled:opacity-60", flowMode === "exception" ? "border-amber-300 bg-amber-50/50" : "border-paper-200 bg-paper-0 hover:bg-paper-50")}>
              <div className="flex items-center justify-between gap-3"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-500 text-paper-0"><AlertTriangle size={14} strokeWidth={3} /></span><Badge tone="amber">Unhappy path</Badge></div>
              <p className="mt-3 text-[12.5px] font-semibold text-charcoal-900">A screening match holds the transfer before settlement.</p>
              <p className="mt-1 text-[11.5px] leading-relaxed text-ink-600">Use this to demonstrate control, explainability and operational ownership.</p>
            </button>
          </div>
        </Card>
      </section>

      <Card className={cn("border-l-4", flowMode === "happy" ? "border-l-emerald-500" : "border-l-amber-500")}>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex gap-3"><span className={cn("mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-paper-0", flowMode === "happy" ? "bg-emerald-500" : "bg-amber-500")}>{flowMode === "happy" ? <Check size={16} strokeWidth={3} /> : <AlertTriangle size={16} />}</span><div><p className="text-[11px] font-semibold uppercase tracking-wide text-ink-500">Presenter cue {activeStep >= 0 ? `${activeStep + 1} of ${flowSteps.length}` : "- ready"}</p><p className="mt-1 text-[14px] font-semibold text-charcoal-900">{currentStep?.client ?? (flowMode === "happy" ? "Run the happy path: show what happens when the right instruction meets the right controls." : "Run the unhappy path: show that the bank can stop safely and communicate clearly.")}</p><p className="mt-1.5 max-w-3xl text-[12.5px] leading-relaxed text-ink-700">{currentStep?.presenterCue ?? "Choose a scenario above. The two flows are intentionally paired: business value only counts when the failure path is as controlled as the success path."}</p></div></div>
          <Badge tone={held ? "amber" : settled ? "emerald" : "neutral"}>{held ? "Funds held" : settled ? "Settled" : "Awaiting scenario"}</Badge>
        </div>
      </Card>

      <section className="grid gap-4 xl:grid-cols-2">
        <Card className="relative overflow-hidden border-brand-100 bg-[radial-gradient(circle_at_top_right,_rgba(34,197,94,0.12),_transparent_38%)]">
          <CardHeader
            title="Institution client interface"
            subtitle="Treasury manager: Meridian Holdings (HK)"
            actions={<Badge tone={settled ? "emerald" : "brand"}>{settled ? "Settled" : "Live workspace"}</Badge>}
          />
          <InstitutionClientWorkspace
            activeStep={activeStep}
            isRunning={isRunning}
            settled={settled}
            held={held}
            flowMode={flowMode}
            senderBalance={senderBalance}
            receiverBalance={receiverBalance}
            view={clientView}
            onChangeView={setClientView}
            onRun={() => runDemo(flowMode)}
          />
        </Card>

        <Card className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_36%)]">
          <CardHeader
            title="Bank control plane"
            subtitle="The backend mechanism the client should not have to coordinate"
            actions={<Badge tone="blue">Evidence-first</Badge>}
          />

          <div className="relative space-y-0">
            {flowSteps.map((step, index) => {
              const current = index === activeStep;
              const complete = index < activeStep || (flowComplete && index === activeStep);
              const failed = step.status === "held" && complete;
              return (
                <div key={step.system} className="relative grid grid-cols-[28px_1fr] gap-3 pb-4 last:pb-0">
                  {index < flowSteps.length - 1 && (
                    <div className={cn("absolute left-[13px] top-7 h-[calc(100%-16px)] w-px", complete ? "bg-emerald-400" : "bg-paper-200")} />
                  )}
                  <div className="relative z-10 pt-0.5">
                    <StageMarker active={current} done={complete} failed={failed} />
                  </div>
                  <div className={cn("rounded-lg border p-3 transition-all duration-500", current ? "border-brand-300 bg-brand-50/50 shadow-sm" : failed ? "border-amber-200 bg-amber-50/45" : complete ? "border-emerald-100 bg-emerald-50/30" : "border-paper-200 bg-paper-0")}>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-[12.5px] font-semibold text-charcoal-900">{step.system}</p>
                      <Badge tone={failed ? "amber" : complete ? "emerald" : current ? "brand" : "neutral"}>
                        {failed ? "Held" : complete ? "Passed" : current ? "Checking" : "Queued"}
                      </Badge>
                    </div>
                    <p className="mt-1 text-[11.5px] leading-relaxed text-ink-500">{step.detail}</p>
                    <div className="mt-2 flex items-center gap-1.5 text-[11px] font-medium text-blue-600">
                      <ShieldCheck size={12} />
                      Control: {step.control}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </section>

      <section className="grid gap-4">
        <Card>
          <CardHeader title="The narrative to land" subtitle="Lead with the operating problem, not the technology" />
          <div className="space-y-3 text-[12.5px] leading-relaxed text-ink-700">
            <p>
              <strong className="text-charcoal-900">Before:</strong> cash movement is constrained by
              cut-offs, opaque status updates and manual reconciliation across systems.
            </p>
            <p>
              <strong className="text-charcoal-900">After:</strong> a client submits one governed
              instruction. The bank applies the same risk controls, but clients and internal teams
              receive shared, timely evidence of what happened.
            </p>
            <p className="rounded-lg bg-amber-100/45 px-3 py-2.5 text-charcoal-900">
              <Clock3 size={14} className="mr-1.5 inline text-amber-600" />
              Be precise: &ldquo;24/7 in supported corridors&rdquo; is credible. Do not promise universal,
              instant cross-border settlement before legal, liquidity and interoperability gates clear.
            </p>
          </div>
        </Card>

        <Card padded={false} className="min-w-0">
          <div className="p-5 pb-0">
            <CardHeader title="Why this is better than the old operating model" subtitle="A product proposition, not a technology claim" />
          </div>
          <div className="min-w-0 overflow-x-auto px-5 pb-5">
            <table className="w-full min-w-[630px] border-collapse text-left text-[12px]">
              <thead>
                <tr className="border-b border-paper-200 uppercase tracking-wide text-[10.5px] text-ink-400">
                  <th className="py-2.5 pr-3 font-medium">Dimension</th>
                  <th className="py-2.5 pr-3 font-medium">Old model</th>
                  <th className="py-2.5 font-medium">Tokenised treasury model</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map(([dimension, oldModel, newModel]) => (
                  <tr key={dimension} className="border-b border-paper-100 last:border-0">
                    <td className="py-3 pr-3 font-semibold text-charcoal-900">{dimension}</td>
                    <td className="py-3 pr-3 leading-relaxed text-ink-500">{oldModel}</td>
                    <td className="py-3 leading-relaxed text-charcoal-900">{newModel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </section>

      <section>
        <div className="mb-4">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-600">Stakeholder playbook</p>
          <h2 className="mt-1 text-[18px] font-semibold text-charcoal-900">Same product, different proof point</h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-[240px_1fr]">
          <div className="flex gap-2 overflow-x-auto lg:flex-col">
            {stakeholderStories.map((story) => {
              const Icon = story.icon;
              const selected = story.id === audience;
              return (
                <button
                  key={story.id}
                  type="button"
                  onClick={() => setAudience(story.id)}
                  className={cn(
                    "flex min-w-[180px] items-center gap-2.5 rounded-lg border px-3 py-2.5 text-left text-[12px] font-medium transition-colors lg:min-w-0",
                    selected ? "border-brand-300 bg-brand-50 text-brand-700" : "border-paper-200 bg-paper-0 text-ink-700 hover:bg-paper-50"
                  )}
                >
                  <Icon size={15} />
                  {story.label}
                </button>
              );
            })}
          </div>
          <Card className="border-brand-100 bg-brand-50/25">
            <Badge tone="brand">{currentStory.label}</Badge>
            <h3 className="mt-3 text-[16px] font-semibold text-charcoal-900">{currentStory.promise}</h3>
            <p className="mt-3 text-[12.5px] leading-relaxed text-ink-700">{currentStory.say}</p>
            <div className="mt-4 rounded-lg border border-brand-100 bg-paper-0 px-3.5 py-3 text-[12px] leading-relaxed text-charcoal-900">
              <strong className="font-semibold">Evidence to ask for:</strong> {currentStory.proof}
            </div>
          </Card>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader title="How to run the demo in six minutes" />
          <ol className="space-y-3 text-[12.5px] leading-relaxed text-ink-700">
            <li><strong className="text-charcoal-900">1. Start with pain:</strong> give one concrete example of cash trapped after cut-off.</li>
            <li><strong className="text-charcoal-900">2. Run the transfer:</strong> let the client view and backend control plane progress together.</li>
            <li><strong className="text-charcoal-900">3. Pause at approval:</strong> show that AI prepares evidence, while policy and authorised people govern movement.</li>
            <li><strong className="text-charcoal-900">4. Land atomicity:</strong> value moves only if all checks pass; exceptions create cases, not partial settlement.</li>
            <li><strong className="text-charcoal-900">5. Close on metrics:</strong> agree a narrow pilot and baseline time, breaks, idle cash and operational effort.</li>
          </ol>
        </Card>
        <Card>
          <CardHeader title="The mini-CEO / product-lead role" />
          <p className="text-[12.5px] leading-relaxed text-ink-700">
            The job is to translate one client outcome into a commercially viable, legally safe and
            operable product. That means keeping Sales focused on qualified demand, Technology on a
            reusable platform, Operations on exception readiness, Risk and Compliance on control
            evidence, Legal on finality and Product on phased commercial decisions.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2 text-[11.5px]">
            {[
              "Client problem & pilot design",
              "Commercial model & adoption",
              "Control ownership & evidence",
              "Legal / regulatory gates",
              "Operations & support model",
              "Platform roadmap & KPIs",
            ].map((item) => (
              <div key={item} className="rounded-lg bg-paper-50 px-3 py-2 text-charcoal-900">{item}</div>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
}

function InstitutionClientWorkspace({
  activeStep,
  isRunning,
  settled,
  held,
  flowMode,
  senderBalance,
  receiverBalance,
  view,
  onChangeView,
  onRun,
}: {
  activeStep: number;
  isRunning: boolean;
  settled: boolean;
  held: boolean;
  flowMode: FlowMode;
  senderBalance: number;
  receiverBalance: number;
  view: ClientView;
  onChangeView: (view: ClientView) => void;
  onRun: () => void;
}) {
  const navigation: Array<{ label: string; view: ClientView }> = [
    { label: "Overview", view: "overview" },
    { label: "Payments", view: "review" },
    { label: "Activity", view: "receipt" },
  ];

  return (
    <div className="overflow-hidden rounded-xl border border-paper-200 bg-paper-50 shadow-[0_12px_28px_rgba(15,21,33,0.08)]">
      <div className="flex flex-wrap items-center justify-between gap-3 bg-charcoal-950 px-4 py-3 text-paper-0">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-brand-400 text-[11px] font-bold text-charcoal-950">M</span>
          <div>
            <p className="text-[12px] font-semibold">Meridian Treasury</p>
            <p className="text-[10.5px] text-ink-400">Asia Pacific liquidity workspace</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[10.5px] text-ink-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Live balances · USD
        </div>
      </div>

      <div className="flex items-center gap-1 border-b border-paper-200 bg-paper-0 px-3 pt-2">
        {navigation.map((item) => {
          const selected = item.view === view;
          const blockedReceipt = item.view === "receipt" && !settled && !held;
          return (
            <button
              key={item.label}
              type="button"
              disabled={blockedReceipt}
              onClick={() => onChangeView(item.view)}
              className={cn(
                "border-b-2 px-3 py-2 text-[11.5px] font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-40",
                selected ? "border-brand-500 text-brand-700" : "border-transparent text-ink-500 hover:text-charcoal-900"
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="min-h-[420px] p-4">
        {view === "overview" && (
          <div className="animate-in fade-in duration-300">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-400">Good morning, Alex</p>
                <h3 className="mt-1 text-[16px] font-semibold text-charcoal-900">Liquidity is available for today&apos;s operating needs.</h3>
              </div>
              <Badge tone="emerald">All accounts healthy</Badge>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <BalanceTile label="Available liquidity" value={9_700_000} direction="Group USD" emphasis />
              <BalanceTile label="Forecast after funding" value={6_450_000} direction="Hong Kong USD" emphasis />
            </div>

            <button
              type="button"
              onClick={() => onChangeView("review")}
              className="mt-4 w-full rounded-xl border border-brand-200 bg-brand-50 p-3.5 text-left transition-colors hover:bg-brand-100"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-brand-500" />
                    <p className="text-[12.5px] font-semibold text-charcoal-900">1 payment needs your review</p>
                  </div>
                  <p className="mt-1 text-[11.5px] leading-relaxed text-ink-700">
                    Fund Meridian Singapore with {formatCurrency(TRANSFER_AMOUNT, "USD")} before its local operating window.
                  </p>
                </div>
                <ArrowRight size={16} className="mt-1 shrink-0 text-brand-600" />
              </div>
            </button>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-paper-200 bg-paper-0 p-3">
                <p className="text-[10.5px] font-semibold uppercase tracking-wide text-ink-400">Today&apos;s priority</p>
                <p className="mt-1.5 text-[12px] font-medium text-charcoal-900">Protect SG operating runway</p>
                <p className="mt-1 text-[11px] leading-relaxed text-ink-500">Forecast remains within approved liquidity policy after transfer.</p>
              </div>
              <div className="rounded-lg border border-paper-200 bg-paper-0 p-3">
                <p className="text-[10.5px] font-semibold uppercase tracking-wide text-ink-400">AI treasury brief</p>
                <p className="mt-1.5 text-[12px] font-medium text-charcoal-900">No policy conflicts found</p>
                <p className="mt-1 text-[11px] leading-relaxed text-ink-500">Prepared the decision summary from approved account, forecast and policy data.</p>
              </div>
            </div>
          </div>
        )}

        {view === "review" && (
          <div className="animate-in fade-in duration-300">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="font-mono text-[10.5px] text-ink-400">TDX-DEMO-0142</p>
                <h3 className="mt-1 text-[15px] font-semibold text-charcoal-900">Review liquidity transfer</h3>
              </div>
              <Badge tone={held ? "amber" : isRunning ? "brand" : "amber"}>{held ? "Held for review" : isRunning ? "Processing" : "Approval required"}</Badge>
            </div>

            <div className="mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-3 rounded-xl bg-paper-0 p-3.5 ring-1 ring-inset ring-paper-200">
              <BalanceTile label="Meridian HK" value={senderBalance} direction="From" />
              <ArrowRight size={17} className={cn("text-ink-300 transition-colors", activeStep >= 3 && "text-emerald-500")} />
              <BalanceTile label="Meridian SG" value={receiverBalance} direction="To" />
            </div>

            <div className="mt-3 rounded-lg bg-paper-0 p-3.5 ring-1 ring-inset ring-paper-200">
              <div className="flex items-center justify-between gap-3">
                <span className="text-[11.5px] text-ink-500">Transfer amount</span>
                <span className="text-[17px] font-semibold tabular-nums text-charcoal-900">{formatCurrency(TRANSFER_AMOUNT, "USD")}</span>
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                <Badge tone="neutral">Intercompany liquidity</Badge>
                <Badge tone="neutral">1 approver required</Badge>
                <Badge tone="neutral">Singapore operating account</Badge>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2">
              {[
                ["Beneficiary", "Approved", "pass"],
                ["Funds", "Covered", "pass"],
                flowMode === "exception" ? ["Screening", "Review needed", "hold"] : ["Policy", "Within limit", "pass"],
              ].map(([label, status, statusTone]) => (
                <div key={label} className={cn("rounded-lg border px-2.5 py-2 text-center", statusTone === "hold" ? "border-amber-200 bg-amber-50/55" : "border-emerald-100 bg-emerald-50/40")}>
                  {statusTone === "hold" ? <AlertTriangle size={13} className="mx-auto text-amber-600" /> : <CheckCircle2 size={13} className="mx-auto text-emerald-600" />}
                  <p className="mt-1 text-[10.5px] font-medium text-charcoal-900">{label}</p>
                  <p className={cn("text-[10px]", statusTone === "hold" ? "text-amber-700" : "text-emerald-700")}>{status}</p>
                </div>
              ))}
            </div>

            <div className="mt-3 rounded-lg border border-brand-100 bg-brand-50/45 p-3">
              <div className="flex gap-2.5">
                <Bot size={15} className="mt-0.5 shrink-0 text-brand-600" />
                <div>
                  <p className="text-[11.5px] font-semibold text-charcoal-900">Decision brief prepared</p>
                  <p className="mt-0.5 text-[10.8px] leading-relaxed text-ink-700">{flowMode === "exception" ? "AI prepared the approved data and cannot clear a possible sanctions match. A control owner must review the case." : "AI surfaced the approved beneficiary, liquidity impact and policy evidence. An authorised user remains accountable for approval."}</p>
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between gap-3">
              <span className="text-[11px] text-ink-500">{isRunning ? flowMode === "exception" ? "Submitting to controls and case management" : "Submitting to controlled settlement" : flowMode === "exception" ? "Run the exception flow to show a safe hold." : "Review complete. Ready for maker-checker approval."}</span>
              <Button size="sm" onClick={onRun} disabled={isRunning} icon={<PlayCircle size={13} />}>
                {isRunning ? "Processing" : flowMode === "exception" ? "Test safe hold" : "Approve & send"}
              </Button>
            </div>
          </div>
        )}

        {view === "receipt" && (
          <div className="animate-in fade-in duration-300">
            <div className={cn("flex flex-col items-center rounded-xl border px-4 py-5 text-center", held ? "border-amber-200 bg-amber-50/55" : "border-emerald-100 bg-emerald-50/45")}>
              <span className={cn("flex h-10 w-10 items-center justify-center rounded-full text-paper-0", held ? "bg-amber-500" : "bg-emerald-500")}>{held ? <AlertTriangle size={20} strokeWidth={3} /> : <Check size={20} strokeWidth={3} />}</span>
              <p className="mt-3 text-[15px] font-semibold text-charcoal-900">{held ? "Transfer held - no funds moved" : "Transfer settled and reconciled"}</p>
              <p className="mt-1 text-[11.5px] text-ink-600">{held ? "A review case has been created with the screening evidence and a named control owner." : "Both entities have an auditable confirmation of the same completed event."}</p>
            </div>
            <div className="mt-4 rounded-xl border border-paper-200 bg-paper-0 p-3.5">
              <div className="flex items-center justify-between gap-3 border-b border-paper-100 pb-3">
                <div>
                  <p className="font-mono text-[10.5px] text-ink-400">TDX-DEMO-0142</p>
                  <p className="mt-0.5 text-[12px] font-semibold text-charcoal-900">Settlement receipt</p>
                </div>
                <Badge tone={held ? "amber" : "emerald"}>{held ? "Held" : "Final"}</Badge>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3 text-[11.5px]">
                <div><p className="text-ink-400">{held ? "Requested amount" : "Amount"}</p><p className="mt-0.5 font-semibold text-charcoal-900">{formatCurrency(TRANSFER_AMOUNT, "USD")}</p></div>
                <div><p className="text-ink-400">Outcome</p><p className="mt-0.5 font-semibold text-charcoal-900">{held ? "Pre-settlement hold" : "Atomic transfer"}</p></div>
                <div><p className="text-ink-400">From</p><p className="mt-0.5 font-semibold text-charcoal-900">Meridian HK</p></div>
                <div><p className="text-ink-400">{held ? "Next owner" : "To"}</p><p className="mt-0.5 font-semibold text-charcoal-900">{held ? "Financial Crime Operations" : "Meridian SG"}</p></div>
              </div>
            </div>
            <button type="button" onClick={() => onChangeView("overview")} className="mt-4 text-[11.5px] font-medium text-brand-700 hover:text-brand-900">
              Return to liquidity overview
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function BalanceTile({ label, value, direction, emphasis = false }: { label: string; value: number; direction: string; emphasis?: boolean }) {
  return (
    <div className={cn(emphasis && "rounded-lg border border-paper-200 bg-paper-0 p-3")}>
      <p className="text-[10.5px] font-semibold uppercase tracking-wide text-ink-400">{direction}</p>
      <p className="mt-0.5 text-[11.5px] font-medium text-charcoal-900">{label}</p>
      <p className={cn("mt-1 font-semibold tabular-nums text-charcoal-900", emphasis ? "text-[15px]" : "text-[13px]")}>{formatCurrency(value, "USD")}</p>
    </div>
  );
}

function StageMarker({ active, done, failed }: { active: boolean; done: boolean; failed: boolean }) {
  if (failed) {
    return <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500 text-paper-0"><XCircle size={14} strokeWidth={2.5} /></span>;
  }
  if (done) {
    return <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-paper-0"><Check size={13} strokeWidth={3} /></span>;
  }

  if (active) {
    return <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-brand-500 bg-paper-0 text-brand-600 animate-pulse"><Circle size={7} fill="currentColor" /></span>;
  }

  return <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-paper-200 bg-paper-0 text-ink-300"><Circle size={7} /></span>;
}
