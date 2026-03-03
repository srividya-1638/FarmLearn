import { motion } from "framer-motion";
import { Sprout, TreeDeciduous, Flower2, Apple, PawPrint, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { farmCategories, farmItems } from "@/data/farmData";
import FarmItemCard from "@/components/FarmItemCard";

const categoryIcons: Record<string, any> = {
  vegetables: Sprout,
  trees: TreeDeciduous,
  flowers: Flower2,
  fruits: Apple,
  animals: PawPrint,
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background pt-20 pb-20">
      {/* Welcome */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Welcome to <span className="text-primary">FarmLearn</span> 🌾
          </h1>
          <p className="text-muted-foreground">Explore all farming categories and start your journey</p>
        </motion.div>

        {/* Categories */}
        {farmCategories.map((cat, ci) => {
          const Icon = categoryIcons[cat.id];
          const items = farmItems.filter((item) => item.category === cat.id);

          return (
            <motion.section
              key={cat.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    {Icon && <Icon className="h-5 w-5 text-primary" />}
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-bold text-foreground">{cat.emoji} {cat.label}</h2>
                    <p className="text-xs text-muted-foreground">{cat.description}</p>
                  </div>
                </div>
                <Link
                  to={`/farm?category=${cat.id}`}
                  className="text-sm text-primary font-medium flex items-center gap-1 hover:underline"
                >
                  View All <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {items.slice(0, 4).map((item, i) => (
                  <FarmItemCard key={item.id} item={item} index={i} />
                ))}
              </div>
            </motion.section>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
