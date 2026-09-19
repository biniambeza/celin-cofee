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
  Play, 
  HeartHandshake, 
  FileCheck,
  Sparkles,
  Coffee,
  Quote
} from "lucide-react";
import Hero from "../components/Hero";

// Custom generated and project assets
import pouchYirgacheffe from "../assets/pouch-yirgacheffe.jpg";
import pouchSidamo from "../assets/pouch-sidamo.jpg";
import pouchHarar from "../assets/pouch-harar.jpg";
import pouchLimu from "../assets/pouch-limu.jpg";
import jebenaImg from "../assets/jebena-ceremony.jpg";
import farmImg from "../assets/coffee-farm.jpg";
import farmerImg from "../assets/farmer.jpg";

export default function Home({ onNavigate, onSelectCoffee }) {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

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

  const catalogLots = [
    {
      id: "yirgacheffe-premier",
      name: "Yirgacheffe Premier",
      region: "Ethiopia - Yirgacheffe",
      roast: "Light",
      flavorNotes: "Floral & Citrus",
      tastingNotesText: "Jasmine, Bergamot & Lemon Blossom",
      minOrder: "1 Tonne | USD 28.50/kg | Bulk Pricing",
      image: pouchYirgacheffe,
      bgColor: "bg-[#F7F3EB]",
      score: 88.5,
      process: "Washed",
      altitude: "1,950m - 2,200m",
      description: "Intensely floral with bergamot tea clarity, clean jasmine sweetness, and delicate citrus acidity."
    },
    {
      id: "sidamo-gold",
      name: "Sidamo Gold",
      region: "Ethiopia - Sidamo",
      roast: "Medium",
      flavorNotes: "Chocolatey & Berry",
      tastingNotesText: "Wild Blueberry, Cocoa & Honey",
      minOrder: "1 Tonne | USD 28.50/kg | Bulk Pricing",
      image: pouchSidamo,
      bgColor: "bg-[#F8EFE6]",
      score: 87.8,
      process: "Natural",
      altitude: "1,920m - 2,180m",
      description: "Sun-dried natural with lush blueberry sweetness, rich cocoa body, and a vibrant fruit-forward finish."
    },
    {
      id: "harar-sun-dried",
      name: "Harar Sun-Dried",
      region: "Ethiopia - Harar",
      roast: "Medium Dark",
      flavorNotes: "Spicy & Fruity",
      tastingNotesText: "Wild Berry, Cardamom & Dark Chocolate",
      minOrder: "1 Tonne | USD 22.00/kg | Bulk Pricing",
      image: pouchHarar,
      bgColor: "bg-[#F5ECE8]",
      score: 86.5,
      process: "Natural",
      altitude: "1,800m - 2,100m",
      description: "Historic ancient heirloom longberry. Complex dark berry, cardamon spice, and wine-like resonance."
    },
    {
      id: "limu-heirloom",
      name: "Limu Heirloom",
      region: "Ethiopia - Limu",
      roast: "Medium",
      flavorNotes: "Smooth & Nutty",
      tastingNotesText: "Apricot, Sweet Wine & Toffee",
      minOrder: "1 Tonne | USD 26.00/kg | Bulk Pricing",
      image: pouchLimu,
      bgColor: "bg-[#EBF2F0]",
      score: 87.2,
      process: "Washed",
      altitude: "1,750m - 2,000m",
      description: "Balanced highland cup with crisp stone fruit brightness, caramel sweetness, and silky mouthfeel."
    }
  ];

  return (
    <div className="bg-[#FAF8F5] text-stone-900 selection:bg-[#09bd3c] selection:text-white">
      {/* 1. Hero Section */}
      <Hero onNavigate={onNavigate} />

      {/* 2. OUR EXPORT CATALOG Section (Matching Reference Left Column) */}
      <section id="catalog" className="py-20 lg:py-24 relative overflow-hidden">
        {/* Subtle Ethiopian Ge'ez Script Watermark Background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.035] select-none overflow-hidden font-serif text-3xl leading-loose tracking-widest text-stone-900 break-words z-0 p-8">
          የኢትዮጵያ ቡና ጥራት ቅርስ ገበያ ኤክስፖርት ይርጋጨፌ ሲዳሞ ሀረር ሊሙ ጉጂ ጅማ ወለጋ አዲስ አበባ ቡና ፈላስፋ ገበሬዎች የቡና ባህል ጀበና መሶብ
          የኢትዮጵያ ቡና ጥራት ቅርስ ገበያ ኤክስፖርት ይርጋጨፌ ሲዳሞ ሀረር ሊሙ ጉጂ ጅማ ወለጋ አዲስ አበባ ቡና ፈላስፋ ገበሬዎች የቡና ባህል ጀበና መሶብ
          የኢትዮጵያ ቡና ጥራት ቅርስ ገበያ ኤክስፖርት ይርጋጨፌ ሲዳሞ ሀረር ሊሙ ጉጂ ጅማ ወለጋ አዲስ አበባ ቡና ፈላስፋ ገበሬዎች የቡና ባህል ጀበና መሶብ
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="space-y-1.5 mb-12 text-center lg:text-left">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#E06428] block">
              OUR EXPORT CATALOG
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight font-display">
              OUR EXPORT CATALOG
            </h2>
          </div>

          {/* 2x2 Grid of Product Cards directly matching reference image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {catalogLots.map((coffee) => (
              <div
                key={coffee.id}
                className="bg-white rounded-[2rem] p-6 sm:p-7 shadow-xl shadow-stone-200/60 border border-stone-200/80 flex flex-col sm:flex-row gap-6 hover:shadow-2xl hover:border-[#0C4533]/30 transition-all duration-300 group"
              >
                {/* Pouch Image Frame */}
                <div className={`w-full sm:w-48 h-56 sm:h-auto ${coffee.bgColor} rounded-2xl flex items-center justify-center p-3 relative overflow-hidden shrink-0 border border-stone-100 group-hover:scale-[1.02] transition-transform`}>
                  <img
                    src={coffee.image}
                    alt={coffee.name}
                    className="h-full max-h-52 w-auto object-contain drop-shadow-md"
                  />
                  <div className="absolute top-2 left-2 bg-[#0C4533] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    SCA {coffee.score}
                  </div>
                </div>

                {/* Card Specs and Actions */}
                <div className="flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-stone-900 group-hover:text-[#0C4533] transition-colors">
                      {coffee.name}
                    </h3>
                    <p className="text-xs font-semibold text-stone-500 mb-3">
                      {coffee.region}
                    </p>

                    {/* Specifications List */}
                    <div className="space-y-1.5 text-xs text-stone-700 bg-stone-50/80 p-3.5 rounded-xl border border-stone-100">
                      <p>
                        <span className="font-bold text-stone-900">Min. Order:</span> {coffee.minOrder}
                      </p>
                      <p>
                        <span className="font-bold text-stone-900">Roast:</span> {coffee.roast}
                      </p>
                      <p>
                        <span className="font-bold text-stone-900">Flavor Profile:</span> {coffee.flavorNotes}
                      </p>
                      <p className="text-stone-500 text-[11px] pt-0.5">
                        <span className="font-semibold text-stone-700">Notes:</span> {coffee.tastingNotesText}
                      </p>
                    </div>
                  </div>

                  {/* Buttons matching reference */}
                  <div className="flex items-center gap-3 pt-1">
                    <button
                      type="button"
                      onClick={() => handleInquire(coffee.name)}
                      className="flex-1 text-center bg-white hover:bg-stone-50 text-stone-800 font-bold py-2.5 px-4 rounded-full text-xs border border-stone-300 shadow-xs hover:border-[#0C4533] transition-all cursor-pointer"
                    >
                      Request Quote
                    </button>
                    <button
                      type="button"
                      onClick={() => onSelectCoffee && onSelectCoffee(coffee)}
                      className="text-center bg-[#0C4533] hover:bg-[#083526] text-white font-bold py-2.5 px-4 rounded-full text-xs shadow-xs transition-all hover:scale-105 cursor-pointer shrink-0"
                    >
                      View Specs
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Trust Pillars beneath catalog matching reference */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 pt-12 border-t border-stone-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0C4533]/10 text-[#0C4533] flex items-center justify-center shrink-0">
                <Search size={24} className="text-[#09bd3c]" />
              </div>
              <div>
                <h4 className="font-bold text-base text-stone-900 mb-1">
                  Traceability
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Source & wholesale providing transparent chain of custody from cooperative washing stations to export container seal.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0C4533]/10 text-[#0C4533] flex items-center justify-center shrink-0">
                <HeartHandshake size={24} className="text-[#E06428]" />
              </div>
              <div>
                <h4 className="font-bold text-base text-stone-900 mb-1">
                  Ethical Sourcing
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Quality control agreement ensuring direct ethical premiums, living wages for farming families, and transparent export billing.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. THE JOURNEY OF CELIN COFFEE: Authentic Ethiopian Traceability (Matching Right Column Top) */}
      <section id="journey" className="py-20 lg:py-24 bg-white border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-1.5">
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#E06428] block">
                  THE JOURNEY OF CELIN COFFEE
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-[1.15] font-display">
                  From Sourcing to Shipping: <br />
                  <span className="text-[#0C4533]">Authentic Ethiopian Traceability.</span>
                </h2>
              </div>

              {/* 4 Process Pillars with circular icon badges matching reference */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-100 space-y-2 hover:border-[#0C4533]/30 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-[#0C4533] text-white flex items-center justify-center shadow-md">
                    <FileCheck size={20} className="text-[#85E288]" />
                  </div>
                  <h4 className="font-bold text-sm text-stone-900">Traceability</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    Traceability, licensed farm origin, and legal export certification.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-100 space-y-2 hover:border-[#0C4533]/30 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-[#E06428] text-white flex items-center justify-center shadow-md">
                    <HeartHandshake size={20} className="text-white" />
                  </div>
                  <h4 className="font-bold text-sm text-stone-900">Ethical Sourcing</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    Ensure sustained ethical sourcing initiatives and fair farmer payouts.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-100 space-y-2 hover:border-[#0C4533]/30 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-[#0C4533] text-white flex items-center justify-center shadow-md">
                    <Award size={20} className="text-[#85E288]" />
                  </div>
                  <h4 className="font-bold text-sm text-stone-900">Quality Control</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    Physical defect sorting, moisture test, and certified cupping lab protocols.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-100 space-y-2 hover:border-[#0C4533]/30 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-stone-900 text-white flex items-center justify-center shadow-md">
                    <Package size={20} className="text-[#85E288]" />
                  </div>
                  <h4 className="font-bold text-sm text-stone-900">Standard Packaging</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    Custom degassing valve barrier pouches and GrainPro jute sacks.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Jebena & Cultural Buna Badge Accent */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-stone-100 max-w-sm group">
                <img
                  src={jebenaImg}
                  alt="Authentic Ethiopian traditional Jebena clay coffee pot and Mesob basket"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-[#E06428] px-2.5 py-0.5 rounded-full mb-1 inline-block">
                    Heritage & Culture
                  </span>
                  <p className="text-sm font-bold">
                    Generational Jebena Buna Tradition
                  </p>
                  <p className="text-xs text-stone-300">
                    Hand-roasted with ceremony and respect since the 9th century.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. SOURCING STORIES & Discover Our Farms (Matching Right Column Middle) */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Testimonial & Narrative */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#E06428]">
              SOURCING STORIES
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 leading-tight font-display">
              Empowering Communities <br />
              through Trade.
            </h2>

            {/* Farmer Quote Card directly matching reference */}
            <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm space-y-4 text-left">
              <div className="flex items-center gap-3">
                <img
                  src={farmerImg}
                  alt="Ethiopian Coffee Farmer Partner"
                  className="w-13 h-13 rounded-full object-cover border-2 border-[#0C4533]"
                />
                <div>
                  <h4 className="font-bold text-sm text-stone-900">Nuredin</h4>
                  <p className="text-xs text-stone-500">Guji Farming Partner & Cooperative Elder</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed italic">
                “Partnering with Celin Coffee has empowered local farmers, expanding our community through direct fair-trade coffee partnerships and sustainable washing station investments.”
              </p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleGoCatalog}
                className="inline-flex items-center gap-2 bg-[#0C4533] hover:bg-[#083526] text-white font-bold px-7 py-3 rounded-full text-xs sm:text-sm shadow-md transition-all hover:scale-105 cursor-pointer"
              >
                <span>Learn More About Our Farms</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Right: Sourcing Visual Gallery */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Image 1: Highland Plantation */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg h-72 group">
              <img
                src={farmImg}
                alt="Ethiopian highland coffee farm landscape"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-bold">
                Highland Agroforestry Shade Canopy (2,000m+)
              </div>
            </div>

            {/* Image 2: "Discover Our Farms" Video Card matching reference */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg h-72 group">
              <img
                src={jebenaImg}
                alt="Discover Our Farms video preview"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/45 group-hover:bg-black/35 transition-colors flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/90 text-[#0C4533] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Play size={24} className="fill-[#0C4533] ml-1" />
                </div>
              </div>

              {/* Tag pill matching reference */}
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-[#0C4533] text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                Experience Jebena Buna Culture
              </div>

              <div className="absolute bottom-3 left-3 text-white">
                <p className="text-base font-bold">Discover Our Farms</p>
                <p className="text-xs text-stone-200">Watch the seed to export journey</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. GLOBAL PARTNERSHIPS & TESTIMONIALS (Matching Right Column Bottom) */}
      <section className="py-20 lg:py-24 bg-white border-t border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#E06428]">
              GLOBAL PARTNERSHIPS & TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-display">
              Trusted by Roasters Worldwide.
            </h2>
          </div>

          {/* Specialty Roasters Logos Strip matching reference */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-80 py-4 border-y border-stone-100">
            <span className="font-extrabold tracking-widest text-xs sm:text-sm text-stone-800 uppercase">
              ROASTWORKS LONDON
            </span>
            <span className="text-stone-300">•</span>
            <span className="font-extrabold tracking-widest text-xs sm:text-sm text-stone-800 uppercase">
              CAFE BERLIN
            </span>
            <span className="text-stone-300">•</span>
            <span className="font-extrabold tracking-widest text-xs sm:text-sm text-stone-800 uppercase">
              MELBOURNE SPECIALTY
            </span>
            <span className="text-stone-300">•</span>
            <span className="font-extrabold tracking-widest text-xs sm:text-sm text-stone-800 uppercase">
              TOKYO COFFEE CO.
            </span>
            <span className="text-stone-300">•</span>
            <span className="font-extrabold tracking-widest text-xs sm:text-sm text-stone-800 uppercase">
              AMSTERDAM ROASTERS
            </span>
          </div>

          {/* Testimonial Quote Card matching reference */}
          <div className="max-w-3xl mx-auto bg-[#FAF8F5] p-8 sm:p-10 rounded-3xl border border-stone-200 shadow-sm relative text-center sm:text-left flex flex-col sm:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-[#0C4533]/10 flex items-center justify-center shrink-0">
              <Quote size={28} className="text-[#0C4533]" />
            </div>

            <div className="space-y-3 flex-1">
              <p className="text-base sm:text-lg text-stone-800 font-medium italic leading-relaxed">
                “Celin Coffee consistently delivers excellent beans, rigorous grading consistency, and reliable export shipment support.”
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0C4533] text-white flex items-center justify-center font-bold text-xs">
                  SJ
                </div>
                <div>
                  <p className="font-bold text-sm text-stone-900">Sarah Jenkins</p>
                  <p className="text-xs text-stone-500">Roastery Owner, Sydney, AU</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
