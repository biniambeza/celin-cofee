import { Users, Award, Layers, Globe, ArrowRight } from "lucide-react";
import cuppingLabImg from "../assets/cupping-lab.jpg";
import farmerImg from "../assets/farmer.jpg";

export default function About({ onNavigate }) {
  const handleGoProducts = () => {
    if (onNavigate) {
      onNavigate("products");
    }
  };

  const handleGoContact = () => {
    if (onNavigate) {
      onNavigate("contact");
    }
  };

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center pt-13 sm:pt-15 pb-14 sm:pb-18 bg-white border-b border-[#DCEBDD] relative overflow-hidden scroll-mt-12">
      {/* Subtle background brand gradient circle */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-[#EBF6EE]/70 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full -translate-y-2 sm:-translate-y-4">

        {/* Section Header */}
        <div className="max-w-3xl mb-5 sm:mb-6 space-y-1.5 text-left">
          <div className="flex items-center gap-2">
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#1E5E3A] uppercase">
              ABOUT CELIN COFFEE
            </span>
            <span className="w-8 h-[1.5px] bg-[#1E5E3A]/60" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1C2621] tracking-tight leading-tight">
            Rooted in Ethiopian Highlands,{" "}
            <span className="text-[#1E5E3A] italic font-normal">
              Exported with Absolute Precision.
            </span>
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm leading-relaxed max-w-2xl">
            Headquartered in Addis Ababa, Celin Coffee bridges smallholder farming cooperatives with premier international roasters through verified chain-of-custody sourcing and rigorous laboratory cupping.
          </p>
        </div>

        {/* 4 Company Metric Highlights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-5 sm:mb-6">
          <div className="bg-[#FAFDFB] p-3.5 sm:p-4 rounded-xl border border-[#DCEBDD] space-y-1 hover:border-[#1E5E3A]/40 transition-all">
            <div className="w-7 h-7 rounded-lg bg-[#EBF6EE] text-[#1E5E3A] flex items-center justify-center font-bold">
              <Users size={15} />
            </div>
            <p className="text-lg sm:text-xl font-serif font-bold text-[#1C2621]">1,200+</p>
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#1E5E3A]">Smallholder Families</p>
            <p className="text-[10px] text-stone-500 leading-snug">
              Direct farm-gate pricing with sustained seasonal community bonuses.
            </p>
          </div>

          <div className="bg-[#FAFDFB] p-3.5 sm:p-4 rounded-xl border border-[#DCEBDD] space-y-1 hover:border-[#1E5E3A]/40 transition-all">
            <div className="w-7 h-7 rounded-lg bg-[#EBF6EE] text-[#1E5E3A] flex items-center justify-center font-bold">
              <Award size={15} />
            </div>
            <p className="text-lg sm:text-xl font-serif font-bold text-[#1C2621]">86 – 89.5</p>
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#1E5E3A]">SCA Cup Scores</p>
            <p className="text-[10px] text-stone-500 leading-snug">
              Certified Grade-1 & Grade-2 single-origin washed & natural micro-lots.
            </p>
          </div>

          <div className="bg-[#FAFDFB] p-3.5 sm:p-4 rounded-xl border border-[#DCEBDD] space-y-1 hover:border-[#1E5E3A]/40 transition-all">
            <div className="w-7 h-7 rounded-lg bg-[#EBF6EE] text-[#1E5E3A] flex items-center justify-center font-bold">
              <Layers size={15} />
            </div>
            <p className="text-lg sm:text-xl font-serif font-bold text-[#1C2621]">100%</p>
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#1E5E3A]">Origin Traceability</p>
            <p className="text-[10px] text-stone-500 leading-snug">
              Verified chain of custody from woreda washing stations to container.
            </p>
          </div>

          <div className="bg-[#FAFDFB] p-3.5 sm:p-4 rounded-xl border border-[#DCEBDD] space-y-1 hover:border-[#1E5E3A]/40 transition-all">
            <div className="w-7 h-7 rounded-lg bg-[#EBF6EE] text-[#1E5E3A] flex items-center justify-center font-bold">
              <Globe size={15} />
            </div>
            <p className="text-lg sm:text-xl font-serif font-bold text-[#1C2621]">14+</p>
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#1E5E3A]">Export Markets</p>
            <p className="text-[10px] text-stone-500 leading-snug">
              Containers FOB Djibouti & express 48h air sample tins worldwide.
            </p>
          </div>
        </div>

        {/* Dual Visual Showcase + Action Desk */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-center">

          {/* Left Image: Cupping Lab */}
          <div className="lg:col-span-6 relative group">
            <div className="rounded-xl overflow-hidden shadow-md border-2 border-[#FAF8F5] h-44 sm:h-48 relative">
              <img
                src={cuppingLabImg}
                alt="Certified Q-graders testing Ethiopian coffee in Celin Coffee cupping lab"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[8.5px] font-bold uppercase bg-[#1E5E3A] text-white px-2 py-0.5 rounded-full mb-0.5 inline-block">
                  Addis Ababa Lab
                </span>
                <p className="text-xs sm:text-[13px] font-bold">Certified Q-Grader Cupping & Roast Profiling</p>
                <p className="text-[10px] text-stone-300">Moisture verification, screen grading, and defect analysis for every export lot.</p>
              </div>
            </div>
          </div>

          {/* Right Image: Farmer Partnership Card */}
          <div className="lg:col-span-6 bg-[#FAFDFB] p-4 rounded-xl border border-[#DCEBDD] shadow-2xs space-y-3">
            <div className="flex items-center gap-3">
              <img
                src={farmerImg}
                alt="Ethiopian Coffee Farmer Partner"
                className="w-11 h-11 rounded-full object-cover border-2 border-[#1E5E3A] shadow-xs"
              />
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-[#1C2621]">Ato Nuredin & Sourcing Partners</h4>
                <p className="text-[10.5px] text-[#1E5E3A] font-semibold">Guji & Yirgacheffe Smallholder Cooperative</p>
                <p className="text-[9.5px] text-stone-500">Direct trade partnership since 2019</p>
              </div>
            </div>
            <p className="text-xs text-stone-700 leading-relaxed italic">
              “Working with Celin Coffee ensures fair prices and direct export access, guaranteeing that our high-altitude heirloom harvests are celebrated globally.”
            </p>

            <div className="pt-1 flex items-center gap-2.5">
              <button
                type="button"
                onClick={handleGoProducts}
                className="inline-flex items-center gap-1.5 bg-[#382319] hover:bg-[#26160F] text-white font-medium px-4 py-2 rounded-full text-[11px] shadow-xs transition-all cursor-pointer"
              >
                <span>Explore Harvest Lots</span>
                <ArrowRight size={13} />
              </button>
              <button
                type="button"
                onClick={handleGoContact}
                className="inline-flex items-center gap-1.5 bg-white hover:bg-[#FAFDFB] text-[#1E5E3A] border border-[#CDE5D1] font-semibold px-3.5 py-2 rounded-full text-[11px] transition-all cursor-pointer"
              >
                <span>Request Direct Pricing</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
