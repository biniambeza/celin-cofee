import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  ShieldCheck,
  Award,
  Package,
  Truck,
  Search,
  HeartHandshake,
  FileCheck,
  Sparkles,
  Coffee,
  Quote,
  Flame,
  Check,
  Building2,
  Users,
  Layers,
  MapPin,
  Clock,
  Send,
  Star
} from "lucide-react";
import Hero from "../components/Hero";
import OurStorySection from "../components/OurStorySection";
import ProductsSection from "../components/ProductsSection";
import ContactSection from "../components/ContactSection";

// Authentic photographic assets
import jebenaImg from "../assets/jebena-ceremony.jpg";
import farmImg from "../assets/coffee-farm.jpg";
import farmerImg from "../assets/farmer.jpg";
import cuppingLabImg from "../assets/cupping-lab.jpg";
import dryingBedsImg from "../assets/drying-beds.jpg";
import packagingImg from "../assets/celin-packaging.jpg";
import storyCeremonyImg from "../assets/habesha-story-ceremony.jpg";

export default function Home({ onNavigate, onSelectCoffee, preselectedCoffee }) {
  const handleInquire = (coffeeName) => {
    if (onNavigate) {
      onNavigate("contact", coffeeName);
    } else {
      const el = document.querySelector("#contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleGoProducts = () => {
    const el = document.querySelector("#products");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else if (onNavigate) {
      onNavigate("home", null, "#products");
    }
  };

  const handleGoContact = () => {
    const el = document.querySelector("#contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else if (onNavigate) {
      onNavigate("home", null, "#contact");
    }
  };

  return (
    <div className="bg-[#FAF8F5] text-stone-900 selection:bg-[#255D3A] selection:text-white">
      {/* 1. Hero Section */}
      <Hero onNavigate={onNavigate} />

      {/* 2. OUR STORY (Habesha Coffee Heritage & Living Buna Ceremony) */}
      <OurStorySection onNavigate={onNavigate} />

      {/* 3. PRODUCTS SECTION (Shortened, Compact Component) */}
      <ProductsSection onNavigate={onNavigate} onSelectCoffee={onSelectCoffee} />

      {/* 4. ABOUT CELIN COFFEE: Company Profile & Key Milestones */}
      <section id="about" className="py-20 lg:py-24 bg-white border-b border-[#DCEBDD] relative overflow-hidden">
        {/* Subtle background brand gradient circle */}
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-[#EBF6EE]/70 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Header */}
          <div className="max-w-3xl mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C2621] tracking-tight leading-[1.12]">
              Rooted in Ethiopian Highlands, <br />
              <span className="text-[#1E5E3A] italic font-normal">
                Exported with Absolute Precision.
              </span>
            </h2>
            <p className="text-stone-600 text-sm sm:text-base lg:text-lg leading-relaxed pt-1">
              Celin Coffee is an Ethiopian specialty green and roasted coffee exporter headquartered in Addis Ababa. We combine generations of highland agricultural wisdom with certified laboratory cupping to supply the world's most reputable specialty roasters.
            </p>
          </div>

          {/* 4 Company Metric Highlights */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
            <div className="bg-[#FAFDFB] p-5 sm:p-6 rounded-3xl border border-[#DCEBDD] space-y-2 hover:border-[#1E5E3A]/40 transition-all hover:-translate-y-1 duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#EBF6EE] text-[#1E5E3A] flex items-center justify-center font-bold">
                <Users size={20} />
              </div>
              <p className="text-2xl sm:text-3xl font-serif font-bold text-[#1C2621]">1,200+</p>
              <p className="text-xs font-bold uppercase tracking-wider text-[#1E5E3A]">Smallholder Families</p>
              <p className="text-[11px] text-stone-500 leading-snug">
                Direct farm-gate pricing with sustained seasonal community bonuses.
              </p>
            </div>

            <div className="bg-[#FAFDFB] p-5 sm:p-6 rounded-3xl border border-[#DCEBDD] space-y-2 hover:border-[#1E5E3A]/40 transition-all hover:-translate-y-1 duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#EBF6EE] text-[#1E5E3A] flex items-center justify-center font-bold">
                <Award size={20} />
              </div>
              <p className="text-2xl sm:text-3xl font-serif font-bold text-[#1C2621]">86 – 89.5</p>
              <p className="text-xs font-bold uppercase tracking-wider text-[#1E5E3A]">SCA Cup Scores</p>
              <p className="text-[11px] text-stone-500 leading-snug">
                Certified Grade-1 & Grade-2 single origin washed and natural micro-lots.
              </p>
            </div>

            <div className="bg-[#FAFDFB] p-5 sm:p-6 rounded-3xl border border-[#DCEBDD] space-y-2 hover:border-[#1E5E3A]/40 transition-all hover:-translate-y-1 duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#EBF6EE] text-[#1E5E3A] flex items-center justify-center font-bold">
                <Layers size={20} />
              </div>
              <p className="text-2xl sm:text-3xl font-serif font-bold text-[#1C2621]">100%</p>
              <p className="text-xs font-bold uppercase tracking-wider text-[#1E5E3A]">Origin Traceability</p>
              <p className="text-[11px] text-stone-500 leading-snug">
                Verified chain of custody from specific woreda washing stations.
              </p>
            </div>

            <div className="bg-[#FAFDFB] p-5 sm:p-6 rounded-3xl border border-[#DCEBDD] space-y-2 hover:border-[#1E5E3A]/40 transition-all hover:-translate-y-1 duration-300">
              <div className="w-10 h-10 rounded-2xl bg-[#EBF6EE] text-[#1E5E3A] flex items-center justify-center font-bold">
                <Globe size={20} />
              </div>
              <p className="text-2xl sm:text-3xl font-serif font-bold text-[#1C2621]">14+</p>
              <p className="text-xs font-bold uppercase tracking-wider text-[#1E5E3A]">Export Markets</p>
              <p className="text-[11px] text-stone-500 leading-snug">
                Full containers FOB Djibouti & express 48h air sample tins worldwide.
              </p>
            </div>
          </div>

          {/* Dual Visual Showcase: Lab Cupping + Highland Farm */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left Image: Cupping Lab */}
            <div className="lg:col-span-6 relative group">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-[#FAF8F5] h-72 sm:h-80 relative">
                <img
                  src={cuppingLabImg}
                  alt="Certified Q-graders testing Ethiopian coffee in Celin Coffee cupping lab"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold uppercase bg-[#1E5E3A] text-white px-2.5 py-0.5 rounded-full mb-1 inline-block">
                    Addis Ababa Lab
                  </span>
                  <p className="text-sm font-bold">Certified Q-Grader Cupping & Roast Profiling</p>
                  <p className="text-xs text-stone-300">Evaluating aroma, clean cup clarity, sweetness, and acidity balance.</p>
                </div>
              </div>
            </div>

            {/* Right Image: Origin Farm */}
            <div className="lg:col-span-6 relative group">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-[#FAF8F5] h-72 sm:h-80 relative">
                <img
                  src={farmImg}
                  alt="Shade-grown Ethiopian coffee agroforestry at 2,000m altitude"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold uppercase bg-[#382319] text-white px-2.5 py-0.5 rounded-full mb-1 inline-block">
                    Highland Origin
                  </span>
                  <p className="text-sm font-bold">Highland Agroforestry Shade Canopy (2,000m+)</p>
                  <p className="text-xs text-stone-300">Cherries ripen slowly under wild indigenous canopy, concentrating sugars.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. SEED-TO-CUP QUALITY & EXPORT PROCESS (Rich Photographic Steps) */}
      <section id="journey" className="py-20 lg:py-24 bg-[#FAF8F5] border-b border-[#DCEBDD] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2.5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C2621] tracking-tight">
              From Highland Soil to Container Seal.
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              Every coffee shipment undergoes strict four-stage monitoring to guarantee moisture stability, zero defects, and distinct flavor expression.
            </p>
          </div>

          {/* 4 Process Photo Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Step 1 */}
            <div className="bg-white rounded-3xl p-4 sm:p-5 border border-[#DCEBDD] shadow-xs hover:shadow-xl hover:border-[#1E5E3A]/40 transition-all duration-300 flex flex-col group">
              <div className="h-44 rounded-2xl overflow-hidden relative mb-4">
                <img
                  src={farmImg}
                  alt="Selective handpicking in Ethiopian highlands"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-[#1C2621]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  STEP 01
                </div>
              </div>
              <h3 className="font-serif font-bold text-base text-[#1C2621] mb-1 group-hover:text-[#1E5E3A] transition-colors">
                Selective Handpicking
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed flex-1">
                Hand-harvested at 1,800m–2,200m in mineral-rich volcanic soil. Only deep-crimson, fully ripe cherries are selected.
              </p>
              <div className="mt-3 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] font-semibold text-[#1E5E3A]">
                <span>Brix Score: 21-24%</span>
                <CheckCircle2 size={13} />
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-3xl p-4 sm:p-5 border border-[#DCEBDD] shadow-xs hover:shadow-xl hover:border-[#1E5E3A]/40 transition-all duration-300 flex flex-col group">
              <div className="h-44 rounded-2xl overflow-hidden relative mb-4">
                <img
                  src={dryingBedsImg}
                  alt="Sun drying on African raised beds"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-[#1C2621]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  STEP 02
                </div>
              </div>
              <h3 className="font-serif font-bold text-base text-[#1C2621] mb-1 group-hover:text-[#1E5E3A] transition-colors">
                Raised Bed Drying
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed flex-1">
                Sun-cured on African mesh beds with manual rotation every two hours for even drying and balanced moisture equilibrium.
              </p>
              <div className="mt-3 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] font-semibold text-[#1E5E3A]">
                <span>Moisture Target: 10.5–11.2%</span>
                <CheckCircle2 size={13} />
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-3xl p-4 sm:p-5 border border-[#DCEBDD] shadow-xs hover:shadow-xl hover:border-[#1E5E3A]/40 transition-all duration-300 flex flex-col group">
              <div className="h-44 rounded-2xl overflow-hidden relative mb-4">
                <img
                  src={cuppingLabImg}
                  alt="Certified Q-grading and lab cupping"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-[#1C2621]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  STEP 03
                </div>
              </div>
              <h3 className="font-serif font-bold text-base text-[#1C2621] mb-1 group-hover:text-[#1E5E3A] transition-colors">
                Certified Lab Cupping
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed flex-1">
                Triple-blind cupping sessions by licensed Q-graders in Addis Ababa, validating cup cleanliness, acidity profile, and sweetness.
              </p>
              <div className="mt-3 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] font-semibold text-[#1E5E3A]">
                <span>SCA Standard Protocol</span>
                <CheckCircle2 size={13} />
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-3xl p-4 sm:p-5 border border-[#DCEBDD] shadow-xs hover:shadow-xl hover:border-[#1E5E3A]/40 transition-all duration-300 flex flex-col group">
              <div className="h-44 rounded-2xl overflow-hidden relative mb-4">
                <img
                  src={packagingImg}
                  alt="GrainPro hermetic bags and custom valve packaging"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-[#1C2621]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  STEP 04
                </div>
              </div>
              <h3 className="font-serif font-bold text-base text-[#1C2621] mb-1 group-hover:text-[#1E5E3A] transition-colors">
                GrainPro Packaging
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed flex-1">
                Sealed in multi-layer GrainPro liners inside jute export sacks or one-way degassing retail pouches for sea and air freight.
              </p>
              <div className="mt-3 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] font-semibold text-[#1E5E3A]">
                <span>FOB Port of Djibouti</span>
                <CheckCircle2 size={13} />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. SOURCING STORIES & COMMUNITY IMPACT */}
      <section id="impact" className="py-20 lg:py-24 bg-white border-b border-[#DCEBDD] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column: Farmer Partnership Narrative */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C2621] tracking-tight leading-tight">
                Empowering Communities, <br />
                <span className="text-[#1E5E3A] italic font-normal">
                  Honoring the Hands Behind Buna.
                </span>
              </h2>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Coffee is the lifeblood of millions of Ethiopian farming families. Celin Coffee operates on direct trade ethics: paying premium prices above local auction rates, financing clean water infrastructure, and providing post-harvest agronomy training.
              </p>

              {/* Farmer Quote Card */}
              <div className="bg-[#FAFDFB] p-6 rounded-3xl border border-[#DCEBDD] space-y-4">
                <div className="flex items-center gap-3.5">
                  <img
                    src={farmerImg}
                    alt="Ethiopian Coffee Farmer Partner"
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#1E5E3A] shadow-xs"
                  />
                  <div>
                    <h4 className="font-bold text-sm text-[#1C2621]">Ato Nuredin</h4>
                    <p className="text-xs text-[#1E5E3A] font-semibold">Guji Highland Farming Partner</p>
                    <p className="text-[11px] text-stone-500">Partnered with Celin Coffee since 2019</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                  “Working directly with Celin Coffee gives our cooperative reliable pricing, transparent weight receipts, and pre-harvest financing. We take pride knowing our Guji beans reach roasters across the globe.”
                </p>
              </div>

              {/* CTA Action */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={handleGoProducts}
                  className="inline-flex items-center gap-2 bg-[#382319] hover:bg-[#26160F] text-white font-medium px-6 py-3 rounded-full text-xs sm:text-sm shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <span>Explore Harvest Lots</span>
                  <ArrowRight size={15} />
                </button>
                <button
                  type="button"
                  onClick={handleGoContact}
                  className="inline-flex items-center gap-2 bg-white hover:bg-[#FAFDFB] text-[#1E5E3A] border border-[#CDE5D1] font-semibold px-5 py-3 rounded-full text-xs sm:text-sm transition-all cursor-pointer"
                >
                  <span>Request Direct Pricing</span>
                </button>
              </div>

            </div>

            {/* Right Column: Buna Tradition Visual Collage */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FAF8F5] group">
                <img
                  src={storyCeremonyImg}
                  alt="Traditional Habesha Buna ceremony and coffee heritage"
                  className="w-full h-[400px] sm:h-[460px] object-cover group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#1E5E3A] px-2.5 py-0.5 rounded-full mb-1 inline-block">
                    Living Heritage
                  </span>
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-white">
                    Ethiopia: The Ancient Birthplace of Coffea Arabica
                  </h3>
                  <p className="text-xs text-stone-300">
                    Thousands of indigenous heirloom varieties grow wild nowhere else on Earth.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. GLOBAL ROASTERS & TESTIMONIALS */}
      <section id="partners" className="py-20 lg:py-24 bg-[#FAF8F5] border-b border-[#DCEBDD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center max-w-2xl mx-auto space-y-2.5">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C2621] tracking-tight">
              Trusted by Specialty Roasters Worldwide.
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm">
              From boutique micro-roasters to commercial importers, here is how our origin partners cup Celin Coffee lots.
            </p>
          </div>

          {/* Specialty Roasters Logos Strip */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 py-3 border-y border-[#DCEBDD] text-xs font-bold tracking-widest text-[#2C3830] uppercase">
            <span>ROASTWORKS LONDON</span>
            <span className="text-[#A2B8A6]">•</span>
            <span>CAFE BERLIN</span>
            <span className="text-[#A2B8A6]">•</span>
            <span>MELBOURNE SPECIALTY</span>
            <span className="text-[#A2B8A6]">•</span>
            <span>TOKYO ARTISAN ROASTERS</span>
            <span className="text-[#A2B8A6]">•</span>
            <span>AMSTERDAM COFFEE LAB</span>
          </div>

          {/* 3 Review Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Card 1 */}
            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#DCEBDD] shadow-xs space-y-4 flex flex-col justify-between hover:shadow-lg hover:border-[#1E5E3A]/40 transition-all">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-stone-700 italic leading-relaxed">
                  “Celin Coffee's Yirgacheffe Premier consistently cupped at 88.5 with unmatched bergamot and jasmine clarity. Their export documentation and moisture management are immaculate.”
                </p>
              </div>
              <div className="pt-3 border-t border-stone-100 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#1E5E3A] text-white flex items-center justify-center font-bold text-xs">
                  SJ
                </div>
                <div>
                  <p className="font-bold text-xs text-[#1C2621]">Sarah Jenkins</p>
                  <p className="text-[11px] text-stone-500">Head Roaster, Sydney, AU</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#DCEBDD] shadow-xs space-y-4 flex flex-col justify-between hover:shadow-lg hover:border-[#1E5E3A]/40 transition-all">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-stone-700 italic leading-relaxed">
                  “The Sidamo Gold natural was the fastest selling single-origin on our winter menu. Pure blueberry sweetness and heavy chocolate body. An authentic direct-trade partnership.”
                </p>
              </div>
              <div className="pt-3 border-t border-stone-100 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#382319] text-white flex items-center justify-center font-bold text-xs">
                  MK
                </div>
                <div>
                  <p className="font-bold text-xs text-[#1C2621]">Marcus Klein</p>
                  <p className="text-[11px] text-stone-500">Green Buyer, Berlin, DE</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#DCEBDD] shadow-xs space-y-4 flex flex-col justify-between hover:shadow-lg hover:border-[#1E5E3A]/40 transition-all">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-stone-700 italic leading-relaxed">
                  “Reliable container shipment via Djibouti Port, pre-shipment sample accuracy, and responsive communication directly from their Addis Ababa trade desk.”
                </p>
              </div>
              <div className="pt-3 border-t border-stone-100 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#1E5E3A] text-white flex items-center justify-center font-bold text-xs">
                  KT
                </div>
                <div>
                  <p className="font-bold text-xs text-[#1C2621]">Kenji Takahashi</p>
                  <p className="text-[11px] text-stone-500">Specialty Importer, Tokyo, JP</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. CONTACT & EXPORT TRADE DESK (Shortened, Attractive Component) */}
      <ContactSection preselectedCoffee={preselectedCoffee} />
    </div>
  );
}
