/**
 * The product strategy this case study actually argues for.
 *
 * The key reframe: HSBC already has a Tokenised Deposit Service, live in six
 * markets. The job is not to build one. The job is to make the cash leg useful
 * in more contexts. Everything below is organised around that.
 */

export interface EstateItem {
  asset: string;
  status: "Live" | "Proven in pilot" | "Proven, separate platform";
  what: string;
  soWhat: string;
  source?: { label: string; url: string };
}

/** What HSBC already has. Know this cold — proposing something they have built is the fastest way to lose the room. */
export const hsbcEstate: EstateItem[] = [
  {
    asset: "Tokenised Deposit Service",
    status: "Live",
    what: "Live in six markets — Hong Kong, Singapore, Luxembourg, the UK, the UAE and the US, the last added in April 2026. Supports 24/7 movement of tokenised deposits between a client's own entities.",
    soWhat:
      "This is the rail. It exists and it works, with Ant International as a named early user in Hong Kong. Any proposal that amounts to 'build a tokenised deposit service' is proposing something already shipped.",
    source: {
      label: "HSBC press release: US expansion, April 2026",
      url: "https://www.about.us.hsbc.com/newsroom/press-releases/hsbc-expands-tokenized-deposit-service-to-the-united-states",
    },
  },
  {
    asset: "Delivery-versus-payment against HSBC Orion",
    status: "Proven in pilot",
    what: "In the Hong Kong Monetary Authority's Project Ensemble Sandbox, announced 28 August 2024, HSBC completed a purchase of digital bonds issued on HSBC Orion using tokenised deposits recorded on HSBC's own ledger.",
    soWhat:
      "The cash leg has already been proven against HSBC's own asset platform. Proposing this is narrating completed work back to the person who ran it. The unbuilt step is doing the same thing for assets HSBC does not issue.",
    source: {
      label: "HSBC: three proof-of-concept use cases in Project Ensemble",
      url: "https://www.about.hsbc.com.hk/news-and-media/hsbc-completes-three-proof-of-concept-use-cases-within-hkmas-project-ensemble-sandbox",
    },
  },
  {
    asset: "Cross-bank tokenised deposit transfer",
    status: "Proven in pilot",
    what: "Interbank transfer of tokenised deposits between HSBC and Hang Seng Bank via the Ensemble interoperability platform, part of the same August 2024 set. HSBC has since integrated the Tokenised Deposit Service with the EnsembleTX interoperability layer and, on 13 November, completed the first live cross-bank transaction on it — moving HK$3.8m for Ant International from an HSBC-held wallet to its wallet at another domestic bank.",
    soWhat:
      "Interoperability beyond HSBC's own ledger is no longer theoretical. That matters because it means a third-party cash-leg proposition has a route to market.",
  },
  {
    asset: "First live interbank transaction on Swift's shared ledger",
    status: "Live",
    what: "On 20 August 2026 HSBC and Standard Chartered executed what both banks describe as the first live cross-border transaction, and the first interbank transaction, on Swift's blockchain-based ledger — reported to be built on Hyperledger Besu. HSBC's spokesperson was Lewis Sun, Global Head of Digital Currencies, Corporate & Institutional Banking.",
    soWhat:
      "HSBC is ahead, not behind, on live interoperability: it went first on Swift's ledger, two weeks before Citi and DBS's weekend transaction. HSBC has now moved tokenised deposits to another bank on both main interoperability paths — EnsembleTX in Hong Kong and Swift globally.",
    source: {
      label: "HSBC Hong Kong newsroom, 20 August 2026",
      url: "https://www.about.hsbc.com.hk/news-and-media/hsbc-and-standard-chartered-execute-first-live-tokenised-deposit-transaction-on-swifts-blockchain",
    },
  },
  {
    asset: "Trade settlement using electronic bills of lading",
    status: "Proven in pilot",
    what: "Settlement of electronic bills of lading via tokenised deposits and the Ensemble interoperability platform, working with Ant Digital Technologies and GSBN.",
    soWhat:
      "An often-overlooked third utility vector. Trade finance is a large GPS business and this proves the cash leg can serve it.",
  },
  {
    asset: "FX Everywhere",
    status: "Proven, separate platform",
    what: "HSBC's distributed-ledger foreign-exchange settlement platform, live since 2018, enabling payment-versus-payment settlement and netting. Roughly US$250bn across 150,000 intragroup payments, and about US$2.5tn across three million transactions in 2019. A bilateral shared ledger with Wells Fargo has covered USD, CAD, GBP and EUR since December 2021.",
    soWhat:
      "The single most important fact for this interview: HSBC already does payment-versus-payment on distributed ledger. Saying 'you have not done PvP' would be corrected immediately. The accurate and far more interesting observation is that FX Everywhere and the Tokenised Deposit Service have never been converged.",
  },
  {
    asset: "HSBC Orion",
    status: "Live",
    what: "HSBC's digitally native bond issuance platform, sitting in Markets & Securities Services under Patrick George. Over US$3.5bn of digital-bond issuance, the world's first multi-currency digital bonds in February 2024, selected for the UK digital gilt pilot, and approved to operate in the UK's Digital Securities Sandbox.",
    soWhat:
      "This is the asset leg, and it sits closer to Capital Markets than to Digital Money. Know it, reference it, but do not propose to run it — that is outside this role's remit.",
  },
];

