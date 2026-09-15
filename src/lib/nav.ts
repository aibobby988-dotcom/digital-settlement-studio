export type PageUse =
  | "must-show"
  | "screen-share"
  | "supporting"
  | "study-first"
  | "private"
  | "review"
  | "archive";

export interface NavItem {
  href: string;
  label: string;
  description: string;
  use: PageUse;
  guidance: string;
  studyPriority?: 1 | 2 | 3;
}

export interface NavGroup {
  section: string;
  description: string;
  items: NavItem[];
}

export const pageUseMeta: Record<PageUse, { label: string; shortLabel: string; tone: "brand" | "blue" | "emerald" | "amber" | "rose" | "neutral" }> = {
  "must-show": { label: "Must show in interview", shortLabel: "Must show", tone: "amber" },
  "screen-share": { label: "Interview-safe screen share", shortLabel: "Show", tone: "emerald" },
  supporting: { label: "Optional supporting proof", shortLabel: "Optional", tone: "blue" },
  "study-first": { label: "Study first - do not lead with it", shortLabel: "Study first", tone: "brand" },
  private: { label: "Private study - do not screen-share", shortLabel: "Private", tone: "rose" },
  review: { label: "Keep, but review before use", shortLabel: "Review", tone: "amber" },
  archive: { label: "Keep for now - repetitive / archive candidate", shortLabel: "Archive", tone: "neutral" },
};

