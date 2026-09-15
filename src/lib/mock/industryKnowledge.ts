export interface Term {
  term: string;
  explanation: string;
  url?: string;
}

export type TechStage = "Live today" | "Actively migrating" | "Reference framework" | "Being challenged";

export interface SettlementStandard extends Term {
  stage: TechStage;
  today: string;
  direction: string;
}

export const settlementStandards: SettlementStandard[] = [
  {
    term: "SWIFT MT → ISO 20022 (MX) migration",
    explanation:
      "SWIFT's global migration from legacy MT message formats to the richer, structured ISO 20022 (MX) standard for cross-border payments and reporting. MX carries far more structured data (purpose codes, richer remittance information) than MT ever could — directly relevant to why a tokenised settlement platform's purpose-code tagging and structured audit trail is a genuine improvement, not just a technology preference.",
    url: "https://www.swift.com/standards/iso-20022",
    stage: "Actively migrating",
    today: "The MT/MX coexistence period for cross-border payments (CBPR+) ended 22 Nov 2025 — MX is now the required format for in-scope SWIFT payment traffic. Most banks, including HSBC, have already cut over.",
    direction: "Not finished: structured-address enforcement and the MT101 → pain.001 migration both land in Nov 2026, so this is a live, multi-year rollout still in its tail end, not a completed one-off event.",
  },
  {
    term: "SWIFT gpi",
    explanation:
      "SWIFT's Global Payments Innovation initiative — end-to-end payment tracking, same-day use of funds, and transparent fees for correspondent banking payments. The closest legacy-rail equivalent to the real-time visibility this case study's tokenised treasury proposition offers; worth being able to contrast the two directly.",
    url: "https://www.swift.com/our-solutions/swift-gpi",
    stage: "Live today",
    today: "Fully in production across correspondent banking — this is the current standard, not a pilot or a migration in progress.",
    direction: "No planned replacement. It's being complemented by ISO 20022's richer data, not superseded — the upgrade path for this one is additive, not a rip-and-replace.",
  },
  {
    term: "CLS (Continuous Linked Settlement)",
    explanation:
      "The bank-owned market infrastructure that settles the majority of the world's FX trading volume on a PvP basis today, across 18+ currencies. It works by netting and settling both currency legs simultaneously through a central settlement system — eliminating Herstatt risk (the risk that one currency leg pays before the other settles). CLS is the incumbent PvP model; the FX PvP page in this case study is proposing an atomic, DLT-based alternative to the same underlying problem CLS already solves at scale — an interviewer may well ask directly how the two compare.",
    url: "https://www.cls-group.com",
    stage: "Being challenged",
    today: "Live and dominant — CLS settles the large majority of global FX volume today, and no bank is walking away from it in the near term.",
    direction: "Not being formally replaced, but increasingly challenged at the edges: DLT-based atomic PvP (what this case study's FX PvP product proposes) targets currency pairs and corridors CLS doesn't cover well, rather than displacing CLS outright.",
  },
  {
    term: "BIS Delivery-versus-Payment models (1, 2, 3)",
    explanation:
      "The Bank for International Settlements' classic 1992 framework for DvP: Model 1 settles both the securities and cash legs gross, trade by trade, simultaneously. Model 2 settles securities gross (trade by trade) but nets and settles cash at the end of the cycle. Model 3 nets and settles both legs at the end of the cycle. This case study's Bond DvP simulator is effectively a Model 1 implementation on a permissioned ledger — atomic, gross, trade-by-trade — worth being able to say explicitly.",
    url: "https://www.bis.org/cpmi/about/overview.htm",
    stage: "Reference framework",
    today: "Still the industry-standard taxonomy for describing DvP settlement, over 30 years after publication — this isn't legacy tech to retire, it's the shared vocabulary regulators and banks both use.",
    direction: "The three models themselves aren't being replaced — they're being re-implemented on new infrastructure. Tokenised-bond platforms (like this case study's Bond DvP) run the same Model 1 logic on a permissioned ledger instead of a traditional CSD.",
  },
  {
    term: "RTGS (Real-Time Gross Settlement)",
    explanation:
      "Central-bank-operated systems (e.g. CHATS in Hong Kong, CHAPS in the UK, Fedwire in the US) that settle high-value payments individually and irrevocably in real time, in central-bank money. RTGS is the ultimate settlement-finality benchmark tokenised platforms are usually compared against — and the reason 'settlement finality' is such a heavily scrutinised gate in this case study's risk framework.",
    url: "https://www.bis.org/cpmi/paysysinfo.htm",
    stage: "Live today",
    today: "Live, in daily production use, and still the gold-standard benchmark for settlement finality that every tokenised platform gets compared against.",
    direction: "Central banks are piloting DLT/tokenised extensions alongside RTGS (e.g. Project Agorá) rather than retiring it — RTGS in central-bank money stays the finality benchmark even as the rails around it experiment.",
  },
];

