export type CurrencyCode = "HKD" | "USD" | "GBP" | "SGD";

export interface Entity {
  id: string;
  name: string;
  jurisdiction: string;
  entityType: "Treasury Center" | "Operating Subsidiary" | "Holding Company" | "SPV";
  status: "Active" | "Under Review";
}

export interface Balance {
  entityId: string;
  currency: CurrencyCode;
  balance: number;
}

export type TransferStage =
  | "Initiated"
  | "Validated"
  | "Sanctions Screened"
  | "Authorised"
  | "Settled"
  | "Reconciled";

export interface Transaction {
  id: string;
  date: string;
  fromEntity: string;
  toEntity: string;
  currency: CurrencyCode;
  amount: number;
  purposeCode: string;
  stage: TransferStage;
  reference: string;
}

export interface RiskControl {
  id: string;
  category:
    | "Financial Crime"
    | "Legal & Regulatory"
    | "Technology"
    | "Operational"
    | "Financial"
    | "Governance";
  risk: string;
  riskLevel: "Low" | "Medium" | "High";
  control: string;
  owner: string;
  status: "Effective" | "Monitoring" | "Remediation in Progress";
  evidence: string;
}

export interface RoadmapGate {
  label: string;
  met: boolean;
}

export interface RoadmapPhase {
  id: string;
  phase: string;
  title: string;
  window: string;
  summary: string;
  status: "Complete" | "In Progress" | "Planned";
  deliverables: string[];
  gates: RoadmapGate[];
}

export interface AcceptanceCriterion {
  text: string;
}

export interface UserStory {
  id: string;
  title: string;
  narrative: string;
  acceptanceCriteria: string[];
  points: number;
  priority: "Must" | "Should" | "Could";
  dependency: string;
}

export interface EpicOwners {
  product: string;
  delivery: string;
  risk: string;
}

export interface Epic {
  id: string;
  title: string;
  goal: string;
  owners: EpicOwners;
  status: "Done" | "In Progress" | "Not Started";
  stories: UserStory[];
}
