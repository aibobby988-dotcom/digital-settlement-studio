export interface TourStep {
  path: string;
  label: string;
}

// Follows the demo route in tdsStrategy.ts: strategy first, then the two tracks
// made concrete, then the evidence that it can run in a bank.
export const tourSteps: TourStep[] = [
  { path: "/tds-strategy", label: "Extending TDS" },
  { path: "/stakeholder-demo", label: "Stakeholder Demo" },
  { path: "/treasury", label: "Track 1 — Cash pooling" },
  { path: "/bond-dvp", label: "Track 2 — Asset cash leg" },
  { path: "/commercial-model", label: "Commercial Model" },
  { path: "/risk-controls", label: "Risk & Controls" },
];

export const TOUR_STORAGE_KEY = "dss:tour";

export interface TourState {
  active: boolean;
  step: number;
}