export const digitalMoneySpectrum: Term[] = [
  {
    term: "Tokenised deposit",
    explanation:
      "A digital representation of an existing commercial-bank deposit liability — still on the issuing bank's balance sheet, still covered by existing deposit and prudential frameworks. This is what this case study's product is built on.",
  },
  {
    term: "Stablecoin",
    explanation:
      "A separately issued, typically reserve-backed digital token pegged to a currency, issued by a non-bank or bank entity outside the deposit-taking balance sheet. Regulatory treatment (e.g. under the GENIUS Act in the US, enacted July 2025, or MiCA in the EU) is materially different from a deposit — a distinction worth being precise about, since interviewers in this space often test whether candidates conflate the two.",
  },
  {
    term: "Wholesale CBDC",
    explanation:
      "Central-bank digital currency restricted to use between regulated financial institutions for interbank settlement — the category Project Agorá and most central-bank tokenisation pilots explore. Not the same as a bank's own tokenised deposit, but the two are designed to interoperate on shared programmable platforms.",
  },
  {
    term: "Retail CBDC",
    explanation:
      "Central-bank digital currency issued directly to the public — a materially different policy question (disintermediation risk to commercial banks, financial-inclusion goals) from the wholesale, institutional focus of this case study.",
  },
];

export interface RegRegime {
  jurisdiction: string;
  regime: string;
  note: string;
  url?: string;
}

export interface MarketUpdate {
  region: string;
  date: string;
  title: string;
  summary: string;
  implication: string;
  sources: Array<{ label: string; url: string }>;
}

