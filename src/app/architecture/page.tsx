import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardHeader } from "@/components/ui/Card";
import { SystemArchitectureDiagram } from "@/components/architecture/SystemArchitectureDiagram";
import { TransferDecisionFlowDiagram } from "@/components/architecture/TransferDecisionFlowDiagram";
import { AtomicSettlementDiagram } from "@/components/architecture/AtomicSettlementDiagram";

export default function ArchitecturePage() {
  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="Architecture"
        title="System architecture & decision flows"
        description="How the settlement platform's components connect, and how a request moves through checks and decision points before it settles."
      />

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
            title="Atomic settlement — DvP / PvP"
            subtitle="The same both-legs-or-neither mechanism underpins Bond DvP and FX PvP settlement."
          />
          <div className="overflow-x-auto scrollbar-thin">
            <div className="mx-auto max-w-[640px]">
              <AtomicSettlementDiagram />
            </div>
          </div>
          <p className="mt-5 border-t border-paper-200 pt-5 text-[12.5px] leading-relaxed text-ink-500">
            Both legs are held in escrow until every pre-settlement check clears. If any check
            fails — insufficient funds, insufficient holdings, a missing approval, or a screening
            hit — the platform rolls back both legs to their original holders rather than
            settling one side. This is what removes principal and counterparty risk from the
            settlement window, for both a bond trade and an FX exchange.
          </p>
        </Card>
      </section>
    </div>
  );
}
