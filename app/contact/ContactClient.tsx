"use client";

import ContactHero          from "@/components/contact/ContactHero";
import ExportInquiryForm    from "@/components/contact/ExportInquiryForm";
import ProcurementJourney   from "@/components/contact/ProcurementJourney";
import GlobalContactNetwork from "@/components/contact/GlobalContactNetwork";
import AfterSubmit          from "@/components/contact/AfterSubmit";
import ContactIndustries    from "@/components/contact/ContactIndustries";
import ContactFAQ           from "@/components/contact/ContactFAQ";
import ContactFinalCTA      from "@/components/contact/ContactFinalCTA";

export default function ContactClient() {
  return (
    <main>
      {/* S1 — Hero: "Let's discuss your next shipment." + 4 stats */}
      <ContactHero />

      {/* S2 — Export Inquiry Form: full procurement intake */}
      <ExportInquiryForm />

      {/* S3 — Procurement Journey: 6-step inquiry to delivery timeline */}
      <ProcurementJourney />

      {/* S4 — Global Contact Network: India HQ */}
      <GlobalContactNetwork />

      {/* S5 — What You Receive: 8-item procurement package */}
      <AfterSubmit />

      {/* S6 — Industries We Supply: 8 segment cards */}
      <ContactIndustries />

      {/* S7 — Procurement FAQ: 8 buyer questions */}
      <ContactFAQ />

      {/* S8 — Final CTA: "Your next shipment starts with a conversation." */}
      <ContactFinalCTA />
    </main>
  );
}
