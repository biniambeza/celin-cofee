import { ArrowRight } from "lucide-react";
import exportPouchesImg from "../assets/celin-export-pouches.jpg";
import heroBg from "../assets/coffee-culture-hero.jpg";

export default function Hero({ onNavigate }) {
  const handleCatalogClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate("catalog");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden text-white min-h-[92vh] flex items-center">
      {/* 1. Full Panoramic Coffee Culture Background Image extending behind navbar */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Cinematic gradient overlays: deep left gradient for text readability, subtle bottom blend */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/65 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-transparent to-black/60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Clean & Simple Coffee Culture Content */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-6">
            
            {/* Origin & Culture Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#85E288] text-xs font-bold uppercase tracking-wider shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#09bd3c] animate-pulse" />
              <span>Authentic Ethiopian Coffee Culture</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              CELIN COFFEE: Exquisite <br />
              Single Origin Beans, <br />
              Crafted for Global Export.
            </h1>

            {/* Subtitle */}
            <p className="text-stone-200/95 text-sm sm:text-base md:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed font-normal drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
              Direct from Ethiopia's legendary mountain highlands to roasters worldwide. Sourced with honor, roasted to perfection, and shared with generational reverence.
            </p>

            {/* CTA Button matching warm orange accent */}
            <div className="pt-2 flex justify-center lg:justify-start">
              <button
                type="button"
                onClick={handleCatalogClick}
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#E06428] hover:bg-[#c9531c] text-white font-extrabold shadow-xl shadow-[#E06428]/35 transition-all hover:scale-[1.03] active:scale-[0.98] cursor-pointer text-sm sm:text-base"
              >
                <span>Explore Wholesale Catalog</span>
                <ArrowRight size={18} />
              </button>
            </div>

          </div>

          {/* Right Column: Three Coffee Pouches Showcase */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
            
            {/* Organic rounded backdrop glow */}
            <div className="absolute w-[340px] sm:w-[480px] h-[340px] sm:h-[480px] rounded-full bg-[#12533F]/50 -z-0 blur-2xl" />

            {/* Product Image Frame */}
            <div className="relative z-10 w-full max-w-lg rounded-3xl sm:rounded-[2.25rem] overflow-hidden shadow-2xl shadow-black/80 border-2 border-white/20 backdrop-blur-xs group">
              <img
                src={exportPouchesImg}
                alt="Celin Coffee Ethiopian Single Origin pouches: Yirgacheffe Premier, Sidamo Gold, and Harrar Reserve"
                className="w-full h-auto object-cover transform group-hover:scale-103 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Pagination dots matching reference */}
            <div className="flex items-center gap-2 mt-6 z-10">
              <span className="w-5 h-2 rounded-full bg-[#E06428] shadow-xs" />
              <span className="w-2 h-2 rounded-full bg-white/50" />
              <span className="w-2 h-2 rounded-full bg-white/50" />
            </div>

          </div>

        </div>
      </div>

      {/* Organic Bottom Curve to smoothly connect to next section */}
      <div className="absolute -bottom-1 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-10">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-6 sm:h-12"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C360,50 1080,50 1440,0 L1440,60 L0,60 Z"
            fill="#FAF8F5"
          />
        </svg>
      </div>
    </section>
  );
}
