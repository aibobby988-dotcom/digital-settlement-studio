export interface OrgNode {
  role: string;
  who: string;
  note?: string;
  url?: string;
}

export const orgChain: OrgNode[] = [
  {
    role: "Corporate & Institutional Banking",
    who: "The division. Two business lines below it matter for this role — one owns the cash, the other owns the assets.",
  },
  {
    role: "Global Payments Solutions (GPS) — the cash side",
    who: "Head: Manish Kohli, Group Head of GPS since October 2021, previously 24 years at Citi in transaction banking. Owns global payments, cash management, liquidity and payment/FX flows.",
  },
  {
    role: "Digital Money",
    who: "Vincent Lau, Global Head of Digital Money. Owns tokenised deposits, programmable and conditional payments, cross-border clearing, stablecoin propositions and the cash leg used to settle tokenised assets.",
    url: "https://www.fsdc.org.hk/media/2vtpabre/vincent-lau_bio.pdf",
  },
  {
    role: "Senior Product Manager — Digital Currencies",
    who: "This role. Inside Vincent's team, inside GPS, inside Corporate & Institutional Banking.",
  },
];

/** The other half of Corporate & Institutional Banking — the asset leg, and a partner rather than a rival. */
export const siblingDivision: OrgNode[] = [
  {
    role: "Markets & Securities Services (MSS) — the asset side",
    who: "Head: Patrick George, Global Head of MSS, at HSBC since 1996. Owns securities services, custody and market infrastructure.",
  },
  {
    role: "Digital Assets / HSBC Orion",
    who: "Tokenised bond issuance, asset servicing and securities settlement, plus digital-asset custody. Over US$3.5bn of digital-bond issuance, selected for the UK Digital Gilt pilot and approved to operate in the UK's Digital Securities Sandbox.",
  },
];

/** A verified senior name with an unconfirmed relationship to this role — worth knowing, not assuming. */
export const digitalCurrenciesLead = {
  name: "Lewis Lei Sun",
  title: "Global Head of Digital Currencies, Corporate & Institutional Banking",
  facts:
    "Hong Kong-based, joined HSBC in 2002, previously Regional Head of Product Management for Global Liquidity and Cash Management in Asia-Pacific. Under his digital-currencies remit HSBC became the first foreign bank in mainland China to offer e-CNY services. He was HSBC's spokesperson on the first live interbank tokenised-deposit transaction on Swift's ledger with Standard Chartered in August 2026.",
  whyItMatters:
    "This role is titled Senior Product Manager — Digital Currencies, and he is HSBC's Global Head of Digital Currencies. Public sources do not show how his function and Vincent Lau's Digital Money team fit together — shared remit, matrix, or separate lines. Do not guess in the room. It is a legitimate, well-informed question to ask, and knowing the name at all signals real research.",
};

export const orgInsight = {
  headline: "Why this structure is the whole strategy in one diagram",
  body:
    "A tokenised bond cannot settle safely without tokenised cash on the other side. Orion sits in Markets & Securities Services and owns the asset leg; Vincent's team sits in Global Payments Solutions and owns the cash leg. That is why Track 2 is legitimate rather than scope creep — you are not proposing to run Orion, you are proposing that the cash leg serves it, and everything like it. Get this boundary right and you sound like someone who already works there.",
};

export interface SiblingFunction {
  name: string;
  focus: string;
  relation: string;
}

export const siblingFunctions: SiblingFunction[] = [
  {
    name: "HSBC Orion",
    focus: "Digitally native bond issuance and capital-markets tokenisation",
    relation:
      "Under the same overall umbrella (Group Head of Digital Assets & Currencies) but organisationally closer to Capital Markets / Securities Services — not part of the Digital Money / GPS team this role sits in.",
  },
  {
    name: "Digital assets custody",
    focus: "Institutional custody for tokenised securities (built on Metaco's Harmonize platform)",
    relation:
      "Also under the same umbrella, run as a distinct custody/safekeeping function — adjacent to, not part of, the Digital Money team.",
  },
];

export interface ScopeMapping {
  page: string;
  alignment: "Core" | "Adjacent";
  note: string;
}

export const caseStudyScopeMapping: ScopeMapping[] = [
  {
    page: "Tokenised Treasury (flagship)",
    alignment: "Core",
    note:
      "A near-exact match to the real HSBC Tokenised Deposit Service — 24/7 tokenised-deposit movement for corporate treasury is squarely GPS / Digital Money territory.",
  },
  {
    page: "FX PvP Settlement",
    alignment: "Core",
    note:
      "Cross-border payments and PvP settlement sit directly in GPS's remit, and the JD names PvP settlement models explicitly.",
  },
  {
    page: "Bond DvP Settlement",
    alignment: "Core",
    note:
      "Split the two legs and this becomes core, not adjacent. Issuing and custodying the bond is Orion / Capital Markets territory. Providing the cash leg that settles against it is squarely Digital Money — and HSBC already proved exactly that in the Ensemble sandbox in August 2024, settling Orion digital bonds against its own tokenised deposits. Track 2 of the strategy extends that cash leg to assets HSBC does not issue. Be precise about which leg you are claiming.",
  },
];

