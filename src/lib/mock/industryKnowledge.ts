export interface Term {
  term: string;
  explanation: string;
}

export const settlementStandards: Term[] = [
  {
    term: "SWIFT MT → ISO 20022 (MX) migration",
    explanation:
      "SWIFT's global migration from legacy MT message formats to the richer, structured ISO 20022 (MX) standard for cross-border payments and reporting. MX carries far more structured data (purpose codes, richer remittance information) than MT ever could — directly relevant to why a tokenised settlement platform's purpose-code tagging and structured audit trail is a genuine improvement, not just a technology preference.",
  },
  {
    term: "SWIFT gpi",
    explanation:
      "SWIFT's Global Payments Innovation initiative — end-to-end payment tracking, same-day use of funds, and transparent fees for correspondent banking payments. The closest legacy-rail equivalent to the real-time visibility this case study's tokenised treasury proposition offers; worth being able to contrast the two directly.",
  },
  {
    term: "CLS (Continuous Linked Settlement)",
    explanation:
      "The bank-owned market infrastructure that settles the majority of the world's FX trading volume on a PvP basis today, across 18+ currencies. It works by netting and settling both currency legs simultaneously through a central settlement system — eliminating Herstatt risk (the risk that one currency leg pays before the other settles). CLS is the incumbent PvP model; the FX PvP page in this case study is proposing an atomic, DLT-based alternative to the same underlying problem CLS already solves at scale — an interviewer may well ask directly how the two compare.",
  },
  {
    term: "BIS Delivery-versus-Payment models (1, 2, 3)",
    explanation:
      "The Bank for International Settlements' classic 1992 framework for DvP: Model 1 settles both the securities and cash legs gross, trade by trade, simultaneously. Model 2 settles securities gross (trade by trade) but nets and settles cash at the end of the cycle. Model 3 nets and settles both legs at the end of the cycle. This case study's Bond DvP simulator is effectively a Model 1 implementation on a permissioned ledger — atomic, gross, trade-by-trade — worth being able to say explicitly.",
  },
  {
    term: "RTGS (Real-Time Gross Settlement)",
    explanation:
      "Central-bank-operated systems (e.g. CHAPS in the UK, Fedwire in the US) that settle high-value payments individually and irrevocably in real time, in central-bank money. RTGS is the ultimate settlement-finality benchmark tokenised platforms are usually compared against — and the reason 'settlement finality' is such a heavily scrutinised gate in this case study's risk framework.",
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
}

export const regulatoryLandscape: RegRegime[] = [
  {
    jurisdiction: "Hong Kong",
    regime: "HKMA — Project Ensemble, Stablecoins Ordinance",
    note: "HKMA's Project Ensemble sandbox is the direct regulatory context for HSBC's Hong Kong Tokenised Deposit Service; Hong Kong separately licenses stablecoin issuers.",
  },
  {
    jurisdiction: "Singapore",
    regime: "MAS — Project Guardian, Payment Services Act",
    note: "MAS has run some of the most active wholesale tokenisation pilots globally (Project Guardian) alongside a clear payment-token licensing regime.",
  },
  {
    jurisdiction: "United Kingdom",
    regime: "BoE / FCA — Digital Gilt (DIGIT) pilot, Regulated Liability Network",
    note: "HM Treasury selected HSBC Orion for the UK's first sovereign digital-bond pilot; HSBC also participated in the UK RLN pilot alongside Barclays, Lloyds, NatWest, Nationwide and Santander.",
  },
  {
    jurisdiction: "European Union",
    regime: "MiCA (Markets in Crypto-Assets Regulation)",
    note: "The EU's comprehensive framework for crypto-asset issuance and service provision, including e-money and asset-referenced tokens — the framework any EU stablecoin or tokenisation activity has to clear.",
  },
  {
    jurisdiction: "United States",
    regime: "GENIUS Act (enacted July 2025)",
    note: "The first comprehensive US federal framework for payment stablecoins, currently in active rulemaking across OCC, FDIC and Treasury through 2026 — the single most important US regulatory development in this space.",
  },
  {
    jurisdiction: "UAE",
    regime: "VARA (Virtual Assets Regulatory Authority, Dubai)",
    note: "A dedicated virtual-asset regulator with its own licensing regime, distinct from onshore UAE financial regulation — relevant to any Middle East corridor.",
  },
];
