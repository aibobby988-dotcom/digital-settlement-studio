export interface ComparisonRow {
  dimension: string;
  legacy: string;
  tokenised: string;
}

export const comparisonRows: ComparisonRow[] = [
  {
    dimension: "Availability",
    legacy: "Bound by cut-off times and banking hours per corridor; weekend and holiday gaps",
    tokenised: "24/7 in supported corridors, no cut-offs",
  },
  {
    dimension: "Settlement speed",
    legacy: "Same-day to T+2 depending on corridor and rail (SWIFT, RTGS, correspondent chain)",
    tokenised: "Seconds — atomic settlement on-ledger",
  },
  {
    dimension: "Visibility",
    legacy: "Status often opaque mid-transit through correspondent chains; SWIFT gpi improved but didn't solve this fully",
    tokenised: "Real-time, per-transaction status on a shared ledger",
  },
  {
    dimension: "Reconciliation effort",
    legacy: "Manual or batch reconciliation across multiple parties' independent records",
    tokenised: "Continuous automated reconciliation against a shared source of truth",
  },
  {
    dimension: "Settlement risk",
    legacy: "Sequential legs create a window of exposure (e.g. Herstatt risk in FX)",
    tokenised: "Atomic DvP/PvP removes the window — both legs or neither",
  },
  {
    dimension: "Legal & regulatory maturity",
    legacy: "Decades of case law, established finality, well-understood by every counterparty",
    tokenised: "Genuinely new — legal finality has to be established corridor by corridor",
  },
  {
    dimension: "Interoperability",
    legacy: "Universal — every bank already speaks SWIFT",
    tokenised: "Immature — requires counterparties on compatible infrastructure or a bridge",
  },
  {
    dimension: "Operational complexity",
    legacy: "Well-worn playbooks, mature tooling, deep institutional muscle memory",
    tokenised: "New failure modes (key management, smart-contract bugs, network outages) without decades of institutional experience to draw on",
  },
  {
    dimension: "Programmability",
    legacy: "Largely manual; conditional/automated payment logic is bolted on, not native",
    tokenised: "Native — conditional and automated settlement logic is part of the platform",
  },
];

export interface ProCon {
  point: string;
  detail: string;
}

export const advantages: ProCon[] = [
  {
    point: "Removes principal and settlement risk",
    detail: "Atomic DvP/PvP makes the classic 'I paid and they didn't deliver' failure mode structurally impossible, not just less likely.",
  },
  {
    point: "Collapses reconciliation effort",
    detail: "A shared, continuously-reconciled ledger removes most of the manual matching work that legacy multi-party settlement requires.",
  },
  {
    point: "Removes the cut-off constraint entirely",
    detail: "Not 'faster within business hours' — genuinely always-on, which changes what's possible for corporate treasury, not just how fast today's process runs.",
  },
  {
    point: "Programmable settlement",
    detail: "Conditional logic (release funds only when X is true) becomes a platform capability instead of a manual workaround or a bespoke integration project.",
  },
];

export const disadvantages: ProCon[] = [
  {
    point: "Legal finality isn't settled yet",
    detail: "Every corridor needs its own legal opinion before production use — this isn't a technology problem, and it can't be engineered away.",
  },
  {
    point: "Real integration cost",
    detail: "Core banking, treasury systems, screening and reconciliation all need new integration points — this isn't a drop-in replacement for existing rails.",
  },
  {
    point: "Requires counterparty readiness",
    detail: "The value compounds with adoption — a single bank's tokenised ledger is far less useful until clients and counterparties are actually on it too.",
  },
  {
    point: "New operational risk surface",
    detail: "Key management, smart-contract logic and network resilience are new failure modes without decades of institutional playbook behind them yet.",
  },
  {
    point: "Genuinely new skills required",
    detail: "Engineering, risk, legal and operations teams all need capability they may not have today — this is a change-management cost, not just a build cost.",
  },
];

export interface EffortItem {
  area: string;
  effort: string;
  points: number;
}

export const effortBreakdown: EffortItem[] = [
  { area: "Client onboarding & entitlements", effort: "New KYC-to-entitlement workflow, role-based approval limits", points: 18 },
  { area: "Token issuance, transfer, redemption", effort: "Core ledger lifecycle, 24/7 availability engineering", points: 31 },
  { area: "Ledger integration & reconciliation", effort: "Real-time core-banking posting, continuous reconciliation", points: 19 },
  { area: "Financial-crime & wallet controls", effort: "Pre-settlement screening, wallet risk scoring, AML monitoring tuned for tokenised movement", points: 21 },
  { area: "Operations, exceptions & reporting", effort: "New exception-handling and incident playbooks for a system with no institutional history", points: 18 },
  { area: "Pilot rollout & client support", effort: "New commercial and support model — nothing to reuse from the legacy playbook", points: 11 },
  { area: "Commercialisation & go-to-market", effort: "Pricing, RM enablement, client segmentation for a genuinely new proposition", points: 19 },
];

export const worthItFramework = [
  {
    condition: "High-volume, multi-entity corporate treasury clients with real cut-off pain",
    verdict: "Worth it — this is exactly where 24/7 movement and reconciliation savings show up fastest and most visibly.",
  },
  {
    condition: "A single, occasional cross-border payment need",
    verdict: "Probably not worth it yet — legacy rails already handle this adequately, and the integration cost isn't justified by the volume.",
  },
  {
    condition: "A trade that requires DvP/PvP with an external counterparty on incompatible infrastructure",
    verdict: "Not worth it until the counterparty is reachable — the value of atomic settlement depends on both sides actually being on compatible rails.",
  },
  {
    condition: "A corridor where legal finality hasn't been established yet",
    verdict: "Not worth it for production — this is a hard blocker, not a trade-off to weigh, regardless of how compelling the technology case is.",
  },
];
