import type { Metadata } from "next";
import CertificationsClient from "./CertificationsClient";

export const metadata: Metadata = {
  title: "FSC ISO BRCGS Certified Wooden Cutlery Manufacturer India — Biopapro",
  description:
    "Biopapro holds 9 certifications: FSC® 100%, ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, BRCGS Food Safety, BPI Compostable, BSCI, FDA CFR 21, EU 10/2011. Certified wooden cutlery manufacturer for domestic India supply and global export.",
  keywords: [
    "FSC certified wooden cutlery India",
    "ISO certified cutlery manufacturer India",
    "BRCGS certified manufacturer",
    "certified wooden cutlery supplier",
    "FSC certified tableware India",
    "ISO 9001 cutlery manufacturer India",
    "BPI compostable cutlery India",
    "BSCI audited manufacturer India",
    "FDA food contact wooden cutlery",
    "EU 10/2011 birchwood tableware",
    "certified sustainable cutlery supplier",
    "certified wooden tableware India",
  ],
  openGraph: {
    title: "Certified Wooden Cutlery Manufacturer India — Biopapro",
    description:
      "9 certifications: FSC · ISO 9001 · ISO 14001 · ISO 45001 · BRCGS · BPI · BSCI · FDA · EU. India's certified birchwood cutlery manufacturer.",
    type: "website",
    url: "https://biopapro.com/certifications",
  },
  alternates: { canonical: "https://biopapro.com/certifications" },
};

export default function CertificationsPage() {
  return <CertificationsClient />;
}
