import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  ShieldCheck,
  Clock,
  ArrowRight
} from "lucide-react";

export default function ContactSection({ preselectedCoffee = "" }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    origin: preselectedCoffee || "Yirgacheffe Premier",
    volume: "Sample Box (250g - 1kg Tins)",
    message: "",
  });

  useEffect(() => {
    if (preselectedCoffee) {
      setFormData((prev) => ({
        ...prev,
        origin: preselectedCoffee,
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

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center pt-13 sm:pt-15 pb-14 sm:pb-18 bg-gradient-to-b from-white via-[#F7FAF8] to-[#FAF8F5] border-t border-[#DCEBDD] relative overflow-hidden scroll-mt-12">
      {/* Background Decorative Floral Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none text-[#255D3A]">
        <svg viewBox="0 0 200 200" fill="currentColor">
          <path d="M40 180 C20 120 70 80 130 50 C110 90 90 140 40 180 Z" />
          <path d="M15 155 C35 105 95 105 125 75 C85 105 65 135 15 155 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full -translate-y-2 sm:-translate-y-4">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-7 space-y-1.5">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1C2621] tracking-tight">
            Partner Directly with Origin.
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
            Request official harvest cupping samples, book container allocations (FOB Djibouti), or customize profile-roasted micro-lots for your roastery.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-start">

          {/* Left Column: Direct Contact & Export Credentials (5 cols) */}
          <div className="lg:col-span-5 space-y-3.5 sm:space-y-4">

            {/* Quick Info Box */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#DCEBDD] shadow-xs space-y-3.5">
              <h3 className="font-serif font-bold text-lg text-[#1C2621] pb-2 border-b border-stone-100 flex items-center justify-between">
                <span>Addis Ababa Headquarters</span>
                <span className="text-[9.5px] font-sans font-bold bg-[#EBF6EE] text-[#255D3A] px-2 py-0.5 rounded-full">
                  GMT+3
                </span>
              </h3>

              <div className="space-y-3 text-xs text-stone-600">
                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#EBF6EE] text-[#255D3A] flex items-center justify-center shrink-0">
                    <MapPin size={15} />
                  </div>
                  <div>
                    <p className="font-semibold text-stone-900">Trade Office & Lab</p>
                    <p className="text-stone-500 text-[11px]">Bole Sub-City, Near Ethiopian Coffee & Tea Authority Hub, Addis Ababa, Ethiopia</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#EBF6EE] text-[#255D3A] flex items-center justify-center shrink-0">
                    <Mail size={15} />
                  </div>
                  <div>
                    <p className="font-semibold text-stone-900">Export Desk</p>
                    <a href="mailto:export@celincoffee.com" className="text-[#255D3A] hover:underline font-bold text-xs">
                      export@celincoffee.com
                    </a>
                    <p className="text-[10px] text-stone-400">Guaranteed response within 24 hours</p>
                  </div>
                </div>

                {/* Direct Phone / WhatsApp */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#EBF6EE] text-[#255D3A] flex items-center justify-center shrink-0">
                    <Phone size={15} />
                  </div>
                  <div>
                    <p className="font-semibold text-stone-900">Direct Inquiries & WhatsApp</p>
                    <a href="tel:+251911234567" className="text-stone-800 hover:text-[#255D3A] font-bold text-xs">
                      +251 911 234 567
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Export Trust Badges */}
            <div className="bg-[#FAFDFB] rounded-xl p-3.5 sm:p-4 border border-[#DCEBDD] space-y-2.5">
              <div className="flex items-center gap-2.5">
                <ShieldCheck size={16} className="text-[#255D3A] shrink-0" />
                <p className="text-[11px] font-semibold text-stone-800">
                  Licensed Exporter • ECTA / National Bank of Ethiopia Compliant
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock size={16} className="text-[#255D3A] shrink-0" />
                <p className="text-[11px] font-semibold text-stone-800">
                  Air Sample Tins Dispatched Worldwide via DHL/FedEx Express in 48h
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Shortened, Attractive Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#DCEBDD] shadow-xs relative">

              {submitted ? (
                <div className="py-10 px-4 text-center space-y-3.5">
                  <div className="w-14 h-14 rounded-full bg-[#EBF6EE] text-[#255D3A] mx-auto flex items-center justify-center shadow-xs">
                    <CheckCircle2 size={28} />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-[#1C2621]">
                    Export Inquiry Sent!
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-[13px] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-stone-900">{formData.name}</strong>. Our licensed Q-grading export desk has received your request for <strong className="text-[#255D3A]">{formData.origin}</strong> and will reach out via <strong className="text-stone-900">{formData.email}</strong> within 24 hours.
                  </p>
                  <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 rounded-full border border-stone-300 text-stone-700 hover:text-stone-900 text-xs font-semibold cursor-pointer transition-colors"
                    >
                      Send Another Request
                    </button>
                    <a
                      href="https://wa.me/251911234567?text=Hello%20Celin%20Coffee%2C%20following%20up%20on%20my%20inquiry."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-[#382319] hover:bg-[#26160F] text-white font-semibold px-4 py-2 rounded-full text-xs shadow-xs transition-transform hover:scale-105 cursor-pointer"
                    >
                      <span>Track via WhatsApp</span>
                      <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="flex items-center justify-between pb-2.5 border-b border-stone-100">
                    <div>
                      <h3 className="font-serif font-bold text-lg text-[#1C2621]">
                        Request Trade Quotation / Samples
                      </h3>
                      <p className="text-stone-500 text-[11px] mt-0.5">
                        Fill out the brief form below to receive green bean specifications and price sheet.
                      </p>
                    </div>
                  </div>

                  {/* Row 1: Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Henderson"
                        className="w-full text-xs px-3 py-2 rounded-xl border border-stone-200 bg-[#FAF8F5] text-stone-900 focus:bg-white focus:outline-none focus:border-[#255D3A] focus:ring-1 focus:ring-[#255D3A] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                        Company / Roastery *
                      </label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Nordic Roasters Ltd"
                        className="w-full text-xs px-3 py-2 rounded-xl border border-stone-200 bg-[#FAF8F5] text-stone-900 focus:bg-white focus:outline-none focus:border-[#255D3A] focus:ring-1 focus:ring-[#255D3A] transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@roastery.com"
                        className="w-full text-xs px-3 py-2 rounded-xl border border-stone-200 bg-[#FAF8F5] text-stone-900 focus:bg-white focus:outline-none focus:border-[#255D3A] focus:ring-1 focus:ring-[#255D3A] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 555 123 4567"
                        className="w-full text-xs px-3 py-2 rounded-xl border border-stone-200 bg-[#FAF8F5] text-stone-900 focus:bg-white focus:outline-none focus:border-[#255D3A] focus:ring-1 focus:ring-[#255D3A] transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 3: Origin & Volume */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                        Coffee Lot of Interest
                      </label>
                      <select
                        name="origin"
                        value={formData.origin}
                        onChange={handleChange}
                        className="w-full text-xs px-3 py-2 rounded-xl border border-stone-200 bg-[#FAF8F5] text-stone-900 focus:bg-white focus:outline-none focus:border-[#255D3A] focus:ring-1 focus:ring-[#255D3A] transition-all"
                      >
                        <option value="Yirgacheffe Premier">Yirgacheffe Premier (Washed, 88.5)</option>
                        <option value="Sidamo Gold">Sidamo Gold (Natural, 87.8)</option>
                        <option value="Harar Sun-Dried">Harar Sun-Dried (Natural, 86.5)</option>
                        <option value="Limu Heirloom">Limu Heirloom (Washed, 87.2)</option>
                        <option value="Full Container FOB Inquiry">Full 20ft/40ft Container Allocation</option>
                        <option value="Custom Micro-Lot / OEM">Custom Micro-Lot / OEM Packaging</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                        Target Volume / Packaging
                      </label>
                      <select
                        name="volume"
                        value={formData.volume}
                        onChange={handleChange}
                        className="w-full text-xs px-3 py-2 rounded-xl border border-stone-200 bg-[#FAF8F5] text-stone-900 focus:bg-white focus:outline-none focus:border-[#255D3A] focus:ring-1 focus:ring-[#255D3A] transition-all"
                      >
                        <option value="Sample Box (250g - 1kg Tins)">Sample Box (250g - 1kg Express Air)</option>
                        <option value="1-10 Bags (Pallet LCL)">1-10 Bags (60kg GrainPro Pallet LCL)</option>
                        <option value="20ft Container (approx. 19.2 MT)">20ft FCL Container (~19.2 MT)</option>
                        <option value="40ft Container (approx. 27 MT)">40ft FCL Container (~27.0 MT)</option>
                        <option value="Profile Roasted Retail Pouches">Profile Roasted Retail Pouches</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Message / Specifics */}
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                      Specific Inquiries / Port of Destination
                    </label>
                    <textarea
                      name="message"
                      rows={2}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="e.g. Please quote CIF Hamburg for 10 bags Yirgacheffe and dispatch green sample tins..."
                      className="w-full text-xs px-3 py-2 rounded-xl border border-stone-200 bg-[#FAF8F5] text-stone-900 focus:bg-white focus:outline-none focus:border-[#255D3A] focus:ring-1 focus:ring-[#255D3A] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-1.5">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#382319] hover:bg-[#26160F] text-white font-semibold py-2.5 px-5 rounded-full text-xs shadow-md transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                    >
                      <span>Send Export Inquiry</span>
                      <Send size={13} />
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
