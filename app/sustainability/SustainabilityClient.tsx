"use client";

import SustainabilityHero  from "@/components/sustainability/SustainabilityHero";
import ImpactMetrics       from "@/components/sustainability/ImpactMetrics";
import BirchwoodStory      from "@/components/sustainability/BirchwoodStory";
import Lifecycle           from "@/components/sustainability/Lifecycle";
import SocialImpact        from "@/components/sustainability/SocialImpact";
import SustainabilityCerts from "@/components/sustainability/SustainabilityCerts";
import SustainabilityCTA   from "@/components/sustainability/SustainabilityCTA";

export default function SustainabilityClient() {
  return (
    <main>
      {/* S1 — Hero: "<plastic/day>kg of plastic. Not today." */}
      <SustainabilityHero />

      {/* S2 — Impact Metrics: animated counters — plastic/day, 100M units, 300T, 70%+ women */}
      <ImpactMetrics />

      {/* S3 — Birchwood Story: plastic vs birchwood + 4 material properties */}
      <BirchwoodStory />

      {/* S4 — Product Lifecycle: certified supply → manufacturing → compost */}
      <Lifecycle />

      {/* S5 — Social Impact: workforce story + Worker Image */}
      <SocialImpact />

      {/* S6 — Certifications: FSC, ISO 14001, BPI, ISO 45001 — with link to full page */}
      <SustainabilityCerts />

      {/* S7 — CTA: Replace plastic in your supply chain */}
      <SustainabilityCTA />
    </main>
  );
}
