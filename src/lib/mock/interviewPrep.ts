export interface QAEntry {
  question: string;
  answer: string;
}

export interface QACategory {
  category: string;
  items: QAEntry[];
}

export const caseStudyQA: QACategory[] = [
  {
    category: "Strategy & sequencing",
    items: [
      {
        question: "Why tokenised deposits and not a stablecoin?",
        answer:
          "A tokenised deposit is a digital representation of an existing, regulated commercial-bank liability — it inherits deposit insurance treatment, existing legal and prudential frameworks, and the bank's existing balance-sheet and AML controls. A stablecoin is a new, separately reserved instrument that creates a second balance sheet and a new regulatory perimeter to negotiate. For a bank's first digital-money product, tokenised deposits let you ship inside the perimeter you already operate in — stablecoin-adjacent use cases are a later, harder conversation, not a reason to delay what you can ship now.",
      },
      {
        question: "Why start with intrabank treasury rather than DvP or cross-bank PvP?",
        answer:
          "Sequencing by risk and dependency count. Intrabank treasury only requires the bank to trust its own controls — one legal entity, one ledger, approved group entities as counterparties. DvP and PvP both require coordinating external legs — a custodian or another bank — multiplying the legal, technical and commercial dependencies before the core control model is even proven. You want the hardest cross-institutional problems to be the second thing you solve, not the first.",
      },
      {
        question: "What would you cut if you had half the roadmap time?",
        answer:
          "Phase 3 (tokenised-asset DvP) and Phase 5 (broader connectivity) go first — DvP needs an external custody/asset partner outside the bank's control, and Phase 5 depends on industry infrastructure (Agorá, RLN) that isn't the bank's call alone. Phase 1 and Phase 2 stay fully protected, because that's where the actual client value and the reusable control model live.",
      },
      {
        question: "How do you know this solves a real client problem rather than being technology-led?",
        answer:
          "The starting point was four things treasury teams already complain about — trapped liquidity across time zones, cut-off-driven funding delays, manual reconciliation, fragmented visibility — not 'what can tokenisation do'. The test before scaling: does a pilot client's treasury team report a measurable reduction in idle cash or reconciliation hours. If not, the technology worked but the product didn't.",
      },
    ],
  },
  {
    category: "Technology & architecture",
    items: [
      {
        question: "Walk me through what happens if the tokenised ledger and core banking ledger disagree.",
        answer:
          "That's a reconciliation break, treated as a first-class operational event. Reconciliation runs continuously, so a break is detected within minutes, raised as an exception case with an SLA, and routed to operations with amount, entity and transaction reference. Client-facing balances never reflect the tokenised ledger's view until the break is resolved — settlement finality and ledger consistency are two separate guarantees, and you don't get to claim the first without the second.",
      },
      {
        question: "What's the difference between atomicity and legal finality, and why does it matter?",
        answer:
          "Atomicity is a technical property enforced by the settlement engine — both legs settle together or neither does. Legal finality is a jurisdictional legal question: at what point, under which law, is the transfer irrevocable, including in an insolvency. A platform can be technically perfect and still legally ambiguous if that hasn't been tested corridor by corridor — which is why technical atomicity is explicitly not treated as proof of legal finality, and production use requires a legal opinion per corridor first.",
      },
      {
        question: "How do you control an ERP or AI agent initiating payments automatically?",
        answer:
          "The same control discipline as a human initiator, enforced at the API layer rather than assumed at the UI layer: scoped API permissions, a policy engine enforcing payment limits, maker-checker approval an automated caller can't self-satisfy, a human escalation threshold, and an immutable audit trail. The risk isn't automation — it's a control model that only checks intent at a human-facing screen while a machine-facing API has a back door.",
      },
    ],
  },
  {
    category: "Risk, compliance & legal",
    items: [
      {
        question: "What's the biggest risk you're not solving for yet?",
        answer:
          "Cross-jurisdictional legal finality at scale. The platform enforces atomicity and screening everywhere, but a legal opinion confirming finality has to be obtained corridor by corridor — a legal and governance bottleneck, not an engineering one. It's deliberately shown as 'Monitoring' rather than 'Effective' in the risk framework, because a technical control shouldn't imply a legal question is solved.",
      },
      {
        question: "How would a regulator's objection to something change the roadmap?",
        answer:
          "Depends what they object to. A corridor-specific issue (e.g. data residency) narrows Phase 2's corridor list without touching the model. A structural objection — say, atomic settlement not meeting their definition of finality — blocks Phase 3/4, not Phase 1, because Phase 1 never leaves a single legal entity. That's the real argument for the phased structure: a regulatory setback later doesn't retroactively invalidate the earlier phases.",
      },
    ],
  },
  {
    category: "Commercial & metrics",
    items: [
      {
        question: "How does this make money?",
        answer:
          "Three components sequenced with the roadmap: retained operating balances (frictionless movement keeps higher average balances), a transaction/volume-based fee once cross-border corridors are live, and eventually a platform/participation model if it extends to multi-bank interoperability. Phase 1 deliberately doesn't need a fully worked pricing model — that's built out once there's a pilot to price against.",
      },
      {
        question: "What's your moat against Partior, Kinexys, or Citi Token Services?",
        answer:
          "Limited technical moat — atomic-settlement mechanics are converging industry-wide. The differentiator is distribution: an existing corporate treasury relationship, existing multi-entity KYC/entitlement base, existing correspondent-banking corridors a new entrant has to build from zero. That's why Phase 2 targets corridors the client already banks with the group in, not green-field expansion — the moat is in where you already have the client, not the ledger technology.",
      },
      {
        question: "What does success look like at the end of the pilot?",
        answer:
          "Not 'the technology worked' — that's necessary but not sufficient. At least one pilot client can point to a measurable liquidity or reconciliation-hours improvement, the exception/break rate stayed within SLA under real (not synthetic) volume, and Financial Crime, Legal and Operations sign off the control model held under real client behaviour. If those three don't all hold, it isn't ready to scale, however good the demo looks.",
      },
    ],
  },
  {
    category: "Self-awareness",
    items: [
      {
        question: "What's the weakest part of this case study?",
        answer:
          "The success metrics are the categories to measure, not real production numbers — worth saying explicitly rather than implying otherwise. And the commercial model is directional, not costed — pricing a wholesale product properly needs Finance and real client willingness-to-pay data outside a real mandate. Volunteering this before being asked lands better than waiting for the interviewer to find it.",
      },
      {
        question: "If you got this mandate for real tomorrow, what's the first thing you'd do?",
        answer:
          "Talk to five corporate treasurers who already bank with HSBC across multiple entities, and find out whether 'trapped liquidity across time zones' is actually their top-three problem — or whether this is a solution to a problem an engineer would find interesting and a treasurer wouldn't rank in their top five. Everything in the case study is a hypothesis about their problem; the first real step is testing it against theirs.",
      },
    ],
  },
];

