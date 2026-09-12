/**
 * Private study material: the candidate's own CV mapped against the job
 * description. Honest by design — the gaps section is more useful than the
 * strengths section, because the strengths will speak for themselves and the
 * gaps are what lose offers.
 *
 * Every claim here is drawn from the CV itself. Nothing is invented.
 */

export interface CvRole {
  org: string;
  title: string;
  dates: string;
  months: number;
  highlights: string[];
  jdRelevance: string;
}

export const cvRoles: CvRole[] = [
  {
    org: "AFX / Phemex",
    title: "Head of Growth & Listing, Derivatives & Spot Exchange",
    dates: "Oct 2025 – Present · Hong Kong",
    months: 11,
    highlights: [
      "Founding executive of a 30-person trading platform, working directly with the CEO, COO, CMO and CBO on product architecture, commercial model, packaging and market-entry decisions",
      "50,000 new clients, US$2bn monthly traded volume and US$4m projected gross fee revenue in the first six months; top-11 globally by derivatives volume within one month",
      "Owned listing and asset approval end-to-end across 300+ assets: sourcing, due diligence, legal and market-risk screening, cross-functional product review, post-launch monitoring, with inherent and residual risks documented before go-live",
      "Led European coverage and issuer partnerships for MiCA-compliant market entry, engaging regulators on licensing and disclosure requirements",
      "Built and manages a 500+ partner and distribution pipeline across issuers, liquidity providers, market makers, custodians and payment partners in Japan, Korea, South-East Asia, the EU and Latin America",
    ],
    jdRelevance:
      "Carries R1 (product ownership), R4 (deal solutioning), R5 (regulator engagement) and R6 (risk and product reviews) at once. The 300-asset review process is the closest thing on the CV to a New Product Approval discipline.",
  },
  {
    org: "MANTRA Foundation",
    title: "Protocol Specialist (Entrepreneur in Residence)",
    dates: "Nov 2024 – Oct 2025 · Hong Kong",
    months: 12,
    highlights: [
      "Drove institutional adoption of a real-world-asset tokenisation network through developer, venture and market-infrastructure partnerships, positioning it for regulated distribution",
      "Deployed US$50k–150k early-stage investments with structured go-to-market support",
    ],
    jdRelevance:
      "Direct tokenisation experience. Real-world-asset tokenisation is the same conceptual family as tokenised deposits and tokenised bonds, so this supports Q2 and the tokenised-asset settlement advantage in Q4.",
  },
  {
    org: "OKX",
    title: "Lead Business Development, X Layer (settlement network)",
    dates: "Dec 2023 – Oct 2024 · Hong Kong",
    months: 11,
    highlights: [
      "Grew adoption of OKX's blockchain settlement network via partner funding, developer programmes and marketing budgets, increasing active users, transaction volume and assets held",
      "Represented OKX at conferences across Asia-Pacific and led cross-functional go-to-market with product, technology, marketing and compliance",
    ],
    jdRelevance:
      "The word settlement network matters here. This is adoption of a settlement rail, which is structurally the same commercial problem as getting corporate clients onto a tokenised deposit rail — supports R2 and R7.",
  },
  {
    org: "Animoca Brands",
    title: "Project Manager, New Startup Division",
    dates: "Jul 2022 – Nov 2023 · Hong Kong",
    months: 17,
    highlights: [
      "Built and operated teams of five to eight across two digital-asset ventures, taking both from concept to live commercial operations",
      "Negotiated term sheets and joint ventures; ran market-making and liquidity programmes supporting orderly secondary-market pricing",
    ],
    jdRelevance:
      "Zero-to-one delivery evidence and genuine liquidity-management exposure. Liquidity is a real concept in settlement, so this is more transferable than it first appears.",
  },
  {
    org: "HSBC & DBS Bank",
    title: "Product Owner — PayMe / Equities / Digital Banking",
    dates: "Mar 2018 – Jul 2022 · Hong Kong",
    months: 52,
    highlights: [
      "Product owner for payments and trading propositions at two banks regulated by the Hong Kong Monetary Authority, covering PayMe peer-to-peer payments, wallet funding and withdrawal rails, equities trading and digital banking platforms",
      "Led delivery teams across the full software development lifecycle, converting business requirements into user stories and aligning senior stakeholders across technology, operations, risk, legal and compliance",
      "Assessed blockchain and digital currency use cases — tokenisation, custody and digital asset trading — as extensions of HSBC's digital banking and wealth product suite, presenting findings and commercial implications to product leadership",
      "Ran client evaluations, demonstrations and enablement sessions that drove adoption across large customer bases",
    ],
    jdRelevance:
      "The anchor of the whole application. It is in-bank, HKMA-regulated, HSBC itself, and it already includes assessing digital currency use cases for HSBC — which is almost exactly what this role does, four years earlier and one layer down.",
  },
];

