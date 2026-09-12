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
    "Extension cost, not a platform build — the tokenised-deposit rail already exists. This covers the cash-pooling policy and sweep engine, integration to client treasury systems, financial-crime controls for the new flows, legal opinions per corridor, and the operating model to run it around the clock. Framing this as an extension rather than a new platform is what makes it a realistic approval request.",
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

// ---------------------------------------------------------------------------
// Commercial judgement: who to sell to, how to know it is working, and who
// inside the bank actually decides whether it succeeds.
// ---------------------------------------------------------------------------

export interface ClientSegment {
  segment: string;
  profile: string;
  whyThemFirst: string;
  watchOut: string;
  priority: "Target first" | "Second wave" | "Decline for now";
}

export const clientSegments: ClientSegment[] = [
  {
    segment: "Multi-entity regional groups with an Asian treasury centre",
    profile:
      "Six to fifteen legal entities across three or more time zones, a central treasury in Hong Kong or Singapore, and frequent intra-group funding. Typically manufacturing, shipping, commodities or regional conglomerates.",
    whyThemFirst:
      "The cut-off problem is a daily operational reality for them, not a hypothetical. They already move money between their own entities constantly, so migration needs no new client behaviour — only a better rail for behaviour they already have.",
    watchOut:
      "Confirm the treasury centre has authority over subsidiary cash. If each subsidiary controls its own balances, the central buying decision does not exist and the deal stalls in a committee.",
    priority: "Target first",
  },
  {
    segment: "Asset managers and funds needing subscription and redemption settlement",
    profile:
      "Fund operators moving cash against unit creation and redemption, increasingly against tokenised fund units.",
    whyThemFirst:
      "Directly adjacent to the Hong Kong Monetary Authority's own pilot work on tokenised funds settling against tokenised deposits, so the regulatory path is already being trodden.",
    watchOut:
      "Settlement timing is driven by fund rules and cut-offs you do not control. The benefit is real but the sales cycle runs through the fund administrator too, not just the client.",
    priority: "Second wave",
  },
  {
    segment: "Digital-native platforms and marketplaces with 24/7 payout cycles",
    profile:
      "Businesses whose own customers transact at all hours, so treasury needs to fund positions outside banking windows.",
    whyThemFirst:
      "The always-on proposition is worth most to a business that is itself always on, and they typically have the engineering capability to integrate quickly.",
    watchOut:
      "Balances tend to be operational and thin rather than parked. Strong volume, weaker deposit retention — which undercuts the part of the business case that actually pays for the build.",
    priority: "Second wave",
  },
  {
    segment: "Single-entity domestic corporates",
    profile: "One legal entity, one market, straightforward payables and receivables.",
    whyThemFirst:
      "No genuine use case. Without multiple entities there is no intra-group transfer to improve, and existing domestic rails already settle quickly.",
    watchOut:
      "Easy to onboard and therefore tempting for a pipeline number. Resist it — cost to serve exceeds any plausible value and it distorts the pilot evidence.",
    priority: "Decline for now",
  },
  {
    segment: "Clients seeking crypto exposure rather than treasury efficiency",
    profile:
      "Interested because it is blockchain, not because they have a cash-mobility problem.",
    whyThemFirst:
      "Wrong motivation produces wrong requirements. They will ask for public-chain interoperability and asset trading the product is not designed to provide.",
    watchOut:
      "These conversations are enthusiastic and can look like demand. They are the fastest way to pull a roadmap off course.",
    priority: "Decline for now",
  },
];

export const idealFirstClient = [
  "Multiple legal entities in corridors where a legal-finality opinion already exists",
  "At least 200 intra-group transfers a month, so migration produces a measurable signal",
  "Meaningful operating balances already held with the bank, so retention can be attributed",
  "In-house capability to integrate by interface rather than manual portal use",
  "A treasurer who has already measured their own cut-off and reconciliation cost - without a baseline there is no way to prove value",
  "Willing to be a named reference if the pilot succeeds",
];

