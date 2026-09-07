/**
 * RouteLoading — minimal, on-brand loading boundary for route-level
 * Suspense fallbacks (each route's loading.tsx).
 *
 * Deliberately reuses existing primitives instead of introducing a new
 * visual system: the mono/uppercase label treatment already used by
 * SectionLabel, and the same pulsing-dot pattern already used for "live"
 * indicators (e.g. ImpactCounter, GlobalPresence). Background matches the
 * cream tone every hero on the site opens with, so there's no color flash
 * when the real page swaps in.
 */
export default function RouteLoading({ section }: { section: string }) {
  return (
    <div
      className="flex items-center justify-center"
      style={{ background: "#F6F1E8", minHeight: "100svh" }}
      role="status"
      aria-label={`Loading ${section}`}
    >
      <div className="flex items-center gap-3">
        <span
          className="w-1.5 h-1.5 rounded-full bg-green animate-pulse flex-shrink-0"
          aria-hidden="true"
        />
        <span className="font-mono text-[11px] text-ink-muted uppercase tracking-[0.28em]">
          Loading {section}
        </span>
      </div>
    </div>
  );
}
