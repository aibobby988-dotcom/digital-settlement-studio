"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { entities } from "@/lib/mock/entities";
import type { CurrencyCode } from "@/lib/types";
import { formatCurrency, generateReference, nowTimestamp } from "@/lib/utils";
import { useToast } from "@/components/ui/Toast";

const currencies: CurrencyCode[] = ["HKD", "USD", "GBP", "SGD"];

export function IssueRedeemModal({
  open,
  onClose,
  mode,
  defaultEntityId,
}: {
  open: boolean;
  onClose: () => void;
  mode: "issue" | "redeem";
  defaultEntityId?: string;
}) {
  const { showToast } = useToast();
  const [entityId, setEntityId] = useState(defaultEntityId ?? entities[0].id);
  const [currency, setCurrency] = useState<CurrencyCode>("USD");
  const [amount, setAmount] = useState("1000000");
  const [done, setDone] = useState<{ reference: string; timestamp: string } | null>(null);

  const entity = entities.find((e) => e.id === entityId);
  const numericAmount = Number(amount || 0);
  const verb = mode === "issue" ? "Issue" : "Redeem";

  function handleClose() {
    onClose();
    setTimeout(() => {
      setDone(null);
      setAmount("1000000");
    }, 250);
  }

  function submit() {
    const reference = generateReference(mode === "issue" ? "ISS" : "RDM");
    setDone({ reference, timestamp: nowTimestamp() });
    showToast({
      title: `${verb === "Issue" ? "Issuance" : "Redemption"} complete`,
      description: `${reference} · ${formatCurrency(numericAmount, currency)} · ${entity?.name ?? ""}`,
      tone: "success",
    });
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      title={`${verb} Tokenised Deposit`}
      subtitle={
        mode === "issue"
          ? "Issue a new tokenised deposit 1:1 backed by a funded bank deposit"
          : "Redeem a tokenised deposit back into the underlying bank account"
      }
    >
      {!done ? (
        <div className="space-y-5">
          <div>
            <label className="mb-2 block text-[12.5px] font-medium text-ink-700">Entity</label>
            <select
              value={entityId}
              onChange={(e) => setEntityId(e.target.value)}
              className="w-full rounded-lg border border-paper-200 px-3.5 py-2.5 text-[13px] outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
            >
              {entities.map((e) => (
                <option key={e.id} value={e.id}>
                  {e.name}
                </option>
              ))}
            </select>
          </div>
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
          <div className="rounded-lg bg-paper-50 px-4 py-3 text-[12px] leading-relaxed text-ink-500">
            {mode === "issue"
              ? "Tokenised deposits are minted only against a confirmed, funded deposit held at the issuing entity — issuance never exceeds underlying funds."
              : "Redemption reduces the tokenised deposit balance and releases the equivalent underlying funds same day."}
          </div>
          <div className="flex justify-end border-t border-paper-200 pt-5">
            <Button onClick={submit}>{verb} deposit</Button>
          </div>
        </div>
      ) : (
        <div className="space-y-5">
          <div className="flex items-center gap-3 rounded-lg bg-emerald-100/40 px-4 py-3.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-paper-0">
              <Check size={16} strokeWidth={3} />
            </div>
            <div>
              <p className="text-[13.5px] font-semibold text-charcoal-900">
                {verb === "Issue" ? "Issuance" : "Redemption"} complete
              </p>
              <p className="text-[12px] text-ink-500">Confirmed on the tokenised ledger</p>
            </div>
          </div>
          <div className="rounded-lg border border-paper-200 divide-y divide-paper-200">
            <div className="flex items-center justify-between px-4 py-3">
              <span className="text-[12px] text-ink-500">Reference</span>
              <span className="font-mono text-[12.5px] font-medium text-charcoal-900">
                {done.reference}
              </span>
            </div>
            <div className="flex items-center justify-between px-4 py-3">
              <span className="text-[12px] text-ink-500">Timestamp</span>
              <span className="text-[12.5px] font-medium text-charcoal-900">{done.timestamp}</span>
            </div>
            <div className="flex items-center justify-between px-4 py-3">
              <span className="text-[12px] text-ink-500">Entity</span>
              <span className="text-[12.5px] font-medium text-charcoal-900">{entity?.name}</span>
            </div>
            <div className="flex items-center justify-between px-4 py-3">
              <span className="text-[12px] text-ink-500">Amount</span>
              <span className="text-[12.5px] font-medium text-charcoal-900">
                {formatCurrency(numericAmount, currency)}
              </span>
            </div>
          </div>
          <div className="flex justify-end border-t border-paper-200 pt-5">
            <Button onClick={handleClose}>Done</Button>
          </div>
        </div>
      )}
    </Modal>
  );
}
