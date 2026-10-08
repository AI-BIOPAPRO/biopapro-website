import Image from "next/image";

/**
 * Certification marks — extracted directly from Biopapro's actual issued
 * certificates (not recreated), cropped to the logo mark and stored under
 * /public/certifications/. ISO 9001/14001/45001 are all issued by the same
 * registrar (ICV Assessments), so they share one logo image.
 */

type LogoProps = { size?: number; variant?: "light" | "dark" };

const LOGO_FILES: Record<string, { src: string; alt: string; aspect: number }> = {
  fsc:      { src: "/certifications/fsc.png",   alt: "FSC® Chain of Custody Certified",        aspect: 347 / 330 },
  iso9001:  { src: "/certifications/icv.png",   alt: "ISO 9001:2015 — ICV Assessments",         aspect: 1 },
  iso14001: { src: "/certifications/icv.png",   alt: "ISO 14001:2015 — ICV Assessments",        aspect: 1 },
  iso45001: { src: "/certifications/icv.png",   alt: "ISO 45001:2018 — ICV Assessments",        aspect: 1 },
  brcgs:    { src: "/certifications/brcgs.png", alt: "BRCGS Consumer Products Certificated",    aspect: 398 / 295 },
};

function CertLogoImage({ id, size = 64 }: { id: string; size?: number }) {
  const logo = LOGO_FILES[id];
  if (!logo) return null;
  const height = Math.round(size / logo.aspect);
  return (
    <Image
      src={logo.src}
      alt={logo.alt}
      width={size}
      height={height}
      style={{ width: size, height: "auto", maxHeight: size, objectFit: "contain" }}
      unoptimized
    />
  );
}

export function LogoFSC({ size = 64 }: LogoProps) {
  return <CertLogoImage id="fsc" size={size} />;
}
export function LogoISO9001({ size = 64 }: LogoProps) {
  return <CertLogoImage id="iso9001" size={size} />;
}
export function LogoISO14001({ size = 64 }: LogoProps) {
  return <CertLogoImage id="iso14001" size={size} />;
}
export function LogoISO45001({ size = 64 }: LogoProps) {
  return <CertLogoImage id="iso45001" size={size} />;
}
export function LogoBRCGS({ size = 64 }: LogoProps) {
  return <CertLogoImage id="brcgs" size={size} />;
}

// ── Unified lookup ────────────────────────────────────────────────────────────
export const CERT_LOGOS: Record<string, (props: LogoProps) => React.ReactElement> = {
  iso9001:  LogoISO9001,
  iso14001: LogoISO14001,
  iso45001: LogoISO45001,
  brcgs:    LogoBRCGS,
  fsc:      LogoFSC,
};