export const cashLegThesis = {
  headline: "The cash leg is the product",
  body:
    "Every tokenised transaction has two legs: the asset and the cash that pays for it. HSBC Orion owns the asset leg. The Digital Money team inside Global Payments Solutions owns the cash leg, and the Tokenised Deposit Service is that cash leg. The growth thesis for this role follows directly: the objective is not to build a tokenised deposit, it is to make the tokenised deposit the cash leg for every kind of tokenised transaction, in every currency, on every network. Utility, not invention.",
  whyItLands:
    "It shows you understand the organisational boundary before anyone explains it to you, and it frames every subsequent proposal as an extension of something proven rather than a request for a new platform — which is a materially easier approval conversation inside any large bank.",
};

export interface UtilityVector {
  vector: string;
  status: "Live" | "Proven in pilot" | "Separate platform" | "Open";
  note: string;
}

export const utilityMap: UtilityVector[] = [
  { vector: "More markets and currencies", status: "Live", note: "Six markets as of April 2026. Continues, but it is expansion rather than new utility." },
  { vector: "Intra-group liquidity movement", status: "Live", note: "The core use case today — moving a client's cash between its own entities." },
  { vector: "Delivery-versus-payment for HSBC's own assets", status: "Proven in pilot", note: "Orion digital bonds, August 2024 sandbox." },
  { vector: "Cross-bank tokenised deposit transfer", status: "Live", note: "Live transactions on both main paths: Ant International on EnsembleTX (Nov 2025) and Standard Chartered on Swift's Besu-based ledger (Aug 2026). Proven, not yet a scaled client service." },
  { vector: "Trade finance settlement", status: "Proven in pilot", note: "Electronic bills of lading with Ant Digital Technologies and GSBN." },
  { vector: "Payment-versus-payment", status: "Separate platform", note: "Exists via FX Everywhere since 2018, but has never been converged with the Tokenised Deposit Service or offered to corporate clients this way." },
  { vector: "Cash leg for third-party tokenised assets", status: "Open", note: "Proven against HSBC's own bond platform, not against assets HSBC does not issue. This is the clearest unbuilt extension." },
  { vector: "Programmable and conditional settlement", status: "Open", note: "Money that moves on conditions rather than instructions — escrow, milestone release, threshold funding, delegated mandates." },
];

export interface Track {
  number: number;
  name: string;
  headline: string;
  targetClient: string;
  problem: string;
  proposition: string;
  whyHsbc: string[];
  whyApprovable: string;
  demoPage: { label: string; href: string };
  interviewLine: string;
  risks: string[];
}

