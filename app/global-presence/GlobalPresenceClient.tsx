"use client";

import GlobalHero             from "@/components/global-presence/GlobalHero";
import OriginToWorld          from "@/components/global-presence/OriginToWorld";
import RegionalFootprint      from "@/components/global-presence/RegionalFootprint";
import IndustriesServed       from "@/components/global-presence/IndustriesServed";
import ExportInfrastructure   from "@/components/global-presence/ExportInfrastructure";
import ContainerJourney       from "@/components/global-presence/ContainerJourney";
import BuyerTrust             from "@/components/global-presence/BuyerTrust";
import ProcurementMetrics     from "@/components/global-presence/ProcurementMetrics";
import ExportPartnershipCTA   from "@/components/global-presence/ExportPartnershipCTA";

export default function GlobalPresenceClient() {
  return (
    <main>
      {/* S1 — Hero: flat world map, "Manufactured in India. Delivered Worldwide." */}
      <GlobalHero />

      {/* S2 — From India to the World: large SVG map, animated routes, India origin */}
      <OriginToWorld />

      {/* S3 — Global Footprint: 6-region breakdown, country lists */}
      <RegionalFootprint />

      {/* S4 — Industries Served: airlines, hospitality, food service, catering, distribution */}
      <IndustriesServed />

      {/* S5 — Export Infrastructure: scale, container loading, QC, documentation, lead times */}
      <ExportInfrastructure />

      {/* S6 — A Container's Journey: 9-step supply chain timeline */}
      <ContainerJourney />

      {/* S7 — Why Buyers Choose Biopapro: certifications, trust signals, quote */}
      <BuyerTrust />

      {/* S8 — Procurement Metrics: animated counters, real company stats */}
      <ProcurementMetrics />

      {/* S9 — Export Partnership CTA: office contacts, dual CTA */}
      <ExportPartnershipCTA />
    </main>
  );
}
