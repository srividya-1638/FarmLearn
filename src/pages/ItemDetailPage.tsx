import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Sun, Clock, IndianRupee, Droplets, Mountain, TrendingUp, Bug, Lightbulb, Calendar, CheckCircle2 } from "lucide-react";
import { farmItems } from "@/data/farmData";
import { useState } from "react";

const ItemDetailPage = () => {
  const { id } = useParams();
  const item = farmItems.find((i) => i.id === id);
  const [acres, setAcres] = useState("");
  const [animalCount, setAnimalCount] = useState("");
  const [started, setStarted] = useState(false);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <p className="text-muted-foreground">Item not found. <Link to="/farm" className="text-primary underline">Go back</Link></p>
      </div>
    );
  }

  const handleStart = () => {
    setStarted(true);
    // Save to localStorage for profile
    const cultivations = JSON.parse(localStorage.getItem("farmlearn_cultivations") || "[]");
    cultivations.push({
      id: item.id,
      name: item.name,
      emoji: item.emoji,
      acres: acres || undefined,
      animalCount: animalCount || undefined,
      startedAt: new Date().toISOString(),
    });
    localStorage.setItem("farmlearn_cultivations", JSON.stringify(cultivations));
  };

  return (
    <div className="min-h-screen bg-background pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/farm" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Farm
        </Link>

        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative rounded-2xl overflow-hidden mb-8">
          <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <span className="text-4xl mr-3">{item.emoji}</span>
            <h1 className="inline font-display text-3xl font-bold text-background">{item.name}</h1>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { icon: Sun, label: "Season", value: item.season },
            { icon: Clock, label: "Duration", value: item.duration },
            { icon: IndianRupee, label: "Investment", value: item.investmentPerAcre },
            { icon: TrendingUp, label: "Profit Range", value: item.profitRange },
            { icon: Droplets, label: "Water Needs", value: item.waterNeeds },
            { icon: Mountain, label: "Soil Type", value: item.soilType },
          ].map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              className="farm-card flex items-start gap-3 !p-4">
              <stat.icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
                <p className="text-sm font-semibold text-foreground">{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Best Months */}
        <div className="farm-card mb-6">
          <h2 className="font-display text-lg font-bold text-foreground mb-3 flex items-center gap-2"><Calendar className="h-5 w-5 text-primary" /> Best Months</h2>
          <div className="flex flex-wrap gap-2">
            {item.bestMonths.map((m) => (
              <span key={m} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">{m}</span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="farm-card mb-6">
          <p className="text-foreground leading-relaxed">{item.description}</p>
        </div>

        {/* Market Condition */}
        <div className="farm-card mb-6">
          <h2 className="font-display text-lg font-bold text-foreground mb-2 flex items-center gap-2"><TrendingUp className="h-5 w-5 text-secondary" /> Market Condition</h2>
          <p className="text-muted-foreground">{item.marketCondition}</p>
        </div>

        {/* Steps */}
        <div className="farm-card mb-6">
          <h2 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-primary" /> Step-by-Step Guide</h2>
          <ol className="space-y-3">
            {item.steps.map((step, i) => (
              <motion.li key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="flex gap-3 items-start">
                <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</span>
                <p className="text-sm text-foreground pt-1">{step}</p>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* Pesticides */}
        <div className="farm-card mb-6">
          <h2 className="font-display text-lg font-bold text-foreground mb-3 flex items-center gap-2"><Bug className="h-5 w-5 text-destructive" /> Pesticides & Protection</h2>
          <ul className="space-y-2">
            {item.pesticides.map((p, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                <span className="text-destructive mt-1">•</span> {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Suggestions */}
        <div className="farm-card mb-8">
          <h2 className="font-display text-lg font-bold text-foreground mb-3 flex items-center gap-2"><Lightbulb className="h-5 w-5 text-secondary" /> Pro Suggestions</h2>
          <ul className="space-y-2">
            {item.suggestions.map((s, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                <span className="text-secondary mt-1">💡</span> {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Start Cultivation */}
        {!started ? (
          <div className="farm-card">
            <h2 className="font-display text-lg font-bold text-foreground mb-4">🚀 Start Cultivating {item.name}</h2>
            {item.animalCount ? (
              <div className="mb-4">
                <label className="text-sm font-medium text-muted-foreground">How many {item.name.toLowerCase()}s?</label>
                <input type="number" value={animalCount} onChange={(e) => setAnimalCount(e.target.value)} min="1"
                  className="w-full mt-1 px-3 py-2 bg-muted border border-border rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/30" placeholder="e.g. 50" />
              </div>
            ) : item.id !== "honeybee" ? (
              <div className="mb-4">
                <label className="text-sm font-medium text-muted-foreground">How many acres?</label>
                <input type="number" value={acres} onChange={(e) => setAcres(e.target.value)} min="0.5" step="0.5"
                  className="w-full mt-1 px-3 py-2 bg-muted border border-border rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/30" placeholder="e.g. 2" />
              </div>
            ) : null}
            <button onClick={handleStart}
              className="w-full py-2.5 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors">
              Start Cultivation
            </button>
          </div>
        ) : (
          <div className="farm-card text-center">
            <span className="text-4xl">🎉</span>
            <h2 className="font-display text-lg font-bold text-foreground mt-2">Cultivation Started!</h2>
            <p className="text-sm text-muted-foreground mt-1">Check your profile to track your cultivations.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetailPage;