export const tracks: Track[] = [
  {
    number: 1,
    name: "24/7 tokenised cash pooling",
    headline: "The commercial engine — scale the cash leg inside corporate treasury",
    targetClient:
      "Multinational corporates with multiple legal entities across HSBC markets and an Asian treasury centre.",
    problem:
      "Liquidity trapped in the wrong entity overnight and at weekends, missed payment cut-offs, manual sweeps, and cash positions that are only visible the next morning.",
    proposition:
      "Use the Tokenised Deposit Service to maintain target balances automatically and sweep surplus liquidity between approved group entities around the clock, rather than within banking windows.",
    whyHsbc: [
      "Closest to the existing Global Payments Solutions cash-management franchise, so it sells through the relationship managers who are already there",
      "Fastest path to client adoption because it requires no new client behaviour — only a better rail for movement clients already perform",
      "Concentrates operating balances at the bank, which is where the economics of this product actually sit",
      "Lowest relative regulatory and implementation complexity, because it extends the existing use case rather than opening a new one",
    ],
    whyApprovable:
      "It is an extension of a live product to a known client segment. The approval question is scope and controls, not whether the platform should exist.",
    demoPage: { label: "Tokenised Treasury", href: "/treasury" },
    interviewLine:
      "My first priority would be turning the Tokenised Deposit Service into a scalable liquidity-management proposition: 24/7 tokenised cash pooling for multinational treasury clients. It grows operating balances, which is where the commercial value of a treasury product really is.",
    risks: [
      "Requires the client's treasury centre to have genuine authority over subsidiary cash, or the buying decision does not exist",
      "The always-on promise carries a real 24/7 operational support cost that must be in the business case, not assumed away",
    ],
  },
  {
    number: 2,
    name: "Cash leg for third-party tokenised assets",
    headline: "The strategic track — extend proven delivery-versus-payment beyond HSBC's own assets",
    targetClient:
      "Institutional investors, asset managers and corporate treasuries allocating surplus liquidity into tokenised money-market funds and bonds.",
    problem:
      "Buying a tokenised asset still involves funding friction, settlement-timing risk and reconciliation, because the cash leg and the asset leg sit on different systems with different timetables.",
    proposition:
      "Make tokenised deposits the standard cash leg for approved tokenised investment products — extending the mechanism already proven against HSBC Orion to assets HSBC does not itself issue, reached through the Ensemble interoperability layer.",
    whyHsbc: [
      "The mechanism is already proven: the August 2024 sandbox settled Orion digital bonds against tokenised deposits, so this is scope extension rather than technical invention",
      "It multiplies addressable volume without a new platform, because HSBC does not need to issue the asset to earn the cash leg",
      "It gives the Digital Money team a defensible franchise across the whole tokenised-asset market rather than only HSBC-issued products",
      "The regulator has already chosen this direction: EnsembleTX's stated first focus is using tokenised deposits to settle tokenised money-market fund transactions, with BlackRock and Franklin Templeton participating as asset managers. The third-party issuers this track exists to serve are already in the room",
      "It connects Digital Money to Securities Services and the wider Ensemble participant set, which is exactly the kind of cross-functional outcome this role exists to produce",
    ],
    whyApprovable:
      "The hard part — atomic settlement of a bond against tokenised deposits — has already been demonstrated to the regulator's own sandbox. What remains is commercial and operational scope, which is a far easier case to make than a first-of-kind build.",
    demoPage: { label: "Bond DvP Settlement", href: "/bond-dvp" },
    interviewLine:
      "The second track commercialises what the Ensemble sandbox already proved. HSBC settled Orion bonds against tokenised deposits in 2024. The unbuilt step is doing that for assets HSBC does not issue — and EnsembleTX has made tokenised money-market funds its first focus, with BlackRock and Franklin Templeton participating. The demand side already exists; what is missing is a commercial proposition around our cash leg.",
    risks: [
      "Introduces dependencies on external asset platforms, custodians and their settlement timetables",
      "Requires clear legal treatment of the asset leg, which HSBC does not control when it is not the issuer",
      "Sales cycle runs through the asset manager or fund administrator as well as the client",
    ],
  },
];

export interface ForwardLook {
  item: string;
  why: string;
  howToRaise: string;
}

