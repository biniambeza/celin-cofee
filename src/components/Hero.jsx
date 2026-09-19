import { ArrowRight } from "lucide-react";
import exportPouchesImg from "../assets/celin-export-pouches.jpg";

export default function Hero({ onNavigate }) {
  const handleCatalogClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate("catalog");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#0C4533] text-white">
      {/* Background Soft Glows & Organic Shapes matching reference */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#12533F]/70 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-64 h-64 rounded-full border-2 border-[#D4A373]/30 pointer-events-none" />
      
      {/* Decorative Botanical Leaf Icon in top right matching reference */}
      <div className="absolute top-16 right-8 lg:right-16 opacity-25 pointer-events-none hidden sm:block">
        <svg width="110" height="110" viewBox="0 0 100 100" fill="none">
          <path d="M50 10 C30 35 15 60 50 90 C85 60 70 35 50 10 Z" fill="#09bd3c" />
          <path d="M50 20 L50 85" stroke="#ffffff" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Content matching reference headline & typography */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-6">
            
            {/* Main Headline directly from reference */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-bold text-white tracking-tight leading-[1.12]">
              CELIN COFFEE: Exquisite <br />
              Single Origin Beans, <br />
              Crafted for Global Export.
            </h1>

            {/* Subtitle directly from reference */}
            <p className="text-stone-200/90 text-sm sm:text-base md:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed font-normal">
              The finest Arabica and Robusta, sustainably sourced from diverse regions. Partnering with roasters worldwide to deliver exceptional quality.
            </p>

            {/* CTA Button directly from reference */}
            <div className="pt-2 flex justify-center lg:justify-start">
              <button
                type="button"
                onClick={handleCatalogClick}
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#E06428] hover:bg-[#c9531c] text-white font-extrabold shadow-lg shadow-[#E06428]/25 transition-all hover:scale-[1.03] active:scale-[0.98] cursor-pointer text-sm sm:text-base"
              >
                <span>Explore Wholesale Catalog</span>
                <ArrowRight size={18} />
              </button>
            </div>

          </div>

          {/* Right Column: Three Coffee Pouches Showcase matching reference */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
            
            {/* Organic rounded backdrop shape */}
            <div className="absolute w-[340px] sm:w-[480px] h-[340px] sm:h-[480px] rounded-full bg-[#12533F] -z-0 blur-xs" />
            <div className="absolute w-72 h-72 rounded-full bg-[#09bd3c]/20 blur-3xl -z-0" />

            {/* Product Image Frame: Yirgacheffe Premier, Sidamo Gold, Harrar Reserve */}
            <div className="relative z-10 w-full max-w-lg rounded-3xl sm:rounded-[2.25rem] overflow-hidden shadow-2xl shadow-black/45 border-2 border-white/15 group">
              <img
                src={exportPouchesImg}
                alt="Celin Coffee Ethiopian Single Origin pouches: Yirgacheffe Premier, Sidamo Gold, and Harrar Reserve"
                className="w-full h-auto object-cover transform group-hover:scale-103 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Pagination dots matching reference */}
            <div className="flex items-center gap-2 mt-6 z-10">
              <span className="w-5 h-2 rounded-full bg-white shadow-xs" />
              <span className="w-2 h-2 rounded-full bg-white/40" />
              <span className="w-2 h-2 rounded-full bg-white/40" />
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
