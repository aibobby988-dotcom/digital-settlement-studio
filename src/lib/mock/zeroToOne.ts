export interface FrameworkStep {
  step: string;
  question: string;
}

export const framework: FrameworkStep[] = [
  { step: "1. Discovery", question: "What's the specific, evidenced client problem — not a technology idea looking for a use case?" },
  { step: "2. MVP hypothesis", question: "What's the smallest thing that would prove or disprove this cheaply, with a real client?" },
  { step: "3. Scope decisions", question: "What's explicitly in v1, and — just as important — what's explicitly deferred, and why is that safe to defer?" },
  { step: "4. Walking skeleton", question: "What's the thinnest possible slice that goes genuinely end-to-end, even if every part of it is manual or narrow?" },
  { step: "5. Break it down", question: "What are the epics and first stories, with acceptance criteria specific enough to build against?" },
  { step: "6. De-risk the biggest unknown first", question: "What's the one assumption that, if wrong, invalidates everything else — and how do you test it before committing to the full build?" },
  { step: "7. Launch criteria", question: "What has to be true — client value, legal, risk, operations, commercial — before this leaves pilot?" },
];

export interface ZeroToOneStory {
  id: string;
  title: string;
  narrative: string;
  acceptanceCriteria: string[];
}

export interface ZeroToOneEpic {
  title: string;
  goal: string;
  stories: ZeroToOneStory[];
}

export interface ProductBuild {
  id: string;
  name: string;
  tagline: string;
  problem: string;
  hypothesis: string;
  scopeIn: string[];
  scopeOut: string[];
  walkingSkeleton: string;
  epics: ZeroToOneEpic[];
  biggestUnknown: string;
  deriskingApproach: string;
  launchCriteria: string;
  launchCriteriaLink: string;
}

