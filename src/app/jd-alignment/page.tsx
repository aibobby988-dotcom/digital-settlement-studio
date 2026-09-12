import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  BriefcaseBusiness,
  CircleAlert,
  Layers,
  Lightbulb,
  MessageSquareText,
  Route,
  Scale,
} from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader } from "@/components/ui/Card";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { Explain } from "@/components/ui/Explain";
import {
  jdNamedTerms,
  jdRequirements,
  jdRequisition,
  jdResponsibilities,
  jdTitle,
} from "@/lib/mock/jobDescription";

type Fit = "Core" | "Strong support" | "Supporting" | "Bring personal evidence";

const fitTone: Record<Fit, "brand" | "emerald" | "neutral" | "amber"> = {
  Core: "brand",
  "Strong support": "emerald",
  Supporting: "neutral",
  "Bring personal evidence": "amber",
};

type Theme = {
  theme: string;
  meaning: string;
  pages: Array<{ label: string; href: string }>;
  fit: Fit;
  demonstrates: string;
  demo: string;
  practiceLine: string;
  advantages: string[];
  tradeOffs: string[];
  followUp: string;
};

const jdThemes: Theme[] = [
  {
    theme: "Digital-money product strategy and roadmap ownership",
    meaning: "Set a credible destination, make hard sequencing choices and turn it into a phased delivery plan with clear gates.",
    pages: [{ label: "Executive Brief", href: "/" }, { label: "Product Roadmap", href: "/roadmap" }, { label: "Building 0 to 1", href: "/zero-to-one" }],
    fit: "Core",
    demonstrates: "You can turn a broad innovation mandate into a focused first product, a measurable business case and a sequence that does not ask the bank to take every risk on day one.",
    demo: "Open Product Roadmap. Walk from intrabank HKD treasury transfers to controlled tokenised-asset settlement, then only later to multi-bank PvP. Call out the client, legal, operations and resilience gates between phases.",
    practiceLine: "I would start where the bank can control the liability, participants and exception process: a high-frequency corporate liquidity use case. The roadmap earns the right to add DvP or cross-bank interoperability only after adoption and control evidence are real.",
    advantages: ["Shows commercial judgement, not technology enthusiasm.", "Creates clear no-go gates before cost and risk compound."],
    tradeOffs: ["A narrower first release can feel less visionary to sponsors.", "Phased delivery needs patience while revenue proof is built."],
    followUp: "What exact metrics would make you release the next phase, and who has the authority to stop it?",
  },
  {
    theme: "Commercialisation, client value and solution design",
    meaning: "Translate a technical capability into a client outcome, a qualified pilot and ultimately commercial adoption.",
    pages: [{ label: "Stakeholder Demo", href: "/stakeholder-demo" }, { label: "Tokenised Treasury", href: "/treasury" }, { label: "Legacy vs. Tokenised", href: "/legacy-comparison" }],
    fit: "Core",
    demonstrates: "You lead with the treasurer's job to be done: mobilise cash, reduce cut-off friction, see positions and preserve control. The ledger is an implementation choice, not the sales pitch.",
    demo: "On Stakeholder Demo, point to Meridian Treasury's liquidity view and approve one payment. Narrate the benefit as fewer manual hand-offs and better liquidity decisions, while the control plane proves the bank has not removed safeguards.",
    practiceLine: "I would qualify for a client problem before proposing tokenisation: how often is liquidity trapped, what is the cut-off cost, and where do teams re-key or reconcile today? If the answer is weak, a conventional rail may be better.",
    advantages: ["Connects innovation to a buyer's measurable operational pain.", "Gives RMs a value narrative that does not require blockchain expertise."],
    tradeOffs: ["Not every client has enough volume or urgency to justify onboarding.", "A faster rail can create new operating expectations for 24/7 support."],
    followUp: "Which client segment would you pilot first, and what would make you decline a client?",
  },
  {
    theme: "RFP, deal solutioning and client-facing enablement",
    meaning: "Turn a client requirement into an operating flow: eligibility, user journey, controls, implementation dependencies and success measures.",
    pages: [{ label: "Stakeholder Demo", href: "/stakeholder-demo" }, { label: "Delivery Backlog", href: "/backlog" }, { label: "User Stories", href: "/user-stories-guide" }],
    fit: "Strong support",
    demonstrates: "You can convert an attractive client request into something implementable: operating model, data, entitlements, integration, exception handling and acceptance criteria.",
    demo: "Use the payment-review screen. Explain that 'Beneficiary approved', 'Funds covered' and 'Policy within limit' are product requirements, not screen decoration. Then open the Delivery Backlog to show how they become buildable work.",
    practiceLine: "In discovery I would map the client's payment journey and controls before writing a solution. The proposal would name dependencies, what the client must change, the service boundary, and a success metric such as reconciliation effort or cash availability.",
    advantages: ["Makes sales commitments operationally credible.", "Surfaces scope and integration risks before a pilot is promised."],
    tradeOffs: ["More rigorous discovery can slow early deal momentum.", "Client-specific requests can fragment the core product if not governed."],
    followUp: "How would you say no to a client customisation without damaging the relationship?",
  },
  {
    theme: "Cross-functional leadership in a matrix organisation",
    meaning: "Align Sales, Engineering, Operations, Financial Crime, Risk, Legal and Product without assuming direct authority over all of them.",
    pages: [{ label: "Stakeholder Demo", href: "/stakeholder-demo" }, { label: "Risk & Controls", href: "/risk-controls" }, { label: "Delivery Backlog", href: "/backlog" }],
    fit: "Core",
    demonstrates: "You understand that Product owns the integrated outcome, while subject-matter owners retain authority over their own risk, legal and operational decisions.",
    demo: "While the transaction moves through the control plane, name the owner behind each step: client/RM for mandate, Financial Crime for screening, Operations for exception handling, Technology for resilience, Legal for the enforceable settlement model and Product for the joined-up proposition.",
    practiceLine: "I would not try to overrule a control function. I would create decision forums with a named owner, evidence required, deadline and escalation path, then keep the client promise aligned to the actual decision state.",
    advantages: ["Reduces late-stage surprises and creates shared ownership.", "Keeps client experience coherent across many internal teams."],
    tradeOffs: ["Decision forums can become slow without clear decision rights.", "Different functions may optimise for safety, speed or revenue differently."],
    followUp: "Tell me about a time a key partner disagreed. How did you resolve it without formal authority? Use a real example.",
  },
  {
    theme: "Regulatory engagement and risk-aware product development",
    meaning: "Treat settlement finality, data, AML, client protection and regulatory permissions as design inputs and rollout gates.",
    pages: [{ label: "Industry Knowledge", href: "/industry-knowledge" }, { label: "Risk & Controls", href: "/risk-controls" }, { label: "Product Roadmap", href: "/roadmap" }],
    fit: "Core",
    demonstrates: "You can be innovative without presenting a pilot as a production permission. You know the difference between a technically atomic ledger event and legal settlement finality.",
    demo: "Open Risk & Controls and show the exception path. Say that a failed sanction screen means no value moves, an auditable case is created and the client sees an explainable outcome. Connect this to corridor-by-corridor legal readiness on the Roadmap.",
    practiceLine: "I would involve Legal, Compliance and Operations during proposition design, not after build. My launch criteria would include legal characterisation, customer disclosures, data handling, reconciliation, recovery and a tested failure mode.",
    advantages: ["Builds regulator and client trust early.", "Avoids expensive rework when a technical design cannot meet legal or control requirements."],
    tradeOffs: ["The first release has more gates and slower decision cycles.", "A jurisdiction-specific design may limit early portability."],
    followUp: "How would you explain the difference between atomicity and legal finality to a senior non-technical sponsor?",
  },
  {
    theme: "Market intelligence and thought leadership",
    meaning: "Understand how HKMA, competitors, partner infrastructure and global regulation alter the product opportunity.",
    pages: [{ label: "Industry Knowledge", href: "/industry-knowledge" }, { label: "Ecosystem & Market", href: "/ecosystem" }, { label: "Company & Interviewer Notes", href: "/company-notes" }],
    fit: "Strong support",
    demonstrates: "You can filter noisy headlines into product consequences: what is live, what is a controlled pilot, what legal claim is represented, and what client segment might actually benefit.",
    demo: "Open Industry Knowledge and use the Hong Kong fact-check card. Distinguish the HKMA EnsembleTX pilot, a tokenised deposit and an HKD stablecoin rather than merging them into one headline. This signals precision and judgment.",
    practiceLine: "I maintain a market view in three layers: regulation, proven client use cases and infrastructure readiness. I use it to change the roadmap or partner strategy, not to repeat news that does not alter a decision.",
    advantages: ["Helps Product time investments and speak credibly to senior stakeholders.", "Prevents expensive strategy based on inflated market claims."],
    tradeOffs: ["Public announcements can be selective, early-stage or quickly outdated.", "Competitor comparison is useful only when client and regulatory context match."],
    followUp: "Which Hong Kong or APAC development would change your roadmap this year, and why?",
  },
  {
    theme: "Digital-currency and payments domain fluency",
    meaning: "Be precise about tokenised deposits, stablecoins, wholesale CBDC, atomic settlement, DvP, PvP, reconciliation and API controls.",
    pages: [{ label: "Tokenised Treasury", href: "/treasury" }, { label: "Architecture", href: "/architecture" }, { label: "Industry Knowledge", href: "/industry-knowledge" }, { label: "FX PvP", href: "/fx-pvp" }],
    fit: "Core",
    demonstrates: "You know enough domain detail to make good product and risk choices, rather than relying on loose phrases such as 'blockchain makes it instant'.",
    demo: "Use Tokenised Treasury to define a tokenised deposit as a commercial-bank deposit liability represented digitally. Then use FX PvP to explain that payment-versus-payment removes principal risk only if both legs and their legal enforceability are properly designed.",
    practiceLine: "I would choose the money form against the use case. A tokenised deposit preserves the bank-deposit relationship; a stablecoin has a separate issuer and reserve model; wholesale CBDC is central-bank money for regulated participants. They may interoperate, but they are not substitutes.",
    advantages: ["Earns credibility with specialists and avoids misleading clients.", "Improves product decisions about liability, settlement asset and control model."],
    tradeOffs: ["Technical terminology can distract an executive audience if not connected to value.", "A product leader need not claim to be the protocol engineer or legal authority."],
    followUp: "When would a stablecoin be preferable to a tokenised deposit, and what new risks would that introduce?",
  },
  {
    theme: "Operationally viable delivery and governance",
    meaning: "A launch is only real when exception handling, reconciliation, support, resilience and audit evidence work under client behaviour.",
    pages: [{ label: "Transaction Flow", href: "/transaction-flow" }, { label: "Risk & Controls", href: "/risk-controls" }, { label: "Delivery Backlog", href: "/backlog" }],
    fit: "Strong support",
    demonstrates: "You treat operations as a product capability. Fast settlement without a recoverable exception path, ledger-to-core reconciliation and service support is only a demo.",
    demo: "Open Transaction Flow's exception path. Narrate a failed check from detection through case ownership, client communication, ledger status and reconciliation. That is the difference between a prototype and a bank product.",
    practiceLine: "I would design the unhappy path first for a regulated movement-of-money flow. The release needs clear controls for duplicate requests, timeout, screening hit, failed posting, disputes and end-of-day evidence.",
    advantages: ["Protects client trust when real-world failures occur.", "Creates evidence for audit, finance and operational scale."],
    tradeOffs: ["More exception design and testing increases initial delivery effort.", "A highly controlled first release may not yet achieve every speed benefit claimed by the technology."],
    followUp: "What would your operational readiness review include before the first client goes live?",
  },
  {
    theme: "Senior executive communication",
    meaning: "Adapt one product narrative for a corporate treasurer, RM, control function or executive sponsor, each with a different proof point.",
    pages: [{ label: "Stakeholder Demo", href: "/stakeholder-demo" }, { label: "Executive Brief", href: "/" }, { label: "Interview Prep", href: "/interview-prep" }],
    fit: "Core",
    demonstrates: "You can communicate at the right altitude: a client wants cash visibility and control; a control function wants enforceability and evidence; an executive wants strategic fit, economics and risk-adjusted scale.",
    demo: "Use the same Stakeholder Demo three ways: first narrate the Treasury workspace for a client, then the control plane for Risk, then the volume, cost-to-serve and rollout gates for an executive. Keep each version to 30 seconds.",
    practiceLine: "My executive narrative would be: solve a defined liquidity problem, prove adoption and operational reliability, then scale only where the risk-adjusted economics work. I would show the decision needed, not a long technology tour.",
    advantages: ["Builds sponsorship and makes complex decisions easier.", "Prevents different stakeholder groups from hearing contradictory product promises."],
    tradeOffs: ["Simplifying does not mean hiding material risk or uncertainty.", "A single narrative must still allow for valid stakeholder-specific concerns."],
    followUp: "Give me your 30-second pitch to a CFO, then give the same proposal to Head of Financial Crime.",
  },
  {
    theme: "Tokenised-asset settlement familiarity",
    meaning: "Understand DvP mechanics and how digital money can provide the payment leg for tokenised assets, without confusing this with the GPS core.",
    pages: [{ label: "Bond DvP", href: "/bond-dvp" }, { label: "FX PvP", href: "/fx-pvp" }, { label: "Ecosystem & Market", href: "/ecosystem" }],
    fit: "Supporting",
    demonstrates: "You understand the broader ecosystem around Digital Money and can identify where GPS creates value as the trusted payment and liquidity leg for tokenised assets.",
    demo: "Open Bond DvP and show the conditional exchange of cash and security. Explain that the client outcome is lower settlement exposure and less reconciliation, but that the legal asset model, CSD/custody role and market infrastructure still matter.",
    practiceLine: "I would describe tokenised-asset settlement as a valuable adjacent use case. The GPS proposition is digital money and liquidity; DvP becomes compelling when it solves a real settlement gap with the right capital-markets partners.",
    advantages: ["Shows breadth across payments, liquidity and capital-markets infrastructure.", "Creates a credible reason for digital money to interoperate with tokenised funds and bonds."],
    tradeOffs: ["It brings additional securities-law, custody and market-infrastructure dependencies.", "It can distract from the nearer-term treasury proposition if presented as the primary product."],
    followUp: "Why would a client use DvP rather than existing CSD or correspondent-bank processes?",
  },
  {
    theme: "Your demonstrated leadership and commercial record",
    meaning: "The interviewer still needs evidence of how you have personally influenced stakeholders, made trade-offs and delivered outcomes.",
    pages: [],
    fit: "Bring personal evidence",
    demonstrates: "The site proves your thinking. Your own examples must prove that you can lead people, make decisions and deliver commercial outcomes in the real world.",
    demo: "Do not use a site page here. Prepare four 90-second stories: influence without authority, a customer problem you solved, a difficult trade-off, and delivery through ambiguity. Use situation, decision, action, measurable result and learning.",
    practiceLine: "I would use this case study to show how I think, then anchor it in a truthful example from my background. I will be explicit about my role, the evidence I used, who disagreed, and what outcome changed because of my work.",
    advantages: ["Makes the case study credible rather than performative.", "Lets Vincent assess how you actually operate, not just what you know."],
    tradeOffs: ["A weak or vague personal story can undermine a strong product case.", "Do not manufacture banking or blockchain experience; translate genuine adjacent experience instead."],
    followUp: "What is the hardest commercial or stakeholder decision you personally made, and what did you learn?",
  },
];

