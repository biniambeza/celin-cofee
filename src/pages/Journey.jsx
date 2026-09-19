import { CheckCircle2, Star } from "lucide-react";
import farmImg from "../assets/coffee-farm.jpg";
import dryingBedsImg from "../assets/drying-beds.jpg";
import cuppingLabImg from "../assets/cupping-lab.jpg";
import packagingImg from "../assets/celin-packaging.jpg";

export default function Journey() {
  return (
    <section id="journey" className="min-h-screen flex flex-col justify-center pt-13 sm:pt-15 pb-14 sm:pb-18 bg-[#FAF8F5] border-b border-[#DCEBDD] relative overflow-hidden scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full -translate-y-2 sm:-translate-y-4">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-6 space-y-1">
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#1E5E3A] uppercase">
            QUALITY & EXPORT INTEGRITY
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1C2621] tracking-tight">
            From Highland Soil to Container Seal.
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm max-w-xl mx-auto">
            Every export lot undergoes rigorous 4-stage monitoring to guarantee moisture stability, clean cup clarity, and defect-free arrival.
          </p>
        </div>

        {/* 4 Process Photo Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 mb-4 sm:mb-5">

          {/* Step 1 */}
          <div className="bg-white rounded-xl p-3 sm:p-3.5 border border-[#DCEBDD] shadow-xs hover:shadow-md hover:border-[#1E5E3A]/40 transition-all flex flex-col group">
            <div className="h-28 sm:h-32 rounded-lg overflow-hidden relative mb-2">
              <img
                src={farmImg}
                alt="Selective handpicking in Ethiopian highlands"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2 left-2 bg-[#1C2621]/90 text-white text-[8.5px] font-bold px-1.5 py-0.5 rounded-full">
                STEP 01
              </div>
            </div>
            <h3 className="font-serif font-bold text-xs sm:text-sm text-[#1C2621] mb-0.5 group-hover:text-[#1E5E3A] transition-colors">
              Selective Handpicking
            </h3>
            <p className="text-[10.5px] text-stone-600 leading-snug flex-1">
              Hand-harvested at 1,800m–2,200m in rich volcanic soil. Only fully ripe crimson cherries are chosen.
            </p>
            <div className="mt-2 pt-2 border-t border-stone-100 flex items-center justify-between text-[10px] font-semibold text-[#1E5E3A]">
              <span>Brix Score: 21–24%</span>
              <CheckCircle2 size={12} />
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-xl p-3 sm:p-3.5 border border-[#DCEBDD] shadow-xs hover:shadow-md hover:border-[#1E5E3A]/40 transition-all flex flex-col group">
            <div className="h-28 sm:h-32 rounded-lg overflow-hidden relative mb-2">
              <img
                src={dryingBedsImg}
                alt="Sun drying on African raised beds"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2 left-2 bg-[#1C2621]/90 text-white text-[8.5px] font-bold px-1.5 py-0.5 rounded-full">
                STEP 02
              </div>
            </div>
            <h3 className="font-serif font-bold text-xs sm:text-sm text-[#1C2621] mb-0.5 group-hover:text-[#1E5E3A] transition-colors">
              Raised Bed Drying
            </h3>
            <p className="text-[10.5px] text-stone-600 leading-snug flex-1">
              Slowly cured on African mesh beds with manual rotation every two hours for uniform moisture loss.
            </p>
            <div className="mt-2 pt-2 border-t border-stone-100 flex items-center justify-between text-[10px] font-semibold text-[#1E5E3A]">
              <span>Target: 10.5–11.2%</span>
              <CheckCircle2 size={12} />
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-xl p-3 sm:p-3.5 border border-[#DCEBDD] shadow-xs hover:shadow-md hover:border-[#1E5E3A]/40 transition-all flex flex-col group">
            <div className="h-28 sm:h-32 rounded-lg overflow-hidden relative mb-2">
              <img
                src={cuppingLabImg}
                alt="Certified Q-grading and lab cupping"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2 left-2 bg-[#1C2621]/90 text-white text-[8.5px] font-bold px-1.5 py-0.5 rounded-full">
                STEP 03
              </div>
            </div>
            <h3 className="font-serif font-bold text-xs sm:text-sm text-[#1C2621] mb-0.5 group-hover:text-[#1E5E3A] transition-colors">
              Certified Lab Cupping
            </h3>
            <p className="text-[10.5px] text-stone-600 leading-snug flex-1">
              Triple-blind cupping sessions by licensed Q-graders verifying sweetness, clean cup, and aroma scores.
            </p>
            <div className="mt-2 pt-2 border-t border-stone-100 flex items-center justify-between text-[10px] font-semibold text-[#1E5E3A]">
              <span>SCA Standard Protocol</span>
              <CheckCircle2 size={12} />
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-xl p-3 sm:p-3.5 border border-[#DCEBDD] shadow-xs hover:shadow-md hover:border-[#1E5E3A]/40 transition-all flex flex-col group">
            <div className="h-28 sm:h-32 rounded-lg overflow-hidden relative mb-2">
              <img
                src={packagingImg}
                alt="GrainPro hermetic bags and custom valve packaging"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2 left-2 bg-[#1C2621]/90 text-white text-[8.5px] font-bold px-1.5 py-0.5 rounded-full">
                STEP 04
              </div>
            </div>
            <h3 className="font-serif font-bold text-xs sm:text-sm text-[#1C2621] mb-0.5 group-hover:text-[#1E5E3A] transition-colors">
              GrainPro Packaging
            </h3>
            <p className="text-[10.5px] text-stone-600 leading-snug flex-1">
              Hermetically sealed in multi-layer GrainPro liners inside jute export sacks for ocean and air shipping.
            </p>
            <div className="mt-2 pt-2 border-t border-stone-100 flex items-center justify-between text-[10px] font-semibold text-[#1E5E3A]">
              <span>FOB Port of Djibouti</span>
              <CheckCircle2 size={12} />
            </div>
          </div>

        </div>

        {/* Global Roasters Trust Ribbon */}
        <div className="bg-white rounded-xl p-3 border border-[#DCEBDD] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-stone-600">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#1C2621] text-xs">Trusted By Roasters:</span>
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-stone-500 text-[10px]">(Berlin, London, Tokyo, Sydney)</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[10px] font-bold tracking-wider text-[#2C3830] uppercase">
            <span>ROASTWORKS LONDON</span>
            <span className="text-[#A2B8A6]">•</span>
            <span>CAFE BERLIN</span>
            <span className="text-[#A2B8A6]">•</span>
            <span>TOKYO ARTISAN ROASTERS</span>
          </div>
        </div>

      </div>
    </section>
  );
}
