import { ArrowLeftRight, Clock3, Droplets, Repeat, TriangleAlert } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { StrategyContext } from "@/components/ui/StrategyContext";
import { TermsOnThisPage } from "@/components/ui/TermsOnThisPage";
import { Card, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { PvpSimulator } from "@/components/settlement/PvpSimulator";
import { fxTrade, liquidityPool, partyA, partyB, pvpDesignConstraints } from "@/lib/mock/fx";
import { formatCurrency } from "@/lib/utils";

export default function FxPvpPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="Future strategic pilot · FX PvP"
        title="Payment versus Payment"
        description="Atomic settlement of both currency legs of an FX trade — removing principal risk from the settlement window."
      />

      <TermsOnThisPage terms={["PvP", "FX", "Herstatt risk", "CLS", "Atomic settlement", "Netting"]} />

      <StrategyContext track="forward" />

      <div className="flex items-start gap-3 rounded-xl border border-amber-100 bg-amber-100/30 px-4 py-3.5">
        <TriangleAlert size={16} className="mt-0.5 shrink-0 text-amber-600" />
        <p className="text-[12.5px] leading-relaxed text-charcoal-900">
          <strong className="font-semibold">Read this before you show this page.</strong> HSBC has
          been running payment-versus-payment on distributed ledger since 2018 through FX
          Everywhere — roughly US$250bn across 150,000 intragroup payments, and a bilateral
          shared ledger with Wells Fargo since December 2021. Saying &ldquo;HSBC has not done
          payment-versus-payment&rdquo; would be corrected on the spot. The accurate and far
          more interesting observation is that FX Everywhere and the Tokenised Deposit Service
          have never been converged, so a corporate client still cannot settle a cross-currency
          payment with tokenised deposits on both legs. Treat that as a roadmap observation, not
          a proposal you are volunteering to lead — FX Everywhere may well sit outside Global
          Payments Solutions.
        </p>
      </div>

      <Card className="bg-charcoal-950 border-charcoal-900">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <Badge tone="brand" className="bg-brand-500/10 text-brand-300 ring-brand-400/25">
            <Repeat size={11} /> {fxTrade.pair} spot
          </Badge>
          <Badge tone="neutral" className="bg-charcoal-800 text-ink-400 ring-charcoal-700">
            {fxTrade.tradeId}
          </Badge>
        </div>
        <h2 className="text-[16px] font-semibold text-paper-0">
          USD/HKD exchange @ {fxTrade.rate}
        </h2>
        <p className="mt-1 text-[12.5px] text-ink-400">
          Trade date {fxTrade.tradeDate} · Value date {fxTrade.valueDate}
        </p>
        <p className="mt-4 max-w-2xl text-[13px] leading-relaxed text-paper-100">
          &ldquo;Payment versus Payment reduces FX principal risk by ensuring both currency legs
          settle together.&rdquo; Neither party releases funds until both legs are confirmed and
          ready — eliminating the window in traditional FX settlement where one party pays before
          confirming receipt of the other currency.
        </p>
      </Card>

      <div className="flex items-start gap-3 rounded-xl border border-amber-100 bg-amber-100/20 px-4 py-3.5">
        <Clock3 size={16} className="mt-0.5 shrink-0 text-amber-600" />
        <p className="text-[12.5px] leading-relaxed text-charcoal-900">
          <strong className="font-semibold">Why this is not V1:</strong> PvP needs supported currency corridors, participant-bank commitments, prefunded liquidity, valid FX quotes, legal-finality analysis and an exception/unwind model. It is a credible future extension after the core tokenised-treasury control model is proven.
        </p>
      </div>

      <section>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
          <Card className="flex flex-col">
            <CardHeader title="Party A" subtitle={partyA.name} />
            <div className="flex-1 space-y-3">
              <LegRow label="Delivers" value={formatCurrency(partyA.delivers.amount, partyA.delivers.currency)} />
              <LegRow label="Receives" value={formatCurrency(partyA.receives.amount, partyA.receives.currency)} />
            </div>
          </Card>

          <div className="hidden items-center justify-center lg:flex">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-600">
              <ArrowLeftRight size={18} />
            </div>
          </div>

          <Card className="flex flex-col">
            <CardHeader title="Party B" subtitle={partyB.name} />
            <div className="flex-1 space-y-3">
              <LegRow label="Delivers" value={formatCurrency(partyB.delivers.amount, partyB.delivers.currency)} />
              <LegRow label="Receives" value={formatCurrency(partyB.receives.amount, partyB.receives.currency)} />
            </div>
          </Card>
        </div>
      </section>

      <div className="flex items-start gap-3 rounded-xl border border-paper-200 bg-paper-50 px-4 py-3.5">
        <Clock3 size={16} className="mt-0.5 shrink-0 text-ink-500" />
        <p className="text-[12.5px] leading-relaxed text-charcoal-900">
          <strong className="font-semibold">Settlement availability:</strong> {fxTrade.settlementAvailability}
        </p>
      </div>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <StatCard
          icon={Droplets}
          label="USD liquidity available"
          value={formatCurrency(liquidityPool.USD.available, "USD")}
        />
        <StatCard
          icon={Droplets}
          label="HKD liquidity available"
          value={formatCurrency(liquidityPool.HKD.available, "HKD")}
        />
      </section>

      <Card>
        <CardHeader title="PvP design constraints" />
        <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {pvpDesignConstraints.map((c) => (
            <li
              key={c}
              className="rounded-lg border border-paper-200 bg-paper-50 px-3.5 py-2.5 text-[12px] text-charcoal-900"
            >
              {c}
            </li>
          ))}
        </ul>
      </Card>

      <Card>
        <CardHeader
          title="The corporate-treasury story to tell"
          subtitle="Say this before touching the simulator — it is the version a treasurer recognises"
        />
        <div className="space-y-3 text-[12.5px] leading-relaxed text-ink-700">
          <p>
            <strong className="text-charcoal-900">The setup.</strong> A United States manufacturer
            must fund a EUR 20m supplier invoice from its European subsidiary. Its treasury sells
            dollars for euros with its bank.
          </p>
          <p>
            <strong className="text-charcoal-900">The risk without payment-versus-payment.</strong>{" "}
            The dollar leg leaves New York during US hours. Because of time zones and cut-offs, the
            euro leg may not credit until hours later or the next morning. In that window the
            company has paid out and holds nothing. If the counterparty fails mid-window, the
            dollars are gone, the supplier is unpaid, and production halts.
          </p>
          <p>
            <strong className="text-charcoal-900">With it.</strong> Both legs are funded into a
            protected settlement position and verified clear of compliance holds. The system
            releases them simultaneously — the corporate receives euros in Europe at the same
            moment the bank receives dollars in New York.
          </p>
          <p className="rounded-lg bg-paper-50 px-3 py-2.5 text-charcoal-900">
            <strong className="font-semibold">The benefit in the treasurer&apos;s words:</strong>{" "}
            the exposure window disappears and less intraday liquidity sits idle waiting for the
            other leg. Not &ldquo;we used a blockchain&rdquo;.
          </p>
        </div>
      </Card>

      <section>
        <PvpSimulator />
      </section>
    </div>
  );
}

function LegRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-paper-100 pb-3 last:border-0 last:pb-0">
      <span className="text-[12px] text-ink-500">{label}</span>
      <span className="text-[13px] font-medium text-charcoal-900">{value}</span>
    </div>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  value: string;
}) {
  return (
    <Card className="flex items-center gap-3.5">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
        <Icon size={16} />
      </div>
      <div>
        <p className="text-[11.5px] text-ink-500">{label}</p>
        <p className="text-[13.5px] font-semibold text-charcoal-900">{value}</p>
      </div>
    </Card>
  );
}
