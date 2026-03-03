import { motion } from "framer-motion";
import { Calendar, Sprout, Sun, CloudRain, Snowflake, Flower } from "lucide-react";
import { seasonalCalendar } from "@/data/farmData";
import { useState } from "react";

const seasonIcons: Record<number, any> = {
  0: Snowflake, 1: Snowflake, 2: Flower, 3: Sun, 4: Sun, 5: CloudRain,
  6: CloudRain, 7: CloudRain, 8: CloudRain, 9: Flower, 10: Snowflake, 11: Snowflake,
};

const seasonColors: Record<number, string> = {
  0: "bg-blue-100 text-blue-800", 1: "bg-blue-100 text-blue-800", 2: "bg-green-100 text-green-800",
  3: "bg-yellow-100 text-yellow-800", 4: "bg-orange-100 text-orange-800", 5: "bg-teal-100 text-teal-800",
  6: "bg-teal-100 text-teal-800", 7: "bg-teal-100 text-teal-800", 8: "bg-emerald-100 text-emerald-800",
  9: "bg-amber-100 text-amber-800", 10: "bg-blue-100 text-blue-800", 11: "bg-blue-100 text-blue-800",
};

const CalendarPage = () => {
  const currentMonth = new Date().getMonth();
  const [selected, setSelected] = useState(currentMonth);

  return (
    <div className="min-h-screen bg-background pt-20 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
            <Calendar className="h-8 w-8 text-primary" /> Seasonal Calendar
          </h1>
          <p className="text-muted-foreground mb-8">Plan your farming based on the best months for each crop</p>
        </motion.div>

        {/* Month grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 mb-8">
          {seasonalCalendar.map((m, i) => {
            const Icon = seasonIcons[i];
            return (
              <motion.button
                key={m.month}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelected(i)}
                className={`p-3 rounded-xl text-center transition-all ${
                  selected === i
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "farm-card !p-3"
                } ${i === currentMonth && selected !== i ? "ring-2 ring-primary" : ""}`}
              >
                <Icon className="h-5 w-5 mx-auto mb-1" />
                <span className="text-xs font-semibold">{m.month.slice(0, 3)}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Selected month detail */}
        <motion.div key={selected} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="farm-card">
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${seasonColors[selected]}`}>
              <Sprout className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-foreground">{seasonalCalendar[selected].month}</h2>
              <p className="text-xs text-muted-foreground">{seasonalCalendar[selected].tip}</p>
            </div>
          </div>

          <h3 className="font-semibold text-sm text-foreground mb-3">Recommended Crops & Activities:</h3>
          <div className="flex flex-wrap gap-2">
            {seasonalCalendar[selected].crops.map((crop) => (
              <span key={crop} className="px-3 py-1.5 bg-primary/10 text-primary text-sm rounded-full font-medium">
                {crop}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CalendarPage;
