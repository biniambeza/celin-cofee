import { useState } from "react";
import { Menu, X, Globe, Mail } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About Us", href: "#about" },
        { name: "Our Coffee", href: "#coffee" },
        { name: "Export Process", href: "#export" },
        { name: "Certifications", href: "#certifications" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md border-b border-[#0C6052]/15 shadow-xs z-50 transition-all">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Brand Logo using logo.png */}
                    <a href="#home" className="flex items-center gap-3 group">
                        <img
                            src={logo}
                            alt="Celin Coffee - Ethiopian Roasted Coffee Exporter"
                            className="h-14 w-auto object-contain transition-transform group-hover:scale-105"
                        />
                    </a>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden lg:flex items-center gap-7">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-semibold text-stone-700 hover:text-[#0C6052] transition-colors relative py-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#3BAA3E] after:transition-all after:duration-300"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* CTA & Language/Contact */}
                    <div className="hidden lg:flex items-center gap-4">
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 text-xs font-semibold text-stone-600 hover:text-[#0C6052]"
                        >
                            <Globe size={15} className="text-[#3BAA3E]" />
                            <span>Worldwide Export</span>
                        </a>

                        <a
                            href="#quote"
                            className="inline-flex items-center gap-2 bg-[#0C6052] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#08483D] shadow-sm hover:shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <Mail size={15} />
                            <span>Request Quote</span>
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 rounded-lg text-stone-700 hover:text-[#0C6052] hover:bg-stone-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>

                </div>
            </div>

            {/* Mobile Drawer */}
            {isOpen && (
                <div className="lg:hidden bg-white border-t border-stone-100 px-6 py-5 shadow-xl flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-base font-semibold text-stone-700 hover:text-[#0C6052] py-1 border-b border-stone-50"
                        >
                            {link.name}
                        </a>
                    ))}

                    <a
                        href="#quote"
                        onClick={() => setIsOpen(false)}
                        className="mt-3 text-center bg-[#0C6052] text-white font-semibold py-3 rounded-xl shadow-md hover:bg-[#08483D] transition-colors"
                    >
                        Request Export Quote
                    </a>
                </div>
            )}
        </header>
    );
}