export interface CareerStop {
  role: string;
  org: string;
  dates: string;
  note?: string;
}

export const careerTimeline: CareerStop[] = [
  {
    role: "Global Head of Digital Money",
    org: "HSBC, Global Payments Solutions",
    dates: "Jun 2024 – Present",
  },
  {
    role: "Global Head of Emerging Payments",
    org: "HSBC, Global Payments Solutions",
    dates: "Mar 2023 – Aug 2024",
  },
  {
    role: "Regional Head of International Payments — Asia Pacific",
    org: "HSBC, Global Liquidity & Cash Management",
    dates: "Jul 2018 – Mar 2023 · Hong Kong",
  },
  {
    role: "Country Product Manager, North Asia — Global Transaction Banking",
    org: "ANZ",
    dates: "2017 – Jul 2018 · HK / Taipei / Tokyo / Seoul",
  },
  {
    role: "Country Product Manager, Hong Kong — Global Transaction Banking",
    org: "ANZ",
    dates: "2014 – 2017",
  },
  {
    role: "Associate Director, Payment & Cash Management",
    org: "ANZ, Global Transaction Banking",
    dates: "Aug 2013 – 2014",
  },
  {
    role: "VP, Senior Product Manager — Treasury & Trade Services",
    org: "Citi",
    dates: "2009 – Aug 2013",
  },
  {
    role: "Assistant Vice President, APAC Payments & Cash Management",
    org: "HSBC, Global Banking & Markets",
    dates: "Aug 2005 – 2009 · Hong Kong",
    note: "An earlier, separate stint — before Citi and ANZ.",
  },
  {
    role: "Various roles — strategy consulting, SAP project management, e-commerce & internet startups",
    org: "Consultancy, utilities & high-tech firms",
    dates: "1998 – Aug 2005 · USA, Hong Kong",
  },
];

export const education = [
  "BSE, Computer Engineering — University of Michigan",
  "MS, Information Economics — University of Michigan, School of Information",
  "MS, E-Business Management — Chinese University of Hong Kong",
];

export const appointments = [
  "Appointed member, Policy Research Committee, Financial Services Development Council (FSDC) — Jan 2023–present",
  "Appointed member, Digital Economy Development Committee (DEDC), Digital Transformation Sub-group, HKSAR Government — Oct 2022–Nov 2023",
  "Appointed member, Working Group on eCNY / CBDC Implementation, FSDC — Sep 2020–May 2021",
];

export const currentFocusTags = [
  "Tokenisation",
  "Stablecoins",
  "CBDC",
  "Blockchain",
  "Fintech",
  "Payments",
  "Wholesale Settlement",
];

export interface Stat {
  value: string;
  label: string;
}

export const hkStats: Stat[] = [
  { value: "#1", label: "Total deposits, total assets & business banking in Hong Kong" },
  { value: "300k+", label: "Corporate clients in Hong Kong" },
  { value: "35%", label: "Of group profit (FY23 PBT) from Hong Kong" },
  { value: "USD 354Bn", label: "Assets managed across the wealth continuum in Asia" },
  { value: "60+", label: "Markets Hong Kong connects to" },
  { value: "6m+", label: "Retail customers in Hong Kong" },
];

export const globalStats: Stat[] = [
  { value: "200,000", label: "Colleagues globally" },
  { value: "40m+", label: "Customers across 64 countries & territories" },
  { value: "160 yrs", label: "In Hong Kong — opened for business March 1865" },
];

export const recentNews = [
  "HSBC facilitates world's largest digital bond issuance in Hong Kong",
  "HSBC survey finds Hong Kong businesses gain trade clarity, increase diversification",
  "HSBC continues to innovate mobile banking experience with fresh features",
  "HSBC opens first Premier Elite Wealth Centre and first commercial wealth centre in Hong Kong",
];

export const hsbcNewsroomUrl = "https://www.hsbc.com/news-and-views";
export const vincentLauBioUrl = "https://www.fsdc.org.hk/media/2vtpabre/vincent-lau_bio.pdf";
export const johnONeillProfileUrl =
  "https://www.financeasia.com/article/qa-john-oneill-group-head-of-digital-assets-and-currencies-at-hsbc/503385";

export interface ValueItem {
  title: string;
  description: string;
}

export const values: ValueItem[] = [
  { title: "We value difference", description: "Seeking out different perspectives" },
  { title: "We succeed together", description: "Collaborating across boundaries" },
  { title: "We take responsibility", description: "Holding ourselves accountable, taking the long view" },
  { title: "We get it done", description: "Moving at pace and making things happen" },
];

export const strategyPillars: ValueItem[] = [
  {
    title: "Focus on strength",
    description: "Leadership in scale markets, international connectivity, diversifying revenue with cost discipline",
  },
  {
    title: "Energise for growth",
    description: "Investing in people, leaders and colleague experience",
  },
  {
    title: "Digitise at scale",
    description: "Seamless, resilient, secure digital experience; distributed technologies; automate and simplify",
  },
  {
    title: "Transition to net zero",
    description: "Net zero in operations and supply chain by 2030",
  },
];
