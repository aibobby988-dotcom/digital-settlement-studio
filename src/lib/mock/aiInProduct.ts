export interface AiUseCase {
  area: string;
  whatItDoes: string;
  example: string;
  humanBoundary: string;
  value: string;
  risk: string;
  maturity: "Deployable today" | "Near term" | "Exploratory";
}

/**
 * Where artificial intelligence genuinely helps inside a settlement product.
 * Deliberately ordered from safest to most speculative, because the credible
 * position in a bank is "start where a mistake is recoverable".
 */
export const aiUseCases: AiUseCase[] = [
  {
    area: "Reducing false alarms in sanctions screening",
    whatItDoes:
      "Screening systems flag any name resembling one on a government watchlist. The overwhelming majority are innocent coincidences, and each one costs an analyst time. Machine learning ranks alerts by genuine likelihood so analysts open the dangerous ones first.",
    example:
      "A payment to 'Ming Liu Trading' is flagged because a sanctioned individual shares a similar name. The model weighs country, payment history, counterparty age and context, scores it as very low risk, and pushes it to the bottom of the queue instead of stopping a client's cash for four hours.",
    humanBoundary:
      "The model re-orders the queue. It never clears an alert by itself, and it can never un-flag a true watchlist hit.",
    value:
      "Faster release of legitimate payments and analyst attention spent where the real risk is. This is the clearest near-term financial case in the whole list.",
    risk:
      "If the ranking is wrong in the dangerous direction, a genuine hit sits unexamined at the bottom of a queue. Mitigated by never letting the score close an alert, and by sampling low-ranked alerts for audit.",
    maturity: "Deployable today",
  },
  {
    area: "Explaining exceptions to clients in plain language",
    whatItDoes:
      "When a transfer is held, a language model turns the internal case record into a clear client-facing explanation of what happened and what comes next — without disclosing anything confidential about the screening logic.",
    example:
      "Instead of 'TXN-4471 STATUS: HELD — RULE SC_0142', the client sees: 'Your transfer is under a standard compliance review. Reference 4471. We expect an update by 14:00 today and no funds have left your account.'",
    humanBoundary:
      "Templates and disclosure rules are fixed by compliance. The model fills an approved shape; it does not decide what may be revealed.",
    value:
      "Fewer inbound support calls and materially better client experience at the exact moment trust is most fragile.",
    risk:
      "A model that over-explains could leak how detection rules work, which is a financial-crime risk. Mitigated by constraining output to pre-approved templates rather than free generation.",
    maturity: "Deployable today",
  },
  {
    area: "Predicting liquidity needs before the client asks",
    whatItDoes:
      "Models learn a corporate group's cash rhythms — payroll cycles, tax dates, seasonal supplier runs — and forecast which entity will be short before it happens.",
    example:
      "The system notices the Singapore entity has run short every 27th for six months, and prompts the treasurer on the 25th: 'Singapore is likely to need approximately US$2m by Thursday. Prepare a transfer?' The treasurer decides.",
    humanBoundary:
      "It proposes. The treasurer approves. A forecast never triggers a movement of money on its own.",
    value:
      "Turns the product from a tool the client must remember to use into one that earns its place daily. Strong retention argument.",
    risk:
      "Over-confident forecasts could encourage a client to move cash they actually need where it is. Mitigated by always showing the forecast's confidence and the reasoning behind it.",
    maturity: "Near term",
  },
  {
    area: "Drafting deal and proposal responses",
    whatItDoes:
      "Retrieval-based assistance for responding to a Request for Proposal: pulling approved product answers, prior responses and control documentation into a first draft for a specialist to correct.",
    example:
      "A 200-question proposal from a multinational arrives. The assistant drafts answers from previously approved material and flags the twelve questions with no approved precedent, so humans spend their time only on genuinely new ground.",
    humanBoundary:
      "Nothing reaches a client without named human review. The assistant is explicitly a drafting tool, not an approver.",
    value:
      "Directly addresses the deal-solutioning responsibility in the job description, and shortens the slowest part of the commercial cycle.",
    risk:
      "A fabricated capability claim in a contractual document is a serious commercial and legal exposure. Mitigated by retrieval from approved sources only, never open-ended generation.",
    maturity: "Deployable today",
  },
  {
    area: "Agentic payments",
    whatItDoes:
      "Software agents that initiate payments on a client's behalf within limits the client set in advance — the specific capability the job description names as a strong advantage. The agent holds a delegated mandate: what it may pay, to whom, up to how much, and how often.",
    example:
      "A company authorises an agent to top up its Singapore entity automatically whenever the balance falls below US$500,000, capped at US$2m per day, only to its own pre-approved entities. The agent acts inside that envelope and cannot step outside it.",
    humanBoundary:
      "The mandate is the control. A human sets the limits, the counterparties and the kill switch; the agent operates strictly inside them and every action is attributed to the mandate that authorised it.",
    value:
      "This is where digital money becomes genuinely different from a faster wire — money that can move under programmatic rules, safely, with an auditable reason for every movement.",
    risk:
      "The hardest question in the whole domain: who is liable when an agent pays the wrong party? A compromised agent could drain accounts at machine speed. This is why mandates, velocity caps and an instant revocation path matter more than the agent's intelligence.",
    maturity: "Exploratory",
  },
  {
    area: "Detecting reconciliation breaks earlier",
    whatItDoes:
      "Anomaly detection watching the token ledger against the core banking record, catching divergence patterns before a scheduled end-of-day reconciliation would surface them.",
    example:
      "Balances match at every checkpoint, but the model notices settlement confirmations arriving 40% slower than normal for one corridor — an early symptom of an upstream problem, spotted hours before it would become a break.",
    humanBoundary:
      "It raises an operational alert for investigation. It never adjusts a balance or writes a correcting entry.",
    value:
      "Shortens the window in which a problem compounds. In settlement, the cost of a break grows with how long it goes unnoticed.",
    risk:
      "Alert fatigue if tuned too sensitively, causing real anomalies to be ignored. Mitigated by tracking the ratio of actioned to ignored alerts as a product metric.",
    maturity: "Near term",
  },
];

