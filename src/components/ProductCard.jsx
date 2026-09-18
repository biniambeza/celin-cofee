import { Award, Flame, MapPin, ArrowUpRight } from "lucide-react";

export default function ProductCard({ product }) {
    // Fallback defaults in case a prop is omitted
    const {
        name = "Yirgacheffe Grade 1",
        region = "Gedeo Zone, Yirgacheffe",
        altitude = "1,950m - 2,200m",
        process = "Washed",
        roast = "Medium Roast",
        score = 88.5,
        flavorNotes = ["Floral", "Jasmine", "Citrus", "Bergamot"],
        image = "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&w=700&q=80",
        packageType = "60kg GrainPro Jute Bags & 1kg Retail",
    } = product || {};

    return (
        <div className="group bg-white rounded-3xl border border-stone-200/80 hover:border-[#0C6052]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">

            {/* Image Container with Badges */}
            <div className="relative h-60 w-full overflow-hidden bg-stone-100">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Subtle Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                    {/* Process Badge */}
                    <span className="bg-white/95 backdrop-blur-sm text-stone-800 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                        {process} Process
                    </span>

                    {/* Cupping Score Badge */}
                    <span className="bg-[#0C6052] text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                        <Award size={13} className="text-[#3BAA3E]" />
                        <span>{score} PTS</span>
                    </span>
                </div>

                {/* Bottom Roast Level Overlay on Image */}
                <div className="absolute bottom-3 left-3.5 flex items-center gap-1.5 text-white text-xs font-medium bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded-lg">
                    <Flame size={14} className="text-amber-400" />
                    <span>{roast}</span>
                </div>
            </div>

            {/* Card Content */}
            <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3">

                    {/* Region & Altitude */}
                    <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium">
                        <MapPin size={14} className="text-[#0C6052] shrink-0" />
                        <span className="truncate">{region}</span>
                        <span>•</span>
                        <span className="shrink-0">{altitude}</span>
                    </div>

                    {/* Coffee Name */}
                    <h3 className="text-xl font-bold text-stone-900 group-hover:text-[#0C6052] transition-colors leading-snug">
                        {name}
                    </h3>

                    {/* Tasting Notes Chips */}
                    <div className="pt-1">
                        <p className="text-[11px] uppercase tracking-wider font-semibold text-stone-400 mb-1.5">
                            Flavor Profile:
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                            {flavorNotes.map((note) => (
                                <span
                                    key={note}
                                    className="bg-[#0C6052]/5 text-[#0C6052] text-xs font-medium px-2.5 py-1 rounded-md border border-[#0C6052]/10"
                                >
                                    {note}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer: Packaging info & Inquiry Button */}
                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                    <div className="text-left">
                        <p className="text-[11px] text-stone-400 font-medium">Export Packing</p>
                        <p className="text-xs font-semibold text-stone-700 truncate max-w-[150px] sm:max-w-[170px]">
                            {packageType}
                        </p>
                    </div>

                    <a
                        href="#quote"
                        className="inline-flex items-center gap-1.5 bg-[#0C6052] text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#08483D] transition-colors shrink-0 group/btn"
                    >
                        <span>Inquire</span>
                        <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                </div>

            </div>

        </div>
    );
}
