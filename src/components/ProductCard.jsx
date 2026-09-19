import { Award, Flame, MapPin, ArrowUpRight, Eye } from "lucide-react";

export default function ProductCard({ product, onInquire, onSelect }) {
  const {
    id,
    name = "Yirgacheffe Grade 1 Washed",
    region = "Gedeo Zone, Yirgacheffe",
    altitude = "1,950m - 2,200m",
    process = "Washed",
    roast = "Medium Roast",
    score = 88.5,
    flavorNotes = ["Floral", "Jasmine", "Citrus", "Bergamot"],
    image,
    packageType = "60kg GrainPro Jute & 1kg Foil",
    description,
    fobPriceRange,
  } = product || {};

  const handleInquire = (e) => {
    e.stopPropagation();
    if (onInquire) {
      onInquire(name);
    }
  };

  const handleCardClick = () => {
    if (onSelect) {
      onSelect(product);
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className="group bg-white rounded-3xl border border-stone-200/90 hover:border-[#1E5E3A]/50 shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1.5 cursor-pointer relative"
    >
      {/* Image Container with Badges */}
      <div className="relative h-64 w-full overflow-hidden bg-stone-900">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
        />

        {/* Dark Gradient Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
          {/* Process Badge */}
          <span className="bg-white/95 backdrop-blur-md text-stone-900 text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
            {process}
          </span>

          {/* Cupping Score Badge */}
          <span className="bg-[#1E5E3A] text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-md flex items-center gap-1.5 border border-white/20">
            <Award size={13} className="text-[#85E288]" />
            <span>{score} PTS</span>
          </span>
        </div>

        {/* Bottom Roast & Price Tag */}
        <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white text-xs font-semibold">
          <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg">
            <Flame size={13} className="text-amber-400" />
            <span>{roast}</span>
          </div>
          {fobPriceRange && (
            <span className="bg-[#1E5E3A]/90 backdrop-blur-md text-white text-[11px] px-2.5 py-1 rounded-lg font-bold">
              {fobPriceRange.split("-")[0]} / kg
            </span>
          )}
        </div>

        {/* Quick View Hover Indicator */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <div className="bg-white/95 text-stone-900 px-4 py-2 rounded-full font-bold text-xs flex items-center gap-2 shadow-lg backdrop-blur-xs transform scale-95 group-hover:scale-100 transition-transform">
            <Eye size={15} className="text-[#1E5E3A]" />
            <span>View Full Specs</span>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          {/* Region & Altitude */}
          <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium">
            <MapPin size={14} className="text-[#1E5E3A] shrink-0" />
            <span className="truncate">{region}</span>
            <span>•</span>
            <span className="shrink-0">{altitude}</span>
          </div>

          {/* Coffee Name */}
          <h3 className="text-xl font-bold text-stone-900 group-hover:text-[#1E5E3A] transition-colors leading-snug">
            {name}
          </h3>

          {/* Description */}
          {description && (
            <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
              {description}
            </p>
          )}

          {/* Tasting Notes Chips */}
          <div className="pt-1">
            <p className="text-[11px] uppercase tracking-wider font-bold text-stone-400 mb-2">
              Tasting Notes:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {flavorNotes.slice(0, 4).map((note) => (
                <span
                  key={note}
                  className="bg-[#EBF6EE] text-[#1E5E3A] text-xs font-semibold px-2.5 py-1 rounded-lg border border-[#D5EAD9]"
                >
                  {note}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer: Packaging info & Actions */}
        <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-2">
          <div className="text-left">
            <p className="text-[10px] text-stone-400 uppercase tracking-wider font-bold">Standard Packing</p>
            <p className="text-xs font-bold text-stone-700 truncate max-w-[130px] sm:max-w-[150px]">
              {packageType}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleInquire}
              className="inline-flex items-center gap-1 bg-[#382319] text-white text-xs font-bold px-4 py-2.5 rounded-full hover:bg-[#26160F] shadow-xs hover:shadow-md transition-all group/btn hover:scale-105 cursor-pointer"
            >
              <span>Inquire</span>
              <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
