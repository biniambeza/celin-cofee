
// Asset imports for coffee varieties
import beansImg from "./assets/coffee-beans.jpg";
import farmImg from "./assets/coffee-farm.jpg";
import processingImg from "./assets/coffee-processing.jpg";
import farmerImg from "./assets/farmer.jpg";
import heroCoffeeImg from "./assets/hero-coffee.jpg";
import heroImg from "./assets/hero.jpg";
import celinPackagingImg from "./assets/celin-packaging.jpg";
import cuppingLabImg from "./assets/cupping-lab.jpg";
import dryingBedsImg from "./assets/drying-beds.jpg";
import brewingPourImg from "./assets/brewing-pour.jpg";

// Export single-origin Ethiopian coffee varieties with rich specifications
export const featuredCoffees = [
  {
    id: "yirgacheffe-g1-washed",
    name: "Yirgacheffe Grade 1 Washed",
    region: "Gedeo Zone, Yirgacheffe",
    altitude: "1,950m - 2,200m",
    process: "Washed",
    roast: "Medium Light",
    score: 88.5,
    flavorNotes: ["Floral Jasmine", "Bergamot", "Lemon Blossom", "Wild Honey"],
    image: celinPackagingImg,
    packageType: "60kg GrainPro Jute & 1kg Foil",
    description: "The crown jewel of Ethiopian Arabica. Grown under natural forest shade in the misty Yirgacheffe highlands, delivering an intensely floral cup with sparkling bergamot tea clarity.",
    harvestPeriod: "November - January",
    screenSize: "15 - 18",
    moisture: "10.6%",
    varietal: "Kurume & Dega (Heirloom)",
    fobPriceRange: "$8.40 - $9.80 / kg",
    attributes: {
      acidity: 9.4,
      sweetness: 9.2,
      body: 8.4,
      aroma: 9.6,
      cleanCup: 9.8,
    },
    recommendedBrew: "Pour-over (V60/Chemex), Aeropress, Batch Filter",
  },
  {
    id: "sidama-specialty-natural",
    name: "Sidama Bensa Specialty Natural",
    region: "Bensa Highland, Sidama",
    altitude: "1,920m - 2,180m",
    process: "Natural",
    roast: "Medium Roast",
    score: 87.8,
    flavorNotes: ["Wild Blueberry", "Cacao Nibs", "Ripe Peach", "Lavender"],
    image: dryingBedsImg,
    packageType: "60kg GrainPro Jute & 1kg Foil",
    description: "Slowly dried for 18-21 days on raised African bamboo beds. Richly sweet with notes of sun-ripened blueberries, silky milk chocolate body, and a vibrant fruit-forward finish.",
    harvestPeriod: "October - December",
    screenSize: "16 - 18",
    moisture: "11.1%",
    varietal: "74112 & 74110 Regional Selections",
    fobPriceRange: "$7.90 - $9.20 / kg",
    attributes: {
      acidity: 8.8,
      sweetness: 9.6,
      body: 9.3,
      aroma: 9.2,
      cleanCup: 9.4,
    },
    recommendedBrew: "Espresso, Cold Brew, French Press, Milk-based drinks",
  },
  {
    id: "guji-anaerobic-microlot",
    name: "Guji Shakisso Anaerobic Micro-Lot",
    region: "Shakisso, Guji Zone",
    altitude: "2,050m - 2,300m",
    process: "Anaerobic",
    roast: "Omni Roast",
    score: 89.4,
    flavorNotes: ["Passion Fruit", "Strawberry Wine", "Papaya", "Madagascar Vanilla"],
    image: cuppingLabImg,
    packageType: "30kg Vacuum Sealed Boxes & 1kg Valve Foil",
    description: "Handpicked at peak 24 Brix sugar ripeness and sealed in anaerobic stainless fermentation tanks for 72 hours. Yields explosive tropical winey aromatics and extraordinary layered sweetness.",
    harvestPeriod: "December - February",
    screenSize: "16 - 19",
    moisture: "10.4%",
    varietal: "Indigenous Wild Heirloom",
    fobPriceRange: "$10.50 - $12.50 / kg",
    attributes: {
      acidity: 9.6,
      sweetness: 9.8,
      body: 8.9,
      aroma: 9.8,
      cleanCup: 9.5,
    },
    recommendedBrew: "Filter Pour-over, Modern Espresso, Competition Cupping",
  },
  {
    id: "harrar-artisan-longberry",
    name: "Harrar Artisan Longberry Grade 1",
    region: "Eastern Highlands, Harrar",
    altitude: "1,800m - 2,100m",
    process: "Natural",
    roast: "Medium Dark",
    score: 86.8,
    flavorNotes: ["Wild Blackberry", "Cardamom Spice", "Dark Chocolate", "Red Wine"],
    image: brewingPourImg,
    packageType: "60kg GrainPro Jute & 1kg Foil",
    description: "Legendary ancient dry-processed Ethiopian Longberry. Distinguished by elongated beans, heavy wine-like complexity, dark cacao, and warming baker's spices.",
    harvestPeriod: "October - January",
    screenSize: "17 - 19 Longberry",
    moisture: "11.0%",
    varietal: "Ancient Harrar Longberry",
    fobPriceRange: "$8.10 - $9.40 / kg",
    attributes: {
      acidity: 8.2,
      sweetness: 9.0,
      body: 9.5,
      aroma: 9.1,
      cleanCup: 9.2,
    },
    recommendedBrew: "Traditional Espresso, Moka Pot, Turkish Style",
  },
  {
    id: "limu-organic-washed",
    name: "Limu Organic Washed Grade 2",
    region: "Jimma Zone, Limu Kosa",
    altitude: "1,850m - 2,050m",
    process: "Washed",
    roast: "Medium Roast",
    score: 86.5,
    flavorNotes: ["Toffee Caramel", "Sweet Tangerine", "Cinnamon", "Apricot"],
    image: farmImg,
    packageType: "60kg GrainPro Jute & 1kg Foil",
    description: "A crowd favorite for balanced specialty roasting. Gentle citric acidity, smooth brown sugar sweetness, and a soothing spiced cedar finish with velvety mouthfeel.",
    harvestPeriod: "November - January",
    screenSize: "15 - 18",
    moisture: "10.8%",
    varietal: "74110 Heirloom Varieties",
    fobPriceRange: "$7.40 - $8.60 / kg",
    attributes: {
      acidity: 8.6,
      sweetness: 9.1,
      body: 8.8,
      aroma: 8.9,
      cleanCup: 9.5,
    },
    recommendedBrew: "Drip Coffee, Blend Base, Light Espresso",
  },
  {
    id: "kaffa-wild-forest",
    name: "Kaffa Biosphere Wild Heirloom",
    region: "Kaffa UNESCO Forest Reserve",
    altitude: "1,750m - 2,000m",
    process: "Natural",
    roast: "Medium Dark",
    score: 87.2,
    flavorNotes: ["Black Tea", "Dried Black Fig", "Clementine", "Herbal Cedar"],
    image: beansImg,
    packageType: "60kg GrainPro Jute & 1kg Foil",
    description: "Harvested directly from wild ancient coffee trees in the primeval rainforest of Kaffa — the birthplace of all Arabica coffee. Deep earthy complexity with candied stone fruit.",
    harvestPeriod: "November - February",
    screenSize: "14 - 17",
    moisture: "10.9%",
    varietal: "Wild Forest Heirlooms",
    fobPriceRange: "$8.20 - $9.50 / kg",
    attributes: {
      acidity: 8.5,
      sweetness: 8.9,
      body: 9.1,
      aroma: 9.3,
      cleanCup: 9.3,
    },
    recommendedBrew: "Filter Pour-over, Syphon, Aeropress",
  },
];

