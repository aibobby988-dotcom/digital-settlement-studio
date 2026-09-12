import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { StrategyContext } from "@/components/ui/StrategyContext";
import { TermsOnThisPage } from "@/components/ui/TermsOnThisPage";
import { Card, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SystemArchitectureDiagram } from "@/components/architecture/SystemArchitectureDiagram";
import { TransferDecisionFlowDiagram } from "@/components/architecture/TransferDecisionFlowDiagram";
import { AtomicSettlementDiagram } from "@/components/architecture/AtomicSettlementDiagram";

const funnel = [
  "Client use case",
  "Settlement asset",
  "Regulatory perimeter",
  "Operating model",
  "Partner selection",
];

const scorecardCriteria = [
  "Client reach and network effects",
  "Regulatory fit",
  "Privacy / data controls",
  "Settlement finality",
  "ISO 20022 and API interoperability",
  "Financial-crime tooling",
  "Liquidity model",
  "Resilience and business continuity",
  "Vendor concentration / exit plan",
  "Economics and implementation complexity",
];

const operatingModels = [
  "Private bank-operated ledger",
  "Shared institutional network",
  "Regulated digital-money interoperability layer",
  "Tokenised asset platform / custodian",
  "Existing payment and market infrastructure",
];

export default function ArchitecturePage() {
  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="Architecture"
        title="System architecture & decision flows"
        description="How the settlement platform's components connect, and how a request moves through checks and decision points before it settles."
      />

      <TermsOnThisPage terms={["Orchestration", "API", "Permissioned network", "DLT", "Smart contract", "Reconciliation", "HSM"]} />

      <StrategyContext track="foundation" />

      <section>
        <Card>
          <CardHeader
            title="System architecture"
            subtitle="Client apps, the orchestration gateway, core settlement services, the system of record, and cross-cutting controls."
          />
          <div className="overflow-x-auto scrollbar-thin">
            <div className="min-w-[720px]">
              <SystemArchitectureDiagram />
            </div>
          </div>
          <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11.5px] text-ink-500">
            <span className="flex items-center gap-1.5">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-brand-500 text-[9px] font-bold text-paper-0">1</span>
              Numbered 1–7: the primary request path, in order
            </span>
            <span className="flex items-center gap-1.5">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-ink-400 text-[9px] font-bold text-paper-0">8</span>
              Numbered 8–10: cross-cutting reads/logging, continuous rather than sequential
            </span>
          </p>
          <div className="mt-5 grid grid-cols-1 gap-4 border-t border-paper-200 pt-5 text-[12.5px] leading-relaxed text-ink-500 sm:grid-cols-2">
            <p>
              Every client request enters through a single <strong className="text-charcoal-900">orchestration
              gateway</strong>, which sequences the entitlement, screening, ledger and settlement
              services rather than letting clients call them directly — so controls can never be
              bypassed by calling a downstream service out of order.
            </p>
            <p>
              The <strong className="text-charcoal-900">tokenised ledger</strong> and the{" "}
              <strong className="text-charcoal-900">core banking ledger</strong> are kept
              consistent by an automated reconciliation engine, and every event across the
              platform is written to an immutable audit log — independent of whether the
              transaction ultimately settles or is rejected.
            </p>
          </div>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader
            title="Tokenised transfer — decision flow"
            subtitle="The path a treasury transfer takes from initiation to settlement, and where it can be stopped."
          />
          <div className="overflow-x-auto scrollbar-thin">
            <div className="mx-auto max-w-[520px]">
              <TransferDecisionFlowDiagram />
            </div>
          </div>
          <p className="mt-5 border-t border-paper-200 pt-5 text-[12.5px] leading-relaxed text-ink-500">
            Each control is a hard gate, not an advisory step: a failed entitlement, screening or
            funds check stops the transfer before any ledger movement occurs. Only a transfer that
            clears all three moves into atomic settlement, where the debit and credit happen as a
            single operation — never partially.
          </p>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader
            title="Future settlement extensions — DvP / PvP"
            subtitle="Cash pooling uses a governed intrabank transfer. DvP and PvP are later both-legs-or-neither settlement models."
          />
          <div className="overflow-x-auto scrollbar-thin">
            <div className="mx-auto max-w-[640px]">
              <AtomicSettlementDiagram />
            </div>
          </div>
          <p className="mt-5 border-t border-paper-200 pt-5 text-[12.5px] leading-relaxed text-ink-500">
            DvP is needed when tokenised cash is exchanged for an asset; PvP is needed when one
            currency is exchanged for another. Both legs are reserved until every pre-settlement
            check clears. If any check fails — funds, holdings, approval, liquidity or screening
            — neither leg settles. These models require additional participant, legal-finality,
            liquidity and operating-model readiness beyond a V1 cash-pooling transfer.
          </p>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader
            title="Interoperability and Partner Selection Framework"
            subtitle="The product does not start by choosing a network. It starts with the client problem."
          />

          <div className="flex flex-col gap-2 overflow-x-auto scrollbar-thin sm:flex-row sm:items-center sm:gap-0">
            {funnel.map((step, idx) => (
              <div key={step} className="flex items-center gap-2 sm:flex-1">
                <div className="flex-1 rounded-lg border border-paper-200 bg-paper-50 px-3.5 py-2.5 text-center text-[11.5px] font-medium text-charcoal-900">
                  {step}
                </div>
                {idx < funnel.length - 1 && (
                  <ArrowRight size={14} className="hidden shrink-0 text-ink-400 sm:block" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 border-t border-paper-200 pt-6 lg:grid-cols-2">
            <div>
              <p className="mb-2.5 text-[11.5px] font-semibold uppercase tracking-wide text-ink-400">
                Partner and network selection scorecard
              </p>
              <ul className="space-y-1.5">
                {scorecardCriteria.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-[12.5px] text-charcoal-900">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-500" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2.5 text-[11.5px] font-semibold uppercase tracking-wide text-ink-400">
                Illustrative operating models evaluated
              </p>
              <div className="flex flex-wrap gap-2">
                {operatingModels.map((m) => (
                  <Badge key={m} tone="neutral">
                    {m}
                  </Badge>
                ))}
              </div>
              <p className="mt-3 text-[12px] leading-relaxed text-ink-500">
                Technology selection follows the client use case, settlement asset and regulatory
                perimeter — it is not a blockchain-first decision. See{" "}
                <Link href="/ecosystem" className="font-medium text-brand-600">
                  Ecosystem &amp; Market Landscape
                </Link>{" "}
                for the fuller capability landscape and market benchmarks.
              </p>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
