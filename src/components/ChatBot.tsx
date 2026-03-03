import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, ImagePlus } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hello! I'm FarmLearn AI 🌱 Ask me anything about farming - crops, animals, diseases, pesticides, or seasons. You can also describe a plant/animal issue and I'll try to help!" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim() || loading) return;
    const userMsg: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    // Simulated AI response (will be replaced with real AI later)
    setTimeout(() => {
      const responses = getSimulatedResponse(userMsg.content);
      setMessages((prev) => [...prev, { role: "assistant", content: responses }]);
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center"
      >
        {open ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-h-[500px] flex flex-col bg-card border border-border rounded-2xl shadow-xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary text-primary-foreground px-4 py-3 flex items-center gap-2">
              <Bot className="h-5 w-5" />
              <span className="font-display font-bold">FarmLearn AI</span>
              <span className="text-xs opacity-75 ml-auto">Your farming assistant</span>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 max-h-[340px]">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.role === "assistant" && (
                    <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-none"
                        : "bg-muted text-foreground rounded-bl-none"
                    }`}
                  >
                    {msg.content}
                  </div>
                  {msg.role === "user" && (
                    <div className="w-7 h-7 rounded-full bg-secondary/50 flex items-center justify-center shrink-0">
                      <User className="h-4 w-4 text-foreground" />
                    </div>
                  )}
                </div>
              ))}
              {loading && (
                <div className="flex gap-2">
                  <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center"><Bot className="h-4 w-4 text-primary" /></div>
                  <div className="bg-muted px-4 py-2 rounded-xl text-sm">
                    <span className="inline-flex gap-1">
                      <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-border p-3 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about farming..."
                className="flex-1 px-3 py-2 text-sm bg-muted rounded-lg border-0 outline-none focus:ring-2 focus:ring-primary/30"
              />
              <button
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="w-9 h-9 rounded-lg bg-primary text-primary-foreground flex items-center justify-center disabled:opacity-50 transition-opacity"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

function getSimulatedResponse(question: string): string {
  const q = question.toLowerCase();
  if (q.includes("tomato")) return "🍅 Tomatoes grow best in warm weather (20-30°C). Plant in June-July or Oct-Nov. They need well-drained loamy soil with pH 6-7. Common pests include whiteflies (use neem oil) and blight (copper fungicide). Investment: ~₹30-50k per acre, profit: ₹80k-2L!";
  if (q.includes("mango")) return "🥭 Mango is the king of fruits! Plant grafted saplings in July-August at 10x10m spacing. First fruits come after 5-7 years but the tree yields for 100+ years. Alphonso & Kesar fetch premium prices. Watch out for mango hopper - use Imidacloprid spray.";
  if (q.includes("chicken") || q.includes("poultry")) return "🐔 Start poultry with 200-500 birds. Broilers reach market weight in 6-8 weeks. Investment: ₹1-5L. Maintain 35°C for chicks in first week. Vaccinate against Marek's, Newcastle & IBD. Desi chicken fetches 2x the price!";
  if (q.includes("honeybee") || q.includes("honey")) return "🐝 Beekeeping is low-investment (₹10-30k for 10-20 boxes) with ₹50k-2L yearly returns! Place hives near flowering crops. Inspect weekly. Extract honey using centrifugal extractor. Organic honey fetches 2-3x price. KVIC provides training.";
  if (q.includes("season") || q.includes("month") || q.includes("when")) return "📅 Key seasons: Kharif (June-Oct) for rice, cotton, millets. Rabi (Oct-March) for wheat, potato, onion. Summer (March-June) for watermelon, okra. Monsoon is best for planting trees. Check our Calendar page for month-wise recommendations!";
  if (q.includes("disease") || q.includes("pest") || q.includes("yellow")) return "🔬 Common plant diseases: Yellow leaves often indicate nitrogen deficiency or overwatering. Spots could be fungal - try Mancozeb spray. For insects, neem oil is a great organic option. For specific diagnosis, describe the symptoms in detail!";
  if (q.includes("profit") || q.includes("money") || q.includes("income")) return "💰 Most profitable farming: Grapes (₹5-15L/acre), Rose (₹3-8L/acre), Banana (₹1.5-4L/acre), Fish farming (₹1.5-4L/acre). For long-term: Teak (₹30-50L/acre at 20 years). Start with low-investment crops like marigold or okra!";
  if (q.includes("organic")) return "🌿 Organic farming tips: Use neem cake, vermicompost, and cow dung manure. Panchagavya is an excellent growth promoter. Companion planting reduces pests naturally. Get organic certification for 2-3x premium prices!";
  return "🌱 That's a great question! I can help with crop cultivation, animal farming, pest management, seasonal planning, and market information. Try asking about specific crops like tomato, mango, or about animals like chickens, goats. I'm here to help you become a successful farmer!";
}

export default ChatBot;
