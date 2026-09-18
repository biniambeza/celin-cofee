import { ArrowRight, Coffee, Sparkles, Star } from "lucide-react";

export default function Hero() {
    return (
        <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-[#FAF7F2]">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-amber-200/30 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-amber-100/50 blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Text & CTAs */}
                    <div className="text-center lg:text-left space-y-6">
                        {/* Top Pill Badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 text-amber-900 text-xs font-semibold tracking-wide border border-amber-200/60">
                            <Sparkles size={14} className="text-amber-700" />
                            <span>100% Organic Ethiopian & Colombian Beans</span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.15]">
                            Experience the <br />
                            <span className="text-amber-800 underline decoration-amber-300 decoration-wavy decoration-2">
                                Pure Art
                            </span> of Fine Coffee
                        </h1>

                        {/* Subtitle */}
                        <p className="text-stone-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Carefully harvested, roasted to peak perfection, and brewed with precision.
                            Elevate your daily ritual with every warm, velvety sip at Celin Coffee.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                            <a
                                href="#menu"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-amber-800 text-white font-medium hover:bg-amber-900 shadow-md shadow-amber-900/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <span>Explore Menu</span>
                                <ArrowRight size={18} />
                            </a>

                            <a
                                href="#about"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-stone-800 font-medium border border-stone-200 hover:bg-stone-50 hover:border-amber-300 transition-colors"
                            >
                                Our Story
                            </a>
                        </div>

                        {/* Quick Stats / Social Proof */}
                        <div className="pt-6 border-t border-stone-200/60 grid grid-cols-3 gap-6 text-center lg:text-left">
                            <div>
                                <p className="text-2xl font-bold text-amber-950">35+</p>
                                <p className="text-xs text-stone-500 font-medium">Unique Blends</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-amber-950">100%</p>
                                <p className="text-xs text-stone-500 font-medium">Single Origin</p>
                            </div>
                            <div>
                                <div className="flex items-center justify-center lg:justify-start gap-1">
                                    <span className="text-2xl font-bold text-amber-950">4.9</span>
                                    <Star size={18} className="fill-amber-500 text-amber-500" />
                                </div>
                                <p className="text-xs text-stone-500 font-medium">2.4k+ Reviews</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Visual Card */}
                    <div className="relative mx-auto max-w-md lg:max-w-none w-full">
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-amber-950/15 border-4 border-white bg-amber-100">
                            <img
                                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80"
                                alt="A barista pouring a fresh cup of coffee with latte art"
                                className="w-full h-[380px] sm:h-[460px] object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* Floating Badge 1: Fresh Roast */}
                        <div className="absolute -bottom-5 -left-4 sm:left-4 z-20 bg-white/95 backdrop-blur-sm p-3.5 rounded-2xl shadow-xl border border-amber-100 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800">
                                <Coffee size={20} />
                            </div>
                            <div className="text-left">
                                <p className="text-xs text-stone-500 font-medium">Roasted Daily</p>
                                <p className="text-sm font-bold text-stone-900">Always Fresh</p>
                            </div>
                        </div>

                        {/* Floating Badge 2: Special Deal */}
                        <div className="hidden sm:block absolute -top-4 -right-4 z-20 bg-amber-900 text-white py-2 px-4 rounded-full shadow-lg text-xs font-semibold tracking-wide">
                            ☕ Free Croissant on 1st Order
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
