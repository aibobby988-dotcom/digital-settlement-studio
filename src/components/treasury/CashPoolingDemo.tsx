"use client";

import { useEffect, useRef, useState } from "react";
import {
  AlertTriangle,

  Ban,
  Check,
  PlayCircle,
  RotateCcw,
  Settings2,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader } from "@/components/ui/Card";
import { cn, formatCurrency } from "@/lib/utils";

/**
 * Track 1 demo. The point of difference from the existing transfer flow is that
 * nobody instructs these payments — the policy does. Money moves because a
 * balance crossed a threshold, which is what makes this a product rather than a
 * faster wire.
 */

const POLICY = {
  minBalance: 500_000,
  topUpTo: 2_000_000,
  dailyCap: 3_000_000,
  approvedOnly: true,
};

interface Entity {
  id: string;
  name: string;
  region: string;
  balance: number;
  isHub?: boolean;
  approved: boolean;
}

const START: Entity[] = [
  { id: "hk", name: "Meridian Holdings", region: "Hong Kong · treasury hub", balance: 12_400_000, isHub: true, approved: true },
  { id: "sg", name: "Meridian Singapore", region: "Singapore", balance: 1_150_000, approved: true },
  { id: "uk", name: "Meridian UK", region: "United Kingdom", balance: 2_600_000, approved: true },
  { id: "br", name: "Meridian Brasil", region: "Brazil · not yet approved", balance: 240_000, approved: false },
];

type LogKind = "info" | "policy" | "pass" | "block" | "settle";
interface LogLine {
  t: string;
  kind: LogKind;
  text: string;
}

const kindStyles: Record<LogKind, string> = {
  info: "text-ink-500",
  policy: "text-blue-600",
  pass: "text-emerald-600",
  block: "text-rose-600",
  settle: "text-brand-600 font-medium",
};

