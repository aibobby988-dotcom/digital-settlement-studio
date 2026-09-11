export interface Term {
  term: string;
  explanation: string;
  url?: string;
}

export const settlementStandards: Term[] = [
  {
    term: "SWIFT MT → ISO 20022 (MX) migration",
    explanation:
      "SWIFT's global migration from legacy MT message formats to the richer, structured ISO 20022 (MX) standard for cross-border payments and reporting. MX carries far more structured data (purpose codes, richer remittance information) than MT ever could — directly relevant to why a tokenised settlement platform's purpose-code tagging and structured audit trail is a genuine improvement, not just a technology preference.",
    url: "https://www.swift.com/standards/iso-20022",
  },
  {
    term: "SWIFT gpi",
    explanation:
      "SWIFT's Global Payments Innovation initiative — end-to-end payment tracking, same-day use of funds, and transparent fees for correspondent banking payments. The closest legacy-rail equivalent to the real-time visibility this case study's tokenised treasury proposition offers; worth being able to contrast the two directly.",
    url: "https://www.swift.com/our-solutions/swift-gpi",
  },
  {
    term: "CLS (Continuous Linked Settlement)",
    explanation:
      "The bank-owned market infrastructure that settles the majority of the world's FX trading volume on a PvP basis today, across 18+ currencies. It works by netting and settling both currency legs simultaneously through a central settlement system — eliminating Herstatt risk (the risk that one currency leg pays before the other settles). CLS is the incumbent PvP model; the FX PvP page in this case study is proposing an atomic, DLT-based alternative to the same underlying problem CLS already solves at scale — an interviewer may well ask directly how the two compare.",
    url: "https://www.cls-group.com",
  },
  {
    term: "BIS Delivery-versus-Payment models (1, 2, 3)",
    explanation:
      "The Bank for International Settlements' classic 1992 framework for DvP: Model 1 settles both the securities and cash legs gross, trade by trade, simultaneously. Model 2 settles securities gross (trade by trade) but nets and settles cash at the end of the cycle. Model 3 nets and settles both legs at the end of the cycle. This case study's Bond DvP simulator is effectively a Model 1 implementation on a permissioned ledger — atomic, gross, trade-by-trade — worth being able to say explicitly.",
    url: "https://www.bis.org/cpmi/about/overview.htm",
  },
  {
    term: "RTGS (Real-Time Gross Settlement)",
    explanation:
      "Central-bank-operated systems (e.g. CHAPS in the UK, Fedwire in the US) that settle high-value payments individually and irrevocably in real time, in central-bank money. RTGS is the ultimate settlement-finality benchmark tokenised platforms are usually compared against — and the reason 'settlement finality' is such a heavily scrutinised gate in this case study's risk framework.",
    url: "https://www.bis.org/cpmi/paysysinfo.htm",
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
      "See the Industry & Regulatory Knowledge section above — RTGS (e.g. CHAPS, Fedwire) is why 'settlement finality' is treated as such a heavily scrutinised gate throughout this case study.",
  },
];
