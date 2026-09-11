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

export interface Participant {
  name: string;
  url?: string;
}

export interface CapabilityRow {
  capability: string;
  participants: Participant[];
  assess: string;
}

export const capabilityLandscape: CapabilityRow[] = [
  {
    capability: "Tokenised asset / institutional network infrastructure",
    participants: [
      { name: "Canton Network", url: "https://www.canton.network" },
      { name: "R3", url: "https://www.r3.com" },
      { name: "Enterprise Ethereum / permissioned DLT providers" },
    ],
    assess:
      "Privacy, participant governance, interoperability, smart-contract lifecycle, resilience, legal enforceability, exit strategy.",
  },
  {
    capability: "Digital-asset custody and wallet infrastructure",
    participants: [
      { name: "Metaco", url: "https://www.metaco.com" },
      { name: "Fireblocks", url: "https://www.fireblocks.com" },
      { name: "Taurus", url: "https://www.taurushq.com" },
      { name: "BitGo", url: "https://www.bitgo.com" },
      { name: "Copper", url: "https://copper.co" },
    ],
    assess:
      "Key management, maker-checker controls, segregation, recovery, wallet policy, auditability, regulatory suitability.",
  },
  {
    capability: "Financial-crime / blockchain intelligence",
    participants: [
      { name: "Chainalysis", url: "https://www.chainalysis.com" },
      { name: "TRM Labs", url: "https://www.trmlabs.com" },
      { name: "Elliptic", url: "https://www.elliptic.co" },
    ],
    assess:
      "Sanctions coverage, wallet screening, monitoring scenarios, false positives, case management, data handling, escalation workflow.",
  },
  {
    capability: "Payment, messaging and interoperability infrastructure",
    participants: [
      { name: "Swift", url: "https://www.swift.com" },
      { name: "ISO 20022-enabled API infrastructure", url: "https://www.iso20022.org" },
      { name: "RTGS / correspondent banking" },
      { name: "Market-infrastructure connectivity" },
    ],
    assess:
      "Message standards, payment confirmation, reconciliation, operational resilience, exception handling and migration path.",
  },
  {
    capability: "Tokenised securities / market infrastructure",
    participants: [
      { name: "CSDs" },
      { name: "Custodians" },
      { name: "Tokenised asset platforms" },
      { name: "Settlement agents" },
    ],
    assess:
      "Asset issuance, custody, transfer restrictions, corporate actions, DvP model, settlement finality and investor eligibility.",
  },
];

export interface VendorProfile {
  name: string;
  url?: string;
  offer: string;
  differentiator: string;
  hsbcSignal: string;
  isPick?: boolean;
}

export interface VendorCategory {
  category: string;
  context: string;
  vendors: VendorProfile[];
  verdict: string;
  verdictUrl?: string;
}