export interface AiControl {
  control: string;
  why: string;
}

/** The control framework that makes any of the above acceptable inside a bank. */
export const aiControls: AiControl[] = [
  {
    control: "Artificial intelligence never has payment authority",
    why: "It prepares, ranks, drafts and predicts. A human or a pre-authorised mandate approves. This single line answers most risk objections before they are raised, and it is the position to state first.",
  },
  {
    control: "Every model output is attributable and reproducible",
    why: "If a model influenced a decision, the record must show which model, which version, and what evidence it saw. Without that, you cannot answer a regulator asking why a payment was treated the way it was.",
  },
  {
    control: "Explainability scales with consequence",
    why: "Ranking a queue needs less justification than holding a client's money. The more severe the consequence, the more the reasoning must be inspectable by a person.",
  },
  {
    control: "A tested path to switch it off",
    why: "Every model needs a proven fallback to the manual process, rehearsed rather than assumed. Resilience testing is a roadmap gate for a reason.",
  },
  {
    control: "Bias and drift are monitored as live risks",
    why: "A screening model that quietly becomes harsher on payments from one region creates fair-treatment exposure. Models degrade as the world changes, so monitoring is ongoing, not a launch checkbox.",
  },
  {
    control: "Client data boundaries are explicit",
    why: "Corporate treasury data is highly sensitive. Whether it may train shared models, and whether it can leave a jurisdiction, are product decisions with legal consequences — not technical details to delegate.",
  },
];

export const aiInterviewAngles = [
  {
    question: "Why is artificial intelligence relevant to a settlement product at all?",
    answer:
      "Because settlement is mostly checking, not moving. The movement is nearly instant; the time is spent on screening, funds verification, exception handling and reconciliation. That is exactly the shape of work models are good at — high volume, pattern-heavy, with a human needed only at the point of consequence.",
  },
  {
    question: "What is the difference between automation and an agent?",
    answer:
      "Automation follows a fixed rule you wrote. An agent pursues a goal you set and chooses its own steps. That difference is the entire risk conversation: with automation you review the rule, with an agent you must constrain the space it may act in, because you cannot enumerate what it will do in advance.",
  },
  {
    question: "Where would you refuse to use it?",
    answer:
      "I would not let a model make the final sanctions decision, and I would not let it approve a payment outside a pre-agreed mandate. Both create accountability I cannot explain to a regulator. Refusing specific uses is what makes the proposed uses credible.",
  },
  {
    question: "How does this connect to tokenised money specifically?",
    answer:
      "Programmable money and software agents are complements. An agent needs money that can move under rules, around the clock, with instant confirmation — which is what a tokenised deposit provides and a batch-based legacy rail does not. That is the real long-term argument for tokenisation, beyond speed.",
  },
];
