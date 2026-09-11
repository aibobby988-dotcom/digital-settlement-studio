export const palette = {
  charcoal900: "#161414",
  charcoal700: "#363131",
  ink500: "#6f6664",
  ink400: "#948a88",
  paper0: "#ffffff",
  paper50: "#faf9f8",
  paper200: "#e3dedb",
  brand600: "#a2000e",
  brand500: "#db0011",
  brand100: "#fbd9db",
  brand50: "#fdf0f0",
  blue600: "#2563eb",
  blue500: "#3b82f6",
  blue100: "#dbeafe",
  amber500: "#d97706",
  amber100: "#fef3c7",
  rose600: "#b3121f",
  rose100: "#f8dadb",
  emerald600: "#059669",
  emerald500: "#10b981",
  emerald100: "#d1fae5",
};

export function StepBadge({
  x,
  y,
  n,
  muted = false,
}: {
  x: number;
  y: number;
  n: number;
  muted?: boolean;
}) {
  return (
    <g>
      <circle cx={x} cy={y} r={11} fill={muted ? palette.ink400 : palette.brand500} stroke={palette.paper0} strokeWidth={2} />
      <text
        x={x}
        y={y + 4}
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize={11}
        fontWeight={700}
        fill={palette.paper0}
      >
        {n}
      </text>
    </g>
  );
}

export function ArrowMarkers({ id, color }: { id: string; color: string }) {
  return (
    <defs>
      <marker
        id={id}
        viewBox="0 0 10 10"
        refX="8.5"
        refY="5"
        markerWidth="7"
        markerHeight="7"
        orient="auto-start-reverse"
      >
        <path d="M 0 0 L 10 5 L 0 10 z" fill={color} />
      </marker>
    </defs>
  );
}

export function Box({
  x,
  y,
  w,
  h,
  lines,
  fill = palette.paper0,
  stroke = palette.paper200,
  textColor = palette.charcoal900,
  fontSize = 11.5,
  bold = false,
  rx = 8,
  subLines,
  subColor = palette.ink500,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  lines: string[];
  fill?: string;
  stroke?: string;
  textColor?: string;
  fontSize?: number;
  bold?: boolean;
  rx?: number;
  subLines?: string[];
  subColor?: string;
}) {
  const lineHeight = fontSize + 4;
  const totalLines = lines.length + (subLines?.length ?? 0);
  const startY = y + h / 2 - ((totalLines - 1) * lineHeight) / 2;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={rx} fill={fill} stroke={stroke} strokeWidth={1.25} />
      <text x={x + w / 2} textAnchor="middle" fontFamily="Inter, sans-serif">
        {lines.map((line, i) => (
          <tspan
            key={i}
            x={x + w / 2}
            y={startY + i * lineHeight}
            fontSize={fontSize}
            fontWeight={bold ? 600 : 500}
            fill={textColor}
          >
            {line}
          </tspan>
        ))}
        {subLines?.map((line, i) => (
          <tspan
            key={`sub-${i}`}
            x={x + w / 2}
            y={startY + (lines.length + i) * lineHeight}
            fontSize={fontSize - 1.5}
            fontWeight={400}
            fill={subColor}
          >
            {line}
          </tspan>
        ))}
      </text>
    </g>
  );
}

export function Diamond({
  cx,
  cy,
  w,
  h,
  lines,
  fill = palette.amber100,
  stroke = palette.amber500,
  textColor = palette.charcoal900,
  fontSize = 10.5,
}: {
  cx: number;
  cy: number;
  w: number;
  h: number;
  lines: string[];
  fill?: string;
  stroke?: string;
  textColor?: string;
  fontSize?: number;
}) {
  const points = [
    [cx, cy - h / 2],
    [cx + w / 2, cy],
    [cx, cy + h / 2],
    [cx - w / 2, cy],
  ]
    .map((p) => p.join(","))
    .join(" ");
  const lineHeight = fontSize + 3;
  const startY = cy - ((lines.length - 1) * lineHeight) / 2;
  return (
    <g>
      <polygon points={points} fill={fill} stroke={stroke} strokeWidth={1.25} />
      <text x={cx} textAnchor="middle" fontFamily="Inter, sans-serif">
        {lines.map((line, i) => (
          <tspan
            key={i}
            x={cx}
            y={startY + i * lineHeight}
            fontSize={fontSize}
            fontWeight={600}
            fill={textColor}
          >
            {line}
          </tspan>
        ))}
      </text>
    </g>
  );
}

export function Pill({
  x,
  y,
  w,
  h,
  label,
  fill,
  stroke,
  textColor = palette.paper0,
  fontSize = 11.5,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  fill: string;
  stroke: string;
  textColor?: string;
  fontSize?: number;
}) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={h / 2} fill={fill} stroke={stroke} strokeWidth={1.25} />
      <text
        x={x + w / 2}
        y={y + h / 2 + fontSize * 0.35}
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize={fontSize}
        fontWeight={700}
        fill={textColor}
      >
        {label}
      </text>
    </g>
  );
}

export function Arrow({
  d,
  markerId,
  color = palette.ink400,
  dashed = false,
  width = 1.5,
}: {
  d: string;
  markerId: string;
  color?: string;
  dashed?: boolean;
  width?: number;
}) {
  return (
    <path
      d={d}
      fill="none"
      stroke={color}
      strokeWidth={width}
      strokeDasharray={dashed ? "4 3" : undefined}
      markerEnd={`url(#${markerId})`}
    />
  );
}

export function EdgeLabel({
  x,
  y,
  text,
  color = palette.ink500,
  fontSize = 9.5,
  anchor = "middle",
}: {
  x: number;
  y: number;
  text: string;
  color?: string;
  fontSize?: number;
  anchor?: "start" | "middle" | "end";
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      fontFamily="Inter, sans-serif"
      fontSize={fontSize}
      fill={color}
      style={{ paintOrder: "stroke" }}
      stroke={palette.paper0}
      strokeWidth={4}
    >
      {text}
    </text>
  );
}

export function SectionLabel({ x, y, text }: { x: number; y: number; text: string }) {
  return (
    <text
      x={x}
      y={y}
      fontFamily="Inter, sans-serif"
      fontSize={10}
      fontWeight={700}
      letterSpacing="0.06em"
      fill={palette.ink400}
      style={{ textTransform: "uppercase" }}
    >
      {text}
    </text>
  );
}
