"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { CheckItem, type CheckState } from "@/components/ui/CheckItem";
import { Timeline } from "@/components/ui/Timeline";
import { entities, purposeCodes } from "@/lib/mock/entities";
import type { CurrencyCode, TransferStage } from "@/lib/types";
import { formatCurrency, generateReference, nowTimestamp } from "@/lib/utils";
import { useToast } from "@/components/ui/Toast";

const currencies: CurrencyCode[] = ["HKD", "USD", "GBP", "SGD"];

const stageOrder: TransferStage[] = [
  "Initiated",
  "Validated",
  "Sanctions Screened",
  "Authorised",
  "Settled",
  "Reconciled",
];

type Step = 1 | 2 | 3 | 4 | 5 | 6 | 7;

const stepLabels: Record<Step, string> = {
  1: "Originating entity",
  2: "Beneficiary entity",
  3: "Currency & amount",
  4: "Purpose code",
  5: "Compliance check",
  6: "Confirm",
  7: "Receipt",
};

export function TransferWizard({
  open,
  onClose,
  defaultEntityId,
}: {
  open: boolean;
  onClose: () => void;
  defaultEntityId?: string;
}) {
  const { showToast } = useToast();
  const [step, setStep] = useState<Step>(1);
  const [originId, setOriginId] = useState(defaultEntityId ?? entities[0].id);
  const [beneficiaryId, setBeneficiaryId] = useState("");
  const [currency, setCurrency] = useState<CurrencyCode>("USD");
  const [amount, setAmount] = useState("500000");
  const [purposeCode, setPurposeCode] = useState(purposeCodes[0].code);
  const [checks, setChecks] = useState<Record<string, CheckState>>({
    entitlement: "pending",
    sanctions: "pending",
    funds: "pending",
  });
  const [checking, setChecking] = useState(false);
  const [reference, setReference] = useState("");
  const [timestamp, setTimestamp] = useState("");

  const originEntity = entities.find((e) => e.id === originId);
  const beneficiaryEntity = entities.find((e) => e.id === beneficiaryId);
  const eligibleBeneficiaries = entities.filter((e) => e.id !== originId);

  const currentStageIndex = useMemo(() => {
    if (step < 6) return -1;
    if (step === 6) return 0;
    return 5;
  }, [step]);

  function reset() {
    setStep(1);
    setOriginId(defaultEntityId ?? entities[0].id);
    setBeneficiaryId("");
    setCurrency("USD");
    setAmount("500000");
    setPurposeCode(purposeCodes[0].code);
    setChecks({ entitlement: "pending", sanctions: "pending", funds: "pending" });
    setChecking(false);
    setReference("");
    setTimestamp("");
  }

  function handleClose() {
    onClose();
    setTimeout(reset, 250);
  }

  function runComplianceChecks() {
    setChecking(true);
    setChecks({ entitlement: "checking", sanctions: "pending", funds: "pending" });
    setTimeout(() => {
      setChecks({ entitlement: "pass", sanctions: "checking", funds: "pending" });
      setTimeout(() => {
        setChecks({ entitlement: "pass", sanctions: "pass", funds: "checking" });
        setTimeout(() => {
          setChecks({ entitlement: "pass", sanctions: "pass", funds: "pass" });
          setChecking(false);
        }, 700);
      }, 900);
    }, 700);
  }

  function confirmSettlement() {
    const ref = generateReference("TDX");
    setReference(ref);
    setTimestamp(nowTimestamp());
    setStep(7);
    showToast({
      title: "Transfer settled",
      description: `${ref} · ${formatCurrency(Number(amount || 0), currency)} to ${
        beneficiaryEntity?.name ?? "beneficiary"
      }`,
      tone: "success",
    });
  }

  const allChecksPassed = Object.values(checks).every((c) => c === "pass");
  const numericAmount = Number(amount || 0);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      title="Transfer Tokenised Deposit"
      subtitle={`Step ${step} of 7 — ${stepLabels[step]}`}
      width="max-w-xl"
    >
      <div className="mb-6 flex items-center gap-1.5">
        {([1, 2, 3, 4, 5, 6, 7] as Step[]).map((s) => (
          <div
            key={s}
            className={`h-1 flex-1 rounded-full ${s <= step ? "bg-brand-500" : "bg-paper-200"}`}
          />
        ))}
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <p className="text-[13px] text-ink-500">Select the entity the transfer will originate from.</p>
          <div className="space-y-2">
            {entities.map((entity) => (
              <button
                key={entity.id}
                onClick={() => setOriginId(entity.id)}
                className={`flex w-full items-center justify-between rounded-lg border px-4 py-3 text-left transition-colors ${
                  originId === entity.id
                    ? "border-brand-400 bg-brand-50/50 ring-1 ring-brand-400/40"
                    : "border-paper-200 hover:bg-paper-50"
                }`}
              >
                <div>
                  <p className="text-[13px] font-medium text-charcoal-900">{entity.name}</p>
                  <p className="text-[11.5px] text-ink-500">
                    {entity.jurisdiction} · {entity.entityType}
                  </p>
                </div>
                {originId === entity.id && <Check size={16} className="text-brand-600" />}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <p className="text-[13px] text-ink-500">
            Select the approved beneficiary entity to receive this transfer.
          </p>
          <div className="space-y-2">
            {eligibleBeneficiaries.map((entity) => (
              <button
                key={entity.id}
                onClick={() => setBeneficiaryId(entity.id)}
                className={`flex w-full items-center justify-between rounded-lg border px-4 py-3 text-left transition-colors ${
                  beneficiaryId === entity.id
                    ? "border-brand-400 bg-brand-50/50 ring-1 ring-brand-400/40"
                    : "border-paper-200 hover:bg-paper-50"
                }`}
              >
                <div>
                  <p className="text-[13px] font-medium text-charcoal-900">{entity.name}</p>
                  <p className="text-[11.5px] text-ink-500">
                    {entity.jurisdiction} · {entity.entityType}
                  </p>
                </div>
                {beneficiaryId === entity.id && <Check size={16} className="text-brand-600" />}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-5">
          <div>
            <label className="mb-2 block text-[12.5px] font-medium text-ink-700">Currency</label>
            <div className="grid grid-cols-4 gap-2">
              {currencies.map((c) => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  className={`rounded-lg border px-3 py-2.5 text-[13px] font-medium transition-colors ${
                    currency === c
                      ? "border-brand-400 bg-brand-50/50 text-brand-700"
                      : "border-paper-200 text-ink-700 hover:bg-paper-50"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="mb-2 block text-[12.5px] font-medium text-ink-700">Amount</label>
            <input
              type="number"
              min={0}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full rounded-lg border border-paper-200 px-3.5 py-2.5 text-[14px] tabular-nums outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
            />
            <p className="mt-1.5 text-[12px] text-ink-500">
              {numericAmount > 0 && formatCurrency(numericAmount, currency)}
            </p>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-4">
          <p className="text-[13px] text-ink-500">
            Tag this transfer with a purpose code for reporting and monitoring.
          </p>
          <div className="space-y-2">
            {purposeCodes.map((p) => (
              <button
                key={p.code}
                onClick={() => setPurposeCode(p.code)}
                className={`flex w-full items-center justify-between rounded-lg border px-4 py-3 text-left transition-colors ${
                  purposeCode === p.code
                    ? "border-brand-400 bg-brand-50/50 ring-1 ring-brand-400/40"
                    : "border-paper-200 hover:bg-paper-50"
                }`}
              >
                <div>
                  <p className="text-[13px] font-medium text-charcoal-900">{p.label}</p>
                  <p className="text-[11.5px] font-mono text-ink-500">{p.code}</p>
                </div>
                {purposeCode === p.code && <Check size={16} className="text-brand-600" />}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 5 && (
        <div className="space-y-4">
          <p className="text-[13px] text-ink-500">
            Running compliance and entitlement checks before settlement.
          </p>
          <div className="space-y-2.5">
            <CheckItem
              label="Entitlement check"
              detail="Beneficiary is an approved group entity"
              state={checks.entitlement}
            />
            <CheckItem
              label="Sanctions & watchlist screening"
              detail="Originator, beneficiary and purpose screened"
              state={checks.sanctions}
            />
            <CheckItem
              label="Available funds check"
              detail={`Sufficient ${currency} balance at origin entity`}
              state={checks.funds}
            />
          </div>
          {!allChecksPassed && (
            <Button onClick={runComplianceChecks} disabled={checking} className="w-full">
              <ShieldCheck size={15} />
              {checking ? "Running checks..." : "Run compliance checks"}
            </Button>
          )}
        </div>
      )}

      {step === 6 && (
        <div className="space-y-4">
          <p className="text-[13px] text-ink-500">Review and confirm this transfer.</p>
          <div className="rounded-lg border border-paper-200 divide-y divide-paper-200">
            <SummaryRow label="From" value={originEntity?.name ?? "—"} />
            <SummaryRow label="To" value={beneficiaryEntity?.name ?? "—"} />
            <SummaryRow label="Amount" value={formatCurrency(numericAmount, currency)} />
            <SummaryRow
              label="Purpose code"
              value={purposeCodes.find((p) => p.code === purposeCode)?.label ?? "—"}
            />
            <SummaryRow label="Compliance" value="All checks passed" tone="emerald" />
          </div>
          <div className="rounded-lg bg-amber-100/40 px-4 py-3 text-[12px] leading-relaxed text-amber-500">
            This transfer will settle atomically on the tokenised ledger and cannot be reversed
            once confirmed. Simulated environment — no real funds move.
          </div>
        </div>
      )}

      {step === 7 && (
        <div className="space-y-5">
          <div className="flex items-center gap-3 rounded-lg bg-emerald-100/40 px-4 py-3.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-paper-0">
              <Check size={16} strokeWidth={3} />
            </div>
            <div>
              <p className="text-[13.5px] font-semibold text-charcoal-900">Settlement complete</p>
              <p className="text-[12px] text-ink-500">Transfer settled and reconciled on-ledger</p>
            </div>
          </div>

          <div className="rounded-lg border border-paper-200 divide-y divide-paper-200">
            <SummaryRow label="Reference" value={reference} mono />
            <SummaryRow label="Timestamp" value={timestamp} />
            <SummaryRow label="From" value={originEntity?.name ?? "—"} />
            <SummaryRow label="To" value={beneficiaryEntity?.name ?? "—"} />
            <SummaryRow label="Amount" value={formatCurrency(numericAmount, currency)} />
          </div>

          <div>
            <p className="mb-2 text-[12px] font-medium text-ink-700">Settlement timeline</p>
            <Timeline
              steps={stageOrder.map((s, idx) => ({
                label: s,
                state: idx <= currentStageIndex ? "done" : "pending",
              }))}
            />
          </div>
        </div>
      )}

      <div className="mt-6 flex items-center justify-between border-t border-paper-200 pt-5">
        {step > 1 && step < 7 ? (
          <Button variant="ghost" onClick={() => setStep((s) => (s - 1) as Step)}>
            Back
          </Button>
        ) : (
          <span />
        )}

        {step < 5 && (
          <Button
            onClick={() => setStep((s) => (s + 1) as Step)}
            disabled={step === 2 && !beneficiaryId}
          >
            Continue
            <ArrowRight size={14} />
          </Button>
        )}
        {step === 5 && (
          <Button onClick={() => setStep(6)} disabled={!allChecksPassed}>
            Continue to confirmation
            <ArrowRight size={14} />
          </Button>
        )}
        {step === 6 && <Button onClick={confirmSettlement}>Confirm & settle</Button>}
        {step === 7 && <Button onClick={handleClose}>Done</Button>}
      </div>
    </Modal>
  );
}

function SummaryRow({
  label,
  value,
  mono,
  tone,
}: {
  label: string;
  value: string;
  mono?: boolean;
  tone?: "emerald";
}) {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <span className="text-[12px] text-ink-500">{label}</span>
      <span
        className={`text-[12.5px] font-medium ${mono ? "font-mono" : ""} ${
          tone === "emerald" ? "text-emerald-600" : "text-charcoal-900"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
