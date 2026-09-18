import { ArrowRight, CheckCircle2, Globe2 } from "lucide-react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import { featuredCoffees, exportSteps } from "../data";

// Asset imports for About Section
import farmImg from "../assets/coffee-farm.jpg";
import farmerImg from "../assets/farmer.jpg";

export default function Home() {
    return (
        <main className="bg-[#FAF8F5]">
            {/* 1. Hero Section */}
            <Hero />

            {/* 2. Heritage / About Section */}
            <section id="about" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Images Grid */}
                    <div className="grid grid-cols-2 gap-4 relative">
                        <div className="space-y-4">
                            <img
                                src={farmerImg}
                                alt="Ethiopian Coffee Farmer inspecting fresh cherries"
                                className="rounded-2xl shadow-lg object-cover h-64 sm:h-72 w-full hover:scale-[1.02] transition-transform duration-300"
                            />
                            <div className="p-4 bg-[#0C6052] rounded-2xl text-white text-center">
                                <p className="text-3xl font-bold">100%</p>
                                <p className="text-xs text-[#85E288] font-medium">Traceable to Origin</p>
                            </div>
                        </div>
                        <div className="space-y-4 pt-6 sm:pt-8">
                            <div className="p-4 bg-white border border-stone-200 rounded-2xl shadow-sm text-center">
                                <p className="text-3xl font-bold text-stone-900">2,200m</p>
                                <p className="text-xs text-stone-500 font-medium">Highland Elevation</p>
                            </div>
                            <img
                                src={farmImg}
                                alt="Lush green Ethiopian coffee forest plantation"
                                className="rounded-2xl shadow-lg object-cover h-64 sm:h-72 w-full hover:scale-[1.02] transition-transform duration-300"
                            />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="space-y-6 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C6052]/10 text-[#0C6052] text-xs font-bold uppercase tracking-wider">
                            <span>The Birthplace of Coffee</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 leading-tight">
                            Honoring Ethiopian Traditions, <br />
                            <span className="text-[#0C6052]">Roasted for Global Roasters</span>
                        </h2>

                        <p className="text-stone-600 leading-relaxed text-base sm:text-lg">
                            Ethiopia is not just an origin; it is the cradle of Arabica coffee. At <strong>Celin Coffee</strong>, we connect generational smallholder farmers with international coffee shops, specialty roasters, and commercial buyers.
                        </p>

                        <div className="space-y-3 pt-2 text-stone-700 text-sm sm:text-base">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 size={20} className="text-[#3BAA3E] shrink-0" />
                                <span>Certified by the Ethiopian Coffee & Tea Authority (ECTA)</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 size={20} className="text-[#3BAA3E] shrink-0" />
                                <span>Fair, direct trade compensation for cooperative farmers</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 size={20} className="text-[#3BAA3E] shrink-0" />
                                <span>Strict moisture, screen size, and defect sorting before export</span>
                            </div>
                        </div>

                        <div className="pt-4">
                            <a
                                href="#coffee"
                                className="inline-flex items-center gap-2 text-[#0C6052] font-bold text-sm sm:text-base group hover:text-[#08483D]"
                            >
                                <span>Discover our origins and cupping profiles</span>
                                <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Featured Export Varieties (Product Cards) */}
            <section id="coffee" className="py-20 bg-white border-y border-stone-200/70">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
                        <span className="text-xs uppercase tracking-widest font-bold text-[#3BAA3E] bg-[#0C6052]/10 px-3.5 py-1 rounded-full">
                            Specialty Harvest Callouts
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900">
                            Featured Export Coffee Varieties
                        </h2>
                        <p className="text-stone-600 text-sm sm:text-base">
                            Each lot is carefully scored, profile-roasted, and ready for retail distribution or bulk commercial supply.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredCoffees.map((coffee) => (
                            <ProductCard key={coffee.name} product={coffee} />
                        ))}
                    </div>

                </div>
            </section>

            {/* 4. Export Process Flow */}
            <section id="export" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
                    <span className="text-xs uppercase tracking-widest font-bold text-[#0C6052] bg-[#0C6052]/10 px-3.5 py-1 rounded-full">
                        Quality Assurance
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900">
                        Our 4-Step Export Workflow
                    </h2>
                    <p className="text-stone-600 text-sm sm:text-base">
                        From the volcanic highland soil to your destination warehouse — seamless, transparent, and certified.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {exportSteps.map((item) => (
                        <div
                            key={item.step}
                            className="bg-white rounded-3xl p-7 border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow relative space-y-4 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-12 h-12 rounded-2xl bg-[#0C6052]/10 flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <span className="text-2xl font-black text-stone-200">
                                        {item.step}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-stone-900 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-stone-500 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. Direct Quote Call to Action Banner */}
            <section id="quote" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="bg-[#0C6052] text-white rounded-3xl p-8 sm:p-14 text-center space-y-6 shadow-xl relative overflow-hidden">
                    <div className="max-w-2xl mx-auto space-y-4 relative z-10">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                            Ready to Import Specialty Ethiopian Coffee?
                        </h2>
                        <p className="text-stone-200 text-base sm:text-lg">
                            Contact our trade team today to request sample boxes, current harvest cupping sheets, and competitive FOB Djibouti / CIF freight rates.
                        </p>
                        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="mailto:export@celincoffee.com"
                                className="w-full sm:w-auto bg-white text-[#0C6052] hover:bg-stone-100 font-bold px-8 py-3.5 rounded-full shadow-md transition-colors"
                            >
                                Inquire via Email
                            </a>
                            <a
                                href="#contact"
                                className="w-full sm:w-auto border border-white/40 text-white hover:bg-white/10 font-semibold px-8 py-3.5 rounded-full transition-colors flex items-center justify-center gap-2"
                            >
                                <Globe2 size={18} />
                                <span>Trade Desk Details</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
