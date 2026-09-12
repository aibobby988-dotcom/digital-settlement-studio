/**
 * The honest trade-off, framed against HSBC's actual estate rather than against
 * a generic "blockchain versus banks" argument.
 *
 * Three comparisons are worth making, and they are different questions:
 *  1. the conventional process versus the tokenised rail HSBC already runs;
 *  2. what Track 1 adds on top of that rail;
 *  3. what Track 2 adds, and what it depends on outside the bank.
 *
 * Effort figures are reconciled to the delivery backlog: 286 points across 33
 * stories and 10 epics, of which 149 points are the two tracks plus mandates.
 */

export interface ComparisonRow {
  dimension: string;
  legacy: string;
  tokenised: string;
}

/** Baseline: the conventional process versus the rail HSBC already has live. */
export const comparisonRows: ComparisonRow[] = [
  {
    dimension: "Availability",
    legacy: "Bound by cut-off times and banking hours per corridor; weekend and holiday gaps",
    tokenised: "24/7 in supported corridors. Already live — HSBC's Tokenised Deposit Service operates across six markets",
  },
  {
    dimension: "Settlement speed",
    legacy: "Same-day to T+2 depending on corridor and rail (SWIFT, RTGS, correspondent chain)",
    tokenised: "Seconds, atomic on-ledger. Citi and DBS settled cross-border on a Saturday in September 2026 against a two-business-day benchmark",
  },
  {
    dimension: "Visibility",
    legacy: "Status often opaque mid-transit through correspondent chains; SWIFT gpi improved this but did not solve it",
    tokenised: "Real-time, per-transaction status on a shared ledger",
  },
  {
    dimension: "Reconciliation effort",
    legacy: "Manual or batch reconciliation across multiple parties' independent records",
    tokenised: "Continuous automated reconciliation against a shared source of truth",
  },
  {
    dimension: "Settlement risk",
    legacy: "Sequential legs create an exposure window — Herstatt risk in foreign exchange",
    tokenised: "Atomic delivery- or payment-versus-payment removes the window. HSBC has run payment-versus-payment on FX Everywhere since 2018",
  },
  {
    dimension: "Legal & regulatory maturity",
    legacy: "Decades of case law, established finality, understood by every counterparty",
    tokenised: "Genuinely newer — legal finality still has to be established corridor by corridor, which is why it is a gate rather than an assumption",
  },
  {
    dimension: "Interoperability",
    legacy: "Universal — every bank already speaks SWIFT",
    tokenised: "Improving fast but still immature. EnsembleTX and Swift's shared ledger are the emerging answers; HSBC is live on the first and a pilot bank on the second",
  },
  {
    dimension: "Operational complexity",
    legacy: "Well-worn playbooks, mature tooling, deep institutional muscle memory",
    tokenised: "New failure modes — key management, policy misconfiguration, cross-platform breaks — without decades of experience to draw on",
  },
  {
    dimension: "Programmability",
    legacy: "Largely manual; conditional logic is bolted on rather than native",
    tokenised: "Native. This is the capability the two tracks actually monetise, and the one legacy rails structurally cannot match",
  },
];

export interface TrackDelta {
  track: string;
  todayWithoutIt: string;
  whatItAdds: string;
  hsbcAnchor: string;
  dependsOn: string;
  honestCost: string;
}

