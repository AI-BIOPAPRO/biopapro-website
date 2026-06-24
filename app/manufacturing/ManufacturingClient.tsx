"use client";

import ManufacturingHero    from "@/components/manufacturing/ManufacturingHero";
import CapabilityOverview   from "@/components/manufacturing/CapabilityOverview";
import ProductionJourney    from "@/components/manufacturing/ProductionJourney";
import QualityAssurance     from "@/components/manufacturing/QualityAssurance";
import WorkforceSection     from "@/components/manufacturing/WorkforceSection";
import ExportOperations     from "@/components/manufacturing/ExportOperations";
import ManufacturingMetrics from "@/components/manufacturing/ManufacturingMetrics";
import ManufacturingCTA     from "@/components/manufacturing/ManufacturingCTA";

export default function ManufacturingClient() {
  return (
    <main>
      {/* S1 — Hero: "Built for global supply." + video bg + key stats */}
      <ManufacturingHero />

      {/* S2 — Capability Overview: investor-grade metrics table */}
      <CapabilityOverview />

      {/* S3 — Production Journey: 6-step from certified supply to global distribution */}
      <ProductionJourney />

      {/* S4 — Quality Assurance: ISO 9001, BRCGS, 12 checkpoints, optical sorting */}
      <QualityAssurance />

      {/* S5 — Workforce: 380+ employees, 70%+ women, BSCI audited */}
      <WorkforceSection />

      {/* S6 — Export Operations: container types, JNPT, logistics flow, capability table */}
      <ExportOperations />

      {/* S7 + S8 — Metrics (animated counters) + Why Buyers Trust Biopapro */}
      <ManufacturingMetrics />

      {/* S9 — CTA: Request Export Quote + both office contacts */}
      <ManufacturingCTA />
    </main>
  );
}
