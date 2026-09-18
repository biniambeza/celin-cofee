import { Sparkles, ShieldCheck, Factory, Truck } from "lucide-react";
import beansImg from "./assets/coffee-beans.jpg";
import farmImg from "./assets/coffee-farm.jpg";
import processingImg from "./assets/coffee-processing.jpg";
import farmerImg from "./assets/farmer.jpg";

export const featuredCoffees = [
    {
        id: "yirgacheffe-g1",
        name: "Yirgacheffe Grade 1 Washed",
        region: "Gedeo Zone, Yirgacheffe",
        altitude: "1,950m - 2,200m",
        process: "Washed",
        roast: "Medium Light",
        score: 88.5,
        flavorNotes: ["Floral", "Bergamot", "Jasmine", "Citrus"],
        image: beansImg,
        packageType: "60kg GrainPro Jute & 1kg Retail",
        description: "World-renowned for delicate floral jasmine notes and vibrant citrus bergamot acidity, grown under canopy shade.",
    },
    {
        id: "sidama-specialty",
        name: "Sidama Specialty Natural",
        region: "Bensa, Sidama Region",
        altitude: "1,900m - 2,150m",
        process: "Natural",
        roast: "Medium Roast",
        score: 87.8,
        flavorNotes: ["Blueberry", "Honey", "Dark Chocolate", "Peach"],
        image: processingImg,
        packageType: "60kg GrainPro Jute & 1kg Retail",
        description: "Sun-dried on African raised beds, delivering heavy sweetness, dried blueberries, and a syrupy mouthfeel.",
    },
    {
        id: "guji-anaerobic",
        name: "Guji Anaerobic Micro-Lot",
        region: "Shakisso, Guji Zone",
        altitude: "2,000m - 2,300m",
        process: "Anaerobic",
        roast: "Omni Roast",
        score: 89.2,
        flavorNotes: ["Tropical Fruit", "Winey", "Strawberry", "Vanilla"],
        image: farmImg,
        packageType: "30kg Vacuum Sealed & 1kg Foil",
        description: "Fermented in sealed tanks without oxygen to highlight intense exotic tropical fruits, complex acidity, and floral notes.",
    },
    {
        id: "harrar-horse",
        name: "Harrar Artisan Longberry",
        region: "Eastern Highlands, Harrar",
        altitude: "1,800m - 2,100m",
        process: "Natural / Sun-Dried",
        roast: "Medium Dark",
        score: 86.5,
        flavorNotes: ["Wild Blueberry", "Cardamom", "Dark Cocoa", "Red Wine"],
        image: farmerImg,
        packageType: "60kg GrainPro Jute & 1kg Retail",
        description: "One of the oldest coffee varieties on earth with rustic berry complexity and distinctive spicy cocoa notes.",
    },
];

export const exportSteps = [
    {
        step: "01",
        title: "Direct Highland Sourcing",
        desc: "Handpicked red ripe cherries from smallholder cooperatives across Yirgacheffe, Sidama, and Guji.",
        icon: <Sparkles className="text-[#3BAA3E]" size={24} />,
    },
    {
        step: "02",
        title: "Lab Testing & Cupping",
        desc: "Every batch is verified by certified Q-Graders to ensure SCA 85+ score benchmarks and zero moisture flaws.",
        icon: <ShieldCheck className="text-[#3BAA3E]" size={24} />,
    },
    {
        step: "03",
        title: "Slow Drum Roasting",
        desc: "Precision roasted on computerized drum roasters to unlock regional floral and fruited aroma profiles.",
        icon: <Factory className="text-[#3BAA3E]" size={24} />,
    },
    {
        step: "04",
        title: "Worldwide Delivery",
        desc: "Degassing valve foil bags and GrainPro-lined cartons shipped seamlessly via FOB Djibouti Port or Air Cargo.",
        icon: <Truck className="text-[#3BAA3E]" size={24} />,
    },
];
