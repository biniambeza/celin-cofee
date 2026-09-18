import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Globe, PackageCheck, ShieldCheck } from "lucide-react";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        companyName: "",
        contactPerson: "",
        email: "",
        phone: "",
        country: "",
        interest: "Yirgacheffe Grade 1",
        volume: "1-10 Bags (Trial)",
        shippingTerms: "FOB Djibouti",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate submission
        setSubmitted(true);
    };

    return (
        <main className="bg-[#FAF8F5] pt-24 pb-20 min-h-screen">
            {/* Page Header */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 text-center">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C6052]/10 text-[#0C6052] text-xs font-bold uppercase tracking-wider mb-4 border border-[#0C6052]/20">
                    <Globe size={15} className="text-[#3BAA3E]" />
                    <span>Global Trade & Export Desk • Addis Ababa</span>
                </span>

                <h1 className="text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
                    Connect With Our <span className="text-[#0C6052]">Export Team</span>
                </h1>

                <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
                    Request harvest samples, negotiate container contracts (FOB/CIF), or consult with our Q-Graders regarding custom roast profiles.
                </p>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left Column: Direct Info & Sample Policy (5 cols) */}
                    <div className="lg:col-span-5 space-y-8">

                        {/* Contact Cards */}
                        <div className="bg-white rounded-3xl p-7 border border-stone-200/80 shadow-xs space-y-6">
                            <h2 className="text-xl font-bold text-stone-900 border-b border-stone-100 pb-3">
                                Trade Headquarters
                            </h2>

                            <div className="space-y-4 text-sm text-stone-600">
                                <div className="flex items-start gap-3.5">
                                    <div className="w-10 h-10 rounded-xl bg-[#0C6052]/10 flex items-center justify-center text-[#0C6052] shrink-0">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-stone-900">Head Office & Roastery</p>
                                        <p className="text-stone-500">Bole Sub-City, Near Coffee Exchange Hub</p>
                                        <p className="text-stone-500">Addis Ababa, Ethiopia</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3.5">
                                    <div className="w-10 h-10 rounded-xl bg-[#0C6052]/10 flex items-center justify-center text-[#0C6052] shrink-0">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-stone-900">Direct Export Inquiries</p>
                                        <a href="mailto:export@celincoffee.com" className="text-[#0C6052] hover:underline font-medium">
                                            export@celincoffee.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3.5">
                                    <div className="w-10 h-10 rounded-xl bg-[#0C6052]/10 flex items-center justify-center text-[#0C6052] shrink-0">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-stone-900">Direct Line & WhatsApp</p>
                                        <p className="text-stone-700 font-medium">+251 911 000 000</p>
                                        <p className="text-xs text-stone-400">Available on WhatsApp for instant inquiries</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3.5">
                                    <div className="w-10 h-10 rounded-xl bg-[#0C6052]/10 flex items-center justify-center text-[#0C6052] shrink-0">
                                        <Clock size={20} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-stone-900">Business Hours</p>
                                        <p className="text-stone-500">Mon - Fri: 8:00 AM – 6:00 PM (EAT / UTC+3)</p>
                                        <p className="text-stone-500">Saturday: 8:30 AM – 1:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sample Box Policy Banner */}
                        <div className="bg-[#0C6052] text-white rounded-3xl p-7 shadow-md space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#85E288]">
                                    <PackageCheck size={22} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">Express Sample Dispatch</h3>
                                    <p className="text-xs text-stone-200">Shipped via DHL / FedEx Worldwide</p>
                                </div>
                            </div>
                            <p className="text-xs text-stone-200 leading-relaxed">
                                Qualified importers and roasters can request 250g–500g cupping samples with complete moisture, defect, and SCA cupping lab evaluation sheets.
                            </p>
                            <div className="flex items-center gap-2 text-xs font-semibold text-[#85E288]">
                                <ShieldCheck size={16} />
                                <span>ECTA Certified Pre-Shipment Inspection</span>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Interactive Export Inquiry Form (7 cols) */}
                    <div className="lg:col-span-7">
                        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200/80 shadow-sm">

                            {submitted ? (
                                <div className="text-center py-12 space-y-4">
                                    <div className="w-16 h-16 bg-[#0C6052]/10 text-[#0C6052] rounded-full flex items-center justify-center mx-auto">
                                        <CheckCircle2 size={36} className="text-[#3BAA3E]" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-stone-900">Inquiry Received Successfully</h3>
                                    <p className="text-stone-600 text-sm max-w-md mx-auto">
                                        Thank you, <strong>{formData.contactPerson || "partner"}</strong>. An export trade representative from Celin Coffee will review your specifications and reply within 24 business hours.
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => setSubmitted(false)}
                                        className="mt-4 inline-flex items-center text-xs font-bold text-[#0C6052] underline"
                                    >
                                        Submit another inquiry
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <h2 className="text-2xl font-bold text-stone-900">Request a Trade Quote</h2>
                                        <p className="text-xs text-stone-500 mt-1">
                                            Fill out your order requirements and port destination for accurate freight calculations.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                                                Company Name *
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                name="companyName"
                                                value={formData.companyName}
                                                onChange={handleChange}
                                                placeholder="e.g. Nordic Roasters ApS"
                                                className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C6052]/30 focus:border-[#0C6052]"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                                                Contact Person *
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                name="contactPerson"
                                                value={formData.contactPerson}
                                                onChange={handleChange}
                                                placeholder="Your full name"
                                                className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C6052]/30 focus:border-[#0C6052]"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                                                Business Email *
                                            </label>
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="buyer@yourcompany.com"
                                                className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C6052]/30 focus:border-[#0C6052]"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                                                Phone / WhatsApp
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+CountryCode Number"
                                                className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C6052]/30 focus:border-[#0C6052]"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                                        <div>
                                            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                                                Destination Country
                                            </label>
                                            <input
                                                type="text"
                                                name="country"
                                                value={formData.country}
                                                onChange={handleChange}
                                                placeholder="e.g. Germany, UAE, Japan"
                                                className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C6052]/30 focus:border-[#0C6052]"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                                                Coffee Variety
                                            </label>
                                            <select
                                                name="interest"
                                                value={formData.interest}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C6052]/30 focus:border-[#0C6052]"
                                            >
                                                <option>Yirgacheffe Grade 1 Washed</option>
                                                <option>Sidama Specialty Natural</option>
                                                <option>Guji Anaerobic Micro-Lot</option>
                                                <option>Harrar Longberry Artisan</option>
                                                <option>Mixed Container / Multiple Lots</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                                                Estimated Volume
                                            </label>
                                            <select
                                                name="volume"
                                                value={formData.volume}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C6052]/30 focus:border-[#0C6052]"
                                            >
                                                <option>Sample Box Only (250g-1kg)</option>
                                                <option>1-10 Bags (Pallet LCL)</option>
                                                <option>20ft Container (approx. 320 bags)</option>
                                                <option>40ft Container (approx. 450+ bags)</option>
                                                <option>Private Label / OEM Roasted</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                                            Order Specifications or Questions
                                        </label>
                                        <textarea
                                            rows={4}
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Specify roast level preference (light, medium, dark), required packaging (GrainPro jute bags or retail foil), and target port..."
                                            className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C6052]/30 focus:border-[#0C6052]"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-4 rounded-full bg-[#0C6052] hover:bg-[#08483D] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]"
                                    >
                                        <span>Send Export Inquiry</span>
                                        <Send size={16} />
                                    </button>
                                </form>
                            )}

                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
