import React from "react";

/**
 * Certification mark SVGs — faithful recreations for immediate recognition
 *
 * Design principle: use actual certification body colors and visual identity.
 * A procurement manager must recognize the mark before reading the label.
 *
 * Legal notes:
 * - ISO 9001/14001/45001: ISO prohibits certified orgs from using the ISO logo.
 *   Recreation uses the well-known globe-badge visual language as a reference mark,
 *   not a claim of ISO endorsement. Final site should use registrar-issued artwork.
 * - FSC®: Certificate holders are licensed to display. Faithful recreation used.
 * - BRCGS: Certificate holders display under BRCGS brand guidelines.
 * - BPI: Certificate holders licensed to display the compostable mark.
 * - FDA / EU: Compliance declarations — not official seals/endorsements.
 * - BSCI/amfori: Member display under amfori brand guidelines.
 */

type LogoProps = { size?: number; variant?: "light" | "dark" };

// ── ISO Globe Badge (shared for 9001, 14001, 45001) ───────────────────────────
// Visual: classic ISO circular badge with globe grid, "ISO" centered, std number below
// Color: ISO navy blue #004494
function ISOBadge({ size, standard, number }: { size: number; standard: string; number: string }) {
  const blue = "#004494";
  const w = size;
  // The badge has the globe circle taking up ~60% of height, number below
  const cx = w / 2;
  const cy = w * 0.44;
  const outerR = w * 0.44;
  const globeR  = w * 0.30;

  // Latitude ellipse vertical offsets from globe center
  const latOffsets = [-globeR * 0.38, 0, globeR * 0.38];

  return (
    <svg width={size} height={size} viewBox={`0 0 ${w} ${w}`} fill="none" aria-label={`${standard} Certified`}>
      {/* Outer thick ring */}
      <circle cx={cx} cy={cy} r={outerR} stroke={blue} strokeWidth={w * 0.055} fill="none" />
      {/* Inner thin ring */}
      <circle cx={cx} cy={cy} r={outerR - w * 0.07} stroke={blue} strokeWidth={w * 0.008} fill="none" opacity="0.5" />

      {/* Globe circle */}
      <circle cx={cx} cy={cy} r={globeR} stroke={blue} strokeWidth={w * 0.018} fill="none" />

      {/* Latitude arcs — clipped to globe */}
      <clipPath id={`globe-clip-${number}`}>
        <circle cx={cx} cy={cy} r={globeR} />
      </clipPath>
      <g clipPath={`url(#globe-clip-${number})`}>
        {latOffsets.map((dy, i) => (
          <ellipse
            key={i}
            cx={cx}
            cy={cy + dy}
            rx={globeR}
            ry={Math.abs(dy) * 0.32 + globeR * 0.13}
            stroke={blue}
            strokeWidth={w * 0.012}
            fill="none"
          />
        ))}
        {/* Central vertical longitude */}
        <line
          x1={cx} y1={cy - globeR}
          x2={cx} y2={cy + globeR}
          stroke={blue} strokeWidth={w * 0.012}
        />
      </g>

      {/* "ISO" text centered on globe */}
      <text
        x={cx} y={cy + w * 0.07}
        textAnchor="middle"
        fontFamily="'Arial Black', Arial, sans-serif"
        fontSize={w * 0.19}
        fontWeight="900"
        fill={blue}
        letterSpacing={w * 0.005}
      >
        ISO
      </text>

      {/* Standard number below badge */}
      <text
        x={cx} y={w * 0.93}
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontSize={w * 0.13}
        fontWeight="700"
        fill={blue}
        letterSpacing={w * 0.004}
      >
        {number}
      </text>
    </svg>
  );
}

export function LogoISO9001({ size = 64 }: LogoProps) {
  return <ISOBadge size={size} standard="ISO 9001:2015" number="9001" />;
}

export function LogoISO14001({ size = 64 }: LogoProps) {
  return <ISOBadge size={size} standard="ISO 14001:2015" number="14001" />;
}

export function LogoISO45001({ size = 64 }: LogoProps) {
  return <ISOBadge size={size} standard="ISO 45001:2018" number="45001" />;
}

