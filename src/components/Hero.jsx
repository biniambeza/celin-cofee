import { ArrowRight, Ship, ShieldCheck, HeartHandshake, Sprout } from "lucide-react";
import heroMintCup from "../assets/hero-mint-cup.jpg";

export default function Hero({ onNavigate }) {
  const handleCatalogClick = (e) => {
    e.preventDefault();
    const el = document.querySelector("#products");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else if (onNavigate) {
      onNavigate("home", null, "#products");
    }
  };

  return (
    <section id="home" className="relative pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-16 bg-gradient-to-b from-[#EBF6EE] via-[#E6F4EA] to-[#E2F1E5] text-[#1C2621] overflow-hidden">
      
      {/* Decorative Botanical Leaf Silhouettes on bottom left matching reference */}
      <div className="absolute -bottom-10 -left-12 w-80 h-80 opacity-25 pointer-events-none text-[#7AA884]">
        <svg viewBox="0 0 200 200" fill="currentColor">
          <path d="M40 180 C20 120 70 80 130 50 C110 90 90 140 40 180 Z" />
          <path d="M15 155 C35 105 95 105 125 75 C85 105 65 135 15 155 Z" />
          <path d="M60 190 C75 140 120 110 170 85 C145 120 115 160 60 190 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Hero Grid: Left Narrative + Right Cup Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Clean & Elegant Headline matching reference */}
          <div className="lg:col-span-6 text-left space-y-6">
            
            {/* Category Tag with trailing line */}
            <div className="flex items-center gap-2.5">
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#255D3A] uppercase">
                PREMIUM ETHIOPIAN COFFEE
              </span>
              <span className="w-9 h-[1.5px] bg-[#255D3A]/60" />
            </div>

            {/* Main Headline - Dual Tone Serif */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] xl:text-[4.1rem] font-serif font-bold tracking-tight leading-[1.08]">
              <span className="text-[#1C2621] block">
                Authentic Origins.
              </span>
              <span className="text-[#255D3A] block mt-1">
                Exceptional Quality.
              </span>
            </h1>

            {/* Subtitle / Description */}
            <p className="text-[#3D4D42] text-sm sm:text-base lg:text-lg max-w-lg leading-relaxed font-normal">
              We source, pack and export premium Ethiopian coffee beans, connecting global markets with the rich heritage of our highlands.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleCatalogClick}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#382319] hover:bg-[#26160F] text-white font-medium text-xs sm:text-sm shadow-md shadow-[#382319]/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Explore Our Products</span>
                <span className="text-sm font-bold leading-none">→</span>
              </button>
            </div>

          </div>

          {/* Right Column: Mint Cup & Beans Highland Visual with Watermark */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
            
            {/* Visual Container */}
            <div className="relative w-full max-w-xl mx-auto rounded-3xl sm:rounded-[2.25rem] overflow-hidden shadow-2xl shadow-[#1C2621]/15 border-4 border-white/80 group">
              <img
                src={heroMintCup}
                alt="Freshly brewed Ethiopian specialty coffee in sage mint cup with roasted beans spilling from jute sack overlooking lush mountain highlands"
                className="w-full h-auto object-cover transform group-hover:scale-103 transition-transform duration-700 ease-out"
              />

              {/* Watermark text: "From Ethiopia to the World" + Botanical Branch Doodle */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 text-white text-right pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                <p className="font-serif italic text-base sm:text-lg lg:text-xl font-normal tracking-wide leading-tight">
                  From Ethiopia <br /> to the World
                </p>
                <div className="flex justify-end mt-1 opacity-90">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2C8 6 6 12 12 22C18 12 16 6 12 2Z" />
                    <circle cx="12" cy="14" r="2" fill="currentColor" />
                    <circle cx="9" cy="18" r="1.5" fill="currentColor" />
                    <circle cx="15" cy="18" r="1.5" fill="currentColor" />
                  </svg>
                </div>
              </div>

              {/* Soft overlay gradient to ensure watermark legibility */}
              <div className="absolute top-0 right-0 w-48 h-32 bg-gradient-to-bl from-black/40 via-black/10 to-transparent pointer-events-none" />
            </div>

          </div>

        </div>

        {/* Bottom 4 Trust Pillars Strip matching reference */}
        <div className="mt-14 sm:mt-18 pt-10 border-t border-[#D5EAD9]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            
            {/* Pillar 1: Premium Grade Beans */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#D4EBD9] text-[#255D3A] flex items-center justify-center shrink-0 shadow-xs">
                <Sprout size={22} className="stroke-[2.2]" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-sm sm:text-base text-[#1C2621]">
                  Premium Grade Beans
                </h3>
                <p className="text-xs sm:text-sm text-[#4A5D50] leading-relaxed">
                  Handpicked, naturally processed, full of flavor.
                </p>
              </div>
            </div>

            {/* Pillar 2: Global Export */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#D4EBD9] text-[#255D3A] flex items-center justify-center shrink-0 shadow-xs">
                <Ship size={22} className="stroke-[2.2]" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-sm sm:text-base text-[#1C2621]">
                  Global Export
                </h3>
                <p className="text-xs sm:text-sm text-[#4A5D50] leading-relaxed">
                  Reliable logistics and timely delivery worldwide.
                </p>
              </div>
            </div>

            {/* Pillar 3: Quality Assured */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#D4EBD9] text-[#255D3A] flex items-center justify-center shrink-0 shadow-xs">
                <ShieldCheck size={22} className="stroke-[2.2]" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-sm sm:text-base text-[#1C2621]">
                  Quality Assured
                </h3>
                <p className="text-xs sm:text-sm text-[#4A5D50] leading-relaxed">
                  Fully certified and lab tested for your confidence.
                </p>
              </div>
            </div>

            {/* Pillar 4: Long-Term Partnerships */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#D4EBD9] text-[#255D3A] flex items-center justify-center shrink-0 shadow-xs">
                <HeartHandshake size={22} className="stroke-[2.2]" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-sm sm:text-base text-[#1C2621]">
                  Long-Term Partnerships
                </h3>
                <p className="text-xs sm:text-sm text-[#4A5D50] leading-relaxed">
                  Building sustainable trade for a better tomorrow.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
