import { useState } from "react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Globe2, 
  ShieldCheck, 
  Star, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  Award, 
  Package, 
  Factory, 
  Truck, 
  FileSpreadsheet,
  Download
} from "lucide-react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import { featuredCoffees, exportSteps, importerTestimonials, exportFaqs, companyStats } from "../data";

// Asset imports
import farmImg from "../assets/coffee-farm.jpg";
import farmerImg from "../assets/farmer.jpg";
import dryingBedsImg from "../assets/drying-beds.jpg";
import cuppingLabImg from "../assets/cupping-lab.jpg";
import packagingImg from "../assets/celin-packaging.jpg";
import brewingPourImg from "../assets/brewing-pour.jpg";

export default function Home({ onNavigate, onSelectCoffee }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openFaq, setOpenFaq] = useState(0);

  const handleInquire = (coffeeName) => {
    if (onNavigate) {
      onNavigate("contact", coffeeName);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleGoCatalog = () => {
    if (onNavigate) {
      onNavigate("catalog");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Filter coffees for featured section
  const filteredFeatured = featuredCoffees.filter((coffee) => {
    if (selectedCategory === "All") return true;
    return coffee.process.toLowerCase() === selectedCategory.toLowerCase();
  });

  return (
    <main className="bg-[#FAF8F5]">
      {/* 1. Hero Section */}
      <Hero onNavigate={onNavigate} />

      {/* 2. Trust & Certification Bar */}
      <section className="bg-white border-y border-stone-200/70 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-stone-400 mb-6">
            Certified Ethiopian Arabica Trade & Compliance Standards
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-stone-50 border border-stone-100">
              <ShieldCheck size={26} className="text-[#0C6052] mb-1.5" />
              <span className="font-extrabold text-sm text-stone-900">ECTA Licensed</span>
              <span className="text-[11px] text-stone-500">Ethiopian Coffee & Tea Authority</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-stone-50 border border-stone-100">
              <Award size={26} className="text-[#0C6052] mb-1.5" />
              <span className="font-extrabold text-sm text-stone-900">SCA 86+ Q-Grade</span>
              <span className="text-[11px] text-stone-500">Verified Cupping Lab</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-stone-50 border border-stone-100">
              <Package size={26} className="text-[#0C6052] mb-1.5" />
              <span className="font-extrabold text-sm text-stone-900">GrainPro Certified</span>
              <span className="text-[11px] text-stone-500">Multi-Barrier Freshness</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-stone-50 border border-stone-100">
              <Globe2 size={26} className="text-[#0C6052] mb-1.5" />
              <span className="font-extrabold text-sm text-stone-900">Direct Port Freight</span>
              <span className="text-[11px] text-stone-500">FOB Djibouti / Air CIF</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Heritage & Story Section */}
      <section id="about" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Images Grid Showcase */}
          <div className="grid grid-cols-2 gap-4 relative">
            <div className="space-y-4">
              <div className="relative rounded-3xl overflow-hidden shadow-lg aspect-[4/5] bg-stone-900 group">
                <img
                  src={dryingBedsImg}
                  alt="Raised African drying beds in Sidama highlands"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-white text-xs font-bold">
                  Sun Drying on African Beds
                </span>
              </div>
              <div className="p-5 bg-[#0C6052] rounded-3xl text-white text-center shadow-md">
                <p className="text-3xl sm:text-4xl font-extrabold">100%</p>
                <p className="text-xs text-[#85E288] font-bold mt-1">Direct Cooperative Traceability</p>
              </div>
            </div>

            <div className="space-y-4 pt-6 sm:pt-10">
              <div className="p-5 bg-white border border-stone-200/90 rounded-3xl shadow-sm text-center">
                <p className="text-3xl sm:text-4xl font-extrabold text-stone-900">2,200m</p>
                <p className="text-xs text-stone-500 font-bold mt-1">Highland Canopy Elevation</p>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-lg aspect-[4/5] bg-stone-900 group">
                <img
                  src={cuppingLabImg}
                  alt="Accredited Q-Grader Cupping Laboratory session"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-white text-xs font-bold">
                  Licensed Q-Grader QC Lab
                </span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C6052]/10 text-[#0C6052] text-xs font-extrabold uppercase tracking-wider">
              <Sparkles size={14} className="text-[#3BAA3E]" />
              <span>The Birthplace of Arabica Coffee</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 leading-tight">
              Honoring Generational Soil, <br />
              <span className="text-[#0C6052]">Roasted for Global Roasters</span>
            </h2>

            <p className="text-stone-600 leading-relaxed text-base sm:text-lg">
              Ethiopia is not just one origin among many — it is the ancestral motherland of Arabica coffee. At <strong>Celin Coffee</strong>, our mission is to unite smallholder washing station cooperatives with international specialty roasters, cafe chains, and importers who demand peerless cup clarity and ethical direct-trade transparency.
            </p>

            <div className="space-y-3.5 pt-2 text-stone-700 text-sm sm:text-base text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-[#3BAA3E] shrink-0" />
                <span><strong>Single-Origin Traceability:</strong> Every lot is traced to specific Kebele and washing stations.</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-[#3BAA3E] shrink-0" />
                <span><strong>Rigorous Defect Control:</strong> Triple hand-sorted for uniform screen size and zero primary defects.</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-[#3BAA3E] shrink-0" />
                <span><strong>Moisture & Density Assured:</strong> Kept strictly between 10.2% - 11.2% in hermetic GrainPro liners.</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                type="button"
                onClick={handleGoCatalog}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0C6052] hover:bg-[#08483D] text-white font-bold px-7 py-3.5 rounded-full shadow-md transition-all hover:scale-105 cursor-pointer text-sm"
              >
                <span>View All 2026 Harvest Lots</span>
                <ArrowRight size={16} />
              </button>

              <button
                type="button"
                onClick={() => handleInquire("General Inquiry")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-stone-800 font-bold hover:text-[#0C6052] px-6 py-3.5 rounded-full border border-stone-300 hover:border-[#0C6052] bg-white transition-colors cursor-pointer text-sm"
              >
                <span>Inquire Trade Desk</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Signature Export Coffee Varieties (Interactive Filter) */}
      <section id="coffee" className="py-24 bg-white border-y border-stone-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div className="text-center md:text-left space-y-2">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#3BAA3E] bg-[#0C6052]/10 px-3.5 py-1 rounded-full">
                Single Origin Lots
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900">
                Specialty Ethiopian Export Varieties
              </h2>
              <p className="text-stone-600 text-sm sm:text-base max-w-xl">
                Profile roasted or green. Click any card to inspect full Q-grader cupping radar specs, screen size, and export terms.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 bg-stone-100 p-1.5 rounded-2xl">
              {["All", "Washed", "Natural", "Anaerobic"].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#0C6052] text-white shadow-sm"
                      : "text-stone-600 hover:text-stone-900"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFeatured.map((coffee) => (
              <ProductCard
                key={coffee.id || coffee.name}
                product={coffee}
                onInquire={handleInquire}
                onSelect={onSelectCoffee}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={handleGoCatalog}
              className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white text-sm font-bold px-8 py-4 rounded-full shadow-lg transition-all hover:scale-105 cursor-pointer"
            >
              <span>Explore Full Coffee Catalog with Search & Specs</span>
              <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </section>

      {/* 5. OEM Roasting & Custom Packaging Showcase */}
      <section className="py-24 bg-[#082822] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#85E288] bg-white/10 px-3.5 py-1 rounded-full">
                Private Label & OEM Solutions
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                Turnkey Roasted Packaging <br />
                <span className="text-[#85E288]">Tailored to Your Brand</span>
              </h2>

              <p className="text-stone-300 text-base leading-relaxed">
                Looking to launch your own Ethiopian specialty coffee line without the overhead of roastery logistics? We roast to your exact Agtron curve and pack fresh in multi-barrier degassing valve pouches with your custom branding.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left pt-2">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="font-bold text-white text-sm mb-1">Pouch Formats</h4>
                  <p className="text-xs text-stone-300">250g, 500g & 1kg matte foil pouches with one-way degassing valves and zipper reseal.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="font-bold text-white text-sm mb-1">Roast Profile Matching</h4>
                  <p className="text-xs text-stone-300">Light Nordic filter roast to rich Italian espresso curves calibrated on modern drum roasters.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="font-bold text-white text-sm mb-1">Bulk Green Liners</h4>
                  <p className="text-xs text-stone-300">60kg GrainPro-lined jute sacks and 30kg vacuum cartons for overseas roasting plants.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="font-bold text-white text-sm mb-1">Compliance & Barcodes</h4>
                  <p className="text-xs text-stone-300">Full nutritional labeling, EAN/UPC barcoding, and destination import compliance.</p>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => handleInquire("OEM Private Label Roasted")}
                  className="bg-[#3BAA3E] hover:bg-[#2e8a31] text-white font-extrabold px-8 py-3.5 rounded-full shadow-lg transition-all hover:scale-105 cursor-pointer text-sm inline-flex items-center gap-2"
                >
                  <Package size={17} />
                  <span>Request Private Label OEM Catalog</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative flex justify-center">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-[4/3] w-full max-w-lg bg-stone-900 group">
                <img
                  src={packagingImg}
                  alt="Celin Coffee roasted valve bag packaging"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 text-left">
                  <span className="text-[#85E288] text-xs font-bold uppercase tracking-wider">
                    Export Ready Foil
                  </span>
                  <p className="text-white font-bold text-lg">
                    Degassing Valve Foil Bags for Peak Aroma Preservation
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Export Process Flow */}
      <section id="export" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest font-extrabold text-[#0C6052] bg-[#0C6052]/10 px-3.5 py-1 rounded-full">
            Quality Assurance Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900">
            Our 4-Step Origin Export Process
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            From volcanic highland soil to your destination warehouse — certified, transparent, and prompt.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {exportSteps.map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-3xl p-7 border border-stone-200/80 shadow-xs hover:shadow-xl transition-all relative space-y-4 flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#0C6052]/10 flex items-center justify-center text-[#3BAA3E]">
                    {item.iconKey === "sparkles" && <Sparkles size={24} />}
                    {item.iconKey === "shield" && <ShieldCheck size={24} />}
                    {item.iconKey === "factory" && <Factory size={24} />}
                    {item.iconKey === "truck" && <Truck size={24} />}
                  </div>
                  <span className="text-2xl font-black text-stone-300">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100">
                <span className="text-[11px] font-extrabold text-[#0C6052] uppercase tracking-wider block">
                  ✓ {item.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Global Importers Testimonials Section */}
      <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#85E288] bg-white/10 px-3.5 py-1 rounded-full">
              Global Trust & Partners
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Endorsed by Specialty Importers
            </h2>
            <p className="text-stone-400 text-sm sm:text-base">
              See what commercial coffee buyers and independent roasters across 4 continents say about Celin Coffee quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {importerTestimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white/5 border border-white/10 rounded-3xl p-7 flex flex-col justify-between space-y-6 backdrop-blur-xs hover:border-[#3BAA3E]/50 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={15} className="fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xl">{t.flag}</span>
                  </div>
                  <p className="text-stone-200 text-xs sm:text-sm leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="font-bold text-white text-sm">{t.author}</p>
                  <p className="text-xs text-stone-400">{t.role}</p>
                  <p className="text-xs text-[#85E288] font-medium mt-0.5">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Frequently Asked Questions (Accordion) */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-14">
          <span className="text-xs uppercase tracking-widest font-extrabold text-[#0C6052] bg-[#0C6052]/10 px-3.5 py-1 rounded-full">
            Importer FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900">
            Frequently Asked Export Questions
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Everything you need to know about sample dispatch, Incoterms, container load volumes, and payment terms.
          </p>
        </div>

        <div className="space-y-4">
          {exportFaqs.map((faq, idx) => (
            <div
              key={faq.q}
              className="bg-white rounded-2xl border border-stone-200/80 shadow-xs overflow-hidden transition-all"
            >
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-stone-900 hover:text-[#0C6052] transition-colors cursor-pointer"
              >
                <span className="text-base sm:text-lg">{faq.q}</span>
                {openFaq === idx ? (
                  <ChevronUp size={20} className="text-[#0C6052] shrink-0" />
                ) : (
                  <ChevronDown size={20} className="text-stone-400 shrink-0" />
                )}
              </button>

              {openFaq === idx && (
                <div className="px-6 pb-6 pt-1 text-stone-600 text-sm sm:text-base leading-relaxed border-t border-stone-100">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 9. Direct Quote Call to Action Banner */}
      <section id="quote" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-br from-[#0C6052] via-[#08483D] to-[#06332B] text-white rounded-3xl p-8 sm:p-14 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-4 relative z-10">
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#85E288] bg-white/10 px-3.5 py-1 rounded-full">
              2026 Harvest Booking
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Ready to Secure Your Container or Sample Box?
            </h2>
            <p className="text-stone-200 text-base sm:text-lg leading-relaxed">
              Connect directly with our export trade desk in Addis Ababa. Request pre-shipment sample tins, full harvest cupping sheets, and competitive FOB Djibouti / CIF freight rates.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => handleInquire("General Container Booking")}
                className="w-full sm:w-auto bg-white text-[#0C6052] hover:bg-stone-100 font-extrabold px-9 py-4 rounded-full shadow-lg transition-all hover:scale-105 cursor-pointer text-sm sm:text-base"
              >
                Request Export Quote
              </button>
              <button
                type="button"
                onClick={handleGoCatalog}
                className="w-full sm:w-auto border border-white/40 text-white hover:bg-white/10 font-bold px-8 py-4 rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base"
              >
                <Globe2 size={18} />
                <span>Browse Full Catalog</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
