"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowDownToLine, ArrowRight, ArrowUpFromLine, CheckCircle2, Info, Layers, Send } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { StrategyContext } from "@/components/ui/StrategyContext";
import { TermsOnThisPage } from "@/components/ui/TermsOnThisPage";
import { Card, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { StatusBadge, Badge } from "@/components/ui/Badge";
import { Timeline } from "@/components/ui/Timeline";
import { TransferWizard } from "@/components/treasury/TransferWizard";
import { IssueRedeemModal } from "@/components/treasury/IssueRedeemModal";
import { balances, entities, transactions } from "@/lib/mock/entities";
import type { CurrencyCode, TransferStage } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";
import { WalkthroughBar } from "@/components/ui/WalkthroughBar";

const currencies: CurrencyCode[] = ["HKD", "USD", "GBP", "SGD"];
const stageOrder: TransferStage[] = [
  "Initiated",
  "Validated",
  "Sanctions Screened",
  "Authorised",
  "Settled",
  "Reconciled",
];

const SELECTED_ENTITY_KEY = "dss:treasury:selectedEntity";

const clientValue = [
  "24/7 movement in supported corridors",
  "Real-time liquidity visibility",
  "Reduced manual reconciliation",
  "API-driven and conditional payment capability",
  "Controlled access and approval workflow",
];

const integrationSteps = [
  "Treasury Management System / ERP",
  "API gateway",
  "Entitlement & policy engine",
  "Settlement orchestration",
  "Tokenised deposit ledger",
  "Core banking reconciliation",
];

export default function TreasuryPage() {
  const [entityId, setEntityId] = useState(entities[0].id);
  const [modal, setModal] = useState<"transfer" | "issue" | "redeem" | null>(null);
  const [selectedTxn, setSelectedTxn] = useState<string | null>(transactions[0]?.id ?? null);

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(SELECTED_ENTITY_KEY);
      if (saved && entities.some((e) => e.id === saved)) {
        // One-time hydration from sessionStorage after mount — deliberately outside
        // the render path to avoid an SSR/client markup mismatch.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setEntityId(saved);
      }
    } catch {
      // sessionStorage unavailable — fall back to default entity
    }
  }, []);

  useEffect(() => {
    try {
      sessionStorage.setItem(SELECTED_ENTITY_KEY, entityId);
    } catch {
      // sessionStorage unavailable — selection just won't persist across reloads
    }
  }, [entityId]);

  const entity = entities.find((e) => e.id === entityId)!;
  const entityBalances = useMemo(
    () => currencies.map((c) => balances.find((b) => b.entityId === entityId && b.currency === c)),
    [entityId]
  );
  const entityTxns = useMemo(
    () =>
      transactions.filter(
        (t) => t.fromEntity === entity.name || t.toEntity === entity.name
      ),
    [entity]
  );
  const activeTxn = transactions.find((t) => t.id === selectedTxn) ?? transactions[0];

  return (
    <div className="space-y-10">
      <WalkthroughBar step={3} />
      <div>
        <Badge tone="brand" className="mb-3">Flagship proposition</Badge>
        <PageHeader
          eyebrow="Tokenised Treasury"
          title="Corporate treasury dashboard"
          description="Tokenised deposits are 1:1 digital representations of funded bank deposits — every unit issued is backed by real funds held at the issuing entity, redeemable on demand."
          actions={
            <div className="flex flex-wrap gap-2">
              <Button variant="secondary" size="sm" icon={<ArrowUpFromLine size={14} />} onClick={() => setModal("issue")}>
                Issue
              </Button>
              <Button variant="secondary" size="sm" icon={<Send size={14} />} onClick={() => setModal("transfer")}>
                Transfer
              </Button>
              <Button variant="secondary" size="sm" icon={<ArrowDownToLine size={14} />} onClick={() => setModal("redeem")}>
                Redeem
              </Button>
            </div>
          }
        />
      </div>

      <TermsOnThisPage terms={["Tokenised deposit", "Settlement", "Reconciliation", "Maker-checker", "Sanctions screening", "Treasurer", "Cut-off time"]} />

      <StrategyContext track="track1" />

      <div className="flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-100/20 px-4 py-3.5">
        <Info size={16} className="mt-0.5 shrink-0 text-blue-600" />
        <p className="text-[12.5px] leading-relaxed text-charcoal-900">
          <strong className="font-semibold">Tokenised deposits</strong> are digital representations
          of commercial bank money, issued 1:1 against a funded deposit at the issuing entity.
          They move on a permissioned settlement ledger. Legal treatment, redemption rights and
          settlement finality must be confirmed through contractual documentation and
          jurisdiction-specific analysis before each production corridor goes live.
        </p>
      </div>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader title="Client value" />
          <ul className="space-y-2.5">
            {clientValue.map((v) => (
              <li key={v} className="flex items-start gap-2.5 text-[12.5px] leading-relaxed text-ink-700">
                <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-brand-500" />
                {v}
              </li>
            ))}
          </ul>
        </Card>
        <Card>
          <CardHeader title="Target client" />
          <p className="text-[13px] leading-relaxed text-ink-700">
            Multinational corporate treasury with multiple legal entities and frequent
            cross-border liquidity requirements — moving cash between entities faster and more
            visibly than traditional cut-off-constrained payment rails allow.
          </p>
        </Card>
      </section>

      <Card className="border-brand-100 bg-brand-50/30">
        <CardHeader
          title="Flagship workflow: 24/7 tokenised cash pooling"
          subtitle="A treasury-management product built on tokenised deposits — no DvP or PvP dependency in V1."
        />
        <div className="grid grid-cols-1 gap-4 text-[12.5px] leading-relaxed text-ink-700 sm:grid-cols-3">
          <div>
            <p className="font-semibold text-charcoal-900">1. Set policy</p>
            <p className="mt-1">The treasury hub defines target balances, approved entities, currencies, limits and maker-checker rules.</p>
          </div>
          <div>
            <p className="font-semibold text-charcoal-900">2. Sweep or fund</p>
            <p className="mt-1">Surplus is concentrated to the hub; an entity below target receives just-in-time funding through a controlled tokenised-deposit transfer.</p>
          </div>
          <div>
            <p className="font-semibold text-charcoal-900">3. Reconcile in real time</p>
            <p className="mt-1">ERP/TMS receives structured status and balance updates, while the tokenised and core-bank ledgers reconcile continuously.</p>
          </div>
        </div>
        <p className="mt-4 border-t border-brand-100 pt-4 text-[12px] leading-relaxed text-ink-600">
          <strong className="text-charcoal-900">Dependency boundary:</strong> V1 is an intrabank liquidity product. DvP is only needed when cash is exchanged for an asset; PvP is only needed when one currency is exchanged for another.
        </p>
      </Card>

      <div className="flex items-start gap-3 rounded-xl border border-amber-100 bg-amber-100/20 px-4 py-3.5">
        <Layers size={16} className="mt-0.5 shrink-0 text-amber-500" />
        <p className="text-[12.5px] leading-relaxed text-charcoal-900">
          <strong className="font-semibold">Not a stablecoin.</strong> A tokenised deposit is a
          digital representation of a designated commercial-bank deposit. It is not a separately
          reserved stablecoin — value is not held in a separate reserve pool, it is the underlying
          bank deposit itself, represented on a permissioned ledger.
        </p>
      </div>

      <Card>
        <CardHeader title="Integration model" subtitle="How a client's own systems connect through to settlement" />
        <div className="flex flex-col gap-2 overflow-x-auto scrollbar-thin sm:flex-row sm:items-center sm:gap-0">
          {integrationSteps.map((step, idx) => (
            <div key={step} className="flex items-center gap-2 sm:flex-1">
              <div className="flex-1 rounded-lg border border-paper-200 bg-paper-50 px-3.5 py-2.5 text-center text-[11.5px] font-medium text-charcoal-900">
                {step}
              </div>
              {idx < integrationSteps.length - 1 && (
                <ArrowRight size={14} className="hidden shrink-0 text-ink-400 sm:block" />
              )}
            </div>
          ))}
        </div>
      </Card>

      <section>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-600">
              Entity / account
            </p>
            <h2 className="mt-1 text-[15px] font-semibold text-charcoal-900">{entity.name}</h2>
            <p className="text-[12px] text-ink-500">
              {entity.jurisdiction} · {entity.entityType}
            </p>
          </div>
          <select
            value={entityId}
            onChange={(e) => setEntityId(e.target.value)}
            className="w-full rounded-lg border border-paper-200 bg-paper-0 px-3.5 py-2.5 text-[13px] outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 sm:w-80"
          >
            {entities.map((e) => (
              <option key={e.id} value={e.id}>
                {e.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {entityBalances.map((b, idx) => (
            <Card key={currencies[idx]}>
              <p className="text-[12px] font-medium text-ink-500">{currencies[idx]} balance</p>
              <p className="mt-2.5 break-words text-[19px] font-semibold leading-tight tracking-tight text-charcoal-900 tabular-nums sm:text-[20px]">
                {formatCurrency(b?.balance ?? 0, currencies[idx])}
              </p>
              <p className="mt-1 text-[11px] text-ink-400">Tokenised deposit · on-ledger</p>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <Card padded={false}>
          <CardHeader
            title="Recent transactions"
            subtitle={`${entityTxns.length} transactions involving ${entity.name}`}
          />
          <div className="overflow-x-auto scrollbar-thin px-5 pb-5">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="border-b border-paper-200 text-[11px] uppercase tracking-wide text-ink-400">
                  <th className="py-2.5 pr-4 font-medium">Reference</th>
                  <th className="py-2.5 pr-4 font-medium">From</th>
                  <th className="py-2.5 pr-4 font-medium">To</th>
                  <th className="py-2.5 pr-4 font-medium">Amount</th>
                  <th className="py-2.5 pr-4 font-medium">Purpose</th>
                  <th className="py-2.5 pr-4 font-medium">Stage</th>
                  <th className="py-2.5 pr-4 font-medium">Date</th>
                </tr>
              </thead>
              <tbody>
                {(entityTxns.length ? entityTxns : transactions).map((t) => (
                  <tr
                    key={t.id}
                    onClick={() => setSelectedTxn(t.id)}
                    className={`cursor-pointer border-b border-paper-100 text-[12.5px] transition-colors hover:bg-paper-50 ${
                      selectedTxn === t.id ? "bg-brand-50/40" : ""
                    }`}
                  >
                    <td className="py-3 pr-4 font-mono text-[11.5px] text-ink-500">{t.reference}</td>
                    <td className="py-3 pr-4 text-charcoal-900 max-w-[160px] truncate">{t.fromEntity}</td>
                    <td className="py-3 pr-4 text-charcoal-900 max-w-[160px] truncate">{t.toEntity}</td>
                    <td className="py-3 pr-4 font-medium tabular-nums text-charcoal-900">
                      {formatCurrency(t.amount, t.currency)}
                    </td>
                    <td className="py-3 pr-4 font-mono text-[11px] text-ink-500">{t.purposeCode}</td>
                    <td className="py-3 pr-4">
                      <StatusBadge status={t.stage} />
                    </td>
                    <td className="py-3 pr-4 whitespace-nowrap text-ink-500">{t.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </section>

      {activeTxn && (
        <section>
          <Card>
            <CardHeader
              title="Transaction timeline"
              subtitle={`${activeTxn.reference} · ${activeTxn.fromEntity} → ${activeTxn.toEntity}`}
            />
            <Timeline
              steps={stageOrder.map((s) => ({
                label: s,
                state:
                  stageOrder.indexOf(s) < stageOrder.indexOf(activeTxn.stage)
                    ? "done"
                    : s === activeTxn.stage
                    ? "current"
                    : "pending",
              }))}
            />
          </Card>
        </section>
      )}

      <TransferWizard
        open={modal === "transfer"}
        onClose={() => setModal(null)}
        defaultEntityId={entityId}
      />
      <IssueRedeemModal
        open={modal === "issue"}
        onClose={() => setModal(null)}
        mode="issue"
        defaultEntityId={entityId}
      />
      <IssueRedeemModal
        open={modal === "redeem"}
        onClose={() => setModal(null)}
        mode="redeem"
        defaultEntityId={entityId}
      />
    </div>
  );
}
