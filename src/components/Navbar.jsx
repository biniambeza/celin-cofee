import { useState } from "react";
import { Menu, X, Coffee } from "lucide-react";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Export Process", href: "#export-process" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState("Home");

    const toggleMenu = () => setIsOpen((prev) => !prev);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <a
                        href="#home"
                        onClick={closeMenu}
                        className="flex items-center gap-2 text-xl font-bold text-amber-900"
                    >
                        <Coffee className="text-amber-700" size={24} />
                        Celin Coffee
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setActive(link.name)}
                                className={`text-sm font-medium transition-colors duration-200 ${active === link.name
                                        ? "text-amber-700 font-semibold"
                                        : "text-gray-700 hover:text-amber-700"
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="bg-amber-800 text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-amber-900 transition-colors duration-200"
                        >
                            Request Quote
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700 hover:text-amber-700"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
                    <div className="flex flex-col gap-4 pt-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => {
                                    setActive(link.name);
                                    closeMenu();
                                }}
                                className={`text-base font-medium ${active === link.name ? "text-amber-700" : "text-gray-700"
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={closeMenu}
                            className="bg-amber-800 text-white text-center font-semibold px-5 py-2 rounded-full hover:bg-amber-900 transition-colors duration-200"
                        >
                            Request Quote
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
