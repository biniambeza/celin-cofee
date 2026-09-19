import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Globe, PackageCheck, ShieldCheck, Calculator, Sparkles } from "lucide-react";
import { featuredCoffees } from "../data";

export default function Contact({ preselectedCoffee = "" }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    country: "",
    interest: preselectedCoffee || "Yirgacheffe Grade 1 Washed",
    volume: "20ft Container (approx. 320 bags / 19.2 MT)",
    shippingTerms: "FOB Djibouti",
    message: "",
  });

  // If user navigates with a preselected coffee
  useEffect(() => {
    if (preselectedCoffee) {
      setFormData((prev) => ({
        ...prev,
        interest: preselectedCoffee,
      }));
    }
  }, [preselectedCoffee]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Helper calculator data
  const volumeDetails = {
    "Sample Box (250g - 1kg Tins)": { bags: "N/A (Sample Pack)", weight: "0.5 - 2 kg", transport: "DHL / FedEx Express Air (48h)" },
    "1-10 Bags (Pallet LCL)": { bags: "10 Bags (60kg)", weight: "600 kg (0.6 MT)", transport: "LCL Consolidated Ocean or Air Freight" },
    "20ft Container (approx. 320 bags / 19.2 MT)": { bags: "320 Bags (60kg GrainPro)", weight: "19,200 kg (19.2 MT)", transport: "FCL Ocean Freight via Djibouti Port" },
    "40ft Container (approx. 450+ bags / 27 MT)": { bags: "450 Bags (60kg GrainPro)", weight: "27,000 kg (27.0 MT)", transport: "FCL Ocean Freight via Djibouti Port" },
    "Private Label / OEM Roasted Pouches": { bags: "Custom retail pouches (250g/1kg)", weight: "Variable (Palletized)", transport: "Air Cargo or Dry Van Container" },
  };

  const activeCalc = volumeDetails[formData.volume] || volumeDetails["20ft Container (approx. 320 bags / 19.2 MT)"];

  return (
    <main className="bg-[#FAF8F5] pt-24 pb-20 min-h-screen">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 text-center">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C6052]/10 text-[#0C6052] text-xs font-extrabold uppercase tracking-wider mb-4 border border-[#0C6052]/20">
          <Globe size={15} className="text-[#3BAA3E]" />
          <span>Global Trade & Export Desk • Addis Ababa, Ethiopia</span>
        </span>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
          Connect With Our <span className="text-[#0C6052]">Export Team</span>
        </h1>

        <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
          Request harvest cupping samples, negotiate container contracts (FOB/CIF), or consult with our licensed Q-Graders regarding custom roast curves and private label requirements.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info, Sample Policy & Container Estimator (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Contact Information Card */}
            <div className="bg-white rounded-3xl p-7 border border-stone-200/80 shadow-xs space-y-6">
              <h2 className="text-xl font-bold text-stone-900 border-b border-stone-100 pb-3">
                Trade Headquarters & Roastery
              </h2>

              <div className="space-y-4 text-sm text-stone-600">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#0C6052]/10 flex items-center justify-center text-[#0C6052] shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900">Head Office & Roastery Hub</p>
                    <p className="text-stone-500">Bole Sub-City, Near Coffee & Tea Authority Hub</p>
                    <p className="text-stone-500">Addis Ababa, Ethiopia</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#0C6052]/10 flex items-center justify-center text-[#0C6052] shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900">Direct Export Trade Desk</p>
                    <a href="mailto:export@celincoffee.com" className="text-[#0C6052] hover:underline font-bold">
                      export@celincoffee.com
                    </a>
                    <p className="text-xs text-stone-400">Response guaranteed within 24 business hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#0C6052]/10 flex items-center justify-center text-[#0C6052] shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900">Direct Phone & WhatsApp</p>
                    <p className="text-stone-800 font-bold">+251 911 000 000</p>
                    <p className="text-xs text-emerald-700 font-medium">WhatsApp active for commercial buyers</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#0C6052]/10 flex items-center justify-center text-[#0C6052] shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900">Operating Hours</p>
                    <p className="text-stone-500">Monday - Friday: 8:00 AM – 6:00 PM (EAT / UTC+3)</p>
                    <p className="text-stone-500">Saturday: 8:30 AM – 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Container / Volume Calculator Card */}
            <div className="bg-stone-900 text-white rounded-3xl p-7 shadow-lg space-y-4 border border-stone-800">
              <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
                <div className="w-10 h-10 rounded-xl bg-[#3BAA3E]/20 text-[#85E288] flex items-center justify-center">
                  <Calculator size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Freight & Volume Estimator</h3>
                  <p className="text-xs text-stone-400">Selected: {formData.volume.split(" ")[0]}</p>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-stone-400">Total Bags:</span>
                  <span className="font-bold text-white">{activeCalc.bags}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-stone-400">Cargo Net Weight:</span>
                  <span className="font-bold text-[#85E288]">{activeCalc.weight}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-stone-400">Recommended Route:</span>
                  <span className="font-bold text-white text-right max-w-[200px]">{activeCalc.transport}</span>
                </div>
              </div>
            </div>

            {/* Express Sample Box Policy Banner */}
            <div className="bg-gradient-to-br from-[#0C6052] to-[#08483D] text-white rounded-3xl p-7 shadow-md space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#85E288]">
                  <PackageCheck size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Express Sample Dispatch (PSS)</h3>
                  <p className="text-xs text-stone-200">Shipped via DHL / FedEx Worldwide</p>
                </div>
              </div>
              <p className="text-xs text-stone-200 leading-relaxed">
                Qualified importers and roasters can request 250g–500g cupping sample tins complete with moisture, defect, and SCA cupping lab evaluation sheets.
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#85E288]">
                <ShieldCheck size={16} />
                <span>ECTA Certified Pre-Shipment Inspection</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Export Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200/80 shadow-sm">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 bg-[#0C6052]/10 text-[#0C6052] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={36} className="text-[#3BAA3E]" />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900">Export Inquiry Received</h3>
                  <p className="text-stone-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.contactPerson || "partner"}</strong> from <strong>{formData.companyName || "your company"}</strong>. An export trade representative from Celin Coffee will review your specifications for <strong>{formData.interest}</strong> and reply with an official FOB/CIF quotation within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 inline-flex items-center text-xs font-bold text-[#0C6052] underline cursor-pointer"
                  >
                    Submit another inquiry or add additional lots
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-stone-900">Request Official Trade Quote</h2>
                    <p className="text-xs text-stone-500 mt-1">
                      Specify destination port, coffee variety, and volume for tailored freight calculations.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        Company Name *
                      </label>
                      <input
                        required
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. Nordic Roasters ApS"
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C6052]/30 focus:border-[#0C6052]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        Contact Person *
                      </label>
                      <input
                        required
                        type="text"
                        name="contactPerson"
                        value={formData.contactPerson}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C6052]/30 focus:border-[#0C6052]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        Business Email *
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="buyer@yourcompany.com"
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C6052]/30 focus:border-[#0C6052]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+CountryCode Number"
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C6052]/30 focus:border-[#0C6052]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        Destination Country *
                      </label>
                      <input
                        required
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="e.g. Germany, UAE, Japan"
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C6052]/30 focus:border-[#0C6052]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        Coffee Variety
                      </label>
                      <select
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full px-3 py-3 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm font-semibold text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#0C6052]/30 focus:border-[#0C6052] cursor-pointer"
                      >
                        {featuredCoffees.map((c) => (
                          <option key={c.name} value={c.name}>
                            {c.name}
                          </option>
                        ))}
                        <option value="Mixed Container / Multiple Lots">Mixed Container / Multiple Lots</option>
                        <option value="Sample Box Only (All Varieties)">Sample Box Only (All Varieties)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        Estimated Volume
                      </label>
                      <select
                        name="volume"
                        value={formData.volume}
                        onChange={handleChange}
                        className="w-full px-3 py-3 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm font-semibold text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#0C6052]/30 focus:border-[#0C6052] cursor-pointer"
                      >
                        <option>Sample Box (250g - 1kg Tins)</option>
                        <option>1-10 Bags (Pallet LCL)</option>
                        <option>20ft Container (approx. 320 bags / 19.2 MT)</option>
                        <option>40ft Container (approx. 450+ bags / 27 MT)</option>
                        <option>Private Label / OEM Roasted Pouches</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Shipping Terms (Incoterms)
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {["FOB Djibouti", "CIF Ocean Port", "CIF Air Freight"].map((term) => (
                        <button
                          key={term}
                          type="button"
                          onClick={() => setFormData({ ...formData, shippingTerms: term })}
                          className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                            formData.shippingTerms === term
                              ? "bg-[#0C6052] text-white border-[#0C6052] shadow-xs"
                              : "bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100"
                          }`}
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Order Specifications, Roast Preference or Inquiries
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Specify roast level preference (light, medium, dark, or green), target port of discharge (e.g. Hamburg, Rotterdam, Jebel Ali), packaging requests..."
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C6052]/30 focus:border-[#0C6052]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#0C6052] hover:bg-[#08483D] text-white font-extrabold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]"
                  >
                    <span>Send Export Inquiry to Trade Desk</span>
                    <Send size={16} />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
