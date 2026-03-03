import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  id: string;
  label: string;
  emoji: string;
  description: string;
  index: number;
  linkTo?: string;
}

const CategoryCard = ({ id, label, emoji, description, index, linkTo }: CategoryCardProps) => {
  const Wrapper = linkTo ? Link : "div";
  const wrapperProps = linkTo ? { to: linkTo } : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      {/* @ts-ignore */}
      <Wrapper {...wrapperProps} className="block farm-card text-center group cursor-pointer">
        <div className="text-5xl mb-4 group-hover:animate-sway transition-transform">{emoji}</div>
        <h3 className="font-display text-xl font-bold text-foreground mb-2">{label}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </Wrapper>
    </motion.div>
  );
};

export default CategoryCard;
