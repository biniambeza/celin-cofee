import { X, Award, Flame, MapPin, CheckCircle2, ShieldCheck, Mail, ArrowRight, Sparkles } from "lucide-react";

export default function CoffeeModal({ coffee, onClose, onInquire }) {
  if (!coffee) return null;

  const {
    name,
    region,
    altitude,
    process,
    roast,
    score,
    flavorNotes = [],
    image,
    packageType,
    description,
    harvestPeriod,
    screenSize,
    moisture,
    varietal,
    fobPriceRange,
    attributes = {},
    recommendedBrew,
  } = coffee;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-900/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full overflow-hidden border border-stone-100 z-10 animate-in fade-in zoom-in-95 duration-200 my-8">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-stone-700 hover:text-stone-900 flex items-center justify-center shadow-md transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          
          {/* Left Column: Image & Quick Badges (5 cols) */}
          <div className="md:col-span-5 relative bg-stone-900 min-h-[280px] md:min-h-full">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <span className="bg-[#0C6052] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 border border-white/20 w-fit">
                <Award size={14} className="text-[#85E288]" />
                <span>{score} SCA Score</span>
              </span>
              <span className="bg-white/95 backdrop-blur-md text-stone-900 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs w-fit">
                {process} Process
              </span>
            </div>

            <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
              <div className="flex items-center gap-1.5 text-amber-400 text-xs font-semibold">
                <Flame size={14} />
                <span>{roast}</span>
              </div>
              <p className="text-xs text-stone-300 font-medium">FOB Guide: <strong className="text-white">{fobPriceRange}</strong></p>
            </div>
          </div>

          {/* Right Column: Detailed Specs (7 cols) */}
          <div className="md:col-span-7 p-6 sm:p-8 space-y-6">
            
            {/* Header */}
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#0C6052] uppercase tracking-wider mb-1">
                <MapPin size={14} />
                <span>{region}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 leading-tight">
                {name}
              </h3>
              <p className="text-stone-600 text-sm mt-2 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Flavor Notes */}
            <div>
              <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">
                Cupping Flavor Profile
              </p>
              <div className="flex flex-wrap gap-2">
                {flavorNotes.map((note) => (
                  <span
                    key={note}
                    className="bg-[#0C6052]/10 text-[#0C6052] text-xs font-bold px-3 py-1.5 rounded-xl border border-[#0C6052]/20"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Technical Specifications Grid */}
            <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-stone-50 border border-stone-100 text-xs">
              <div>
                <span className="text-stone-400 block font-medium">Elevation</span>
                <span className="font-bold text-stone-800">{altitude}</span>
              </div>
              <div>
                <span className="text-stone-400 block font-medium">Varietal</span>
                <span className="font-bold text-stone-800">{varietal || "Heirloom Arabica"}</span>
              </div>
              <div>
                <span className="text-stone-400 block font-medium">Screen Size</span>
                <span className="font-bold text-stone-800">{screenSize || "15-18"}</span>
              </div>
              <div>
                <span className="text-stone-400 block font-medium">Moisture Content</span>
                <span className="font-bold text-stone-800">{moisture || "< 11.2%"}</span>
              </div>
              <div>
                <span className="text-stone-400 block font-medium">Harvest Window</span>
                <span className="font-bold text-stone-800">{harvestPeriod || "Nov - Jan"}</span>
              </div>
              <div>
                <span className="text-stone-400 block font-medium">Export Packaging</span>
                <span className="font-bold text-stone-800 truncate block">{packageType}</span>
              </div>
            </div>

            {/* Cupping Score Bars */}
            {attributes && Object.keys(attributes).length > 0 && (
              <div className="space-y-2">
                <p className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                  Q-Grader Cupping Attributes (Out of 10)
                </p>
                <div className="space-y-1.5 text-xs">
                  {Object.entries(attributes).map(([key, val]) => (
                    <div key={key} className="flex items-center gap-3">
                      <span className="capitalize text-stone-600 font-medium w-20">
                        {key.replace(/([A-Z])/g, " $1")}
                      </span>
                      <div className="flex-1 bg-stone-200 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-[#0C6052] h-full rounded-full transition-all duration-500"
                          style={{ width: `${(val / 10) * 100}%` }}
                        />
                      </div>
                      <span className="font-bold text-stone-800 w-8 text-right">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Recommended Brew */}
            {recommendedBrew && (
              <div className="text-xs text-stone-600 bg-amber-500/10 border border-amber-500/20 p-3 rounded-xl flex items-center gap-2">
                <Sparkles size={16} className="text-amber-700 shrink-0" />
                <span>
                  <strong>Recommended Extraction:</strong> {recommendedBrew}
                </span>
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  if (onInquire) onInquire(name);
                }}
                className="flex-1 bg-[#0C6052] hover:bg-[#08483D] text-white font-bold py-3.5 px-6 rounded-full shadow-md transition-all hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                <Mail size={16} />
                <span>Request Lot Sample / Trade Quote</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
