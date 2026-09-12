import type { Epic } from "@/lib/types";

export const initiativeName = "24/7 Tokenised Treasury Settlement";
export const initiativeSummary =
  "Enable corporate treasury clients to issue, transfer and redeem tokenised bank deposits across approved group entities, 24 hours a day, with the same control standards as traditional wholesale payments.";

export const definitionOfReady = [
  "Acceptance criteria defined and agreed with Risk / Compliance where applicable",
  "Dependencies identified and sequenced against other stories",
  "API / data contract agreed where the story touches an integration point",
  "Estimated and sized by the delivery team",
  "Non-functional requirements identified (security, resilience, auditability)",
];

export const definitionOfDone = [
  "Acceptance criteria met and demonstrated to the product owner",
  "Automated test coverage in place for the change",
  "Security and compliance review passed where applicable",
  "Reconciliation and audit-trail behaviour verified where applicable",
  "Documentation updated and change released to the target environment",
];

export const nonFunctionalRequirements = [
  {
    area: "Resilience",
    requirement: "Defined RTO / RPO per service; failover tested; graceful degradation under partial outage.",
  },
  {
    area: "Reconciliation",
    requirement: "Continuous automated reconciliation between tokenised and core ledgers, with a defined break-resolution SLA.",
  },
  {
    area: "API security",
    requirement: "Scoped, authenticated API access with payload validation, rate limiting and policy-engine enforcement.",
  },
  {
    area: "Auditability",
    requirement: "Immutable, timestamped audit trail for every settlement-affecting action, independent of outcome.",
  },
];

