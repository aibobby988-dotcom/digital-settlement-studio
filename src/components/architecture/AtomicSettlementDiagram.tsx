import { ArrowMarkers, Arrow, Box, Diamond, Pill, EdgeLabel, SectionLabel, palette } from "./Primitives";

export function AtomicSettlementDiagram() {
  return (
    <svg viewBox="0 0 920 620" className="w-full" role="img" aria-label="Atomic DvP / PvP settlement flow">
      <ArrowMarkers id="atomic-arrow" color={palette.ink400} />
      <ArrowMarkers id="atomic-arrow-brand" color={palette.brand500} />
      <ArrowMarkers id="atomic-arrow-emerald" color={palette.emerald600} />
      <ArrowMarkers id="atomic-arrow-rose" color={palette.rose600} />

      <SectionLabel x={60} y={14} text="Leg A · e.g. buyer cash / party A currency" />
      <SectionLabel x={520} y={14} text="Leg B · e.g. seller asset / party B currency" />

      <Box x={60} y={20} w={320} h={56} lines={["Leg A escrowed"]} subLines={["held pending settlement"]} bold />
      <Box x={520} y={20} w={320} h={56} lines={["Leg B escrowed"]} subLines={["held pending settlement"]} bold />

      <Arrow markerId="atomic-arrow" d="M220,76 L220,104" />
      <Arrow markerId="atomic-arrow" d="M680,76 L680,104" />

      <Box x={60} y={104} w={320} h={50} lines={["Funds / holdings check"]} />
      <Box x={520} y={104} w={320} h={50} lines={["Liquidity / holdings check"]} />

      <Arrow markerId="atomic-arrow" d="M220,154 L220,182" />
      <Arrow markerId="atomic-arrow" d="M680,154 L680,182" />

      <Box x={60} y={182} w={320} h={50} lines={["Counterparty approval on file"]} />
      <Box x={520} y={182} w={320} h={50} lines={["Counterparty approval on file"]} />

      <Arrow markerId="atomic-arrow" d="M220,232 L220,246 L450,246 L450,260" />
      <Arrow markerId="atomic-arrow" d="M680,232 L680,246 L450,246 L450,260" />

      <Box
        x={290}
        y={260}
        w={320}
        h={50}
        lines={["Compliance screening"]}
        subLines={["both parties, sanctions & eligibility"]}
        fill={palette.brand50}
        stroke={palette.brand100}
      />
      <Arrow markerId="atomic-arrow" d="M450,310 L450,340" />

      <Diamond cx={450} cy={385} w={260} h={90} lines={["All pre-settlement", "checks pass?"]} />

      <Arrow markerId="atomic-arrow-emerald" d="M450,430 L450,460" color={palette.emerald600} />
      <EdgeLabel x={464} y={450} text="Yes" anchor="start" color={palette.emerald600} />
      <Box
        x={290}
        y={460}
        w={320}
        h={60}
        lines={["Atomic commit"]}
        subLines={["both legs release simultaneously"]}
        fill={palette.brand50}
        stroke={palette.brand500}
        textColor={palette.brand600}
        bold
      />
      <Arrow markerId="atomic-arrow-emerald" d="M450,520 L450,548" color={palette.emerald600} />
      <Pill
        x={290}
        y={548}
        w={320}
        h={48}
        label="Settlement finality + audit record"
        fill={palette.emerald500}
        stroke={palette.emerald600}
        fontSize={11}
      />

      <Arrow markerId="atomic-arrow-rose" d="M580,385 L650,385" color={palette.rose600} />
      <EdgeLabel x={615} y={375} text="No" anchor="middle" color={palette.rose600} />
      <Box
        x={650}
        y={355}
        w={230}
        h={60}
        lines={["Rollback"]}
        subLines={["both legs return to original holders"]}
        fill={palette.rose100}
        stroke={palette.rose600}
        textColor={palette.rose600}
      />
      <Arrow markerId="atomic-arrow-rose" d="M765,415 L765,443" color={palette.rose600} />
      <Pill
        x={650}
        y={443}
        w={230}
        h={48}
        label="Exception — no leg transferred"
        fill={palette.rose600}
        stroke={palette.rose600}
        fontSize={10.5}
      />
    </svg>
  );
}