const marketSignals = [
  {
    region: "Hong Kong / HSBC",
    headline: "A client-facing tokenised-deposit proposition is already the relevant product anchor.",
    detail: "HSBC's Tokenised Deposit Service is live in six markets - Hong Kong, Singapore, Luxembourg, the UK, the UAE and the US, the last added in April 2026. It is positioned for complex treasury clients needing 24/7, near-real-time money movement between their own entities.",
    use: "Frame your case as making a live bank product commercially usable, controlled and scalable, not inventing an unproven crypto rail.",
    caution: "The six-market list comes from HSBC's US expansion announcement; the general product page only lists supported currencies. Cite the press release, not the product page, and remember eligibility and local restrictions apply.",
    source: { label: "HSBC press release: US expansion (April 2026)", url: "https://www.about.us.hsbc.com/newsroom/press-releases/hsbc-expands-tokenized-deposit-service-to-the-united-states" },
  },
  {
    region: "Hong Kong / HKMA",
    headline: "EnsembleTX is a controlled real-value pilot, not an open public settlement network.",
    detail: "HKMA describes EnsembleTX as testing real-value transactions with tokenised deposits and digital assets. Its 2026 priorities include enhancing the pilot for tokenised central-bank-money settlement around the clock, while work continues through 2026.",
    use: "Say it validates the direction for tokenised funds, bonds, liquidity and trade use cases. Your job is to choose where client value and operational readiness justify a product move now.",
    caution: "Do not present pilot activity as blanket production permission or claim a retail use case unless a primary source says so.",
    source: { label: "HKMA 2026 priorities", url: "https://www.hkma.gov.hk/media/eng/publication-and-research/annual-report/2025/07_Priorities_for_2026_and_Beyond.pdf" },
  },
  {
    region: "Hong Kong / digital money",
    headline: "Distinguish the liabilities before discussing interoperability.",
    detail: "A tokenised deposit is a bank deposit represented digitally. A stablecoin is a separately issued, reserve-backed token. HKDAP is Anchorpoint's HKD-backed stablecoin; it is not evidence that BlackRock launched an HKD fund on HKMA's EnsembleTX network.",
    use: "Use this distinction to show you will select the money form against the client use case, regulated issuer, legal claim and risk model.",
    caution: "Never merge an asset manager, stablecoin issuer and HKMA project into a single product unless a primary announcement connects them.",
    source: { label: "Anchorpoint HKDAP whitepaper", url: "https://anchorpoint.hk/hkdap-whitepaper/" },
  },
  {
    region: "Korea / APAC",
    headline: "Korea is building a regulated token-securities market, with a future effective date.",
    detail: "Korea's legal groundwork for token securities passed in January 2026. The Financial Services Commission says the framework takes effect on 4 February 2027, keeping token securities within capital-markets investor-protection rules.",
    use: "Korea is a regional signal for tokenised capital markets and potential future interoperability, not proof of a live tokenised-stock market today.",
    caution: "There is no official evidence here for a government-run Avalanche tokenised-stock experiment. Do not repeat that claim without a named institution and primary source.",
    source: { label: "Korea FSC implementation update", url: "https://www.fsc.go.kr/eng/pr010101/86374" },
  },
  {
    region: "Global / cross-border",
    headline: "Project Agorá is evidence of feasibility, not a production promise.",
    detail: "The BIS reports 28 institutions and central banks completing 17 real-value scenarios with tokenised commercial-bank deposits and tokenised central-bank reserves across six currencies. The trial reported roughly 80-second initiation-to-settlement, without integrating RTGS or core systems.",
    use: "Show that your roadmap preserves the hard parts: legal finality, AML, privacy, interoperability and core-system integration.",
    caution: "Never quote the trial time as an operational SLA or claim the network is a live replacement for correspondent banking.",
    source: { label: "BIS Project Agorá", url: "https://www.bis.org/project/agora" },
  },
];

