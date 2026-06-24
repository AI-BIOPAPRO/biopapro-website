import React, { useState } from "react";
import { Product } from "../types";
import { Trees, Mail, User, Building, Truck, Sparkles, Inbox, Trash } from "lucide-react";

interface B2BFormProps {
  sampleCartItems: Product[];
  onRemoveFromCart: (product: Product) => void;
  onClearCart: () => void;
}

export default function B2BContactForm({ sampleCartItems, onRemoveFromCart, onClearCart }: B2BFormProps) {
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [contactName, setContactName] = useState("");
  const [estVolume, setEstVolume] = useState("100000");
  const [customLogo, setCustomLogo] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16 bg-warm-beige border-b border-warm-border" id="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start lg:max-w-6xl mx-auto">
          
          {/* Left Text / Sample cart summary */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="font-mono text-[10px] tracking-[0.3em] text-warm-primary uppercase font-bold block mb-1">
                B2B TRANSACTION PROTOCOL
              </span>
              <h2 className="font-sans font-black text-3xl text-warm-dark tracking-tight leading-tight">
                Instantiate Your <span style={{ fontFamily: "'Georgia', serif" }} className="text-warm-primary italic font-normal">Procurement Pipeline</span>.
              </h2>
              <p className="font-sans text-xs sm:text-sm text-warm-muted mt-2 leading-relaxed">
                Submit raw packaging and logistics parameters to claim your physical, high-resolution birch wood specimen sample kit. Sourced directly, double-polished, completely free of charge.
              </p>
            </div>

            {/* Dynamic Packing List Container for high-fidelity sample request */}
            <div className="bg-warm-cream p-5 border border-warm-border space-y-4 rounded-none">
              <span className="block font-sans font-bold text-[10px] tracking-wider text-warm-dark uppercase pb-1.5 border-b border-warm-border font-mono">
                Custom Sample Kit Configuration ({sampleCartItems.length} styles selected)
              </span>

              {sampleCartItems.length === 0 ? (
                <div className="py-6 text-center space-y-2">
                  <Inbox className="mx-auto text-warm-primary opacity-35 animate-pulse" size={28} />
                  <p className="text-xs text-warm-muted leading-relaxed">
                    Your sample box is empty. Scroll back to our Catalogue grid and click &quot;Add to Sample Kit Cart&quot; to stack your selected shapes.
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                    {sampleCartItems.map((item, idx) => (
                      <div 
                        key={item.id} 
                        className="flex items-center justify-between p-2.5 bg-warm-pale border border-warm-border text-xs sm:text-sm transition-all duration-300 hover:border-warm-primary/70 rounded-none text-warm-dark"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-xs font-bold font-mono text-warm-primary">0{idx + 1}</span>
                          <div>
                            <span className="block font-sans font-bold text-xs text-warm-dark leading-tight">{item.name}</span>
                            <span className="block text-[9.5px] text-warm-muted font-mono uppercase mt-0.5">{item.sizes[1] || item.sizes[0]} scale</span>
                          </div>
                        </div>
                        <button
                          onClick={() => onRemoveFromCart(item)}
                          className="p-1 px-1.5 rounded-none text-xs hover:bg-red-500/10 text-red-700 transition cursor-pointer"
                          title="Remove cutlery shape from physical specimen kit"
                          aria-label={`Remove ${item.name} from cart`}
                        >
                          <Trash size={12} />
                        </button>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={onClearCart}
                    className="w-full text-center block mt-3 font-mono text-[9px] font-bold uppercase text-red-600 hover:underline cursor-pointer"
                  >
                    Clear All Selected Forms
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Lead capture container */}
          <div className="lg:col-span-7">
            <div className="bg-warm-cream border border-warm-border rounded-none p-6 sm:p-8 md:p-10 relative overflow-hidden min-h-[460px] text-warm-dark">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 bg-warm-primary/10 text-warm-primary flex items-center justify-center mx-auto mb-2 rounded-none animate-bounce">
                    <Truck size={24} />
                  </div>
                  <h3 style={{ fontFamily: "'Georgia', serif" }} className="text-2xl italic font-normal text-warm-dark">
                    Sample Pipeline Dispatch Initialized.
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-warm-muted max-w-sm mx-auto leading-relaxed">
                    Thank you, {contactName || "Sustainable Operations Lead"}. We compiled {sampleCartItems.length} active white birch styles in our certified sterile box. 
                  </p>
                  
                  <div className="bg-warm-pale p-4 border border-warm-border text-left max-w-md mx-auto space-y-2 rounded-none">
                    <span className="block font-mono text-[9px] uppercase tracking-wider font-bold text-warm-primary">TRANSACTION METRIC TRACKING LOG</span>
                    <div className="text-[11px] font-mono text-warm-dark space-y-1">
                      <div>Company Name: <span className="font-bold">{companyName || "Pristine Partner"}</span></div>
                      <div>Contact Mail ID: <span className="font-bold">{email}</span></div>
                      <div>Sample volume code: <span className="font-bold">{parseInt(estVolume).toLocaleString()} units forecast</span></div>
                      <div>Branding emboss: <span className="font-bold">{customLogo ? "Laser Brand Logo Required" : "Neutral Birchwood"}</span></div>
                    </div>
                  </div>

                  <p className="text-[10px] font-mono text-warm-muted">
                    SGS sanitation checkpoints approved. Packing slip dispatched to your email address dynamically.
                  </p>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      onClearCart();
                    }}
                    className="px-5 py-2.5 bg-warm-dark hover:bg-neutral-800 text-white rounded-none text-[10px] uppercase tracking-wider font-bold transition-all duration-300 cursor-pointer"
                  >
                    Initiate Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-sans font-bold text-xs text-warm-dark uppercase tracking-widest pb-2 border-b border-warm-border font-mono">
                    Procurement Spec Request
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Contact name */}
                    <div className="space-y-1">
                      <label htmlFor="b2b-contact-name" className="block text-[10px] font-bold text-warm-dark uppercase tracking-wider flex items-center gap-1.5">
                        <User size={13} className="text-warm-primary" />
                        Contact Person
                      </label>
                      <input
                        id="b2b-contact-name"
                        type="text"
                        placeholder="e.g. Eleanor Vance"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-warm-pale border border-warm-border rounded-none text-xs text-warm-dark focus:outline-none focus:border-warm-primary"
                        required
                      />
                    </div>

                    {/* Company name */}
                    <div className="space-y-1">
                      <label htmlFor="b2b-company-name" className="block text-[10px] font-bold text-warm-dark uppercase tracking-wider flex items-center gap-1.5">
                        <Building size={13} className="text-warm-primary" />
                        Enterprise Entity
                      </label>
                      <input
                        id="b2b-company-name"
                        type="text"
                        placeholder="e.g. Nordic Flight Corp"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-warm-pale border border-warm-border rounded-none text-xs text-warm-dark focus:outline-none focus:border-warm-primary"
                        required
                      />
                    </div>
                  </div>

                  {/* Mail ID */}
                  <div className="space-y-1">
                    <label htmlFor="b2b-email" className="block text-[10px] font-bold text-warm-dark uppercase tracking-wider flex items-center gap-1.5">
                      <Mail size={13} className="text-warm-primary" />
                      Corporate Mail Address
                    </label>
                    <input
                      id="b2b-email"
                      type="email"
                      placeholder="e.g. purchase@nordiccorphub.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-warm-pale border border-warm-border rounded-none text-xs text-warm-dark focus:outline-none focus:border-warm-primary"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* MOQ Estimated count */}
                    <div className="space-y-1">
                      <label htmlFor="b2b-est-volume" className="block text-[10px] font-bold text-warm-dark uppercase tracking-wider">
                        Annual Requirements Scale
                      </label>
                      <select
                        id="b2b-est-volume"
                        value={estVolume}
                        onChange={(e) => setEstVolume(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-warm-pale border border-warm-border rounded-none text-xs text-warm-dark focus:outline-none focus:border-warm-primary font-sans"
                      >
                        <option value="100000">100,000 to 500,000 units</option>
                        <option value="1000000">1,000,000 to 5,000,000 units</option>
                        <option value="10000000">Over 10,000,000 (Bulk Charter)</option>
                      </select>
                    </div>

                    {/* Logo Branding embossed */}
                    <div className="space-y-1">
                      <label htmlFor="b2b-custom-logo-check" className="block text-[10px] font-bold text-warm-dark uppercase tracking-wider">
                        High-precision Laser Branding
                      </label>
                      <div className="flex h-[42px] items-center gap-2 px-3.5 bg-warm-pale border border-warm-border rounded-none text-xs text-warm-dark">
                        <input
                          id="b2b-custom-logo-check"
                          type="checkbox"
                          checked={customLogo}
                          onChange={(e) => setCustomLogo(e.target.checked)}
                          className="w-4 h-4 cursor-pointer text-warm-dark focus:ring-0 accent-warm-dark"
                        />
                        <span className="font-sans text-xs text-warm-dark font-medium leading-none cursor-pointer">
                          Logo embossing needed
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-warm-dark text-white text-[10px] tracking-widest font-bold uppercase rounded-none flex items-center justify-center gap-2 hover:bg-neutral-800 cursor-pointer transition-colors duration-200"
                    id="b2b-submit-form-btn"
                  >
                    <Sparkles size={13} className="text-warm-primary" />
                    Register Custom Specs & Request Sample Kit Dispensation
                  </button>

                  <p className="text-[9.5px] text-warm-muted font-mono text-center leading-normal">
                    *Sample kits include physical forks, soup scoops, knives, and café stirrers shipped with FSC and FDA tracking certificates in unbleached structural crates.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
