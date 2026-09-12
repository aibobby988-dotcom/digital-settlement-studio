/**
 * The commercial case for the tokenised treasury proposition.
 *
 * All figures are illustrative and internally consistent for a case study. They
 * are not HSBC figures. The purpose is to show the shape of the reasoning — and
 * in particular that the economics are driven by retained balances rather than
 * by transaction fees, which is the point most candidates miss.
 */

export interface RevenueLine {
  line: string;
  how: string;
  illustrative: string;
  dependability: "Predictable" | "Volume-linked" | "Rate-sensitive";
  note: string;
}

export const revenueLines: RevenueLine[] = [
  {
    line: "Platform subscription",
    how: "A fixed monthly fee per client for access, entitlements and the support model, independent of how much they transact.",
    illustrative: "US$4,000 per month · US$48,000 a year",
    dependability: "Predictable",
    note: "The only line that does not move with client behaviour. Useful for covering the fixed cost to serve, and the easiest line to defend in a downturn.",
  },
  {
    line: "Per-transfer fee",
    how: "A charge on each tokenised movement, tiered so heavy users pay less per transaction.",
    illustrative: "US$8 per transfer × 400 a month · US$38,400 a year",
    dependability: "Volume-linked",
    note: "Deliberately priced below the wire it replaces. If you try to hold legacy pricing on a cheaper rail, the client simply does not migrate.",
  },
  {
    line: "Foreign-exchange spread",
    how: "Where a transfer crosses currencies, the bank earns the margin on the conversion — the same way it does today.",
    illustrative: "Varies by corridor and volume",
    dependability: "Volume-linked",
    note: "Often the largest fee line in cross-border, but it is not new revenue: it already exists on the legacy rail. Counting it as incremental overstates the case.",
  },
  {
    line: "Retained deposit balances",
    how: "Operating cash that stays with the bank because the service is genuinely useful. The bank earns a net interest margin on those balances.",
    illustrative: "US$30m retained × 1.5% net interest margin · US$450,000 a year",
    dependability: "Rate-sensitive",
    note: "This is the real prize, and it is roughly five times the fee revenue. A treasury product's commercial purpose is to attract and hold operating balances — the fees are almost a rounding error beside it.",
  },
  {
    line: "Implementation fee",
    how: "A one-off charge covering integration, testing and onboarding effort.",
    illustrative: "US$40,000 one-off",
    dependability: "Predictable",
    note: "Often waived for anchor clients to win the reference. Worth being explicit that this is a customer-acquisition cost, not lost revenue.",
  },
];

export interface UnitEconomicRow {
  item: string;
  amount: string;
  kind: "revenue" | "cost" | "total";
}

export const unitEconomics: UnitEconomicRow[] = [
  { item: "Platform subscription", amount: "+ US$48,000", kind: "revenue" },
  { item: "Per-transfer fees (400/month)", amount: "+ US$38,400", kind: "revenue" },
  { item: "Net interest margin on US$30m retained balances", amount: "+ US$450,000", kind: "revenue" },
  { item: "Cost to serve (support, compliance, operations share)", amount: "− US$60,000", kind: "cost" },
  { item: "Annual contribution per anchor client", amount: "US$476,400", kind: "total" },
];

export const businessCase = {
  buildInvestment: "US$6.5m over 18 months",
  buildDetail:
    "Platform engineering, core-banking integration, financial-crime controls, legal opinions per corridor and the operating model to run it around the clock.",
  annualRunCost: "US$2.8m a year",
  runDetail:
    "Product and engineering team, infrastructure, 24/7 operational cover and ongoing compliance monitoring. The always-on promise is a real, recurring cost, not a one-off build.",
  contributionPerClient: "US$476,400",
  breakEvenRunOnly: "About 6 anchor clients",
  breakEvenFull: "About 11 anchor clients",
  breakEvenDetail:
    "Six clients cover the annual run cost. Eleven cover run cost plus repayment of the build investment across three years. That is a realistic ask for a bank with HSBC's corporate treasury footprint, which is what makes the case credible rather than aspirational.",
};

export interface Sensitivity {
  scenario: string;
  change: string;
  effect: string;
  soWhat: string;
  severity: "Critical" | "Material" | "Manageable";
}

