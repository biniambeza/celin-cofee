import { useState } from "react";
import { ArrowRight, Award, Sparkles, Filter, CheckCircle2 } from "lucide-react";

import pouchYirgacheffe from "../assets/pouch-yirgacheffe.jpg";
import pouchSidamo from "../assets/pouch-sidamo.jpg";
import pouchHarar from "../assets/pouch-harar.jpg";
import pouchLimu from "../assets/pouch-limu.jpg";

export const productsList = [
  {
    id: "yirgacheffe-premier",
    name: "Yirgacheffe Premier",
    region: "Gedeo Zone, Yirgacheffe",
    altitude: "1,950m - 2,200m",
    process: "Washed",
    roast: "Light",
    score: 88.5,
    flavorNotes: ["Jasmine", "Bergamot", "Lemon Blossom"],
    image: pouchYirgacheffe,
    bgColor: "bg-[#F7F3EB]",
    minOrder: "1 Tonne / USD 28.50/kg",
    description: "Intensely floral with bergamot tea clarity, clean jasmine sweetness, and delicate citrus acidity."
  },
  {
    id: "sidamo-gold",
    name: "Sidamo Gold",
    region: "Bensa Highland, Sidama",
    altitude: "1,920m - 2,180m",
    process: "Natural",
    roast: "Medium",
    score: 87.8,
    flavorNotes: ["Wild Blueberry", "Honey", "Cacao Nibs"],
    image: pouchSidamo,
    bgColor: "bg-[#F8EFE6]",
    minOrder: "1 Tonne / USD 28.50/kg",
    description: "Sun-dried natural with lush blueberry sweetness, rich cocoa body, and a vibrant fruit-forward finish."
  },
  {
    id: "harar-sun-dried",
    name: "Harar Sun-Dried",
    region: "Eastern Highlands, Harar",
    altitude: "1,800m - 2,100m",
    process: "Natural",
    roast: "Medium Dark",
    score: 86.5,
    flavorNotes: ["Blackberry", "Cardamom", "Dark Chocolate"],
    image: pouchHarar,
    bgColor: "bg-[#F5ECE8]",
    minOrder: "1 Tonne / USD 22.00/kg",
    description: "Historic ancient heirloom longberry with wild berry notes, cardamom spice, and rich wine-like resonance."
  },
  {
    id: "limu-heirloom",
    name: "Limu Heirloom",
    region: "Cloud Forests, Limu",
    altitude: "1,750m - 2,000m",
    process: "Washed",
    roast: "Medium",
    score: 87.2,
    flavorNotes: ["Sweet Apricot", "Toffee", "Citrus Brightness"],
    image: pouchLimu,
    bgColor: "bg-[#EBF2F0]",
    minOrder: "1 Tonne / USD 26.00/kg",
    description: "Balanced highland cup with crisp stone fruit brightness, caramel sweetness, and a silky clean mouthfeel."
  }
];

export default function ProductsSection({ onNavigate, onSelectCoffee }) {
  const [filter, setFilter] = useState("All");

  const filteredProducts = filter === "All"
    ? productsList
    : productsList.filter((p) => p.process.toLowerCase() === filter.toLowerCase());

  const handleInquire = (coffeeName) => {
    if (onNavigate) {
      onNavigate("contact", coffeeName);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section id="products" className="py-16 sm:py-20 bg-white border-b border-[#DCEBDD] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Shortened Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="space-y-2 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C2621] tracking-tight">
              Single Origin Harvests.
            </h2>
            <p className="text-stone-600 text-sm sm:text-base max-w-xl">
              Certified Grade-1 Ethiopian Arabica beans, hand-sorted and profile-packaged for international roasters.
            </p>
          </div>

          {/* Clean Process Filter Tabs */}
          <div className="flex items-center gap-2 bg-[#F4F9F5] p-1.5 rounded-full border border-[#D5EAD9] self-start md:self-auto shrink-0">
            {["All", "Washed", "Natural"].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setFilter(tab)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer border-none ${filter === tab
                  ? "bg-[#255D3A] text-white shadow-xs"
                  : "bg-transparent text-stone-600 hover:text-[#1C2621]"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Shortened Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((coffee) => (
            <div
              key={coffee.id}
              className="bg-[#FAFDFB] rounded-3xl p-5 border border-[#DCEBDD] shadow-xs hover:shadow-xl hover:border-[#255D3A]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Pouch Showcase Frame */}
              <div className={`w-full h-52 ${coffee.bgColor} rounded-2xl flex items-center justify-center p-3 relative overflow-hidden shrink-0 border border-stone-100 group-hover:scale-[1.02] transition-transform`}>
                <img
                  src={coffee.image}
                  alt={coffee.name}
                  className="h-full max-h-48 w-auto object-contain drop-shadow-md"
                />

                {/* SCA Score Badge */}
                <div className="absolute top-2.5 left-2.5 bg-[#1C2621] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-xs flex items-center gap-1">
                  <Award size={11} className="text-[#88E298]" />
                  <span>SCA {coffee.score}</span>
                </div>

                {/* Process Pill */}
                <div className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-xs text-[#255D3A] text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full shadow-2xs">
                  {coffee.process}
                </div>
              </div>

              {/* Information */}
              <div className="pt-4 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#1C2621] group-hover:text-[#255D3A] transition-colors leading-snug">
                    {coffee.name}
                  </h3>
                  <p className="text-[11px] font-semibold text-stone-500 mt-0.5">
                    {coffee.region} • {coffee.altitude}
                  </p>

                  {/* Flavor Notes Pills */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {coffee.flavorNotes.map((note) => (
                      <span
                        key={note}
                        className="text-[10px] font-medium bg-white px-2 py-0.5 rounded-md border border-[#DCEBDD] text-stone-700"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-3 border-t border-[#E8F3EA] flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleInquire(coffee.name)}
                    className="flex-1 text-center bg-[#382319] hover:bg-[#26160F] text-white font-medium py-2 px-3 rounded-full text-xs shadow-xs transition-all cursor-pointer"
                  >
                    Request Quote
                  </button>
                  <button
                    type="button"
                    onClick={() => onSelectCoffee && onSelectCoffee(coffee)}
                    className="text-center bg-white hover:bg-[#F0F8F2] text-[#255D3A] font-semibold py-2 px-3 rounded-full text-xs border border-[#CDE5D1] transition-all cursor-pointer shrink-0"
                  >
                    Specs
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>



      </div>
    </section>
  );
}
