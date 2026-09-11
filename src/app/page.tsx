"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Clock3,
  AlarmClockOff,
  FileWarning,
  EyeOff,
  ShieldAlert,
  Radar,
  Workflow,
  ShieldCheck,
  Scale,
  Settings2,
  Rocket,
  Users,
  ArrowRight,
  PlayCircle,
} from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { WalkthroughBar } from "@/components/ui/WalkthroughBar";
import { TOUR_STORAGE_KEY, tourSteps } from "@/lib/tour";

const clientProblems = [
  {
    icon: Clock3,
    title: "Trapped liquidity across time zones",
    description: "Cash sits idle in one entity while another entity needs it, because banking hours don't overlap.",
  },
  {
    icon: AlarmClockOff,
    title: "Delayed funding from payment cut-offs",
    description: "Urgent transfers wait for the next cut-off window instead of moving when the business needs them.",
  },
  {
    icon: FileWarning,
    title: "Manual reconciliation",
    description: "Treasury and operations teams spend hours matching ledger entries across systems and entities.",
  },
  {
    icon: EyeOff,
    title: "Fragmented treasury visibility",
    description: "Balances and transaction status are scattered across banking portals with no single real-time view.",
  },
  {
    icon: ShieldAlert,
    title: "Settlement risk on exchange",
    description: "When cash must exchange against an asset or another currency, one leg can fail after the other has paid.",
  },
];

const whyNow = [
  "Treasury teams now expect real-time liquidity visibility, not next-morning statements.",
  "Payments are becoming API-driven and increasingly automated by ERPs and treasury systems.",
  "Tokenisation can support conditional and programmable settlement that legacy rails cannot.",
  "Institutional digital money needs regulatory, operational and interoperability discipline to be usable at scale.",
];

const phases = [
  { phase: "Phase 1", label: "Intrabank corporate treasury" },
  { phase: "Phase 2", label: "Cross-border selected corridors" },
  { phase: "Phase 3", label: "Tokenised-asset DvP" },
  { phase: "Phase 4", label: "Cross-bank interoperability & FX PvP" },
];

const successMetrics = [
  "Active clients and entities onboarded",
  "Settlement volume and value processed",
  "Settlement success rate",
  "Exception rate",
  "Reconciliation break rate",
  "Client liquidity benefit realised",
  "Time saved versus existing operational process",
  "Commercial revenue / retained operating balances",
];

const pmDimensions = [
  {
    icon: Users,
    title: "Client value",
    description: "Does this solve a liquidity problem the client actually has, better than their current process?",
  },
  {
    icon: ShieldAlert,
    title: "Risk",
    description: "Financial crime, credit, liquidity and settlement-asset risk all need named controls, not assumptions.",
  },
  {
    icon: Scale,
    title: "Legal finality",
    description: "Technical settlement isn't legal settlement — jurisdictional legal opinions are a prerequisite, not an afterthought.",
  },
  {
    icon: Workflow,
    title: "Operations",
    description: "Reconciliation, exception handling and incident response have to work on day one, at scale.",
  },
  {
    icon: Settings2,
    title: "Technology",
    description: "The platform is an enabler for the proposition — not the product itself.",
  },
  {
    icon: Rocket,
    title: "Commercial rollout",
    description: "A pricing model, a support model and a pilot-to-scale decision path are part of the product, not extras.",
  },
];