// Dated, primary-source-led signals used in the interview narrative. These are
// deliberately separate from the evergreen regulatory table below.
export const marketUpdates: MarketUpdate[] = [
  {
    region: "Hong Kong",
    date: "12 Sep 2026",
    title: "Fact check: BlackRock, HKDAP and EnsembleTX are three different things",
    summary:
      "No primary source supports a claim that BlackRock launched an HKD Digital Fund powered by HKDAP on EnsembleTX. BlackRock is an EnsembleTX industry pioneer; HKDAP is Anchorpoint Financial's HKD-backed stablecoin, in beta since 12 August 2026 and issued on supported blockchains. They should not be presented as one product launch.",
    implication:
      "The useful client story is the emerging settlement stack: tokenised assets, tokenised bank deposits and regulated stablecoins may connect over time, but product, issuer, legal claim and settlement rail must be distinguished precisely.",
    sources: [
      {
        label: "HKMA EnsembleTX participant list",
        url: "https://www.hkma.gov.hk/media/eng/doc/key-information/press-release/2025/20251113e3a1.pdf",
      },
      {
        label: "Anchorpoint HKDAP whitepaper",
        url: "https://anchorpoint.hk/hkdap-whitepaper/",
      },
    ],
  },
  {
    region: "Hong Kong",
    date: "May 2026",
    title: "EnsembleTX has moved from sandbox to controlled real-value pilot",
    summary:
      "HKMA launched EnsembleTX in November 2025 for controlled real-value transactions in tokenised HKD deposits and digital assets. The broader fixed-income roadmap records sandbox tests of tokenised money-market funds settling through tokenised deposits, as well as digital-bond settlement and corporate treasury use cases.",
    implication:
      "This is the closest local market context for a tokenised-treasury or fund-settlement product. It validates the direction, not a claim that open, retail or 24/7 production infrastructure is already available.",
    sources: [
      {
        label: "HKMA legislative briefing",
        url: "https://www.hkma.gov.hk/media/eng/doc/about-the-hkma/legislative-council-issues/20260504e1.pdf",
      },
      {
        label: "HKMA fixed-income roadmap",
        url: "https://www.hkma.gov.hk/media/eng/doc/key-information/press-release/2025/20250925e3a1.pdf",
      },
    ],
  },
  {
    region: "Canada",
    date: "10 Sep 2026",
    title: "OSFI clarified that tokenised deposits are not a new legal category",
    summary:
      "Canada's prudential supervisor said that the underlying technology does not determine a product's legal nature and that tokenised deposits are not legally distinct from traditional deposits. Federally regulated institutions must still meet applicable risk, technology and third-party requirements and engage their lead supervisor before novel launches.",
    implication:
      "This is regulatory clarity, not a blanket approval of every blockchain product. It supports the bank-product framing used in this case study: start with a regulated deposit liability, then prove controls, resilience and legal treatment.",
    sources: [
      {
        label: "OSFI statement",
        url: "https://www.osfi-bsif.gc.ca/en/news/statement-tokenized-other-digitally-represented-deposits",
      },
      {
        label: "Bank of Canada Project Samara",
        url: "https://www.bankofcanada.ca/2026/03/bank-canada-export-development-canada-rbc-td-successfully-complete-bond-issuance-experiment-distributed-ledger-technology/",
      },
    ],
  },
  {
    region: "Korea",
    date: "15 Jan 2026",
    title: "Korea enacted a legal framework for token securities",
    summary:
      "Korea's National Assembly passed amendments recognising distributed ledgers as securities account infrastructure and enabling token securities, with preparatory work ahead of commencement. The framework keeps token securities inside capital-markets rules rather than creating an unregulated parallel market.",
    implication:
      "Korea is a serious regional capital-markets signal. I found no official evidence for a government-run tokenised-stock experiment on Avalanche, so that specific claim should not be used in a Vincent demo without a named institution and primary announcement.",
    sources: [
      {
        label: "Korea FSC announcement (Korean)",
        url: "https://www.fsc.go.kr/no010101/86064?curPage=1&srchBeginDt=&srchCtgry=&srchEndDt=&srchKey=sj&srchText=",
      },
    ],
  },
  {
    region: "Cross-border",
    date: "Jul 2026",
    title: "BIS Project Agorá completed real-value testing",
    summary:
      "The BIS project tested tokenised commercial-bank deposits and tokenised central-bank reserves on a shared multi-currency platform. Twenty-eight institutions and central banks completed 17 real-value scenarios across six currencies; the project remains experimental rather than a production payment network.",
    implication:
      "This is strong evidence for the product thesis behind atomic PvP, intragroup liquidity and cross-border treasury, while also reinforcing why legal finality, AML, privacy and core-system integration remain roadmap gates.",
    sources: [
      {
        label: "BIS Project Agorá",
        url: "https://www.bis.org/project/agora",
      },
    ],
  },
  {
    region: "United States",
    date: "22 Jul 2026",
    title: "The CLARITY Act is advancing, but is not law",
    summary:
      "The Senate process released updated Digital Asset Market CLARITY Act text after a bipartisan Banking Committee vote. The bill aims to establish market-structure rules and allocate responsibilities across US digital-asset regulation; it still needs to complete Congress and be enacted.",
    implication:
      "Treat it as a policy signal, not a current operating permission. It matters most for US-facing digital-asset intermediaries and market structure, rather than changing Hong Kong tokenised-deposit rules today.",
    sources: [
      {
        label: "US Senate update",
        url: "https://www.lummis.senate.gov/press-releases/lummis-releases-updated-clarity-act-text/",
      },
      {
        label: "Official bill text",
        url: "https://www.govinfo.gov/app/details/BILLS-119hr3633rs",
      },
    ],
  },
  {
    region: "Europe / global asset management",
    date: "Aug 2026",
    title: "BlackRock expanded tokenised money-market products outside Hong Kong",
    summary:
      "BlackRock launched tokenised money-market products in the US in August, including on-chain shares of an existing Treasury liquidity fund on Ethereum and a new stablecoin-reserve vehicle. Separately, the European Commission is proposing to broaden its DLT Pilot Regime after modest take-up.",
    implication:
      "The global pattern is clear: regulated fund structures are being retained while ownership and servicing move on-chain. The commercial question is operational utility and distribution, not whether a token exists.",
    sources: [
      {
        label: "BlackRock cash-management release",
        url: "https://www.blackrock.com/cash/en-us/press-release-t3",
      },
      {
        label: "European Commission update",
        url: "https://finance.ec.europa.eu/news/dlt-and-tokenisation-paving-way-internet-value-2026-04-21_en",
      },
    ],
  },
];

