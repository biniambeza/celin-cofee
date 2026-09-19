import { Mail, Phone, MapPin, ChevronUp } from "lucide-react";
import logoEmblem from "../assets/logo-emblem.png";

export default function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (target, hash) => {
    if (onNavigate) {
      onNavigate(target, null, hash);
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="bg-white text-stone-600 border-t border-stone-200 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-10 border-b border-stone-100">
          
          {/* Column 1: Brand & Origin Mission (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <button
              type="button"
              onClick={() => handleLinkClick("home")}
              className="flex items-center gap-3 text-left cursor-pointer border-none bg-transparent group p-0"
            >
              <div className="h-10 w-10 relative shrink-0 flex items-center justify-center bg-[#F4F9F5] rounded-xl p-1.5 border border-[#DCEBDD] transition-transform group-hover:scale-105">
                <img
                  src={logoEmblem}
                  alt="Celin Coffee Emblem"
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold tracking-tight text-stone-900 font-sans leading-none">
                  CELIN COFFEE
                </span>
                <span className="text-[10px] font-semibold tracking-[0.22em] text-[#1E5E3A] uppercase mt-1 leading-none">
                  ETHIOPIAN SPECIALTY
                </span>
              </div>
            </button>

            <p className="text-xs text-stone-500 leading-relaxed max-w-sm font-normal">
              Direct-origin Ethiopian specialty coffee exporter based in Addis Ababa. Supplying specialty Grade 1 washed & natural micro-lots directly to roasters worldwide.
            </p>
          </div>

          {/* Column 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 font-sans">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-stone-600">
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick("home", "#story")}
                  className="hover:text-[#1E5E3A] hover:translate-x-0.5 transition-all cursor-pointer bg-transparent border-none p-0 text-left"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick("home", "#products")}
                  className="hover:text-[#1E5E3A] hover:translate-x-0.5 transition-all cursor-pointer bg-transparent border-none p-0 text-left"
                >
                  Specialty Coffees
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick("home", "#about")}
                  className="hover:text-[#1E5E3A] hover:translate-x-0.5 transition-all cursor-pointer bg-transparent border-none p-0 text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick("home", "#journey")}
                  className="hover:text-[#1E5E3A] hover:translate-x-0.5 transition-all cursor-pointer bg-transparent border-none p-0 text-left"
                >
                  Quality & Export
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick("home", "#contact")}
                  className="hover:text-[#1E5E3A] hover:translate-x-0.5 transition-all cursor-pointer bg-transparent border-none p-0 text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 font-sans">
              Contact Desk
            </h4>
            
            <div className="space-y-3 text-xs text-stone-600">
              {/* Email */}
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#F4F9F5] text-[#1E5E3A] flex items-center justify-center shrink-0 border border-[#DCEBDD]">
                  <Mail size={13} />
                </div>
                <a
                  href="mailto:export@celincoffee.com"
                  className="text-stone-700 hover:text-[#1E5E3A] transition-colors font-medium text-xs"
                >
                  export@celincoffee.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#F4F9F5] text-[#1E5E3A] flex items-center justify-center shrink-0 border border-[#DCEBDD]">
                  <Phone size={13} />
                </div>
                <a
                  href="tel:+251911234567"
                  className="text-stone-700 hover:text-[#1E5E3A] transition-colors font-medium text-xs"
                >
                  +251 911 234 567
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#F4F9F5] text-[#1E5E3A] flex items-center justify-center shrink-0 border border-[#DCEBDD]">
                  <MapPin size={13} />
                </div>
                <span className="text-stone-700 font-medium text-xs">
                  Bole Sub-City, Addis Ababa, Ethiopia
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p className="font-normal text-center sm:text-left">
            © {currentYear} <span className="font-semibold text-stone-800">Celin Coffee</span>. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#1E5E3A] transition-colors cursor-pointer bg-transparent border-none p-0 text-stone-500 font-medium"
            title="Back to top"
          >
            <span>Back to top</span>
            <ChevronUp size={13} />
          </button>
        </div>

      </div>
    </footer>
  );
}
