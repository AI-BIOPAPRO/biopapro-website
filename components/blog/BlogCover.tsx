/**
 * Blog cover art — per-category line-art graphics instead of stock photos
 * or AI-generated images. Keeps the same "datasheet, not stock photography"
 * editorial language used across the rest of the site, and costs nothing
 * to generate or regenerate.
 */

const CATEGORY_STYLE: Record<string, { bg: string; accent: string; pattern: "stamp" | "rings" | "bars" | "cutlery" | "line" }> = {
  "regulations":      { bg: "#EEF1F6", accent: "#1A3A6B", pattern: "stamp" },
  "sustainability":    { bg: "#EEF4EA", accent: "#2D5228", pattern: "rings" },
  "industry-news":     { bg: "#F7F1E4", accent: "#9A7A3F", pattern: "bars" },
  "product-updates":   { bg: "#F4EDE4", accent: "#8B5E3C", pattern: "cutlery" },
  "company-news":      { bg: "#EFECE7", accent: "#2A2118", pattern: "line" },
};

const FALLBACK = { bg: "#F4EDE4", accent: "#4A7A3D", pattern: "rings" as const };

function StampPattern({ accent }: { accent: string }) {
  return (
    <g stroke={accent} fill="none" strokeWidth="1.4" opacity="0.5">
      <circle cx="200" cy="150" r="78" strokeDasharray="2 5" />
      <circle cx="200" cy="150" r="60" />
      <path d="M170 150 L190 170 L232 128" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      {Array.from({ length: 24 }, (_, i) => {
        const a = (i / 24) * Math.PI * 2;
        const r1 = 86, r2 = 96;
        // Coordinates are rounded to fixed strings — Math.cos/Math.sin aren't
        // guaranteed bit-identical between server (Node) and client (browser)
        // engines, and an unrounded value here causes a hydration mismatch.
        return (
          <line
            key={i}
            x1={(200 + r1 * Math.cos(a)).toFixed(2)} y1={(150 + r1 * Math.sin(a)).toFixed(2)}
            x2={(200 + r2 * Math.cos(a)).toFixed(2)} y2={(150 + r2 * Math.sin(a)).toFixed(2)}
            opacity="0.4"
          />
        );
      })}
    </g>
  );
}

function RingsPattern({ accent }: { accent: string }) {
  return (
    <g stroke={accent} fill="none" strokeWidth="1.4" opacity="0.5">
      {[26, 44, 62, 80, 98].map((r, i) => (
        <circle key={r} cx={120 + i * 8} cy={160 - i * 4} r={r} opacity={0.65 - i * 0.09} />
      ))}
      <path d="M270 90 C280 110 280 130 270 145 C260 130 260 110 270 90 Z" strokeWidth="2" opacity="0.7" />
      <line x1="270" y1="145" x2="270" y2="180" strokeWidth="2" opacity="0.7" />
    </g>
  );
}

function BarsPattern({ accent }: { accent: string }) {
  const bars = [40, 70, 55, 95, 75, 110];
  return (
    <g stroke={accent} fill="none" strokeWidth="1.6" opacity="0.55">
      {bars.map((h, i) => (
        <rect key={i} x={110 + i * 32} y={210 - h} width="18" height={h} rx="2" />
      ))}
      <path d="M100 95 L160 130 L210 70 L300 115" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
    </g>
  );
}

function CutleryPattern({ accent }: { accent: string }) {
  return (
    <g stroke={accent} fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.55">
      {/* Fork */}
      <g transform="translate(150,70) rotate(14)">
        <line x1="0" y1="0" x2="0" y2="150" />
        {[-10, -3.3, 3.3, 10].map((dx) => (
          <line key={dx} x1={dx} y1="0" x2={dx} y2="38" />
        ))}
        <path d="M-10 0 C-10 -14 10 -14 10 0" />
      </g>
      {/* Spoon */}
      <g transform="translate(250,70) rotate(-10)">
        <line x1="0" y1="34" x2="0" y2="170" />
        <ellipse cx="0" cy="8" rx="20" ry="28" />
      </g>
    </g>
  );
}

function LinePattern({ accent }: { accent: string }) {
  return (
    <g stroke={accent} fill="none" strokeWidth="1.6" opacity="0.55">
      <line x1="60" y1="150" x2="340" y2="150" strokeDasharray="3 5" />
      {[90, 150, 210, 270, 330].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy="150" r={i % 2 === 0 ? 10 : 6} fill={i % 2 === 0 ? accent : "none"} opacity={i % 2 === 0 ? 0.25 : 1} />
          <rect x={x - 16} y={i % 2 === 0 ? 100 : 180} width="32" height="26" rx="2" />
        </g>
      ))}
    </g>
  );
}

const PATTERNS = { stamp: StampPattern, rings: RingsPattern, bars: BarsPattern, cutlery: CutleryPattern, line: LinePattern };

export default function BlogCover({ category, className }: { category: string; className?: string }) {
  const style = CATEGORY_STYLE[category] ?? FALLBACK;
  const Pattern = PATTERNS[style.pattern];

  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      style={{ width: "100%", height: "100%", display: "block", background: style.bg }}
      aria-hidden="true"
    >
      {/* Subtle dot-grid texture */}
      <defs>
        <pattern id={`dots-${style.pattern}`} width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.1" fill={style.accent} opacity="0.08" />
        </pattern>
      </defs>
      <rect width="400" height="300" fill={`url(#dots-${style.pattern})`} />
      <Pattern accent={style.accent} />
    </svg>
  );
}
