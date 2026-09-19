import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CoffeeModal from "./components/CoffeeModal";
import { MessageCircle, X } from "lucide-react";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [preselectedCoffee, setPreselectedCoffee] = useState("");
  const [modalCoffee, setModalCoffee] = useState(null);
  const [showBanner, setShowBanner] = useState(true);

  const handleNavigate = (page, coffeeName = "", hash = "") => {
    if (page === "story") {
      setCurrentPage("home");
      setTimeout(() => {
        const el = document.querySelector("#story");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 100);
      return;
    }

    if (page === "catalog" || page === "products") {
      setCurrentPage("home");
      setTimeout(() => {
        const el = document.querySelector("#products");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 100);
      return;
    }

    if (page === "contact") {
      if (coffeeName) {
        setPreselectedCoffee(coffeeName);
      }
      setCurrentPage("home");
      setTimeout(() => {
        const el = document.querySelector("#contact");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
        }
      }, 100);
      return;
    }

    setCurrentPage(page);
    if (coffeeName) {
      setPreselectedCoffee(coffeeName);
    }
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 selection:bg-[#0C6052] selection:text-white relative">
      
      {/* 1. Top Trade Announcement Bar (shown on catalog & contact pages, preserving Home transparent hero) */}
      {showBanner && currentPage !== "home" && (
        <div className="bg-[#0C6052] text-white text-xs py-2 px-4 text-center font-bold relative z-50 flex items-center justify-center gap-2">
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
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onNavigate={handleNavigate}
      />

      {/* 3. Main Page Content Routing */}
      <div className="flex-1">
        {currentPage === "home" && (
          <Home
            onNavigate={handleNavigate}
            onSelectCoffee={(coffee) => setModalCoffee(coffee)}
            preselectedCoffee={preselectedCoffee}
          />
        )}
      </div>

      {/* 4. Interactive Coffee Specs Modal */}
      {modalCoffee && (
        <CoffeeModal
          coffee={modalCoffee}
          onClose={() => setModalCoffee(null)}
          onInquire={(name) => handleNavigate("contact", name)}
        />
      )}

      {/* 5. Floating Fast WhatsApp / Trade Desk Inquiries */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          type="button"
          onClick={() => handleNavigate("contact", "Instant WhatsApp Inquiry")}
          className="group flex items-center gap-2.5 bg-[#0C6052] hover:bg-[#08483D] text-white px-4 py-3 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 border-2 border-white cursor-pointer"
          title="Fast Export Inquiries"
        >
          <div className="relative">
            <MessageCircle size={22} className="text-white" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#85E288] rounded-full ring-2 ring-[#0C6052]" />
          </div>
          <span className="text-xs font-extrabold hidden sm:inline pr-1">
            Trade Desk
          </span>
        </button>
      </div>

      {/* 6. Footer */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}

export default App;