export const epics: Epic[] = [
  {
    id: "epic-1",
    title: "Client onboarding and entitlements",
    goal: "Bring corporate clients and their entities onto the platform with the right access and approval controls from day one.",
    owners: {
      product: "Product — Digital Currencies",
      delivery: "Engineering — Platform Enablement",
      risk: "Financial Crime Compliance",
    },
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
        dependency: "None",
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
        dependency: "Depends on DST-101",
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
        dependency: "Depends on DST-102",
      },
    ],
  },
  {
    id: "epic-2",
    title: "Token issuance, transfer and redemption",
    goal: "Provide the core tokenised deposit lifecycle: issue against a funded deposit, transfer between entities, and redeem back to fiat.",
    owners: {
      product: "Product — Digital Currencies",
      delivery: "Engineering — Digital Assets Platform",
      risk: "Market & Counterparty Risk",
    },
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
        dependency: "Depends on DST-101",
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
        dependency: "Depends on DST-102, DST-201, DST-401",
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
        dependency: "Depends on DST-201",
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
        dependency: "None",
      },
    ],
  },
  {
    id: "epic-3",
    title: "Payment / ledger integration and reconciliation",
    goal: "Keep the tokenised ledger and core banking systems consistent, with automated reconciliation and clear audit trails.",
    owners: {
      product: "Product — Digital Currencies",
      delivery: "Engineering — Core Banking Integration",
      risk: "Digital Assets Operations",
    },
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
        dependency: "Depends on DST-202",
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
        dependency: "Depends on DST-301",
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
        dependency: "Depends on DST-302",
      },
    ],
  },
  {
    id: "epic-4",
    title: "Financial-crime and wallet controls",
    goal: "Ensure every settlement instruction is screened and monitored to the same standard as traditional wholesale payments.",
    owners: {
      product: "Product — Digital Currencies",
      delivery: "Engineering — Digital Assets Platform",
      risk: "Financial Crime Compliance",
    },
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
        dependency: "Depends on DST-101",
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
        dependency: "Depends on DST-101",
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
        dependency: "Depends on DST-202",
      },
    ],
  },
  {
    id: "epic-5",
    title: "Operations, exceptions and reporting",
    goal: "Give operations teams the tools to monitor settlement health and resolve exceptions quickly and transparently.",
    owners: {
      product: "Product — Digital Currencies",
      delivery: "Digital Assets Operations",
      risk: "Operational Risk",
    },
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
        dependency: "Depends on DST-302",
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
        dependency: "Depends on DST-202",
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
        dependency: "Depends on DST-502",
      },
    ],
  },
  {
    id: "epic-6",
    title: "Pilot rollout and client support",
    goal: "Support a controlled pilot group of clients with the commercial, training and support model needed to scale confidently.",
    owners: {
      product: "Product — Digital Currencies",
      delivery: "Client Implementation",
      risk: "Product Governance Committee",
    },
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
        dependency: "None",
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
        dependency: "Depends on DST-101",
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
        dependency: "Depends on DST-503",
      },
    ],
  },
  {
    id: "epic-7",
    title: "Commercialisation, Client Readiness and Go-to-Market",
    goal: "Turn a working pilot into a commercially viable, supportable product with a clear path from pilot to scale.",
    owners: {
      product: "Product — Digital Currencies",
      delivery: "Commercial & Sales Enablement",
      risk: "Product Governance Committee",
    },
    status: "Not Started",
    stories: [
      {
        id: "DST-701",
        title: "Client segmentation and eligibility criteria",
        narrative:
          "As a product manager, I want defined client segmentation and eligibility criteria so that sales and onboarding focus on the clients this product is built for.",
        acceptanceCriteria: [
          "Eligibility criteria cover entity structure, corridor coverage and risk profile",
          "Segmentation agreed with Sales, Risk and Compliance",
          "Out-of-scope client profiles are documented with the reason",
        ],
        points: 3,
        priority: "Must",
        dependency: "Depends on DST-601",
      },
      {
        id: "DST-702",
        title: "Onboarding and implementation journey",
        narrative:
          "As a client implementation manager, I want a defined end-to-end onboarding journey so that new clients have a predictable, well-supported path to go-live.",
        acceptanceCriteria: [
          "Journey map covers sales handoff through to first live transaction",
          "Standard timeline and milestones agreed with clients upfront",
          "Implementation status is visible to internal stakeholders",
        ],
        points: 5,
        priority: "Must",
        dependency: "Depends on DST-701, DST-602",
      },
      {
        id: "DST-703",
        title: "Pricing and commercial model",
        narrative:
          "As a product manager, I want an agreed pricing and commercial model so that the product has a viable, explainable path to revenue.",
        acceptanceCriteria: [
          "Pricing model covers volume, balance and value-based components as applicable",
          "Model reviewed and approved by Finance and Product Governance",
          "Sales has a standard commercial pack to present to clients",
        ],
        points: 5,
        priority: "Must",
        dependency: "Depends on DST-701",
      },
      {
        id: "DST-704",
        title: "Relationship-manager and client-support enablement",
        narrative:
          "As a relationship manager, I want training and talking points on the product so that I can position it credibly and handle client questions.",
        acceptanceCriteria: [
          "RM enablement pack covers proposition, controls and FAQs",
          "Front-line support trained on first-line troubleshooting",
          "Escalation path to product and engineering is documented",
        ],
        points: 3,
        priority: "Should",
        dependency: "Depends on DST-602",
      },
      {
        id: "DST-705",
        title: "Pilot feedback and scale decision",
        narrative:
          "As a product manager, I want structured pilot feedback and a formal scale decision so that expansion is a deliberate choice, not an assumption.",
        acceptanceCriteria: [
          "Client and internal feedback captured against pilot success metrics",
          "Scale decision documented with go/no-go rationale",
          "Lessons learned feed into the next roadmap phase",
        ],
        points: 3,
        priority: "Must",
        dependency: "Depends on DST-601, DST-703",
      },
    ],
  },

  {
    id: "epic-8",
    title: "Track 1 — Automated cash pooling",
    goal: "Let a treasurer set balance policy once and have the rail enforce it continuously, so funding happens on a rule rather than on an instruction. This is the epic that turns the existing transfer capability into a product.",
    owners: {
      product: "Product — Digital Currencies",
      delivery: "Engineering — Policy & Orchestration",
      risk: "Operational Risk & Financial Crime Compliance",
    },
    status: "Not Started",
    stories: [
      {
        id: "DST-801",
        title: "Configure a group cash-pooling policy",
        narrative:
          "As a corporate treasurer, I want to set minimum balances, top-up targets and a daily sweep cap per entity so that funding happens automatically within limits I control.",
        acceptanceCriteria: [
          "Policy can be set per entity and per currency, with a minimum balance and a top-up target",
          "A group-wide daily sweep cap can be set and cannot be exceeded by any combination of sweeps",
          "Only entities that have passed onboarding and have an approved corridor can be selected as a funding destination",
          "Policy changes require maker-checker approval and are written to the audit log with the approver's identity",
          "The client can view the active policy and its full change history at any time",
        ],
        points: 13,
        priority: "Must",
        dependency: "Depends on DST-102, DST-103, DST-202",
      },
      {
        id: "DST-802",
        title: "Detect a threshold breach and raise a funding requirement",
        narrative:
          "As the platform, I want to evaluate entity balances continuously against policy so that a shortfall is identified the moment it occurs rather than at the next business day.",
        acceptanceCriteria: [
          "Balances are evaluated continuously, including outside business hours and at weekends",
          "A breach generates a funding requirement calculated as the difference between current balance and top-up target",
          "The requirement records which policy rule triggered it, for auditability",
          "No funding requirement is generated for an entity whose corridor is not approved",
          "Evaluation continues to function when one entity's balance feed is unavailable, and the gap is flagged rather than assumed",
        ],
        points: 13,
        priority: "Must",
        dependency: "Depends on DST-801, DST-301",
      },
      {
        id: "DST-803",
        title: "Execute an automated sweep within policy",
        narrative:
          "As a corporate treasurer, I want an approved shortfall funded automatically from the hub so that my subsidiaries are never short outside banking hours.",
        acceptanceCriteria: [
          "The full pre-settlement control sequence runs unchanged — entitlement, screening, funds check — before any value moves",
          "The sweep executes only if it is within both the per-transaction and the group daily cap",
          "The hub must have sufficient surplus after reserving its own minimum balance",
          "Settlement is atomic: the debit and credit commit together or neither commits",
          "Both entities receive a receipt showing the triggering rule, not just the amount",
        ],
        points: 21,
        priority: "Must",
        dependency: "Depends on DST-802, DST-202, DST-401",
      },
      {
        id: "DST-804",
        title: "Block and escalate a sweep that would breach a limit",
        narrative:
          "As a risk owner, I want any funding that would exceed the client's own limits to be refused and escalated so that automation never overrides a control the client set.",
        acceptanceCriteria: [
          "A sweep that would breach the daily cap is refused, and no partial amount is settled instead",
          "A sweep to an unapproved corridor is refused with the specific reason recorded",
          "A refusal creates a case with a named owner and notifies the client with an explanation, not a silent failure",
          "The client can approve the exception manually through maker-checker, which is logged separately from automated activity",
          "Refusals are reportable so that repeated breaches prompt a policy review conversation",
        ],
        points: 13,
        priority: "Must",
        dependency: "Depends on DST-803, DST-502",
      },
    ],
  },
  {
    id: "epic-9",
    title: "Track 2 — Cash leg for third-party tokenised assets",
    goal: "Make tokenised deposits the settlement cash leg for assets HSBC does not issue, reached over a shared interoperability layer rather than a bilateral integration per counterparty.",
    owners: {
      product: "Product — Digital Currencies",
      delivery: "Engineering — Interoperability",
      risk: "Legal, Operational Risk & Financial Crime Compliance",
    },
    status: "Not Started",
    stories: [
      {
        id: "DST-901",
        title: "Onboard an external asset platform as a settlement counterparty",
        narrative:
          "As a product owner, I want a defined process for admitting a third-party asset platform so that we can serve its settlement flow without building a bespoke integration each time.",
        acceptanceCriteria: [
          "Due diligence covers the platform's legal structure, asset custody model, operational resilience and financial-crime controls",
          "A settlement-finality opinion exists for the jurisdiction and asset type before go-live",
          "Connection uses the shared interoperability layer rather than a point-to-point build",
          "Entitlements define exactly which clients and asset classes are in scope for that platform",
          "An exit plan is documented before onboarding, not after",
        ],
        points: 21,
        priority: "Must",
        dependency: "Depends on DST-101",
      },
      {
        id: "DST-902",
        title: "Settle a third-party tokenised fund purchase against tokenised deposits",
        narrative:
          "As an institutional client, I want to buy units in a third-party tokenised money-market fund and have the cash leg settle atomically from my tokenised deposits so that I carry no settlement exposure between the legs.",
        acceptanceCriteria: [
          "Cash and asset legs commit together across the two platforms, or neither commits",
          "The cash leg is refused if screening, entitlement or funds checks fail, and the asset leg is released back to the issuer",
          "Settlement completes without the bank taking custody of, or a position in, the asset",
          "Both platforms receive matching settlement references for reconciliation",
          "A failure on the asset platform's side leaves the client's cash untouched and raises a case",
        ],
        points: 21,
        priority: "Must",
        dependency: "Depends on DST-901, DST-202",
      },
      {
        id: "DST-903",
        title: "Reconcile cross-platform settlement",
        narrative:
          "As an operations analyst, I want continuous reconciliation across the tokenised ledger, core banking and the external platform's confirmations so that a break between organisations is detected quickly.",
        acceptanceCriteria: [
          "Every cross-platform settlement is matched against the counterparty confirmation within the agreed window",
          "An unmatched settlement raises a break with a named owner and a resolution SLA",
          "Breaks are categorised by whether the cause sits with us, the counterparty or the interoperability layer",
          "End-of-day evidence is produced in a form Finance and Audit can consume without manual assembly",
        ],
        points: 13,
        priority: "Must",
        dependency: "Depends on DST-902, DST-302",
      },
    ],
  },
  {
    id: "epic-10",
    title: "Forward look — Delegated mandates for agentic payments",
    goal: "Let a client delegate bounded payment authority to software, with the mandate rather than the agent as the enforced control. Scoped deliberately after the two tracks are proven.",
    owners: {
      product: "Product — Digital Currencies",
      delivery: "Engineering — Policy & Orchestration",
      risk: "Operational Risk, Legal & Financial Crime Compliance",
    },
    status: "Not Started",
    stories: [
      {
        id: "DST-1001",
        title: "Grant a delegated payment mandate",
        narrative:
          "As an authorised client approver, I want to grant software a bounded mandate so that it can act on my behalf only within limits I have set in advance.",
        acceptanceCriteria: [
          "A mandate specifies permitted beneficiaries, per-transaction limit, daily limit and the triggering condition",
          "Granting a mandate requires maker-checker approval from named human approvers",
          "The mandate has an explicit expiry and can be revoked instantly by any authorised approver",
          "The client can see every mandate currently in force and what each permits",
        ],
        points: 13,
        priority: "Should",
        dependency: "Depends on DST-801, DST-103",
      },
      {
        id: "DST-1002",
        title: "Enforce the mandate on every agent-initiated action",
        narrative:
          "As a risk owner, I want every action proposed by software checked against its mandate before execution so that accountability sits with the mandate and its human grantor, never with the software.",
        acceptanceCriteria: [
          "Every proposed action is evaluated against all mandate conditions before any control sequence begins",
          "An action outside any condition is refused outright, and the agent cannot retry or escalate it itself",
          "The refusal records the specific condition that caused it",
          "Every executed action is attributed in the audit log to the mandate identifier and the human who granted it",
          "Revoking a mandate takes effect immediately, including for actions already in flight but not yet settled",
        ],
        points: 21,
        priority: "Should",
        dependency: "Depends on DST-1001, DST-803",
      },
    ],
  },
];