export interface Strength {
  claim: string;
  jdRefs: string;
  evidence: string[];
  howToUseIt: string;
  rank: number;
}

export const strengths: Strength[] = [
  {
    rank: 1,
    claim: "Artificial intelligence and agentic workflows — genuinely rare, and named in the posting",
    jdRefs: "Q3 — Technology savvy, where agentic payments is called a strong advantage",
    evidence: [
      "Founder of Flux AI Labs, an artificial-intelligence product studio running a live e-commerce brand and four consumer apps through agent workflows with no additional headcount",
      "25+ agents deployed for market screening, due diligence and reporting per the CV's core strengths",
      "Listed working knowledge of AI/ML and agentic workflows including Claude and Codex",
    ],
    howToUseIt:
      "This is the single strongest differentiator, because almost no transaction-banking candidate has shipped agent workflows in production. The posting names agentic payments explicitly as an advantage. Do not present it as a side project — present it as operating experience of what happens when software acts on its own, which is precisely the control problem wholesale payments is about to face.",
  },
  {
    rank: 2,
    claim: "Risk and product-review discipline, already in banking vocabulary",
    jdRefs: "R6 — Risk management and product reviews",
    evidence: [
      "300+ assets taken through sourcing, due diligence, legal and market-risk screening and cross-functional product review at Phemex",
      "Inherent and residual risks documented before go-live — the exact language a bank risk forum uses",
      "Post-launch monitoring built into the framework, not bolted on",
    ],
    howToUseIt:
      "Most candidates from a crypto background trigger a risk-appetite concern. This inverts it: you ran a documented approval gate 300 times. Use the phrase inherent and residual risk deliberately — it signals you already speak the language of a New Product Approval committee.",
  },
  {
    rank: 3,
    claim: "Regulatory engagement across several regimes",
    jdRefs: "R5 — Market engagement including regulators",
    evidence: [
      "Led MiCA-compliant market entry for European coverage, engaging regulators on licensing and disclosure requirements",
      "Core strengths list Hong Kong Monetary Authority, Securities and Futures Commission, MiCA and VARA frameworks",
      "Four years inside two Hong Kong Monetary Authority-regulated banks",
    ],
    howToUseIt:
      "The posting asks for support of external market participants including regulators. You have done this in a live licensing context, not a theoretical one. Pair it with the regulatory landscape page on this site to show you can compare regimes rather than just name them.",
  },
  {
    rank: 4,
    claim: "Commercialisation with numbers attached",
    jdRefs: "R1, R2, R3 — product ownership, value proposition and commercialisation",
    evidence: [
      "50,000 new clients and US$2bn monthly traded volume within six months at Phemex",
      "US$4m projected gross fee revenue in the first six months; US$23m+ client assets held",
      "Previously US$90m+ secondary trading volume and US$2m+ capital raised at Digital Asset Ventures, with an exit via trade sale",
      "US$8m in sales from brand collaborations with Adidas and AMBUSH",
    ],
    howToUseIt:
      "The posting leads with commercialisation. Most product candidates describe features; you can describe revenue and an exit. Quantified outcomes are the fastest way to establish seniority — but always pair the number with the decision you made to produce it.",
  },
  {
    rank: 5,
    claim: "Thought leadership, which is hard to fake and is a named responsibility",
    jdRefs: "R7 — Marketing and thought leadership",
    evidence: [
      "Keynote speaker at Japan Blockchain Week 2026",
      "Panellist and media commentator",
      "Represented OKX at conferences across Asia-Pacific",
    ],
    howToUseIt:
      "This responsibility appears in the posting and very few candidates can evidence it at all. Mention it early — it makes you visibly useful to a team whose remit includes promoting the bank's position in digital currencies.",
  },
  {
    rank: 6,
    claim: "An HSBC alumnus who already assessed digital currency for HSBC",
    jdRefs: "Q1, Q6 — client understanding and relevant experience",
    evidence: [
      "Product owner at HSBC, Mar 2018 – Jul 2022",
      "Assessed blockchain and digital currency use cases — tokenisation, custody, digital asset trading — as extensions of HSBC's digital banking and wealth suite, and presented commercial implications to product leadership",
    ],
    howToUseIt:
      "This is the narrative spine. You looked at this exact question inside HSBC four years ago, went out to learn how the technology works commercially, and are coming back to do it properly with the bank's distribution. That story makes the whole CV cohere rather than look scattered.",
  },
];

export interface Gap {
  gap: string;
  jdRef: string;
  theProblem: string;
  whatYouDoHave: string;
  howToAnswer: string;
  severity: "Will decide the outcome" | "Will be probed" | "Minor";
}

