/**
 * Current market signals, researched 13 September 2026.
 *
 * Each entry states what happened, what it means for this specific role, and
 * what NOT to overclaim. Ordered by how directly it bears on the interview.
 */

export interface Signal {
  id: string;
  date: string;
  region: string;
  headline: string;
  what: string;
  whyItMatters: string;
  dontOverstate: string;
  weight: "Know cold" | "Know it" | "Useful colour";
  sources: Array<{ label: string; url: string }>;
}

export const marketSignals: Signal[] = [
  {
    id: "ensembletx-mmf",
    date: "Launched 13 Nov 2025, running through 2026",
    region: "Hong Kong",
    headline: "EnsembleTX's first focus is tokenised money-market funds — which is Track 2, live",
    what:
      "The Hong Kong Monetary Authority's pilot phase went live with seven banks offering tokenised deposits: HSBC, Standard Chartered, Bank of China (Hong Kong), China Construction Bank (Asia), Fubon, Fusion Bank and Bank of East Asia. BlackRock and Franklin Templeton are participating as asset managers. The stated initial focus is using tokenised deposits to settle tokenised money-market fund transactions and to manage liquidity in real time. Interbank settlement runs initially through the Hong Kong dollar real-time gross settlement system, with the environment to be upgraded toward tokenised central-bank money on a 24/7 basis.",
    whyItMatters:
      "This is the single most important item on the page for your pitch. Track 2 proposes that tokenised deposits become the cash leg for assets HSBC does not issue — and the regulator's own pilot has made exactly that its first use case, with two of the world's largest asset managers on the other side. You are not proposing a direction; you are proposing to commercialise the direction the market has already chosen. Name BlackRock and Franklin Templeton specifically: they are the third-party issuers Track 2 exists to serve.",
    dontOverstate:
      "It is a controlled pilot, not open production infrastructure, and tokenised central-bank money settlement is a stated future enhancement rather than something running now.",
    weight: "Know cold",
    sources: [
      {
        label: "HKMA press release, 13 November 2025",
        url: "https://www.hkma.gov.hk/eng/news-and-media/press-releases/2025/11/20251113-3/",
      },
    ],
  },
  {
    id: "hsbc-sc-swift-live",
    date: "20 August 2026",
    region: "Global · HSBC",
    headline: "HSBC and Standard Chartered executed the first live interbank transaction on Swift's ledger",
    what:
      "On 20 August 2026 HSBC and Standard Chartered completed bank-to-bank tokenised deposit interoperability by executing what both banks describe as the first live cross-border transaction, and the first interbank transaction, on Swift's blockchain-based ledger. HSBC's spokesperson was Lewis Sun, Global Head of Digital Currencies, Corporate & Institutional Banking. It came roughly two weeks before Citi and DBS's weekend transaction on the same ledger.",
    whyItMatters:
      "This corrects an easy mistake: HSBC is not behind competitors on live tokenised-deposit interoperability — on Swift's ledger it went first. Combined with the Ant International cross-bank transfer on EnsembleTX in November 2025, HSBC has now moved tokenised deposits to another bank on both of the two main interoperability paths. For Track 2 that matters directly: the route to reaching counterparties outside HSBC is proven in live transactions, not just in design.",
    dontOverstate:
      "A first transaction proves interoperability works; it is not a client service at scale. The announcement did not specify the currency or corridor, so do not invent one.",
    weight: "Know cold",
    sources: [
      {
        label: "HSBC Hong Kong newsroom, 20 August 2026",
        url: "https://www.about.hsbc.com.hk/news-and-media/hsbc-and-standard-chartered-execute-first-live-tokenised-deposit-transaction-on-swifts-blockchain",
      },
    ],
  },
  {
    id: "swift-ledger",
    date: "July 2026",
    region: "Global",
    headline: "Swift's blockchain ledger went live with 17 banks — HSBC among them",
    what:
      "Swift released a blockchain-based shared ledger for 24/7 cross-border payments in tokenised deposits, built in nine months. The 17 pilot banks span six continents and include HSBC, Citi, DBS, Standard Chartered, BNY, UBS, Wells Fargo, MUFG, ANZ, OCBC, UOB, BNP Paribas, Lloyds, Itaú Unibanco, First Abu Dhabi Bank, FirstRand and Mashreq. Architecturally, each bank issues tokenised deposits on its own ledger while Swift provides an orchestration layer that records and validates commitments before final settlement through existing systems. The ledger is reported, from Swift's MVP announcement, to use an EVM-compatible architecture based on Hyperledger Besu, with the prototype delivered by Consensys.",
    whyItMatters:
      "Three things. First, the architecture is a direct external validation of the approach on this site's Architecture page — the value sits in the orchestration and validation layer, not in the ledger itself. Second, Swift has said the next applications are programmable money and agentic commerce, which is the same forward path as the mandate layer in this case study. If asked whether agentic payments are real or speculative, this is your evidence. Third, it runs on Hyperledger Besu, which executes the same Ethereum-standard smart contracts and token formats that major stablecoins such as USDC use on public Ethereum. A shared technical language is why tokenised deposits and stablecoins can plausibly interoperate later — though sharing a standard does not make them the same instrument.",
    dontOverstate:
      "Live transactions have now run on it, starting with HSBC and Standard Chartered in August 2026, but it is an early-adopter service rather than a scaled one, and final settlement still completes through existing systems. Do not describe it as replacing correspondent banking.",
    weight: "Know cold",
    sources: [
      {
        label: "Swift press release, 9 July 2026",
        url: "https://www.swift.com/news-events/press-releases/swifts-blockchain-ledger-ready-use-17-banks-set-pioneer-tokenised-cross-border-payments-trusted-global-infrastructure",
      },
    ],
  },
  {
    id: "dbs-citi-weekend",
    date: "5 September 2026",
    region: "Singapore / United States",
    headline: "Citi and DBS settled the first weekend cross-border tokenised deposit on 5 September 2026",
    what:
      "On Saturday 5 September 2026, Citi and DBS settled the first cross-border tokenised deposit transaction over a weekend using Swift's blockchain ledger — a US dollar payment between Singapore and the United States, executed from both banks' New York offices. It completed in minutes against a conventional benchmark of roughly two business days.",
    whyItMatters:
      "It proves the 24/7 claim in production rather than in a deck: a weekend is no longer a structural barrier on this ledger. Use it to make the cut-off argument concrete. Get the sequence right, though — HSBC and Standard Chartered ran the first live interbank transaction on the same ledger on 20 August; Citi and DBS's distinction is doing it on a weekend. Competitors are moving just as fast, which is the urgency argument, but HSBC is not behind.",
    dontOverstate:
      "One transaction between two banks is a milestone, not a scaled service. Do not imply either bank offers this broadly to corporate clients today.",
    weight: "Know cold",
    sources: [
      {
        label: "Payment Expert, 8 September 2026",
        url: "https://paymentexpert.com/2026/09/08/dbs-citi-tokenised-deposit-swift/",
      },
    ],
  },
  {
    id: "hsbc-stablecoin-launch",
    date: "Licence 10 April 2026 · launch second half of 2026",
    region: "Hong Kong",
    headline: "HSBC's own stablecoin lands in PayMe within months",
    what:
      "HSBC received one of Hong Kong's first two stablecoin issuer licences under the Stablecoins Ordinance on 10 April 2026. Of 36 formal applications by the September 2025 deadline, roughly 5.6 per cent were approved. HSBC plans a Hong Kong dollar stablecoin in the second half of 2026, integrated into PayMe — which has over 3.3 million users — and the HSBC Hong Kong mobile app. It will be fully backed by high-quality liquid assets in segregated accounts. The initial phase covers peer-to-peer and peer-to-merchant payments, and customers will also be able to subscribe to tokenised investments through the app.",
    whyItMatters:
      "It is in your interviewer's remit and it launches within months of your start date. The strategic read worth offering: HSBC chose retail-embedded distribution through an app people already use, while Standard Chartered's venture went institutional-first. Note also that subscribing to tokenised investments via the app connects the stablecoin to the tokenised-asset agenda — the same convergence Track 2 describes, approached from the retail side.",
    dontOverstate:
      "A licence and a stated plan are not a live product. It had not launched as of mid-September 2026.",
    weight: "Know cold",
    sources: [
      {
        label: "HSBC Hong Kong newsroom",
        url: "https://www.about.hsbc.com.hk/news-and-media/hsbc-welcomes-hkmas-grant-of-a-hong-kong-stablecoin-issuer-licence",
      },
    ],
  },
  {
    id: "clearing-house-network",
    date: "June 2026, target 2027",
    region: "United States",
    headline: "Seventeen US institutions are building a shared deposit-token network",
    what:
      "Seventeen major financial institutions including JPMorgan, Bank of America, Citi and Wells Fargo announced that The Clearing House will clear and settle tokenised deposits on-chain, with a reported target of 2027. Separately, JPMorgan's Kinexys platform reports more than US$3tn in cumulative transaction volume and offers JPMD, a deposit token for institutional clients. DBS and Kinexys agreed a framework in November 2025 for interbank tokenised-deposit transfers across public and permissioned blockchains.",
    whyItMatters:
      "It signals where the industry expects to land: shared market infrastructure rather than a permanent patchwork of single-bank rails. That is directly relevant to one of the kill criteria in this case study's commercial model — if a shared utility delivers the same client outcome more cheaply, a single-bank build becomes the wrong structure. Being the candidate who raises that risk unprompted is a strong signal.",
    dontOverstate:
      "Announced intent with a 2027 target. Not operating.",
    weight: "Know it",
    sources: [
      {
        label: "American Banker — banks embracing tokenized deposits",
        url: "https://www.americanbanker.com/payments/news/the-banks-that-are-embracing-tokenized-deposits",
      },
    ],
  },
  {
    id: "citi-euro",
    date: "2026",
    region: "Europe",
    headline: "Citi Token Services added euro and is now in HSBC's home markets",
    what:
      "Citi expanded Citi Token Services to euro transactions via a new liquidity centre in Ireland, adding real-time cross-border euro payments for institutional clients in Europe. The service is already available in the United States, United Kingdom, Singapore and Hong Kong.",
    whyItMatters:
      "Citi is competing in Hong Kong and Singapore — HSBC's core markets — with a comparable proposition. Worth knowing if asked who else does this: the honest answer is that the capability is no longer differentiating on its own, which is precisely why the argument has to be about utility and distribution rather than about having a tokenised rail at all.",
    dontOverstate:
      "Comparable offering, not evidence that Citi is ahead. Avoid ranking competitors you cannot measure.",
    weight: "Know it",
    sources: [
      {
        label: "Citi Token Services",
        url: "https://services.citi.com/solutions/citi-token-services",
      },
    ],
  },
  {
    id: "clarity-timing",
    date: "Procedural vote scheduled 15 September 2026",
    region: "United States",
    headline: "The CLARITY Act reaches a Senate test the day before your interview",
    what:
      "The Digital Asset Market Clarity Act passed the House in July 2025 and has not passed the Senate. The Senate majority leader filed cloture for 15 September 2026, setting up a procedural vote requiring 60 votes. Negotiations through 2026 have centred on decentralised finance, stablecoins, ethics provisions and enforcement powers.",
    whyItMatters:
      "Check the news on the morning of the interview. If the vote has happened, referencing the outcome accurately is a cheap and memorable signal that you track this space daily rather than having revised for an interview.",
    dontOverstate:
      "It is a procedural vote, not final passage, and it does not change Hong Kong tokenised-deposit rules at all. The bill is also largely irrelevant to bank-issued tokenised deposits, which sit under banking law.",
    weight: "Useful colour",
    sources: [
      {
        label: "H.R.3633 text, Congress.gov",
        url: "https://www.congress.gov/bill/119th-congress/house-bill/3633/text",
      },
    ],
  },
];

export const signalsSummary = {
  headline: "The three that change your pitch",
  points: [
    "EnsembleTX's first use case is tokenised money-market funds settled with tokenised deposits, with BlackRock and Franklin Templeton participating. Track 2 is not a speculative extension — it is the direction the regulator and the largest asset managers have already chosen.",
    "Swift's ledger puts the value in an orchestration layer above bank-issued tokens, with programmable money and agentic commerce named as the next applications. That independently validates both this site's architecture framing and its mandate layer.",
    "HSBC and Standard Chartered ran the first live interbank tokenised-deposit transaction on Swift's Besu-based ledger on 20 August 2026, and Citi and DBS then did one on a Saturday. Interoperability and the end of the weekend barrier are both proven in live transactions — the question is now who turns them into a client service first.",
  ],
};
