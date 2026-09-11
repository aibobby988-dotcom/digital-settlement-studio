"use client";

import { useState } from "react";
import { Check, PlayCircle, RotateCcw, X, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { cn, formatCurrency, nowTimestamp } from "@/lib/utils";

const STAGES = ["Initiated", "Validated", "Sanctions Screened", "Authorised", "Settled", "Reconciled"] as const;
type StageStatus = "pending" | "active" | "done" | "failed";
type Phase = "idle" | "playing" | "rolling-back" | "done-happy" | "done-unhappy";

const FAIL_AT_INDEX = 2; // "Sanctions Screened"

const STAGE_NARRATIVE: Record<(typeof STAGES)[number], string> = {
  Initiated: "Client submits the transfer request.",
  Validated: "Entitlement check confirms the beneficiary is an approved group entity.",
  "Sanctions Screened": "Originator, beneficiary and purpose are screened against sanctions and watchlists.",
  Authorised: "Funds check clears and the transfer is authorised for settlement.",
  Settled: "Debit and credit happen atomically — both or neither, never partial.",
  Reconciled: "Tokenised ledger and core banking ledger confirmed in agreement.",
};

const TXN = {
  reference: "TDX-FLOW-DEMO-0142",
  amount: 3_250_000,
  from: "Meridian Holdings (HK)",
  to: "Meridian Holdings (SG)",
};

export function TransactionFlowAnimation() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [statuses, setStatuses] = useState<StageStatus[]>(STAGES.map(() => "pending"));
  const [log, setLog] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const isPlaying = phase === "playing" || phase === "rolling-back";

  function appendLog(entry: string) {
    setLog((prev) => [...prev, `${nowTimestamp()} — ${entry}`]);
  }

  function reset() {
    setPhase("idle");
    setStatuses(STAGES.map(() => "pending"));
    setLog([]);
    setCurrentIndex(-1);
  }

  function playHappy() {
    reset();
    setPhase("playing");
    appendLog(`Transfer ${TXN.reference} initiated — ${formatCurrency(TXN.amount, "USD")}`);

    STAGES.forEach((stage, i) => {
      setTimeout(() => {
        setCurrentIndex(i);
        setStatuses((prev) => prev.map((s, si) => (si < i ? "done" : si === i ? "active" : "pending")));
        setTimeout(() => {
          setStatuses((prev) => prev.map((s, si) => (si <= i ? "done" : "pending")));
          appendLog(`${stage} — ${STAGE_NARRATIVE[stage]}`);
          if (i === STAGES.length - 1) {
            setPhase("done-happy");
          }
        }, 500);
      }, i * 750);
    });
  }

  function playUnhappy() {
    reset();
    setPhase("playing");
    appendLog(`Transfer ${TXN.reference} initiated — ${formatCurrency(TXN.amount, "USD")}`);

    for (let i = 0; i < FAIL_AT_INDEX; i++) {
      const stage = STAGES[i];
      setTimeout(() => {
        setCurrentIndex(i);
        setStatuses((prev) => prev.map((s, si) => (si < i ? "done" : si === i ? "active" : "pending")));
        setTimeout(() => {
          setStatuses((prev) => prev.map((s, si) => (si <= i ? "done" : "pending")));
          appendLog(`${stage} — ${STAGE_NARRATIVE[stage]}`);
        }, 500);
      }, i * 750);
    }

    const failStage = STAGES[FAIL_AT_INDEX];
    const failTime = FAIL_AT_INDEX * 750;
    setTimeout(() => {
      setCurrentIndex(FAIL_AT_INDEX);
      setStatuses((prev) => prev.map((s, si) => (si < FAIL_AT_INDEX ? "done" : si === FAIL_AT_INDEX ? "active" : "pending")));
    }, failTime);
    setTimeout(() => {
      setStatuses((prev) => prev.map((s, si) => (si === FAIL_AT_INDEX ? "failed" : s)));
      appendLog(`${failStage} — sanctions screening returned a true match. Transfer blocked.`);
    }, failTime + 500);

    const rollbackStart = failTime + 1300;
    setTimeout(() => {
      setPhase("rolling-back");
      appendLog("Rolling back — atomic settlement means no leg moves unless every check clears.");
    }, rollbackStart);
    setTimeout(() => {
      setCurrentIndex(-1);
      setStatuses(STAGES.map(() => "pending"));
    }, rollbackStart + 600);
    setTimeout(() => {
      appendLog(`Transfer ${TXN.reference} rejected — origin and beneficiary balances unchanged.`);
      setPhase("done-unhappy");
    }, rollbackStart + 1100);
  }

  return (
    <Card>
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-paper-200 pb-4">
        <div>
          <p className="font-mono text-[11.5px] text-ink-500">{TXN.reference}</p>
          <p className="text-[13px] font-semibold text-charcoal-900">
            {formatCurrency(TXN.amount, "USD")} · {TXN.from} → {TXN.to}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button size="sm" onClick={playHappy} disabled={isPlaying} icon={<PlayCircle size={14} />}>
            Play happy flow
          </Button>
          <Button size="sm" variant="secondary" onClick={playUnhappy} disabled={isPlaying} icon={<AlertTriangle size={14} />}>
            Play unhappy flow
          </Button>
          {(phase === "done-happy" || phase === "done-unhappy") && (
            <Button size="sm" variant="ghost" onClick={reset} icon={<RotateCcw size={13} />}>
              Reset
            </Button>
          )}
        </div>
      </div>

      <div className="pt-6">
        <div className="flex items-start">
          {STAGES.map((stage, i) => {
            const status = statuses[i];
            const isLast = i === STAGES.length - 1;
            return (
              <div key={stage} className="flex flex-1 flex-col items-center">
                <div className="flex w-full items-center">
                  <div
                    className={cn(
                      "mx-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 bg-paper-0 transition-all duration-300",
                      i === 0 && "ml-0",
                      status === "pending" && "border-paper-200 text-ink-400",
                      status === "active" && "border-brand-500 text-brand-600 animate-pulse",
                      status === "done" && "border-emerald-500 bg-emerald-500 text-paper-0",
                      status === "failed" && "border-rose-600 bg-rose-600 text-paper-0"
                    )}
                  >
                    {status === "done" && <Check size={15} strokeWidth={3} />}
                    {status === "failed" && <X size={15} strokeWidth={3} />}
                    {(status === "pending" || status === "active") && (
                      <span className="text-[11px] font-semibold">{i + 1}</span>
                    )}
                  </div>
                  {!isLast && (
                    <div
                      className={cn(
                        "h-1 flex-1 rounded-full transition-colors duration-500",
                        status === "done" ? "bg-emerald-500" : status === "failed" ? "bg-rose-500" : "bg-paper-200"
                      )}
                    />
                  )}
                </div>
                <p
                  className={cn(
                    "mt-2 px-1 text-center text-[11px] font-medium leading-tight",
                    status === "pending" ? "text-ink-400" : "text-charcoal-900"
                  )}
                >
                  {stage}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 min-h-[40px] rounded-lg bg-paper-50 px-4 py-3">
          <p className="text-[12.5px] leading-relaxed text-charcoal-900">
            {phase === "idle" && "Choose a scenario to see how a transfer actually moves through the platform, step by step."}
            {currentIndex >= 0 && phase !== "done-happy" && phase !== "done-unhappy" && phase !== "rolling-back" && (
              <>
                <strong className="font-semibold">{STAGES[currentIndex]}:</strong> {STAGE_NARRATIVE[STAGES[currentIndex]]}
              </>
            )}
            {phase === "rolling-back" && (
              <strong className="font-semibold text-rose-600">Rolling back — atomic settlement means no leg moves unless every check clears.</strong>
            )}
            {phase === "done-happy" && (
              <strong className="font-semibold text-emerald-600">Settled & reconciled — receipt issued to both entities.</strong>
            )}
            {phase === "done-unhappy" && (
              <strong className="font-semibold text-rose-600">Rejected — no funds moved. Compliance case raised for review.</strong>
            )}
          </p>
        </div>

        {log.length > 0 && (
          <div className="mt-4">
            <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-ink-400">
              Live audit trail
            </p>
            <div className="max-h-40 space-y-1 overflow-y-auto rounded-lg border border-paper-200 bg-charcoal-950 p-3 font-mono text-[11px] leading-relaxed text-paper-100 scrollbar-thin">
              {log.map((entry, i) => (
                <div key={i}>{entry}</div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
