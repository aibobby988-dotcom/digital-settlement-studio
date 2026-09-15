/**
 * What a 45-minute conversation with the Global Head of Digital Money is most
 * likely to test, with answers checked against the facts elsewhere on this site.
 *
 * Where the candidate's own draft answer was imprecise, the correction is stated
 * rather than smoothed over — an answer that sounds good and is wrong is worse
 * than no answer.
 */

export interface VincentTest {
  n: number;
  test: string;
  why: string;
  answer: string;
  checked: string;
  watchOut?: string;
}

export const vincentTests: VincentTest[] = [
  {
    n: 1,
    test: "Do you understand tokenised deposits as commercial-bank money, not a stablecoin?",
    why: "This is the fastest way to find out whether someone actually knows the product or has read about tokenisation. Conflating the two is disqualifying in this specific team.",
    answer:
      "A tokenised deposit is an existing deposit liability on the bank's balance sheet, wrapped in a token layer on a distributed ledger. The client's legal claim is unchanged — it is still a deposit, still inside the prudential and deposit-protection framework, and it can still pay interest. There is no separate reserve pool and therefore no de-pegging risk, because nothing is being pegged: the token is the deposit. A stablecoin is a distinct instrument issued against a segregated reserve, under its own licensing regime. The point of tokenised deposits is not to introduce a new asset class to the balance sheet — it is to make the money already there programmable and always-on.",
    checked:
      "Consistent with the Plain English entries for tokenised deposit and stablecoin, and with HSBC receiving a separate Hong Kong stablecoin licence in April 2026 — which itself proves the two are different instruments requiring different permissions.",
  },
  {
    n: 2,
    test: "Can you articulate a real corporate-treasury use case?",
    why: "Tests whether you think like a product manager with a buyer, or like an enthusiast with a technology. The answer must be in the treasurer's language.",
    answer:
      "A United States manufacturer needs to fund a EUR 20m supplier invoice from its European subsidiary. Its treasury sells dollars for euros with its bank. Without payment-versus-payment, the dollar leg leaves New York in US hours while the euro leg may not credit until hours later or the next morning. In that window the company has paid out and holds nothing — if the counterparty fails, the dollars are gone and the supplier is still unpaid, halting production. With payment-versus-payment, both legs are funded into a protected settlement position, verified clear of compliance holds, and released simultaneously. The treasurer's benefit is not blockchain; it is that the exposure window disappears and less intraday liquidity is tied up waiting.",
    checked:
      "Aligns with the Herstatt risk entry in Plain English and the FX PvP page. Note that the mechanism described — an escrow-style settlement agent releasing both legs together — is what CLS already does at scale.",
    watchOut:
      "Do not present this as something only tokenisation can solve. CLS has solved it for major currency pairs since 2002. The honest framing is that the gap is in corridors and currencies CLS does not cover well, and in giving a corporate client direct access rather than access through its bank's own settlement arrangements.",
  },
  {
    n: 3,
    test: "Can you move from pilot to controls to client rollout to revenue?",
    why: "The difference between someone who can run a proof of concept and someone who can commercialise. The job description leads with commercialisation for a reason.",
    answer:
      "A successful pilot is not a transaction that settled. It is evidence on five things: that a client got value they can measure, that the arrangement is legally enforceable in that corridor, that operations can actually run it including the failure path, that the controls were tested rather than designed, and that there is a credible path to economics that work at scale. I would define those as gates before the pilot starts, not after, and I would be willing to stop at the gate. On revenue, I would be explicit that the fees are the smaller half — the case rests on retained operating balances, which is why I would price transactions to remove the barrier to migration rather than to maximise fee income.",
    checked:
      "Matches the go/no-go gates on the Roadmap and the unit economics on the Commercial Model, where retained balances are roughly five times fee revenue.",
  },
  {
    n: 4,
    test: "Do you understand delivery-versus-payment, payment-versus-payment and settlement finality?",
    why: "The job description names SWIFT, CLS and both settlement models explicitly. This is the most directly testable requirement on the posting.",
    answer:
      "Both models remove principal risk by linking two obligations so that one transfers if and only if the other does. Delivery-versus-payment is asset against cash — buying a tokenised bond or fund unit. Payment-versus-payment is cash against cash — the two legs of a currency trade. Tokenised deposits are the cash leg in both cases; the models are how that cash is exchanged safely. Separately, and more importantly, atomicity is not finality. A ledger can show both legs as irrevocably complete while the law of that jurisdiction has not yet agreed the transfer survives an insolvency. That is why legal finality is a corridor-by-corridor gate in my roadmap rather than an assumption.",
    checked:
      "Consistent with the Plain English entries for DvP, PvP, atomic settlement and legal finality, and with the BIS delivery-versus-payment models on the Industry Knowledge page.",
    watchOut:
      "The atomicity-versus-finality distinction is the single highest-value sentence you can say in this interview. Most candidates treat them as the same thing.",
  },
  {
    n: 5,
    test: "Can you work across GPS, Orion, Technology, Risk, Legal, Compliance and clients?",
    why: "The role owns an outcome without owning the teams. This is the daily reality of the job, and the thing a director most needs to believe about a hire.",
    answer:
      "I would start from the boundary rather than the ambition. Orion owns the asset leg in Markets & Securities Services; my team owns the cash leg in Global Payments Solutions. I am not proposing to run their platform — I am proposing that our cash leg serves it, and everything like it. With the control functions I would involve them at proposition design rather than at approval, because a financial-crime or legal objection raised late can invalidate the settlement design itself. Practically that means designing the unhappy path with Financial Crime before building the happy path, and treating the legal opinion per corridor as a gate ahead of build spend rather than a parallel workstream.",
    checked:
      "Matches the stakeholder map on the Commercial Model, where Treasury/ALM, GPS sales, Financial Crime and Legal are each flagged as able to stop the product outright.",
  },
];

