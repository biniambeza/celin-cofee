import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Export Process", path: "/export-process" },
    { name: "Certifications", path: "/certifications" },
    { name: "Contact", path: "/contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prev) => !prev);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link
                        to="/"
                        onClick={closeMenu}
                        className="flex items-center gap-2 text-xl font-bold text-amber-900"
                    >
                        <span className="text-amber-700">☕</span>
                        Highland Export Co.
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-sm font-medium transition-colors duration-200 ${isActive
                                        ? "text-amber-700"
                                        : "text-gray-700 hover:text-amber-700"
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <Link
                            to="/contact"
                            className="bg-amber-800 text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-amber-900 transition-colors duration-200"
                        >
                            Request Quote
                        </Link>
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
                            <NavLink
                                key={link.path}
                                to={link.path}
                                onClick={closeMenu}
                                className={({ isActive }) =>
                                    `text-base font-medium ${isActive ? "text-amber-700" : "text-gray-700"
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <Link
                            to="/contact"
                            onClick={closeMenu}
                            className="bg-amber-800 text-white text-center font-semibold px-5 py-2 rounded-full hover:bg-amber-900 transition-colors duration-200"
                        >
                            Request Quote
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;