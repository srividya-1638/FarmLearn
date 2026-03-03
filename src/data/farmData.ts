import vegetablesImg from "@/assets/vegetables.png";
import treesImg from "@/assets/trees.jpeg";
import flowersImg from "@/assets/flowers.jpeg";
import fruitsImg from "@/assets/fruits.jpeg";
import animalsImg from "@/assets/animals.jpeg";

export type FarmCategory = "vegetables" | "trees" | "flowers" | "fruits" | "animals";

export interface FarmItem {
  id: string;
  name: string;
  category: FarmCategory;
  emoji: string;
  image: string;
  season: string;
  bestMonths: string[];
  duration: string;
  investmentPerAcre: string;
  profitRange: string;
  description: string;
  steps: string[];
  pesticides: string[];
  suggestions: string[];
  marketCondition: string;
  waterNeeds: string;
  soilType: string;
  animalCount?: boolean;
}

export const farmCategories = [

  {
    id: "vegetables" as FarmCategory,
    label: "Vegetables",
    image: vegetablesImg,
    color: "from-green-600 to-green-400",
    description: "Fresh vegetables from your farm"
  },

  {
    id: "trees" as FarmCategory,
    label: "Trees",
    image: treesImg,
    color: "from-emerald-700 to-emerald-500",
    description: "Timber and plantation trees"
  },

  {
    id: "flowers" as FarmCategory,
    label: "Flowers",
    image: flowersImg,
    color: "from-pink-500 to-rose-400",
    description: "Beautiful flowers for market"
  },

  {
    id: "fruits" as FarmCategory,
    label: "Fruits",
    image: fruitsImg,
    color: "from-orange-500 to-yellow-400",
    description: "Delicious fruits cultivation"
  },

  {
    id: "animals" as FarmCategory,
    label: "Animals",
    image: animalsImg,
    color: "from-amber-600 to-amber-400",
    description: "Animal husbandry & farming"
  },

];

