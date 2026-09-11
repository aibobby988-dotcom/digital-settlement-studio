export const buildBuyPartner = [
  {
    mode: "Build in-house",
    bestFor: [
      "Differentiated client proposition",
      "Proprietary orchestration and workflow logic",
      "Product policy engine and client entitlements",
      "Integration to core banking, treasury systems, payments operations and internal controls",
      "Client experience and commercial product design",
    ],
  },
  {
    mode: "Buy / license",
    bestFor: [
      "Specialist custody and wallet technology",
      "Blockchain infrastructure components",
      "Key management and security tooling",
      "Financial-crime analytics",
      "Workflow monitoring, observability and reconciliation tools",
    ],
  },
  {
    mode: "Partner / interoperate",
    bestFor: [
      "External market infrastructure",
      "Multi-bank settlement networks",
      "Tokenised asset platforms",
      "Custodians and CSDs",
      "Central-bank, regulator and industry initiatives",
      "Cross-network interoperability",
    ],
  },
];

export const buildBuyPartnerPrinciple =
  "The platform owner should retain ownership of the client proposition, control framework, product policy and critical integration layer — even where specialist technology is sourced externally.";

export const partnerScorecardDimensions = [
  "Client reach and network effects",
  "Regulatory fit by jurisdiction",
  "Legal settlement finality",
  "Privacy and transaction-data controls",
  "ISO 20022 and API interoperability",
  "Wallet / key-management operating model",
  "Financial-crime screening and monitoring",
  "Liquidity and settlement-asset model",
  "Cyber resilience, business continuity and exit plan",
  "Implementation complexity and time to market",
  "Commercial economics and vendor concentration risk",
];

export interface CapabilityRow {
  capability: string;
  participants: string[];
  assess: string;
}

export const capabilityLandscape: CapabilityRow[] = [
  {
    capability: "Tokenised asset / institutional network infrastructure",
    participants: ["Digital Asset / Canton Network", "R3", "Enterprise Ethereum / permissioned DLT providers"],
    assess:
      "Privacy, participant governance, interoperability, smart-contract lifecycle, resilience, legal enforceability, exit strategy.",
  },
  {
    capability: "Digital-asset custody and wallet infrastructure",
    participants: ["Metaco / Ripple", "Fireblocks", "Taurus", "BitGo", "Copper"],
    assess:
      "Key management, maker-checker controls, segregation, recovery, wallet policy, auditability, regulatory suitability.",
  },
  {
    capability: "Financial-crime / blockchain intelligence",
    participants: ["Chainalysis", "TRM Labs", "Elliptic"],
    assess:
      "Sanctions coverage, wallet screening, monitoring scenarios, false positives, case management, data handling, escalation workflow.",
  },
  {
    capability: "Payment, messaging and interoperability infrastructure",
    participants: ["Swift", "ISO 20022-enabled API infrastructure", "RTGS / correspondent banking", "Market-infrastructure connectivity"],
    assess:
      "Message standards, payment confirmation, reconciliation, operational resilience, exception handling and migration path.",
  },
  {
    capability: "Tokenised securities / market infrastructure",
    participants: ["CSDs", "Custodians", "Tokenised asset platforms", "Settlement agents"],
    assess:
      "Asset issuance, custody, transfer restrictions, corporate actions, DvP model, settlement finality and investor eligibility.",
  },
];

export const publicIndustryContext = [
  {
    text: "HSBC publicly announced its new digital assets custody service for tokenised securities is underpinned by Metaco's Harmonize platform.",
    source: "Publicly reported industry context, November 2023",
  },
  {
    text: "HSBC publicly reported completing a pilot simulating the issuance, transfer and atomic settlement of its Tokenised Deposit Service on the Canton Network, as part of interoperability exploration across settlement rails.",
    source: "Publicly reported industry context, 2026",
  },
  {
    text: "HSBC's Tokenised Deposit Service is live for corporate treasury clients in Hong Kong, supporting real-time, always-on HKD and USD payments between a client's own entities.",
    source: "Publicly reported industry context, 2025",
  },
  {
    text: "HSBC Orion, HSBC's platform for digitally native bond issuance, has been publicly reported to have facilitated several billion dollars in tokenised bond transactions across multiple jurisdictions, and was selected for the UK Treasury's digital gilt (DIGIT) pilot.",
    source: "Publicly reported industry context",
  },
];

export const publicContextDisclaimer =
  "This case study does not represent HSBC's systems, architecture, procurement choices or confidential strategy. The items above are drawn from HSBC's own public announcements and independent trade press, referenced here only as market context for how a Digital Currencies product manager should read the competitive landscape.";