export const regulatoryLandscape: RegRegime[] = [
  {
    jurisdiction: "Hong Kong",
    regime: "HKMA — Project Ensemble, Stablecoins Ordinance",
    note: "HKMA's Project Ensemble sandbox is the direct regulatory context for HSBC's Hong Kong Tokenised Deposit Service; Hong Kong separately licenses stablecoin issuers.",
    url: "https://www.hkma.gov.hk",
  },
  {
    jurisdiction: "Singapore",
    regime: "MAS — Project Guardian, Payment Services Act",
    note: "MAS has run some of the most active wholesale tokenisation pilots globally (Project Guardian) alongside a clear payment-token licensing regime.",
    url: "https://www.mas.gov.sg/schemes-and-initiatives/project-guardian",
  },
  {
    jurisdiction: "United Kingdom",
    regime: "BoE / FCA — Digital Gilt (DIGIT) pilot, Regulated Liability Network",
    note: "HM Treasury selected HSBC Orion for the UK's first sovereign digital-bond pilot; HSBC also participated in the UK RLN pilot alongside Barclays, Lloyds, NatWest, Nationwide and Santander.",
    url: "https://www.bankofengland.co.uk",
  },
  {
    jurisdiction: "European Union",
    regime: "MiCA (Markets in Crypto-Assets Regulation)",
    note: "The EU's comprehensive framework for crypto-asset issuance and service provision, including e-money and asset-referenced tokens — the framework any EU stablecoin or tokenisation activity has to clear.",
    url: "https://esma.europa.eu/esmas-activities/digital-finance-and-innovation/markets-crypto-assets-regulation-mica",
  },
  {
    jurisdiction: "United States",
    regime: "GENIUS Act (enacted July 2025)",
    note: "The first comprehensive US federal framework for payment stablecoins, currently in active rulemaking across OCC, FDIC and Treasury through 2026 — the single most important US regulatory development in this space.",
    url: "https://www.congress.gov/bill/119th-congress/senate-bill/394",
  },
  {
    jurisdiction: "UAE",
    regime: "VARA (Virtual Assets Regulatory Authority, Dubai)",
    note: "A dedicated virtual-asset regulator with its own licensing regime, distinct from onshore UAE financial regulation — relevant to any Middle East corridor.",
    url: "https://www.vara.ae",
  },
];

export interface GlossaryEntry {
  term: string;
  definition: string;
  example: string;
}

