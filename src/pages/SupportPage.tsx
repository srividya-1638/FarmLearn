import { motion } from "framer-motion";
import { HelpCircle, MessageSquare, BookOpen, Phone } from "lucide-react";

const SupportPage = () => (
  <div className="min-h-screen bg-background pt-24 pb-20">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-display text-4xl font-bold text-foreground mb-2 text-center">Support</h1>
        <p className="text-muted-foreground text-center mb-8">How can we help you?</p>

        <div className="space-y-4">
          {[
            { icon: MessageSquare, title: "FarmLearn AI Chatbot", desc: "Get instant answers to all your farming questions using our AI assistant. Login and click the chat icon!", color: "text-primary" },
            { icon: BookOpen, title: "Farming Guides", desc: "Browse our comprehensive guides on vegetables, fruits, flowers, trees, and animals with step-by-step instructions.", color: "text-secondary" },
            { icon: HelpCircle, title: "FAQs", desc: "Q: Is FarmLearn free? A: Yes! All farming guides are completely free.\nQ: How accurate is the AI? A: Our AI provides general guidance. Always consult local experts for specific advice.", color: "text-accent" },
            { icon: Phone, title: "Contact Support", desc: "Email: support@farmlearn.com | Phone: +91 7815818952 | Available Mon-Sat 9AM-6PM IST", color: "text-primary" },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="farm-card flex gap-4">
              <item.icon className={`h-8 w-8 ${item.color} shrink-0`} />
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground whitespace-pre-line">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);

export default SupportPage;