/** The comparison that actually matters: not tokenised versus legacy, but each track versus the rail as it stands today. */
export const trackDeltas: TrackDelta[] = [
  {
    track: "Track 1 — Automated cash pooling",
    todayWithoutIt:
      "The Tokenised Deposit Service already moves a client's money between their own entities, 24/7, in six markets. But somebody still has to decide to move it and instruct it. Outside business hours that means either a person on call or cash sitting in the wrong entity until morning.",
    whatItAdds:
      "The client sets balance policy once — floors, top-up targets, daily caps, approved corridors — and the rail enforces it continuously. Funding becomes a consequence of a rule rather than an instruction, which is what turns an existing capability into a product a treasurer buys.",
    hsbcAnchor:
      "Builds directly on the live Tokenised Deposit Service. No new ledger, no new settlement asset, no new counterparty. The additions are a policy engine, threshold monitoring and cap enforcement above a rail that already works.",
    dependsOn:
      "Nothing outside the bank. This is the reason it is Track 1 — it can be delivered without a single external dependency, which makes it both faster and far easier to approve.",
    honestCost:
      "60 story points across four stories. The hard part is not the sweep, it is the refusal: proving that automation cannot breach the client's own limits, and that a blocked sweep escalates cleanly rather than failing silently.",
  },
  {
    track: "Track 2 — Cash leg for third-party assets",
    todayWithoutIt:
      "HSBC proved tokenised deposits settling against digital bonds on its own Orion platform in the Ensemble sandbox in August 2024. But that only works where HSBC issued the asset. For a fund or bond issued by anyone else, the cash leg is not connected — so the settlement risk the sandbox removed comes straight back.",
    whatItAdds:
      "Extends the same proven mechanism to assets HSBC does not issue, reached over a shared interoperability layer rather than a bilateral integration per counterparty. The bank earns the cash leg without needing to win the issuance mandate.",
    hsbcAnchor:
      "Orion sits in Markets & Securities Services and is the asset leg; this is explicitly not a proposal to run it. EnsembleTX's stated first focus is tokenised money-market funds settled with tokenised deposits, with BlackRock and Franklin Templeton participating — the counterparties already exist.",
    dependsOn:
      "External asset platforms, their custody and legal models, and the interoperability layer. That dependency is real and is why this is Track 2 rather than Track 1, not a reason to avoid it.",
    honestCost:
      "55 story points across three stories, and a materially longer legal path — a settlement-finality opinion is needed per jurisdiction and asset type before a single counterparty goes live.",
  },
  {
    track: "Forward look — Delegated mandates",
    todayWithoutIt:
      "Every payment needs a human in the loop at the point of authorisation. That is correct today, and it is also the ceiling on how far automation can go.",
    whatItAdds:
      "A client can delegate bounded authority to software: what it may pay, to whom, up to how much, how often, revocable instantly. The mandate is the control, and every action is attributed to the human who granted it.",
    hsbcAnchor:
      "Swift has named agentic commerce as a planned application of its shared ledger, and HSBC is one of the 17 pilot banks. This is not a speculative direction — it is on the roadmap of the infrastructure HSBC is already piloting on.",
    dependsOn:
      "Track 1's policy engine, which is why it is sequenced after it rather than alongside. A mandate is a policy with an external actor attached.",
    honestCost:
      "34 story points across two stories, but the genuine cost is legal and reputational rather than technical. The unresolved question in this whole domain is liability when an agent pays the wrong party.",
  },
];

export interface ProCon {
  point: string;
  detail: string;
}

export const advantages: ProCon[] = [
  {
    point: "Removes principal and settlement risk",
    detail:
      "Atomic delivery- and payment-versus-payment make the classic 'I paid and they did not deliver' failure structurally impossible rather than merely less likely.",
  },
  {
    point: "Collapses reconciliation effort",
    detail:
      "A shared, continuously reconciled ledger removes most of the manual matching that multi-party settlement requires — one of the clearest cost savings you can put in front of a treasurer.",
  },
  {
    point: "Removes the cut-off constraint entirely",
    detail:
      "Not 'faster payments' but a different operating model: a Singapore entity can be funded at 2am on a Sunday. Competitors have now proven this in production, so it is demonstrable rather than promised.",
  },
  {
    point: "Makes money programmable",
    detail:
      "The only advantage legacy rails structurally cannot match. Both tracks and the mandate layer monetise this, and it is the reason tokenisation matters beyond speed.",
  },
];