export const farmItems: FarmItem[] = [
  // VEGETABLES
  {
    id: "tomato", name: "Tomato", category: "vegetables",
    image: "/src/assets/tamota.jpeg",
    season: "Rabi & Kharif", bestMonths: ["June", "July", "October", "November"],
    duration: "60-90 days", investmentPerAcre: "₹30,000 - ₹50,000",
    profitRange: "₹80,000 - ₹2,00,000 per acre",
    description: "Tomato is one of the most profitable vegetable crops. It grows well in warm climates and is used in almost every kitchen.",
    steps: ["Prepare nursery beds and sow seeds", "Transplant seedlings after 25-30 days", "Maintain spacing of 60x45 cm", "Apply organic manure and fertilizers", "Irrigate every 3-4 days", "Stake plants when they grow tall", "Harvest when fruits turn red"],
    pesticides: ["Neem oil for whiteflies", "Copper fungicide for blight", "Imidacloprid for leaf miners"],
    suggestions: ["Use drip irrigation to save water", "Mulch around plants to retain moisture", "Prune lower leaves for better air circulation"],
    marketCondition: "High demand year-round, prices peak in summer",
    waterNeeds: "Moderate - 400-600mm", soilType: "Well-drained loamy soil, pH 6.0-7.0"
  },
  {
    id: "chilli", name: "Chilli", category: "vegetables",
    image: "/src/assets/chilli.jpeg",
    season: "Kharif", bestMonths: ["May", "June", "July"],
    duration: "90-120 days", investmentPerAcre: "₹25,000 - ₹40,000",
    profitRange: "₹60,000 - ₹1,50,000 per acre",
    description: "Chilli is a spice crop with excellent market demand. Both green and dry chillies are highly profitable.",
    steps: ["Prepare nursery and sow seeds", "Transplant after 35-40 days", "Space plants 45x30 cm apart", "Apply NPK fertilizers", "Irrigate regularly", "Harvest green chillies every 7-10 days", "For dry chillies, let fruits mature on plant"],
    pesticides: ["Malathion for thrips", "Mancozeb for leaf spots", "Neem oil spray for aphids"],
    suggestions: ["Intercrop with onion for better returns", "Use raised beds in waterlogged areas"],
    marketCondition: "Steady demand, prices surge during festivals",
    waterNeeds: "Moderate - 500-600mm", soilType: "Sandy loam to clay loam, pH 6.0-7.0"
  },
  {
    id: "onion", name: "Onion", category: "vegetables",
    image: "/src/assets/onion.jpeg",
    season: "Rabi & Kharif", bestMonths: ["October", "November", "December"],
    duration: "120-150 days", investmentPerAcre: "₹35,000 - ₹55,000",
    profitRange: "₹1,00,000 - ₹3,00,000 per acre",
    description: "Onion is a staple crop with massive demand. Prices can be very rewarding during shortage seasons.",
    steps: ["Prepare nursery beds", "Transplant seedlings at 45 days", "Space 15x10 cm", "Apply sulphur-based fertilizers", "Stop irrigation 10 days before harvest", "Cure bulbs in shade for 7-10 days", "Store in well-ventilated place"],
    pesticides: ["Carbendazim for purple blotch", "Profenofos for thrips", "Mancozeb for downy mildew"],
    suggestions: ["Store properly for off-season selling at higher prices", "Use mulching to control weeds"],
    marketCondition: "Highly volatile prices, can be very profitable",
    waterNeeds: "Low to Moderate - 350-550mm", soilType: "Well-drained sandy loam, pH 6.0-7.5"
  },
  {
    id: "brinjal", name: "Brinjal", category: "vegetables", 
    image: "/src/assets/brinjal.jpeg",
    season: "Year-round", bestMonths: ["February", "March", "June", "July"],
    duration: "90-120 days", investmentPerAcre: "₹20,000 - ₹35,000",
    profitRange: "₹60,000 - ₹1,20,000 per acre",
    description: "Brinjal (eggplant) is a popular vegetable that can be grown throughout the year in tropical climates.",
    steps: ["Sow seeds in nursery", "Transplant after 30 days", "Space 60x60 cm", "Apply FYM and NPK", "Irrigate every 3-5 days", "Support heavy plants with stakes", "Harvest when fruits are tender and glossy"],
    pesticides: ["BT spray for fruit borer", "Imidacloprid for whiteflies", "Copper oxychloride for wilt"],
    suggestions: ["Choose hybrid varieties for better yield", "Install pheromone traps for pest management"],
    marketCondition: "Steady demand in local markets",
    waterNeeds: "Moderate - 450-600mm", soilType: "Well-drained fertile soil, pH 5.5-6.5"
  },
  {
    id: "potato", name: "Potato", category: "vegetables",
    image: "/src/assets/potato.jpeg",
    season: "Rabi", bestMonths: ["October", "November"],
    duration: "90-120 days", investmentPerAcre: "₹40,000 - ₹60,000",
    profitRange: "₹80,000 - ₹1,80,000 per acre",
    description: "Potato is the most consumed vegetable worldwide. It requires cool weather and well-prepared soil.",
    steps: ["Select certified seed tubers", "Cut tubers with 2-3 eyes each", "Plant in furrows 20cm deep", "Earth up soil around plants twice", "Apply balanced NPK fertilizers", "Irrigate at regular intervals", "Harvest when leaves turn yellow"],
    pesticides: ["Mancozeb for late blight", "Imidacloprid for aphids", "Metalaxyl for early blight"],
    suggestions: ["Cold storage can increase profits by 2-3x", "Use treated seeds to prevent diseases"],
    marketCondition: "Consistent demand, cold storage enables year-round selling",
    waterNeeds: "High - 500-700mm", soilType: "Sandy loam, well-drained, pH 5.5-6.5"
  },
  {
    id: "carrot", name: "Carrot", category: "vegetables", 
    image: "/src/assets/carrot.jpeg",
    season: "Rabi", bestMonths: ["October", "November"],
    duration: "70-90 days", investmentPerAcre: "₹15,000 - ₹30,000",
    profitRange: "₹50,000 - ₹1,20,000 per acre",
    description: "Carrot is a nutritious root vegetable that grows well in cool weather with deep, loose soil.",
    steps: ["Prepare deep, well-tilled soil", "Sow seeds directly 1cm deep", "Thin seedlings to 5cm apart", "Apply phosphorus-rich fertilizers", "Irrigate regularly but avoid waterlogging", "Harvest when tops are 1-2cm in diameter"],
    pesticides: ["Neem cake for nematodes", "Copper fungicide for leaf blight"],
    suggestions: ["Mix sand in clay soil for better root growth", "Sow in raised beds for straighter carrots"],
    marketCondition: "Good demand in winter, premium for organic",
    waterNeeds: "Moderate - 350-500mm", soilType: "Deep sandy loam, pH 6.0-6.8"
  },
  {
    id: "ladiesfinger", name: "Ladies Finger", category: "vegetables", 
    image: "/src/assets/ladiesfinger.jpeg",
    season: "Kharif & Summer", bestMonths: ["February", "March", "June", "July"],
    duration: "45-65 days", investmentPerAcre: "₹15,000 - ₹25,000",
    profitRange: "₹40,000 - ₹1,00,000 per acre",
    description: "Ladies finger (Okra/Bhindi) is a warm-season crop that grows quickly and gives continuous harvest.",
    steps: ["Soak seeds overnight before sowing", "Sow directly in field 30x45 cm spacing", "Apply organic manure", "Irrigate every 4-5 days", "Harvest tender pods every 2-3 days", "Remove old pods to encourage new growth"],
    pesticides: ["Neem oil for jassids", "Malathion for fruit borers"],
    suggestions: ["Pick pods when 7-8cm long for best quality", "Rotate with legumes for soil health"],
    marketCondition: "Good summer demand, prices stable",
    waterNeeds: "Moderate - 400-500mm", soilType: "Well-drained loamy, pH 6.0-6.8"
  },
  {
    id: "drumstick", name: "Drumstick", category: "vegetables",
    image: "/src/assets/drumstick.jpeg",
    season: "Year-round", bestMonths: ["June", "July", "February", "March"],
    duration: "6-8 months (first harvest)", investmentPerAcre: "₹10,000 - ₹20,000",
    profitRange: "₹80,000 - ₹2,00,000 per acre",
    description: "Drumstick (Moringa) is a miracle tree that requires minimal care and gives high returns for many years.",
    steps: ["Plant cuttings or seedlings 3x3m apart", "Apply FYM at planting time", "Irrigate weekly in first 3 months", "Prune at 1m height for branching", "Harvest pods when 30-45cm long", "Annual pruning to maintain tree shape"],
    pesticides: ["Neem oil for pod borers", "Rarely needs chemical pesticides"],
    suggestions: ["Intercrop with short-duration vegetables", "Leaves are also marketable as superfood"],
    marketCondition: "Growing demand, especially moringa powder exports",
    waterNeeds: "Low - drought tolerant", soilType: "Grows in almost any soil, pH 6.0-7.0"
  },
  // TREES
  {
    id: "bamboo", name: "Bamboo", category: "trees",
    image: "/src/assets/bamboo.jpeg",
    season: "Monsoon", bestMonths: ["June", "July", "August"],
    duration: "3-5 years for first harvest", investmentPerAcre: "₹30,000 - ₹50,000",
    profitRange: "₹2,00,000 - ₹5,00,000 per acre (after 5 years)",
    description: "Bamboo is called 'Green Gold'. It grows fast, requires minimal care, and has massive industrial demand.",
    steps: ["Select tissue-cultured saplings", "Plant in pits of 60x60x60 cm", "Space 5x4m between plants", "Apply organic manure in pits", "Irrigate in first 2 years", "Thin clumps after 3 years", "Harvest mature culms selectively"],
    pesticides: ["Generally pest-resistant", "Chlorpyrifos for bamboo borer if needed"],
    suggestions: ["Government subsidies available under NMBA", "Can be intercropped for first 2 years"],
    marketCondition: "Growing demand for furniture, construction, paper",
    waterNeeds: "Moderate initially, drought-tolerant later", soilType: "Well-drained loamy, pH 5.0-6.5"
  },
  {
    id: "eucalyptus", name: "Eucalyptus", category: "trees", 
    image: "/src/assets/eucalyptus.jpeg",
    season: "Monsoon", bestMonths: ["June", "July"],
    duration: "5-7 years", investmentPerAcre: "₹15,000 - ₹25,000",
    profitRange: "₹3,00,000 - ₹6,00,000 per acre (after 5 years)",
    description: "Eucalyptus is a fast-growing timber tree with high demand in paper and plywood industries.",
    steps: ["Get clonal saplings from nursery", "Plant in pits at 3x1.5m spacing", "Apply DAP fertilizer at planting", "Water weekly for first year", "No pruning needed", "Harvest at 5-7 years by clear felling"],
    pesticides: ["Generally pest-free", "Gall wasp treatment if needed"],
    suggestions: ["Ideal for boundary planting", "Paper mills often give buyback guarantee"],
    marketCondition: "Consistent demand from paper/plywood industry",
    waterNeeds: "Low after establishment", soilType: "Adapts to most soils, pH 5.0-7.5"
  },
  {
    id: "coconut", name: "Coconut", category: "trees", 
    image: "/src/assets/coconut.jpeg",
    season: "Monsoon", bestMonths: ["June", "July", "August"],
    duration: "5-6 years for first fruiting", investmentPerAcre: "₹40,000 - ₹60,000",
    profitRange: "₹1,50,000 - ₹3,00,000 per acre per year",
    description: "Coconut is called 'Kalpavriksha' - the tree of life. Every part is useful and profitable.",
    steps: ["Select quality seedlings from certified nursery", "Dig pits 1x1x1m at 7.5x7.5m spacing", "Fill with FYM, neem cake, sand", "Plant seedlings and stake them", "Irrigate regularly using drip/basin", "Apply fertilizers in two splits", "Harvest every 45-60 days"],
    pesticides: ["Crown cleaning for rhinoceros beetle", "Neem cake for red palm weevil", "Bordeaux mixture for bud rot"],
    suggestions: ["Intercrop with banana, cocoa, or pepper", "Coconut water and copra both have markets"],
    marketCondition: "Strong demand for coconut oil, water, and derivatives",
    waterNeeds: "High - regular irrigation needed", soilType: "Deep loamy, laterite, coastal sandy, pH 5.5-7.0"
  },
  {
    id: "teak", name: "Teak", category: "trees",
    image: "/src/assets/teak.jpeg",
    season: "Monsoon", bestMonths: ["June", "July"],
    duration: "15-20 years for full maturity", investmentPerAcre: "₹20,000 - ₹35,000",
    profitRange: "₹30,00,000 - ₹50,00,000 per acre (at 20 years)",
    description: "Teak is the king of timber. A long-term investment with very high returns on maturity.",
    steps: ["Get quality stumps from forest nursery", "Plant at 2x2m or 3x3m spacing", "Water in first 2-3 monsoons", "Weed regularly for 3 years", "Thin at year 5 and 10", "Final harvest at 15-20 years"],
    pesticides: ["Defoliator management with BT spray", "Trunk borer treatment with kerosene-cotton plugs"],
    suggestions: ["Thinning timber also has value", "Some states require felling permission"],
    marketCondition: "Premium timber, always in high demand",
    waterNeeds: "Low after establishment", soilType: "Deep well-drained, alluvial soil, pH 6.5-7.5"
  },
  // FLOWERS
  {
    id: "marigold", name: "Marigold", category: "flowers",
    image: "/src/assets/marigold.jpeg",
    season: "Year-round", bestMonths: ["August", "September", "January", "February"],
    duration: "45-60 days", investmentPerAcre: "₹15,000 - ₹25,000",
    profitRange: "₹60,000 - ₹1,50,000 per acre per season",
    description: "Marigold is the most popular commercial flower in India. Essential for festivals and religious ceremonies.",
    steps: ["Prepare nursery and sow seeds", "Transplant at 30-40 days", "Space 30x30 cm", "Pinch terminal bud for more branches", "Apply NPK fertilizers", "Harvest flowers every 3-4 days", "Process for loose flower or garland market"],
    pesticides: ["Neem oil for leaf miners", "Mancozeb for powdery mildew"],
    suggestions: ["Time planting for Diwali/Dussehra for best prices", "African marigold gives larger flowers"],
    marketCondition: "Festival season prices 3-5x higher",
    waterNeeds: "Moderate - 300-400mm", soilType: "Well-drained fertile soil, pH 7.0-7.5"
  },
  {
    id: "rose", name: "Rose", category: "flowers", 
    image: "/src/assets/rose.jpeg",
    season: "Year-round", bestMonths: ["October", "November"],
    duration: "Perennial, first flowers in 3-4 months", investmentPerAcre: "₹2,00,000 - ₹4,00,000",
    profitRange: "₹3,00,000 - ₹8,00,000 per acre per year",
    description: "Rose is the queen of flowers with year-round demand for bouquets, perfumes, and rose water.",
    steps: ["Select budded plants of commercial varieties", "Plant at 60x60 cm in beds", "Install drip irrigation", "Prune annually in October", "Apply regular fertilizers monthly", "Harvest buds at tight bud stage", "Grade and pack for market"],
    pesticides: ["Triazophos for thrips", "Wettable sulphur for powdery mildew", "Neem oil for aphids"],
    suggestions: ["Polyhouse cultivation gives premium quality", "Valentine's Day pricing is 10x normal"],
    marketCondition: "Consistent demand, premium for red varieties",
    waterNeeds: "Moderate to High", soilType: "Rich loamy soil, pH 6.0-6.5"
  },
  {
    id: "jasmine", name: "Jasmine", category: "flowers", 
    image: "/src/assets/jasmine.jpeg",
    season: "March to November", bestMonths: ["February", "March"],
    duration: "Perennial, flowers from 6 months", investmentPerAcre: "₹50,000 - ₹80,000",
    profitRange: "₹2,00,000 - ₹5,00,000 per acre per year",
    description: "Jasmine (Mogra/Malli) is highly valued for garlands, perfumes, and jasmine tea. Yields for 15+ years.",
    steps: ["Plant stem cuttings or layers", "Space 1.5x1.5m between plants", "Apply FYM at planting", "Irrigate regularly", "Prune in December-January", "Harvest buds early morning", "Market same day for freshness"],
    pesticides: ["Monocrotophos for budworm", "Dimethoate for mites"],
    suggestions: ["Pick buds before they open for best price", "South Indian markets pay premium"],
    marketCondition: "High prices during wedding season",
    waterNeeds: "Moderate", soilType: "Well-drained sandy loam, pH 6.5-7.5"
  },
  {
    id: "hibiscus", name: "Hibiscus", category: "flowers", 
    image: "/src/assets/hybiscus.jpeg",
    season: "Year-round in tropics", bestMonths: ["March", "April"],
    duration: "Perennial, flowers from 4 months", investmentPerAcre: "₹20,000 - ₹35,000",
    profitRange: "₹50,000 - ₹1,50,000 per acre per year",
    description: "Hibiscus is valued for ornamental use, herbal tea, and traditional medicine. Easy to grow.",
    steps: ["Plant stem cuttings in monsoon", "Space 1.5x1.5m", "Apply organic manure", "Water regularly", "Prune to maintain shape", "Harvest fresh flowers daily"],
    pesticides: ["Neem oil for aphids", "Malathion for mealy bugs"],
    suggestions: ["Dried hibiscus tea market is growing", "Multiple color varieties increase market appeal"],
    marketCondition: "Growing demand for herbal products",
    waterNeeds: "Moderate", soilType: "Well-drained, pH 6.0-7.0"
  },
  {
    id: "sunflower", name: "Sunflower", category: "flowers", 
    image: "/src/assets/sunflower.jpeg",
    season: "Kharif & Rabi", bestMonths: ["June", "July", "January"],
    duration: "85-100 days", investmentPerAcre: "₹12,000 - ₹20,000",
    profitRange: "₹30,000 - ₹80,000 per acre",
    description: "Sunflower is grown for oilseeds and ornamental purposes. It's short-duration and drought-tolerant.",
    steps: ["Sow seeds directly at 60x30 cm", "Apply DAP at sowing", "Irrigate at critical stages", "Earthing up at 30 days", "Harvest when back of head turns brown", "Dry and thresh seeds"],
    pesticides: ["Quinalphos for head borer", "Mancozeb for rust"],
    suggestions: ["Bee pollination increases yield by 30%", "Ornamental varieties fetch premium as cut flowers"],
    marketCondition: "Oil extraction has steady demand",
    waterNeeds: "Low to Moderate", soilType: "Well-drained, pH 6.0-7.5"
  },
  {
    id: "chrysanthemum", name: "chrysanthemum", category: "flowers",
    image: "/src/assets/chamanthi.jpeg",
    season: "Winter & Spring", bestMonths: ["October", "November"],
    duration: "90-120 days", investmentPerAcre: "₹3,00,000 - ₹5,00,000",
    profitRange: "₹5,00,000 - ₹12,00,000 per acre",
    description: "Lily is a premium cut flower with high market value. Ideal for polyhouse cultivation.",
    steps: ["Purchase quality bulbs", "Plant bulbs 10-15cm deep", "Maintain cool temperature", "Apply calcium-rich fertilizers", "Stake tall varieties", "Harvest when first bud shows color", "Grade and export"],
    pesticides: ["Fungicide drench for bulb rot", "Neem oil for aphids"],
    suggestions: ["Polyhouse cultivation gives best results", "Export market pays very high prices"],
    marketCondition: "Premium flower, high demand in metros",
    waterNeeds: "Moderate - avoid waterlogging", soilType: "Well-drained sandy loam, pH 6.0-7.0"
  },
  // FRUITS
  {
    id: "mango", name: "Mango", category: "fruits", 
    image: "/src/assets/mango.jpeg",
    season: "Summer", bestMonths: ["July", "August"],
    duration: "5-7 years for first fruiting", investmentPerAcre: "₹30,000 - ₹50,000",
    profitRange: "₹2,00,000 - ₹5,00,000 per acre per year",
    description: "Mango is the king of fruits. India is the largest producer. A single tree can yield for 100+ years.",
    steps: ["Select grafted saplings of popular varieties", "Plant at 10x10m spacing in monsoon", "Dig 1x1x1m pits", "Apply FYM and neem cake in pits", "Irrigate for first 3 years", "Prune dead wood annually", "Harvest when shoulder develops on fruit"],
    pesticides: ["Imidacloprid for hopper", "Carbendazim for anthracnose", "Wettable sulphur for powdery mildew"],
    suggestions: ["Alphonso and Kesar fetch premium prices", "Mango pulp processing adds value"],
    marketCondition: "Massive seasonal demand, export potential",
    waterNeeds: "Low after establishment", soilType: "Deep alluvial, well-drained, pH 5.5-7.5"
  },
  {
    id: "banana", name: "Banana", category: "fruits",
    image: "/src/assets/banana.jpeg",
    season: "Year-round", bestMonths: ["June", "July", "October"],
    duration: "10-14 months", investmentPerAcre: "₹60,000 - ₹1,00,000",
    profitRange: "₹1,50,000 - ₹4,00,000 per acre",
    description: "Banana gives the highest yield among fruit crops. Quick returns and year-round demand.",
    steps: ["Select tissue-cultured plants", "Plant in pits at 1.8x1.8m", "Apply heavy organic manure", "Irrigate via drip every 2-3 days", "Prop plants when bunch forms", "De-hand for uniform sizing", "Harvest when fingers turn round"],
    pesticides: ["Carbofuran for nematodes", "Mancozeb for Sigatoka leaf spot", "Pseudomonas for Panama wilt prevention"],
    suggestions: ["Tissue culture plants give uniform yield", "Banana fiber and waste have value too"],
    marketCondition: "Year-round demand, stable prices",
    waterNeeds: "Very High - 1200-1800mm", soilType: "Rich loamy, well-drained, pH 6.5-7.5"
  },
  {
    id: "orange", name: "Orange", category: "fruits", 
    image:"/src/assets/orange.jpeg",
    season: "Winter", bestMonths: ["July", "August"],
    duration: "4-5 years for fruiting", investmentPerAcre: "₹40,000 - ₹70,000",
    profitRange: "₹1,50,000 - ₹3,50,000 per acre per year",
    description: "Orange (Nagpur Orange/Mosambi) is a popular citrus fruit with excellent processing potential.",
    steps: ["Get budded saplings from certified nursery", "Plant at 6x6m spacing", "Apply citrus-specific micronutrients", "Basin irrigation until establishment", "Spray growth regulators for fruit retention", "Harvest when fruit turns orange"],
    pesticides: ["Neem oil for citrus psylla", "Copper fungicide for canker", "Dimethoate for leaf miner"],
    suggestions: ["Nagpur and Coorg regions are ideal", "Juice extraction adds value"],
    marketCondition: "Good demand, juice market growing",
    waterNeeds: "Moderate", soilType: "Well-drained loamy, pH 6.0-7.5"
  },
  {
    id: "grapes", name: "Grapes", category: "fruits", 
    image: "/src/assets/grapes.jpeg",
    season: "Winter (harvest)", bestMonths: ["January", "February"],
    duration: "2-3 years for fruiting", investmentPerAcre: "₹3,00,000 - ₹5,00,000",
    profitRange: "₹5,00,000 - ₹15,00,000 per acre per year",
    description: "Grapes are a high-value fruit with excellent export potential. Requires skilled management.",
    steps: ["Install bower/trellis system", "Plant rooted cuttings at 3x1.5m", "Train vines on trellis", "Prune twice a year (April & October)", "Apply regulated irrigation", "Thin bunches for quality", "Harvest at optimum sugar level"],
    pesticides: ["Sulphur for powdery mildew", "Mancozeb for downy mildew", "Carbendazim for anthracnose"],
    suggestions: ["Export quality grapes need cold chain", "Raisin making is profitable alternative"],
    marketCondition: "Premium export market available, high domestic demand",
    waterNeeds: "High with drip irrigation", soilType: "Well-drained sandy loam, pH 6.5-7.5"
  },
  {
    id: "guava", name: "Guava", category: "fruits", 
    image: "/src/assets/guava.jpeg",
    season: "Year-round", bestMonths: ["July", "August"],
    duration: "2-3 years for fruiting", investmentPerAcre: "₹25,000 - ₹40,000",
    profitRange: "₹1,00,000 - ₹3,00,000 per acre per year",
    description: "Guava is called the 'apple of tropics'. Hardy, easy to grow, and gives fruit quickly.",
    steps: ["Select air-layered or grafted plants", "Plant at 6x6m in monsoon", "Apply organic manure regularly", "Irrigate during dry periods", "Prune to maintain open center", "Bag fruits for premium quality", "Harvest when skin turns yellowish"],
    pesticides: ["Spray for fruit fly using methyl eugenol traps", "Copper spray for wilt prevention"],
    suggestions: ["Pink guava varieties fetch premium", "Guava jam and jelly processing is profitable"],
    marketCondition: "Increasing demand for pink/Taiwan varieties",
    waterNeeds: "Low to Moderate", soilType: "Adapts to most soils, pH 5.0-7.5"
  },
  {
    id: "watermelon", name: "Watermelon", category: "fruits",
    image: "/src/assets/watermelon.jpeg",
    season: "Summer", bestMonths: ["January", "February", "March"],
    duration: "70-90 days", investmentPerAcre: "₹25,000 - ₹40,000",
    profitRange: "₹60,000 - ₹2,00,000 per acre",
    description: "Watermelon is a short-duration, high-demand summer crop. Grows on river beds and sandy soils.",
    steps: ["Prepare raised beds or channels", "Sow seeds at 2x1.5m spacing", "Apply balanced fertilizers", "Irrigate via drip or furrow", "Place straw under fruits", "Tap test for ripeness", "Harvest when tendril dries"],
    pesticides: ["Imidacloprid for aphids", "Mancozeb for downy mildew"],
    suggestions: ["River bed cultivation is cheapest", "Seedless varieties command premium"],
    marketCondition: "Very high summer demand, prices peak in April-May",
    waterNeeds: "Moderate to High", soilType: "Sandy loam, river bed, pH 6.0-7.0"
  },
  {
    id: "papaya", name: "Papaya", category: "fruits",
    image: "/src/assets/papaya.jpeg",
    season: "Year-round", bestMonths: ["September", "October", "February"],
    duration: "8-10 months for first harvest", investmentPerAcre: "₹30,000 - ₹50,000",
    profitRange: "₹2,00,000 - ₹5,00,000 per acre per year",
    description: "Papaya is a quick-return fruit crop. It fruits within a year and continues for 2-3 years.",
    steps: ["Raise seedlings in polybags", "Transplant at 2.5x2.5m spacing", "Plant 3 seedlings per pit, remove males later", "Apply NPK monthly", "Irrigate via drip system", "Harvest green for papain or ripe for fruit", "Replant after 3 years"],
    pesticides: ["Dimethoate for papaya mealybug", "Avoid waterlogging to prevent root rot"],
    suggestions: ["Red Lady variety is most popular hybrid", "Papain extraction is very profitable"],
    marketCondition: "Consistent demand, growing export for papain",
    waterNeeds: "Moderate but regular", soilType: "Well-drained light loamy, pH 6.5-7.0"
  },
  // ANIMALS
  {
    id: "chicken", name: "Chicken", category: "animals",  animalCount: true,
    image: "/src/assets/chicken.jpeg",
    season: "Year-round", bestMonths: ["Any month"],
    duration: "Broiler: 6-8 weeks, Layer: 72 weeks", investmentPerAcre: "₹1,00,000 - ₹5,00,000 (for 500-1000 birds)",
    profitRange: "₹50,000 - ₹2,00,000 per batch",
    description: "Poultry farming is one of the fastest growing sectors. Can start small and scale up quickly.",
    steps: ["Build or rent a poultry shed", "Get chicks from reliable hatchery", "Set up feeders and waterers", "Maintain temperature for chicks (35°C first week)", "Vaccinate on schedule", "Feed balanced poultry feed", "Market at 6-8 weeks (broilers)"],
    pesticides: ["Vaccines: Marek's, Newcastle, IBD", "Antibiotics only if prescribed by vet"],
    suggestions: ["Start with 200-500 birds", "Desi/country chicken fetches 2x price", "NABARD provides subsidized loans"],
    marketCondition: "Ever-growing demand for chicken meat and eggs",
    waterNeeds: "20-30 liters per 100 birds per day", soilType: "N/A - Shed based"
  },
  {
    id: "goat", name: "Goat", category: "animals",  animalCount: true,
    image: "/src/assets/goat.jpeg",
    season: "Year-round", bestMonths: ["Any month"],
    duration: "8-12 months for market weight", investmentPerAcre: "₹50,000 - ₹2,00,000 (for 20-50 goats)",
    profitRange: "₹1,00,000 - ₹4,00,000 per year",
    description: "Goat farming is called 'poor man's cow'. Low investment, high demand, and can be done on small land.",
    steps: ["Build elevated shed with drainage", "Buy quality breeds (Sirohi, Boer, Black Bengal)", "Feed grazing + concentrate feed", "Provide clean drinking water", "Deworm every 3 months", "Vaccinate against PPR, Goat Pox", "Market before festivals for best price"],
    pesticides: ["Dewormers: Albendazole, Fenbendazole", "Vaccines: PPR, Goat Pox, Enterotoxaemia"],
    suggestions: ["Stall-fed goats grow faster", "Bakri Eid demand peaks prices", "Government subsidies available"],
    marketCondition: "High and growing demand, especially during festivals",
    waterNeeds: "4-5 liters per goat per day", soilType: "N/A - Pasture and shed based"
  },
  {
    id: "sheep", name: "Sheep", category: "animals", animalCount: true,
    image: "/src/assets/sheep.jpeg",
    season: "Year-round", bestMonths: ["Any month"],
    duration: "8-12 months for market weight", investmentPerAcre: "₹40,000 - ₹1,50,000 (for 20-40 sheep)",
    profitRange: "₹80,000 - ₹3,00,000 per year",
    description: "Sheep farming provides meat, wool, and manure. They are hardy and can graze on rough terrain.",
    steps: ["Set up simple shed with grazing area", "Purchase quality breeds", "Allow grazing 6-8 hours daily", "Supplement with concentrate feed", "Shear wool twice a year", "Deworm regularly", "Market for meat at 10-12 months"],
    pesticides: ["Dewormers quarterly", "Vaccines: PPR, Blue Tongue, Sheep Pox"],
    suggestions: ["Dorper and Suffolk breeds for meat", "Merino for wool production"],
    marketCondition: "Steady meat demand, wool has niche market",
    waterNeeds: "3-4 liters per sheep per day", soilType: "N/A - Pasture based"
  },
  {
    id: "cow", name: "Cow", category: "animals", animalCount: true,
    image: "/src/assets/cow.jpeg",
    season: "Year-round", bestMonths: ["Any month"],
    duration: "2-3 years for first milk (heifer)", investmentPerAcre: "₹2,00,000 - ₹5,00,000 (for 5-10 cows)",
    profitRange: "₹3,00,000 - ₹8,00,000 per year",
    description: "Dairy farming is a reliable income source. Milk has year-round demand with growing prices.",
    steps: ["Build proper cattle shed with ventilation", "Buy quality milch breeds (HF, Jersey, Gir, Sahiwal)", "Provide balanced feed with green fodder", "Ensure clean drinking water always", "Maintain hygiene and regular veterinary checkup", "Machine milking for quality milk", "Sell to dairy cooperative or directly"],
    pesticides: ["Deworming every 3-4 months", "Vaccines: FMD, HS, BQ, Brucellosis", "Tick treatment as needed"],
    suggestions: ["Gir cow milk fetches premium (A2 milk)", "Biogas from cow dung saves fuel costs", "NABARD dairy loans available"],
    marketCondition: "Growing demand for milk and dairy products",
    waterNeeds: "50-80 liters per cow per day", soilType: "N/A - Fodder land needed"
  },
  {
    id: "buffalo", name: "Buffalo", category: "animals",  animalCount: true,
    image: "/src/assets/buffalow.jpeg",
    season: "Year-round", bestMonths: ["Any month"],
    duration: "3-4 years for first milk", investmentPerAcre: "₹3,00,000 - ₹6,00,000 (for 5-10 buffaloes)",
    profitRange: "₹4,00,000 - ₹10,00,000 per year",
    description: "Buffalo milk has higher fat content and fetches premium price. Murrah buffalo is the top breed.",
    steps: ["Build spacious shed with wallowing area", "Buy Murrah, Mehsana or Surti breed", "Feed green fodder, dry fodder, concentrate", "Provide wallowing facility in summer", "Regular veterinary care", "Milk twice daily", "Supply to dairy or make ghee/paneer"],
    pesticides: ["Same as cow - deworming and vaccination", "Extra care for udder health"],
    suggestions: ["Buffalo ghee commands premium price", "Murrah buffalo gives 15-20 liters/day", "Government schemes available for dairy"],
    marketCondition: "Premium for buffalo milk products",
    waterNeeds: "60-100 liters per buffalo per day", soilType: "N/A - Needs wallowing area"
  },
  {
    id: "fish", name: "Fish", category: "animals",  animalCount: true,
    image:"/src/assets/fish.jpeg",
    season: "Year-round", bestMonths: ["June", "July"],
    duration: "6-12 months per cycle", investmentPerAcre: "₹50,000 - ₹2,00,000 (per pond acre)",
    profitRange: "₹1,50,000 - ₹4,00,000 per acre per year",
    description: "Fish farming (aquaculture) is booming with growing demand for protein. Can be done in ponds or tanks.",
    steps: ["Construct or prepare pond (minimum 0.1 acre)", "Lime and fertilize the pond", "Stock fingerlings at right density", "Feed supplementary fish feed", "Maintain water quality", "Partial harvesting from 6 months", "Complete harvesting at 10-12 months"],
    pesticides: ["CIFAX for bacterial infections", "KMnO4 for parasites", "Lime treatment for pH balance"],
    suggestions: ["Polyculture (Rohu+Catla+Mrigal) maximizes yield", "Biofloc technology reduces water needs", "Prawns are highly profitable"],
    marketCondition: "Growing demand, prices increasing yearly",
    waterNeeds: "Pond: continuous water supply", soilType: "Clay bottom ponds ideal"
  },
  {
    id: "honeybee", name: "Honeybee", category: "animals", 
    image: "/src/assets/honeybee.jpeg",
    season: "Year-round", bestMonths: ["October", "November", "February"],
    duration: "Continuous production", investmentPerAcre: "₹10,000 - ₹30,000 (for 10-20 boxes)",
    profitRange: "₹50,000 - ₹2,00,000 per year",
    description: "Beekeeping is a low-investment, high-return activity. It also helps in pollination of nearby crops.",
    steps: ["Buy bee colonies in standard boxes", "Place boxes near flowering crops", "Inspect hives weekly for health", "Manage queen cells during swarming season", "Extract honey using centrifugal extractor", "Filter and bottle honey", "Migrate hives to follow flowering seasons"],
    pesticides: ["Formic acid for Varroa mite", "Sulphur strips for wax moth", "Keep hives clean"],
    suggestions: ["Organic honey fetches 2-3x price", "Beeswax and royal jelly are bonus products", "KVIC provides training and support"],
    marketCondition: "High demand for pure honey, export growing",
    waterNeeds: "Bees need water nearby", soilType: "N/A - Near flowering vegetation"
  },
];

