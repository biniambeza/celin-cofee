import { ArrowRight, Award, Flame, Globe, Sparkles } from "lucide-react";
import heroImg from "../assets/hero.jpg";

export default function Hero() {
    return (
        <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#FAF8F5]">
            {/* Background Soft Glows */}
            <div className="absolute top-0 right-0 -mr-24 -mt-24 w-[450px] h-[450px] rounded-full bg-[#0C6052]/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#3BAA3E]/10 blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Content (7 columns on desktop) */}
                    <div className="lg:col-span-7 text-center lg:text-left space-y-6">

                        {/* Pill Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0C6052]/10 text-[#0C6052] text-xs sm:text-sm font-semibold border border-[#0C6052]/20">
                            <Sparkles size={15} className="text-[#3BAA3E]" />
                            <span>Direct from Ethiopian Highlands • Grade 1 Specialty</span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.12]">
                            Premium Ethiopian <br />
                            <span className="text-[#0C6052]">Roasted Coffee</span> for Global Export
                        </h1>

                        {/* Subtitle */}
                        <p className="text-stone-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                            Sourced from legendary origins — Yirgacheffe, Sidama, and Guji.
                            Masterfully drum-roasted and packaged under strict international standards, delivered fresh to importers worldwide.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                            <a
                                href="#quote"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#0C6052] text-white font-semibold hover:bg-[#08483D] shadow-lg shadow-[#0C6052]/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <span>Request Export Quote</span>
                                <ArrowRight size={18} />
                            </a>

                            <a
                                href="#coffee"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-stone-800 font-semibold border border-stone-300 hover:border-[#0C6052] hover:bg-stone-50 transition-colors"
                            >
                                View Coffee Varieties
                            </a>
                        </div>

                        {/* Key Value Badges */}
                        <div className="pt-6 border-t border-stone-200/80 grid grid-cols-3 gap-4 text-center lg:text-left">
                            <div>
                                <p className="text-2xl sm:text-3xl font-bold text-[#0C6052]">100%</p>
                                <p className="text-xs text-stone-500 font-medium mt-0.5">Ethiopian Arabica</p>
                            </div>
                            <div>
                                <p className="text-2xl sm:text-3xl font-bold text-[#0C6052]">86+</p>
                                <p className="text-xs text-stone-500 font-medium mt-0.5">SCA Cupping Score</p>
                            </div>
                            <div>
                                <div className="flex items-center justify-center lg:justify-start gap-1">
                                    <Globe size={20} className="text-[#3BAA3E]" />
                                    <span className="text-2xl sm:text-3xl font-bold text-stone-900">40+</span>
                                </div>
                                <p className="text-xs text-stone-500 font-medium mt-0.5">Export Destinations</p>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Hero Image using hero.jpg (5 columns on desktop) */}
                    <div className="lg:col-span-5 relative mx-auto max-w-lg lg:max-w-none w-full">

                        {/* Visual Frame */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-stone-900/25 border-4 border-white aspect-[4/5] bg-stone-900">
                            <img
                                src={heroImg}
                                alt="Freshly roasted Ethiopian coffee beans with rich aroma and oil sheen"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                            />

                            {/* Subtle Dark Gradient Overlay at bottom for contrast */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

                            {/* Bottom Caption on the Image */}
                            <div className="absolute bottom-5 left-5 right-5 text-white">
                                <p className="text-xs font-semibold uppercase tracking-wider text-[#3BAA3E]">Slow Drum Roasted</p>
                                <p className="text-base font-bold">Medium & Dark Roast Specialty Beans</p>
                            </div>
                        </div>

                        {/* Floating Badge 1: Fresh Roast Guarantee */}
                        <div className="absolute -bottom-6 -left-4 sm:left-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-stone-100 flex items-center gap-3">
                            <div className="w-11 h-11 rounded-xl bg-[#0C6052]/10 flex items-center justify-center text-[#0C6052]">
                                <Flame size={22} className="text-[#0C6052]" />
                            </div>
                            <div className="text-left pr-2">
                                <p className="text-[11px] text-stone-500 font-medium">Roasting Profile</p>
                                <p className="text-sm font-bold text-stone-900">Artisan Master Roast</p>
                            </div>
                        </div>

                        {/* Floating Badge 2: Certified Quality */}
                        <div className="hidden sm:flex absolute -top-4 -right-4 bg-white/95 backdrop-blur-md py-2.5 px-4 rounded-full shadow-lg border border-stone-100 items-center gap-2 text-xs font-bold text-stone-800">
                            <Award size={16} className="text-[#3BAA3E]" />
                            <span>Certified Origin</span>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
