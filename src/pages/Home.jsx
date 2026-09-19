import { ArrowRight, Sparkles, BookOpen, Coffee, Send } from "lucide-react";
import Hero from "../components/Hero";

export default function Home({ onNavigate }) {
  return (
    <div className="bg-[#FAF8F5] text-stone-900 selection:bg-[#255D3A] selection:text-white min-h-[calc(100vh-60px)]">
      {/* 1. Hero Component with Trust Pillars */}
      <Hero onNavigate={onNavigate} />

      {/* 2. Quick Discovery Gateway for Home */}
      <section className="py-8 sm:py-10 bg-white border-t border-[#DCEBDD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-6 space-y-1">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#255D3A] uppercase">
              ETHIOPIAN EXPORT DESK
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C2621]">
              Explore Celin Coffee
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {/* Card 1: Our Story */}
            <button
              type="button"
              onClick={() => onNavigate && onNavigate("story")}
              className="bg-[#FAFDFB] p-5 rounded-2xl border border-[#DCEBDD] text-left hover:border-[#255D3A]/50 hover:shadow-lg transition-all group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-[#EBF6EE] text-[#255D3A] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <BookOpen size={18} />
              </div>
              <h3 className="font-serif font-bold text-base text-[#1C2621] group-hover:text-[#255D3A] transition-colors flex items-center justify-between">
                <span>Habesha Heritage</span>
                <ArrowRight size={14} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#255D3A]" />
              </h3>
              <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                Discover the 1,100-year living tradition of the Jebena Buna ceremony and ancient wild Kaffa origins.
              </p>
            </button>

            {/* Card 2: Products */}
            <button
              type="button"
              onClick={() => onNavigate && onNavigate("products")}
              className="bg-[#FAFDFB] p-5 rounded-2xl border border-[#DCEBDD] text-left hover:border-[#255D3A]/50 hover:shadow-lg transition-all group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-[#EBF6EE] text-[#255D3A] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Coffee size={18} />
              </div>
              <h3 className="font-serif font-bold text-base text-[#1C2621] group-hover:text-[#255D3A] transition-colors flex items-center justify-between">
                <span>Specialty Micro-Lots</span>
                <ArrowRight size={14} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#255D3A]" />
              </h3>
              <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                Grade 1 Yirgacheffe, Sidamo, Harar & Limu single-origin harvest lots with full cup profiles and SCA scores.
              </p>
            </button>

            {/* Card 3: Contact */}
            <button
              type="button"
              onClick={() => onNavigate && onNavigate("contact")}
              className="bg-[#FAFDFB] p-5 rounded-2xl border border-[#DCEBDD] text-left hover:border-[#255D3A]/50 hover:shadow-lg transition-all group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-[#EBF6EE] text-[#255D3A] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Send size={18} />
              </div>
              <h3 className="font-serif font-bold text-base text-[#1C2621] group-hover:text-[#255D3A] transition-colors flex items-center justify-between">
                <span>Direct Origin Quotes</span>
                <ArrowRight size={14} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#255D3A]" />
              </h3>
              <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                Request official green coffee cupping sample tins or book full container FOB Djibouti allocations.
              </p>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