// 4-Step Quality & Export Workflow
export const exportSteps = [
  {
    step: "01",
    title: "Direct Highland Sourcing",
    desc: "We partner directly with certified smallholder farmer cooperatives across Yirgacheffe, Sidama, and Guji. Red cherries are hand-selected at optimal sugar ripeness.",
    highlight: "100% Traceable to Washing Station",
    iconKey: "sparkles",
  },
  {
    step: "02",
    title: "Accredited Lab Cupping",
    desc: "Every lot is evaluated in our Addis Ababa Q-grader laboratory. We measure moisture levels (target <11%), screen uniformity, and perform rigorous SCA cupping panels.",
    highlight: "SCA 86+ Certification Guarantee",
    iconKey: "shield",
  },
  {
    step: "03",
    title: "Precision Artisan Roasting",
    desc: "Slow drum roasters follow computer-profiled temperature curves to gently develop origin character. Available both green and fresh roasted with degassing valve foil.",
    highlight: "Custom Light, Medium & Dark Curves",
    iconKey: "factory",
  },
  {
    step: "04",
    title: "Global Export Logistics",
    desc: "Packed into GrainPro-lined jute sacks or multi-barrier foil. Seamless multimodal dispatch via Djibouti Port (FOB/CIF Ocean) or Bole International Air Freight.",
    highlight: "Full Export Documentation & Phytosanitary",
    iconKey: "truck",
  },
];