export const glossary: GlossaryEntry[] = [
  {
    term: "Blockchain",
    definition:
      "A shared, append-only digital ledger maintained across multiple computers rather than one central database, where new entries are cryptographically linked to and dependent on all prior entries — making the history very hard to alter after the fact without everyone noticing.",
    example:
      "Not every blockchain is public or permissionless. This case study's platform runs on a permissioned ledger — only approved bank entities can write to it, unlike a public network like Bitcoin or Ethereum that anyone can join.",
  },
  {
    term: "DLT (Distributed Ledger Technology)",
    definition:
      "The broader category blockchain belongs to — any system where multiple parties keep synchronised copies of the same record, without one party unilaterally controlling it. Blockchain is one specific way to build a DLT; there are others (e.g. directed acyclic graphs) that don't chain blocks at all.",
    example:
      "When the JD or this case study says 'DLT-based settlement flows,' it's being deliberately broader than 'blockchain' — a bank might use permissioned DLT that technically isn't structured as a chain of blocks at all.",
  },
  {
    term: "DvP (Delivery versus Payment)",
    definition:
      "A settlement mechanism where an asset only transfers if the corresponding payment settles at the same time — never one leg without the other. It exists specifically to remove the risk that a seller delivers an asset and then never gets paid, or a buyer pays and never receives the asset.",
    example:
      "On this case study's Bond DvP page: Meridian Asset Management's cash only leaves escrow the instant Horizon Capital Markets' bond units are confirmed available — if either check fails, neither leg moves, and both parties keep what they started with.",
  },
  {
    term: "PvP (Payment versus Payment)",
    definition:
      "The FX equivalent of DvP — both currency legs of a foreign-exchange trade settle simultaneously, so neither counterparty is ever exposed to having paid out one currency without receiving the other. Removes what's called Herstatt risk (named after a 1974 German bank failure mid-settlement).",
    example:
      "On this case study's FX PvP page: Party A's USD and Party B's HKD only release together — if HKD liquidity isn't available, the USD leg is never released either, even though it was technically ready.",
  },
  {
    term: "Atomic settlement",
    definition:
      "A technical guarantee that a set of linked actions either all complete together, or none of them do — there's no possible state where only some of them happened. DvP and PvP are both specific applications of atomicity to settlement.",
    example:
      "The 'Simulate exception' buttons on the Bond DvP and FX PvP pages exist specifically to demonstrate this: when one leg can't complete, the platform rolls back the other leg too, rather than leaving a half-finished trade.",
  },
  {
    term: "Tokenised deposit",
    definition:
      "A digital representation of money a client already holds as a normal bank deposit — moving the token moves a claim on that same underlying deposit. It isn't a new form of money; it's an existing bank liability made programmable and instantly transferable.",
    example:
      "On this case study's Tokenised Treasury page, transferring a tokenised USD deposit between two entities doesn't create new money — it debits one entity's underlying account and credits the other's, just faster and with richer data than a traditional wire.",
  },
  {
    term: "Smart contract",
    definition:
      "Code that runs automatically on a ledger when pre-agreed conditions are met, without needing a person to manually execute each step. Not a legal contract itself — a programmatic enforcement of terms that a legal contract separately governs.",
    example:
      "The atomic-settlement logic in this case study's DvP/PvP simulators is conceptually a smart contract: 'if funds check passes AND holdings check passes AND compliance passes, release both legs simultaneously; otherwise, release neither.'",
  },
  {
    term: "Escrow (in a settlement context)",
    definition:
      "Holding an asset or payment in a neutral, conditional state — committed but not yet released to either party — until the conditions for final settlement are confirmed.",
    example:
      "In the atomic-settlement diagram on the Architecture page, both legs sit in escrow through the pre-settlement checks, and are only released together once every check clears.",
  },
  {
    term: "Reconciliation break",
    definition:
      "A detected mismatch between two systems that are supposed to agree — e.g. a tokenised ledger showing one balance while the core banking system shows another. Not itself a failure of the platform; it's the control that catches when something has gone wrong upstream.",
    example:
      "This case study's risk framework treats a reconciliation break as a first-class operational event with its own SLA and exception case — not something quietly corrected later.",
  },
  {
    term: "Legal finality",
    definition:
      "The point, under a specific jurisdiction's law, at which a transfer becomes irrevocable and enforceable against third parties — including in an insolvency. A separate question from whether a system is technically 'final' (i.e. atomic).",
    example:
      "This case study's risk framework deliberately keeps this control at 'Monitoring' status rather than 'Effective' — technical atomicity is real today, but a legal opinion confirming finality has to be obtained corridor by corridor before production use.",
  },
  {
    term: "Maker-checker",
    definition:
      "A control requiring two different people (or systems) for any sensitive action — one to initiate ('maker'), a different one to approve ('checker') — so no single actor can both propose and authorise the same action.",
    example:
      "In this case study's Transfer wizard, the compliance-check step and the confirmation step are deliberately separated so a single user can't both initiate and self-approve a transfer.",
  },
  {
    term: "New Product Approval (NPA)",
    definition:
      "A bank's internal governance process for reviewing and signing off a genuinely new product before launch — covering risk, legal, compliance, operations and technology, not just the commercial case.",
    example:
      "This case study's Risk & Controls page 'Governance' category (new-product approval, risk acceptance, control testing) is a simplified version of the real NPA process a bank would run before any of these products actually launched.",
  },
  {
    term: "Orchestration (in a settlement platform)",
    definition:
      "The layer that sequences and coordinates calls to multiple underlying services in the correct order, so a client or downstream system can't skip a required step by calling a service directly.",
    example:
      "The Architecture page's 'Settlement Orchestration API' is exactly this — it forces every transfer through entitlement, screening and funds checks in order, rather than letting a caller jump straight to the ledger.",
  },
  {
    term: "RTGS (Real-Time Gross Settlement)",
    definition:
      "Central-bank systems that settle high-value payments individually, in real time and in central-bank money — the benchmark 'gold standard' for settlement finality that most other systems are compared against.",
    example:
      "Hong Kong's is CHATS (Clearing House Automated Transfer System), run by Hong Kong Interbank Clearing Limited in HKD, USD, EUR and RMB — HSBC is the settlement institution for USD CHATS, and EnsembleTX settles tokenised deposits between banks through HKD RTGS initially. Others include CHAPS in the UK and Fedwire in the US. RTGS is why 'settlement finality' is treated as such a heavily scrutinised gate throughout this case study.",
  },
];