export interface Kpi {
  metric: string;
  what: string;
  target: string;
  kind: "Leading" | "Outcome" | "Guardrail";
}

export const kpis: Kpi[] = [
  {
    metric: "Retained balances attributable to the product",
    what: "Operating cash held with the bank that can be traced to entities active on the platform. This is the north-star metric because it is where the economics actually sit.",
    target: "US$30m per anchor client within 12 months of go-live",
    kind: "Outcome",
  },
  {
    metric: "Share of eligible intra-group flow migrated",
    what: "Of the transfers this client could route through the platform, the proportion that actually does. Measures whether the product has genuinely displaced the old habit or merely been added alongside it.",
    target: "Above 60% by month 6",
    kind: "Leading",
  },
  {
    metric: "Activation rate",
    what: "Share of onboarded entities completing a transfer within 30 days of access being granted. The earliest honest signal of whether the product is wanted or merely agreed to.",
    target: "Above 70%",
    kind: "Leading",
  },
  {
    metric: "Transfers per active entity per month",
    what: "Whether use is becoming habitual rather than experimental. A flat line here after month three means the product solved a one-off problem, not a recurring one.",
    target: "Rising month on month through the pilot",
    kind: "Leading",
  },
  {
    metric: "Revenue and contribution per client",
    what: "Fees plus attributed deposit contribution, less cost to serve. Proves the unit economics hold outside a spreadsheet.",
    target: "Above US$400,000 annual contribution",
    kind: "Outcome",
  },
  {
    metric: "Settlement success rate",
    what: "Proportion of instructions completing without operational failure. A scale decision taken while this is degrading simply multiplies a broken process.",
    target: "At or above 99.9%, and not falling as volume grows",
    kind: "Guardrail",
  },
  {
    metric: "Exception resolution time",
    what: "How long a held transaction takes to reach a decision. Directly shapes whether clients trust the always-on promise.",
    target: "90% resolved within 2 hours",
    kind: "Guardrail",
  },
  {
    metric: "Support contacts per 100 transfers",
    what: "A proxy for whether the product is self-explanatory. Rising contact rates mean cost to serve will not fall with scale, which breaks the business case.",
    target: "Falling quarter on quarter",
    kind: "Guardrail",
  },
];

export const vanityMetrics = [
  "Total value settled - impressive to quote and almost meaningless; a single large transfer can dwarf a month of genuine adoption.",
  "Number of pilots or memoranda signed - measures sales activity, not client value received.",
  "Cumulative transaction count - only ever rises, so it can never tell you to stop.",
  "Press coverage and awards - relevant to the thought-leadership objective, but never evidence that the product should scale.",
];

export const scaleGate =
  "I would take the scale decision only when three things hold together: above 60% of eligible flow migrated, attributable balances tracking towards target, and guardrails stable or improving as volume grows. Any one alone is misleading. High migration with flat balances means we have given clients a cheaper rail and gained nothing. Good balances with degrading exception times means we are about to damage the relationships we just won.";

export interface StakeholderDept {
  department: string;
  owns: string;
  theyCareAbout: string;
  youNeed: string;
  howTheyBlock: string;
  howToWin: string;
  critical?: boolean;
}

