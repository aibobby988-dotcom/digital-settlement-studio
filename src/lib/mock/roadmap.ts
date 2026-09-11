import type { RoadmapPhase } from "@/lib/types";

export const roadmapPhases: RoadmapPhase[] = [
  {
    id: "phase-1",
    phase: "Phase 1",
    title: "Controlled intrabank tokenised-deposit pilot",
    window: "Q1 – Q2 2026",
    summary:
      "Launch a controlled pilot enabling a small group of corporate treasury clients to issue, transfer and redeem tokenised deposits within a single banking entity, proving the core settlement mechanics and control model.",
    status: "Complete",
    deliverables: [
      "Tokenised deposit issuance / redemption on permissioned ledger",
      "Entitlement and maker-checker controls",
      "Sanctions screening integrated into settlement flow",
      "Intraday reconciliation against core ledger",
    ],
    gates: [
      { label: "Client-value validation", met: true },
      { label: "Legal and regulatory approval", met: true },
      { label: "Operational readiness", met: true },
      { label: "Financial-crime controls tested", met: true },
      { label: "Resilience / incident testing completed", met: true },
      { label: "Commercial and support model approved", met: true },
    ],
  },
  {
    id: "phase-2",
    phase: "Phase 2",
    title: "Corporate treasury rollout in selected corridors",
    window: "Q3 2026 – Q1 2027",
    summary:
      "Extend tokenised deposit transfers across group entities in priority corridors (HK–SG–US–UK), giving corporate treasury clients 24/7 intercompany liquidity movement beyond traditional cut-off times.",
    status: "In Progress",
    deliverables: [
      "Multi-entity, multi-currency transfer flow (HKD, USD, GBP, SGD)",
      "Purpose-code tagging and enhanced transaction monitoring",
      "Client-facing balance and transaction reporting",
      "Expanded exception-handling and incident runbooks",
    ],
    gates: [
      { label: "Client-value validation", met: true },
      { label: "Legal and regulatory approval", met: true },
      { label: "Operational readiness", met: false },
      { label: "Financial-crime controls tested", met: false },
      { label: "Resilience / incident testing completed", met: false },
      { label: "Commercial and support model approved", met: true },
    ],
  },
  {
    id: "phase-3",
    phase: "Phase 3",
    title: "Tokenised bond DvP settlement",
    window: "Q2 – Q4 2027",
    summary:
      "Introduce atomic Delivery-versus-Payment settlement for tokenised fixed income, starting with a fictional tokenised green bond, connecting buy-side and sell-side institutional clients on a shared settlement rail.",
    status: "Planned",
    deliverables: [
      "Tokenised bond issuance and custody model",
      "Atomic DvP settlement engine (cash leg + asset leg)",
      "Pre-settlement checks: funds, holdings, approvals, screening",
      "Settlement-finality audit record and reporting",
    ],
    gates: [
      { label: "Client-value validation", met: false },
      { label: "Legal and regulatory approval", met: false },
      { label: "Operational readiness", met: false },
      { label: "Financial-crime controls tested", met: false },
      { label: "Resilience / incident testing completed", met: false },
      { label: "Commercial and support model approved", met: false },
    ],
  },
  {
    id: "phase-4",
    phase: "Phase 4",
    title: "Cross-bank / network interoperability and FX PvP",
    window: "2028",
    summary:
      "Extend settlement beyond a single institution: interoperate with other participant banks and market infrastructures, and introduce atomic Payment-versus-Payment FX settlement to remove principal risk on cross-currency trades.",
    status: "Planned",
    deliverables: [
      "Network interoperability standard and participant onboarding model",
      "Atomic PvP FX settlement engine",
      "Cross-institution liquidity and screening coordination",
      "Shared governance and dispute-resolution framework",
    ],
    gates: [
      { label: "Client-value validation", met: false },
      { label: "Legal and regulatory approval", met: false },
      { label: "Operational readiness", met: false },
      { label: "Financial-crime controls tested", met: false },
      { label: "Resilience / incident testing completed", met: false },
      { label: "Commercial and support model approved", met: false },
    ],
  },
  {
    id: "phase-5",
    phase: "Phase 5",
    title: "Regulated stablecoin and broader ecosystem connectivity",
    window: "2029 and beyond",
    summary:
      "Connect the settlement platform to regulated stablecoin infrastructure and a broader ecosystem of institutional participants, wallets and market venues, subject to full regulatory clearance.",
    status: "Planned",
    deliverables: [
      "Regulated stablecoin connectivity assessment",
      "Ecosystem partnership and interoperability framework",
      "Expanded asset classes beyond bonds and deposits",
      "Long-term commercial and pricing model",
    ],
    gates: [
      { label: "Client-value validation", met: false },
      { label: "Legal and regulatory approval", met: false },
      { label: "Operational readiness", met: false },
      { label: "Financial-crime controls tested", met: false },
      { label: "Resilience / incident testing completed", met: false },
      { label: "Commercial and support model approved", met: false },
    ],
  },
];
