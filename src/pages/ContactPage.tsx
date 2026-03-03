import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-4xl font-bold text-foreground mb-2 text-center">Contact Us</h1>
          <p className="text-muted-foreground text-center mb-8">We'd love to hear from you</p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              { icon: Mail, label: "Email", value: "support@farmlearn.com" },
              { icon: Phone, label: "Phone", value: "+91 7815818952" },
              { icon: MapPin, label: "Location", value: "Madanapalle, India" },
            ].map((item, i) => (
              <div key={i} className="farm-card text-center">
                <item.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className="text-sm font-semibold text-foreground">{item.value}</p>
              </div>
            ))}
          </div>

          {!sent ? (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="farm-card space-y-4">
              <div>
                <label className="text-xs font-medium text-muted-foreground">Name</label>
                <input required className="w-full mt-1 px-3 py-2 bg-muted border border-border rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/30" />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">Email</label>
                <input type="email" required className="w-full mt-1 px-3 py-2 bg-muted border border-border rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/30" />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">Message</label>
                <textarea required rows={4} className="w-full mt-1 px-3 py-2 bg-muted border border-border rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
              </div>
              <button type="submit" className="w-full py-2.5 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors">
                Send Message
              </button>
            </form>
          ) : (
            <div className="farm-card text-center py-8">
              <span className="text-4xl">✅</span>
              <h2 className="font-display text-lg font-bold text-foreground mt-2">Message Sent!</h2>
              <p className="text-sm text-muted-foreground">We'll get back to you soon.</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