export const productBuilds: ProductBuild[] = [
  {
    id: "treasury",
    name: "Tokenised Treasury",
    tagline: "From 'clients complain about cut-offs' to a working intrabank pilot",
    problem:
      "Corporate treasury clients with multiple group entities can't move cash between their own accounts outside banking hours, and reconciling those movements afterward is manual and slow.",
    hypothesis:
      "If one client can move tokenised deposits between their own approved entities inside a single legal entity, we'll see a measurable drop in idle cash and reconciliation hours within one quarter, with zero unresolved reconciliation breaks.",
    scopeIn: [
      "Issue, transfer and redeem tokenised deposits",
      "Transfers between pre-approved entities only (entitlements configured by ops, not self-serve)",
      "Sanctions screening on every transfer — not optional even in MVP",
      "Single currency to start (USD)",
      "Basic immutable audit log",
    ],
    scopeOut: [
      "Multi-currency support",
      "Self-serve entitlement management for clients",
      "Real-time reconciliation dashboard (next-day report is enough for MVP)",
      "Client-facing statements and exports",
      "A hard 24/7 SLA — the platform can be always-on technically while support hours stay limited at first",
    ],
    walkingSkeleton:
      "One pilot client, two of their entities, one currency. Entitlements set up manually by an implementation manager (no self-serve UI). Client initiates a transfer through a simple form. Real ledger posting and real screening — nothing about the control path is faked. Reconciliation report generated next-day, not real-time. That's the whole v1 — everything else in the full backlog is v2 and beyond.",
    epics: [],
    biggestUnknown:
      "Whether tokenised deposits are legally recognised as equivalent to the underlying bank deposit in the pilot jurisdiction.",
    deriskingApproach:
      "Get a narrow legal opinion for one jurisdiction and one client structure before writing a line of settlement code — not after. If the answer is unclear or unfavourable, the entire MVP scope needs to change before any engineering time is spent.",
    launchCriteria:
      "All 7 Phase 1 go/no-go gates on the Roadmap page — client-value validation, legal readiness, financial-crime controls tested, operational readiness, resilience testing, commercial economics, client-support readiness.",
    launchCriteriaLink: "/roadmap",
  },
  {
    id: "bond-dvp",
    name: "Bond DvP Settlement",
    tagline: "From 'one leg can fail after the other pays' to atomic settlement",
    problem:
      "In a bond trade, the buyer's cash and the seller's bond units settle as two separate steps — creating a window where one party can deliver and the other can fail to, especially across custodians or jurisdictions.",
    hypothesis:
      "If we settle one tokenised bond's trades atomically between one buyer and one seller who are both already onboarded to the same platform, we prove atomic DvP removes settlement-window risk without first having to solve cross-custodian bridging.",
    scopeIn: [
      "One tokenised bond issuance",
      "Pre-settlement checks: funds, holdings, counterparty approval, compliance screening",
      "Atomic settlement engine — both legs or neither",
      "Settlement-finality audit record",
      "Exception handling: a failed check rolls back both legs cleanly",
    ],
    scopeOut: [
      "Multiple simultaneous bond issuances",
      "Self-serve trade entry for buy-side desks (an ops user records confirmed trade details in MVP)",
      "Real order matching or an execution venue",
      "Cross-custodian bridging — v1 assumes both counterparties are custodied on the same platform",
      "Secondary-market liquidity features",
    ],
    walkingSkeleton:
      "One bond, one buyer, one seller, both already onboarded and KYC'd. A trade is confirmed off-platform (phone, email, whatever the desks already use) and an operations analyst enters the trade details. The platform runs all four pre-settlement checks for real, then settles atomically or rejects cleanly. No trading UI, no order book — just proving the settlement mechanism itself works end-to-end.",
    epics: [
      {
        title: "Tokenised bond issuance and atomic settlement (MVP)",
        goal: "Prove atomic DvP works end-to-end for one bond between two known counterparties before building anything around trade origination.",
        stories: [
          {
            id: "BND-101",
            title: "Record a confirmed bond trade for settlement",
            narrative:
              "As an operations analyst, I want to record a confirmed trade's buyer, seller, units and price so that the platform can execute atomic settlement against it.",
            acceptanceCriteria: [
              "Trade must reference an existing tokenised bond issuance",
              "Both buyer and seller must already be approved counterparties on the platform",
              "Units and price must be positive values within the issuance's outstanding supply",
              "A recorded trade cannot be edited after submission — corrections require a new trade record",
            ],
          },
          {
            id: "BND-102",
            title: "Run pre-settlement checks before any leg moves",
            narrative:
              "As a compliance officer, I want every recorded trade screened and both parties' balances/holdings verified before settlement executes so that a trade can never partially proceed.",
            acceptanceCriteria: [
              "Funds check confirms the buyer's cash balance covers the trade value",
              "Holdings check confirms the seller's bond balance covers the trade units",
              "Both counterparties' compliance screening must be current and clear",
              "Settlement cannot begin until all four checks (funds, holdings, approval, screening) pass",
            ],
          },
          {
            id: "BND-103",
            title: "Atomic settlement — both legs or neither",
            narrative:
              "As an operations analyst, I want the cash and bond legs to settle as a single atomic operation so that neither party is ever exposed to a partial trade.",
            acceptanceCriteria: [
              "A successful settlement updates both parties' balances in the same operation",
              "A failed check leaves both parties' balances completely unchanged",
              "Every settlement attempt — successful or failed — produces an immutable audit record with a timestamp",
              "A failed settlement raises an exception case for operations review",
            ],
          },
        ],
      },
    ],
    biggestUnknown:
      "Whether legal ownership of the tokenised bond units actually transfers on atomic settlement, in a way that's enforceable if challenged.",
    deriskingApproach:
      "Before generalising beyond one bond, get a legal opinion scoped narrowly to that one bond, one jurisdiction and one custody arrangement. Don't build support for a second bond until the first one's legal footing is confirmed.",
    launchCriteria:
      "Phase 3's go/no-go gates on the Roadmap page — this flow doesn't leave pilot until legal and regulatory readiness is confirmed specifically for tokenised-asset settlement, not just carried over from the treasury pilot.",
    launchCriteriaLink: "/roadmap",
  },
  {
    id: "fx-pvp",
    name: "FX PvP Settlement",
    tagline: "From 'one currency can pay before the other confirms' to PvP",
    problem:
      "In cross-currency settlement, one party's currency leg can pay out before the counterparty's leg is confirmed — principal risk that's been well understood since the 1974 Herstatt Bank failure, and still not fully solved for tokenised money.",
    hypothesis:
      "If we settle one USD/HKD corridor atomically between two counterparties who are already pre-funded, we prove PvP removes principal risk without first solving dynamic liquidity sourcing or multi-bank network participation.",
    scopeIn: [
      "One currency pair (USD/HKD)",
      "Liquidity check against each party's pre-funded balance",
      "Rate lock at trade confirmation",
      "Atomic settlement — both currency legs or neither",
      "Exception handling for insufficient liquidity",
    ],
    scopeOut: [
      "Additional currency pairs",
      "Live market rate feeds (rate is entered at trade confirmation in MVP, not streamed)",
      "Dynamic or automated liquidity sourcing",
      "Multi-bank network participation — v1 assumes a bilateral relationship between two counterparties who already prefund",
      "Retail or small-ticket FX",
    ],
    walkingSkeleton:
      "Two counterparties with an existing bilateral relationship, both holding pre-funded USD and HKD balances on the platform. A trade is confirmed with a locked rate. The platform checks both parties actually have sufficient liquidity in the currency they're delivering, then settles both legs atomically or rejects and leaves both balances untouched.",
    epics: [
      {
        title: "USD/HKD atomic PvP settlement (MVP)",
        goal: "Prove atomic PvP removes principal risk for one corridor between two pre-funded counterparties before building a liquidity network.",
        stories: [
          {
            id: "FXP-101",
            title: "Confirm an FX trade with a locked rate",
            narrative:
              "As a treasury operations analyst, I want to confirm a USD/HKD trade with a locked rate so that both parties know exactly what will settle before liquidity is checked.",
            acceptanceCriteria: [
              "Trade confirmation captures both parties, the rate, and both currency amounts",
              "The rate is locked at confirmation and cannot change before settlement",
              "Trade confirmation requires both counterparties to be pre-approved for the corridor",
            ],
          },
          {
            id: "FXP-102",
            title: "Check liquidity before either leg moves",
            narrative:
              "As a treasury operations analyst, I want both parties' liquidity verified in the currency they're delivering before settlement executes so that neither party is exposed if the other can't fund their leg.",
            acceptanceCriteria: [
              "USD liquidity check confirms the USD-delivering party's available balance covers the trade",
              "HKD liquidity check confirms the HKD-delivering party's available balance covers the trade",
              "Settlement cannot begin until both liquidity checks pass",
              "An insufficient-liquidity result blocks settlement without partially reserving either party's funds",
            ],
          },
          {
            id: "FXP-103",
            title: "Atomic PvP settlement — both currency legs or neither",
            narrative:
              "As a treasury operations analyst, I want both currency legs to settle as a single atomic operation so that neither party can end up having paid without receiving.",
            acceptanceCriteria: [
              "A successful settlement debits and credits both parties' balances in the same operation",
              "A failed liquidity check leaves both parties' balances completely unchanged",
              "Every settlement attempt produces an immutable, timestamped audit record",
              "A failed settlement is visible to both counterparties, not just the party that failed to fund",
            ],
          },
        ],
      },
    ],
    biggestUnknown:
      "Whether counterparties will actually agree to pre-fund both currencies on-platform — the entire PvP guarantee depends on funds being genuinely available atomically, not sourced dynamically after the fact.",
    deriskingApproach:
      "Validate the pre-funding assumption directly with Treasury and the target counterparty before building the settlement engine — if counterparties won't pre-fund, the MVP needs a different liquidity model before any of this is worth building.",
    launchCriteria:
      "Phase 4's go/no-go gates on the Roadmap page — this flow explicitly waits for cross-bank interoperability groundwork, since PvP's value compounds with more counterparties on compatible rails.",
    launchCriteriaLink: "/roadmap",
  },
];
