import { ArrowRight, Coffee, HeartHandshake, Leaf } from "lucide-react";
import ceremonyImg from "../assets/habesha-story-ceremony.jpg";

export default function OurStorySection({ onNavigate }) {
  const handleCatalogClick = () => {
    if (onNavigate) {
      onNavigate("products");
    }
  };

  return (
    <section id="story" className="min-h-screen flex flex-col justify-center pt-13 sm:pt-15 pb-14 sm:pb-18 bg-gradient-to-b from-[#FAFDFB] via-[#EBF6EE]/60 to-[#FAFDFB] border-b border-[#DCEBDD] relative overflow-hidden scroll-mt-12">

      {/* Decorative botanical background watermark */}
      <div className="absolute top-0 right-0 w-80 h-80 opacity-15 pointer-events-none text-[#7AA884]">
        <svg viewBox="0 0 200 200" fill="currentColor">
          <path d="M40 180 C20 120 70 80 130 50 C110 90 90 140 40 180 Z" />
          <path d="M10 160 C30 110 90 110 120 80 C80 110 60 140 10 160 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full -translate-y-2 sm:-translate-y-4">

        {/* Section Top Tag */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-6 sm:mb-7">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1C2621] tracking-tight leading-tight">
            The Soul of Habesha Coffee: <br />
            <span className="text-[#255D3A] italic font-normal">
              Where Buna Is Born & Shared.
            </span>
          </h2>
        </div>

        {/* Grid: Authentic Images on Left, Shortened Story Explanations on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

          {/* Left Column: Habesha Buna Ceremony Visual with Elder Inset */}
          <div className="lg:col-span-6 relative">

            {/* Main Ceremony Image */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-4 border-white group">
              <img
                src={ceremonyImg}
                alt="Traditional Habesha Buna ceremony in traditional white kemis pouring black clay Jebena onto Rekebot with frankincense smoke"
                className="w-full h-[270px] sm:h-[320px] object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#88E298] block">
                  CULTURAL SACRAMENT
                </span>
                <p className="text-xs sm:text-sm font-serif font-bold text-white leading-tight">
                  The Jebena, Ketema Grass & Frankincense
                </p>
                <p className="text-[11px] text-stone-200 mt-0.5">
                  Over 1,100 years of communal hospitality and blessings.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Concise Story & Cultural Pillars */}
          <div className="lg:col-span-6 space-y-3.5 sm:space-y-4 text-left">

            <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
              In Ethiopia, coffee is never rushed and never drunk alone. It is <strong className="text-[#1C2621] font-bold">Buna (ቡና)</strong>—a revered sacred ritual where green beans are fresh-roasted over hot coals, ground by hand, and brewed slowly inside a volcanic-clay <strong className="text-[#255D3A] font-semibold">Jebena (ጀበና)</strong>.
            </p>

            {/* 3 Shortened Cultural Pillars */}
            <div className="space-y-2 pt-0.5">

              {/* Pillar 1: The Three Sacred Rounds */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-white border border-[#D5EAD9] shadow-2xs flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#D4EBD9] text-[#255D3A] flex items-center justify-center shrink-0 mt-0.5">
                  <Coffee size={15} className="stroke-[2.2]" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs sm:text-[13px] font-bold text-[#1C2621]">
                    The 3 Sacred Rounds (Abol, Tona, Baraka)
                  </h4>
                  <p className="text-[11px] sm:text-xs text-stone-600 leading-relaxed">
                    First cup for honor (<em className="text-[#255D3A]">Abol</em>), second for fellowship (<em className="text-[#255D3A]">Tona</em>), and third for divine blessing (<em className="text-[#255D3A]">Baraka</em>).
                  </p>
                </div>
              </div>

              {/* Pillar 2: Ancient Kaffa Discovery */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-white border border-[#D5EAD9] shadow-2xs flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#D4EBD9] text-[#255D3A] flex items-center justify-center shrink-0 mt-0.5">
                  <Leaf size={15} className="stroke-[2.2]" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs sm:text-[13px] font-bold text-[#1C2621]">
                    The Birthplace of Arabica (850 CE)
                  </h4>
                  <p className="text-[11px] sm:text-xs text-stone-600 leading-relaxed">
                    Discovered in the wild cloud forests of Kaffa by the goatherd Kaldi, our indigenous heirloom varieties have grown untamed for centuries.
                  </p>
                </div>
              </div>

              {/* Pillar 3: Ancestral Stewardship to Global Export */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-white border border-[#D5EAD9] shadow-2xs flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#D4EBD9] text-[#255D3A] flex items-center justify-center shrink-0 mt-0.5">
                  <HeartHandshake size={15} className="stroke-[2.2]" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs sm:text-[13px] font-bold text-[#1C2621]">
                    From Elder Farmers to Your Cups
                  </h4>
                  <p className="text-[11px] sm:text-xs text-stone-600 leading-relaxed">
                    Celin Coffee partners directly with smallholder family cooperatives, exporting certified Grade-1 lots from Addis Ababa to roasters worldwide.
                  </p>
                </div>
              </div>

            </div>

            {/* Action CTA */}
            <div className="pt-1 flex items-center gap-3">
              <button
                type="button"
                onClick={handleCatalogClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#382319] hover:bg-[#26160F] text-white font-medium text-xs sm:text-[13px] shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
              >
                <span>Explore Single Origin Catalog</span>
                <ArrowRight size={14} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
