import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import logoEmblem from "../assets/logo-emblem.png";

const NAV_ITEMS = [
  { id: "home", label: "Home", hash: "" },
  { id: "story", label: "Our Story", hash: "#story" },
  { id: "products", label: "Products", hash: "#products" },
  { id: "about", label: "About", hash: "#about" },
  { id: "journey", label: "Quality & Export", hash: "#journey" },
  { id: "contact", label: "Contact", hash: "#contact" },
];

export default function Navbar({ setCurrentPage, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });

  const navContainerRef = useRef(null);
  const navItemRefs = useRef({});

  // Recalculate indicator position & width on active section change or resize
  const updateIndicator = useCallback(() => {
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
  }, [activeSection]);

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
  }, [updateIndicator]);

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

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? "bg-[#EBF6EE]/96 backdrop-blur-md border-b border-[#D2E9D6] shadow-xs py-1.5 sm:py-2"
          : "bg-[#EBF6EE]/92 backdrop-blur-md border-b border-[#D5EAD9]/80 py-2 sm:py-2.5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11 sm:h-12">

          {/* Brand Logo - Leaf & Bean Emblem + Clean Dual-Line Typography */}
          <button
            type="button"
            onClick={() => handleNavClick("home", "", "home")}
            className="flex items-center gap-2 sm:gap-2.5 group text-left cursor-pointer border-none bg-transparent"
          >
            <div className="h-7.5 w-7.5 sm:h-8 sm:w-8 relative shrink-0 flex items-center justify-center">
              <img
                src={logoEmblem}
                alt="Celin Coffee Emblem"
                className="h-full w-auto object-contain transition-transform group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold tracking-tight text-[#1E2621] font-sans leading-none">
                CELIN COFFEE
              </span>
              <span className="text-[8.5px] sm:text-[9px] font-semibold tracking-[0.22em] text-[#387A50] uppercase mt-0.5 leading-none">
                ETHIOPIAN SPECIALTY
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links with Smoothly Movable Active Line */}
          <nav
            ref={navContainerRef}
            className="hidden lg:flex items-center gap-5 xl:gap-6 relative py-1 ml-auto mr-5"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  ref={(el) => (navItemRefs.current[item.id] = el)}
                  type="button"
                  onClick={() => handleNavClick("home", item.hash, item.id)}
                  className={`text-xs sm:text-[13px] tracking-normal transition-colors py-0.5 cursor-pointer bg-transparent border-none relative z-10 ${isActive
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
              className="absolute bottom-0 h-[2px] bg-[#1E5E3A] rounded-full transition-all duration-300 ease-out pointer-events-none"
              style={{
                left: `${indicatorStyle.left}px`,
                width: `${indicatorStyle.width}px`,
                opacity: indicatorStyle.opacity,
              }}
            />
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-1.5 rounded-lg text-[#2C3830] hover:bg-black/5 transition-colors cursor-pointer border-none bg-transparent"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
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
                className={`text-left text-sm py-2 px-3 rounded-xl cursor-pointer flex items-center justify-between transition-colors ${isActive
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