// ── BRCGS Food Safety ─────────────────────────────────────────────────────────
// Visual: "BRCGS" bold wordmark, "Food Safety" sub-line, green "CERTIFICATED" bar
// Color: BRCGS navy #005C8B + green #00A651
export function LogoBRCGS({ size = 64 }: LogoProps) {
  const navy  = "#005C8B";
  const green = "#00A651";
  const w = size;
  const h = size * 0.85; // slightly rectangular

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none" aria-label="BRCGS Food Safety Certificated">
      {/* Outer border */}
      <rect x={w*0.03} y={h*0.03} width={w*0.94} height={h*0.94} rx={w*0.06} stroke={navy} strokeWidth={w*0.04} fill="none" />

      {/* "BRCGS" main wordmark */}
      <text
        x={w/2} y={h*0.40}
        textAnchor="middle"
        fontFamily="'Arial Black', Arial, sans-serif"
        fontSize={w*0.22}
        fontWeight="900"
        fill={navy}
        letterSpacing={-w*0.005}
      >
        BRCGS
      </text>

      {/* "Food Safety" line */}
      <text
        x={w/2} y={h*0.58}
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontSize={w*0.10}
        fontWeight="600"
        fill={navy}
        letterSpacing={w*0.006}
      >
        Food Safety
      </text>

      {/* Green CERTIFICATED bar */}
      <rect x={w*0.03} y={h*0.67} width={w*0.94} height={h*0.26} rx={w*0.02} fill={green} />
      <text
        x={w/2} y={h*0.845}
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontSize={w*0.095}
        fontWeight="700"
        fill="white"
        letterSpacing={w*0.008}
      >
        CERTIFICATED
      </text>
    </svg>
  );
}

// ── FSC® 100% ────────────────────────────────────────────────────────────────
// Visual: checkmark-tree logo + "FSC" + "® 100%"
// Color: FSC green #007A34
export function LogoFSC({ size = 64 }: LogoProps) {
  const g = "#007A34";
  const w = size;
  const h = size;
  const cx = w / 2;

  // Tree shape: trunk + 3 stacked triangles (pine silhouette)
  const trunk = { x: cx - w*0.05, y: h*0.6, width: w*0.10, height: h*0.22 };
  // Tiers from bottom to top: wide → narrow
  const tiers = [
    { baseY: h*0.60, points: [cx, h*0.35, cx - w*0.32, h*0.60, cx + w*0.32, h*0.60] },
    { baseY: h*0.50, points: [cx, h*0.20, cx - w*0.26, h*0.50, cx + w*0.26, h*0.50] },
    { baseY: h*0.42, points: [cx, h*0.08, cx - w*0.18, h*0.42, cx + w*0.18, h*0.42] },
  ];

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none" aria-label="FSC® 100% Certified">
      {/* Tree tiers */}
      {tiers.map((t, i) => (
        <polygon key={i} points={t.points.join(",")} fill={g} />
      ))}
      {/* Trunk */}
      <rect x={trunk.x} y={trunk.y} width={trunk.width} height={trunk.height} fill={g} rx="1" />

      {/* Checkmark overlaid on top tier — white */}
      <polyline
        points={`${cx - w*0.10},${h*0.21} ${cx - w*0.02},${h*0.30} ${cx + w*0.14},${h*0.12}`}
        stroke="white"
        strokeWidth={w*0.045}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* FSC text */}
      <text
        x={cx} y={h*0.91}
        textAnchor="middle"
        fontFamily="'Arial Black', Arial, sans-serif"
        fontSize={w*0.17}
        fontWeight="900"
        fill={g}
        letterSpacing={w*0.012}
      >
        FSC®
      </text>
      <text
        x={cx} y={h*1.00}
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontSize={w*0.085}
        fill={g}
        opacity="0.75"
        letterSpacing={w*0.004}
      >
        100% Certified
      </text>
    </svg>
  );
}

