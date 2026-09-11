import type { RoadmapPhase } from "@/lib/types";

const standardGateLabels = [
  "Client-value validation",
  "Legal and regulatory readiness",
  "Financial-crime controls tested",
  "Operational readiness",
  "Resilience / incident testing completed",
  "Commercial economics approved",
  "Client-support readiness",
];

function gates(met: boolean[]) {
  return standardGateLabels.map((label, i) => ({ label, met: met[i] }));
}

export const gateExplanations: Record<string, string> = {
  "Client-value validation": "A real client has confirmed this actually solves their problem — not just an internal assumption.",
  "Legal and regulatory readiness": "Lawyers and regulators have confirmed this is allowed to operate in that market.",
  "Financial-crime controls tested": "Sanctions and money-laundering checks have been tested and proven to work, not just designed.",
  "Operational readiness": "The team can actually run this day to day — support, monitoring, fixing problems — not just build it.",
  "Resilience / incident testing completed": "The system has been tested for what happens when something breaks, and it recovers safely.",
  "Commercial economics approved": "Finance has confirmed the numbers make business sense at scale, not just in a pilot.",
  "Client-support readiness": "There's a real support model in place — someone a client can actually reach when something goes wrong.",
};

export const roadmapPhases: RoadmapPhase[] = [
  {
    id: "phase-1",
    phase: "Phase 1",
    title: "Controlled intrabank treasury pilot",
    window: "0–6 months",
    summary:
      "Launch a controlled pilot enabling a small group of corporate treasury clients to issue, transfer and redeem tokenised deposits within a single banking entity, proving the core settlement mechanics and control model.",
    status: "In Progress",
    deliverables: [
      "Tokenised deposit issuance / redemption on permissioned ledger",
      "Entitlement and maker-checker controls",
      "Sanctions screening integrated into settlement flow",
      "Intraday reconciliation against core ledger",
    ],
    gates: gates([true, true, true, true, false, true, false]),
  },
  {
    id: "phase-2",
    phase: "Phase 2",
    title: "Selected cross-border corporate treasury corridors",
    window: "6–18 months",
    summary:
      "Extend tokenised deposit transfers across group entities in priority corridors (HK–SG–US–UK), giving corporate treasury clients 24/7 intercompany liquidity movement beyond traditional cut-off times.",
    status: "Planned",
    deliverables: [
      "Multi-entity, multi-currency transfer flow (HKD, USD, GBP, SGD)",
      "Purpose-code tagging and enhanced transaction monitoring",
      "Client-facing balance and transaction reporting",
      "Expanded exception-handling and incident runbooks",
    ],
    gates: gates([true, true, false, false, false, true, false]),
  },
  {
    id: "phase-3",
    phase: "Phase 3",
    title: "Tokenised asset DvP pilot",
    window: "18–30 months",
    summary:
      "Introduce atomic Delivery-versus-Payment settlement for tokenised fixed income, starting with a fictional tokenised green bond, connecting buy-side and sell-side institutional clients on a shared settlement rail.",
    status: "Planned",
    deliverables: [
      "Tokenised bond issuance and custody model",
      "Atomic DvP settlement engine (cash leg + asset leg)",
      "Pre-settlement checks: funds, holdings, approvals, screening",
      "Settlement-finality audit record and reporting",
    ],
    gates: gates([false, false, false, false, false, false, false]),
  },
  {
    id: "phase-4",
    phase: "Phase 4",
    title: "Cross-bank interoperability and selected FX PvP corridors",
    window: "30–48 months",
    summary:
      "Extend settlement beyond a single institution: interoperate with other participant banks and market infrastructures, and introduce atomic Payment-versus-Payment FX settlement to remove principal risk on cross-currency trades.",
    status: "Planned",
    deliverables: [
      "Network interoperability standard and participant onboarding model",
      "Atomic PvP FX settlement engine",
      "Cross-institution liquidity and screening coordination",
      "Shared governance and dispute-resolution framework",
    ],
    gates: gates([false, false, false, false, false, false, false]),
  },
  {
    id: "phase-5",
    phase: "Phase 5",
    title: "Broader regulated digital-money connectivity",
    window: "48+ months",
    summary:
      "Connect the settlement platform to a broader ecosystem of regulated digital-money infrastructure, institutional participants and market venues, subject to full regulatory clearance.",
    status: "Planned",
    deliverables: [
      "Regulated digital-money connectivity assessment",
      "Ecosystem partnership and interoperability framework",
      "Expanded asset classes beyond bonds and deposits",
      "Long-term commercial and pricing model",
    ],
    gates: gates([false, false, false, false, false, false, false]),
  },
];
