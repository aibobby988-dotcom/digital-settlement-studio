export interface NavItem {
  href: string;
  label: string;
  description: string;
}

export const navItems: NavItem[] = [
  { href: "/", label: "Executive Brief", description: "5-minute interview walkthrough" },
  { href: "/overview", label: "Overview", description: "Proposition summary and KPIs" },
  { href: "/treasury", label: "Tokenised Treasury", description: "Corporate treasury dashboard" },
  { href: "/bond-dvp", label: "Bond DvP Settlement", description: "Delivery versus Payment" },
  { href: "/fx-pvp", label: "FX PvP Settlement", description: "Payment versus Payment" },
  { href: "/architecture", label: "Architecture", description: "System design & decision flows" },
  { href: "/ecosystem", label: "Ecosystem & Market", description: "Build/buy/partner and market landscape" },
  { href: "/risk-controls", label: "Risk & Controls", description: "Control framework" },
  { href: "/roadmap", label: "Product Roadmap", description: "Phased delivery plan" },
  { href: "/backlog", label: "Delivery Backlog", description: "Epics and user stories" },
];

// Study materials: still public pages (same repo, same deploy), but grouped and
// visually separated in the nav because they support interview prep rather than
// present the product case study itself. Personal / behavioral prep content is
// deliberately NOT here — see the private doc instead.
export const studyNavItems: NavItem[] = [
  { href: "/interview-prep", label: "Interview Prep", description: "Case-study Q&A, questions to ask, logistics" },
  { href: "/industry-knowledge", label: "Industry & Regulatory Knowledge", description: "SWIFT, CLS, DvP models, CBDC" },
];
