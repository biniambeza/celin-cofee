import { useState } from "react";
import { Search, Download, FileText, CheckCircle2, ShieldCheck, Mail } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { featuredCoffees } from "../data";

export default function Catalog() {
    const [selectedProcess, setSelectedProcess] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const processFilters = ["All", "Washed", "Natural", "Anaerobic"];

    // Filter coffees by Process and Search keyword
    const filteredCoffees = featuredCoffees.filter((coffee) => {
        const matchesProcess =
            selectedProcess === "All" ||
            coffee.process.toLowerCase().includes(selectedProcess.toLowerCase());

        const matchesSearch =
            coffee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            coffee.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
            coffee.flavorNotes.some((note) =>
                note.toLowerCase().includes(searchQuery.toLowerCase())
            );

        return matchesProcess && matchesSearch;
    });

    return (
        <main className="bg-[#FAF8F5] pt-24 pb-20 min-h-screen">
            {/* Header Banner */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 text-center">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C6052]/10 text-[#0C6052] text-xs font-bold uppercase tracking-wider mb-4 border border-[#0C6052]/20">
                    <ShieldCheck size={15} className="text-[#3BAA3E]" />
                    <span>Current Harvest Export Lots • SCA 86+ Standards</span>
                </span>

                <h1 className="text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
                    Ethiopian Specialty <span className="text-[#0C6052]">Coffee Catalog</span>
                </h1>

                <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
                    Explore single-origin, fully traceable micro-lots from Yirgacheffe, Sidama, Guji, and Harrar. Available for bulk container shipment and private label roasting.
                </p>

                {/* Download Harvest Sheet CTA */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                    <a
                        href="#quote"
                        className="inline-flex items-center gap-2 bg-[#0C6052] hover:bg-[#08483D] text-white text-sm font-semibold px-6 py-3 rounded-full shadow-md transition-all hover:scale-[1.02]"
                    >
                        <Mail size={16} />
                        <span>Request Sample Box</span>
                    </a>

                    <button
                        type="button"
                        onClick={() => alert("Downloading 2026 Harvest Spec Sheet (PDF)...")}
                        className="inline-flex items-center gap-2 bg-white border border-stone-300 hover:border-[#0C6052] text-stone-800 text-sm font-semibold px-6 py-3 rounded-full shadow-xs hover:bg-stone-50 transition-colors cursor-pointer"
                    >
                        <Download size={16} className="text-[#3BAA3E]" />
                        <span>Download Crop Specs (PDF)</span>
                    </button>
                </div>
            </section>

            {/* Filter and Search Bar */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">

                    {/* Search Input */}
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search origin, variety, flavor notes..."
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#0C6052]/30 focus:border-[#0C6052]"
                        />
                    </div>

                    {/* Process Filter Pills */}
                    <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                        <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider mr-1 hidden sm:inline">
                            Processing:
                        </span>
                        {processFilters.map((process) => (
                            <button
                                key={process}
                                type="button"
                                onClick={() => setSelectedProcess(process)}
                                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${selectedProcess === process
                                        ? "bg-[#0C6052] text-white shadow-sm"
                                        : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                                    }`}
                            >
                                {process}
                            </button>
                        ))}
                    </div>

                </div>
            </section>

            {/* Coffee Cards Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {filteredCoffees.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredCoffees.map((coffee) => (
                            <ProductCard key={coffee.id || coffee.name} product={coffee} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 bg-white rounded-3xl border border-stone-200/80 p-8">
                        <FileText size={48} className="mx-auto text-stone-300 mb-3" />
                        <h3 className="text-lg font-bold text-stone-800">No coffee varieties match your criteria</h3>
                        <p className="text-stone-500 text-sm mt-1">Try resetting the search or processing filter.</p>
                        <button
                            onClick={() => {
                                setSelectedProcess("All");
                                setSearchQuery("");
                            }}
                            className="mt-4 text-xs font-bold text-[#0C6052] underline"
                        >
                            Reset Filters
                        </button>
                    </div>
                )}
            </section>

            {/* Export Specifications & Standards Table */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
                <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200/80 shadow-sm">
                    <div className="mb-6">
                        <span className="text-xs font-bold text-[#3BAA3E] uppercase tracking-wider">
                            Trade Specifications
                        </span>
                        <h2 className="text-2xl font-bold text-stone-900 mt-1">
                            Standard Export Logistics & Packaging
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-stone-700">
                        <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/60 space-y-2">
                            <div className="flex items-center gap-2 text-[#0C6052] font-bold">
                                <CheckCircle2 size={18} className="text-[#3BAA3E]" />
                                <span>Packaging Options</span>
                            </div>
                            <p className="text-xs text-stone-600 leading-relaxed">
                                60kg GrainPro-lined Jute bags for bulk export. 30kg vacuum-sealed boxes for micro-lots, and custom 250g / 1kg foil valve bags with OEM private branding.
                            </p>
                        </div>

                        <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/60 space-y-2">
                            <div className="flex items-center gap-2 text-[#0C6052] font-bold">
                                <CheckCircle2 size={18} className="text-[#3BAA3E]" />
                                <span>Shipping & Delivery</span>
                            </div>
                            <p className="text-xs text-stone-600 leading-relaxed">
                                FOB Djibouti Port for full container loads (FCL 20ft / 40ft) or LCL pallets. Air Freight CIF expedited delivery directly from Addis Ababa Bole International.
                            </p>
                        </div>

                        <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/60 space-y-2">
                            <div className="flex items-center gap-2 text-[#0C6052] font-bold">
                                <CheckCircle2 size={18} className="text-[#3BAA3E]" />
                                <span>Lab Cupping & QC</span>
                            </div>
                            <p className="text-xs text-stone-600 leading-relaxed">
                                Pre-shipment samples (PSS) provided with full SCA moisture, density, screen size, and cupping score certificates verified by accredited Q-Graders.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