// Company Export Highlights & Stats
export const companyStats = [
  { value: "100%", label: "Ethiopian Arabica", sub: "Grade 1 & 2 Specialty Lots" },
  { value: "88.2", label: "Average SCA Score", sub: "Q-Grade Lab Certified" },
  { value: "45+", label: "Export Port Hubs", sub: "Europe, Gulf, Asia & Americas" },
  { value: "2,200m", label: "Highland Elevation", sub: "Rich Volcanic Soils" },
];

// Testimonials from Global Roasters & Importers
export const importerTestimonials = [
  {
    id: 1,
    quote: "Celin Coffee's Yirgacheffe Grade 1 Washed is our flagship single-origin offering in Berlin. The floral jasmine clarity and zero moisture fluctuations upon container arrival made them our primary Ethiopian partner.",
    author: "Lukas Weber",
    role: "Head of Green Coffee Sourcing",
    company: "Nordic Heritage Roasters (Hamburg, Germany)",
    rating: 5,
    flag: "🇩🇪",
  },
  {
    id: 2,
    quote: "The Guji Anaerobic micro-lot cupped at 89.4 PTS in our Tokyo lab. Vacuum packed cartons arrived in pristine condition via air cargo. Exceptional consistency and prompt export documentation.",
    author: "Kenji Sato",
    role: "Director of Roasting",
    company: "Artisan Tokyo Coffee Co. (Tokyo, Japan)",
    rating: 5,
    flag: "🇯🇵",
  },
  {
    id: 3,
    quote: "Direct trade transparency, certified ECTA export paperwork, and magnificent roasted Sidama beans. Their team made container booking through Djibouti frictionless for our specialty cafes across Dubai and Riyadh.",
    author: "Tariq Al-Mansoor",
    role: "Import Operations Manager",
    company: "Gulf Specialty Coffee Group (Dubai, UAE)",
    rating: 5,
    flag: "🇦🇪",
  },
  {
    id: 4,
    quote: "We've sourced specialty containers from South America and Africa for 15 years. Celin Coffee's moisture stability, screen size grading, and roast uniformity rank at the absolute pinnacle.",
    author: "Elena Rostova",
    role: "Lead Quality Auditor",
    company: "Solstice Specialty Roasters (Seattle, USA)",
    rating: 5,
    flag: "🇺🇸",
  },
];

// Frequently Asked Questions for Importers
export const exportFaqs = [
  {
    q: "How can we request pre-shipment cupping samples (PSS)?",
    a: "We dispatch 250g–500g green or sample-roasted coffee tins worldwide via DHL or FedEx Express within 48 hours, complete with moisture readings, screen analysis, and full SCA cupping evaluation sheets.",
  },
  {
    q: "What is your Minimum Order Quantity (MOQ)?",
    a: "For trial orders and air cargo, our MOQ is 1 pallet (10 x 60kg bags / 600kg). For ocean freight, we handle Full Container Loads (FCL 20ft approx. 320 bags / 19.2 MT, or 40ft containers), as well as consolidated LCL shipments for qualified buyers.",
  },
  {
    q: "What international shipping terms (Incoterms) do you operate under?",
    a: "We primarily quote FOB Djibouti Port, but can quote CIF or CFR to all major global container destinations (Hamburg, Rotterdam, Yokohama, Jebel Ali, Long Beach, etc.), as well as expedited CIF Air Freight from Addis Ababa Bole International.",
  },
  {
    q: "Do you offer roasted OEM / Private Label packaging for retail?",
    a: "Yes. In addition to 60kg GrainPro green coffee bags, our roastery facility offers private label roasted coffee in 250g, 500g, and 1kg multi-barrier foil pouches with one-way degassing valves, custom roast profiles, and your custom branding.",
  },
  {
    q: "What certifications accompany each export consignment?",
    a: "Every export shipment includes: Certificate of Origin from the Ethiopian Chamber of Commerce, ECTA Export Permit, Phytosanitary Certificate from the Ministry of Agriculture, Quality Inspection Certificate, Bill of Lading, Commercial Invoice, and Packing List.",
  },
];