export const disadvantages: ProCon[] = [
  {
    point: "Legal finality is not settled everywhere",
    detail:
      "A ledger can be technically final while the law of that jurisdiction has not agreed the transfer survives insolvency. This constrains where you can operate regardless of how good the technology is.",
  },
  {
    point: "Interoperability is still partial",
    detail:
      "Improving — EnsembleTX and Swift's ledger are real — but a counterparty not on compatible infrastructure still cannot be reached. Track 2 lives or dies on this.",
  },
  {
    point: "It gives up netting",
    detail:
      "Atomic gross settlement means more liquidity is needed than a netted end-of-day cycle requires. That is a genuine cost, and pretending otherwise invites a correction from anyone who has run a treasury.",
  },
  {
    point: "New failure modes with no institutional muscle memory",
    detail:
      "Key compromise, policy misconfiguration, cross-platform breaks. Banks have decades of practice recovering from a failed wire and almost none recovering from these.",
  },
  {
    point: "Always-on is a permanent operating cost",
    detail:
      "A 24/7 promise means 24/7 support, monitoring and exception handling. It belongs in the business case as a recurring cost, not as a rounding error.",
  },
];

export interface EffortItem {
  area: string;
  points: number;
  note: string;
  scope: "Base rail" | "Track 1" | "Track 2" | "Forward look";
}

/** Reconciled to the delivery backlog — 286 points, 33 stories, 10 epics. */
export const effortBreakdown: EffortItem[] = [
  { area: "Client onboarding and entitlements", points: 18, scope: "Base rail", note: "Who is allowed on the platform, and with what authority." },
  { area: "Token issuance, transfer and redemption", points: 31, scope: "Base rail", note: "The core movement lifecycle." },
  { area: "Ledger integration and reconciliation", points: 19, scope: "Base rail", note: "Keeping the tokenised and core records honest." },
  { area: "Financial-crime and wallet controls", points: 21, scope: "Base rail", note: "Screening and monitoring before value moves." },
  { area: "Operations, exceptions and reporting", points: 18, scope: "Base rail", note: "The unhappy path, staffed and measurable." },
  { area: "Pilot rollout and client support", points: 11, scope: "Base rail", note: "Getting the first clients live and supported." },
  { area: "Commercialisation and go-to-market", points: 19, scope: "Base rail", note: "Segmentation, pricing, enablement, scale decision." },
  { area: "Automated cash pooling", points: 60, scope: "Track 1", note: "Policy configuration, threshold detection, sweep execution, and blocking a sweep that breaches the client's cap." },
  { area: "Cash leg for third-party assets", points: 55, scope: "Track 2", note: "Asset-platform onboarding, cross-platform atomic settlement, cross-platform reconciliation." },
  { area: "Delegated mandates", points: 34, scope: "Forward look", note: "Granting, enforcing and revoking bounded authority for software." },
];

export const effortSummary = {
  total: 286,
  baseRail: 137,
  tracks: 149,
  insight:
    "The two tracks and the mandate layer are 149 of 286 points — slightly more than the base rail itself. That is worth saying out loud, because it makes the point that this is not a thin wrapper on an existing product. But note what those points are not: none of them build a ledger, a settlement asset or a new platform. They build policy, enforcement and reach on top of a rail that already works, which is a very different approval conversation from a platform build.",
};

export interface WorthIt {
  condition: string;
  verdict: string;
}

export const worthItFramework: WorthIt[] = [
  {
    condition: "The client has multiple entities, real cut-off pain and balances worth defending",
    verdict:
      "Yes, and Track 1 alone justifies it. The economics come from retained balances, and the delivery has no external dependency.",
  },
  {
    condition: "The client is a single entity in one market with straightforward flows",
    verdict:
      "No. A conventional rail already settles quickly enough, and cost to serve will exceed any plausible value. Declining these is what keeps the pilot evidence clean.",
  },
  {
    condition: "The counterparty or asset platform is not on compatible infrastructure",
    verdict:
      "Not yet. Track 2 cannot be delivered into a corridor that has no interoperability path, however attractive the client is.",
  },
  {
    condition: "There is no settlement-finality opinion for the jurisdiction",
    verdict:
      "No, and this is a gate rather than a judgement call. Build spend should not start in a corridor the lawyers have not cleared.",
  },
  {
    condition: "A shared industry utility already offers the same client outcome more cheaply",
    verdict:
      "Then a single-bank build is the wrong structure. This is one of the stated kill criteria, and the Clearing House network targeting 2027 makes it a live question rather than a hypothetical one.",
  },
];
