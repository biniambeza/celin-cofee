import { useState, useEffect } from "react";
import { Menu, X, Search, ChevronDown, ChevronRight } from "lucide-react";
import logoEmblem from "../assets/logo-emblem.png";

export default function Navbar({ currentPage = "home", setCurrentPage, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#EBF6EE]/96 backdrop-blur-md border-b border-[#D2E9D6] shadow-sm py-2.5 sm:py-3"
          : "bg-[#EBF6EE]/92 backdrop-blur-md border-b border-[#D5EAD9]/80 py-3 sm:py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          
          {/* Brand Logo - Leaf & Bean Emblem + Clean Dual-Line Typography matching reference */}
          <button
            type="button"
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2.5 sm:gap-3 group text-left cursor-pointer border-none bg-transparent"
          >
            <div className="h-9 w-9 sm:h-10 sm:w-10 relative shrink-0 flex items-center justify-center">
              <img
                src={logoEmblem}
                alt="Celin Coffee Emblem"
                className="h-full w-auto object-contain transition-transform group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-[#1E2621] font-sans leading-none">
                CELIN COFFEE
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.24em] text-[#387A50] uppercase mt-1 leading-none">
                ETHIOPIAN SPECIALTY
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links matching exact reference */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
            <button
              type="button"
              onClick={() => handleNavClick("home")}
              className={`text-xs sm:text-[13.5px] font-medium tracking-normal transition-colors py-1 cursor-pointer bg-transparent border-none ${
                currentPage === "home"
                  ? "text-[#1E5E3A] font-bold relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-[2px] after:bg-[#1E5E3A] after:rounded-full"
                  : "text-[#2C3830] hover:text-[#1E5E3A]"
              }`}
            >
              Home
            </button>

            <button
              type="button"
              onClick={() => handleNavClick("home", "#story")}
              className="text-xs sm:text-[13.5px] font-medium tracking-normal text-[#2C3830] hover:text-[#1E5E3A] transition-colors py-1 cursor-pointer bg-transparent border-none"
            >
              Our Story
            </button>

            <button
              type="button"
              onClick={() => handleNavClick("home", "#products")}
              className="text-xs sm:text-[13.5px] font-medium tracking-normal text-[#2C3830] hover:text-[#1E5E3A] transition-colors py-1 cursor-pointer bg-transparent border-none flex items-center gap-1"
            >
              <span>Products</span>
              <ChevronDown size={13} className="opacity-75" />
            </button>

            <button
              type="button"
              onClick={() => handleNavClick("home", "#ceremony")}
              className="text-xs sm:text-[13.5px] font-medium tracking-normal text-[#2C3830] hover:text-[#1E5E3A] transition-colors py-1 cursor-pointer bg-transparent border-none"
            >
              Ceremony
            </button>

            <button
              type="button"
              onClick={() => handleNavClick("home", "#export")}
              className="text-xs sm:text-[13.5px] font-medium tracking-normal text-[#2C3830] hover:text-[#1E5E3A] transition-colors py-1 cursor-pointer bg-transparent border-none"
            >
              Export & Quality
            </button>

            <button
              type="button"
              onClick={() => handleNavClick("home", "#contact")}
              className="text-xs sm:text-[13.5px] font-medium tracking-normal text-[#2C3830] hover:text-[#1E5E3A] transition-colors py-1 cursor-pointer bg-transparent border-none"
            >
              Contact
            </button>
          </nav>

          {/* Right Area: Search Icon & Rich Espresso Brown "Request a Quote →" Pill Button */}
          <div className="hidden lg:flex items-center gap-4">
            
            {/* Search Toggle / Input */}
            <div className="relative">
              {isSearchOpen ? (
                <form onSubmit={handleSearchSubmit} className="flex items-center bg-white border border-[#CDE5D1] rounded-full px-3 py-1 text-xs text-[#1E2621] shadow-xs">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search coffees..."
                    className="bg-transparent text-[#1E2621] placeholder-[#5A6D60] focus:outline-none w-32 sm:w-36 text-xs"
                    autoFocus
                  />
                  <button type="submit" className="p-1 text-[#2C3830] hover:text-[#1E5E3A] cursor-pointer border-none bg-transparent">
                    <Search size={13} />
                  </button>
                  <button type="button" onClick={() => setIsSearchOpen(false)} className="p-1 text-[#5A6D60] hover:text-[#1E2621] cursor-pointer border-none bg-transparent">
                    <X size={13} />
                  </button>
                </form>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 text-[#2C3830] hover:text-[#1E5E3A] hover:bg-black/5 rounded-full transition-colors cursor-pointer border-none bg-transparent"
                  aria-label="Search"
                >
                  <Search size={18} />
                </button>
              )}
            </div>

            {/* Reference-matching Rich Espresso Brown Pill CTA Button */}
            <button
              type="button"
              onClick={() => handleNavClick("home", "#contact")}
              className="inline-flex items-center justify-center gap-1.5 bg-[#382319] hover:bg-[#26160F] text-white text-xs sm:text-[13px] font-medium px-5 py-2.5 rounded-full shadow-xs hover:shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Request a Quote</span>
              <span className="text-sm leading-none">→</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl text-[#2C3830] hover:bg-black/5 transition-colors cursor-pointer border-none bg-transparent"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer with matching light mint organic styling */}
      {isOpen && (
        <div className="lg:hidden bg-[#EBF6EE] border-t border-[#D2E9D6] px-6 py-5 shadow-xl flex flex-col gap-2.5 animate-in fade-in slide-in-from-top-4 duration-200 text-[#2C3830]">
          <button
            type="button"
            onClick={() => handleNavClick("home")}
            className={`text-left text-sm font-bold py-2 px-3 rounded-xl cursor-pointer flex items-center justify-between transition-colors ${
              currentPage === "home" ? "text-[#1E5E3A] bg-white/70" : "text-[#2C3830] hover:text-[#1E5E3A]"
            }`}
          >
            <span>Home</span>
            <ChevronRight size={16} className={currentPage === "home" ? "text-[#1E5E3A]" : "text-stone-400"} />
          </button>

          <button
            type="button"
            onClick={() => handleNavClick("home", "#story")}
            className="text-left text-sm font-medium text-[#2C3830] hover:text-[#1E5E3A] py-2 px-3 rounded-xl cursor-pointer flex items-center justify-between transition-colors"
          >
            <span>Our Story</span>
            <ChevronRight size={16} className="text-stone-400" />
          </button>

          <button
            type="button"
            onClick={() => handleNavClick("home", "#products")}
            className="text-left text-sm font-medium text-[#2C3830] hover:text-[#1E5E3A] py-2 px-3 rounded-xl cursor-pointer flex items-center justify-between transition-colors"
          >
            <span>Products</span>
            <ChevronRight size={16} className="text-stone-400" />
          </button>

          <button
            type="button"
            onClick={() => handleNavClick("home", "#ceremony")}
            className="text-left text-sm font-medium text-[#2C3830] hover:text-[#1E5E3A] py-2 px-3 rounded-xl cursor-pointer flex items-center justify-between transition-colors"
          >
            <span>Ceremony</span>
            <ChevronRight size={16} className="text-stone-400" />
          </button>

          <button
            type="button"
            onClick={() => handleNavClick("home", "#export")}
            className="text-left text-sm font-medium text-[#2C3830] hover:text-[#1E5E3A] py-2 px-3 rounded-xl cursor-pointer flex items-center justify-between transition-colors"
          >
            <span>Export & Quality</span>
            <ChevronRight size={16} className="text-stone-400" />
          </button>

          <button
            type="button"
            onClick={() => handleNavClick("home", "#contact")}
            className="text-left text-sm font-medium text-[#2C3830] hover:text-[#1E5E3A] py-2 px-3 rounded-xl cursor-pointer flex items-center justify-between transition-colors"
          >
            <span>Contact</span>
            <ChevronRight size={16} className="text-stone-400" />
          </button>

          <button
            type="button"
            onClick={() => handleNavClick("home", "#contact")}
            className="mt-3 flex items-center justify-center gap-2 bg-[#382319] hover:bg-[#26160F] text-white font-medium py-2.5 rounded-full shadow-md transition-all cursor-pointer text-xs"
          >
            <span>Request a Quote</span>
            <span className="text-sm leading-none">→</span>
          </button>
        </div>
      )}
    </header>
  );
}
