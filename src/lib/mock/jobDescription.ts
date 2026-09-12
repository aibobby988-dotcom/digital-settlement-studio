/**
 * The verbatim job description, stored so every claim on this site can be traced
 * back to the actual posting rather than to a paraphrase.
 *
 * Source: HSBC posting for Senior Product Manager - Digital Currencies (GCB4),
 * requisition 56434, as supplied by the candidate.
 */

export const jdTitle = "Senior Product Manager - Digital Currencies";
export const jdRequisition = "Requisition 56434 · GCB4 · Global Payments Solutions, Hong Kong";

export interface JdLine {
  id: string;
  /** The heading exactly as written in the posting. */
  heading: string;
  /** The body text exactly as written in the posting. */
  text: string;
}

/** "In this role you will:" — the responsibilities. */
export const jdResponsibilities: JdLine[] = [
  {
    id: "R1",
    heading: "Global product ownership.",
    text: "Be responsible for the digital currencies and settlement services product portfolio and develop client propositions enabled by these services.",
  },
  {
    id: "R2",
    heading: "Value proposition development.",
    text: "Identify and evaluate market trends in digital currencies, emerging payments & digital asset opportunities and develop a go-to-market strategy.",
  },
  {
    id: "R3",
    heading: "New product development and roll out.",
    text: "Develop and commercialize and digital currencies & emerging payments products enabled by blockchain, AI, and evolving technologies.",
  },
  {
    id: "R4",
    heading: "Customer and deal solutioning.",
    text: "Lead product solutioning for specific Request for Proposals and bespoke client requirements.",
  },
  {
    id: "R5",
    heading: "Market engagement.",
    text: "Support internal teams and external market participants, including regulators, in relation to consultation, proof-of-concept, pilot, and other industry collaboration.",
  },
  {
    id: "R6",
    heading: "Risk Management and product reviews.",
    text: "Assess and address inherent and residue risks of new digital currencies products.",
  },
  {
    id: "R7",
    heading: "Marketing and though-leadership.",
    text: "Create and respond to media or marketing opportunities to promote HSBC's leading position in digital currencies agenda.",
  },
];

/** "To be successful you will need:" — the requirements. */
export const jdRequirements: JdLine[] = [
  {
    id: "Q1",
    heading: "Client understanding.",
    text: "Robust understanding of the wholesale payment client base, especially with regards to digital currencies and emerging payments requirements.",
  },
  {
    id: "Q2",
    heading: "Emerging payments landscape.",
    text: "Keen appreciation and insights of digital currencies & assets market trends, competition offerings, potential disruptors, and evolving regulations and technologies.",
  },
  {
    id: "Q3",
    heading: "Technology savvy.",
    text: "Good knowledge of technologies including DLT, Blockchain, DeFi, AI/ML that drive new payment systems, digital central bank moneys, crypto currencies and digital asset platforms. Implementation experiences in one or more areas in API, distributed ledger technologies, and agentic payments in wholesale transaction banking is a strong advantage.",
  },
  {
    id: "Q4",
    heading: "Industry and market standards.",
    text: "In depth understanding on payments industry standards, settlement message type and format used for B2B payments and wholesale settlement, including SWIFT, CLS and various PvP and DVP settlement models. Familiarity with various settlement mechanisms for tokenised assets and financial market products also an advantage.",
  },
  {
    id: "Q5",
    heading: "Excellent interpersonal skills.",
    text: "Ability to effectively work in a diverse and multicultural team with remote working arrangement. Effective communicator across all levels, functional groups and geographies.",
  },
  {
    id: "Q6",
    heading: "Relevant experiences.",
    text: "Minimum 8 years of experience in B2B/Wholesale Payments, Cash Management, or Transaction Banking required. Additional experience gained from DeFi, digital currencies & assets, central banks, stock and securities exchanges, fintechs, and wallet or card scheme settlement would be an advantage.",
  },
  {
    id: "Q7",
    heading: "Language proficiencies.",
    text: "Must have excellent English verbal and written communication skills, mastery of Mandarin Chinese would be an advantage.",
  },
];

/**
 * Words that appear in the posting itself and therefore must be handled
 * confidently in the room. Ordered roughly by how likely they are to be probed.
 */
export const jdNamedTerms: Array<{ term: string; where: string }> = [
  { term: "DLT", where: "Technology savvy (Q3)" },
  { term: "Blockchain", where: "Technology savvy (Q3)" },
  { term: "DeFi", where: "Technology savvy (Q3)" },
  { term: "AI/ML", where: "Technology savvy (Q3)" },
  { term: "Agentic payments", where: "Technology savvy (Q3) - named as a strong advantage" },
  { term: "API", where: "Technology savvy (Q3)" },
  { term: "SWIFT", where: "Industry and market standards (Q4)" },
  { term: "CLS", where: "Industry and market standards (Q4)" },
  { term: "PvP", where: "Industry and market standards (Q4)" },
  { term: "DvP", where: "Industry and market standards (Q4)" },
  { term: "RFP", where: "Customer and deal solutioning (R4)" },
];