export interface QuestionGroup {
  theme: string;
  questions: string[];
}

export const questionsToAsk: QuestionGroup[] = [
  {
    theme: "Team, structure & reporting lines",
    questions: [
      "Who does this role report into, and how many direct reports (if any) come with it?",
      "How is the Digital Currencies team structured — a standalone product line, or embedded within Global Payments Solutions?",
      "How does this team interact with GPS, Securities Services, Markets, and whoever represents HSBC at initiatives like Project Agorá?",
      "Is Engineering dedicated to this team, or pulled from a shared platform pool — and how is that prioritised when it's shared?",
    ],
  },
  {
    theme: "KPIs & success measures",
    questions: [
      "What are the actual KPIs this role is measured against in year one — client adoption, volume, revenue, or regulatory milestones?",
      "How is success defined differently for a product in pilot versus one that's scaled — what's the graduation criteria between phases?",
      "How is product success attributed when a win depends on Sales, Legal and Operations all executing well, not just Product?",
    ],
  },
  {
    theme: "Timelines & roadmap reality",
    questions: [
      "What's the realistic timeline for the next corridor expansion or Orion milestone — how much of that is within Product's control versus dependent on regulatory approval?",
      "Is there a target date for the team's next major public milestone I should know about?",
      "What's typically the longest pole in the tent when a new corridor or capability slips — legal, engineering, or client readiness?",
    ],
  },
  {
    theme: "Strategy & build vs. partner",
    questions: [
      "How does the team balance building differentiated capability versus partnering — who actually owns that build/buy/partner call in practice?",
      "How does risk appetite get set for genuinely novel products — a dedicated digital-assets risk committee, or the standard New Product Approval process?",
      "What's the biggest lesson learned from the Hong Kong Tokenised Deposit Service launch that would change how the team approaches the next corridor?",
      "How involved is this role in direct regulatory engagement (HKMA, MAS, BoE) versus working through a separate regulatory affairs function?",
    ],
  },
  {
    theme: "Culture & ways of working",
    questions: [
      "What does a typical week look like for someone in this role today?",
      "How does the team balance moving at fintech speed with a large bank's governance and change-control process?",
      "What would make you consider the first 12 months in this role a clear success?",
    ],
  },
];