export interface InfrastructureInitiative {
  name: string;
  description: string;
  relevance: string;
  source: string;
}

export const infrastructureInitiatives: InfrastructureInitiative[] = [
  {
    name: "Partior",
    description:
      "An interbank tokenised-deposit settlement network founded by DBS, J.P. Morgan and Temasek, with Standard Chartered as a founding shareholder and Deutsche Bank also live on the network. Supports 24/7 cross-border interbank transfers in USD, EUR and SGD, with compliance performed in advance to avoid delaying settlement.",
    relevance:
      "The closest real-world shape of this product's Phase 4 (cross-bank interoperability) — multiple banks' tokenised deposits settling on a shared, bank-governed network rather than a single institution's ledger.",
    source: "Publicly reported industry context",
  },
  {
    name: "BIS Project Agorá",
    description:
      "A public-private collaboration convened by the Bank for International Settlements and the Institute of International Finance, bringing together seven central banks and 40+ regulated financial institutions — including HSBC, J.P. Morgan, Citi, Deutsche Bank, Swift, Mastercard and UBS — to explore tokenised commercial-bank deposits settling alongside tokenised central-bank reserves on a shared programmable platform for cross-border payments.",
    relevance:
      "HSBC is a named participant. Directly relevant to how this product's cross-border corridors (Phase 2) and interoperability layer (Phase 4) could eventually connect to central-bank money, not just other commercial banks.",
    source: "Publicly reported industry context, 2024–2026",
  },
  {
    name: "UK Regulated Liability Network (RLN) pilot",
    description:
      "A live-transaction pilot exploring a shared ledger for regulated money — commercial bank deposits and potentially other regulated liabilities — with HSBC, Barclays, Lloyds, NatWest, Nationwide and Santander all participating.",
    relevance:
      "Shows the UK regulatory and industry appetite for exactly the kind of shared, regulated digital-money infrastructure this roadmap's later phases assume — useful evidence that Phase 5 isn't speculative.",
    source: "Publicly reported industry context",
  },
];

export interface Benchmark {
  name: string;
  focus: string;
  lesson: string;
}

export const benchmarks: Benchmark[] = [
  {
    name: "J.P. Morgan Kinexys",
    focus: "Institutional digital money, programmable payments, tokenised assets and settlement (formerly Onyx).",
    lesson: "Early scale matters, but client adoption and trusted payment integration matter more than blockchain branding.",
  },
  {
    name: "Citi Token Services",
    focus: "Tokenised deposits for institutional cash management and trade finance, built on Citi's existing Treasury and Trade Solutions franchise.",
    lesson: "The strongest propositions extend existing transaction-banking relationships and workflows, rather than starting from a blank slate.",
  },
  {
    name: "Standard Chartered digital-asset ecosystem",
    focus: "Digital assets, custody (including its Zodia Custody business), tokenisation and Asian and Middle Eastern market connectivity.",
    lesson: "Network optionality and ecosystem partnerships can accelerate time to market versus building every capability in-house.",
  },
  {
    name: "DBS Token Services",
    focus: "Programmable, 24/7 tokenised banking services for institutional clients, integrated with existing payment infrastructure.",
    lesson:
      "Banks can turn tokenisation into a real client product when controls, distribution and operating readiness are built together, not sequenced after the technology.",
  },
];

export const benchmarkLessons = [
  "Client use case first",
  "Integrate with existing treasury operations",
  "Scale through controlled corridors",
  "Ensure legal, compliance and operations are ready",
  "Do not confuse pilot activity with commercial product-market fit",
];

export interface DecisionLogEntry {
  question: string;
  rationale: string[];
}

export const decisionLog: DecisionLogEntry[] = [
  {
    question: "Why start with intrabank tokenised treasury rather than public-chain stablecoin payments?",
    rationale: [
      "Clearer client relationship and onboarding",
      "Controlled entitlements",
      "Familiar commercial-bank money",
      "Simpler early operating model",
      "Phased path toward interoperability",
    ],
  },
  {
    question: "Why partner for specialist custody rather than build it?",
    rationale: [
      "Specialist key-management and custody capability",
      "Independent controls",
      "Faster time to market",
      "Requires vendor due diligence, resilience testing and an exit plan",
    ],
  },
  {
    question: "Why use DvP only after treasury use cases are proven?",
    rationale: [
      "DvP requires coordination across cash, asset, custody, legal and market-infrastructure legs",
      "Higher operational and legal complexity",
      "Treasury use cases validate the underlying digital-money control model first",
    ],
  },
];
