import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./pages/About";
import Journey from "./pages/Journey";
import OurStorySection from "./components/OurStorySection";
import ProductsSection from "./components/ProductsSection";
import ContactSection from "./components/ContactSection";
import CoffeeModal from "./components/CoffeeModal";
import { X } from "lucide-react";

function App() {
  const [preselectedCoffee, setPreselectedCoffee] = useState("");
  const [modalCoffee, setModalCoffee] = useState(null);
  const [showBanner, setShowBanner] = useState(false);

  const handleNavigate = (target, coffeeName = "") => {
    if (coffeeName) {
      setPreselectedCoffee(coffeeName);
    }
    const targetId = target === "catalog" ? "products" : target;
    if (targetId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 selection:bg-[#1E5E3A] selection:text-white relative">
      
      {/* 1. Top Trade Announcement Bar (Optional) */}
      {showBanner && (
        <div className="bg-[#1E5E3A] text-white text-xs py-2 px-4 text-center font-bold relative z-50 flex items-center justify-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#85E288] animate-pulse" />
          <span>
            2026 Harvest Season Open: Booking Full Containers (FOB Djibouti) & Air Sample Tins Worldwide.
          </span>
          <button
            type="button"
            onClick={() => handleNavigate("contact", "2026 Harvest Container")}
            className="underline hover:text-[#85E288] transition-colors ml-1 cursor-pointer"
          >
            Inquire Trade Desk →
          </button>
          <button
            type="button"
            onClick={() => setShowBanner(false)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white cursor-pointer"
            aria-label="Dismiss banner"
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* 2. Sticky Navbar */}
      <Navbar onNavigate={handleNavigate} />

      {/* 3. Main Single Page: Continuous full-screen components */}
      <main className="flex-1">
        <Hero onNavigate={handleNavigate} />
        <OurStorySection onNavigate={handleNavigate} />
        <ProductsSection
          onNavigate={handleNavigate}
          onSelectCoffee={(coffee) => setModalCoffee(coffee)}
        />
        <About onNavigate={handleNavigate} />
        <Journey onNavigate={handleNavigate} />
        <ContactSection
          preselectedCoffee={preselectedCoffee}
          onNavigate={handleNavigate}
        />
      </main>

      {/* 4. Interactive Coffee Specs Modal */}
      {modalCoffee && (
        <CoffeeModal
          coffee={modalCoffee}
          onClose={() => setModalCoffee(null)}
          onInquire={(name) => handleNavigate("contact", name)}
        />
      )}


      {/* 6. Footer */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}

export default App;
