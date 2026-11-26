"use client";

/**
 * Kinetic text marquee — two rows scrolling in opposite directions.
 * Pattern from food/product brand sites (motionsites.ai inspiration):
 * bold editorial text in alternating colors creates momentum without
 * images, breaking the rhythm between heavy content sections.
 *
 * Pure CSS animation — GPU-composited, no JS layout thrash.
 */

const ROW1 = [
  "BIRCHWOOD",
  "ECO-FIRST",
  "FSC CERTIFIED",
  "INDIA",
  "100M+ UNITS",
  "ZERO PLASTIC",
  "MADE IN MUMBAI",
];

const ROW2 = [
  "WOODEN CUTLERY",
  "ISO 9001",
  "BRCGS",
  "18+ COUNTRIES",
  "B2B SUPPLY",
  "BIODEGRADABLE",
  "SUSTAINABLE",
];

function Row({ items, reverse = false, bg, fg, accent }: {
  items: string[];
  reverse?: boolean;
  bg: string;
  fg: string;
  accent: string;
}) {
  const track = [...items, ...items, ...items, ...items];
  const animName = reverse ? "marquee-rev" : "marquee-fwd";

  return (
    <div
      className="relative overflow-hidden py-4"
      style={{ background: bg }}
    >
      <div
        className="flex items-center w-max"
        style={{ animation: `${animName} 28s linear infinite` }}
      >
        {track.map((item, i) => (
          <div key={i} className="flex items-center flex-shrink-0">
            <span
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(0.65rem, 1.3vw, 0.85rem)",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: fg,
                whiteSpace: "nowrap",
                padding: "0 1.6rem",
              }}
            >
              {item}
            </span>
            <span
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(0.6rem, 1.2vw, 0.75rem)",
                color: accent,
                flexShrink: 0,
              }}
              aria-hidden="true"
            >
              ·
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee-fwd {
          from { transform: translateX(0); }
          to   { transform: translateX(-25%); }
        }
        @keyframes marquee-rev {
          from { transform: translateX(-25%); }
          to   { transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="marquee-fwd"], [style*="marquee-rev"] {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}

export default function MarqueeStrip() {
  return (
    <div
      className="relative overflow-hidden select-none"
      aria-label="Brand values"
      aria-hidden="true"
    >
      {/* Row 1 → cream bg, green text, orange dots */}
      <Row
        items={ROW1}
        reverse={false}
        bg="#EDE5D4"
        fg="rgba(26,71,49,0.85)"
        accent="#E97316"
      />
      {/* Row 2 ← warm peach bg, forest text, orange dots */}
      <Row
        items={ROW2}
        reverse={true}
        bg="#F5F0E6"
        fg="rgba(26,18,8,0.65)"
        accent="#C4580A"
      />
    </div>
  );
}