export interface PreparedAnswer {
  question: string;
  answer: string;
  note?: string;
}

export const preparedAnswers: PreparedAnswer[] = [
  {
    question: "Which digital-currency use case would you prioritise?",
    answer:
      "Intrabank corporate treasury liquidity, extended into automated cash pooling. The pain is specific and measurable — cut-offs, trapped cash across time zones, manual reconciliation. The benefit is measurable in the same terms: faster movement, availability outside banking windows, real-time visibility. The complexity is materially lower than attempting a public-chain or multi-bank product first, because the bank controls the participants, the liability and the exception process. And it is aligned with where the Tokenised Deposit Service already is, so it is an extension rather than a new platform.",
  },
  {
    question: "How would you assess a client proposal?",
    answer:
      "Strategic fit, the client's actual pain point, market size beyond that one client, regulatory feasibility in that corridor, which settlement asset is used, the end-to-end operating model including exceptions, the risk profile, implementation dependencies, the revenue model and whether it scales. I would not approve a bespoke build simply because it is technically possible — the first custom feature is a permanent maintenance cost that slows every client after it.",
  },
  {
    question: "What are the biggest blockers to adoption?",
    answer:
      "Three, in order. Unclear legal treatment and settlement finality across jurisdictions, which caps where you can operate regardless of technology. Insufficient client benefit versus existing rails — if a wire is good enough for that client's flow, tokenisation is a solution looking for a problem. And liquidity fragmentation: without a common settlement asset and enough counterparties, each network is an island and the network effect never arrives.",
  },
  {
    question: "How would you work with regulators?",
    answer:
      "Early, transparently and with evidence. I would frame the conversation around the client use case, the legal structure, the risk controls, data flows, settlement finality, resilience and the safeguards around the pilot — not around the technology. The aim is to co-design a controlled environment that gives the regulator confidence and generates the evidence needed to scale. In Hong Kong that means engaging through the Monetary Authority's own programmes rather than around them.",
  },
  {
    question: "How would you launch a digital-currency product?",
    answer:
      "Narrow first client, narrow corridor, full controls. One anchor client with genuine volume, in a corridor where the legal opinion already exists, with the exception path designed before the happy path. Then prove the five pilot gates — client value, legal enforceability, operational readiness, tested controls, credible economics — before widening either the client list or the corridor list. Widening both at once is how these programmes stall.",
  },
];

export const experienceGapAnswer = {
  question: "The posting asks for substantial wholesale payments and transaction banking experience.",
  answer:
    "My strongest experience is in digital assets and product and market execution. I recognise that wholesale settlement infrastructure has a specific operational and regulatory depth, and I have been deliberately building that: ISO 20022, delivery-versus-payment and payment-versus-payment models, settlement finality, and the institutional controls digital money requires. I would bring the external-market lens and partner closely with HSBC's established payments, operations and risk experts rather than pretend to replace them.",
  whyItWorks:
    "It concedes the gap in one sentence, evidences the effort to close it with specifics rather than claims, and positions the missing part as complementary. Attempting to claim treasury depth you do not have collapses on the first follow-up question.",
};

export const whatTheyAreReallyHiring = [
  "Someone who can turn market and client demand into a commercial product proposition",
  "Someone who can decide which digital-currency use cases are worth pursuing, and say no to the rest",
  "Someone who can navigate bank governance and get Risk, Legal and Compliance comfortable",
  "Someone who can lead delivery without needing to write production code",
  "Someone who can hold a room with senior clients, regulators, fintechs and internal executives",
  "Someone who commercialises rather than runs another proof of concept",
];

export const closingQuestions = [
  {
    q: "How does the Digital Money team work with Lewis Sun's Digital Currencies function in Corporate & Institutional Banking — and where would this role sit between them?",
    why: "The role title says Digital Currencies, Lewis Sun is Global Head of Digital Currencies, and the hiring manager runs Digital Money. Public sources do not explain the relationship. Asking shows you researched the organisation deeply enough to notice, and the answer tells you who you would actually work with day to day.",
  },
  {
    q: "Where do you see the hardest current constraint — regulation, interoperability, liquidity, client adoption, or operating-model readiness?",
    why: "Excellent question. It is genuinely open, it signals you know all five are real, and his answer tells you exactly what the job will actually be about in year one.",
  },
  {
    q: "Does this role carry direct reports, or is it an individual-contributor mandate leading through influence?",
    why: "Legitimate and important — the site's own read is that a Band 4 title usually signals a senior individual contributor who owns an outcome. Worth confirming rather than assuming.",
  },
  {
    q: "How many further stages are there, and who else would I meet?",
    why: "Ask at the very end. Practical, shows you are still engaged in the process, and tells you how much runway you have to fix anything that went badly.",
  },
];
