import type { Epic } from "@/lib/types";

export const initiativeName = "24/7 Tokenised Treasury Settlement";
export const initiativeSummary =
  "Enable corporate treasury clients to issue, transfer and redeem tokenised bank deposits across approved group entities, 24 hours a day, with the same control standards as traditional wholesale payments.";

export const epics: Epic[] = [
  {
    id: "epic-1",
    title: "Client onboarding and entitlements",
    goal: "Bring corporate clients and their entities onto the platform with the right access and approval controls from day one.",
    owner: "Product — Digital Currencies",
    status: "Done",
    stories: [
      {
        id: "DST-101",
        title: "Entity and user onboarding",
        narrative:
          "As an implementation manager, I want to onboard a client's group entities and named users so that only approved participants can access the platform.",
        acceptanceCriteria: [
          "Each entity is linked to verified KYC and legal-entity records",
          "Users are assigned a role (initiator, approver, viewer) per entity",
          "Onboarding cannot complete until compliance sign-off is recorded",
          "Client receives confirmation with go-live date",
        ],
        points: 8,
        priority: "Must",
      },
      {
        id: "DST-102",
        title: "Entitlement configuration",
        narrative:
          "As a client administrator, I want to configure which entities can transact with each other so that transfers only occur between approved counterparties.",
        acceptanceCriteria: [
          "Entity-to-entity entitlement pairs are configurable per client",
          "Attempted transfers to non-entitled entities are blocked pre-submission",
          "Changes to entitlements require dual approval",
          "Entitlement changes are logged with timestamp and approver identity",
        ],
        points: 5,
        priority: "Must",
      },
      {
        id: "DST-103",
        title: "Role-based approval limits",
        narrative:
          "As a risk manager, I want transfer approval authority to scale with transaction value so that larger transfers require senior sign-off.",
        acceptanceCriteria: [
          "Approval tiers configurable by currency-equivalent thresholds",
          "Transfers above a tier require a second, more senior approver",
          "System prevents self-approval by the initiating user",
        ],
        points: 5,
        priority: "Should",
      },
    ],
  },
  {
    id: "epic-2",
    title: "Token issuance, transfer and redemption",
    goal: "Provide the core tokenised deposit lifecycle: issue against a funded deposit, transfer between entities, and redeem back to fiat.",
    owner: "Engineering — Digital Assets Platform",
    status: "In Progress",
    stories: [
      {
        id: "DST-201",
        title: "Issue tokenised deposit",
        narrative:
          "As a treasury manager, I want to issue tokenised deposits backed 1:1 by a funded bank deposit so that I can move value on the settlement ledger.",
        acceptanceCriteria: [
          "Issuance amount cannot exceed the underlying funded deposit",
          "Each issuance is recorded with a unique reference and timestamp",
          "Ledger balance updates only after underlying funds are confirmed",
        ],
        points: 8,
        priority: "Must",
      },
      {
        id: "DST-202",
        title: "Transfer tokenised deposit between approved entities",
        narrative:
          "As a corporate treasury manager, I want to transfer tokenised USD deposits between approved group entities so that I can move liquidity outside traditional cut-off times.",
        acceptanceCriteria: [
          "Only authorised users can initiate transfers",
          "Beneficiary must be an approved entity",
          "Sanctions and entitlement checks must complete before settlement",
          "Transfer is either atomically settled or fully rejected",
          "Receipt includes timestamp, unique transaction ID and audit events",
          "Balances and reports update after settlement",
        ],
        points: 13,
        priority: "Must",
      },
      {
        id: "DST-203",
        title: "Redeem tokenised deposit to fiat",
        narrative:
          "As a treasury manager, I want to redeem tokenised deposits back into the underlying bank account so that I can use funds outside the settlement platform.",
        acceptanceCriteria: [
          "Redemption reduces token balance and releases underlying funds same day",
          "Redemption is blocked if token balance is insufficient",
          "Redemption receipt is generated with a unique reference",
        ],
        points: 5,
        priority: "Must",
      },
      {
        id: "DST-204",
        title: "24/7 availability and scheduled maintenance windows",
        narrative:
          "As a treasury manager, I want the platform to be available outside banking hours so that I can settle urgent liquidity needs at any time.",
        acceptanceCriteria: [
          "Platform available 24 hours a day excluding published maintenance windows",
          "Maintenance windows are communicated at least 5 business days in advance",
          "Status page reflects real-time platform availability",
        ],
        points: 5,
        priority: "Should",
      },
    ],
  },
  {
    id: "epic-3",
    title: "Payment / ledger integration and reconciliation",
    goal: "Keep the tokenised ledger and core banking systems consistent, with automated reconciliation and clear audit trails.",
    owner: "Engineering — Core Banking Integration",
    status: "In Progress",
    stories: [
      {
        id: "DST-301",
        title: "Real-time core ledger posting",
        narrative:
          "As an operations analyst, I want every settled transfer to post to the core ledger in real time so that treasury records stay accurate.",
        acceptanceCriteria: [
          "Core ledger entry created within the same settlement cycle as the token movement",
          "Posting failures trigger an automatic exception case",
          "Each posting references the originating transaction ID",
        ],
        points: 8,
        priority: "Must",
      },
      {
        id: "DST-302",
        title: "Automated intraday reconciliation",
        narrative:
          "As an operations manager, I want automated reconciliation between the tokenised ledger and core banking records so that breaks are identified within minutes, not overnight.",
        acceptanceCriteria: [
          "Reconciliation runs on a continuous intraday schedule",
          "Breaks are flagged with amount, entity and transaction reference",
          "Reconciliation status is visible on an operations dashboard",
        ],
        points: 8,
        priority: "Must",
      },
      {
        id: "DST-303",
        title: "Client statement and reporting export",
        narrative:
          "As a corporate treasury client, I want downloadable statements of tokenised deposit activity so that I can reconcile against my own books.",
        acceptanceCriteria: [
          "Statement covers a selectable date range and entity",
          "Export available in a standard machine-readable format",
          "Statement totals match platform ledger balances",
        ],
        points: 3,
        priority: "Should",
      },
    ],
  },
  {
    id: "epic-4",
    title: "Financial-crime and wallet controls",
    goal: "Ensure every settlement instruction is screened and monitored to the same standard as traditional wholesale payments.",
    owner: "Financial Crime Compliance",
    status: "In Progress",
    stories: [
      {
        id: "DST-401",
        title: "Pre-settlement sanctions screening",
        narrative:
          "As a compliance officer, I want every transfer screened against sanctions and watchlists before settlement so that prohibited transactions never complete.",
        acceptanceCriteria: [
          "Screening runs synchronously before any funds move",
          "A true match blocks settlement and raises a compliance case",
          "Screening outcome is stored against the transaction record",
        ],
        points: 8,
        priority: "Must",
      },
      {
        id: "DST-402",
        title: "Wallet and entity risk scoring",
        narrative:
          "As a financial crime analyst, I want each entity and settlement wallet risk-scored so that higher-risk activity receives closer review.",
        acceptanceCriteria: [
          "Risk score recalculated on a defined periodic cycle",
          "High-risk entities are flagged for enhanced due diligence",
          "Score changes are logged with contributing factors",
        ],
        points: 5,
        priority: "Should",
      },
      {
        id: "DST-403",
        title: "AML transaction monitoring for tokenised movements",
        narrative:
          "As a financial crime analyst, I want tokenised transfers monitored for suspicious patterns so that typologies specific to digital settlement are detected.",
        acceptanceCriteria: [
          "Monitoring scenarios cover structuring, rapid movement and unusual corridors",
          "Alerts route to the case management system with full transaction context",
          "False-positive rate reviewed and tuned each quarter",
        ],
        points: 8,
        priority: "Must",
      },
    ],
  },
  {
    id: "epic-5",
    title: "Operations, exceptions and reporting",
    goal: "Give operations teams the tools to monitor settlement health and resolve exceptions quickly and transparently.",
    owner: "Digital Assets Operations",
    status: "Not Started",
    stories: [
      {
        id: "DST-501",
        title: "Operations settlement dashboard",
        narrative:
          "As an operations analyst, I want a real-time dashboard of settlement volumes, success rates and exceptions so that I can monitor platform health.",
        acceptanceCriteria: [
          "Dashboard refreshes in near real time",
          "Success rate, average settlement time and open exceptions are visible",
          "Drill-down available to individual transaction level",
        ],
        points: 5,
        priority: "Should",
      },
      {
        id: "DST-502",
        title: "Exception case management",
        narrative:
          "As an operations analyst, I want failed or stuck transfers automatically raised as exception cases so that nothing is resolved informally or missed.",
        acceptanceCriteria: [
          "Exceptions are created automatically on failure or timeout",
          "Each case tracks owner, status and resolution notes",
          "SLA timers alert when a case is approaching breach",
        ],
        points: 8,
        priority: "Must",
      },
      {
        id: "DST-503",
        title: "Incident communication workflow",
        narrative:
          "As an operations manager, I want a standard workflow to notify affected clients during a platform incident so that communication is timely and consistent.",
        acceptanceCriteria: [
          "Incident status page can be updated in under five minutes",
          "Affected clients are identified automatically from impacted transactions",
          "Post-incident summary is generated for governance review",
        ],
        points: 5,
        priority: "Should",
      },
    ],
  },
  {
    id: "epic-6",
    title: "Pilot rollout and client support",
    goal: "Support a controlled pilot group of clients with the commercial, training and support model needed to scale confidently.",
    owner: "Product — Digital Currencies",
    status: "Not Started",
    stories: [
      {
        id: "DST-601",
        title: "Pilot client selection and success criteria",
        narrative:
          "As a product manager, I want defined selection criteria and success metrics for pilot clients so that the pilot produces a clear go/no-go decision.",
        acceptanceCriteria: [
          "Selection criteria documented and agreed with Sales and Risk",
          "Success metrics defined before pilot start (volume, uptime, satisfaction)",
          "Pilot review scheduled with go/no-go recommendation",
        ],
        points: 3,
        priority: "Must",
      },
      {
        id: "DST-602",
        title: "Client training and enablement materials",
        narrative:
          "As a client implementation manager, I want training materials and a sandbox environment so that new clients can onboard their teams confidently.",
        acceptanceCriteria: [
          "Sandbox environment mirrors production functionality with mock data",
          "Quick-start guide and video walkthrough available",
          "Client support contacts documented in onboarding pack",
        ],
        points: 5,
        priority: "Should",
      },
      {
        id: "DST-603",
        title: "Dedicated support model for pilot clients",
        narrative:
          "As a pilot client, I want a defined support channel and response times so that I have confidence issues will be resolved quickly.",
        acceptanceCriteria: [
          "Support SLA published and agreed with pilot clients",
          "Escalation path defined for critical settlement issues",
          "Support performance reviewed monthly during pilot",
        ],
        points: 3,
        priority: "Could",
      },
    ],
  },
];