export const vendorDeepDive: VendorCategory[] = [
  {
    category: "Tokenised asset / institutional network infrastructure",
    context:
      "The shared ledger multiple banks (or multiple parts of one bank) actually transact on — the single most consequential build/buy/partner call in this whole product area, since switching later means re-platforming live client balances.",
    vendors: [
      {
        name: "Canton Network",
        url: "https://www.canton.network",
        offer:
          "A public, interoperable blockchain purpose-built for institutional finance, built on the Daml smart-contract language. Its distinguishing feature is configurable privacy at the transaction level — each counterparty only sees the sub-ledger slice relevant to them, not the whole network's activity, which a normal permissioned chain can't do without a separate privacy layer.",
        differentiator:
          "Newer (spun out of Digital Asset in 2023) but has grown fast: over 600 institutions and 30+ 'super validators' including Goldman Sachs (via its GS DAP platform), DTCC and Google Cloud were live on it by 2026, with $9 trillion in reported monthly transaction volume.",
        hsbcSignal:
          "HSBC publicly completed a pilot simulating the issuance, transfer and atomic settlement of its own Tokenised Deposit Service on Canton Network — the most recent and most product-specific piece of evidence in this whole comparison, since it's this case study's own flagship product being tested.",
        isPick: true,
      },
      {
        name: "R3 (Corda)",
        url: "https://www.r3.com",
        offer:
          "A permissioned enterprise DLT platform, purpose-built from day one for regulated financial-services workloads rather than adapted from a public-chain design — used for syndicated loans (NatWest/Finastra), reinsurance (B3i/ACORD) and multiple central-bank digital-currency pilots.",
        differentiator:
          "The longest track record of any enterprise DLT platform in regulated finance — Corda launched in 2016, and R3 today counts the Bank of Italy, MAS, the Swiss National Bank, Euroclear and SDX among its participants.",
        hsbcSignal:
          "HSBC's relationship with R3 predates Canton Network's existence by eight years: HSBC joined the R3 consortium within weeks of its September 2015 launch and was one of roughly 40 banks that invested $107M into R3 in 2017 — a much deeper capital and governance relationship, just not one tied to this specific tokenised-deposit use case.",
      },
    ],
    verdict:
      "Canton Network is the better answer for this specific product, because HSBC has already run its own Tokenised Deposit Service through a pilot there — that's a direct, product-specific signal, not an inference. The nuance worth having ready in the room: R3 is not a loser here, it's a longer and broader relationship (HSBC has been a member and investor since 2015-17) that likely still underpins other parts of HSBC's DLT footprint. A strong answer shows you know both facts rather than picking one network as if the other doesn't exist — real banks run multi-rail strategies precisely because switching a live ledger later is expensive.",
    verdictUrl: "https://www.canton.network/news/hsbc-completes-tokenised-deposit-pilot-on-canton-network",
  },
  {
    category: "Digital-asset custody and wallet infrastructure",
    context:
      "Who actually holds the cryptographic keys and enforces maker-checker policy on every transfer — the control layer a regulator will scrutinise hardest, because a custody failure is a client-money failure.",
    vendors: [
      {
        name: "Metaco",
        url: "https://www.metaco.com",
        offer:
          "The Harmonize platform — a custody orchestration layer with an HSM-backed policy engine, built specifically to plug into a bank's existing core systems and control framework rather than to run standalone.",
        differentiator:
          "Built bank-first from the outset, not adapted from an exchange or fintech product — acquired by Ripple in 2023 specifically to deepen its institutional custody focus.",
        hsbcSignal:
          "This one isn't hypothetical. HSBC's own digital-assets custody service for tokenised securities runs on Metaco's Harmonize platform — publicly announced in November 2023 and already live.",
        isPick: true,
      },
      {
        name: "Fireblocks",
        offer:
          "MPC (multi-party computation)-based wallet infrastructure plus a transfer network connecting counterparties directly, and — since gaining a NYDFS trust charter in 2024 — its own regulated qualified-custody offering.",
        differentiator:
          "The broadest institutional footprint of any vendor in this category: 80+ banks in live production (including BNY Mellon and ABN AMRO) across 150+ blockchains — but it started by serving exchanges and crypto-native firms before banks, a different origin than Metaco's bank-first design.",
        hsbcSignal: "No publicly disclosed HSBC relationship — the credible benchmark to compare Metaco against, not the incumbent.",
        url: "https://www.fireblocks.com",
      },
      {
        name: "Taurus",
        url: "https://www.taurushq.com",
        offer:
          "A Swiss-regulated platform (TDN — Taurus Digital Network) spanning custody, issuance and trading in one stack, for both crypto and tokenised traditional assets.",
        differentiator:
          "Strongest in Europe specifically: Deutsche Bank signed a global partnership with Taurus in 2023 to run its own crypto and tokenisation custody, and Credit Suisse was an early investor.",
        hsbcSignal: "No public HSBC relationship — effectively 'the Deutsche Bank equivalent choice,' useful as a contrast, not a contender here.",
      },
      {
        name: "BitGo",
        url: "https://www.bitgo.com",
        offer:
          "One of the original institutional crypto custodians (founded 2013), now operating as BitGo Bank & Trust — a federally chartered (OCC) national trust bank offering qualified custody with up to $250M of insurance.",
        differentiator:
          "The deepest pure-custody regulatory license stack of any vendor here (state trust charters plus a new federal OCC charter) — the strongest fit for a firm that needs custody as a standalone regulated product, not integrated into a bank's own platform.",
        hsbcSignal: "No public HSBC relationship — more relevant to asset managers and exchanges than to a universal bank building its own custody stack.",
      },
      {
        name: "Copper",
        url: "https://copper.co",
        offer:
          "UK-based custody plus ClearLoop, a network letting institutional clients trade on exchanges without pre-funding them — collateral stays in Copper custody, cutting counterparty exposure to the exchange itself.",
        differentiator:
          "ClearLoop's exchange-settlement-risk model is genuinely distinctive versus the other four, but it's a trading/exchange-connectivity play, not a deposit-tokenisation platform.",
        hsbcSignal: "No public HSBC relationship, and the least relevant of the five to a tokenised-deposit product specifically.",
      },
    ],
    verdict:
      "Metaco wins outright, and not as a judgement call — it's the vendor HSBC has already selected and gone live with for digital-asset custody. The interview-worthy question isn't 'which vendor' but 'why Metaco over Fireblocks,' given Fireblocks has the broader bank client base: the likely answer is that Metaco's bank-first governance and policy-engine model fit HSBC's existing control framework more directly than a platform whose DNA started with exchanges.",
    verdictUrl: "https://www.metaco.com/press-release/hsbc-metaco-digital-asset-custody/",
  },
  {
    category: "Financial-crime / blockchain intelligence",
    context:
      "The screening layer that watches every wallet and transaction for sanctions exposure, mixer/darknet association and other laundering risk — arguably the single hardest gate to pass in this case study's own risk framework.",
    vendors: [
      {
        name: "Elliptic",
        url: "https://www.elliptic.co",
        offer:
          "UK-founded blockchain analytics and AML/sanctions screening — Elliptic Navigator (a configurable risk-rules engine) and Lens (wallet screening and investigation) — across roughly 700 institutional clients screening about a billion transactions a week.",
        differentiator:
          "The only one of the three with disclosed bank ownership stakes, not just customer contracts — backed by four Global Systemically Important Banks.",
        hsbcSignal:
          "HSBC made a strategic investment in Elliptic in September 2025, joining JPMorgan (2021), Santander (2022) and Wells Fargo (2025) as GSIB-backers — Elliptic markets itself as 'the first blockchain analytics firm backed by four GSIBs.' That's a materially stronger signal than a vendor contract: HSBC put its own capital behind Elliptic's roadmap.",
        isPick: true,
      },
      {
        name: "Chainalysis",
        url: "https://www.chainalysis.com",
        offer:
          "The largest, most established blockchain-analytics platform — KYT (Know Your Transaction) for real-time monitoring, Reactor for investigations, and sanctions screening across the broadest chain and currency coverage of any vendor in this category.",
        differentiator: "Market leader by scale, brand recognition and law-enforcement/government relationships — the industry's default 'safe choice.'",
        hsbcSignal: "No publicly disclosed HSBC investment or ownership relationship — likely still present somewhere in a group this size's compliance stack, but not the strategically-backed choice.",
      },
      {
        name: "TRM Labs",
        url: "https://www.trmlabs.com",
        offer:
          "Blockchain intelligence focused on fraud, sanctions and national-security risk, with fast-growing AI-driven risk scoring and strong government and law-enforcement partnerships.",
        differentiator: "Positioned as more investigation-and-intelligence-led than Chainalysis's broader platform, and newer/more nimble as a company.",
        hsbcSignal: "No public HSBC relationship found.",
      },
    ],
    verdict:
      "Elliptic is the clear pick specifically for HSBC — not because Chainalysis or TRM Labs are weaker products (both are credible, widely used platforms), but because HSBC chose to put its own capital into Elliptic in September 2025, the same pattern JPMorgan, Santander and Wells Fargo had already set. An investment signals HSBC wants influence over the vendor's product roadmap, not just a subscription to it — a materially stronger relationship than a procurement contract, and a good example of the kind of detail that separates a rehearsed answer from real research.",
    verdictUrl: "https://www.elliptic.co/newsroom/elliptic-secures-strategic-investment-from-hsbc",
  },
];