export function CashPoolingDemo() {
  const [entities, setEntities] = useState<Entity[]>(START);
  const [log, setLog] = useState<LogLine[]>([]);
  const [running, setRunning] = useState(false);
  const [sweptToday, setSweptToday] = useState(0);
  const [clock, setClock] = useState("—");
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  function push(kind: LogKind, text: string, time: string) {
    setLog((l) => [...l, { t: time, kind, text }]);
  }

  function reset() {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setEntities(START);
    setLog([]);
    setRunning(false);
    setSweptToday(0);
    setClock("—");
  }

  function at(ms: number, fn: () => void) {
    timers.current.push(setTimeout(fn, ms));
  }

  function runDay() {
    reset();
    setRunning(true);

    at(50, () => {
      setClock("02:14 HKT");
      push("info", "Overnight. No treasury staff are working.", "02:14");
      push("policy", "Policy engine evaluating all approved entities against target balances.", "02:14");
    });

    // Singapore drops below threshold
    at(1500, () => {
      setClock("02:15 HKT");
      setEntities((e) => e.map((x) => (x.id === "sg" ? { ...x, balance: 380_000 } : x)));
      push("info", "Meridian Singapore pays a supplier. Balance falls to USD 380,000.", "02:15");
    });

    at(2900, () => {
      push("policy", `Breach detected: Singapore below the USD ${POLICY.minBalance.toLocaleString()} floor.`, "02:15");
      push("policy", `Policy says top up to USD ${POLICY.topUpTo.toLocaleString()}. Funding requirement USD 1,620,000.`, "02:15");
    });

    at(4200, () => {
      push("pass", "Beneficiary is an approved group entity.", "02:15");
      push("pass", `Within daily cap — USD 1,620,000 of USD ${POLICY.dailyCap.toLocaleString()}.`, "02:15");
      push("pass", "Hub has sufficient surplus. Sanctions screening clear.", "02:15");
    });

    at(5600, () => {
      setEntities((e) =>
        e.map((x) => {
          if (x.id === "sg") return { ...x, balance: 2_000_000 };
          if (x.id === "hk") return { ...x, balance: x.balance - 1_620_000 };
          return x;
        })
      );
      setSweptToday(1_620_000);
      push("settle", "Settled. USD 1,620,000 moved hub → Singapore. Nobody instructed this.", "02:15");
    });

    // Brazil — unapproved entity, blocked
    at(7200, () => {
      setClock("03:40 HKT");
      push("info", "Meridian Brasil is below its floor at USD 240,000.", "03:40");
      push("policy", "Policy engine evaluating funding requirement of USD 1,760,000.", "03:40");
    });

    at(8600, () => {
      push("block", "BLOCKED — Brazil is not an approved corridor. No legal opinion on settlement finality.", "03:40");
      push("info", "Case raised for Operations. No value moved. Client sees the reason, not a silent failure.", "03:40");
    });

    // UK — would breach daily cap
    at(10200, () => {
      setClock("05:05 HKT");
      setEntities((e) => e.map((x) => (x.id === "uk" ? { ...x, balance: 410_000 } : x)));
      push("info", "Meridian UK falls to USD 410,000 after a bond coupon payment.", "05:05");
      push("policy", "Funding requirement USD 1,590,000.", "05:05");
    });

    at(11600, () => {
      push(
        "block",
        `BLOCKED — would take today's sweeps to USD 3,210,000, above the USD ${POLICY.dailyCap.toLocaleString()} cap the client set.`,
        "05:05"
      );
      push("info", "Escalated for human approval at 09:00. The cap is the client's control, not ours to override.", "05:05");
      setRunning(false);
      setClock("05:05 HKT · run complete");
    });
  }

  const totalIdle = entities.filter((e) => !e.isHub).reduce((s, e) => s + e.balance, 0);

  return (
    <div className="space-y-4">
      <Card className="border-charcoal-900 bg-charcoal-950">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <Badge tone="brand" className="bg-brand-500/10 text-brand-300 ring-brand-400/25">
              Track 1 · the actual difference
            </Badge>
            <h2 className="mt-3 max-w-2xl text-[19px] font-semibold leading-snug text-paper-0">
              Money that moves on policy, not on instruction.
            </h2>
            <p className="mt-2 max-w-2xl text-[12.5px] leading-relaxed text-ink-400">
              A single tokenised transfer is what the bank already does. This is the product on
              top: the client sets the rules once, and the rail enforces them at 2am with nobody
              awake. Watch what it funds — and what it refuses to.
            </p>
          </div>
          <div className="flex gap-2">
            <Button size="sm" onClick={runDay} disabled={running} icon={<PlayCircle size={14} />}>
              {running ? "Running…" : "Run one night"}
            </Button>
            <Button size="sm" variant="secondary" onClick={reset} icon={<RotateCcw size={13} />}>
              Reset
            </Button>
          </div>
        </div>
      </Card>

      <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
        <Card>
          <div className="flex items-center gap-2">
            <Settings2 size={15} className="text-brand-600" />
            <CardHeader title="The client's standing policy" subtitle="Set once, enforced continuously" />
          </div>
          <dl className="space-y-2.5 text-[12.5px]">
            <Row label="Minimum balance per entity" value={formatCurrency(POLICY.minBalance, "USD")} />
            <Row label="Top up to" value={formatCurrency(POLICY.topUpTo, "USD")} />
            <Row label="Maximum swept per day" value={formatCurrency(POLICY.dailyCap, "USD")} />
            <Row label="Beneficiaries" value="Approved group entities only" />
          </dl>
          <div className="mt-3.5 flex gap-2.5 rounded-lg border border-brand-100 bg-brand-50/50 px-3 py-2.5">
            <ShieldCheck size={14} className="mt-0.5 shrink-0 text-brand-600" />
            <p className="text-[11.5px] leading-relaxed text-charcoal-900">
              Every limit here is the client&apos;s, not the bank&apos;s. That is what makes
              automation acceptable to a treasurer — and to their auditor.
            </p>
          </div>
        </Card>

        <Card>
          <CardHeader
            title="Group positions"
            subtitle={`Idle cash outside the hub: ${formatCurrency(totalIdle, "USD")} · swept tonight: ${formatCurrency(sweptToday, "USD")}`}
            actions={<Badge tone="neutral">{clock}</Badge>}
          />
          <div className="space-y-2.5">
            {entities.map((e) => {
              const below = !e.isHub && e.balance < POLICY.minBalance;
              return (
                <div
                  key={e.id}
                  className={cn(
                    "flex items-center justify-between rounded-lg border px-3.5 py-2.5",
                    e.isHub
                      ? "border-brand-200 bg-brand-50/40"
                      : below
                        ? "border-amber-200 bg-amber-50/40"
                        : "border-paper-200 bg-paper-0"
                  )}
                >
                  <div className="min-w-0">
                    <p className="text-[12.5px] font-semibold text-charcoal-900">
                      {e.name}
                      {e.isHub && <span className="ml-2 text-[10.5px] font-medium text-brand-600">HUB</span>}
                      {!e.approved && (
                        <span className="ml-2 inline-flex items-center gap-1 text-[10.5px] font-medium text-rose-600">
                          <Ban size={10} /> not approved
                        </span>
                      )}
                    </p>
                    <p className="text-[11px] text-ink-500">{e.region}</p>
                  </div>
                  <div className="text-right">
                    <p
                      className={cn(
                        "text-[13px] font-semibold tabular-nums",
                        below ? "text-amber-700" : "text-charcoal-900"
                      )}
                    >
                      {formatCurrency(e.balance, "USD")}
                    </p>
                    {below && <p className="text-[10.5px] font-medium text-amber-700">below floor</p>}
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>

      <Card padded={false}>
        <div className="flex items-center justify-between border-b border-paper-200 px-5 py-3">
          <p className="text-[12.5px] font-semibold text-charcoal-900">Policy engine log</p>
          <Badge tone="neutral">{log.length} events</Badge>
        </div>
        <div className="max-h-[300px] overflow-y-auto scrollbar-thin px-5 py-3">
          {log.length === 0 ? (
            <p className="py-6 text-center text-[12px] text-ink-400">
              Press &ldquo;Run one night&rdquo; to watch the policy engine work while nobody is
              at their desk.
            </p>
          ) : (
            <ul className="space-y-1.5 font-mono text-[11.5px]">
              {log.map((l, i) => (
                <li key={i} className="flex gap-3">
                  <span className="shrink-0 text-ink-400">{l.t}</span>
                  <span className={kindStyles[l.kind]}>{l.text}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Card>

      <div className="grid gap-3 sm:grid-cols-3">
        <Outcome
          icon={Check}
          tone="emerald"
          title="One funded automatically"
          body="Singapore was topped up at 02:15 because it breached a threshold — not because anyone sent an instruction."
        />
        <Outcome
          icon={Ban}
          tone="rose"
          title="One blocked on corridor"
          body="Brazil was refused because there is no settlement-finality opinion for that corridor. Legal readiness is a gate, not a preference."
        />
        <Outcome
          icon={AlertTriangle}
          tone="amber"
          title="One blocked on the client's own cap"
          body="The UK top-up would have breached the daily limit the client set, so it escalated to a human rather than overriding them."
        />
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-paper-100 pb-2 last:border-0 last:pb-0">
      <dt className="text-ink-500">{label}</dt>
      <dd className="font-medium tabular-nums text-charcoal-900">{value}</dd>
    </div>
  );
}

function Outcome({
  icon: Icon,
  tone,
  title,
  body,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  tone: "emerald" | "rose" | "amber";
  title: string;
  body: string;
}) {
  const tones = {
    emerald: "border-emerald-100 bg-emerald-50/40 text-emerald-700",
    rose: "border-rose-100 bg-rose-50/40 text-rose-700",
    amber: "border-amber-100 bg-amber-50/40 text-amber-700",
  };
  return (
    <div className={cn("rounded-xl border p-3.5", tones[tone])}>
      <div className="flex items-center gap-2">
        <Icon size={14} />
        <p className="text-[12px] font-semibold">{title}</p>
      </div>
      <p className="mt-1.5 text-[11.5px] leading-relaxed text-charcoal-900">{body}</p>
    </div>
  );
}


