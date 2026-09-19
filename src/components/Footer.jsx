import { ArrowRight, Globe, Mail, Phone, MapPin } from "lucide-react";
import logo from "../assets/logo.png";
import jebenaImg from "../assets/jebena-ceremony.jpg";

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

  return (
    <footer id="contact" className="bg-[#21120B] text-[#D8C7B5] border-t border-[#4A2917] relative overflow-hidden font-sans">
      {/* Subtle top dual-tone hairline accent */}
      <div className="h-0.5 w-full bg-gradient-to-r from-[#09bd3c] via-[#C48B58] to-[#09bd3c] opacity-70" />

      {/* Decorative Traditional Ethiopian Buna Ceremony Badge */}
      <div className="absolute -top-3 right-6 lg:right-16 pointer-events-none opacity-80 hidden md:block">
        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#C48B58] shadow-lg">
          <img
            src={jebenaImg}
            alt="Traditional Ethiopian Buna Ceremony"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-9 pb-6 relative z-10">
        
        {/* Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-7 border-b border-[#381F13]">
          
          {/* Column 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <button
              type="button"
              onClick={() => handleLinkClick("home")}
              className="flex items-center gap-2 text-left cursor-pointer border-none bg-transparent group p-0"
            >
              <img
                src={logo}
                alt="Celin Coffee - Ethiopian Roasted Coffee Exporter"
                className="h-10 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow"
              />
            </button>

            <p className="text-xs text-[#BFAEA0] leading-relaxed max-w-sm font-normal">
              Licensed Ethiopian specialty coffee exporter based in Addis Ababa. Supplying high-scoring, single-origin green & profile-roasted beans directly to global roasters.
            </p>

            <div className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#85E288] bg-[#2D1A10] px-3 py-1 rounded-full border border-[#482918]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#09bd3c] animate-pulse" />
              <span>FOB Port of Djibouti • Global Freight</span>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-2.5">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-[#F5EDE4]">
              About
            </h4>
            <ul className="space-y-1.5 text-xs text-[#BFAEA0]">
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick("home", "#about")}
                  className="hover:text-[#F5EDE4] hover:translate-x-0.5 transition-all cursor-pointer bg-transparent border-none p-0 text-left"
                >
                  Origin Beans
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick("catalog")}
                  className="hover:text-[#F5EDE4] hover:translate-x-0.5 transition-all cursor-pointer bg-transparent border-none p-0 text-left"
                >
                  Wholesale Lots
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick("home", "#journey")}
                  className="hover:text-[#F5EDE4] hover:translate-x-0.5 transition-all cursor-pointer bg-transparent border-none p-0 text-left"
                >
                  Quality Standards
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick("home", "#terms")}
                  className="hover:text-[#F5EDE4] hover:translate-x-0.5 transition-all cursor-pointer bg-transparent border-none p-0 text-left"
                >
                  Export Terms
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick("home", "#privacy")}
                  className="hover:text-[#F5EDE4] hover:translate-x-0.5 transition-all cursor-pointer bg-transparent border-none p-0 text-left"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Products (2 cols) */}
          <div className="lg:col-span-2 space-y-2.5">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-[#F5EDE4]">
              Products
            </h4>
            <ul className="space-y-1.5 text-xs text-[#BFAEA0]">
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick("catalog")}
                  className="hover:text-[#F5EDE4] hover:translate-x-0.5 transition-all cursor-pointer bg-transparent border-none p-0 text-left"
                >
                  Single Origin
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick("home", "#export")}
                  className="hover:text-[#F5EDE4] hover:translate-x-0.5 transition-all cursor-pointer bg-transparent border-none p-0 text-left"
                >
                  Sustainability
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick("contact")}
                  className="hover:text-[#F5EDE4] hover:translate-x-0.5 transition-all cursor-pointer bg-transparent border-none p-0 text-left"
                >
                  Careers
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick("contact")}
                  className="hover:text-[#F5EDE4] hover:translate-x-0.5 transition-all cursor-pointer bg-transparent border-none p-0 text-left"
                >
                  Trade Desk
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Trade Desk & Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-2.5 text-xs text-[#BFAEA0]">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-[#F5EDE4]">
              Contact Desk
            </h4>
            
            <div className="space-y-1">
              <p className="text-[11px] text-[#8C7665] font-semibold uppercase tracking-wider">
                Direct Inquiries
              </p>
              <a
                href="mailto:export@celincoffee.com"
                className="text-xs text-[#F5EDE4] hover:text-[#09bd3c] transition-colors font-medium block"
              >
                export@celincoffee.com
              </a>
            </div>

            <div className="space-y-0.5 text-[11.5px] text-[#BFAEA0]">
              <p className="text-[#F5EDE4] font-medium">Addis Ababa Headquarters</p>
              <p>Bole Sub-City, Export District, Ethiopia</p>
              <p>Tel: +251 911 234 567</p>
            </div>

            {/* Selamta Greeting Button */}
            <div className="pt-1.5">
              <button
                type="button"
                onClick={() => handleLinkClick("contact")}
                className="inline-flex items-center gap-2 bg-[#D96B27] hover:bg-[#c35b19] text-white font-extrabold px-5 py-1.5 rounded-full text-xs shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Selamta</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>

        </div>

        {/* Streamlined Bottom Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#9A8676]">
          <p className="font-normal">
            © {currentYear} <span className="font-semibold text-[#D8C7B5]">Celin Coffee</span>. Crafted for Quality-Sourced Origin.
          </p>

          <div className="flex items-center gap-3">
            <span className="text-[#85E288] font-medium">ECTA Licensed</span>
            <span>•</span>
            <span>Addis Ababa, Ethiopia</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