export const publicIndustryContext = [
  {
    text: "HSBC publicly announced its new digital assets custody service for tokenised securities is underpinned by Metaco's Harmonize platform.",
    source: "Metaco press release, November 2023",
    url: "https://www.metaco.com/press-release/hsbc-metaco-digital-asset-custody/",
  },
  {
    text: "HSBC publicly reported completing a pilot simulating the issuance, transfer and atomic settlement of its Tokenised Deposit Service on the Canton Network, as part of interoperability exploration across settlement rails.",
    source: "Canton Network, 2026",
    url: "https://www.canton.network/news/hsbc-completes-tokenised-deposit-pilot-on-canton-network",
  },
  {
    text: "HSBC's Tokenised Deposit Service is live for corporate treasury clients in Hong Kong, supporting real-time, always-on HKD and USD payments between a client's own entities.",
    source: "HSBC Hong Kong, 2025",
    url: "https://www.about.hsbc.com.hk/news-and-media/hsbc-launches-tokenised-deposit-service-for-corporate-cash-management-in-hong-kong",
  },
  {
    text: "HSBC Orion, HSBC's platform for digitally native bond issuance, has been publicly reported to have facilitated several billion dollars in tokenised bond transactions across multiple jurisdictions, and was selected for the UK Treasury's digital gilt (DIGIT) pilot.",
    source: "HSBC newsroom",
    url: "https://www.hsbc.com/news-and-views/news/media-releases/2026/hsbc-orion-awarded-digit-platform-mandate",
  },
];

