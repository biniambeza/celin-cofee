import { useState, useEffect } from "react";
import { Menu, X, Search, ChevronDown, ChevronRight } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar({ currentPage = "home", setCurrentPage, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // Header background: Transparent over hero image, with subtle top scrim; solid on scroll or non-home
  const isTransparent = currentPage === "home" && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-gradient-to-b from-black/85 via-black/35 to-transparent border-b border-white/5 py-3.5 sm:py-4"
          : "bg-[#0C4533]/95 backdrop-blur-md border-b border-white/10 shadow-lg py-2.5 sm:py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          
          {/* Brand Logo - Boldly visible with high-contrast badge and prominent white typography */}
          <button
            type="button"
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3 group text-left cursor-pointer border-none bg-transparent"
          >
            <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-white p-1 flex items-center justify-center shadow-lg shadow-black/50 ring-1 ring-white/30 group-hover:scale-105 transition-transform shrink-0">
              <img
                src={logo}
                alt="Celin Coffee Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black tracking-wider text-white uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] leading-none">
                CELIN COFFEE
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] font-extrabold text-[#09bd3c] drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] uppercase mt-0.5">
                ETHIOPIAN SPECIALTY
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links - Small text size matching reference image */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <button
              type="button"
              onClick={() => handleNavClick("home")}
              className={`text-xs sm:text-[13px] font-semibold tracking-wide transition-colors py-1 cursor-pointer bg-transparent border-none ${
                currentPage === "home"
                  ? "text-[#E06428] font-bold"
                  : "text-white/85 hover:text-white"
              }`}
            >
              Home
            </button>

            <button
              type="button"
              onClick={() => handleNavClick("home", "#about")}
              className="text-xs sm:text-[13px] font-semibold tracking-wide text-white/85 hover:text-white transition-colors py-1 cursor-pointer bg-transparent border-none"
            >
              Our Story
            </button>

            <button
              type="button"
              onClick={() => handleNavClick("catalog")}
              className={`text-xs sm:text-[13px] font-semibold tracking-wide transition-colors py-1 cursor-pointer bg-transparent border-none flex items-center gap-1 ${
                currentPage === "catalog"
                  ? "text-[#E06428] font-bold"
                  : "text-white/85 hover:text-white"
              }`}
            >
              <span>Products</span>
              <ChevronDown size={12} className="opacity-70" />
            </button>

            <button
              type="button"
              onClick={() => handleNavClick("home", "#ceremony")}
              className="text-xs sm:text-[13px] font-semibold tracking-wide text-white/85 hover:text-white transition-colors py-1 cursor-pointer bg-transparent border-none"
            >
              Ceremony
            </button>

            <button
              type="button"
              onClick={() => handleNavClick("home", "#export")}
              className="text-xs sm:text-[13px] font-semibold tracking-wide text-white/85 hover:text-white transition-colors py-1 cursor-pointer bg-transparent border-none"
            >
              Export & Quality
            </button>

            <button
              type="button"
              onClick={() => handleNavClick("contact")}
              className={`text-xs sm:text-[13px] font-semibold tracking-wide transition-colors py-1 cursor-pointer bg-transparent border-none ${
                currentPage === "contact"
                  ? "text-[#E06428] font-bold"
                  : "text-white/85 hover:text-white"
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Right Area: Search Icon & White Pill "Request a Quote" Button */}
          <div className="hidden lg:flex items-center gap-4">
            
            {/* Search Toggle / Input */}
            <div className="relative">
              {isSearchOpen ? (
                <form onSubmit={handleSearchSubmit} className="flex items-center bg-black/40 backdrop-blur-md border border-white/25 rounded-full px-3 py-1 text-xs text-white">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search coffees..."
                    className="bg-transparent text-white placeholder-white/60 focus:outline-none w-32 sm:w-36 text-xs"
                    autoFocus
                  />
                  <button type="submit" className="p-1 text-white/80 hover:text-white cursor-pointer border-none bg-transparent">
                    <Search size={13} />
                  </button>
                  <button type="button" onClick={() => setIsSearchOpen(false)} className="p-1 text-white/60 hover:text-white cursor-pointer border-none bg-transparent">
                    <X size={13} />
                  </button>
                </form>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 text-white/85 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer border-none bg-transparent"
                  aria-label="Search"
                >
                  <Search size={17} />
                </button>
              )}
            </div>

            {/* Reference-matching White Pill CTA Button */}
            <button
              type="button"
              onClick={() => handleNavClick("contact")}
              className="inline-flex items-center justify-center bg-white text-[#0C4533] hover:bg-stone-100 text-xs font-extrabold px-4 py-2 rounded-full shadow-md shadow-black/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              Request a Quote
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl text-white hover:bg-white/10 transition-colors cursor-pointer border-none bg-transparent"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#093527]/98 backdrop-blur-xl border-t border-white/10 px-6 py-5 shadow-2xl flex flex-col gap-2.5 animate-in fade-in slide-in-from-top-4 duration-200 text-white">
          <button
            type="button"
            onClick={() => handleNavClick("home")}
            className={`text-left text-sm font-bold py-2 px-3 rounded-xl cursor-pointer flex items-center justify-between transition-colors ${
              currentPage === "home" ? "text-[#E06428] bg-white/10" : "text-white/80 hover:text-white"
            }`}
          >
            <span>Home</span>
            <ChevronRight size={16} className={currentPage === "home" ? "text-[#E06428]" : "text-white/30"} />
          </button>

          <button
            type="button"
            onClick={() => handleNavClick("home", "#about")}
            className="text-left text-sm font-medium text-white/80 hover:text-white py-2 px-3 rounded-xl cursor-pointer flex items-center justify-between transition-colors"
          >
            <span>Our Story</span>
            <ChevronRight size={16} className="text-white/30" />
          </button>

          <button
            type="button"
            onClick={() => handleNavClick("catalog")}
            className={`text-left text-sm font-bold py-2 px-3 rounded-xl cursor-pointer flex items-center justify-between transition-colors ${
              currentPage === "catalog" ? "text-[#E06428] bg-white/10" : "text-white/80 hover:text-white"
            }`}
          >
            <span>Products</span>
            <ChevronRight size={16} className={currentPage === "catalog" ? "text-[#E06428]" : "text-white/30"} />
          </button>

          <button
            type="button"
            onClick={() => handleNavClick("home", "#ceremony")}
            className="text-left text-sm font-medium text-white/80 hover:text-white py-2 px-3 rounded-xl cursor-pointer flex items-center justify-between transition-colors"
          >
            <span>Ceremony</span>
            <ChevronRight size={16} className="text-white/30" />
          </button>

          <button
            type="button"
            onClick={() => handleNavClick("home", "#export")}
            className="text-left text-sm font-medium text-white/80 hover:text-white py-2 px-3 rounded-xl cursor-pointer flex items-center justify-between transition-colors"
          >
            <span>Export & Quality</span>
            <ChevronRight size={16} className="text-white/30" />
          </button>

          <button
            type="button"
            onClick={() => handleNavClick("contact")}
            className={`text-left text-sm font-bold py-2 px-3 rounded-xl cursor-pointer flex items-center justify-between transition-colors ${
              currentPage === "contact" ? "text-[#E06428] bg-white/10" : "text-white/80 hover:text-white"
            }`}
          >
            <span>Contact</span>
            <ChevronRight size={16} className={currentPage === "contact" ? "text-[#E06428]" : "text-white/30"} />
          </button>

          <button
            type="button"
            onClick={() => handleNavClick("contact")}
            className="mt-3 text-center bg-white text-[#0C4533] font-extrabold py-2.5 rounded-full shadow-lg hover:bg-stone-100 transition-all cursor-pointer text-xs"
          >
            Request a Quote
          </button>
        </div>
      )}
    </header>
  );
}
