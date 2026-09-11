import { ArrowRight, Landmark, Layers, Leaf, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { DvpSimulator } from "@/components/settlement/DvpSimulator";
import { bond, buyer, seller, tradeDetails } from "@/lib/mock/bonds";
import { formatCurrency, formatNumber } from "@/lib/utils";

export default function BondDvpPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="Bond DvP Settlement"
        title="Delivery versus Payment"
        description="Atomic settlement for tokenised fixed income — the bond and cash legs transfer together, or neither transfers at all."
      />

      <Card className="bg-charcoal-950 border-charcoal-900">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <Badge tone="brand" className="bg-brand-500/10 text-brand-300 ring-brand-400/25">
            <Leaf size={11} /> Tokenised green bond
          </Badge>
          <Badge tone="neutral" className="bg-charcoal-800 text-ink-400 ring-charcoal-700">
            {bond.isin}
          </Badge>
        </div>
        <h2 className="text-[16px] font-semibold text-paper-0">{bond.name}</h2>
        <p className="mt-1 text-[12.5px] text-ink-400">
          Issuer: {bond.issuer} · Coupon {bond.couponRate}% · Maturity {bond.maturity}
        </p>
        <p className="mt-4 max-w-2xl text-[13px] leading-relaxed text-paper-100">
          &ldquo;Delivery versus Payment ensures the asset transfers if and only if the payment
          settles.&rdquo; Both the bond leg and the cash leg are held in escrow on the settlement
          ledger and released in a single atomic operation — removing the risk that one party
          delivers and the other fails to pay.
        </p>
      </Card>

      <section>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
          <Card className="flex flex-col">
            <CardHeader title="Buyer" subtitle={buyer.name} />
            <div className="flex-1 space-y-3">
              <LegRow label="Account" value={buyer.account} mono />
              <LegRow label="Delivers (cash leg)" value={formatCurrency(tradeDetails.grossConsideration, "USD")} />
              <LegRow label="Receives (bond leg)" value={`${formatNumber(tradeDetails.units)} bond units`} />
              <LegRow label="Required USD balance" value={formatCurrency(buyer.cashLeg.requiredBalance, "USD")} />
            </div>
          </Card>

          <div className="hidden items-center justify-center lg:flex">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-600">
              <ArrowRight size={18} />
            </div>
          </div>

          <Card className="flex flex-col">
            <CardHeader title="Seller" subtitle={seller.name} />
            <div className="flex-1 space-y-3">
              <LegRow label="Account" value={seller.account} mono />
              <LegRow label="Delivers (bond leg)" value={`${formatNumber(tradeDetails.units)} bond units`} />
              <LegRow label="Receives (cash leg)" value={formatCurrency(tradeDetails.grossConsideration, "USD")} />
              <LegRow label="Required bond holdings" value={`${formatNumber(seller.bondLeg.requiredHoldings)} units`} />
            </div>
          </Card>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard icon={Landmark} label="Trade ID" value={tradeDetails.tradeId} mono />
        <StatCard icon={ShieldCheck} label="Settlement cycle" value={tradeDetails.settlementCycle} />
        <StatCard icon={ArrowRight} label="Gross consideration" value={formatCurrency(tradeDetails.grossConsideration, "USD")} />
      </section>

      <div className="flex items-start gap-3 rounded-xl border border-paper-200 bg-paper-50 px-4 py-3.5">
        <Layers size={16} className="mt-0.5 shrink-0 text-ink-500" />
        <div className="text-[12.5px] leading-relaxed text-charcoal-900">
          <p className="font-semibold">Illustrative cross-functional model</p>
          <ul className="mt-1.5 space-y-1 text-ink-700">
            <li>· Digital Money platform provides the tokenised cash leg.</li>
            <li>· Tokenised asset platform / custodian provides the asset and custody leg.</li>
            <li>
              · Settlement orchestration coordinates atomic DvP only after both legs satisfy
              funds, holdings, approval, eligibility and compliance checks.
            </li>
          </ul>
        </div>
      </div>

      <section>
        <DvpSimulator />
      </section>
    </div>
  );
}

function LegRow({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="flex items-center justify-between border-b border-paper-100 pb-3 last:border-0 last:pb-0">
      <span className="text-[12px] text-ink-500">{label}</span>
      <span className={`text-[13px] font-medium text-charcoal-900 ${mono ? "font-mono text-[12px]" : ""}`}>{value}</span>
    </div>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  mono,
}: {
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <Card className="flex items-center gap-3.5">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
        <Icon size={16} />
      </div>
      <div>
        <p className="text-[11.5px] text-ink-500">{label}</p>
        <p className={`text-[13.5px] font-semibold text-charcoal-900 ${mono ? "font-mono" : ""}`}>{value}</p>
      </div>
    </Card>
  );
}
