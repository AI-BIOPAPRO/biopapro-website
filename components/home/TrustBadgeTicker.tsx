"use client";

import { Leaf, ShieldCheck, Factory, Ban, Recycle, Award, Droplets, Globe2, Sprout } from "lucide-react";

const BADGES = [
  { icon: ShieldCheck, label: "Food-Grade Quality",         accent: "#E97316" },
  { icon: Leaf,        label: "FSC® Certified Birchwood",   accent: "#E97316" },
  { icon: Ban,         label: "Zero Plastic",               accent: "#E97316" },
  { icon: Factory,     label: "In-House Manufacturing",     accent: "#E97316" },
  { icon: Droplets,    label: "Zero Microplastics",         accent: "#E97316" },
  { icon: Award,       label: "ISO 9001 · 14001 · 45001",   accent: "#E97316" },
  { icon: Recycle,     label: "100% Biodegradable",         accent: "#E97316" },
  { icon: Globe2,      label: "Exported to 18+ Countries",  accent: "#E97316" },
  { icon: Sprout,      label: "BRCGS Certified",            accent: "#E97316" },
] as const;

function BadgeRow({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div className="flex items-center flex-shrink-0" aria-hidden={ariaHidden}>
      {BADGES.map((badge, i) => {
        const Icon = badge.icon;
        return (
          <div key={i} className="flex items-center flex-shrink-0 px-6 md:px-8 py-3.5">
            <span
              className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0"
              style={{ background: `${badge.accent}22` }}
            >
              <Icon size={11} strokeWidth={2.5} style={{ color: badge.accent }} />
            </span>
            <span
              className="ml-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] whitespace-nowrap"
              style={{ color: "rgba(26,18,8,0.8)" }}
            >
              {badge.label}
            </span>
            <span
              className="ml-6 md:ml-8 flex-shrink-0 rotate-45 w-[5px] h-[5px]"
              style={{ background: badge.accent, opacity: 0.5 }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default function TrustBadgeTicker() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        background: "#EDE5D4",
        borderTop: "1px solid rgba(233,115,22,0.2)",
        borderBottom: "1px solid rgba(233,115,22,0.2)",
      }}
      aria-label="Biopapro trust and certification highlights"
    >
      <div
        className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #EDE5D4, transparent)" }}
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #EDE5D4, transparent)" }}
        aria-hidden="true"
      />

      <div className="flex ticker-track" style={{ width: "max-content" }}>
        <BadgeRow />
        <BadgeRow ariaHidden />
        <BadgeRow ariaHidden />
      </div>

      <style>{`
        .ticker-track {
          animation: ticker-scroll 36s linear infinite;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
        @keyframes ticker-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ticker-track { animation: none; }
        }
      `}</style>
    </div>
  );
}
