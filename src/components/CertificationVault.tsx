import React, { useState } from "react";
import { CERTIFICATIONS } from "../data";
import { Trees, ShieldCheck, CheckCircle2, Award, Cpu, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function CertificationVault() {
  const [selectedCert, setSelectedCert] = useState<string>("fsc");
  const [copiedNotification, setCopiedNotification] = useState<string | null>(null);

  const getCertIcon = (iconName: string) => {
    switch (iconName) {
      case "Trees": return <Trees size={18} />;
      case "ShieldCheck": return <ShieldCheck size={18} />;
      case "CheckCircle": return <CheckCircle2 size={18} />;
      case "BadgeCheck": return <Award size={18} />;
      case "Cpu": return <Cpu size={18} />;
      default: return <Award size={18} />;
    }
  };

  const handleDownload = (certId: string) => {
    setCopiedNotification(certId);
    setTimeout(() => {
      setCopiedNotification(null);
    }, 4000);
  };

  return (
    <section className="py-16 bg-warm-beige border-b border-warm-border" id="certifications-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="font-mono text-[10px] tracking-[0.3em] text-warm-primary uppercase font-bold block mb-1">
            LEGAL & REGULATORY VERITY
          </span>
          <h2 className="font-sans font-black text-3xl text-warm-dark tracking-tight mt-1 leading-tight">
            The Biopapro <span style={{ fontFamily: "'Georgia', serif" }} className="text-warm-primary italic font-normal">Certifications Vault</span>.
          </h2>
          <p className="font-sans text-xs sm:text-sm text-warm-muted mt-2 leading-relaxed">
            Corporate buyers operate under strict commercial rules. Select an audit body below to verify dynamic licensing parameters, regulatory standards, and compliance dates.
          </p>
        </div>

        {/* Dynamic Certification Badges Hub Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start lg:max-w-5xl mx-auto">
          
          {/* Certificate selector buttons */}
          <div className="lg:col-span-6 space-y-2">
            {CERTIFICATIONS.map((cert) => {
              const isSelected = selectedCert === cert.id;
              return (
                <button
                  key={cert.id}
                  onClick={() => setSelectedCert(cert.id)}
                  className={`w-full flex items-center gap-3.5 p-3.5 rounded-none text-left border transition-all duration-300 cursor-pointer ${
                    isSelected 
                      ? "bg-warm-dark border-warm-dark text-white" 
                      : "bg-warm-cream/50 border-warm-border text-warm-dark hover:bg-warm-pale"
                  }`}
                  id={`cert-btn-${cert.id}`}
                >
                  <span className={`p-2 rounded-none transition-colors duration-300 ${
                    isSelected ? "bg-white/10 text-white" : "bg-warm-pale text-warm-primary"
                  }`}>
                    {getCertIcon(cert.iconName)}
                  </span>
                  <div className="flex-1 min-w-0">
                    <span className="block font-sans font-bold text-xs truncate">
                      {cert.name}
                    </span>
                    <span className="block font-mono text-[9px] text-warm-primary -mt-0.5 font-bold uppercase tracking-wider">
                      {cert.issuer}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Certificate details audit frame */}
          <div className="lg:col-span-6 bg-warm-cream border border-warm-border rounded-none p-6 sm:p-8 min-h-[300px] flex flex-col justify-between text-warm-dark">
            <AnimatePresence mode="wait">
              {CERTIFICATIONS.map((cert) => {
                if (cert.id !== selectedCert) return null;
                return (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4 flex-1 flex flex-col justify-between"
                  >
                    <div>
                      {/* Sub-header of certified audit */}
                      <div className="flex justify-between items-center text-[10px] font-mono text-warm-primary border-b border-warm-border pb-2.5">
                        <span className="font-bold uppercase tracking-wider">OFFICIAL REGISTRATION LOG</span>
                        <span className="bg-warm-primary/10 px-2 py-0.5 rounded-none uppercase font-semibold text-[9px]">
                          {cert.validFrom}
                        </span>
                      </div>

                      {/* Main Certification title */}
                      <h3 style={{ fontFamily: "'Georgia', serif" }} className="text-xl italic font-normal text-warm-dark mt-3">
                        {cert.name}
                      </h3>
                      <p className="font-sans text-xs text-warm-primary -mt-1 font-semibold block uppercase font-mono tracking-wide">
                        Authorized oversight: {cert.issuer}
                      </p>

                      {/* Explicit description detailing food contact, zero heavy-metal parameters, home composting logs */}
                      <p className="font-sans text-xs text-warm-muted leading-relaxed mt-3">
                        {cert.description}
                      </p>
                    </div>

                    {/* Download specifications sheet block */}
                    <div className="mt-6 pt-4 border-t border-warm-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-sans text-warm-dark">
                      <span className="font-mono text-[9.5px] text-warm-muted block">STATUS: VERIFIED SECURE ACTIVE</span>
                      <div className="flex flex-col items-end">
                        <button
                          onClick={() => handleDownload(cert.id)}
                          className="font-bold flex items-center gap-1 hover:underline cursor-pointer text-warm-primary text-xs uppercase tracking-wider font-sans bg-transparent border-0 outline-none"
                        >
                          Request Documents Pack <ArrowUpRight size={13} />
                        </button>
                        {copiedNotification === cert.id && (
                          <span className="text-[10px] text-warm-primary font-mono mt-1 font-semibold bg-warm-primary/10 px-2 py-0.5">
                            ✓ PDF/XML bundle requested successfully.
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
