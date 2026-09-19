import { useState } from "react";
import { Menu, X, Search, ChevronDown, ChevronRight } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar({ currentPage = "home", setCurrentPage, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleNavClick = (target, hash) => {
    setIsOpen(false);
    setIsSearchOpen(false);
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

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      handleNavClick("catalog");
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[#0C4533]/92 backdrop-blur-md border-b border-white/10 z-50 transition-all shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo - clean placement on forest green */}
          <button
            type="button"
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3 group text-left cursor-pointer border-none bg-transparent"
          >
            <img
              src={logo}
              alt="Celin Coffee - Ethiopian Specialty Roasted Coffee Exporter"
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
            />
          </button>

          {/* Desktop Navigation Links - matching reference structure and styling */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              type="button"
              onClick={() => handleNavClick("home")}
              className={`text-sm transition-colors py-1 cursor-pointer bg-transparent border-none ${
                currentPage === "home"
                  ? "text-white font-bold relative after:w-1.5 after:h-1.5 after:bg-[#09bd3c] after:rounded-full after:absolute after:-bottom-1.5 after:left-1/2 after:-translate-x-1/2"
                  : "text-white/80 font-medium hover:text-white"
              }`}
            >
              Home
            </button>

            <button
              type="button"
              onClick={() => handleNavClick("home", "#about")}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors py-1 cursor-pointer bg-transparent border-none"
            >
              Our Story
            </button>

            <button
              type="button"
              onClick={() => handleNavClick("catalog")}
              className={`text-sm transition-colors py-1 cursor-pointer bg-transparent border-none flex items-center gap-1 ${
                currentPage === "catalog"
                  ? "text-white font-bold relative after:w-1.5 after:h-1.5 after:bg-[#09bd3c] after:rounded-full after:absolute after:-bottom-1.5 after:left-1/2 after:-translate-x-1/2"
                  : "text-white/80 font-medium hover:text-white"
              }`}
            >
              <span>Products</span>
              <ChevronDown size={14} className="opacity-70" />
            </button>

            <button
              type="button"
              onClick={() => handleNavClick("home", "#export")}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors py-1 cursor-pointer bg-transparent border-none"
            >
              Sustainability
            </button>

            <button
              type="button"
              onClick={() => handleNavClick("home", "#export")}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors py-1 cursor-pointer bg-transparent border-none"
            >
              Blog
            </button>

            <button
              type="button"
              onClick={() => handleNavClick("contact")}
              className={`text-sm transition-colors py-1 cursor-pointer bg-transparent border-none ${
                currentPage === "contact"
                  ? "text-white font-bold relative after:w-1.5 after:h-1.5 after:bg-[#09bd3c] after:rounded-full after:absolute after:-bottom-1.5 after:left-1/2 after:-translate-x-1/2"
                  : "text-white/80 font-medium hover:text-white"
              }`}
            >
              Contact
            </button>

            <button
              type="button"
              onClick={() => handleNavClick("contact")}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors py-1 cursor-pointer bg-transparent border-none"
            >
              Account
            </button>
          </nav>

          {/* Right Area: Search Icon & White Pill "Request a Quote" Button */}
          <div className="hidden lg:flex items-center gap-4">
            
            {/* Search Toggle / Input */}
            <div className="relative">
              {isSearchOpen ? (
                <form onSubmit={handleSearchSubmit} className="flex items-center bg-white/15 border border-white/25 rounded-full px-3 py-1.5 text-xs text-white">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search coffees..."
                    className="bg-transparent text-white placeholder-white/60 focus:outline-none w-32 sm:w-40 text-xs"
                    autoFocus
                  />
                  <button type="submit" className="p-1 text-white/80 hover:text-white cursor-pointer border-none bg-transparent">
                    <Search size={14} />
                  </button>
                  <button type="button" onClick={() => setIsSearchOpen(false)} className="p-1 text-white/60 hover:text-white cursor-pointer border-none bg-transparent">
                    <X size={14} />
                  </button>
                </form>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer border-none bg-transparent"
                  aria-label="Search"
                >
                  <Search size={19} />
                </button>
              )}
            </div>

            {/* Reference-matching White Pill CTA Button with Dark Green Text */}
            <button
              type="button"
              onClick={() => handleNavClick("contact")}
              className="inline-flex items-center justify-center bg-white text-[#0C4533] hover:bg-stone-100 text-xs sm:text-sm font-extrabold px-5 py-2.5 rounded-full shadow-md shadow-black/10 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              Request a Quote
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl text-white hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#093527] border-t border-white/10 px-6 py-5 shadow-2xl flex flex-col gap-2.5 animate-in fade-in slide-in-from-top-4 duration-200 text-white">
          <button
            type="button"
            onClick={() => handleNavClick("home")}
            className={`text-left text-base font-bold py-2.5 px-3 rounded-xl cursor-pointer flex items-center justify-between transition-colors ${
              currentPage === "home" ? "text-white bg-white/10" : "text-white/80 hover:text-white"
            }`}
          >
            <span>Home</span>
            <ChevronRight size={16} className={currentPage === "home" ? "text-[#09bd3c]" : "text-white/30"} />
          </button>

          <button
            type="button"
            onClick={() => handleNavClick("home", "#about")}
            className="text-left text-base font-medium text-white/80 hover:text-white py-2.5 px-3 rounded-xl cursor-pointer flex items-center justify-between transition-colors"
          >
            <span>Our Story</span>
            <ChevronRight size={16} className="text-white/30" />
          </button>

          <button
            type="button"
            onClick={() => handleNavClick("catalog")}
            className={`text-left text-base font-bold py-2.5 px-3 rounded-xl cursor-pointer flex items-center justify-between transition-colors ${
              currentPage === "catalog" ? "text-white bg-white/10" : "text-white/80 hover:text-white"
            }`}
          >
            <span>Products</span>
            <ChevronRight size={16} className={currentPage === "catalog" ? "text-[#09bd3c]" : "text-white/30"} />
          </button>

          <button
            type="button"
            onClick={() => handleNavClick("home", "#export")}
            className="text-left text-base font-medium text-white/80 hover:text-white py-2.5 px-3 rounded-xl cursor-pointer flex items-center justify-between transition-colors"
          >
            <span>Sustainability</span>
            <ChevronRight size={16} className="text-white/30" />
          </button>

          <button
            type="button"
            onClick={() => handleNavClick("home", "#export")}
            className="text-left text-base font-medium text-white/80 hover:text-white py-2.5 px-3 rounded-xl cursor-pointer flex items-center justify-between transition-colors"
          >
            <span>Blog</span>
            <ChevronRight size={16} className="text-white/30" />
          </button>

          <button
            type="button"
            onClick={() => handleNavClick("contact")}
            className={`text-left text-base font-bold py-2.5 px-3 rounded-xl cursor-pointer flex items-center justify-between transition-colors ${
              currentPage === "contact" ? "text-white bg-white/10" : "text-white/80 hover:text-white"
            }`}
          >
            <span>Contact</span>
            <ChevronRight size={16} className={currentPage === "contact" ? "text-[#09bd3c]" : "text-white/30"} />
          </button>

          <button
            type="button"
            onClick={() => handleNavClick("contact")}
            className="text-left text-base font-medium text-white/80 hover:text-white py-2.5 px-3 rounded-xl cursor-pointer flex items-center justify-between transition-colors"
          >
            <span>Account</span>
            <ChevronRight size={16} className="text-white/30" />
          </button>

          <button
            type="button"
            onClick={() => handleNavClick("contact")}
            className="mt-3 text-center bg-white text-[#0C4533] font-extrabold py-3 rounded-full shadow-lg hover:bg-stone-100 transition-all cursor-pointer text-sm"
          >
            Request a Quote
          </button>
        </div>
      )}
    </header>
  );
}
