import { motion } from "framer-motion";
import { Sprout, Users, BookOpen, HeartHandshake } from "lucide-react";

const AboutPage = () => (
  <div className="min-h-screen bg-background pt-24 pb-20">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <h1 className="font-display text-4xl font-bold text-foreground mb-4">About FarmLearn</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We believe everyone deserves access to farming knowledge. FarmLearn is designed to help new farmers succeed from seed to harvest.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          { icon: Sprout, title: "From Scratch", desc: "Complete guides from soil preparation to market selling. No prior experience needed." },
          { icon: BookOpen, title: "Rich Knowledge", desc: "Vegetables, fruits, flowers, trees, and animals - all covered with step-by-step instructions." },
          { icon: Users, title: "For Everyone", desc: "Whether you have 1 acre or 100, our guides scale to your needs with investment and profit estimates." },
          { icon: HeartHandshake, title: "AI Assistance", desc: "FarmLearn AI chatbot answers your questions 24/7, helping diagnose diseases and plan seasons." },
        ].map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="farm-card flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <item.icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default AboutPage;
