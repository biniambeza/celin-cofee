import { ArrowRight, Award, Flame, Globe, Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";
import heroImg from "../assets/hero.jpg";
import packagingImg from "../assets/celin-packaging.jpg";

export default function Hero({ onNavigate }) {
  const handleQuoteClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate("contact");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleCatalogClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate("catalog");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#FAF8F5]">
      {/* Background Soft Glows */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-[500px] h-[500px] rounded-full bg-[#0C6052]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#3BAA3E]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content (7 columns on desktop) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0C6052]/10 text-[#0C6052] text-xs sm:text-sm font-bold border border-[#0C6052]/20 shadow-2xs">
              <Sparkles size={15} className="text-[#3BAA3E]" />
              <span>Direct from Ethiopian Highlands • Grade 1 Specialty Exporter</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.14]">
              Exceptional Ethiopian <br />
              <span className="text-[#0C6052]">Roasted Coffee</span> for Global Roasters
            </h1>

            {/* Subtitle */}
            <p className="text-stone-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Sourced directly from Yirgacheffe, Sidama, Guji, and Harrar smallholders.
              Masterfully slow-drum roasted and packed under strict SCA and ECTA export standards — delivered fresh to international cafes and green importers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                type="button"
                onClick={handleQuoteClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#0C6052] text-white font-bold hover:bg-[#08483D] shadow-lg shadow-[#0C6052]/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-sm sm:text-base"
              >
                <span>Request Export Quote</span>
                <ArrowRight size={18} />
              </button>

              <button
                type="button"
                onClick={handleCatalogClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-stone-800 font-bold border border-stone-300 hover:border-[#0C6052] hover:bg-stone-50 transition-colors cursor-pointer text-sm sm:text-base shadow-xs"
              >
                <span>Browse 2026 Harvest Lots</span>
              </button>
            </div>

            {/* Key Value Badges */}
            <div className="pt-6 border-t border-stone-200/80 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#0C6052]">100%</p>
                <p className="text-xs text-stone-500 font-medium mt-0.5">Direct Origin Arabica</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#0C6052]">88.2</p>
                <p className="text-xs text-stone-500 font-medium mt-0.5">Average SCA Cupping</p>
              </div>
              <div>
                <div className="flex items-center justify-center lg:justify-start gap-1">
                  <Globe size={20} className="text-[#3BAA3E]" />
                  <span className="text-2xl sm:text-3xl font-extrabold text-stone-900">45+</span>
                </div>
                <p className="text-xs text-stone-500 font-medium mt-0.5">Global Export Hubs</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Showcase using hero.jpg & packagingImg */}
          <div className="lg:col-span-5 relative mx-auto max-w-lg lg:max-w-none w-full">
            
            {/* Visual Frame */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-stone-900/25 border-4 border-white aspect-[4/5] bg-stone-900 group">
              <img
                src={heroImg}
                alt="Freshly roasted Ethiopian specialty coffee beans with aromatic natural sheen"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

              {/* Inset Mini Showcase for Celin Coffee Bag */}
              <div className="absolute top-4 right-4 w-28 sm:w-32 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/80 bg-white group/bag hover:scale-105 transition-transform">
                <img
                  src={packagingImg}
                  alt="Celin Coffee roasted valve bag"
                  className="w-full h-auto object-cover"
                />
                <div className="bg-[#0C6052] py-1 px-2 text-center text-white text-[9px] font-bold uppercase tracking-wider">
                  OEM Roasted
                </div>
              </div>

              {/* Bottom Caption on the Image */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#85E288] bg-black/40 px-2.5 py-0.5 rounded-md">
                    Slow Drum Roasted
                  </span>
                  <span className="text-[11px] font-bold text-amber-300">
                    SCA 86+ Standards
                  </span>
                </div>
                <p className="text-base sm:text-lg font-bold">
                  Whole Bean & Ground in Degassing Valve Barrier Foil
                </p>
              </div>
            </div>

            {/* Floating Badge 1: Fresh Roast Guarantee */}
            <div className="absolute -bottom-6 -left-4 sm:left-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-stone-100 flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#0C6052]/10 flex items-center justify-center text-[#0C6052]">
                <Flame size={22} className="text-[#0C6052]" />
              </div>
              <div className="text-left pr-2">
                <p className="text-[11px] text-stone-500 font-medium">Roast Consistency</p>
                <p className="text-sm font-bold text-stone-900">Agtron & Temp Profiling</p>
              </div>
            </div>

            {/* Floating Badge 2: Certified Origin */}
            <div className="hidden sm:flex absolute -top-4 -left-4 bg-white/95 backdrop-blur-md py-2.5 px-4 rounded-full shadow-lg border border-stone-100 items-center gap-2 text-xs font-bold text-stone-800">
              <Award size={16} className="text-[#3BAA3E]" />
              <span>ECTA Certified Exporter</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
