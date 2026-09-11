import Link from "next/link";
import {
  Activity,
  Clock3,
  Building2,
  Wallet,
  ArrowUpRight,
  Landmark,
  ArrowLeftRight,
  Repeat,
  Globe2,
  Eye,
  FileSpreadsheet,
  ShieldCheck,
} from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { KpiCard } from "@/components/ui/KpiCard";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const kpis = [
  {
    label: "Settlement success rate",
    value: "99.98%",
    helpText: "Trailing 90-day rolling average",
    icon: <Activity size={15} />,
  },
  {
    label: "Average settlement time",
    value: "< 60 sec",
    helpText: "Initiation to on-ledger finality",
    icon: <Clock3 size={15} />,
  },
  {
    label: "Active corporate entities",
    value: "24",
    helpText: "Across 4 currency corridors",
    icon: <Building2 size={15} />,
  },
  {
    label: "Value settled this month",
    value: "USD 1.84bn",
    helpText: "Tokenised deposits, bonds and FX",
    icon: <Wallet size={15} />,
  },
];

const products = [
  {
    href: "/treasury",
    icon: Landmark,
    title: "Tokenised Treasury",
    flagship: true,
    description:
      "24/7 corporate treasury dashboard for issuing, transferring and redeeming tokenised bank deposits across group entities.",
  },
  {
    href: "/bond-dvp",
    icon: ArrowLeftRight,
    title: "Bond DvP Settlement",
    flagship: false,
    description:
      "Atomic Delivery-versus-Payment settlement for tokenised fixed income — the asset and cash legs settle together, or not at all.",
  },
  {
    href: "/fx-pvp",
    icon: Repeat,
    title: "FX PvP Settlement",
    flagship: false,
    description:
      "Atomic Payment-versus-Payment FX settlement that removes principal risk by settling both currency legs simultaneously.",
  },
];

const whyItMatters = [
  {
    icon: Globe2,
    title: "24/7 liquidity movement",
    description:
      "Corporate treasury clients move value across entities and currencies outside traditional cut-off times and banking hours.",
  },
  {
    icon: Eye,
    title: "Real-time visibility",
    description:
      "Balances, transaction status and settlement events are visible as they happen, not batched overnight.",
  },
  {
    icon: FileSpreadsheet,
    title: "Reduced reconciliation effort",
    description:
      "Automated, continuous reconciliation between the settlement ledger and core banking records reduces manual effort and breaks.",
  },
  {
    icon: ShieldCheck,
    title: "Controlled programmable settlement",
    description:
      "Entitlements, screening and approvals are enforced programmatically, to the same control standard as traditional wholesale payments.",
  },
  {
    icon: ArrowLeftRight,
    title: "Atomic DvP / PvP risk reduction",
    description:
      "Linked settlement legs either both complete or both fail — removing principal and counterparty risk from the settlement window.",
  },
];

export default function OverviewPage() {
  return (
    <div className="space-y-12">
      <div className="rounded-2xl bg-charcoal-950 px-6 py-10 sm:px-10 sm:py-14">
        <Badge tone="brand" className="bg-brand-500/10 text-brand-300 ring-brand-400/25">
          Independent product case study
        </Badge>
        <h1 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-paper-0 sm:text-4xl">
          Digital Settlement Studio
        </h1>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-400">
          A controlled, 24/7 settlement proposition for institutional treasury and tokenised
          assets — designed for regulated financial infrastructure, not retail speculation.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/treasury"
            className="inline-flex items-center gap-1.5 rounded-lg bg-brand-500 px-4 py-2.5 text-[13px] font-medium text-charcoal-950 hover:bg-brand-400"
          >
            Explore Tokenised Treasury
            <ArrowUpRight size={14} />
          </Link>
          <Link
            href="/roadmap"
            className="inline-flex items-center gap-1.5 rounded-lg bg-charcoal-800 px-4 py-2.5 text-[13px] font-medium text-paper-100 ring-1 ring-inset ring-charcoal-600 hover:bg-charcoal-700"
          >
            View product roadmap
          </Link>
        </div>
      </div>

      <section>
        <PageHeader eyebrow="Performance" title="Platform at a glance" />
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map((kpi) => (
            <KpiCard key={kpi.label} {...kpi} />
          ))}
        </div>
      </section>

      <section>
        <PageHeader
          eyebrow="Settlement flows"
          title="Explore the settlement propositions"
          description="Three connected settlement flows built on the same control and entitlement model."
        />
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <Link
                key={product.href}
                href={product.href}
                className={`group flex flex-col rounded-xl border p-5 transition-colors hover:border-brand-400/50 hover:bg-brand-50/30 ${
                  product.flagship ? "border-brand-500 bg-brand-50/30" : "border-paper-200 bg-paper-0"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-charcoal-900 text-brand-400">
                    <Icon size={17} />
                  </div>
                  {product.flagship && <Badge tone="brand">Flagship proposition</Badge>}
                </div>
                <h3 className="mt-4 text-[14px] font-semibold text-charcoal-900">{product.title}</h3>
                <p className="mt-2 flex-1 text-[12.5px] leading-relaxed text-ink-500">
                  {product.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-[12.5px] font-medium text-brand-600">
                  View flow
                  <ArrowUpRight
                    size={13}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section>
        <PageHeader
          eyebrow="Client value"
          title="Why this matters"
          description="Digital settlement infrastructure is an enabler for client outcomes — not a product in its own right."
        />
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyItMatters.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="flex flex-col">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-50 text-brand-600">
                  <Icon size={16} />
                </div>
                <h3 className="mt-3.5 text-[13.5px] font-semibold text-charcoal-900">{item.title}</h3>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-500">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}