export const gaps: Gap[] = [
  {
    gap: "Wholesale and corporate-treasury client experience",
    jdRef: "Q1 — robust understanding of the wholesale payment client base",
    theProblem:
      "The posting's first requirement is understanding wholesale payment clients. Your payments experience is PayMe — retail peer-to-peer — plus exchange users, issuers and partners. You have not carried a corporate treasurer relationship, and a corporate treasurer is the buyer for this product.",
    whatYouDoHave:
      "Four years inside two regulated banks; a 500+ partner pipeline built through institutional business-to-business solutioning; wallet funding and withdrawal rails, which are genuinely payments infrastructure; and deal-by-deal commercial solutioning with issuers, custodians and payment partners.",
    howToAnswer:
      "Do not claim treasury experience you do not have — it collapses on the first follow-up question. Say plainly that your payments depth is retail and institutional-partner rather than corporate treasury, then show you have closed the gap deliberately: you have studied the treasurer's actual jobs to be done, and this case study is built around their problem — trapped cash, missed cut-offs, reconciliation effort. Then pivot to what transfers: institutional counterparty solutioning at scale is closer to treasury selling than retail product management is.",
    severity: "Will decide the outcome",
  },
  {
    gap: "Depth on settlement message standards",
    jdRef: "Q4 — in-depth understanding of SWIFT, CLS and PvP/DvP settlement models",
    theProblem:
      "The posting asks for in-depth understanding. Your CV honestly says working knowledge. That is a real distance, and this is the most testable requirement on the whole posting — it is either known or it is not.",
    whatYouDoHave:
      "Working knowledge as stated, plus DLT-based settlement flows defined with engineering at Phemex, and adoption work on OKX's settlement network.",
    howToAnswer:
      "This is the gap this entire site exists to close, and it is closable by study in a way the others are not. Know cold: what CLS does and why it exists, Herstatt risk and its 1974 origin, the three BIS delivery-versus-payment models and which one an atomic ledger implements, the difference between atomicity and legal finality, and where ISO 20022 migration currently stands. If asked directly, be honest that your depth came from building rather than from a correspondent-banking career — then demonstrate it rather than assert it.",
    severity: "Will decide the outcome",
  },
  {
    gap: "The eight-year requirement, read strictly",
    jdRef: "Q6 — minimum 8 years in B2B/wholesale payments, cash management or transaction banking, required",
    theProblem:
      "Read literally, your in-bank payments experience is roughly four years and three months (Mar 2018 – Jul 2022), and PayMe is retail rather than business-to-business or wholesale. Since 2022 you have been in digital assets. A strict reader could mark this as not met.",
    whatYouDoHave:
      "8+ years across the combined space, and critically the posting's own next sentence names exactly where you spent the other four: additional experience from DeFi, digital currencies and assets, exchanges and fintechs is listed as an advantage.",
    howToAnswer:
      "Address it before it is raised, in one confident sentence: four years inside two regulated banks building payments and trading products, then four years in precisely the digital-asset and exchange environments the posting names as an advantage. Frame it as unusual coverage rather than a shortfall — very few candidates have both halves, and a team building digital currencies needs someone who has actually operated the technology commercially.",
    severity: "Will decide the outcome",
  },
  {
    gap: "Recent tenure pattern",
    jdRef: "Not a stated requirement, but a near-certain question",
    theProblem:
      "Four consecutive roles of roughly a year each: Animoca 17 months, OKX 11, MANTRA 12, Phemex 11 and still current. An interviewer hiring for a multi-year product build will ask whether you will still be there in three years. Left unaddressed, this quietly costs offers.",
    whatYouDoHave:
      "A clear four-year tenure at HSBC and DBS showing you can commit; and each short role has a defensible reason — an entrepreneur-in-residence post is time-boxed by design, and a founding-executive role is a launch mandate.",
    howToAnswer:
      "Volunteer it. Explain that the digital-asset market moved in distinct waves and you moved deliberately to be at the front of each, then say directly what you want now: to stop restarting and build one thing properly, with distribution behind it. Point at the four years at HSBC and DBS as evidence you stay when the work justifies it. Interviewers forgive a pattern that the candidate names first.",
    severity: "Will be probed",
  },
  {
    gap: "Perceived culture distance from a conservative bank",
    jdRef: "Q5 — working effectively across functions and levels",
    theProblem:
      "Crypto-exchange leadership can read as high-risk-appetite to a bank interviewer. Phemex and OKX are crypto-native venues, and derivatives volume is not a reassuring metric inside a compliance-led organisation.",
    whatYouDoHave:
      "A documented 300-asset risk-review process, MiCA licensing engagement, four years inside regulated banks, and a case study built entirely around controls and failure paths.",
    howToAnswer:
      "Lead with control, not with growth. When describing Phemex, put the listing-approval framework first and the volume numbers second. Use the unhappy-path demonstration on this site deliberately — a candidate who designs the failure case first is not signalling high risk appetite.",
    severity: "Will be probed",
  },
  {
    gap: "Mandarin is conversational, not mastery",
    jdRef: "Q7 — mastery of Mandarin Chinese would be an advantage",
    theProblem: "The posting asks for mastery as an advantage; your CV says conversational.",
    whatYouDoHave:
      "English native, Cantonese and Mandarin conversational, and a degree in Management with Chinese Studies. In Hong Kong, Cantonese carries real weight.",
    howToAnswer:
      "It is listed as an advantage, not a requirement, so do not over-explain. If asked, be straightforward and note the Chinese Studies degree and Cantonese fluency. One sentence, then move on.",
    severity: "Minor",
  },
];

