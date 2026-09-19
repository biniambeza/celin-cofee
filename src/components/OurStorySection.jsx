import { ArrowRight, Sparkles, Coffee, HeartHandshake, Leaf } from "lucide-react";
import ceremonyImg from "../assets/habesha-story-ceremony.jpg";
import elderMasterImg from "../assets/habesha-coffee-master.jpg";

export default function OurStorySection({ onNavigate }) {
  const handleCatalogClick = () => {
    const el = document.querySelector("#products");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else if (onNavigate) {
      onNavigate("home", null, "#products");
    }
  };

  return (
    <section id="story" className="py-20 lg:py-24 bg-gradient-to-b from-[#FAFDFB] via-[#EBF6EE]/60 to-[#FAFDFB] border-y border-[#DCEBDD] relative overflow-hidden">

      {/* Decorative botanical background watermark */}
      <div className="absolute top-0 right-0 w-80 h-80 opacity-15 pointer-events-none text-[#7AA884]">
        <svg viewBox="0 0 200 200" fill="currentColor">
          <path d="M40 180 C20 120 70 80 130 50 C110 90 90 140 40 180 Z" />
          <path d="M10 160 C30 110 90 110 120 80 C80 110 60 140 10 160 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Top Tag */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#CDE5D1] shadow-2xs text-xs font-semibold tracking-[0.2em] text-[#255D3A] uppercase">
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C2621] tracking-tight leading-tight">
            The Soul of Habesha Coffee: <br />
            <span className="text-[#255D3A] italic font-normal">
              Where Buna Is Born & Shared.
            </span>
          </h2>
        </div>

        {/* Grid: Authentic Images on Left, Shortened Story Explanations on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* Left Column: Habesha Buna Ceremony Visual with Elder Inset */}
          <div className="lg:col-span-6 relative">

            {/* Main Ceremony Image */}
            <div className="relative rounded-3xl sm:rounded-[2.25rem] overflow-hidden shadow-2xl border-4 border-white group">
              <img
                src={ceremonyImg}
                alt="Traditional Habesha Buna ceremony in traditional white kemis pouring black clay Jebena onto Rekebot with frankincense smoke"
                className="w-full h-[360px] sm:h-[440px] object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#88E298] block">
                  CULTURAL SACRAMENT
                </span>
                <p className="text-sm sm:text-base font-serif font-bold text-white leading-tight">
                  The Jebena, Ketema Grass & Frankincense
                </p>
                <p className="text-xs text-stone-200 mt-0.5">
                  Over 1,100 years of communal hospitality and blessings.
                </p>
              </div>
            </div>

            {/* Floating Elder Master Inset Card */}


          </div>

          {/* Right Column: Concise Story & Cultural Pillars */}
          <div className="lg:col-span-6 space-y-6 text-left">

            <p className="text-stone-700 text-sm sm:text-base lg:text-lg leading-relaxed">
              In Ethiopia, coffee is never rushed and never drunk alone. It is <strong className="text-[#1C2621] font-bold">Buna (ቡና)</strong>—a revered sacred ritual where green beans are fresh-roasted over hot coals, ground by hand, and brewed slowly inside a volcanic-clay <strong className="text-[#255D3A] font-semibold">Jebena (ጀበና)</strong>.
            </p>

            {/* 3 Shortened Cultural Pillars */}
            <div className="space-y-3.5 pt-2">

              {/* Pillar 1: The Three Sacred Rounds */}
              <div className="p-4 rounded-2xl bg-white border border-[#D5EAD9] shadow-2xs flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#D4EBD9] text-[#255D3A] flex items-center justify-center shrink-0 mt-0.5">
                  <Coffee size={18} className="stroke-[2.2]" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-sm font-bold text-[#1C2621]">
                    The 3 Sacred Rounds (Abol, Tona, Baraka)
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    First cup for honor (<em className="text-[#255D3A]">Abol</em>), second for fellowship (<em className="text-[#255D3A]">Tona</em>), and third for divine blessing (<em className="text-[#255D3A]">Baraka</em>).
                  </p>
                </div>
              </div>

              {/* Pillar 2: Ancient Kaffa Discovery */}
              <div className="p-4 rounded-2xl bg-white border border-[#D5EAD9] shadow-2xs flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#D4EBD9] text-[#255D3A] flex items-center justify-center shrink-0 mt-0.5">
                  <Leaf size={18} className="stroke-[2.2]" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-sm font-bold text-[#1C2621]">
                    The Birthplace of Arabica (850 CE)
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Discovered in the wild cloud forests of Kaffa by the goatherd Kaldi, our indigenous heirloom varieties have grown untamed for centuries.
                  </p>
                </div>
              </div>

              {/* Pillar 3: Ancestral Stewardship to Global Export */}
              <div className="p-4 rounded-2xl bg-white border border-[#D5EAD9] shadow-2xs flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#D4EBD9] text-[#255D3A] flex items-center justify-center shrink-0 mt-0.5">
                  <HeartHandshake size={18} className="stroke-[2.2]" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-sm font-bold text-[#1C2621]">
                    From Elder Farmers to Your Cups
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Celin Coffee partners directly with smallholder family cooperatives, exporting certified Grade-1 lots from Addis Ababa to roasters worldwide.
                  </p>
                </div>
              </div>

            </div>

            {/* Action CTA */}
            <div className="pt-3 flex items-center gap-4">
              <button
                type="button"
                onClick={handleCatalogClick}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#382319] hover:bg-[#26160F] text-white font-medium text-xs sm:text-sm shadow-md transition-all hover:scale-[1.02] cursor-pointer"
              >
                <span>Explore Single Origin Catalog</span>
                <ArrowRight size={15} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
