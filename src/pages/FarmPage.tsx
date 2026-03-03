import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { farmCategories, farmItems, FarmCategory } from "@/data/farmData";
import FarmItemCard from "@/components/FarmItemCard";

const FarmPage = () => {
  const [searchParams] = useSearchParams();
  const initialCat = (searchParams.get("category") as FarmCategory) || "vegetables";
  const [activeCat, setActiveCat] = useState<FarmCategory>(initialCat);

  const filtered = farmItems.filter((item) => item.category === activeCat);

  return (
    <div className="min-h-screen bg-background pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-display text-3xl font-bold text-foreground mb-6">
          Farm Categories 🌿
        </motion.h1>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {farmCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCat === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {cat.emoji} {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map((item, i) => (
            <FarmItemCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FarmPage;
