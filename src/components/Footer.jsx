import { useState } from "react";
import { Mail, Phone, MapPin, Globe, ArrowRight, ShieldCheck, CheckCircle2, Award } from "lucide-react";
import logo from "../assets/logo.png";

export default function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const handleLinkClick = (target, hash) => {
    if (onNavigate) {
      onNavigate(target, null, hash);
    }
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-[#082822] text-stone-300 pt-16 pb-8 border-t border-[#0C6052]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter / Trade Inquiries Banner */}
        <div className="bg-gradient-to-r from-[#0C6052] to-[#08483D] rounded-3xl p-8 sm:p-10 mb-14 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 border border-white/10">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#85E288] bg-black/20 px-3 py-1 rounded-full">
              Global Importers & Coffee Roasters
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Receive 2026 Harvest Crop Sheets & FOB Pricing
            </h3>
            <p className="text-stone-200 text-sm max-w-xl">
              Stay ahead on seasonal washing station harvests, Q-grader cupping reports, and shipping schedules from Djibouti Port.
            </p>
          </div>

          {/* Catalog Input */}
          <div className="w-full lg:w-auto max-w-md">
            {subscribed ? (
              <div className="bg-white/10 border border-[#85E288]/40 px-5 py-3.5 rounded-full text-center text-sm font-bold text-[#85E288] flex items-center justify-center gap-2">
                <CheckCircle2 size={18} />
                <span>Thank you! Crop schedule dispatched to your inbox.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter business email"
                  className="px-5 py-3.5 rounded-full bg-white text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#3BAA3E] w-full"
                />
                <button
                  type="submit"
                  className="bg-[#06241F] hover:bg-black text-white px-6 py-3.5 rounded-full text-sm font-bold flex items-center justify-center gap-2 transition-colors shrink-0 cursor-pointer"
                >
                  <span>Subscribe</span>
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Column 1: Company Profile & Logo (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="bg-white rounded-2xl p-2.5 inline-block shadow-sm">
              <img
                src={logo}
                alt="Celin Coffee - Ethiopian Roasted Coffee Exporter"
                className="h-14 w-auto object-contain"
              />
            </div>

            <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
              Licensed Ethiopian specialty coffee exporter based in Addis Ababa. Delivering high-scoring, single-origin green and profile-roasted Ethiopian coffees directly to roasters and distributors globally.
            </p>

            {/* Certifications Badge Line */}
            <div className="space-y-2 pt-1 text-xs text-stone-300">
              <div className="flex items-center gap-2 text-[#3BAA3E]">
                <ShieldCheck size={16} />
                <span className="font-bold text-stone-200">ECTA Licensed Coffee Exporter</span>
              </div>
              <div className="flex items-center gap-2 text-[#3BAA3E]">
                <Award size={16} />
                <span className="font-bold text-stone-200">Q-Grade Lab Cupping Quality Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-[#3BAA3E]">
                <CheckCircle2 size={16} />
                <span className="font-bold text-stone-200">100% Traceable Direct Cooperative Sourcing</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick("home")}
                  className="hover:text-[#3BAA3E] transition-colors cursor-pointer bg-transparent border-none text-stone-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick("home", "#about")}
                  className="hover:text-[#3BAA3E] transition-colors cursor-pointer bg-transparent border-none text-stone-300"
                >
                  About Our Story
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick("catalog")}
                  className="hover:text-[#3BAA3E] transition-colors cursor-pointer bg-transparent border-none text-stone-300"
                >
                  Coffee Catalog
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick("home", "#export")}
                  className="hover:text-[#3BAA3E] transition-colors cursor-pointer bg-transparent border-none text-stone-300"
                >
                  Export Process
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick("contact")}
                  className="hover:text-[#3BAA3E] transition-colors cursor-pointer bg-transparent border-none text-stone-300"
                >
                  Contact & Desk
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Ethiopian Varieties (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">
              Featured Varieties
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li
                onClick={() => handleLinkClick("catalog")}
                className="flex items-center justify-between text-stone-400 hover:text-white transition-colors cursor-pointer"
              >
                <span>Yirgacheffe Grade 1</span>
                <span className="text-[11px] text-[#3BAA3E] bg-[#0C6052]/40 px-2 py-0.5 rounded font-bold">Washed</span>
              </li>
              <li
                onClick={() => handleLinkClick("catalog")}
                className="flex items-center justify-between text-stone-400 hover:text-white transition-colors cursor-pointer"
              >
                <span>Sidama Bensa</span>
                <span className="text-[11px] text-[#3BAA3E] bg-[#0C6052]/40 px-2 py-0.5 rounded font-bold">Natural</span>
              </li>
              <li
                onClick={() => handleLinkClick("catalog")}
                className="flex items-center justify-between text-stone-400 hover:text-white transition-colors cursor-pointer"
              >
                <span>Guji Anaerobic</span>
                <span className="text-[11px] text-[#3BAA3E] bg-[#0C6052]/40 px-2 py-0.5 rounded font-bold">Micro-Lot</span>
              </li>
              <li
                onClick={() => handleLinkClick("catalog")}
                className="flex items-center justify-between text-stone-400 hover:text-white transition-colors cursor-pointer"
              >
                <span>Harrar Artisan Longberry</span>
                <span className="text-[11px] text-[#3BAA3E] bg-[#0C6052]/40 px-2 py-0.5 rounded font-bold">Natural</span>
              </li>
              <li
                onClick={() => handleLinkClick("catalog")}
                className="flex items-center justify-between text-stone-400 hover:text-white transition-colors cursor-pointer"
              >
                <span>Limu Organic</span>
                <span className="text-[11px] text-[#3BAA3E] bg-[#0C6052]/40 px-2 py-0.5 rounded font-bold">Washed</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Export Office (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">
              Export Desk Addis Ababa
            </h4>

            <div className="space-y-3 text-sm text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin size={18} className="text-[#3BAA3E] shrink-0 mt-0.5" />
                <span>Bole Sub-City, Addis Ababa, Ethiopia</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail size={18} className="text-[#3BAA3E] shrink-0" />
                <a href="mailto:export@celincoffee.com" className="hover:text-white transition-colors font-semibold">
                  export@celincoffee.com
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone size={18} className="text-[#3BAA3E] shrink-0" />
                <span className="font-semibold text-stone-200">+251 911 000 000</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Globe size={18} className="text-[#3BAA3E] shrink-0" />
                <span>FOB Djibouti Port & Air Freight CIF</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Terms */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {currentYear} Celin Coffee Exporter PLC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>ECTA Licensed Export Station</span>
            <span>SCA Cupping Protocols</span>
            <span>GrainPro Hermetic Protection</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
