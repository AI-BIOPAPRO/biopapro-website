"use client";

import CertHero            from "@/components/certifications/CertHero";
import CertificationsGrid  from "@/components/certifications/CertificationsGrid";
import ComplianceByMarket  from "@/components/certifications/ComplianceByMarket";
import DocumentationPackage from "@/components/certifications/DocumentationPackage";
import CertCTA             from "@/components/certifications/CertCTA";

export default function CertificationsClient() {
  return (
    <main>
      {/* S1 — Hero: "Every certification is a promise kept." + 6 cert badges */}
      <CertHero />

      {/* S2 — All Certifications: expandable cards, FSC · ISO · FDA · EU · BPI · BSCI */}
      <CertificationsGrid />

      {/* S3 — Compliance by Market: EU / US / Middle East / Pacific requirements */}
      <ComplianceByMarket />

      {/* S4 — Documentation Package: what ships with every container */}
      <DocumentationPackage />

      {/* S5 — CTA: request certificate package + office contacts */}
      <CertCTA />
    </main>
  );
}
