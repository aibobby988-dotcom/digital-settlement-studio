export interface AiUseCase {
  title: string;
  description: string;
  caution?: string;
}

export const aiPrepUseCases: AiUseCase[] = [
  {
    title: "Research the company, role and interviewer",
    description:
      "Compile a company's recent public announcements, an interviewer's public professional background, and the regulatory or market context for the role — the research this entire site is built from. Turns hours of manual searching into a focused session.",
    caution:
      "Verify anything specific before repeating it in an interview — cross-check dates, figures and claims against primary sources rather than trusting a single AI-generated summary.",
  },
  {
    title: "Build a portfolio artifact, not just notes",
    description:
      "Turn a case-study idea into a working prototype, a set of diagrams, or a structured document — something you can actually show, not just describe. This entire site was built this way in a single working session.",
  },
  {
    title: "Pressure-test your answers before the room does",
    description:
      "Ask an AI to play a skeptical interviewer against your case study or your CV — it will find the same gaps a real interviewer would (unverified claims, weak sequencing logic, an unaddressed risk) while the stakes are still zero.",
  },
  {
    title: "Structure messy personal history into STAR stories",
    description:
      "Describe a real situation in your own rambling words and have it restructured into a tight Situation/Task/Action/Result shape — useful for finding the actual story inside a memory, not for inventing one that isn't true.",
    caution:
      "The story has to be true and specific to you. An AI can help you structure and tighten a real memory; it can't manufacture the lived detail that makes an answer credible under a follow-up question.",
  },
  {
    title: "Learn unfamiliar domain knowledge fast",
    description:
      "Get a working primer on a genuinely unfamiliar area — a settlement standard, a regulatory regime, a competitor's product — fast enough to hold a real conversation about it, even if you'd never encountered the term before that morning.",
  },
  {
    title: "Rehearse out loud, not just read",
    description:
      "Reading a prepared answer and saying it smoothly under time pressure are different skills. Time yourself against a mock question, or have an AI ask you questions cold, out of order, the way an actual interview will.",
  },
];

export const aiPrepPrinciples = [
  "Use it to prepare faster, not to sound like someone you're not — an interviewer will always ask a follow-up, and only your own real knowledge survives that.",
  "Fact-check anything specific (dates, figures, named initiatives) before repeating it confidently — an AI can be wrong in a way that's more dangerous than not knowing, because it sounds certain.",
  "Never let it write your personal story or your 'why this role' answer word-for-word — those need to survive being asked a different way than you rehearsed.",
  "The output is only as good as what you tell it about yourself — a generic prompt gets a generic answer; specific context gets something you can actually use.",
];

export interface DomainAiTopic {
  topic: string;
  explanation: string;
}

export const aiInDomain: DomainAiTopic[] = [
  {
    topic: "Agentic payments",
    explanation:
      "An AI agent (an ERP system, a treasury bot, an autonomous workflow) initiating a payment instruction on a company's behalf, rather than a human clicking submit. This case study's risk framework treats this explicitly — scoped API permissions, a policy engine, payment limits, maker-checker approval an automated caller can't self-satisfy, and a human escalation threshold. The interview will likely test whether you understand this is a control design problem, not a reason to avoid automation.",
  },
  {
    topic: "AI/ML in financial-crime screening",
    explanation:
      "Machine-learning models increasingly drive sanctions screening, transaction monitoring and wallet risk-scoring — flagging patterns a rules-only system would miss, at the cost of needing careful false-positive tuning and explainability for regulators.",
  },
  {
    topic: "AI-assisted market and competitor intelligence",
    explanation:
      "Using AI/LLM agents to continuously track competitor product launches, regulatory filings and market movements — a real, current use case in digital-asset teams that need to move faster than manual research allows.",
  },
  {
    topic: "Where AI is NOT the point",
    explanation:
      "In a JD like this one, DLT/blockchain/AI are listed as enabling technologies for a client and settlement proposition — not as the product itself. A strong answer keeps technology in that supporting role rather than treating 'we use AI' as the pitch.",
  },
];
