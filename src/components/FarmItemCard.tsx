import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, IndianRupee, Sun } from "lucide-react";
import type { FarmItem } from "@/data/farmData";

interface FarmItemCardProps {
  item: FarmItem;
  index: number;
}

const FarmItemCard = ({ item, index }: FarmItemCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
    >
      <Link to={`/item/${item.id}`} className="block farm-card overflow-hidden group">
        <div className="relative h-44 -mx-6 -mt-6 mb-4 overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute top-3 right-3 text-3xl">{item.emoji}</div>
        </div>
        <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.name}</h3>
        <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{item.description}</p>
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="flex items-center gap-1 bg-muted px-2 py-1 rounded-full text-muted-foreground">
            <Sun className="h-3 w-3" /> {item.season}
          </span>
          <span className="flex items-center gap-1 bg-muted px-2 py-1 rounded-full text-muted-foreground">
            <Clock className="h-3 w-3" /> {item.duration}
          </span>
          <span className="flex items-center gap-1 bg-muted px-2 py-1 rounded-full text-muted-foreground">
            <IndianRupee className="h-3 w-3" /> {item.investmentPerAcre}
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default FarmItemCard;
