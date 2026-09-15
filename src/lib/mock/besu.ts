/**
 * Hyperledger Besu, briefed for a product manager rather than an engineer.
 *
 * Source status matters here and is stated per fact: HSBC's own releases do not
 * name the ledger technology behind its Tokenised Deposit Service. Trade press
 * has reported it as Besu, and Swift's ledger is reported as Besu-based.
 */

export const besuInOneParagraph =
  "Hyperledger Besu is open-source software that runs an Ethereum-style blockchain. The same software can join the public Ethereum network or run a private network where only approved institutions are allowed in — which is how banks use it. It is written in Java, licensed under Apache 2.0, and maintained as a project of the Linux Foundation's LF Decentralized Trust, with Consensys as a major contributor. Because it follows Ethereum's standards, smart contracts, token formats, developer tools and auditors from the wider Ethereum world all work with it unchanged.";

export interface BesuFact {
  fact: string;
  status: "Primary source" | "Reported" | "Documentation";
  source?: { label: string; url: string };
}

export const originFacts: BesuFact[] = [
  {
    fact: "Launched in November 2018 as Pantheon, built by PegaSys, Consensys's protocol engineering team.",
    status: "Primary source",
    source: {
      label: "PegaSys: Pantheon is now Hyperledger Besu",
      url: "https://medium.com/@pegasyseng/update-pantheon-is-now-officially-hyperledger-besu-690bf80ac6b8",
    },
  },
  {
    fact: "Renamed Hyperledger Besu in August 2019, becoming the first project in the Hyperledger family able to run on a public blockchain. 'Besu' is Japanese for base or foundation.",
    status: "Primary source",
    source: {
      label: "Hyperledger announcement, 29 August 2019",
      url: "https://www.lfdecentralizedtrust.org/blog/2019/08/29/announcing-hyperledger-besu",
    },
  },
  {
    fact: "Now an LF Decentralized Trust project. Its documentation has moved to besu-eth.org.",
    status: "Documentation",
    source: { label: "Besu documentation", url: "https://docs.besu-eth.org/private-networks/concepts/poa" },
  },
  {
    fact: "GoQuorum — the Ethereum fork that JPMorgan originally built as Quorum and later sold to Consensys — is no longer maintained, and Consensys steered existing networks towards Besu. That consolidation is part of why bank-grade Ethereum work has converged on Besu.",
    status: "Documentation",
    source: { label: "Kaleido: migrating from Quorum to Besu", url: "https://www.kaleido.io/blockchain-blog/migrating-from-quorum-to-hyperledger-besu" },
  },
];

export const hsbcRelevance: BesuFact[] = [
  {
    fact: "HSBC's Tokenised Deposit Service private network has been reported as built on Hyperledger Besu. HSBC's own press releases do not name the ledger technology.",
    status: "Reported",
    source: {
      label: "Trade press, 23 September 2025 (citing Coincu)",
      url: "https://bitcoinethereumnews.com/tech/hsbc-launches-tokenized-deposit-service-with-ant-international/",
    },
  },
  {
    fact: "Swift's shared ledger uses an EVM-compatible architecture based on Hyperledger Besu. Swift operates the shared workflow while each bank runs its own environment; the money remains a liability of the issuing bank, and banks keep authority over keys, funding and settlement. Final settlement still completes through existing systems.",
    status: "Reported",
    source: {
      label: "FinanceFeeds, 20 August 2026",
      url: "https://financefeeds.com/hsbc-and-standard-chartered-put-swifts-tokenised-deposit-ledger-live-but-settlement-stays-on-existing-rails/",
    },
  },
  {
    fact: "HSBC and Standard Chartered executed the first live interbank transaction on that Besu-based Swift ledger on 20 August 2026.",
    status: "Primary source",
    source: {
      label: "HSBC Hong Kong newsroom",
      url: "https://www.about.hsbc.com.hk/news-and-media/hsbc-and-standard-chartered-execute-first-live-tokenised-deposit-transaction-on-swifts-blockchain",
    },
  },
  {
    fact: "Citi Token Services — a direct competitor offering tokenised deposits in Hong Kong and Singapore — is reported to run on Besu, and DTCC uses it for collateral work.",
    status: "Reported",
    source: {
      label: "American Banker podcast: why big banks bet on Besu",
      url: "https://www.americanbanker.com/podcast/why-big-banks-bet-on-hyperledger-besu",
    },
  },
];

export const strategicInsight = {
  headline: "The one strategic point worth making",
  body:
    "If the Tokenised Deposit Service network and Swift's shared ledger are both built on Besu, they speak the same technical language: the same account model, the same smart-contract engine, the same token formats. That turns interoperability from a translation problem into a governance, legal and operating-model problem — which is exactly the kind of problem a product manager exists to solve. It also means the regulated-stablecoin world, which uses the same Ethereum token standards, is technically adjacent rather than foreign.",
  caveat:
    "Sharing a technology does not mean sharing a network, and it certainly does not make a tokenised deposit a stablecoin. The legal claim, the balance sheet and the licensing are entirely different.",
};

