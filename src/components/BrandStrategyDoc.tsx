import React, { useState } from "react";
import { 
  FileText, Layout, Activity, Compass, Code2, Gauge, 
  ChevronRight, ArrowUpRight, Scale, ShieldCheck, 
  Trees, Layers, Sparkle, Target, Zap, Search
} from "lucide-react";

export default function BrandStrategyDoc() {
  const [activeTab, setActiveTab] = useState<"positioning" | "architecture" | "ux" | "sections" | "nextjs" | "seo">("positioning");
  const [searchQuery, setSearchQuery] = useState("");

  const tabList = [
    { id: "positioning", label: "Positioning & Brand Strategy", icon: Target },
    { id: "architecture", label: "Information Architecture", icon: Layout },
    { id: "ux", label: "UX & Visual Direction", icon: Activity },
    { id: "sections", label: "Section-by-Section Psychology", icon: Compass },
    { id: "nextjs", label: "Next.js Production Architecture", icon: Code2 },
    { id: "seo", label: "Conversion & SEO Strategy", icon: Gauge },
  ] as const;

  return (
    <div className="bg-warm-beige text-warm-dark rounded-none border border-warm-border overflow-hidden flex flex-col md:flex-row min-h-[700px]">
      
      {/* Sidebar Nav */}
      <div className="w-full md:w-80 bg-warm-pale border-r border-warm-border p-6 flex flex-col justify-between rounded-none">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="p-2 bg-warm-dark text-white rounded-none">
              <FileText size={18} />
            </span>
            <div>
              <span className="block font-mono text-[9px] tracking-[0.25em] text-warm-primary font-bold uppercase">
                Strategic Brief
              </span>
              <span className="block font-sans font-semibold text-sm -mt-0.5 text-warm-dark">
                Biopapro Executive Manual
              </span>
            </div>
          </div>

          <p className="text-xs text-warm-muted mb-6 font-sans leading-relaxed">
            This dossier compiles the master strategy, Next.js architecture, brand matrices, and engineering formulas backing the worldwide premium Biopapro digital transformation.
          </p>

          <nav className="space-y-1">
            {tabList.map((t) => {
              const Icon = t.icon;
              const isActive = activeTab === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-none text-left text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive 
                      ? "bg-warm-dark text-white" 
                      : "text-warm-dark/70 hover:bg-warm-cream hover:text-warm-dark"
                  }`}
                  id={`strategy-tab-${t.id}`}
                >
                  <Icon size={14} className={isActive ? "text-warm-primary" : "text-warm-primary"} />
                  <span className="truncate">{t.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="mt-8 pt-4 border-t border-warm-border/50 font-mono text-[9px] text-warm-muted flex items-center justify-between">
          <span>CODENAME: BIOPAPRO-X</span>
          <span>v1.0.0</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6 md:p-10 overflow-y-auto max-h-[800px] scrollbar-none bg-warm-cream">
        
        {/* TAB 1: BRAND POSITIONING */}
        {activeTab === "positioning" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-warm-border pb-4">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-warm-primary font-semibold">PART I</span>
                <h2 style={{ fontFamily: "'Georgia', serif" }} className="text-2xl italic font-normal text-warm-primary">Strategic Positioning</h2>
              </div>
              <Target className="text-warm-primary opacity-20" size={36} />
            </div>

            <section className="space-y-4">
              <h3 style={{ fontFamily: "'Georgia', serif" }} className="text-lg italic font-normal text-warm-dark">The Sustainable Authority Matrix</h3>
              <p className="text-xs sm:text-sm text-warm-dark leading-relaxed">
                Biopapro is not simply a wood manufacturing exporter; it represents the <strong>high-precision material engineering frontier</strong> of ecological product design. Competitors market themselves using outdated, dusty, low-quality catalog formats replete with clip-around stock icons of green leaves. Biopapro disrupts this commodity approach by treating cutlery with the precise aesthetics and manufacturing strictness of high-end tech hardware (like Apple and Tesla) and the ethical clarity of Patagonia.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="bg-warm-pale p-4 rounded-none border border-warm-border">
                  <span className="text-xs font-mono text-warm-primary font-bold uppercase block mb-1">Old Eco-Manufacturing Trap</span>
                  <p className="text-xs text-warm-muted leading-relaxed">
                    Cheap commodities, unsanitized splintered wood, corporate brochures, standard "Eco-Friendly" greenwashed logos, complex pricing forms, lack of traceability, and focus solely on cost.
                  </p>
                </div>
                <div className="bg-warm-dark text-white p-4 rounded-none border border-warm-border/30">
                  <span className="text-xs font-mono text-warm-primary font-bold uppercase block mb-1">The Premium Biopapro Paradigm</span>
                  <p className="text-xs text-warm-cream/90 leading-relaxed">
                    Rigid multi-stage micro-polished pristine white forest birch. Advanced mechanical form conditioning, surgical certificates vault, absolute aesthetic clarity, and interactive B2B logistics.
                  </p>
                </div>
              </div>

              <h4 className="font-sans font-bold text-xs text-warm-primary uppercase tracking-widest">Core Brand Pillars & Competitor Positioning</h4>
              <ul className="space-y-3 text-xs leading-relaxed text-warm-dark">
                <li className="flex gap-2">
                  <span className="font-mono text-warm-primary font-bold">01.</span>
                  <div>
                    <strong className="text-warm-dark block font-sans font-semibold">Pure White Forest Birch (Not Bamboo or Sugarcane pulp)</strong>
                    Sourced from premium northern zones where winter climates slow wood expansion, yielding highly dense, taste-neutral, pristine fibers that require zero optical bleaches.
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="font-mono text-warm-primary font-bold">02.</span>
                  <div>
                    <strong className="text-warm-dark block font-sans font-semibold">Micro-Abrasive Satin Double Polish</strong>
                    Unlike competitors with rough surfaces, our 48-hour continuous wood-shaving tumble process aligns organic cells to eliminate splinter fibers entirely without chemical waxes.
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="font-mono text-warm-primary font-bold">03.</span>
                  <div>
                    <strong className="text-warm-dark block font-sans font-semibold">High-Hydraulic Neck Rib Compression</strong>
                    Conventional wooden forks break under mild protein tension. We utilize intense heat and hydraulic dies to compress the neck points, raising rigidity by 42% over generic tableware.
                  </div>
                </li>
              </ul>
            </section>
          </div>
        )}

        {/* TAB 2: INFORMATION ARCHITECTURE */}
        {activeTab === "architecture" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-warm-border pb-4">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-warm-primary font-semibold">PART II</span>
                <h2 style={{ fontFamily: "'Georgia', serif" }} className="text-2xl italic font-normal text-warm-primary">Information Architecture & Navigation Tree</h2>
              </div>
              <Layout className="text-warm-primary opacity-20" size={36} />
            </div>

            <section className="space-y-4">
              <p className="text-xs sm:text-sm text-warm-dark leading-relaxed">
                The content hierarchy shifts from basic listing layouts to a deep, educational narrative grid. B2B buyers arriving on the platform aren't just shown wholesale tables; they are funneled through a high-fidelity visual argument detailing <strong>Origin ➔ Physics of Rigidity ➔ Certificates ➔ Interactive Logistics Loading ➔ Premium Sample Cart.</strong>
              </p>

              <div className="bg-warm-pale p-6 border border-warm-border rounded-none font-mono text-xs">
                <span className="text-warm-primary font-bold block mb-4">// GLOBAL PLATFORM ARCHITECTURE DIRECTORY TREE</span>
                
                <div className="space-y-2 text-warm-dark">
                  <div className="text-warm-primary font-bold">├── (1) HOME INDEX PATH (Storytelling Engine)</div>
                  <div className="pl-6 border-l border-warm-border">├── ├── HERO (Brand Oath, Core Counter, Multi-axis Parallax Intro)</div>
                  <div className="pl-6 border-l border-warm-border">├── ├── INTERACTIVE MATRICES (Carbon Offset Calculator vs Plastics)</div>
                  <div className="pl-6 border-l border-warm-border">├── ├── PRODUCT DISCOVERY CARRAUSEL (Cutlery, Stirrers, Sticks, Accessories)</div>
                  <div className="pl-6 border-l border-warm-border">├── ├── B2B PROPOSAL ENGINE (Gemini-Generated Procurement Advisor API)</div>
                  <div className="pl-6 border-l border-warm-border">├── └── SPECIFICATIONS VAULT (FSC, SGS ISO Validation Core)</div>

                  <div className="text-warm-primary font-bold mt-4">├── (2) PRODUCTS CATALOG PATH (Grid Spec sheets)</div>
                  <div className="pl-6 border-l border-warm-border">├── ├── High-Core Cutlery (Rigid Forks, Deep Hollow Spoons, Serrated Knives)</div>
                  <div className="pl-6 border-l border-warm-border">├── ├── Hot Liquid Stirrers (Individually paper wrapped, round ends)</div>
                  <div className="pl-6 border-l border-warm-border">├── └── Specialized Sticks (Industrial cream paddles, micro tolerances)</div>

                  <div className="text-warm-primary font-bold mt-4">├── (3) THE BIO-FACTORY OPERATIVE PATH (Manufacturing Transparency)</div>
                  <div className="pl-6 border-l border-warm-border">├── ├── Pure Wood Origin (Arctic White Birch zones, certified harvesting)</div>
                  <div className="pl-6 border-l border-warm-border">├── ├── The Dehydration Chamber (Air-flow sanitation under 8% humidity)</div>
                  <div className="pl-6 border-l border-warm-border">├── └── Optical Selection (4K active surface cameras spotting variance)</div>

                  <div className="text-warm-primary font-bold mt-4">├── (4) SUSTAINABILITY TRUST HUB (Certificate Vault & Global Export API)</div>
                  <div className="pl-6 border-l border-warm-border">├── ├── Traceability API (Track logs by carton shipping license ID)</div>
                  <div className="pl-6 border-l border-warm-border">├── └── PDF Vault (FSC Chain of Custody, FDA Certification direct lookup)</div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* TAB 3: UX & EYE-TRACKING DESIGN */}
        {activeTab === "ux" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-warm-border pb-4">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-warm-primary font-semibold">PART III</span>
                <h2 style={{ fontFamily: "'Georgia', serif" }} className="text-2xl italic font-normal text-warm-primary">UX, Visual & Motion Direction</h2>
              </div>
              <Activity className="text-warm-primary opacity-20" size={36} />
            </div>

            <section className="space-y-4">
              <h3 style={{ fontFamily: "'Georgia', serif" }} className="text-lg italic font-normal text-warm-dark">Design System Specification</h3>
              <p className="text-xs sm:text-sm text-warm-dark leading-relaxed">
                We avoid "generic green leaf" eco clichés. Green plastic colors communicate cheap retail packaging; real sustainable luxury relies on natural forest tones, raw white wood textures, slate rock shadows, and clean, high-contrast, modern technical layouts.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                <div className="bg-warm-dark text-[#FAF9F5] p-5 rounded-none border border-warm-border/20">
                  <span className="font-mono text-[9.5px] uppercase tracking-widest text-[#C5A16F] block mb-2 font-bold">Primary Accent Color</span>
                  <h4 style={{ fontFamily: "'Georgia', serif" }} className="text-sm italic font-normal mb-1">Deep Forest Sage</h4>
                  <p className="font-mono text-xs text-warm-primary">#2D3E2E</p>
                  <span className="text-[10px] text-warm-cream/80 block mt-3 font-sans leading-relaxed">Conveys silent, premium authority, organic wood forests, and premium corporate governance.</span>
                </div>
                <div className="bg-warm-beige text-[#1C1B19] p-5 rounded-none border border-warm-border">
                  <span className="font-mono text-[9.5px] uppercase tracking-widest text-warm-primary block mb-2 font-bold">Primary Light Canvas</span>
                  <h4 style={{ fontFamily: "'Georgia', serif" }} className="text-sm italic font-normal mb-1">Pristine Birchwood White</h4>
                  <p className="font-mono text-xs text-warm-primary">#FAF9F5</p>
                  <span className="text-[10px] text-warm-dark/80 block mt-3 font-sans leading-relaxed">High-society premium organic off-white matte feel. Reflects premium wood fibers and prevents screen tiredness.</span>
                </div>
                <div className="bg-warm-dark text-[#FAF9F5] p-5 rounded-none border border-warm-border/20">
                  <span className="font-mono text-[9.5px] uppercase tracking-widest text-warm-primary block mb-2 font-bold">Primary Dark Text</span>
                  <h4 style={{ fontFamily: "'Georgia', serif" }} className="text-sm italic font-normal mb-1">Deep Ebony Charcoal</h4>
                  <p className="font-mono text-xs text-[#FAF9F5]/70">#1C1B19</p>
                  <span className="text-[10px] text-warm-cream/80 block mt-3 font-sans leading-relaxed">Slightly warmed deep charcoal/black which replaces cold stark black, giving editorial weight to headings.</span>
                </div>
              </div>

              <div className="border border-warm-border rounded-none p-5 bg-warm-pale space-y-3">
                <h4 className="font-sans font-bold text-xs text-warm-primary uppercase tracking-widest">Typography Scale (Google Fonts Pairing Georgia & Inter)</h4>
                <div className="space-y-2">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[9px] text-warm-primary w-12">Display:</span>
                    <span style={{ fontFamily: "'Georgia', serif" }} className="text-lg italic font-normal text-warm-dark">Georgia (Warm Editorial Serif)</span>
                  </div>
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[9px] text-warm-primary w-12">Body:</span>
                    <span className="font-sans text-xs text-warm-dark">Inter (Sans) for maximum readability, fine contrast spacing, and comfortable catalog tables.</span>
                  </div>
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[9px] text-warm-primary w-12">Tech Mono:</span>
                    <span className="font-mono text-xs text-warm-primary font-bold">JetBrains Mono (System Telemetry Index)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-sans font-bold text-xs text-warm-primary uppercase tracking-wider">Tactical Animation System</h4>
                <p className="text-xs text-warm-muted leading-relaxed">
                  Avoid spinning cubes or chaotic page scroll hijacks. We utilize <strong>Custom Spring Friction Transitions</strong> for container enters and active component shifts, preserving the premium "human product" sensory experience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[11px] text-warm-dark font-mono">
                  <div className="bg-warm-beige p-3 border border-warm-border rounded-none">
                    <span className="font-bold text-warm-primary block mb-1">Spring parameters (Smooth Enters)</span>
                    stiffness: 90, damping: 18, mass: 0.8
                  </div>
                  <div className="bg-warm-beige p-3 border border-warm-border rounded-none">
                    <span className="font-bold text-warm-primary block mb-1">Hover Scale Micro-Feedbacks</span>
                    scale: 1.015, duration: 0.35s, ease: &quot;easeOut&quot;
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* TAB 4: HOMEPAGE PSYCHOLOGY AND SECTIONS */}
        {activeTab === "sections" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-warm-border pb-4">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-warm-primary font-semibold">PART IV</span>
                <h2 style={{ fontFamily: "'Georgia', serif" }} className="text-2xl italic font-normal text-warm-primary">Section-by-Section Psychology</h2>
              </div>
              <Compass className="text-warm-primary opacity-20" size={36} />
            </div>

            <div className="space-y-6">
              
              {/* SECTION 1 */}
              <div className="bg-warm-pale p-5 rounded-none border border-warm-border space-y-2 text-warm-dark">
                <div className="flex justify-between items-center pb-1 border-b border-warm-border/40">
                  <span className="text-xs font-mono font-bold text-warm-primary">1. The Cinematic Forest Oath HERO</span>
                  <span className="bg-warm-primary/10 text-warm-primary px-2 py-0.5 rounded-none text-[9px] font-mono font-bold uppercase">EYE-CATCHING COGNITIVE HOOK</span>
                </div>
                <p className="text-xs leading-relaxed text-warm-muted">
                  <strong>Cognitive Goal</strong>: Establish global ecological authority. B2B buyers immediately know they aren&apos;t visiting an cheap broker. The huge real-time counter &quot;14,240,112 plastic items offset today&quot; leverages immediate social and factual pressure, signaling vast production volume and international scalability.
                </p>
                <div className="text-[10px] text-warm-primary font-mono mt-1 font-bold">
                  Layout: Minimal centered high-contrast display text paired with a floating physical product array (forks, stirrers, sticks) moving on a scroll-axis spring trajectory.
                </div>
              </div>

              {/* SECTION 2 */}
              <div className="bg-warm-pale p-5 rounded-none border border-warm-border space-y-2 text-warm-dark">
                <div className="flex justify-between items-center pb-1 border-b border-warm-border/40">
                  <span className="text-xs font-mono font-bold text-warm-primary">2. Deep Product Specification GRID</span>
                  <span className="bg-warm-primary/10 text-warm-primary px-2 py-0.5 rounded-none text-[9px] font-mono font-bold uppercase">AESTHETIC & INDUSTRIAL AUTHORITY</span>
                </div>
                <p className="text-xs leading-relaxed text-warm-muted">
                  <strong>Cognitive Goal</strong>: Establish quality excellence. B2B buyers frequently worry about splintering and thinness. By presenting details like calibrated wood density subclasses, exact edge thickness, water-free dehydration and low moisture content, we prove that Biopapro matches high-speed automatic wrapping line guidelines instantly, lowering machine breakdown fear.
                </p>
              </div>

              {/* SECTION 3 */}
              <div className="bg-warm-pale p-5 rounded-none border border-warm-border space-y-2 text-warm-dark">
                <div className="flex justify-between items-center pb-1 border-b border-warm-border/40">
                  <span className="text-xs font-mono font-bold text-warm-primary">3. Dynamic Carbon Offset Matrix CALCULATOR</span>
                  <span className="bg-warm-primary/10 text-warm-primary px-2 py-0.5 rounded-none text-[9px] font-mono font-bold uppercase">RECIPROCITY & VALUE CAPTURE</span>
                </div>
                <p className="text-xs leading-relaxed text-warm-muted">
                  <strong>Cognitive Goal</strong>: Empower the buyer. Sustainable officers and corporate purchasing managers have strict internal ESG metrics to prove before transitioning budgets. An instant client-side carbon calculator translates their raw operations scope directly into bulletproof annual CO₂ saved and plastic averted variables, making internal approvals effortless.
                </p>
              </div>

              {/* SECTION 4 */}
              <div className="bg-warm-pale p-5 rounded-none border border-warm-border space-y-2 text-warm-dark">
                <div className="flex justify-between items-center pb-1 border-b border-warm-border/40">
                  <span className="text-xs font-mono font-bold text-warm-primary">4. Immersive Supply Chain VIRTUAL TOUR</span>
                  <span className="bg-warm-primary/10 text-warm-primary px-2 py-0.5 rounded-none text-[9px] font-mono font-bold uppercase">RADICAL TRANSPARENCY</span>
                </div>
                <p className="text-xs leading-relaxed text-warm-muted">
                  <strong>Cognitive Goal</strong>: Eliminate delivery security concern. Large international corporations fear supply-chain disruption. Showing detailed checkpoints (FSC selection, high-pressure die molds, optical inspection cameras) proves heavy-machinery resilience and meticulous sterile care.
                </p>
              </div>

              {/* SECTION 5 */}
              <div className="bg-warm-pale p-5 rounded-none border border-warm-border space-y-2 text-warm-dark">
                <div className="flex justify-between items-center pb-1 border-b border-warm-border/40">
                  <span className="text-xs font-mono font-bold text-warm-primary">5. The Certificates VAULT</span>
                  <span className="bg-warm-primary/10 text-warm-primary px-2 py-0.5 rounded-none text-[9px] font-mono font-bold uppercase">LEGAL IMMUNITY</span>
                </div>
                <p className="text-xs leading-relaxed text-warm-muted">
                  <strong>Cognitive Goal</strong>: Legal risk protection. For airlines, supermarket chains, and large food networks, certified safety compliance is a strict binary filter. Immediate high-resolution presentation of global certifications (SGS, FDA, FSC 100%, BPI, Din Certco) turns potential friction into a closed deal.
                </p>
              </div>

            </div>
          </div>
        )}

        {/* TAB 5: NEXT.JS ARCHITECTURE */}
        {activeTab === "nextjs" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-warm-border pb-4">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-warm-primary font-semibold">PART V</span>
                <h2 style={{ fontFamily: "'Georgia', serif" }} className="text-2xl italic font-normal text-warm-primary">Next.js Production Architecture</h2>
              </div>
              <Code2 className="text-warm-primary opacity-20" size={36} />
            </div>

            <section className="space-y-4 text-warm-dark">
              <h3 style={{ fontFamily: "'Georgia', serif" }} className="text-lg italic font-normal text-warm-primary">The Next-Generation Architecture Core</h3>
              <p className="text-xs sm:text-sm text-warm-dark leading-relaxed">
                To build an internationally leading platform displaying high-detail wooden assets and interactive calculated metrics, we recommend standardizing on the <strong>Next.js 14/15 App Router</strong> paired with progressive web assets for sub-second delivery.
              </p>

              <div className="border border-warm-border rounded-none p-5 bg-warm-pale space-y-4">
                <span className="text-xs font-mono text-warm-primary font-bold block">// FOLDER STRUCTURE FOR WORLD-CLASS B2B APPLICATION</span>
                <div className="font-mono text-[10px] leading-relaxed whitespace-pre overflow-x-auto text-warm-dark">
{`├── /app
│   ├── layout.tsx             # Root layout containing Google Fonts & smooth scroll
│   ├── page.tsx               # Primary high-fidelity storytelling landing
│   ├── products
│   │   ├── page.tsx           # Static-Generated Catalog with instant search tags
│   │   └── [id]
│   │       └── page.tsx       # ISR detailed product sheets with B2B carton models
│   ├── api
│   │   └── consult
│   │       └── route.ts       # Next.js Serverless Route for Custom Gemini Advisory
│   └── sitemap.ts             # Dynamic XML sitemap generation API
├── /components
│   ├── /ui                    # Atomic components (buttons, badges)
│   ├── CarbonCalculator.tsx   # Client-Side interactive calculations component
│   ├── VirtualTour.tsx        # Framer Motion Vertical high-fidelity timeline
│   └── SampleCart.tsx         # Persistent context-based checkout panel
├── /lib
│   ├── gemini.ts              # Server-only initialized Gemini Client configuration
│   └── math-utilities.ts      # CO2, water, and plastic exact physical equations
└── /public
    ├── /certifications       # Official FDA & FSC certified documents and PDFs
    └── /images                # Highly compressed WebP organic wooden cutlery textures`}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-warm-pale p-4 border border-warm-border text-warm-dark rounded-none">
                  <span className="text-xs font-mono text-warm-primary font-bold block mb-1">Optimum Rendering Strategies</span>
                  <p className="text-xs text-warm-muted leading-relaxed">
                    - <strong>Static Regeneration (ISR)</strong>: Product display catalog rebuilt every 24 hours to preserve loading benchmarks under 800ms.
                    - <strong>Server Components (RSC)</strong>: Raw markdown sheets and strategies served pre-rendered from the edge without JavaScript load overhead.
                  </p>
                </div>
                <div className="bg-warm-pale p-4 border border-warm-border text-warm-dark rounded-none">
                  <span className="text-xs font-mono text-warm-primary font-bold block mb-1">Performance Benchmarks</span>
                  <p className="text-xs text-warm-muted leading-relaxed">
                    - <strong>Image Optimization</strong>: Utilizing Next.js `next/image` to serve responsive WebP, pre-fetching large wood close-up textures.
                    - <strong>Accessibility (WCAG 2.2 AA)</strong>: Maintain strict contrast ratios (sage text on beige base has a premium 5.2:1 score).
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* TAB 6: CONVERSION & SEO */}
        {activeTab === "seo" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-warm-border pb-4">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-warm-primary font-semibold">PART VI</span>
                <h2 style={{ fontFamily: "'Georgia', serif" }} className="text-2xl italic font-normal text-warm-primary">Conversion & SEO Strategic Engineering</h2>
              </div>
              <Gauge className="text-warm-primary opacity-20" size={36} />
            </div>

            <section className="space-y-4">
              <h3 style={{ fontFamily: "'Georgia', serif" }} className="text-lg italic font-normal text-warm-dark">Conversion Strategy for Global Procurement</h3>
              <p className="text-xs sm:text-sm text-warm-dark leading-relaxed">
                Industrial B2B procurement doesn&apos;t match consumer retail impulsiveness. B2B purchasing managers require rigorous validation of volume capacity, customized logistics container sizing, wood moisture verification, and official safety paperwork. Our conversion funnel converts uncertainty into actionable requests.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
                <div className="space-y-3">
                  <h4 className="font-sans font-bold text-xs text-warm-primary uppercase tracking-widest">1. B2B Trust Funnel Stages</h4>
                  <ul className="space-y-2 text-xs text-warm-dark leading-relaxed">
                    <li>
                      <span className="font-bold text-warm-primary">// Step A: Frictionless Sample Request</span>
                      <p className="text-xs text-warm-muted pl-3">Offer an &quot;Instant Sample Kit&quot; directly on each product view. They select products, provide basic shipping info, and get professional mock boxes in 3 days.</p>
                    </li>
                    <li>
                      <span className="font-bold text-warm-primary">// Step B: Visual Load Calculations</span>
                      <p className="text-xs text-warm-muted pl-3 font-sans">Interactive Carton packaging displays show them exactly how many boxes fit onto a 40HQ Ocean Carrier (e.g. 520,000 soup spoons).</p>
                    </li>
                    <li>
                      <span className="font-bold text-warm-primary">// Step C: Digital Procurement Expert</span>
                      <p className="text-xs text-warm-muted pl-3 font-sans">An automated B2B system (using Gemini) directly creates formal specifications worksheets, bypassing slow negotiation chains.</p>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-sans font-bold text-xs text-warm-primary uppercase tracking-widest">2. SEO Semantic Dominance Schema</h4>
                  <p className="text-xs text-warm-muted leading-relaxed">
                    To capture premium sustainable cutlery keywords globally (specifically targeting airlines, retail packaging lines, and catering distribution firms):
                  </p>
                  <div className="bg-warm-pale p-3 border border-warm-border font-mono text-[10px] space-y-1 text-warm-dark">
                    <span className="font-bold text-warm-primary block">// JSON-LD Product & Sustainability Schema</span>
                    {"{"}
                    <br />
                    &nbsp;&nbsp;&quot;@context&quot;: &quot;https://schema.org&quot;,
                    <br />
                    &nbsp;&nbsp;&quot;@type&quot;: &quot;Product&quot;,
                    <br />
                    &nbsp;&nbsp;&quot;name&quot;: &quot;Premium FSC Birchwood Cutlery&quot;,
                    <br />
                    &nbsp;&nbsp;&quot;material&quot;: &quot;FSC 100% White Birchwood&quot;,
                    <br />
                    &nbsp;&nbsp;&quot;offers&quot;: {"{"}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&quot;@type&quot;: &quot;AggregateOffer&quot;,
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&quot;priceCurrency&quot;: &quot;USD&quot;,
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&quot;minimumQuantity&quot;: &quot;100000&quot;
                    <br />
                    &nbsp;&nbsp;{"}"}
                    <br />
                    {"}"}
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

      </div>
    </div>
  );
}
