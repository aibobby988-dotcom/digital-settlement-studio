"use client";

import { useState } from "react";
import { Check, PlayCircle, RotateCcw, XCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CheckItem, type CheckState } from "@/components/ui/CheckItem";
import { Card, CardHeader } from "@/components/ui/Card";
import { buyer, seller, tradeDetails } from "@/lib/mock/bonds";
import { formatCurrency, formatNumber, generateReference, nowTimestamp } from "@/lib/utils";
import { useToast } from "@/components/ui/Toast";

type Scenario = "success" | "failure";
type Phase = "idle" | "checking" | "settled" | "failed";

const checkKeys = ["funds", "holdings", "approvals", "screening"] as const;
type CheckKey = (typeof checkKeys)[number];

const checkCopy: Record<CheckKey, { label: string; detail: string }> = {
  funds: { label: "Buyer has sufficient funds", detail: `${buyer.name} · USD cash leg` },
  holdings: { label: "Seller holds sufficient bond units", detail: `${seller.name} · bond leg` },
  approvals: { label: "Both parties approved", detail: "Buyer and seller trade approval on file" },
  screening: { label: "Compliance screening passed", detail: "Sanctions and eligibility screening" },
};

export function DvpSimulator() {
  const { showToast } = useToast();
  const [phase, setPhase] = useState<Phase>("idle");
  const [checks, setChecks] = useState<Record<CheckKey, CheckState>>({
    funds: "pending",
    holdings: "pending",
    approvals: "pending",
    screening: "pending",
  });
  const [reference, setReference] = useState("");
  const [timestamp, setTimestamp] = useState("");

  function run(scenario: Scenario) {
    setPhase("checking");
    setChecks({ funds: "checking", holdings: "pending", approvals: "pending", screening: "pending" });

    setTimeout(() => {
      setChecks((c) => ({ ...c, funds: "pass", holdings: "checking" }));
      setTimeout(() => {
        setChecks((c) => ({
          ...c,
          holdings: scenario === "failure" ? "fail" : "pass",
          approvals: scenario === "failure" ? "pending" : "checking",
        }));

        if (scenario === "failure") {
          setTimeout(() => {
            setPhase("failed");
            showToast({
              title: "Settlement rejected",
              description: "Insufficient bond units — neither leg transferred",
              tone: "error",
            });
          }, 500);
          return;
        }

        setTimeout(() => {
          setChecks((c) => ({ ...c, approvals: "pass", screening: "checking" }));
          setTimeout(() => {
            setChecks((c) => ({ ...c, screening: "pass" }));
            const ref = generateReference("DVP-SETL");
            setReference(ref);
            setTimestamp(nowTimestamp());
            setPhase("settled");
            showToast({
              title: "Atomic settlement complete",
              description: `${ref} · ${formatCurrency(tradeDetails.grossConsideration, "USD")} vs ${formatNumber(
                tradeDetails.units
              )} bond units`,
              tone: "success",
            });
          }, 650);
        }, 650);
      }, 700);
    }, 600);
  }

  function reset() {
    setPhase("idle");
    setChecks({ funds: "pending", holdings: "pending", approvals: "pending", screening: "pending" });
    setReference("");
    setTimestamp("");
  }

  return (
    <Card>
      <CardHeader
        title="Pre-settlement checks"
        subtitle={`Trade ${tradeDetails.tradeId} · ${formatNumber(tradeDetails.units)} units @ ${formatCurrency(
          tradeDetails.unitPrice,
          "USD"
        )}`}
      />

      <div className="space-y-2.5">
        {checkKeys.map((key) => (
          <CheckItem key={key} label={checkCopy[key].label} detail={checkCopy[key].detail} state={checks[key]} />
        ))}
      </div>

      {phase === "settled" && (
        <div className="mt-5 space-y-3 rounded-lg border border-emerald-100 bg-emerald-100/30 p-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-paper-0">
              <Check size={15} strokeWidth={3} />
            </div>
            <p className="text-[13.5px] font-semibold text-charcoal-900">
              Atomic settlement complete — both legs settled together
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-1.5 pl-9 text-[12.5px] sm:grid-cols-2">
            <RowStat label="Audit reference" value={reference} mono />
            <RowStat label="Settlement finality" value={timestamp} />
            <RowStat label="Cash leg" value={`${formatCurrency(tradeDetails.grossConsideration, "USD")} settled`} />
            <RowStat label="Bond leg" value={`${formatNumber(tradeDetails.units)} units transferred`} />
          </div>
        </div>
      )}

      {phase === "failed" && (
        <div className="mt-5 space-y-2 rounded-lg border border-rose-100 bg-rose-100/30 p-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-rose-600 text-paper-0">
              <XCircle size={15} strokeWidth={2.5} />
            </div>
            <p className="text-[13.5px] font-semibold text-charcoal-900">Settlement rejected — no leg transferred</p>
          </div>
          <p className="pl-9 text-[12.5px] leading-relaxed text-ink-700">
            The seller&apos;s bond holdings were insufficient to cover the trade. Because
            settlement is atomic, the cash leg was <strong>not</strong> released and the bond leg
            was <strong>not</strong> transferred — the buyer&apos;s funds and the seller&apos;s
            holdings remain unchanged.
          </p>
        </div>
      )}

      <div className="mt-5 flex flex-wrap items-center gap-2.5 border-t border-paper-200 pt-5">
        {phase === "idle" && (
          <>
            <Button onClick={() => run("success")} icon={<PlayCircle size={15} />}>
              Simulate atomic settlement
            </Button>
            <Button variant="secondary" onClick={() => run("failure")} icon={<AlertTriangle size={15} />}>
              Simulate exception (insufficient bond units)
            </Button>
          </>
        )}
        {phase === "checking" && (
          <Button disabled>
            Running pre-settlement checks…
          </Button>
        )}
        {(phase === "settled" || phase === "failed") && (
          <Button variant="secondary" onClick={reset} icon={<RotateCcw size={14} />}>
            Reset simulation
          </Button>
        )}
      </div>
    </Card>
  );
}

function RowStat({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-ink-500">{label}</span>
      <span className={`font-medium text-charcoal-900 ${mono ? "font-mono text-[11.5px]" : ""}`}>{value}</span>
    </div>
  );
}
