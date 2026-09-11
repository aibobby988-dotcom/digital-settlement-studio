export interface NavItem {
  href: string;
  label: string;
  description: string;
}

export interface NavGroup {
  section: string;
  items: NavItem[];
}

// Grouped and ordered to read as a narrative for a first-time visitor:
// what is this -> try the product -> how it works -> why built this way ->
// how it's kept safe -> how it gets delivered.
export const navGroups: NavGroup[] = [
  {
    section: "Start here",
    items: [
      { href: "/", label: "Executive Brief", description: "5-minute pitch: thesis, problem, flagship, roadmap" },
    ],
  },
  {
    section: "The product",
    items: [
      { href: "/overview", label: "Overview", description: "KPIs and all three settlement flows at a glance" },
      { href: "/treasury", label: "Tokenised Treasury", description: "Flagship — try the transfer flow" },
      { href: "/bond-dvp", label: "Bond DvP Settlement", description: "Try atomic Delivery-versus-Payment" },
      { href: "/fx-pvp", label: "FX PvP Settlement", description: "Try atomic Payment-versus-Payment" },
    ],
  },
  {
    section: "How it works",
    items: [
      { href: "/architecture", label: "Architecture", description: "System design & decision flows" },
      { href: "/transaction-flow", label: "Transaction Flow", description: "Animated happy path vs. exception path" },
      { href: "/zero-to-one", label: "Building 0 → 1", description: "Full build narrative for all three products" },
    ],
  },
  {
    section: "Why this approach",
    items: [
      { href: "/legacy-comparison", label: "Legacy vs. Tokenised", description: "Trade-offs, effort, is it worth it" },
      { href: "/ecosystem", label: "Ecosystem & Market", description: "Build/buy/partner and market landscape" },
    ],
  },
  {
    section: "Staying in control",
    items: [
      { href: "/risk-controls", label: "Risk & Controls", description: "Control framework" },
    ],
  },
  {
    section: "Delivery",
    items: [
      { href: "/roadmap", label: "Product Roadmap", description: "Phased delivery plan" },
      { href: "/backlog", label: "Delivery Backlog", description: "Epics and user stories" },
    ],
  },
];

// Flattened view of navGroups — kept for code that just needs "every case-study
// page" without caring about grouping (e.g. the tour, active-route lookups).
export const navItems: NavItem[] = navGroups.flatMap((g) => g.items);

// Study materials: still public pages (same repo, same deploy), but grouped and
// visually separated in the nav because they support interview prep rather than
// present the product case study itself.
export const studyNavItems: NavItem[] = [
  { href: "/interview-prep", label: "Interview Prep", description: "Case-study Q&A, questions to ask, logistics" },
  { href: "/user-stories-guide", label: "Writing User Stories", description: "INVEST, Gherkin ACs, worked examples" },
  { href: "/industry-knowledge", label: "Industry & Regulatory Knowledge", description: "SWIFT, CLS, DvP models, CBDC" },
  { href: "/company-notes", label: "Company & Interviewer Notes", description: "Org structure, background, HSBC facts" },
  { href: "/ai-preparation", label: "Using AI to Prepare", description: "AI for prep, and AI in the product domain" },
];