export const forwardLook: ForwardLook[] = [
  {
    item: "Programmable and delegated mandates — the agentic cash leg",
    why: "The Tokenised Deposit Service moves money on instruction today. The next layer is money that moves on conditions a client sets in advance: top up an entity below a threshold, release against a milestone, hold in escrow until a condition clears. The job description names agentic payments in wholesale transaction banking as a strong advantage, and the control question — who is accountable when software moves money — is a product question, not a technical one.",
    howToRaise:
      "Use this to close, in about ninety seconds, not to open. Frame it as a policy layer on an existing rail rather than a new platform, and lead with the mandate that constrains the agent rather than the agent itself. This is the part of the conversation almost no other candidate can hold.",
  },
  {
    item: "Converging payment-versus-payment with the Tokenised Deposit Service",
    why: "HSBC has run payment-versus-payment on distributed ledger since 2018 through FX Everywhere, and it has tokenised deposits. The two have never been joined, so a corporate client cannot settle a cross-currency payment with tokenised deposits atomically on both legs. That is genuine white space.",
    howToRaise:
      "Roadmap only, and only if asked. FX Everywhere may well sit outside Global Payments Solutions, so proposing to merge two divisions' platforms in a first interview risks looking organisationally naive. Raise it as an observation about where the estate could go, not as a plan you are volunteering to lead.",
  },
];

export const doNotLeadWith = [
  "Building a tokenised deposit service — it exists, live, in six markets.",
  "Delivery-versus-payment against HSBC Orion as though it were a new idea — it was proven in the Ensemble sandbox in August 2024.",
  "Claiming HSBC has not done payment-versus-payment — FX Everywhere has been settling on distributed ledger since 2018.",
  "A new blockchain, a new token, or a retail stablecoin proposition — none are this team's remit.",
  "Running HSBC Orion or group custody strategy — that is the asset leg and sits outside this role.",
  "Suggesting HSBC avoids building things — they built Orion, FX Everywhere and the Tokenised Deposit Service. The true point is that extending a proven asset is an easier approval than a new platform, which is a statement about governance, not about HSBC's appetite.",
];

export const openingNarrative = {
  script:
    "I see the Tokenised Deposit Service as a reusable digital-cash foundation rather than a finished product. My strategy would run two tracks on the same rail. First, scale direct corporate treasury value through 24/7 tokenised cash pooling — that is the commercial engine and it grows operating balances. Second, commercialise the cash leg for third-party tokenised assets, extending what the Ensemble sandbox already proved with Orion to products HSBC does not itself issue. That balances near-term client adoption and deposits against a strategic position in digital-asset settlement, and neither track asks the bank to build a new platform.",
  whyItWorks:
    "It demonstrates that you know the estate before anyone briefs you on it, it keeps every proposal inside the cash leg where this role actually sits, and it frames both tracks as extensions of proven capability — which is the easiest thing for a director to take upward for funding.",
};

export const demoRoute = [
  { step: 1, page: "Extending TDS", href: "/tds-strategy", say: "Open with the two-track thesis and the fact that you know what is already live. This is the frame for everything after it." },
  { step: 2, page: "Stakeholder Demo", href: "/stakeholder-demo", say: "Run the happy path, then the exception path. Narrate the client value, then the control the bank keeps." },
  { step: 3, page: "Tokenised Treasury", href: "/treasury", say: "Track one made concrete — the cash pooling workflow and where the liquidity value comes from." },
  { step: 4, page: "Bond DvP Settlement", href: "/bond-dvp", say: "Track two made concrete. Be explicit that Orion DvP is proven and that your proposal is the third-party extension." },
  { step: 5, page: "Commercial Model", href: "/commercial-model", say: "Where the money actually is — retained balances rather than fees — plus client targeting and the metrics that would justify scaling." },
  { step: 6, page: "Risk & Controls", href: "/risk-controls", say: "Only if the conversation turns to risk. Shows you understand why the bank moves deliberately." },
  { step: 7, page: "AI in This Product", href: "/ai-in-product", say: "Close here for ninety seconds. The mandate layer, and who stays accountable when software moves money." },
];
