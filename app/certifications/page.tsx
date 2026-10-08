import type { Metadata } from "next";
import CertificationsClient from "./CertificationsClient";

export const metadata: Metadata = {
  title: "Wooden Cutlery Certifications — FSC, ISO, BRCGS",
  description:
    "Biopapro is a certified wooden cutlery manufacturer for domestic India supply and global export, backed by 5 independent certifications. FSC® 100%, ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, BRCGS Global Standard for Consumer Products.",
  keywords: [
    "FSC certified wooden cutlery India",
    "ISO certified cutlery manufacturer India",
    "BRCGS certified manufacturer",
    "certified wooden cutlery supplier",
    "FSC certified tableware India",
    "ISO 9001 cutlery manufacturer India",
    "ISO 14001 cutlery manufacturer India",
    "ISO 45001 cutlery manufacturer India",
    "certified sustainable cutlery supplier",
    "certified wooden tableware India",
  ],
  openGraph: {
    title: "Certified Wooden Cutlery Manufacturer India — Biopapro",
    description:
      "5 certifications: FSC · ISO 9001 · ISO 14001 · ISO 45001 · BRCGS. India's certified birchwood cutlery manufacturer.",
    type: "website",
    url: "/certifications",
    images: ["/opengraph-image"],
  },
  alternates: { canonical: "/certifications" },
};

export default function CertificationsPage() {
  return <CertificationsClient />;
}