// ── BPI Compostable ───────────────────────────────────────────────────────────
// Visual: circle with seedling sprout, "BPI" top, "COMPOSTABLE" bottom arc
// Color: BPI green #4CAF50 / #2E7D32
export function LogoBPI({ size = 64 }: LogoProps) {
  const green = "#2E7D32";
  const lightG = "#4CAF50";
  const w = size;
  const cx = w / 2;
  const cy = w * 0.46;
  const r  = w * 0.44;

  return (
    <svg width={w} height={w} viewBox={`0 0 ${w} ${w}`} fill="none" aria-label="BPI Compostable Certified">
      {/* Outer circle */}
      <circle cx={cx} cy={cy} r={r} stroke={green} strokeWidth={w*0.045} fill="none" />

      {/* Seedling stem */}
      <line x1={cx} y1={cy + r*0.55} x2={cx} y2={cy - r*0.1} stroke={green} strokeWidth={w*0.045} strokeLinecap="round" />

      {/* Left leaf */}
      <path
        d={`M ${cx} ${cy + r*0.15} C ${cx - r*0.5} ${cy + r*0.05} ${cx - r*0.65} ${cy - r*0.45} ${cx - r*0.25} ${cy - r*0.60} C ${cx - r*0.05} ${cy - r*0.25} ${cx} ${cy + r*0.05} ${cx} ${cy + r*0.15} Z`}
        fill={green}
      />
      {/* Right leaf */}
      <path
        d={`M ${cx} ${cy - r*0.05} C ${cx + r*0.45} ${cy - r*0.10} ${cx + r*0.60} ${cy - r*0.55} ${cx + r*0.20} ${cy - r*0.68} C ${cx + r*0.02} ${cy - r*0.30} ${cx} ${cy - r*0.10} ${cx} ${cy - r*0.05} Z`}
        fill={lightG}
      />

      {/* "BPI" text top */}
      <text
        x={cx} y={cy - r*0.76}
        textAnchor="middle"
        fontFamily="'Arial Black', Arial, sans-serif"
        fontSize={w*0.14}
        fontWeight="900"
        fill={green}
        letterSpacing={w*0.01}
      >
        BPI
      </text>

      {/* "COMPOSTABLE" text bottom */}
      <text
        x={cx} y={w*0.97}
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontSize={w*0.085}
        fontWeight="700"
        fill={green}
        letterSpacing={w*0.005}
      >
        COMPOSTABLE
      </text>
    </svg>
  );
}

// ── FDA CFR Title 21 ──────────────────────────────────────────────────────────
// Visual: official shield shape, "FDA" bold, "CFR TITLE 21", "COMPLIANT" bottom
// Color: FDA navy #1A3A6B
export function LogoFDA({ size = 64 }: LogoProps) {
  const navy = "#1A3A6B";
  const w = size;
  const h = size;

  // Shield: top flat, sides taper, rounded bottom point
  const shield = `M ${w*0.5},${h*0.96}
    C ${w*0.5},${h*0.96} ${w*0.08},${h*0.70} ${w*0.08},${h*0.35}
    L ${w*0.08},${h*0.08} L ${w*0.92},${h*0.08} L ${w*0.92},${h*0.35}
    C ${w*0.92},${h*0.70} ${w*0.5},${h*0.96} ${w*0.5},${h*0.96} Z`;

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none" aria-label="FDA CFR Title 21 Compliant">
      {/* Shield outline */}
      <path d={shield} stroke={navy} strokeWidth={w*0.045} fill="none" />
      {/* Inner shield */}
      <path
        d={`M ${w*0.5},${h*0.87} C ${w*0.5},${h*0.87} ${w*0.16},${h*0.66} ${w*0.16},${h*0.36} L ${w*0.16},${h*0.16} L ${w*0.84},${h*0.16} L ${w*0.84},${h*0.36} C ${w*0.84},${h*0.66} ${w*0.5},${h*0.87} Z`}
        stroke={navy} strokeWidth={w*0.012} fill="none" opacity="0.35"
      />
      {/* "FDA" */}
      <text
        x={w/2} y={h*0.50}
        textAnchor="middle"
        fontFamily="'Arial Black', Arial, sans-serif"
        fontSize={w*0.24}
        fontWeight="900"
        fill={navy}
        letterSpacing={w*0.005}
      >
        FDA
      </text>
      {/* Divider */}
      <line x1={w*0.22} y1={h*0.55} x2={w*0.78} y2={h*0.55} stroke={navy} strokeWidth={w*0.012} opacity="0.4" />
      {/* CFR TITLE 21 */}
      <text
        x={w/2} y={h*0.66}
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontSize={w*0.085}
        fontWeight="700"
        fill={navy}
        letterSpacing={w*0.005}
      >
        CFR TITLE 21
      </text>
      {/* COMPLIANT */}
      <text
        x={w/2} y={h*0.76}
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontSize={w*0.075}
        fill={navy}
        opacity="0.65"
        letterSpacing={w*0.006}
      >
        COMPLIANT
      </text>
    </svg>
  );
}