export default function ExecutiveBriefPage() {
  const router = useRouter();

  function startWalkthrough() {
    try {
      sessionStorage.setItem(TOUR_STORAGE_KEY, JSON.stringify({ active: true, step: 2 }));
    } catch {
      // sessionStorage unavailable — walkthrough just won't track progress
    }
    router.push(tourSteps[1].path);
  }

  return (
    <div className="space-y-12">
      <WalkthroughBar step={1} />

      <PageHeader
        eyebrow="Executive Brief"
        title="Digital Settlement Studio — the 5-minute version"
        description="A decision-ready summary of the product thesis, target client, flagship proposition and delivery strategy — built for a fast walkthrough, not a deep read."
        actions={
          <Button icon={<PlayCircle size={15} />} onClick={startWalkthrough}>
            Start 5-minute walkthrough
          </Button>
        }
      />

      <Card className="border-charcoal-900 bg-charcoal-950">
        <Badge tone="brand" className="bg-brand-500/10 text-brand-300 ring-brand-400/25">
          Product thesis
        </Badge>
        <p className="mt-4 max-w-2xl text-[19px] font-semibold leading-snug text-paper-0 sm:text-[22px]">
          &ldquo;Digital money is the settlement and liquidity layer that makes tokenised finance
          commercially useful.&rdquo;
        </p>
        <p className="mt-4 max-w-2xl text-[13px] leading-relaxed text-ink-400">
          Tokenised assets are only as useful as the cash that can move against them, on demand,
          under control. This product is that cash layer — starting with corporate treasury.
        </p>
      </Card>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader title="Target client" />
          <p className="text-[13px] leading-relaxed text-ink-700">
            Multinational corporates with multiple legal entities, cross-border liquidity needs,
            frequent high-value treasury transfers, and operational cut-off constraints that
            legacy payment rails cannot solve.
          </p>
        </Card>
        <Card className="border-brand-500 bg-brand-50/40">
          <CardHeader title="Flagship proposition" actions={<Badge tone="brand">24/7 Tokenised Treasury</Badge>} />
          <p className="text-[13px] leading-relaxed text-charcoal-900">
            Tokenised deposits enable instant, controlled movement of commercial-bank money
            between approved corporate entities in supported corridors — 24 hours a day, with the
            same control standard as traditional wholesale payments.
          </p>
          <Link
            href="/treasury"
            className="mt-3 inline-flex items-center gap-1 text-[12.5px] font-medium text-brand-600"
          >
            View the flagship flow
            <ArrowRight size={13} />
          </Link>
        </Card>
      </section>

      <section>
        <PageHeader eyebrow="The problem" title="Core client problem" />
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {clientProblems.map((p) => {
            const Icon = p.icon;
            return (
              <Card key={p.title}>
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-50 text-brand-600">
                  <Icon size={16} />
                </div>
                <h3 className="mt-3.5 text-[13.5px] font-semibold text-charcoal-900">{p.title}</h3>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-500">{p.description}</p>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <PageHeader eyebrow="Context" title="Why now" />
          <ul className="mt-5 space-y-3">
            {whyNow.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-ink-700">
                <Radar size={15} className="mt-0.5 shrink-0 text-brand-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <PageHeader eyebrow="Delivery" title="Phased strategy" />
          <div className="mt-5 space-y-2.5">
            {phases.map((p) => (
              <div
                key={p.phase}
                className="flex items-center gap-3 rounded-lg border border-paper-200 bg-paper-0 px-4 py-3"
              >
                <Badge tone="neutral">{p.phase}</Badge>
                <span className="text-[13px] text-charcoal-900">{p.label}</span>
              </div>
            ))}
          </div>
          <Link
            href="/roadmap"
            className="mt-3 inline-flex items-center gap-1 text-[12.5px] font-medium text-brand-600"
          >
            View full roadmap with go/no-go gates
            <ArrowRight size={13} />
          </Link>
        </div>
      </section>

      <section>
        <PageHeader eyebrow="How we'll know it's working" title="Success metrics" />
        <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {successMetrics.map((m) => (
            <div key={m} className="rounded-lg border border-paper-200 bg-paper-0 px-3.5 py-3 text-[12px] text-charcoal-900">
              {m}
            </div>
          ))}
        </div>
      </section>

      <section>
        <PageHeader
          eyebrow="Discipline"
          title="Why this is a product-management problem, not only a technology problem"
        />
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pmDimensions.map((d) => {
            const Icon = d.icon;
            return (
              <Card key={d.title}>
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-charcoal-900 text-brand-400">
                  <Icon size={16} />
                </div>
                <h3 className="mt-3.5 text-[13.5px] font-semibold text-charcoal-900">{d.title}</h3>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-500">{d.description}</p>
              </Card>
            );
          })}
        </div>
        <p className="mt-5 flex items-center gap-2 text-[12px] text-ink-500">
          <ShieldCheck size={14} className="text-brand-500" />
          Real implementation requires cross-functional collaboration across Product, Engineering,
          Architecture, Operations, Legal, Compliance, Financial Crime, Risk, Sales and external
          partners — see <Link href="/backlog" className="font-medium text-brand-600">Delivery Backlog</Link>.
        </p>
      </section>
    </div>
  );
}
