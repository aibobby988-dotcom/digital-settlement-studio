export interface InvestPrinciple {
  letter: string;
  word: string;
  explanation: string;
}

export const investPrinciples: InvestPrinciple[] = [
  { letter: "I", word: "Independent", explanation: "Can be built and delivered without waiting on another unfinished story." },
  { letter: "N", word: "Negotiable", explanation: "A statement of intent, not a locked spec — the how is worked out with engineering." },
  { letter: "V", word: "Valuable", explanation: "Delivers something a real user or the business actually cares about, on its own." },
  { letter: "E", word: "Estimable", explanation: "The team has enough clarity to size it — if they can't estimate it, it's not ready." },
  { letter: "S", word: "Small", explanation: "Fits in a single sprint / iteration — if it doesn't, split it." },
  { letter: "T", word: "Testable", explanation: "Has acceptance criteria specific enough that everyone agrees when it's done." },
];

export const storyStructure = [
  {
    part: "As a [role]",
    purpose: "Names a specific user or persona — not 'as a user,' which hides who actually benefits and why.",
  },
  {
    part: "I want [capability]",
    purpose: "States the capability itself, described from the user's point of view, not the system's.",
  },
  {
    part: "so that [benefit]",
    purpose: "The reason this matters — the part most often dropped, and the part that lets anyone question whether the story is worth building at all.",
  },
];

export interface WorstBestExample {
  title: string;
  weak: string;
  weakProblems: string[];
  strong: string;
  strongCriteria: string[];
}

export const worstBestExamples: WorstBestExample[] = [
  {
    title: "A treasury transfer story",
    weak: "As a user, I want to transfer money so that I can move funds.",
    weakProblems: [
      "\"A user\" — which user? A treasury manager, an approver, an auditor?",
      "\"Transfer money\" — between what? Any two accounts, or only approved entities?",
      "\"So that I can move funds\" restates the want — it isn't a real reason.",
      "No acceptance criteria at all — impossible to know when it's actually done.",
    ],
    strong:
      "As a corporate treasury manager, I want to transfer tokenised USD deposits between approved group entities so that I can move liquidity outside traditional cut-off times.",
    strongCriteria: [
      "Only authorised users can initiate transfers",
      "Beneficiary must be an approved entity",
      "Sanctions and entitlement checks must complete before settlement",
      "Transfer is either atomically settled or fully rejected",
      "Receipt includes timestamp, unique transaction ID and audit events",
      "Balances and reports update after settlement",
    ],
  },
];

export interface AcFormat {
  name: string;
  when: string;
  example: string;
}

export const acFormats: AcFormat[] = [
  {
    name: "Given / When / Then (Gherkin)",
    when: "Best for a story with clear triggers and branching outcomes — especially anything with a pass/fail or success/exception path.",
    example:
      "Given a transfer has been initiated and screening is pending\nWhen the sanctions screening returns a true match\nThen the transfer is blocked and a compliance case is raised",
  },
  {
    name: "Plain checklist",
    when: "Best for a story that's a flat list of independent conditions, none of which depend on a specific trigger sequence.",
    example: "- Statement covers a selectable date range and entity\n- Export available in a standard machine-readable format\n- Statement totals match platform ledger balances",
  },
];

export const commonMistakes = [
  {
    mistake: "Writing acceptance criteria that describe implementation, not outcome",
    fix: "\"Uses a Redis cache for the balance lookup\" tells the team how, not what to verify — acceptance criteria should survive a completely different implementation.",
  },
  {
    mistake: "A story too big to estimate confidently",
    fix: "If the team's estimate ranges from 3 points to 20 depending on who's asked, the story is actually several stories wearing a trench coat — split it.",
  },
  {
    mistake: "Acceptance criteria that aren't actually testable",
    fix: "\"The system should be fast\" isn't testable. \"Settlement completes in under 60 seconds\" is.",
  },
  {
    mistake: "Losing the 'so that' clause",
    fix: "Without it, nobody reviewing the backlog later can tell whether the story is still worth building, or was solving a problem that no longer exists.",
  },
  {
    mistake: "Confusing a story with a task",
    fix: "\"Update the database schema\" is a task, not a story — it has no user-visible value on its own. It probably belongs inside a story as a hidden implementation step, not as its own backlog item.",
  },
];