export const stakeholderDepartments: StakeholderDept[] = [
  {
    department: "Treasury / Asset and Liability Management",
    owns: "The balance sheet, and the internal funds transfer pricing that decides how much value a product is credited for the deposits it raises.",
    theyCareAbout: "Deposit quality, stability and duration - not transaction volume.",
    youNeed:
      "An agreed attribution method, so balances held by entities active on the platform are credited to this product rather than disappearing into a general pool.",
    howTheyBlock:
      "Without an attribution agreement the entire business case is unprovable. You will have raised the deposits and be unable to demonstrate you did.",
    howToWin:
      "Engage them before build, not at the first review. Frame the product as a deposit-stability instrument in their language, and agree the measurement method while it is still a hypothesis rather than a claim.",
    critical: true,
  },
  {
    department: "Global Payments Solutions sales and relationship managers",
    owns: "The client relationships and the revenue conversation.",
    theyCareAbout: "Whether this helps them retain and grow their accounts, and whether it is explainable without technical training.",
    youNeed: "Qualified introductions to the right clients and honest feedback on objections.",
    howTheyBlock:
      "Quietly. They simply do not raise it in client meetings, and the product dies from absence rather than rejection.",
    howToWin:
      "Give them a one-page value narrative in client language, a qualifying checklist, and early wins they can point to. Never send them into a meeting needing to explain a ledger.",
    critical: true,
  },
  {
    department: "Financial Crime Compliance",
    owns: "Screening standards, sanctions policy and the threshold for holding a payment.",
    theyCareAbout: "That faster settlement never means weaker control, and that every hold is defensible to a regulator.",
    youNeed: "Agreement on pre-settlement screening design and the exception path.",
    howTheyBlock: "A late objection here can invalidate the core atomic-settlement design, because controls must complete before value moves.",
    howToWin:
      "Involve them in designing the unhappy path first. Arriving with the exception flow already drafted signals you understand their constraint is the product, not an obstacle to it.",
    critical: true,
  },
  {
    department: "Legal",
    owns: "Settlement finality opinions per corridor, client terms and the enforceability of the arrangement.",
    theyCareAbout: "Whether the bank's position holds if a counterparty fails, and whether obligations are clear.",
    youNeed: "A finality opinion per corridor before that corridor is built, not after.",
    howTheyBlock: "A corridor without an opinion cannot launch, stranding whatever integration spend already went into it.",
    howToWin: "Sequence the roadmap so legal readiness is a gate ahead of build spend, and give them long lead times - opinions are slow by nature.",
    critical: true,
  },
  {
    department: "Operations",
    owns: "Exception handling, reconciliation and the round-the-clock service model.",
    theyCareAbout: "Whether they can actually staff and run the promise the product makes.",
    youNeed: "A costed, staffable operating model for 24/7 cover.",
    howTheyBlock: "An unrunnable promise gets diluted after launch, and the client experience quietly degrades to match.",
    howToWin: "Cost the operating model honestly in the business case rather than treating always-on as free, and design exceptions with them rather than handing them over.",
  },
  {
    department: "Technology and Engineering",
    owns: "Build, integration to core systems, resilience and recovery targets.",
    theyCareAbout: "Clear requirements, realistic sequencing and non-functional targets set early rather than retrofitted.",
    youNeed: "Delivery capacity and honest estimates.",
    howTheyBlock: "Integration to core banking is usually the longest pole; underestimating it moves every date.",
    howToWin: "Prioritise a thin end-to-end path over breadth of features, so integration risk surfaces in month two rather than month ten.",
  },
  {
    department: "Finance and Product Control",
    owns: "The profit and loss account, pricing approval and cost allocation.",
    theyCareAbout: "Whether revenue is incremental or cannibalised, and whether cost to serve falls with scale.",
    youNeed: "Pricing sign-off and agreement on how deposit contribution is recognised.",
    howTheyBlock: "They can refuse a price that undercuts existing payment revenue unless the balance argument is made explicitly.",
    howToWin: "Bring the cannibalisation point yourself, with the balance retention case attached. Being the one who raises it earns far more credibility than being the one who omitted it.",
  },
  {
    department: "Risk (Non-Financial Risk) and the New Product Approval forum",
    owns: "Formal risk acceptance and the authority to permit launch.",
    theyCareAbout: "That risks are identified, owned, controlled and evidenced - not that they are zero.",
    youNeed: "Approval to launch, and to each subsequent phase.",
    howTheyBlock: "No approval, no launch. This is an absolute gate rather than a negotiation.",
    howToWin: "Treat the control framework as part of the product from the start. A risk register with named owners and tested controls moves far faster through this forum than a strong commercial case.",
  },
  {
    department: "Regulatory Affairs and the regulator relationship",
    owns: "The bank's supervisory dialogue, including with the Hong Kong Monetary Authority.",
    theyCareAbout: "No surprises, and consistency with what the bank has already told its supervisor.",
    youNeed: "A path into pilot programmes and early read on supervisory expectations.",
    howTheyBlock: "Going around them damages a relationship worth far more than any single product.",
    howToWin: "Give them early visibility and let them lead the conversation. The job description names regulator engagement directly, so demonstrating this instinct matters in the interview itself.",
  },
  {
    department: "Marketing and Communications",
    owns: "External positioning, media and thought-leadership opportunities.",
    theyCareAbout: "Credible, approved messages that strengthen the bank's position.",
    youNeed: "Support for the thought-leadership objective the job description sets out.",
    howTheyBlock: "Rarely block, but can overstate a pilot as a launch - which creates a client and regulatory problem you then own.",
    howToWin: "Give them precise language about what is live versus piloted, and review claims before they go out.",
  },
];