export const sensitivities: Sensitivity[] = [
  {
    scenario: "Interest rates fall",
    change: "Net interest margin compresses from 1.5% to 0.75%",
    effect:
      "Deposit contribution halves from US$450,000 to US$225,000 per client. Annual contribution falls to about US$251,000 and break-even roughly doubles, from 11 clients to about 20.",
    soWhat:
      "The single most important thing to understand about this business case: it is driven by interest rates, not by the product. If you present it as a technology investment you will be caught out by the first person who has run a transaction-banking profit and loss account.",
    severity: "Critical",
  },
  {
    scenario: "Clients migrate but do not deposit more",
    change: "Volume moves from wires to tokens with no change in balances held",
    effect:
      "Fee revenue per client falls, because tokenised transfers are priced below the wires they replace. Net revenue goes backwards.",
    soWhat:
      "This is the cannibalisation trap. The product only pays for itself if it wins or defends balances. Migration alone is a revenue loss dressed up as innovation.",
    severity: "Critical",
  },
  {
    scenario: "Adoption is slower than planned",
    change: "Clients take 9 months to go live instead of 4",
    effect:
      "Run cost continues while contribution is delayed, pushing payback out by roughly a year.",
    soWhat:
      "Argues for a small number of deeply committed anchor clients over a long list of interested ones. Depth of commitment beats breadth of pipeline here.",
    severity: "Material",
  },
  {
    scenario: "A corridor's legal opinion does not clear",
    change: "One planned market cannot go live",
    effect:
      "Addressable volume shrinks and some already-spent integration cost is stranded.",
    soWhat:
      "Why legal readiness is a go/no-go gate before build spend in that corridor, rather than a parallel workstream you hope catches up.",
    severity: "Material",
  },
];

export interface PricingApproach {
  approach: string;
  how: string;
  pros: string[];
  cons: string[];
  verdict: string;
  recommended?: boolean;
}

export const pricingApproaches: PricingApproach[] = [
  {
    approach: "Cost-plus",
    how: "Work out what it costs to run, add a margin, charge that.",
    pros: ["Simple to defend internally", "Protects against loss-making clients"],
    cons: [
      "Ignores what the capability is actually worth to the client",
      "Early on, cost per transaction is high because volume is low — so this prices the product out of the market exactly when it needs adoption",
    ],
    verdict: "Wrong for a launch product. It prices against your own inefficiency rather than the client's benefit.",
  },
  {
    approach: "Value-based",
    how: "Price against what the client saves — idle cash released, cut-off costs avoided, reconciliation hours removed.",
    pros: [
      "Aligns price with the benefit the client actually receives",
      "Supports a genuine commercial conversation rather than a line-item comparison",
    ],
    cons: [
      "Requires a credible baseline of the client's current costs, which many treasurers have never measured",
      "Harder to standardise across a sales force",
    ],
    verdict:
      "Right in principle, but only workable if discovery has quantified the client's current pain. That measurement work is part of the product job.",
  },
  {
    approach: "Penetration pricing into balance capture",
    how: "Price transactions close to cost to remove every barrier to migration, and take the return on retained balances instead.",
    pros: [
      "Removes the client's reason to hesitate",
      "Aligns directly with where the money actually is — the deposits",
      "Makes the product a defensive moat around existing balances, not just a new fee line",
    ],
    cons: [
      "Requires the bank to accept thin fee margins early and hold its nerve",
      "Only works if balance retention is genuinely measured and attributed to the product",
    ],
    verdict:
      "The recommended approach. The economics above show deposits are roughly five times the fee revenue, so competing on transaction price to win balances is the rational trade — provided you can prove the attribution.",
    recommended: true,
  },
];

export const cfoQuestions = [
  {
    question: "Is this new revenue, or are we just moving existing revenue onto a cheaper rail?",
    answer:
      "Honestly, at first it is mostly migration, and per-transaction revenue goes down. The case rests on defending and attracting operating balances. If we do not build it, the balances still leave — to a bank that did. I would rather cannibalise our own fees than lose the deposits.",
  },
  {
    question: "What happens to this business case if rates fall?",
    answer:
      "It weakens materially — halving the net interest margin roughly doubles the number of clients needed to break even. That is why I would hold the fee lines as a floor rather than discount them to zero, and why I would not approve the full multi-corridor build on a rates assumption alone.",
  },
  {
    question: "Why now, rather than in two years?",
    answer:
      "Because balance relationships are sticky once a client integrates their systems into a bank's rails. The cost of being second is not a delayed launch — it is a client whose treasury systems are already wired into a competitor.",
  },
  {
    question: "What would make you stop?",
    answer:
      "If anchor clients migrate volume but we cannot demonstrate balance retention attributable to the product, the core premise is wrong. I would stop at the end of the pilot rather than fund a corridor expansion on hope.",
  },
];

export const killCriteria = [
  "Pilot clients migrate transaction volume but retained balances do not move — the central premise fails and no amount of further build fixes it.",
  "Cost to serve per client stays above US$150,000 after the first year, which would mean the operating model does not scale.",
  "Legal finality cannot be established in at least two priority corridors, capping the addressable market below break-even.",
  "A shared industry utility emerges that offers the same client outcome at lower cost, making a single-bank build the wrong structure.",
];