export const narrativeArc = {
  headline: "The story that makes this CV cohere",
  story:
    "I was inside HSBC when it first looked seriously at tokenisation, custody and digital asset trading, and I wrote the assessments of whether they belonged in the bank's product suite. I concluded the technology was real but the commercial understanding was not there yet — including my own. So I went and got it: building settlement-network adoption at OKX, taking two digital-asset ventures from concept to live operations at Animoca, working on real-world-asset tokenisation at MANTRA, and then running listing, risk approval and European regulatory entry as a founding executive at a trading platform. I now know how this technology actually behaves commercially and where it breaks. What I want is to bring that back to the one place it can reach clients at scale — a bank with the balance sheet, the client base and the regulatory standing. That is why this specific role, and why now.",
  whyItWorks:
    "It converts the apparent weakness — leaving banking — into deliberate preparation, and it explains the short tenures as a sequence with an endpoint rather than a pattern of restlessness. It also answers why HSBC and why this role in a way that is true rather than flattering.",
};

export interface StarSeed {
  competency: string;
  likelyQuestion: string;
  cvMaterial: string;
  whatToEmphasise: string;
}

export const starSeeds: StarSeed[] = [
  {
    competency: "Influence without authority",
    likelyQuestion:
      "Tell me about a time you had to align people who did not report to you, and disagreed with you.",
    cvMaterial:
      "Leading delivery across the full software development lifecycle at HSBC and DBS, aligning technology, operations, risk, legal and compliance to ship on schedule. Or the cross-functional product review for asset listings at Phemex, where legal and market-risk screening could block a commercial decision.",
    whatToEmphasise:
      "Name the person who disagreed and what their legitimate concern was. The interviewer is testing whether you treat control functions as obstacles or as co-owners. Land on how you changed your own proposal, not how you won.",
  },
  {
    competency: "Commercial judgement and trade-offs",
    likelyQuestion: "Tell me about a difficult commercial decision where you had to say no.",
    cvMaterial:
      "The listing and asset-approval function at Phemex — 300+ assets screened means you declined some with commercial upside. Or the decision to exit Digital Asset Ventures via trade sale.",
    whatToEmphasise:
      "A rejection with revenue attached is the strongest version of this story. State what the upside was, what the risk was, and that you made the call — this directly evidences R6 on the posting.",
  },
  {
    competency: "Delivering through ambiguity",
    likelyQuestion: "Tell me about building something with no established playbook.",
    cvMaterial:
      "Founding executive at a 30-person platform reaching top-11 globally by derivatives volume within one month. Or taking two ventures at Animoca from concept to live commercial operations.",
    whatToEmphasise:
      "Show sequencing judgement, not heroics. What did you deliberately not build first? That is what maps to the roadmap and gating discipline this role needs.",
  },
  {
    competency: "Customer problem solving",
    likelyQuestion: "Tell me about a time you changed a product because of what a client told you.",
    cvMaterial:
      "Client evaluations, demonstrations and enablement sessions at HSBC and DBS; bespoke commercial solutioning deal by deal across the 500+ partner pipeline.",
    whatToEmphasise:
      "Pick an example where the client's stated request was not their real problem. That distinction is the core of the jobs-to-be-done thinking this role requires.",
  },
  {
    competency: "Regulatory and risk engagement",
    likelyQuestion: "Tell me about working with a regulator or a risk function on something new.",
    cvMaterial:
      "MiCA-compliant European market entry, engaging regulators on licensing and disclosure requirements.",
    whatToEmphasise:
      "Emphasise that you involved them early and changed the product as a result. The posting names regulator engagement as a responsibility, so this is a direct hit — show the instinct, not just the meeting.",
  },
];

export const cvToSiteBridge = [
  "Use the case study to demonstrate what your CV cannot: wholesale settlement depth. The CV proves commercialisation and risk discipline; the site proves you understand payment-versus-payment, delivery-versus-payment and legal finality.",
  "Use the CV to demonstrate what the case study cannot: that you have actually shipped, sold and made money, and carried accountability for real outcomes with real numbers.",
  "The strongest single answer combines both — a product decision from the case study, anchored in a true example from the CV. Neither alone is as convincing.",
];
