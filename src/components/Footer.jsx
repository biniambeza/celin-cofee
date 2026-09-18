import { Mail, Phone, MapPin, Globe, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import logo from "../assets/logo.png";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="bg-[#082822] text-stone-300 pt-16 pb-8 border-t border-[#0C6052]/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Top Newsletter / Trade Inquiries Banner */}
                <div className="bg-[#0C6052] rounded-3xl p-8 sm:p-10 mb-14 text-white shadow-xl shadow-black/20 flex flex-col lg:flex-row items-center justify-between gap-6">
                    <div className="space-y-2 text-center lg:text-left">
                        <span className="text-xs uppercase tracking-widest font-semibold text-[#85E288] bg-black/20 px-3 py-1 rounded-full">
                            Global Importers & Wholesalers
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-bold">
                            Receive Our Latest Crop & Export Price Catalog
                        </h3>
                        <p className="text-stone-200 text-sm max-w-xl">
                            Stay informed on seasonal harvest schedules, cupping scores, and FOB/CIF pricing for Ethiopian specialty origins.
                        </p>
                    </div>

                    {/* Catalog Input */}
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="w-full lg:w-auto flex flex-col sm:flex-row gap-2 max-w-md"
                    >
                        <input
                            type="email"
                            placeholder="Enter your business email"
                            className="px-5 py-3.5 rounded-full bg-white text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#3BAA3E] w-full"
                        />
                        <button
                            type="submit"
                            className="bg-[#07382F] hover:bg-[#052721] text-white px-6 py-3.5 rounded-full text-sm font-semibold flex items-center justify-center gap-2 transition-colors shrink-0 cursor-pointer"
                        >
                            <span>Subscribe</span>
                            <ArrowRight size={16} />
                        </button>
                    </form>
                </div>

                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">

                    {/* Column 1: Company Profile & Logo (4 cols) */}
                    <div className="lg:col-span-4 space-y-5">
                        <div className="bg-white rounded-2xl p-2.5 inline-block shadow-sm">
                            <img
                                src={logo}
                                alt="Celin Coffee - Ethiopian Roasted Coffee Exporter"
                                className="h-14 w-auto object-contain"
                            />
                        </div>

                        <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
                            Licensed specialty coffee exporter based in Addis Ababa, Ethiopia. Delivering high-scoring, freshly roasted single-origin Ethiopian coffees directly to roasters, cafes, and distributors worldwide.
                        </p>

                        {/* Certifications Badge Line */}
                        <div className="space-y-2 pt-1 text-xs text-stone-300">
                            <div className="flex items-center gap-2 text-[#3BAA3E]">
                                <ShieldCheck size={16} />
                                <span className="font-semibold text-stone-200">ECTA Licensed Exporter</span>
                            </div>
                            <div className="flex items-center gap-2 text-[#3BAA3E]">
                                <CheckCircle2 size={16} />
                                <span className="font-semibold text-stone-200">100% Traceable Single Origins</span>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Quick Links (2 cols) */}
                    <div className="lg:col-span-2 space-y-4">
                        <h4 className="text-white text-sm font-bold uppercase tracking-wider">
                            Navigation
                        </h4>
                        <ul className="space-y-2.5 text-sm">
                            <li>
                                <a href="#home" className="hover:text-[#3BAA3E] transition-colors">Home</a>
                            </li>
                            <li>
                                <a href="#about" className="hover:text-[#3BAA3E] transition-colors">About Our Story</a>
                            </li>
                            <li>
                                <a href="#coffee" className="hover:text-[#3BAA3E] transition-colors">Coffee Origins</a>
                            </li>
                            <li>
                                <a href="#export" className="hover:text-[#3BAA3E] transition-colors">Export Process</a>
                            </li>
                            <li>
                                <a href="#certifications" className="hover:text-[#3BAA3E] transition-colors">Quality & Labs</a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Ethiopian Varieties (3 cols) */}
                    <div className="lg:col-span-3 space-y-4">
                        <h4 className="text-white text-sm font-bold uppercase tracking-wider">
                            Featured Varieties
                        </h4>
                        <ul className="space-y-2.5 text-sm">
                            <li className="flex items-center justify-between text-stone-400 hover:text-white transition-colors">
                                <span>Yirgacheffe Grade 1</span>
                                <span className="text-[11px] text-[#3BAA3E] bg-[#0C6052]/30 px-2 py-0.5 rounded">Washed</span>
                            </li>
                            <li className="flex items-center justify-between text-stone-400 hover:text-white transition-colors">
                                <span>Sidama Specialty</span>
                                <span className="text-[11px] text-[#3BAA3E] bg-[#0C6052]/30 px-2 py-0.5 rounded">Natural</span>
                            </li>
                            <li className="flex items-center justify-between text-stone-400 hover:text-white transition-colors">
                                <span>Guji Anaerobic</span>
                                <span className="text-[11px] text-[#3BAA3E] bg-[#0C6052]/30 px-2 py-0.5 rounded">Micro-Lot</span>
                            </li>
                            <li className="flex items-center justify-between text-stone-400 hover:text-white transition-colors">
                                <span>Harrar Artisan</span>
                                <span className="text-[11px] text-[#3BAA3E] bg-[#0C6052]/30 px-2 py-0.5 rounded">Natural</span>
                            </li>
                            <li className="flex items-center justify-between text-stone-400 hover:text-white transition-colors">
                                <span>Limu Organic</span>
                                <span className="text-[11px] text-[#3BAA3E] bg-[#0C6052]/30 px-2 py-0.5 rounded">Washed</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Contact & Export Office (3 cols) */}
                    <div className="lg:col-span-3 space-y-4">
                        <h4 className="text-white text-sm font-bold uppercase tracking-wider">
                            Export Desk
                        </h4>

                        <div className="space-y-3 text-sm text-stone-400">
                            <div className="flex items-start gap-2.5">
                                <MapPin size={18} className="text-[#3BAA3E] shrink-0 mt-0.5" />
                                <span>Addis Ababa, Ethiopia</span>
                            </div>

                            <div className="flex items-center gap-2.5">
                                <Mail size={18} className="text-[#3BAA3E] shrink-0" />
                                <a href="mailto:export@celincoffee.com" className="hover:text-white transition-colors">
                                    export@celincoffee.com
                                </a>
                            </div>

                            <div className="flex items-center gap-2.5">
                                <Phone size={18} className="text-[#3BAA3E] shrink-0" />
                                <span>+251 911 000 000</span>
                            </div>

                            <div className="flex items-center gap-2.5">
                                <Globe size={18} className="text-[#3BAA3E] shrink-0" />
                                <span>Shipping via FOB Djibouti & Air Cargo</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Copyright & Terms */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
                    <p>© {currentYear} Celin Coffee Exporter. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <a href="#privacy" className="hover:text-stone-400 transition-colors">Export Terms</a>
                        <a href="#terms" className="hover:text-stone-400 transition-colors">Privacy Policy</a>
                        <a href="#compliance" className="hover:text-stone-400 transition-colors">Quality Compliance</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
