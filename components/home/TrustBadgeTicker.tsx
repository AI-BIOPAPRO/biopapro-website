"use client";

/**
 * Sitewide trust-badge ticker — a continuously scrolling strip of
 * credibility badges, inspired by the "Food-Grade | Non-Toxic | Plastic-Free"
 * ticker pattern common on DTC eco-brand sites. Reinforces trust signals
 * passively while scrolling, rather than only on a dedicated certifications
 * page. All claims are real facts already established elsewhere on the site
 * (certifications page, company-facts.ts) — nothing new is asserted here.
 */

import { Leaf, ShieldCheck, Factory, Ban, Recycle, Award, Droplets, Globe2 } from "lucide-react";

const BADGES = [
  { icon: ShieldCheck, label: "Food-Grade Quality" },
  { icon: Leaf,        label: "FSC® Certified Birchwood" },
  { icon: Ban,         label: "Zero Plastic" },
  { icon: Factory,     label: "In-House Manufacturing" },
  { icon: Droplets,    label: "Zero Microplastics" },
  { icon: Award,       label: "ISO 9001 · 14001 · 45001" },
  { icon: Recycle,     label: "100% Biodegradable" },
  { icon: Globe2,      label: "Exported to 18+ Countries" },
] as const;

// Alternating accent colors pulled from the site's own palette (green,
// gold/amber used on certifications, terracotta used on contact) — adds
// visual color without introducing new brand colors.
const ACCENTS = ["#4A7A3D", "#C89A5B", "#9C6B4F", "#2D5228"] as const;

function BadgeRow({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div className="flex items-center flex-shrink-0" aria-hidden={ariaHidden}>
      {BADGES.map((badge, i) => {
        const Icon = badge.icon;
        const accent = ACCENTS[i % ACCENTS.length];
        return (
          <div key={i} className="flex items-center flex-shrink-0 px-5 md:px-7 py-3">
            <Icon size={14} strokeWidth={2} style={{ color: accent }} className="flex-shrink-0" />
            <span
              className="ml-2 font-mono text-[11px] uppercase tracking-[0.16em] whitespace-nowrap"
              style={{ color: "rgba(255,255,255,0.88)" }}
            >
              {badge.label}
            </span>
            <span className="ml-5 md:ml-7 w-1 h-1 rounded-full flex-shrink-0" style={{ background: accent }} />
          </div>
        );
      })}
    </div>
  );
}

export default function TrustBadgeTicker() {
  return (
    <div
      className="relative w-full overflow-hidden border-b"
      style={{ background: "#1F3A1B", borderColor: "rgba(255,255,255,0.08)" }}
      aria-label="Biopapro trust and certification highlights"
    >
      <div className="flex ticker-track" style={{ width: "max-content" }}>
        <BadgeRow />
        <BadgeRow ariaHidden />
      </div>

      <style>{`
        .ticker-track {
          animation: ticker-scroll 32s linear infinite;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
        @keyframes ticker-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ticker-track {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