// ── EU Regulation 10/2011 ─────────────────────────────────────────────────────
// Visual: 12 yellow stars in EU flag arrangement, "EU" center, "10/2011" below stars
// Color: EU blue #003399, stars #FFCC00
export function LogoEU({ size = 64 }: LogoProps) {
  const blue   = "#003399";
  const yellow = "#FFCC00";
  const w = size;
  const cx = w * 0.50;
  const cy = w * 0.44;
  const starOrbitR = w * 0.32;

  // 12 stars: draw 5-point star at each position
  function starPoints(ox: number, oy: number, outerR: number, innerR: number): string {
    const pts: string[] = [];
    for (let i = 0; i < 10; i++) {
      const angle = (i * 36 - 90) * (Math.PI / 180);
      const r = i % 2 === 0 ? outerR : innerR;
      pts.push(`${ox + r * Math.cos(angle)},${oy + r * Math.sin(angle)}`);
    }
    return pts.join(" ");
  }

  const stars = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 30 - 90) * (Math.PI / 180);
    return {
      x: cx + starOrbitR * Math.cos(angle),
      y: cy + starOrbitR * Math.sin(angle),
    };
  });

  return (
    <svg width={w} height={w} viewBox={`0 0 ${w} ${w}`} fill="none" aria-label="EU Regulation 10/2011 Compliant">
      {/* Blue circle background */}
      <circle cx={cx} cy={cy} r={w*0.45} fill={blue} />

      {/* 12 gold stars */}
      {stars.map((s, i) => (
        <polygon
          key={i}
          points={starPoints(s.x, s.y, w*0.042, w*0.018)}
          fill={yellow}
        />
      ))}

      {/* "EU" white text center */}
      <text
        x={cx} y={cy + w*0.07}
        textAnchor="middle"
        fontFamily="'Arial Black', Arial, sans-serif"
        fontSize={w*0.16}
        fontWeight="900"
        fill="white"
      >
        EU
      </text>

      {/* "10/2011" below the circle */}
      <text
        x={cx} y={w*0.975}
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontSize={w*0.10}
        fontWeight="700"
        fill={blue}
        letterSpacing={w*0.003}
      >
        10/2011
      </text>
    </svg>
  );
}

// ── amfori BSCI ───────────────────────────────────────────────────────────────
// Visual: "amfori" wordmark top, bold "BSCI" center, "Social Compliance" bottom
// Color: amfori brand teal #00857D + dark text
export function LogoBSCI({ size = 64 }: LogoProps) {
  const teal   = "#00857D";
  const dark   = "#1A2E35";
  const w = size;
  const h = size;

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none" aria-label="amfori BSCI Social Compliance Audited">
      {/* Outer border — teal */}
      <rect x={w*0.04} y={h*0.04} width={w*0.92} height={h*0.92} rx={w*0.08} stroke={teal} strokeWidth={w*0.04} fill="none" />

      {/* "amfori" wordmark — teal, small */}
      <text
        x={w/2} y={h*0.25}
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontSize={w*0.115}
        fontWeight="700"
        fill={teal}
        letterSpacing={-w*0.002}
        fontStyle="italic"
      >
        amfori
      </text>

      {/* Thin divider */}
      <line x1={w*0.18} y1={h*0.30} x2={w*0.82} y2={h*0.30} stroke={teal} strokeWidth={w*0.012} opacity="0.4" />

      {/* "BSCI" bold main */}
      <text
        x={w/2} y={h*0.585}
        textAnchor="middle"
        fontFamily="'Arial Black', Arial, sans-serif"
        fontSize={w*0.24}
        fontWeight="900"
        fill={dark}
        letterSpacing={w*0.006}
      >
        BSCI
      </text>

      {/* "Social Compliance" */}
      <text
        x={w/2} y={h*0.73}
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontSize={w*0.085}
        fill={teal}
        letterSpacing={w*0.002}
      >
        Social Compliance
      </text>

      {/* "AUDITED" bar */}
      <rect x={w*0.04} y={h*0.79} width={w*0.92} height={h*0.17} rx={w*0.03} fill={teal} />
      <text
        x={w/2} y={h*0.905}
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontSize={w*0.090}
        fontWeight="700"
        fill="white"
        letterSpacing={w*0.01}
      >
        AUDITED
      </text>
    </svg>
  );
}

// ── Unified lookup ────────────────────────────────────────────────────────────
export const CERT_LOGOS: Record<string, (props: LogoProps) => React.ReactElement> = {
  iso9001:  LogoISO9001,
  iso14001: LogoISO14001,
  iso45001: LogoISO45001,
  brcgs:    LogoBRCGS,
  fsc:      LogoFSC,
  bpi:      LogoBPI,
  fda:      LogoFDA,
  eu:       LogoEU,
  bsci:     LogoBSCI,
};