export interface Concept {
  concept: string;
  plain: string;
  howItWorks: string;
  productAngle: string;
  showOffLine: string;
}

export const concepts: Concept[] = [
  {
    concept: "Consensus and finality — QBFT",
    plain:
      "How a group of approved computers agrees that a transaction has happened, and when it becomes irreversible.",
    howItWorks:
      "Private Besu networks use proof-of-authority consensus: a known set of validator nodes, run by approved institutions, take turns proposing and signing blocks. Besu supports QBFT and IBFT 2.0 and recommends at least four validators in production; a network of four to five validators keeps working if one stops responding. Once a block is agreed it is final immediately — there is no fork and no waiting. Besu no longer supports the older Clique protocol.",
    productAngle:
      "Two product decisions hide in here. First, how many validators and who runs them is a resilience and governance choice, not a technical default. Second, immediate technical finality is a genuine advantage over public chains, where finality takes minutes — but it is still not legal finality, which is decided by law corridor by corridor.",
    showOffLine:
      "QBFT gives us deterministic finality in seconds rather than probabilistic finality in minutes, which is what a payment rail needs — but I would still treat legal finality as a separate gate per corridor.",
  },
  {
    concept: "Permissioning",
    plain: "Who is allowed to join the network, and who is allowed to transact on it.",
    howItWorks:
      "Besu can restrict which nodes may connect to the network and which accounts may send transactions. Only approved, identified institutions and wallets can participate — unlike public Ethereum, where anyone can.",
    productAngle:
      "Onboarding a new bank, market or client entity becomes a governance and approval process rather than a code change. That maps directly to the 'approved entities only' control in the cash-pooling demo.",
    showOffLine:
      "On a permissioned Besu network, adding a corridor or a counterparty is a governance decision with an approval trail, not an engineering release — which is how it should be for a regulated rail.",
  },
  {
    concept: "Privacy — the point most candidates miss",
    plain: "Who can see which transactions, and how much of the data.",
    howItWorks:
      "Besu used to offer built-in private transactions through a companion component called Tessera, which encrypted a transaction and shared it only with the parties involved. That feature is deprecated from Besu version 24.12.0. On a shared network, validators can therefore see the transaction data they process unless privacy is designed in some other way.",
    productAngle:
      "Privacy has to come from architecture rather than a switch. Swift's ledger shows the pattern: each bank runs its own environment, only coordination data is shared, and the underlying money and settlement stay with the issuing bank. For a product manager, that makes data minimisation — what goes on the ledger and what stays in core banking — a requirement to specify, not an engineering afterthought. It is also the honest contrast with Canton, whose selling point is sub-transaction privacy built into the protocol.",
    showOffLine:
      "Besu deprecated its built-in private transactions in 24.12, so on a shared network privacy is an architecture decision — each bank keeps its own environment and shares only what the counterparty genuinely needs. I would treat that data boundary as a product requirement.",
  },
  {
    concept: "EVM and token standards",
    plain: "The shared engine and file formats that let the same token and contract code run on any compatible network.",
    howItWorks:
      "Besu runs the Ethereum Virtual Machine, so it supports the same token standards as public Ethereum: ERC-20 for fungible balances such as deposits and stablecoins, and permissioned standards such as ERC-3643, which allows a token to move only between wallets that meet identity and eligibility rules.",
    productAngle:
      "Compliance rules can be enforced inside the token itself, not just in a screening step around it — a token that simply cannot move to an unapproved wallet. It also means the enormous Ethereum pool of developers, audit firms and tooling is usable, which lowers delivery risk.",
    showOffLine:
      "Because it is EVM-based, eligibility rules like 'approved group entities only' can live in the token logic itself, using a permissioned standard such as ERC-3643, rather than relying solely on a check before the transfer.",
  },
  {
    concept: "No cryptocurrency required",
    plain: "Whether anyone needs to hold crypto to use the network.",
    howItWorks:
      "Public Ethereum charges fees in its own cryptocurrency. A private Besu network can be configured with a zero gas price, so participants transact without holding or paying any cryptocurrency at all.",
    productAngle:
      "This removes one of the first objections a risk or compliance colleague raises. Clients hold tokenised deposits, and nothing else — no crypto exposure on the balance sheet, no volatile fee token to manage.",
    showOffLine:
      "On a private Besu network gas can be set to zero, so clients and the bank never touch a cryptocurrency — it is the blockchain's engine without crypto's asset exposure.",
  },
  {
    concept: "Keys and signing",
    plain: "Who holds the secret keys that authorise movements of money, and where.",
    howItWorks:
      "Besu nodes do not have to hold signing keys themselves. Signing can be separated into a dedicated service connected to hardware security modules or cloud key vaults, so keys never sit on the node that processes transactions.",
    productAngle:
      "This is where maker-checker, custody and access controls actually live. Swift's model is explicit that banks retain authority over their own keys — the network coordinates, the bank authorises.",
    showOffLine:
      "The node processes transactions but the keys live in the bank's own hardware security modules, so authorisation and maker-checker stay under the bank's control rather than the network's.",
  },
  {
    concept: "Operating it — open source is not free",
    plain: "What it costs and who is responsible for running it.",
    howItWorks:
      "Apache 2.0 means no licence fee and no vendor lock-in on the software. But upgrades must be coordinated across every validator, monitoring and incident response are the operator's job, and banks typically buy enterprise support from firms such as Consensys or Kaleido.",
    productAngle:
      "The trade-off to articulate: open source removes licence cost and lock-in, but shifts upgrade coordination and operational risk onto the network's participants. That belongs in the run-cost line of the business case and in the resilience gate of the roadmap.",
    showOffLine:
      "Open source removes the licence and the lock-in, but not the operating burden — coordinating upgrades across validators in several markets is a real run cost I would want in the business case.",
  },
];