export const logisticsNotes = [
  "Typical shape for a senior product mandate at a large bank: recruiter screen, hiring-manager conversation, a panel and/or case/portfolio round, senior-stakeholder round, offer. Confirm the actual format and number of rounds with your recruiter rather than assuming.",
  "GCB4 is a senior grade that can carry individual-contributor or people-leadership scope depending on the team — confirm which this specific role is before the interview so you calibrate your answers to the right scope.",
  "If you screen-share the site, load the live URL beforehand and confirm it renders on the network/device you'll present from. Keep the GitHub repo link as a backup talking point, but lead with the live site.",
  "Narrating each page in your own words demonstrates command of the material far better than clicking through the guided walkthrough for them.",
];

export const quickFacts = {
  pitch:
    "24/7 Tokenised Treasury — tokenised deposits move commercial-bank money between a client's own approved entities instantly, 24/7, in supported corridors, with the same control standard as wholesale payments today.",
  phases: [
    "0–6mo — Controlled intrabank treasury pilot",
    "6–18mo — Selected cross-border corporate treasury corridors",
    "18–30mo — Tokenised-asset DvP pilot",
    "30–48mo — Cross-bank interoperability & selected FX PvP corridors",
    "48mo+ — Broader regulated digital-money connectivity",
  ],
  gates: [
    "Client-value validation",
    "Legal and regulatory readiness",
    "Financial-crime controls tested",
    "Operational readiness",
    "Resilience / incident testing completed",
    "Commercial economics approved",
    "Client-support readiness",
  ],
  verifiedFacts: [
    "HSBC's digital-assets custody service is underpinned by Metaco's Harmonize platform (Nov 2023).",
    "HSBC Orion has facilitated several billion dollars in tokenised bond issuance and was selected for the UK Treasury's digital gilt (DIGIT) pilot.",
    "HSBC's Tokenised Deposit Service is live for corporate treasury clients in Hong Kong; Ant International was the first client.",
    "HSBC completed a pilot testing its Tokenised Deposit Service on the Canton Network, exploring interoperability across settlement rails.",
    "HSBC is a named participant in BIS Project Agorá and in the UK Regulated Liability Network pilot.",
    "Partior (DBS / J.P. Morgan / Temasek, Standard Chartered as founding shareholder, Deutsche Bank also live) is the closest real-world analogue to this roadmap's Phase 4.",
    "Named competitor products worth knowing: J.P. Morgan Kinexys (formerly Onyx), Citi Token Services, Standard Chartered's digital-asset ecosystem, DBS Token Services.",
  ],
};
