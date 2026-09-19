import { useState, useEffect, useRef } from "react";
import { Menu, X, Search, ChevronRight } from "lucide-react";
import logoEmblem from "../assets/logo-emblem.png";

const NAV_ITEMS = [
  { id: "home", label: "Home", hash: "" },
  { id: "story", label: "Our Story", hash: "#story" },
  { id: "products", label: "Products", hash: "#products" },
  { id: "about", label: "About", hash: "#about" },
  { id: "journey", label: "Quality & Export", hash: "#journey" },
  { id: "contact", label: "Contact", hash: "#contact" },
];

export default function Navbar({ currentPage = "home", setCurrentPage, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });

  const navContainerRef = useRef(null);
  const navItemRefs = useRef({});

  // Recalculate indicator position & width on active section change or resize
  const updateIndicator = () => {
    const activeBtn = navItemRefs.current[activeSection];
    const container = navContainerRef.current;
    if (activeBtn && container) {
      const btnRect = activeBtn.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      setIndicatorStyle({
        left: btnRect.left - containerRect.left,
        width: btnRect.width,
        opacity: 1,
      });
    }
  };

  useEffect(() => {
    // Immediate and small delay update to ensure DOM fonts and layouts are mounted
    updateIndicator();
    const timer = setTimeout(updateIndicator, 100);

    const handleResize = () => updateIndicator();
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, [activeSection]);

  // Scroll spy to dynamically track active component on page scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Check if user is near bottom of the page -> set to contact
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 90;
      if (isBottom) {
        setActiveSection("contact");
        return;
      }

      // Offset for sticky navbar + breathing room
      const scrollPos = window.scrollY + 140;
      const sectionIds = ["home", "story", "products", "about", "journey", "contact"];
      
      let currentSection = "home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            currentSection = id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (target, hash, sectionId) => {
    setIsOpen(false);
    setIsSearchOpen(false);

    if (sectionId) {
      setActiveSection(sectionId);
    }

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
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      handleNavClick("home", "#products", "products");
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#EBF6EE]/96 backdrop-blur-md border-b border-[#D2E9D6] shadow-xs py-2.5 sm:py-3"
          : "bg-[#EBF6EE]/92 backdrop-blur-md border-b border-[#D5EAD9]/80 py-3 sm:py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">

          {/* Brand Logo - Leaf & Bean Emblem + Clean Dual-Line Typography */}
          <button
            type="button"
            onClick={() => handleNavClick("home", "", "home")}
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

          {/* Desktop Navigation Links with Smoothly Movable Active Line */}
          <nav
            ref={navContainerRef}
            className="hidden lg:flex items-center gap-7 xl:gap-8 relative py-1.5"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  ref={(el) => (navItemRefs.current[item.id] = el)}
                  type="button"
                  onClick={() => handleNavClick("home", item.hash, item.id)}
                  className={`text-xs sm:text-[13.5px] tracking-normal transition-colors py-1 cursor-pointer bg-transparent border-none relative z-10 ${
                    isActive
                      ? "text-[#1E5E3A] font-bold"
                      : "text-[#2C3830] hover:text-[#1E5E3A] font-medium"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            {/* Movable Horizontal Indicator Line */}
            <span
              className="absolute bottom-0 h-[2.5px] bg-[#1E5E3A] rounded-full transition-all duration-300 ease-out pointer-events-none"
              style={{
                left: `${indicatorStyle.left}px`,
                width: `${indicatorStyle.width}px`,
                opacity: indicatorStyle.opacity,
              }}
            />
          </nav>

          {/* Right Area: Search Icon & Rich Espresso Brown "Request a Quote →" Pill Button */}
          <div className="hidden lg:flex items-center gap-4">

            {/* Search Toggle / Input */}
            <div className="relative">
              {isSearchOpen ? (
                <form
                  onSubmit={handleSearchSubmit}
                  className="flex items-center bg-white border border-[#CDE5D1] rounded-full px-3 py-1 text-xs text-[#1E2621] shadow-2xs"
                >
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search coffees..."
                    className="bg-transparent text-[#1E2621] placeholder-[#5A6D60] focus:outline-none w-32 sm:w-36 text-xs"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="p-1 text-[#2C3830] hover:text-[#1E5E3A] cursor-pointer border-none bg-transparent"
                  >
                    <Search size={13} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsSearchOpen(false)}
                    className="p-1 text-[#5A6D60] hover:text-[#1E2621] cursor-pointer border-none bg-transparent"
                  >
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

            {/* Rich Espresso Brown Pill CTA Button */}
            <button
              type="button"
              onClick={() => handleNavClick("home", "#contact", "contact")}
              className="inline-flex items-center justify-center gap-1.5 bg-[#382319] hover:bg-[#26160F] text-white text-xs sm:text-[13px] font-medium px-5 py-2.5 rounded-full shadow-2xs hover:shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
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

      {/* Mobile Drawer with matching active styling indicator */}
      {isOpen && (
        <div className="lg:hidden bg-[#EBF6EE] border-t border-[#D2E9D6] px-6 py-5 shadow-xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-4 duration-200 text-[#2C3830]">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick("home", item.hash, item.id)}
                className={`text-left text-sm py-2 px-3 rounded-xl cursor-pointer flex items-center justify-between transition-colors ${
                  isActive
                    ? "text-[#1E5E3A] font-bold bg-white/80 border-l-4 border-[#1E5E3A] shadow-2xs"
                    : "text-[#2C3830] hover:text-[#1E5E3A] font-medium"
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight
                  size={16}
                  className={isActive ? "text-[#1E5E3A]" : "text-stone-400"}
                />
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => handleNavClick("home", "#contact", "contact")}
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
