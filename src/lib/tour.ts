export interface TourStep {
  path: string;
  label: string;
}

export const tourSteps: TourStep[] = [
  { path: "/", label: "Executive Brief" },
  { path: "/treasury", label: "Tokenised Treasury" },
  { path: "/architecture", label: "Architecture" },
  { path: "/risk-controls", label: "Risk & Controls" },
  { path: "/roadmap", label: "Roadmap" },
];

export const TOUR_STORAGE_KEY = "dss:tour";

export interface TourState {
  active: boolean;
  step: number;
}