export const judgementCalls = [
  {
    call: "Few deep pilots, not many shallow ones",
    reasoning:
      "Three genuinely committed clients produce better evidence than twelve curious ones. Shallow pilots generate activity metrics and no decision-grade signal, and they consume the same onboarding effort.",
  },
  {
    call: "Refuse client-specific customisation in phase one",
    reasoning:
      "The first bespoke build feels like commercial flexibility and becomes a permanent maintenance cost that slows every later client. Say no early, and explain that a standard product is what makes it cheap for them.",
  },
  {
    call: "Start where legal finality already exists",
    reasoning:
      "Corridor choice should follow legal readiness, not client enthusiasm. The most excited client in an unopined corridor is a slower path to revenue than a lukewarm one in a clear corridor.",
  },
  {
    call: "Agree deposit attribution before building anything",
    reasoning:
      "If the internal funds transfer pricing model will not credit the product for balances it raises, the business case cannot be proven regardless of how well the product performs. This is an internal negotiation, and it decides the outcome more than any feature does.",
  },
];


// ---------------------------------------------------------------------------
// The unit economics above model Track 1. Track 2 has a different client, a
// different revenue shape and materially different volume, so it is costed
// separately rather than folded into the same worked example.
// ---------------------------------------------------------------------------

export const track2Economics = {
  headline: "Track 2 earns differently — and that difference matters",
  whySeparate:
    "The cash-pooling numbers above assume one corporate treasury client with steady intra-group volume and, critically, balances that stay with the bank. Track 2 serves a different buyer — institutional investors and asset managers settling against third-party tokenised funds and bonds — and the money arrives in a different shape.",
  lines: [
    {
      line: "Settlement fee per transaction",
      how: "A fee on each cash leg provided against a third-party asset, typically priced per settlement rather than per dollar.",
      note: "Smaller per transaction than a treasury subscription, but the volume ceiling is far higher because the bank does not need to have issued the asset to earn it.",
    },
    {
      line: "Balances held pending settlement",
      how: "Cash positioned ahead of subscription and redemption cycles sits with the bank between instruction and settlement.",
      note: "Lower and more volatile than treasury operating balances, but real. Fund flows are lumpy, which makes this line harder to forecast than Track 1's.",
    },
    {
      line: "Foreign-exchange spread on cross-currency settlement",
      how: "Where the asset is priced in one currency and the investor funds in another.",
      note: "Often the largest single line in this track, and the one most dependent on which corridors are opened first.",
    },
  ],
  theRealPrize:
    "Track 2's commercial logic is not the fee — it is position. If the bank is the default cash leg for tokenised fund settlement in a market, it sees the flow, holds the transitional balances and becomes very hard to displace. That is a market-structure argument rather than a revenue-per-client argument, and it should be made as one.",
  honestCaveat:
    "Track 2's revenue per client is lower and less predictable than Track 1's, and it depends on counterparties the bank does not control. It should be funded as a strategic position, not sold internally on near-term contribution — claiming otherwise invites a finance review that the numbers will not survive.",
};
