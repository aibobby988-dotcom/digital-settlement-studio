import { ArrowMarkers, Arrow, Box, Diamond, Pill, EdgeLabel, palette } from "./Primitives";

const COL_X = 160;
const COL_W = 280;
const COL_CX = COL_X + COL_W / 2;
const REJ_X = 530;
const REJ_W = 210;

export function TransferDecisionFlowDiagram() {
  return (
    <svg viewBox="0 0 780 1020" className="w-full" role="img" aria-label="Tokenised transfer decision flow">
      <ArrowMarkers id="flow-arrow" color={palette.ink400} />
      <ArrowMarkers id="flow-arrow-rose" color={palette.rose600} />
      <ArrowMarkers id="flow-arrow-brand" color={palette.brand500} />

      <Pill x={COL_X} y={20} w={COL_W} h={44} label="Client initiates transfer" fill={palette.charcoal900} stroke={palette.charcoal700} />
      <Arrow markerId="flow-arrow" d={`M${COL_CX},64 L${COL_CX},96`} />

      <Box x={COL_X} y={96} w={COL_W} h={60} lines={["Entitlement check"]} subLines={["is beneficiary an approved group entity?"]} />
      <Arrow markerId="flow-arrow" d={`M${COL_CX},156 L${COL_CX},182`} />

      <Diamond cx={COL_CX} cy={224} w={230} h={84} lines={["Entity approved?"]} />
      <Arrow markerId="flow-arrow" d={`M${COL_CX},266 L${COL_CX},296`} />
      <EdgeLabel x={COL_CX + 14} y={286} text="Yes" anchor="start" color={palette.emerald600} />
      <Arrow markerId="flow-arrow-rose" d={`M${COL_CX + 115},224 L${REJ_X},224`} color={palette.rose600} />
      <EdgeLabel x={COL_CX + 130} y={216} text="No" anchor="start" color={palette.rose600} />
      <Box
        x={REJ_X}
        y={192}
        w={REJ_W}
        h={64}
        lines={["Rejected"]}
        subLines={["entity not entitled"]}
        fill={palette.rose100}
        stroke={palette.rose600}
        textColor={palette.rose600}
      />

      <Box x={COL_X} y={296} w={COL_W} h={60} lines={["Sanctions & watchlist screening"]} subLines={["originator, beneficiary, purpose"]} />
      <Arrow markerId="flow-arrow" d={`M${COL_CX},356 L${COL_CX},382`} />

      <Diamond cx={COL_CX} cy={424} w={230} h={84} lines={["Screening clear?"]} />
      <Arrow markerId="flow-arrow" d={`M${COL_CX},466 L${COL_CX},496`} />
      <EdgeLabel x={COL_CX + 14} y={486} text="Yes" anchor="start" color={palette.emerald600} />
      <Arrow markerId="flow-arrow-rose" d={`M${COL_CX + 115},424 L${REJ_X},424`} color={palette.rose600} />
      <EdgeLabel x={COL_CX + 130} y={416} text="No" anchor="start" color={palette.rose600} />
      <Box
        x={REJ_X}
        y={389}
        w={REJ_W}
        h={70}
        lines={["Blocked"]}
        subLines={["compliance case raised"]}
        fill={palette.rose100}
        stroke={palette.rose600}
        textColor={palette.rose600}
      />

      <Box x={COL_X} y={496} w={COL_W} h={60} lines={["Available funds check"]} subLines={["sufficient balance at origin entity?"]} />
      <Arrow markerId="flow-arrow" d={`M${COL_CX},556 L${COL_CX},582`} />

      <Diamond cx={COL_CX} cy={624} w={230} h={84} lines={["Sufficient balance?"]} />
      <Arrow markerId="flow-arrow" d={`M${COL_CX},666 L${COL_CX},696`} />
      <EdgeLabel x={COL_CX + 14} y={686} text="Yes" anchor="start" color={palette.emerald600} />
      <Arrow markerId="flow-arrow-rose" d={`M${COL_CX + 115},624 L${REJ_X},624`} color={palette.rose600} />
      <EdgeLabel x={COL_CX + 130} y={616} text="No" anchor="start" color={palette.rose600} />
      <Box
        x={REJ_X}
        y={592}
        w={REJ_W}
        h={64}
        lines={["Rejected"]}
        subLines={["insufficient funds"]}
        fill={palette.rose100}
        stroke={palette.rose600}
        textColor={palette.rose600}
      />

      <Box
        x={COL_X}
        y={696}
        w={COL_W}
        h={64}
        lines={["Atomic settlement"]}
        subLines={["debit origin & credit beneficiary as one operation"]}
        fill={palette.brand50}
        stroke={palette.brand500}
        textColor={palette.brand600}
        bold
      />
      <Arrow markerId="flow-arrow-brand" d={`M${COL_CX},760 L${COL_CX},786`} color={palette.brand500} />

      <Box x={COL_X} y={786} w={COL_W} h={56} lines={["Core ledger posting"]} />
      <Arrow markerId="flow-arrow" d={`M${COL_CX},842 L${COL_CX},868`} />

      <Box x={COL_X} y={868} w={COL_W} h={56} lines={["Automated reconciliation"]} />
      <Arrow markerId="flow-arrow" d={`M${COL_CX},924 L${COL_CX},950`} />

      <Pill
        x={COL_X}
        y={950}
        w={COL_W}
        h={48}
        label="Settled & reconciled"
        fill={palette.emerald500}
        stroke={palette.emerald600}
      />
    </svg>
  );
}
