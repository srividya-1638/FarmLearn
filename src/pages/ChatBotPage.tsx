import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Bot, Send, User, ImagePlus } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const ChatBotPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "🌱 Welcome to FarmLearn AI! I'm your farming assistant. Ask me about:\n\n• Crop cultivation guides\n• Pest & disease management\n• Seasonal planning\n• Investment & profit info\n• Animal farming tips\n\nYou can also describe plant/animal symptoms and I'll suggest solutions!" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim() || loading) return;
    const userMsg: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    setTimeout(() => {
      const resp = getResponse(userMsg.content);
      setMessages((prev) => [...prev, { role: "assistant", content: resp }]);
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-background pt-20 pb-4 flex flex-col">
      <div className="max-w-3xl mx-auto px-4 flex-1 flex flex-col w-full">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-4">
          <h1 className="font-display text-2xl font-bold text-foreground flex items-center gap-2">
            <Bot className="h-6 w-6 text-primary" /> FarmLearn AI
          </h1>
          <p className="text-sm text-muted-foreground">Your intelligent farming assistant</p>
        </motion.div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2" style={{ maxHeight: "calc(100vh - 220px)" }}>
          {messages.map((msg, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              {msg.role === "assistant" && (
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Bot className="h-5 w-5 text-primary" />
                </div>
              )}
              <div className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm whitespace-pre-wrap ${
                msg.role === "user"
                  ? "bg-primary text-primary-foreground rounded-br-none"
                  : "bg-card border border-border rounded-bl-none"
              }`}>
                {msg.content}
              </div>
              {msg.role === "user" && (
                <div className="w-9 h-9 rounded-full bg-secondary/30 flex items-center justify-center shrink-0">
                  <User className="h-5 w-5 text-foreground" />
                </div>
              )}
            </motion.div>
          ))}
          {loading && (
            <div className="flex gap-3">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center"><Bot className="h-5 w-5 text-primary" /></div>
              <div className="bg-card border border-border px-4 py-3 rounded-2xl rounded-bl-none">
                <span className="inline-flex gap-1">
                  <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce" />
                  <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="flex gap-3 items-center">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask about farming, crops, animals..."
            className="flex-1 px-4 py-3 bg-card border border-border rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary/30"
          />
          <button onClick={handleSend} disabled={loading || !input.trim()}
            className="w-11 h-11 rounded-xl bg-primary text-primary-foreground flex items-center justify-center disabled:opacity-50 transition-opacity">
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

function getResponse(q: string): string {
  const lower = q.toLowerCase();
  if (lower.includes("tomato")) return "🍅 **Tomato Cultivation Guide:**\n\nSeason: Rabi & Kharif (June-July, Oct-Nov)\nDuration: 60-90 days\nInvestment: ₹30,000 - ₹50,000/acre\nProfit: ₹80,000 - ₹2,00,000/acre\n\nKey Steps:\n1. Prepare nursery beds\n2. Transplant at 25-30 days\n3. Space 60x45 cm\n4. Use drip irrigation\n5. Stake tall plants\n\nPest Control: Neem oil for whiteflies, copper fungicide for blight.";
  if (lower.includes("mango")) return "🥭 **Mango - King of Fruits:**\n\nPlant grafted saplings in July-August\nSpacing: 10x10m\nFirst fruits: 5-7 years\nLifespan: 100+ years!\n\nBest varieties: Alphonso, Kesar, Dasheri, Langra\nInvestment: ₹30,000-50,000/acre\nProfit: ₹2-5 lakh/acre/year\n\nWatch for mango hopper - spray Imidacloprid during flowering.";
  if (lower.includes("goat")) return "🐐 **Goat Farming Guide:**\n\nStart with 20-50 goats\nBreeds: Sirohi, Boer, Black Bengal\nInvestment: ₹50,000 - ₹2,00,000\nProfit: ₹1-4 lakh/year\n\nKey Tips:\n• Elevated shed with drainage\n• Deworm every 3 months\n• Vaccinate against PPR & Goat Pox\n• Best prices during Bakri Eid\n• NABARD provides subsidized loans";
  if (lower.includes("disease") || lower.includes("yellow") || lower.includes("spot")) return "🔬 **Plant Disease Diagnosis:**\n\nCommon symptoms:\n• Yellow leaves → Nitrogen deficiency or overwatering\n• Brown spots → Fungal infection (try Mancozeb)\n• Curling leaves → Virus or mite attack\n• Wilting → Root rot or bacterial wilt\n\nGeneral Treatment:\n1. Remove infected parts\n2. Spray neem oil (organic)\n3. Use appropriate fungicide\n4. Improve drainage\n\nFor specific diagnosis, describe the crop and symptoms in detail!";
  if (lower.includes("season") || lower.includes("when") || lower.includes("month")) return "📅 **Seasonal Farming Guide:**\n\n🌧️ Kharif (June-Oct): Rice, Cotton, Millets, Groundnut, Soybean\n❄️ Rabi (Oct-March): Wheat, Potato, Onion, Mustard, Gram\n☀️ Summer (March-June): Watermelon, Okra, Cucumber\n\n🌳 Trees: Plant in monsoon (June-August)\n🌸 Flowers: Marigold year-round, Rose in October\n\nCheck the Calendar page for month-wise recommendations!";
  if (lower.includes("profit") || lower.includes("money") || lower.includes("earn")) return "💰 **Most Profitable Farming:**\n\nShort-term (< 6 months):\n• Mushroom: ₹1-3 lakh/season\n• Marigold: ₹60k-1.5L/acre\n• Watermelon: ₹60k-2L/acre\n\nMedium-term (1-3 years):\n• Banana: ₹1.5-4L/acre\n• Grapes: ₹5-15L/acre\n• Fish: ₹1.5-4L/acre\n\nLong-term:\n• Teak: ₹30-50L/acre (20 years)\n• Coconut: ₹1.5-3L/acre/year";
  if (lower.includes("water") || lower.includes("irrigation")) return "💧 **Irrigation Guide:**\n\nDrip Irrigation: Best for vegetables & fruits (saves 40-60% water)\nSprinkler: Good for field crops\nFlood: Traditional, high water use\n\nWater needs by crop:\n• Tomato: 400-600mm\n• Banana: 1200-1800mm (highest)\n• Drumstick: Very low (drought tolerant)\n• Potato: 500-700mm\n\nTip: Mulching reduces water needs by 25-30%!";
  return "🌱 Great question! Here's what I can help you with:\n\n🥬 **Crop Guides** - How to grow any vegetable, fruit, or flower\n🐄 **Animal Farming** - Chicken, goat, cow, fish, bees\n🔬 **Disease Help** - Describe symptoms for diagnosis\n📅 **Seasonal Tips** - What to plant and when\n💰 **Profit Info** - Investment and returns\n💧 **Irrigation** - Water management tips\n\nTry asking: \"How to grow tomatoes?\" or \"Best profitable crop?\"";
}

export default ChatBotPage;