export const publicContextDisclaimer =
  "This case study does not represent HSBC's systems, architecture, procurement choices or confidential strategy. The items above are drawn from HSBC's own public announcements and independent trade press, referenced here only as market context for how a Digital Currencies product manager should read the competitive landscape.";

export interface InfrastructureInitiative {
  name: string;
  description: string;
  relevance: string;
  source: string;
  url?: string;
}

export const infrastructureInitiatives: InfrastructureInitiative[] = [
  {
    name: "Partior",
    description:
      "An interbank tokenised-deposit settlement network founded by DBS, J.P. Morgan and Temasek, with Standard Chartered as a founding shareholder and Deutsche Bank also live on the network. Supports 24/7 cross-border interbank transfers in USD, EUR and SGD, with compliance performed in advance to avoid delaying settlement.",
    relevance:
      "The closest real-world shape of this product's Phase 4 (cross-bank interoperability) — multiple banks' tokenised deposits settling on a shared, bank-governed network rather than a single institution's ledger.",
    source: "Partior",
    url: "https://partior.com/about-us/our-story",
  },
  {
    name: "BIS Project Agorá",
    description:
      "A public-private collaboration convened by the Bank for International Settlements and the Institute of International Finance, bringing together seven central banks and 40+ regulated financial institutions — including HSBC, J.P. Morgan, Citi, Deutsche Bank, Swift, Mastercard and UBS — to explore tokenised commercial-bank deposits settling alongside tokenised central-bank reserves on a shared programmable platform for cross-border payments.",
    relevance:
      "HSBC is a named participant. Directly relevant to how this product's cross-border corridors (Phase 2) and interoperability layer (Phase 4) could eventually connect to central-bank money, not just other commercial banks.",
    source: "Bank for International Settlements, 2024–2026",
    url: "https://www.bis.org/publ/othp110.htm",
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
  url?: string;
}

export const benchmarks: Benchmark[] = [
  {
    name: "J.P. Morgan Kinexys",
    focus: "Institutional digital money, programmable payments, tokenised assets and settlement (formerly Onyx).",
    lesson: "Early scale matters, but client adoption and trusted payment integration matter more than blockchain branding.",
    url: "https://www.jpmorgan.com/kinexys/digital-assets",
  },
  {
    name: "Citi Token Services",
    focus: "Tokenised deposits for institutional cash management and trade finance, built on Citi's existing Treasury and Trade Solutions franchise.",
    lesson: "The strongest propositions extend existing transaction-banking relationships and workflows, rather than starting from a blank slate.",
    url: "https://services.citi.com/solutions/citi-token-services",
  },
  {
    name: "Standard Chartered digital-asset ecosystem",
    focus: "Digital assets, custody (including its Zodia Custody business), tokenisation and Asian and Middle Eastern market connectivity.",
    lesson: "Network optionality and ecosystem partnerships can accelerate time to market versus building every capability in-house.",
    url: "https://www.sc.com/en/corporate-investment-banking/digital-assets/",
  },
  {
    name: "DBS Token Services",
    focus: "Programmable, 24/7 tokenised banking services for institutional clients, integrated with existing payment infrastructure.",
    lesson:
      "Banks can turn tokenisation into a real client product when controls, distribution and operating readiness are built together, not sequenced after the technology.",
    url: "https://www.dbs.com.sg/corporate/tokenservices",
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
