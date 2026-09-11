"use client";

import { useState } from "react";
import { Check, PlayCircle, RotateCcw, XCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CheckItem, type CheckState } from "@/components/ui/CheckItem";
import { Card, CardHeader } from "@/components/ui/Card";
import { fxTrade, partyA, partyB } from "@/lib/mock/fx";
import { formatCurrency, generateReference, nowTimestamp } from "@/lib/utils";
import { useToast } from "@/components/ui/Toast";

type Scenario = "success" | "failure";
type Phase = "idle" | "checking" | "settled" | "failed";

const checkKeys = ["usdLiquidity", "hkdLiquidity", "rate", "screening"] as const;
type CheckKey = (typeof checkKeys)[number];

const checkCopy: Record<CheckKey, { label: string; detail: string }> = {
  usdLiquidity: { label: "USD liquidity available", detail: `${partyA.name} · delivering leg` },
  hkdLiquidity: { label: "HKD liquidity available", detail: `${partyB.name} · delivering leg` },
  rate: { label: "FX rate locked", detail: `USD/HKD @ ${fxTrade.rate}` },
  screening: { label: "Compliance screening passed", detail: "Both counterparties screened" },
};

export function PvpSimulator() {
  const { showToast } = useToast();
  const [phase, setPhase] = useState<Phase>("idle");
  const [checks, setChecks] = useState<Record<CheckKey, CheckState>>({
    usdLiquidity: "pending",
    hkdLiquidity: "pending",
    rate: "pending",
    screening: "pending",
  });
  const [reference, setReference] = useState("");
  const [timestamp, setTimestamp] = useState("");

  function run(scenario: Scenario) {
    setPhase("checking");
    setChecks({ usdLiquidity: "checking", hkdLiquidity: "pending", rate: "pending", screening: "pending" });

    setTimeout(() => {
      setChecks((c) => ({ ...c, usdLiquidity: "pass", hkdLiquidity: "checking" }));
      setTimeout(() => {
        setChecks((c) => ({
          ...c,
          hkdLiquidity: scenario === "failure" ? "fail" : "pass",
          rate: scenario === "failure" ? "pending" : "checking",
        }));

        if (scenario === "failure") {
          setTimeout(() => {
            setPhase("failed");
            showToast({
              title: "Settlement rejected",
              description: "Insufficient HKD liquidity — neither leg transferred",
              tone: "error",
            });
          }, 500);
          return;
        }

        setTimeout(() => {
          setChecks((c) => ({ ...c, rate: "pass", screening: "checking" }));
          setTimeout(() => {
            setChecks((c) => ({ ...c, screening: "pass" }));
            const ref = generateReference("PVP-SETL");
            setReference(ref);
            setTimestamp(nowTimestamp());
            setPhase("settled");
            showToast({
              title: "PvP settlement complete",
              description: `${ref} · ${formatCurrency(partyA.delivers.amount, "USD")} vs ${formatCurrency(
                partyB.delivers.amount,
                "HKD"
              )}`,
              tone: "success",
            });
          }, 600);
        }, 600);
      }, 700);
    }, 600);
  }

  function reset() {
    setPhase("idle");
    setChecks({ usdLiquidity: "pending", hkdLiquidity: "pending", rate: "pending", screening: "pending" });
    setReference("");
    setTimestamp("");
  }

  return (
    <Card>
      <CardHeader
        title="Pre-settlement checks"
        subtitle={`Trade ${fxTrade.tradeId} · ${fxTrade.pair} @ ${fxTrade.rate}`}
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
              PvP settlement complete — both currency legs settled together
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-1.5 pl-9 text-[12.5px] sm:grid-cols-2">
            <RowStat label="Audit reference" value={reference} mono />
            <RowStat label="Settlement finality" value={timestamp} />
            <RowStat label="USD leg" value={`${formatCurrency(partyA.delivers.amount, "USD")} settled`} />
            <RowStat label="HKD leg" value={`${formatCurrency(partyB.delivers.amount, "HKD")} settled`} />
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
            Insufficient HKD liquidity was available to complete {partyB.name}&apos;s leg. Because
            settlement is PvP-atomic, the USD leg was <strong>not</strong> released either — neither
            party is exposed to principal risk from a partial settlement.
          </p>
        </div>
      )}

      <div className="mt-5 flex flex-wrap items-center gap-2.5 border-t border-paper-200 pt-5">
        {phase === "idle" && (
          <>
            <Button onClick={() => run("success")} icon={<PlayCircle size={15} />}>
              Simulate PvP settlement
            </Button>
            <Button variant="secondary" onClick={() => run("failure")} icon={<AlertTriangle size={15} />}>
              Simulate exception (insufficient HKD liquidity)
            </Button>
          </>
        )}
        {phase === "checking" && <Button disabled>Running pre-settlement checks…</Button>}
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