export interface Comparison {
  platform: string;
  model: string;
  strength: string;
  tradeOff: string;
}

export const platformComparison: Comparison[] = [
  {
    platform: "Hyperledger Besu",
    model: "Ethereum-compatible; public or private permissioned networks",
    strength: "Largest developer and tooling ecosystem; shares token standards with public-chain stablecoins; reported basis of Swift's ledger, HSBC's TDS network and Citi Token Services",
    tradeOff: "Built-in private transactions deprecated — privacy must come from architecture and data minimisation",
  },
  {
    platform: "Canton Network",
    model: "Daml smart contracts; privacy built into the protocol",
    strength: "Sub-transaction privacy — each party sees only its own slice of a transaction; strong capital-markets adoption",
    tradeOff: "Not EVM-based, so Ethereum tooling and token standards do not carry over directly; a neutral ordering service sits in the transaction path",
  },
  {
    platform: "R3 Corda",
    model: "Permissioned, point-to-point; only transaction parties see a transaction",
    strength: "Closed, bank-controlled membership and a long regulated-finance track record",
    tradeOff: "Not EVM-based; a more isolated network model with weaker network effects",
  },
  {
    platform: "Hyperledger Fabric",
    model: "Permissioned, modular, channels for data separation",
    strength: "Mature enterprise permissioning and data separation through channels",
    tradeOff: "Not EVM-based and not token-native in the way Ethereum-standard networks are",
  },
];

export const interviewUse = {
  headline: "How to use what you know without creating a problem",
  points: [
    "Attribute it to public reporting, never to a contact. Say \"it has been reported that the TDS network is Besu-based\" — that is true and citable. Revealing that someone inside confirmed it can raise a question about how you came by non-public information, which is the opposite of the impression you want.",
    "Or ask rather than assert: \"I understand the TDS network is built on Besu — is that right, and is it the same stack you connect to Swift's ledger with?\" A question lets him confirm it, shows you did the research, and invites a technical conversation on your terms.",
    "Lead with the product consequence, not the software name. Interviewers remember \"interoperability becomes a governance problem rather than a translation problem\" far longer than they remember \"it runs on Besu\".",
    "Stay at product altitude. You are not being hired to configure validators. One precise point on privacy, finality or token-level compliance lands better than a tour of the technology.",
  ],
};

export const likelyProbes = [
  {
    q: "Why would a bank choose Besu over Canton or Corda?",
    a: "Ecosystem and interoperability. Besu shares Ethereum's standards, so it connects naturally to Swift's Besu-based ledger and to the regulated-stablecoin world, and it draws on the largest pool of developers and auditors. The price is privacy: Canton builds sub-transaction privacy into the protocol, while on Besu you design it through architecture. For a cash-leg product whose value is reach, that trade favours Besu.",
  },
  {
    q: "How do you keep client transaction data private on a shared Besu network?",
    a: "By architecture rather than a feature, since Besu's built-in private transactions are deprecated. Each bank runs its own environment, the shared layer carries only the coordination data the counterparty genuinely needs, and client detail stays in core banking. I would specify that data boundary as a product requirement and have it reviewed by data protection before build.",
  },
  {
    q: "Does running on blockchain mean clients take crypto risk?",
    a: "No. The private network can run with zero gas, so nobody holds or pays a cryptocurrency, and the token is a deposit liability on HSBC's balance sheet. The ledger is the engine; there is no crypto asset in the product.",
  },
  {
    q: "What is the biggest operational risk of a Besu-based rail?",
    a: "Coordinated change across a multi-market validator set — upgrades, key rotation and incident response have to happen consistently across every node. Open source removes licence cost but not that burden, so it belongs in the run cost and in the resilience gate before scaling.",
  },
];
