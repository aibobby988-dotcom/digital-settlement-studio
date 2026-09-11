import { ArrowMarkers, Arrow, Box, EdgeLabel, SectionLabel, StepBadge, palette } from "./Primitives";

export function SystemArchitectureDiagram() {
  return (
    <svg viewBox="0 0 1000 500" className="w-full" role="img" aria-label="System architecture diagram">
      <ArrowMarkers id="arch-arrow" color={palette.ink400} />
      <ArrowMarkers id="arch-arrow-brand" color={palette.brand500} />

      <SectionLabel x={40} y={14} text="Client layer" />
      <Box
        x={40}
        y={20}
        w={320}
        h={56}
        lines={["Corporate Treasury Portal"]}
        subLines={["Web app · Treasury, DvP, PvP flows"]}
        bold
      />
      <Box
        x={400}
        y={20}
        w={320}
        h={56}
        lines={["Ops & Compliance Console"]}
        subLines={["Web app · exceptions, screening review"]}
        bold
      />
      <StepBadge x={40} y={20} n={1} />

      <Arrow markerId="arch-arrow" d="M200,76 L200,130" />
      <Arrow markerId="arch-arrow" d="M560,76 L560,130" />

      <SectionLabel x={40} y={124} text="Gateway" />
      <Box
        x={40}
        y={130}
        w={680}
        h={56}
        lines={["Settlement Orchestration API"]}
        subLines={["Request routing, sequencing & orchestration"]}
        fill={palette.charcoal900}
        stroke={palette.charcoal700}
        textColor={palette.paper0}
        subColor={palette.paper200}
        bold
      />
      <StepBadge x={40} y={130} n={2} />
      <Arrow markerId="arch-arrow" d="M720,158 L770,158" dashed color={palette.ink400} />
      <EdgeLabel x={745} y={148} text="logs" fontSize={8.5} />

      <Arrow markerId="arch-arrow" d="M117.5,186 L117.5,240" />
      <Arrow markerId="arch-arrow" d="M287.5,186 L287.5,240" />
      <Arrow markerId="arch-arrow" d="M457.5,186 L457.5,240" />
      <Arrow markerId="arch-arrow" d="M627.5,186 L627.5,240" />

      <SectionLabel x={40} y={234} text="Core settlement services" />
      <Box
        x={40}
        y={240}
        w={155}
        h={74}
        lines={["Entitlement &", "Access Service"]}
        subLines={["approved entities, roles"]}
      />
      <StepBadge x={40} y={240} n={3} />
      <Box
        x={210}
        y={240}
        w={155}
        h={74}
        lines={["Financial Crime", "Screening"]}
        subLines={["sanctions / AML / PEP"]}
        fill={palette.brand50}
        stroke={palette.brand100}
      />
      <StepBadge x={210} y={240} n={4} />
      <Box
        x={380}
        y={240}
        w={155}
        h={74}
        lines={["Tokenised Ledger"]}
        subLines={["permissioned DLT"]}
      />
      <StepBadge x={380} y={240} n={5} />
      <Box
        x={550}
        y={240}
        w={155}
        h={74}
        lines={["Atomic Settlement", "Engine"]}
        subLines={["DvP / PvP"]}
        fill={palette.brand50}
        stroke={palette.brand500}
        textColor={palette.brand600}
      />
      <StepBadge x={550} y={240} n={6} />

      <Arrow markerId="arch-arrow" d="M195,277 L210,277" />
      <Arrow markerId="arch-arrow" d="M365,277 L380,277" />
      <Arrow markerId="arch-arrow" d="M535,277 L550,277" />
      <EdgeLabel x={287.5} y={230} text="orchestrated check sequence" fontSize={8.5} />

      <Arrow markerId="arch-arrow-brand" d="M627.5,314 L627.5,330 L205,330 L205,420" color={palette.brand500} width={1.75} />
      <EdgeLabel x={416} y={323} text="post settled transaction" fontSize={8.5} color={palette.brand600} />

      <SectionLabel x={40} y={414} text="System of record" />
      <Box
        x={40}
        y={420}
        w={330}
        h={60}
        lines={["Core Banking Ledger"]}
        subLines={["HKD · USD · GBP · SGD accounts"]}
        bold
      />
      <StepBadge x={40} y={420} n={7} />
      <Box
        x={390}
        y={420}
        w={315}
        h={60}
        lines={["Payment Rails"]}
        subLines={["RTGS / correspondent banking"]}
      />
      <path
        d="M370,450 L390,450"
        fill="none"
        stroke={palette.ink400}
        strokeWidth={1.5}
        markerStart="url(#arch-arrow)"
        markerEnd="url(#arch-arrow)"
      />

      <SectionLabel x={770} y={124} text="Cross-cutting" />
      <Box
        x={770}
        y={130}
        w={190}
        h={56}
        lines={["Audit & Event Log"]}
        subLines={["immutable, append-only"]}
      />
      <StepBadge x={770} y={130} n={9} muted />
      <Box
        x={770}
        y={240}
        w={190}
        h={74}
        lines={["Reconciliation Engine"]}
        subLines={["automated, intraday"]}
      />
      <StepBadge x={770} y={240} n={8} muted />
      <Box
        x={770}
        y={420}
        w={190}
        h={60}
        lines={["Risk & Compliance", "Case Management"]}
        subLines={["financial crime cases"]}
      />
      <StepBadge x={770} y={420} n={10} muted />

      <Arrow markerId="arch-arrow" d="M705,277 L770,277" dashed />
      <EdgeLabel x={737} y={270} text="reads" fontSize={8} />

      <Arrow markerId="arch-arrow" d="M320,420 L320,365 L865,365 L865,314" dashed />
      <EdgeLabel x={592} y={358} text="reads core ledger" fontSize={8.5} />

      <Arrow markerId="arch-arrow" d="M287.5,314 L287.5,400 L900,400 L900,420" dashed />
      <EdgeLabel x={520} y={393} text="on match → raises case" fontSize={8.5} />
    </svg>
  );
}
