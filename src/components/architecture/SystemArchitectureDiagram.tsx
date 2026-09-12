import { ArrowMarkers, Arrow, Box, EdgeLabel, SectionLabel, StepBadge, palette } from "./Primitives";

/**
 * Reflects the two-track strategy, not a generic settlement platform.
 *
 * Two things distinguish it from a conventional payments architecture, and both
 * are the proposal rather than the existing rail:
 *  - the Policy & Mandate Engine sits at the trigger layer, because under Track 1
 *    an instruction can originate from a standing rule rather than a person;
 *  - the Interoperability Layer, because under Track 2 the cash leg has to reach
 *    asset platforms the bank does not own.
 */
export function SystemArchitectureDiagram() {
  return (
    <svg viewBox="0 0 1000 500" className="w-full" role="img" aria-label="System architecture diagram">
      <ArrowMarkers id="arch-arrow" color={palette.ink400} />
      <ArrowMarkers id="arch-arrow-brand" color={palette.brand500} />

      <SectionLabel x={40} y={14} text="Where an instruction originates" />
      <Box
        x={40}
        y={20}
        w={215}
        h={56}
        lines={["Corporate Treasury Portal"]}
        subLines={["human-initiated · or client ERP via API"]}
        bold
      />
      <StepBadge x={40} y={20} n={1} />
      <Box
        x={270}
        y={20}
        w={215}
        h={56}
        lines={["Policy & Mandate Engine"]}
        subLines={["rule-initiated · thresholds, sweeps, mandates"]}
        fill={palette.brand50}
        stroke={palette.brand500}
        textColor={palette.brand600}
        bold
      />
      <StepBadge x={270} y={20} n={2} />
      <Box
        x={500}
        y={20}
        w={220}
        h={56}
        lines={["Ops & Compliance Console"]}
        subLines={["exceptions, screening review"]}
        bold
      />

      <Arrow markerId="arch-arrow" d="M147,76 L147,130" />
      <Arrow markerId="arch-arrow-brand" d="M377,76 L377,130" color={palette.brand500} width={1.75} />
      <Arrow markerId="arch-arrow" d="M610,76 L610,130" />

      <SectionLabel x={40} y={124} text="Gateway" />
      <Box
        x={40}
        y={130}
        w={680}
        h={56}
        lines={["Settlement Orchestration API"]}
        subLines={["request routing, sequencing & orchestration — nothing may skip a control"]}
        fill={palette.charcoal900}
        stroke={palette.charcoal700}
        textColor={palette.paper0}
        subColor={palette.paper200}
        bold
      />
      <StepBadge x={40} y={130} n={3} />
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
      <StepBadge x={40} y={240} n={4} />
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
      <StepBadge x={210} y={240} n={5} />
      <Box
        x={380}
        y={240}
        w={155}
        h={74}
        lines={["Tokenised Ledger"]}
        subLines={["permissioned DLT"]}
      />
      <StepBadge x={380} y={240} n={6} />
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
      <StepBadge x={550} y={240} n={7} />

      <Arrow markerId="arch-arrow" d="M195,277 L210,277" />
      <Arrow markerId="arch-arrow" d="M365,277 L380,277" />
      <Arrow markerId="arch-arrow" d="M535,277 L550,277" />
      <EdgeLabel x={287.5} y={230} text="orchestrated check sequence" fontSize={8.5} />

      <Arrow markerId="arch-arrow-brand" d="M600,314 L600,330 L205,330 L205,420" color={palette.brand500} width={1.75} />
      <EdgeLabel x={400} y={323} text="post settled transaction" fontSize={8.5} color={palette.brand600} />

      <SectionLabel x={40} y={414} text="System of record & external reach" />
      <Box
        x={40}
        y={420}
        w={330}
        h={60}
        lines={["Core Banking Ledger"]}
        subLines={["HKD · USD · GBP · SGD accounts"]}
        bold
      />
      <StepBadge x={40} y={420} n={8} />
      <Box
        x={390}
        y={420}
        w={150}
        h={60}
        lines={["Payment Rails"]}
        subLines={["RTGS / correspondent"]}
      />
      <Box
        x={555}
        y={420}
        w={165}
        h={60}
        lines={["Interoperability Layer"]}
        subLines={["EnsembleTX / Swift · third-party asset platforms"]}
        fill={palette.brand50}
        stroke={palette.brand500}
        textColor={palette.brand600}
      />
      <StepBadge x={555} y={420} n={9} />

      <path
        d="M370,450 L390,450"
        fill="none"
        stroke={palette.ink400}
        strokeWidth={1.5}
        markerStart="url(#arch-arrow)"
        markerEnd="url(#arch-arrow)"
      />

      <path
        d="M680,314 L680,380 L637,380 L637,420"
        fill="none"
        stroke={palette.brand500}
        strokeWidth={1.75}
        markerStart="url(#arch-arrow-brand)"
        markerEnd="url(#arch-arrow-brand)"
      />
      <EdgeLabel x={700} y={374} text="Track 2: asset leg" fontSize={8.5} color={palette.brand600} />

      <SectionLabel x={770} y={124} text="Cross-cutting" />
      <Box
        x={770}
        y={130}
        w={190}
        h={56}
        lines={["Audit & Event Log"]}
        subLines={["immutable · every action attributed"]}
      />
      <StepBadge x={770} y={130} n={11} muted />
      <Box
        x={770}
        y={240}
        w={190}
        h={74}
        lines={["Reconciliation Engine"]}
        subLines={["automated, intraday"]}
      />
      <StepBadge x={770} y={240} n={10} muted />
      <Box
        x={770}
        y={420}
        w={190}
        h={60}
        lines={["Risk & Compliance", "Case Management"]}
        subLines={["financial crime cases"]}
      />
      <StepBadge x={770} y={420} n={12} muted />

      <Arrow markerId="arch-arrow" d="M705,277 L770,277" dashed />
      <EdgeLabel x={737} y={270} text="reads" fontSize={8} />

      <Arrow markerId="arch-arrow" d="M320,420 L320,365 L865,365 L865,314" dashed />
      <EdgeLabel x={560} y={358} text="reads core ledger" fontSize={8.5} />

      <Arrow markerId="arch-arrow" d="M287.5,314 L287.5,400 L900,400 L900,420" dashed />
      <EdgeLabel x={480} y={393} text="on match → raises case" fontSize={8.5} />
    </svg>
  );
}