export default function JdAlignmentPage() {
  return (
    <div className="space-y-10">
      <PageHeader eyebrow="Study Materials" title="JD & site alignment" description="A working, practical interpretation of the GCB4 Digital Currencies mandate: what each theme tests, how to demonstrate it, and how to discuss it with sound product judgment." />

      <section>
        <div className="mb-4">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-600">
            The source of truth
          </p>
          <h2 className="mt-1 text-[18px] font-semibold text-charcoal-900">
            The job description, word for word
          </h2>
          <p className="mt-1 text-[12.5px] leading-relaxed text-ink-500">
            Everything else on this site is an interpretation. This is the posting itself,
            reproduced exactly — including its original typos — so you can always check a claim
            against what was actually written. Hover any underlined term for a plain-English
            explanation.
          </p>
        </div>

        <Card className="border-charcoal-200">
          <div className="border-b border-paper-200 pb-3">
            <h3 className="text-[15px] font-semibold text-charcoal-900">{jdTitle}</h3>
            <p className="mt-0.5 text-[11.5px] text-ink-500">{jdRequisition}</p>
          </div>

          <div className="mt-4">
            <p className="text-[12.5px] font-semibold text-charcoal-900">In this role you will:</p>
            <div className="mt-2.5 space-y-2.5">
              {jdResponsibilities.map((line) => (
                <div key={line.id} className="flex gap-2.5">
                  <span className="mt-0.5 shrink-0 rounded bg-paper-100 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-ink-500">
                    {line.id}
                  </span>
                  <p className="text-[12.5px] leading-relaxed text-ink-700">
                    <strong className="font-semibold text-charcoal-900">{line.heading}</strong>{" "}
                    {line.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 border-t border-paper-200 pt-4">
            <p className="text-[12.5px] font-semibold text-charcoal-900">
              To be successful you will need:
            </p>
            <div className="mt-2.5 space-y-2.5">
              {jdRequirements.map((line) => (
                <div key={line.id} className="flex gap-2.5">
                  <span className="mt-0.5 shrink-0 rounded bg-paper-100 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-ink-500">
                    {line.id}
                  </span>
                  <p className="text-[12.5px] leading-relaxed text-ink-700">
                    <strong className="font-semibold text-charcoal-900">{line.heading}</strong>{" "}
                    {line.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card className="mt-4">
          <CardHeader
            title="Every term the posting itself names"
            subtitle="If it is written in the job description, expect it to be fair game in the room. Hover for a plain-English explanation and an example."
          />
          <div className="flex flex-wrap gap-x-4 gap-y-2.5">
            {jdNamedTerms.map((item) => (
              <span key={item.term} className="text-[12px] text-ink-500">
                <Explain t={item.term} />
                <span className="ml-1.5 text-[11px] text-ink-400">{item.where}</span>
              </span>
            ))}
          </div>
        </Card>
      </section>

      <div className="flex items-start gap-3 rounded-xl border border-amber-100 bg-amber-100/30 px-4 py-3.5">
        <CircleAlert size={16} className="mt-0.5 shrink-0 text-amber-600" />
        <p className="text-[12.5px] leading-relaxed text-charcoal-900">Below the posting, everything is interpretation — a structured reading of the JD and public hiring context used to build this site. It is interview preparation, not a replacement for the posting above. Only use personal examples that are true to your experience.</p>
      </div>

      <section className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-brand-100 bg-brand-50/30"><div className="flex items-start gap-3"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-500 text-paper-0"><BriefcaseBusiness size={17} /></div><div><p className="text-[11px] font-semibold uppercase tracking-wide text-brand-600">Working role brief</p><h2 className="mt-1 text-[17px] font-semibold text-charcoal-900">Senior Product Manager - Digital Currencies, GCB4</h2><p className="mt-2 text-[12.5px] leading-relaxed text-ink-700">A senior, externally aware portfolio-owner role in Digital Money / Global Payments Solutions: define the proposition, commercialise it, coordinate delivery and keep client, regulatory and operational reality connected.</p></div></div></Card>
        <Card><CardHeader title="The one-sentence test" /><p className="text-[13px] leading-relaxed text-charcoal-900">Can you turn an emerging digital-money capability into a client product that Sales can sell, Operations can run, Risk and Legal can approve, Technology can scale and senior leaders can justify commercially?</p></Card>
      </section>

      <section className="rounded-2xl border border-brand-100 bg-brand-50/35 p-5 sm:p-6">
        <div className="flex items-start gap-3"><BookOpenCheck size={19} className="mt-0.5 shrink-0 text-brand-600" /><div><p className="text-[11px] font-semibold uppercase tracking-wider text-brand-600">Efficient prep loop</p><h2 className="mt-1 text-[18px] font-semibold text-charcoal-900">Learn the decision logic, then practise the room</h2><p className="mt-2 text-[12.5px] leading-relaxed text-ink-700">Do not memorise every page. For each core theme below, learn the product decision, run the named demo moment, and prepare one truthful career example. That gives you enough depth to sound like a product owner instead of a commentator.</p></div></div>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-paper-0 p-3.5 ring-1 ring-inset ring-brand-100"><p className="text-[11px] font-semibold uppercase tracking-wide text-brand-600">1. Product judgement</p><p className="mt-1.5 text-[12px] leading-relaxed text-ink-700">Why this client, why this money form, why this phase now, and what would make you stop.</p></div>
          <div className="rounded-xl bg-paper-0 p-3.5 ring-1 ring-inset ring-brand-100"><p className="text-[11px] font-semibold uppercase tracking-wide text-brand-600">2. Demonstrate it</p><p className="mt-1.5 text-[12px] leading-relaxed text-ink-700">Use one product action on screen, then narrate the bank control, commercial value and trade-off.</p></div>
          <div className="rounded-xl bg-paper-0 p-3.5 ring-1 ring-inset ring-brand-100"><p className="text-[11px] font-semibold uppercase tracking-wide text-brand-600">3. Make it yours</p><p className="mt-1.5 text-[12px] leading-relaxed text-ink-700">Attach a true story of influence, delivery or customer impact. State your personal contribution and evidence.</p></div>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between gap-3"><div><p className="text-[11px] font-semibold uppercase tracking-wider text-brand-600">Line-by-line playbook</p><h2 className="mt-1 text-[18px] font-semibold text-charcoal-900">What every JD theme demonstrates in the interview</h2></div><Link href="/stakeholder-demo" className="hidden items-center gap-1 text-[12px] font-medium text-brand-700 sm:inline-flex">Open must-show demo <ArrowRight size={13} /></Link></div>
        <div className="space-y-4">
          {jdThemes.map((item, index) => (
            <Card key={item.theme} className={item.fit === "Core" ? "border-brand-100" : undefined}>
              <div className="flex flex-wrap items-start justify-between gap-3"><div className="flex max-w-3xl gap-3"><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-paper-100 text-[11px] font-semibold text-ink-600">{index + 1}</span><div><h3 className="text-[14px] font-semibold text-charcoal-900">{item.theme}</h3><p className="mt-1 text-[12.5px] leading-relaxed text-ink-700">{item.meaning}</p></div></div><Badge tone={fitTone[item.fit]}>{item.fit}</Badge></div>
              {item.pages.length > 0 && <div className="mt-4 flex flex-wrap gap-2 border-t border-paper-100 pt-3">{item.pages.map((page) => <Link key={page.href} href={page.href} className="rounded-full bg-paper-50 px-2.5 py-1 text-[11.5px] font-medium text-brand-700 ring-1 ring-inset ring-paper-200 transition-colors hover:bg-brand-50 hover:ring-brand-100">{page.label}</Link>)}</div>}
              <div className="mt-4 grid gap-3 lg:grid-cols-2">
                <div className="rounded-xl bg-brand-50/50 p-3.5"><div className="flex items-center gap-2 text-brand-700"><Lightbulb size={14} /><p className="text-[11px] font-semibold uppercase tracking-wide">What it demonstrates</p></div><p className="mt-2 text-[12px] leading-relaxed text-charcoal-900">{item.demonstrates}</p></div>
                <div className="rounded-xl bg-paper-50 p-3.5"><div className="flex items-center gap-2 text-brand-700"><Layers size={14} /><p className="text-[11px] font-semibold uppercase tracking-wide">Show it in the demo</p></div><p className="mt-2 text-[12px] leading-relaxed text-charcoal-900">{item.demo}</p></div>
              </div>
              <div className="mt-3 flex gap-2.5 rounded-xl border border-brand-100 bg-paper-0 px-3.5 py-3 text-[12px] leading-relaxed text-charcoal-900"><MessageSquareText size={15} className="mt-0.5 shrink-0 text-brand-600" /><p><strong className="font-semibold">Practice line - adapt truthfully:</strong> {item.practiceLine}</p></div>
              <div className="mt-3 grid gap-3 lg:grid-cols-2">
                <div className="rounded-xl border border-emerald-100 bg-emerald-50/35 p-3.5"><p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-700">Advantages to articulate</p><ul className="mt-2 space-y-1.5 text-[12px] leading-relaxed text-charcoal-900">{item.advantages.map((advantage) => <li key={advantage}>+ {advantage}</li>)}</ul></div>
                <div className="rounded-xl border border-amber-100 bg-amber-50/35 p-3.5"><p className="text-[11px] font-semibold uppercase tracking-wide text-amber-700">Trade-offs to own</p><ul className="mt-2 space-y-1.5 text-[12px] leading-relaxed text-charcoal-900">{item.tradeOffs.map((tradeOff) => <li key={tradeOff}>- {tradeOff}</li>)}</ul></div>
              </div>
              <div className="mt-3 flex gap-2.5 border-t border-paper-100 pt-3 text-[12px] leading-relaxed text-ink-700"><Scale size={14} className="mt-0.5 shrink-0 text-ink-500" /><p><strong className="font-semibold text-charcoal-900">Likely follow-up:</strong> {item.followUp}</p></div>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4"><p className="text-[11px] font-semibold uppercase tracking-wider text-brand-600">Current market brief</p><h2 className="mt-1 text-[18px] font-semibold text-charcoal-900">Signals worth knowing before a Hong Kong / APAC conversation</h2><p className="mt-1 text-[12.5px] leading-relaxed text-ink-500">Fact-checked on 12 September 2026. Learn the consequence and the caveat, not just the headline.</p></div>
        <div className="grid gap-4 xl:grid-cols-2">{marketSignals.map((signal) => <Card key={signal.headline}><p className="text-[11px] font-semibold uppercase tracking-wide text-brand-600">{signal.region}</p><h3 className="mt-1.5 text-[14px] font-semibold text-charcoal-900">{signal.headline}</h3><p className="mt-2 text-[12.5px] leading-relaxed text-ink-700">{signal.detail}</p><div className="mt-3 rounded-lg bg-brand-50/60 px-3 py-2.5 text-[12px] leading-relaxed text-charcoal-900"><strong>How to use it:</strong> {signal.use}</div><div className="mt-2 rounded-lg bg-amber-50/45 px-3 py-2.5 text-[12px] leading-relaxed text-charcoal-900"><strong>Do not overstate:</strong> {signal.caution}</div><ExternalLink href={signal.source.url} className="mt-3 text-[11.5px]">{signal.source.label}</ExternalLink></Card>)}</div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <Card><CardHeader title="Recommended screen-share route" /><ol className="space-y-2.5 text-[12.5px] leading-relaxed text-ink-700"><li><strong className="text-charcoal-900">1. Stakeholder Demo:</strong> lead with the client outcome, then show the controls and one deliberate trade-off.</li><li><strong className="text-charcoal-900">2. Product Roadmap:</strong> prove sequencing judgement, launch gates and where you would stop.</li><li><strong className="text-charcoal-900">3. Risk &amp; Controls:</strong> show it is a bank product with an operable failure path, not a generic blockchain prototype.</li><li><strong className="text-charcoal-900">4. Industry Knowledge:</strong> use one current market signal only if it changes the client, partner or regulatory decision.</li></ol></Card>
        <Card><CardHeader title="What not to overstate" /><p className="text-[12.5px] leading-relaxed text-ink-700">The site demonstrates product thinking, not confidential HSBC strategy, live payment capability or your past employment record. Be direct that the data and entities are simulated. Bring your own real examples for leadership, commercial wins and difficult stakeholder trade-offs.</p><div className="mt-4 flex gap-2.5 rounded-lg border border-amber-100 bg-amber-100/30 px-3 py-2.5 text-[12px] leading-relaxed text-charcoal-900"><Route size={14} className="mt-0.5 shrink-0 text-amber-600" /><p>The strongest answer combines the site&apos;s product case with one real career example, not a longer tour of every page.</p></div></Card>
      </section>
    </div>
  );
}