export const seasonalCalendar = [
  { month: "January", crops: ["Potato", "Carrot", "Sunflower", "Watermelon", "Grapes (harvest)"], tip: "Winter season - ideal for rabi crops. Start nursery for summer vegetables." },
  { month: "February", crops: ["Ladies Finger", "Brinjal", "Marigold", "Watermelon", "Papaya", "Honeybee (extraction)"], tip: "Prepare land for summer crops. Good time for flower planting." },
  { month: "March", crops: ["Ladies Finger", "Brinjal", "Hibiscus", "Watermelon"], tip: "Summer crop sowing begins. Harvest rabi crops." },
  { month: "April", crops: ["Hibiscus", "Summer vegetables"], tip: "Hot season starts. Ensure irrigation systems are ready." },
  { month: "May", crops: ["Chilli", "Prepare land for monsoon"], tip: "Prepare for monsoon planting. Get seeds and saplings ready." },
  { month: "June", crops: ["Tomato", "Chilli", "Drumstick", "Bamboo", "Eucalyptus", "Coconut", "Fish"], tip: "Monsoon begins! Plant all kharif crops and tree saplings." },
  { month: "July", crops: ["Tomato", "Chilli", "Brinjal", "All Trees", "Mango (planting)", "Banana", "Orange (planting)", "Guava (planting)"], tip: "Peak planting season. Good rainfall helps establishment." },
  { month: "August", crops: ["Bamboo", "Coconut", "Marigold", "Mango (planting)"], tip: "Continue monsoon planting. Watch for pest buildup." },
  { month: "September", crops: ["Marigold"], tip: "Prepare for rabi season. Start nurseries for winter crops." },
  { month: "October", crops: ["Onion", "Potato", "Banana", "Rose", "Lily", "Honeybee"], tip: "Rabi season begins. Plant winter vegetables and flowers." },
  { month: "November", crops: ["Onion", "Potato", "Carrot", "Tomato", "Rose", "Lily", "Honeybee"], tip: "Continue rabi planting. Good time for flower cultivation." },
  { month: "December", crops: ["Carrot", "Harvest rabi crops"], tip: "Pruning season for perennial trees. Plan next year's cultivation." },
];