// This is intentionally a preparation hierarchy rather than a site map. It tells the
// candidate what to show, what to study, and which older pages should not lead the story.
export const navGroups: NavGroup[] = [
  {
    section: "Interview path",
    description: "Screen-share these in order. Keep the main walkthrough to four tabs.",
    items: [
      {
        href: "/tds-strategy",
        label: "Extending TDS",
        description: "What HSBC already has, and the two tracks to pitch",
        use: "must-show",
        guidance: "Start here, in prep and in the room. It proves you know what is already live before you propose anything - which is the difference between extending their product and narrating it back to them.",
        studyPriority: 1,
      },
      {
        href: "/",
        label: "The Client Problem",
        description: "Why a treasurer would pay for this — the evidence under the strategy",
        use: "screen-share",
        guidance: "Not the opening summary - Extending TDS is. Use this when someone asks why the client problem is real, or wants the thesis and phase sequencing behind the two tracks.",
      },
      {
        href: "/stakeholder-demo",
        label: "Stakeholder Demo",
        description: "Run the client experience, control plane and both outcomes",
        use: "must-show",
        guidance: "This is the primary live demonstration. Run the happy path, then the safe-hold path, and narrate the client value and control trade-off.",
      },
      {
        href: "/roadmap",
        label: "Product Roadmap",
        description: "Show sequencing, gates and product judgement",
        use: "screen-share",
        guidance: "Use this after the demo to prove you can sequence a regulated product. Present the phases as an illustrative proposal, not HSBC's roadmap.",
      },
      {
        href: "/ai-in-product",
        label: "AI Across Both Tracks",
        description: "Where AI fits in Track 1 and Track 2, agentic payments, and the mandate demo",
        use: "screen-share",
        guidance: "The job description names AI/ML and agentic payments directly. Lead with the boundary - AI prepares evidence, humans or pre-agreed mandates approve movement - then give one concrete use case.",
        studyPriority: 1,
      },
      {
        href: "/risk-controls",
        label: "Risk & Controls",
        description: "Prove the proposition can operate safely in a bank",
        use: "screen-share",
        guidance: "Open this only if the conversation turns to risk, legal finality, operational readiness or governance. It is proof, not the opening act.",
      },
    ],
  },
  {
    section: "Interview-safe support",
    description: "Relevant evidence if asked. Do not make these part of the default tour.",
    items: [
      {
        href: "/industry-knowledge",
        label: "Industry & Regulatory Knowledge",
        description: "Current HK/APAC and global evidence with sources",
        use: "supporting",
        guidance: "Study the current signals first. Screen-share one sourced item only when it changes the client, partner or regulatory decision being discussed.",
        studyPriority: 1,
      },
      {
        href: "/commercial-model",
        label: "Commercial Model",
        description: "Revenue lines, unit economics, pricing and what breaks the case",
        use: "screen-share",
        guidance: "Open this when the conversation turns to money. Lead with the insight that retained balances are roughly five times the fee revenue, then volunteer the rate sensitivity before you are asked.",
        studyPriority: 1,
      },
      {
        href: "/legacy-comparison",
        label: "Legacy vs. Tokenised",
        description: "Use when asked whether the change is worth the cost",
        use: "supporting",
        guidance: "Useful for trade-offs and commercial judgement. State the limitations as clearly as the benefits; do not present speed or atomicity as universal guarantees.",
      },
      {
        href: "/architecture",
        label: "Architecture",
        description: "Technical appendix: control gates and system boundaries",
        use: "supporting",
        guidance: "Use only with a technical interviewer. Focus on orchestration, controls and reconciliation rather than claiming a specific live architecture.",
      },
      {
        href: "/besu",
        label: "Hyperledger Besu",
        description: "The ledger software under TDS and Swift's ledger, briefed for a PM",
        use: "supporting",
        guidance: "Study the privacy and interoperability points - they are the most differentiating. In the room, attribute the TDS-on-Besu point to public reporting or ask it as a question; never cite a contact.",
        studyPriority: 1,
      },
      {
        href: "/treasury",
        label: "Tokenised Treasury",
        description: "Optional product sandbox behind the flagship demo",
        use: "supporting",
        guidance: "The Stakeholder Demo tells the interview story more clearly. Use this only if someone asks to explore the detailed client workflow or lifecycle.",
      },
      {
        href: "/bond-dvp",
        label: "Bond DvP Settlement",
        description: "Adjacent tokenised-asset settlement knowledge",
        use: "supporting",
        guidance: "Useful breadth, but explicitly frame it as a later, capital-markets-adjacent use case rather than the flagship GPS proposition.",
      },
      {
        href: "/fx-pvp",
        label: "FX PvP Settlement",
        description: "Later-phase cross-border settlement knowledge",
        use: "supporting",
        guidance: "Use to discuss principal-risk design and interoperability. Do not claim it replaces CLS or is a near-term production commitment.",
      },
    ],
  },
  {
    section: "Study first",
    description: "Build your knowledge and answers here. These tabs are for preparation, not the default screen share.",
    items: [
      {
        href: "/jd-alignment",
        label: "JD & Site Alignment",
        description: "The verbatim job description, then a proof point for every line of it",
        use: "study-first",
        guidance: "Start here before rehearsing. The posting itself is reproduced at the top, followed by what each theme tests, the evidence to show, the trade-offs to own and the questions to expect.",
        studyPriority: 1,
      },
      {
        href: "/plain-english",
        label: "Plain English",
        description: "Every acronym and term on this site, explained with examples",
        use: "study-first",
        guidance: "Read this whenever something elsewhere loses you. Every term is spelled out in full with a concrete example and why it matters for this role. Nothing here assumes prior knowledge.",
        studyPriority: 1,
      },
      {
        href: "/vincent-tests",
        label: "The 45 Minutes",
        description: "The five things Vincent will test, with fact-checked answers",
        use: "private",
        guidance: "Rehearse from this. Each answer is checked against the rest of the site, and the watch-out notes flag where a confident-sounding answer is actually wrong - particularly on CLS and on atomicity versus legal finality.",
        studyPriority: 1,
      },
      {
        href: "/cv-alignment",
        label: "My CV vs. the JD",
        description: "Strengths to lead with, gaps that will be probed, and how to answer them",
        use: "private",
        guidance: "Private. Read the gaps section twice - three of them could decide the outcome, and all three are survivable only if you raise them before the interviewer does.",
        studyPriority: 1,
      },
      {
        href: "/interview-prep",
        label: "Interview Prep",
        description: "Practise behavioural stories, questions to ask and case defence",
        use: "private",
        guidance: "Private rehearsal material. Use it to prepare truthful personal stories and questions; do not screen-share this page in an interview.",
        studyPriority: 2,
      },
      {
        href: "/company-notes",
        label: "Company & Interviewer Notes",
        description: "Private context on role, organisation and public background",
        use: "private",
        guidance: "Private pre-read only. Some organisational details, interviewer background and older statistics may change, so verify them and never screen-share this page.",
        studyPriority: 2,
      },
      {
        href: "/zero-to-one",
        label: "Building 0 to 1",
        description: "Learn product sequencing, scope and de-risking",
        use: "private",
        guidance: "Useful to learn the product-manager logic behind the roadmap. It is more delivery-detailed than this senior interview requires, so do not lead with it.",
        studyPriority: 3,
      },
      {
        href: "/backlog",
        label: "Delivery Backlog",
        description: "Private delivery-detail appendix",
        use: "private",
        guidance: "Keep as evidence that you understand delivery, but do not show fictional story points or backlog detail unless specifically asked about execution mechanics.",
        studyPriority: 3,
      },
      {
        href: "/user-stories-guide",
        label: "Writing User Stories",
        description: "Private product-delivery skills drill",
        use: "private",
        guidance: "Good for learning clear requirements and acceptance criteria. It is not a useful tab to show for this senior, externally-facing product role.",
        studyPriority: 3,
      },
      {
        href: "/ai-preparation",
        label: "Using AI to Prepare",
        description: "Private AI study and product-control material",
        use: "private",
        guidance: "Use the AI-in-product guardrails to learn. Do not screen-share the preparation/disclosure material; discuss AI only through the product controls and accountability model.",
        studyPriority: 3,
      },
    ],
  },
  {
    section: "Keep, but do not use yet",
    description: "Nothing is deleted. These older pages are repetitive or need factual cleanup before they should influence your interview story.",
    items: [
      {
        href: "/overview",
        label: "Overview",
        description: "Older portfolio dashboard with simulated platform KPIs",
        use: "archive",
        guidance: "Repetitive with the Executive Brief and Stakeholder Demo. Keep it for reference, but do not use the simulated performance numbers or present it as a live platform.",
      },
      {
        href: "/transaction-flow",
        label: "Transaction Flow",
        description: "Older happy/unhappy animation now covered by the demo",
        use: "archive",
        guidance: "Repetitive with the Stakeholder Demo's paired scenarios. Keep it as a technical reference, but do not screen-share it unless the animation adds something the demo did not answer.",
      },
      {
        href: "/ecosystem",
        label: "Ecosystem & Market",
        description: "Build/buy/partner framework and where HSBC has publicly committed",
        use: "supporting",
        guidance: "Reframed: vendor sections now read as evidence of where HSBC has already committed - Metaco live, Canton piloted, Elliptic invested in - rather than as procurement picks you are recommending. Safe to reference on those terms; never present it as a vendor decision you would make.",
      },
    ],
  },
];

export const navItems: NavItem[] = navGroups.flatMap((group) => group.items);

// Kept for existing components that refer to study materials. The actual navigation order
// is now governed by navGroups above.
export const studyNavItems = navGroups
  .filter((group) => group.section === "Study first" || group.section === "Keep, but do not use yet")
  .flatMap((group) => group.items);
