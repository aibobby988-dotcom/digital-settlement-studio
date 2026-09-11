export interface BehavioralQuestion {
  question: string;
  tests: string;
  framework: string;
}

export const behavioralQuestions: BehavioralQuestion[] = [
  {
    question: "Tell me about yourself.",
    tests: "Whether you can summarise a career into a tight, relevant narrative — not a full CV recital.",
    framework:
      "Three parts, under 90 seconds: (1) where your experience sits today, (2) the thread connecting your last few roles to this one specifically, (3) why that makes you want this mandate now. Anchor it to this role's actual scope, not a generic life story — cut anything that doesn't build toward 'and that's why I'm here.'",
  },
  {
    question: "Why are you interested in digital currencies, and why this role specifically?",
    tests: "Genuine conviction versus a rehearsed line — interviewers can usually tell the difference.",
    framework:
      "Avoid generic 'blockchain is the future' framing. Give one specific, concrete reason tied to this employer's actual public activity (cite something real and current, not a vague trend), and one reason tied to your own trajectory — why this is the next logical step for you, not just an interesting industry.",
  },
  {
    question: "Tell me about a time you influenced a decision without having direct authority over the people involved.",
    tests: "Cross-functional influence — the single most tested skill in a matrixed, senior product role with no direct reports over Risk, Legal, Engineering or Sales.",
    framework:
      "Use STAR. The strongest version names the specific tension (why the other function's default position conflicted with what you needed), the concrete argument or evidence that changed their view — not just 'I built a relationship' — and a measurable outcome. Avoid stories where you simply had the more senior title; the whole point is authority you didn't have.",
  },
  {
    question: "Describe a product or project that didn't go as planned. What did you learn?",
    tests: "Self-awareness and whether failure actually changed your behaviour afterward, not just whether you can name a mistake.",
    framework:
      "Pick a real failure, not a humblebrag disguised as one ('I worked too hard'). State plainly what went wrong and your role in it — don't diffuse blame onto the team or circumstances. The result should be a specific, concrete change to how you operate now, not a vague 'I learned to communicate better.'",
  },
  {
    question: "How do you decide whether a new technology is worth building a product around, versus a solution looking for a problem?",
    tests: "Product judgment and resistance to technology-led thinking — a common failure mode in emerging-tech product roles.",
    framework:
      "Lead with the client problem, not the technology. A strong answer describes a concrete test: can you name the specific, measurable pain point this solves for a real client segment, and would that segment pay for or adopt it if the underlying technology were invisible to them? If you can't answer that, the technology is the point, not the client.",
  },
  {
    question: "How would you explain a genuinely technical concept — atomic settlement, DvP, tokenisation — to a senior non-technical stakeholder?",
    tests: "Executive communication — whether you can compress complexity without losing the substance that actually matters for their decision.",
    framework:
      "Use a concrete analogy grounded in something the stakeholder already trusts (e.g. 'it's the same guarantee as a bank transfer where the money and the confirmation happen in the same instant, not one after the other'), then state the one business implication that follows from it — the risk it removes or the capability it enables. Skip the mechanism unless asked.",
  },
  {
    question: "How do you balance commercial pressure to move fast against regulatory or risk caution?",
    tests: "Risk judgment under real-world pressure — not whether you can recite 'compliance is important.'",
    framework:
      "Give a concrete example (or a clear hypothetical framework if you don't have one) showing you don't treat this as a binary. Strong answers separate what's genuinely a hard regulatory line from what's a judgment call on pace, and show you know which is which — and that you escalate the former rather than quietly deciding it yourself.",
  },
  {
    question: "Tell me about a time you had to say no to a client, a senior stakeholder, or your own team.",
    tests: "Backbone under social or hierarchical pressure — a real test of whether you'll actually push back when it matters, not just agree to keep the peace.",
    framework:
      "The story should include what made saying yes tempting (deadline pressure, a senior voice, revenue on the line) and what you actually said instead of yes — vague pushback doesn't count. End with how the relationship held up afterward, since a good 'no' shouldn't burn the relationship.",
  },
  {
    question: "Where do you see this industry in five years, and what would you be wrong about?",
    tests: "Whether your conviction comes with genuine intellectual humility, or is just confident-sounding prediction.",
    framework:
      "Give a real, specific point of view — vague hedging reads worse than a confident wrong answer. Then genuinely engage with the second half: name a real scenario that would break your prediction, not a token caveat. Interviewers remember candidates who can argue against themselves.",
  },
  {
    question: "What's a common misconception about this space that you'd correct?",
    tests: "Depth versus surface-level industry familiarity — this is where candidates who've only read about the space (versus worked in it) usually get caught out.",
    framework:
      "Pick something genuinely non-obvious and be precise about the correction (e.g. a term two people in this space often conflate, or a widely repeated claim that's technically wrong). A generic answer here ('people think crypto and blockchain are the same thing') signals surface knowledge; a precise, slightly technical correction signals the opposite.",
  },
];

export const behavioralGeneralAdvice = [
  "Answer the question asked, not the question you wish they'd asked — a great story for the wrong prompt reads as evasive.",
  "Specific numbers and concrete details make a story credible; vague scale ('a big project,' 'significant impact') makes it forgettable.",
  "Keep each answer under 90 seconds unless asked to go deeper — a senior interviewer will ask a follow-up if they want more.",
  "Prepare 4-5 stories total, not one per possible question — most behavioral questions can be answered by the same well-chosen story from a different angle.",
];
