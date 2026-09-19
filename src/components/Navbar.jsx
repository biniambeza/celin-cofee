import { useState } from "react";
import { Menu, X, Globe, Mail, ChevronRight, Phone } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar({ currentPage = "home", setCurrentPage, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (target, hash) => {
    setIsOpen(false);
    if (onNavigate) {
      onNavigate(target, null, hash);
    } else if (setCurrentPage) {
      setCurrentPage(target);
    }

    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md border-b border-[#0C6052]/15 shadow-xs z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Name */}
          <button
            type="button"
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3 group text-left cursor-pointer border-none bg-transparent"
          >
            <img
              src={logo}
              alt="Celin Coffee - Ethiopian Roasted Coffee Exporter"
              className="h-13 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            <button
              type="button"
              onClick={() => handleNavClick("home")}
              className={`text-sm font-bold transition-colors relative py-1 cursor-pointer bg-transparent border-none ${
                currentPage === "home"
                  ? "text-[#0C6052] after:w-full after:h-[2px] after:bg-[#3BAA3E] after:absolute after:bottom-0 after:left-0"
                  : "text-stone-700 hover:text-[#0C6052]"
              }`}
            >
              Home
            </button>

            <button
              type="button"
              onClick={() => handleNavClick("home", "#about")}
              className="text-sm font-bold text-stone-700 hover:text-[#0C6052] transition-colors py-1 cursor-pointer bg-transparent border-none"
            >
              Heritage & Story
            </button>

            <button
              type="button"
              onClick={() => handleNavClick("catalog")}
              className={`text-sm font-bold transition-colors relative py-1 cursor-pointer bg-transparent border-none ${
                currentPage === "catalog"
                  ? "text-[#0C6052] after:w-full after:h-[2px] after:bg-[#3BAA3E] after:absolute after:bottom-0 after:left-0"
                  : "text-stone-700 hover:text-[#0C6052]"
              }`}
            >
              Coffee Catalog
            </button>

            <button
              type="button"
              onClick={() => handleNavClick("home", "#export")}
              className="text-sm font-bold text-stone-700 hover:text-[#0C6052] transition-colors py-1 cursor-pointer bg-transparent border-none"
            >
              Export Process
            </button>

            <button
              type="button"
              onClick={() => handleNavClick("contact")}
              className={`text-sm font-bold transition-colors relative py-1 cursor-pointer bg-transparent border-none ${
                currentPage === "contact"
                  ? "text-[#0C6052] after:w-full after:h-[2px] after:bg-[#3BAA3E] after:absolute after:bottom-0 after:left-0"
                  : "text-stone-700 hover:text-[#0C6052]"
              }`}
            >
              Contact & Trade Desk
            </button>
          </nav>

          {/* CTA & Direct Phone/Quote */}
          <div className="hidden lg:flex items-center gap-5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-stone-600 bg-stone-100 px-3 py-1.5 rounded-full">
              <Globe size={14} className="text-[#3BAA3E]" />
              <span>FOB Djibouti • Worldwide</span>
            </div>

            <button
              type="button"
              onClick={() => handleNavClick("contact")}
              className="inline-flex items-center gap-2 bg-[#0C6052] text-white text-sm font-extrabold px-5 py-2.5 rounded-full hover:bg-[#08483D] shadow-sm hover:shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <Mail size={15} />
              <span>Request Quote</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl text-stone-700 hover:text-[#0C6052] hover:bg-stone-100 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-stone-100 px-6 py-5 shadow-xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <button
            type="button"
            onClick={() => handleNavClick("home")}
            className={`text-left text-base font-bold py-2 border-b border-stone-50 cursor-pointer flex items-center justify-between ${
              currentPage === "home" ? "text-[#0C6052]" : "text-stone-700"
            }`}
          >
            <span>Home</span>
            <ChevronRight size={16} className="text-stone-300" />
          </button>

          <button
            type="button"
            onClick={() => handleNavClick("home", "#about")}
            className="text-left text-base font-bold text-stone-700 py-2 border-b border-stone-50 cursor-pointer flex items-center justify-between"
          >
            <span>Heritage & Story</span>
            <ChevronRight size={16} className="text-stone-300" />
          </button>

          <button
            type="button"
            onClick={() => handleNavClick("catalog")}
            className={`text-left text-base font-bold py-2 border-b border-stone-50 cursor-pointer flex items-center justify-between ${
              currentPage === "catalog" ? "text-[#0C6052]" : "text-stone-700"
            }`}
          >
            <span>Coffee Catalog</span>
            <ChevronRight size={16} className="text-stone-300" />
          </button>

          <button
            type="button"
            onClick={() => handleNavClick("home", "#export")}
            className="text-left text-base font-bold text-stone-700 py-2 border-b border-stone-50 cursor-pointer flex items-center justify-between"
          >
            <span>Export Process</span>
            <ChevronRight size={16} className="text-stone-300" />
          </button>

          <button
            type="button"
            onClick={() => handleNavClick("contact")}
            className={`text-left text-base font-bold py-2 border-b border-stone-50 cursor-pointer flex items-center justify-between ${
              currentPage === "contact" ? "text-[#0C6052]" : "text-stone-700"
            }`}
          >
            <span>Contact & Trade Desk</span>
            <ChevronRight size={16} className="text-stone-300" />
          </button>

          <button
            type="button"
            onClick={() => handleNavClick("contact")}
            className="mt-3 text-center bg-[#0C6052] text-white font-extrabold py-3.5 rounded-2xl shadow-md hover:bg-[#08483D] transition-colors cursor-pointer text-sm flex items-center justify-center gap-2"
          >
            <Mail size={16} />
            <span>Request Trade Quote</span>
          </button>
        </div>
      )}
    </header>
  );
}
