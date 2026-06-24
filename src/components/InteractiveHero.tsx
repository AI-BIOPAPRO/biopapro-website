import React, { useState, useEffect } from "react";
import { ArrowUpRight, ShieldCheck, HelpCircle, Sparkles, Flame, Waves } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onStartCalculator: () => void;
  onStartConsultation: () => void;
}

export default function InteractiveHero({ onStartCalculator, onStartConsultation }: HeroProps) {
  const [offsetCounter, setOffsetCounter] = useState(14240112);

  // Increment offset counter by 31 units every 400ms to simulate global industrial output in real-time
  useEffect(() => {
    const timer = setInterval(() => {
      setOffsetCounter((prev) => prev + Math.floor(Math.random() * 8) + 12);
    }, 400);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden py-16 lg:py-24 bg-warm-beige border-b border-warm-border" id="hero-section">
      
      {/* Decorative organic layout shapes */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] rounded-full bg-warm-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-[-5%] w-[400px] h-[400px] rounded-full bg-warm-pale blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Storytelling Copy Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Top Premium Tagline */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-warm-primary/10 border border-warm-primary/20"
            >
              <Sparkles size={11.5} className="text-warm-primary" />
              <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-warm-primary">
                FSC® 100% Certified Direct Manufacturer
              </span>
            </motion.div>

            {/* Giant Title Typography */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-3"
            >
              <h1 style={{ fontFamily: "'Georgia', serif" }} className="text-4xl sm:text-5xl lg:text-7xl font-light italic text-warm-dark leading-[1.05] tracking-tight">
                Sustainable <br />
                at <span className="text-warm-primary font-normal not-italic">Global Scale.</span>
              </h1>
              <p className="font-sans text-warm-dark/80 text-sm sm:text-base max-w-xl leading-relaxed">
                We redefine the food service industry through advanced biomaterial engineering and high-capacity manufacturing. Premium birchwood solutions for the world's most demanding brands. Tasteless, carbon-negative, and micro-burnished.
              </p>
            </motion.div>

            {/* CTAs with beautiful micro hover controls */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3.5 pt-2"
            >
              <button
                onClick={onStartConsultation}
                className="group flex items-center justify-center gap-2 bg-warm-dark border border-warm-dark text-white px-6 py-3.5 rounded-none text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:bg-neutral-800 hover:border-neutral-800 cursor-pointer"
                id="hero-procure-consult-btn"
              >
                Assemble Bespoke B2B Spec
                <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-warm-primary" />
              </button>
              <button
                onClick={onStartCalculator}
                className="flex items-center justify-center gap-2 border border-warm-dark/60 text-warm-dark px-6 py-3.5 rounded-none text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:bg-warm-dark hover:text-white cursor-pointer"
                id="hero-sustainability-calc-btn"
              >
                Calculate Plastic & Carbon Offset
              </button>
            </motion.div>

            {/* Subtle B2B Trust Points with Georgia text */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-warm-border text-left"
            >
              <div>
                <p style={{ fontFamily: "'Georgia', serif" }} className="text-3xl font-light italic text-warm-primary">1.2B</p>
                <p className="text-[10px] uppercase tracking-widest text-warm-muted font-bold">Annual Capacity</p>
              </div>
              <div>
                <p style={{ fontFamily: "'Georgia', serif" }} className="text-3xl font-light italic text-warm-primary">42+</p>
                <p className="text-[10px] uppercase tracking-widest text-warm-muted font-bold">Countries Exported</p>
              </div>
              <div>
                <p style={{ fontFamily: "'Georgia', serif" }} className="text-3xl font-light italic text-warm-primary">100%</p>
                <p className="text-[10px] uppercase tracking-widest text-warm-muted font-bold">Biodegradable</p>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Specimen Round Circle matching mockup with high interactive fidelity */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Arched design background glow */}
            <div className="absolute inset-0 bg-warm-pale rounded-full filter blur-3xl opacity-40 pointer-events-none -z-10" />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-warm-pale rounded-full border border-warm-border p-10 flex flex-col justify-between min-h-[420px] w-[420px] max-w-full text-center relative overflow-hidden shadow-sm"
              style={{ borderRadius: "50%" }}
            >
              {/* Radial gradient background accent matching mockup */}
              <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle at center, #C5A16F 0%, transparent 70%)" }}></div>
              
              {/* Header of statistics card */}
              <div className="flex items-center justify-between border-b border-warm-border pb-3.5 relative z-10 w-full">
                <div className="flex items-center gap-2 mx-auto">
                  <div className="w-2 h-2 rounded-full bg-warm-primary animate-pulse" />
                  <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-warm-muted font-bold">
                    GLOBAL REAL-TIME METRICS
                  </span>
                </div>
              </div>

              {/* Dynamic Live Counter */}
              <div className="my-3 space-y-1 relative z-10">
                <span className="block font-mono text-[9px] text-warm-muted tracking-widest font-bold uppercase">
                  Biopapro Items Formed (Daily Cumulative)
                </span>
                <h3 className="font-mono text-3xl font-extrabold text-warm-dark tracking-tight">
                  {offsetCounter.toLocaleString()}
                </h3>
                <p className="text-[10px] font-sans text-warm-muted leading-relaxed max-w-xs mx-auto">
                  Replacing toxic petrochemical utensils with high-rigidity biodegradable components at sub-second frequency.
                </p>
              </div>

              {/* Educational Highlight Cards */}
              <div className="space-y-2 pt-3.5 border-t border-warm-border relative z-10 max-w-xs mx-auto text-left w-full">
                <div className="flex items-center gap-2.5">
                  <Flame size={12.5} className="text-warm-primary flex-shrink-0" />
                  <span className="font-sans text-[10px] text-warm-dark font-medium">100°C High Steam Tolerance</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Waves size={12.5} className="text-warm-primary flex-shrink-0" />
                  <span className="font-sans text-[10px] text-warm-dark font-medium">Zero Plastic Microbeads & BPA</span>
                </div>
              </div>

              <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
                <span className="text-[9px] uppercase tracking-[0.5em] font-black text-warm-muted">Birch Grade A+</span>
              </div>
            </motion.div>

            {/* Vertical side lines indicator from mockup */}
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-8 pointer-events-none">
              <div className="writing-vertical-rl transform rotate-180 text-[8px] uppercase tracking-[0.5em] font-black text-warm-muted opacity-35">
                Innovation / Excellence / Integrity
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
