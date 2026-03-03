import { motion } from "framer-motion";
import { User, Mail, Sprout, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

interface ProfilePageProps {
  user: { name: string; email: string } | null;
}

interface Cultivation {
  id: string;
  name: string;
  emoji: string;
  acres?: string;
  animalCount?: string;
  startedAt: string;
}

const ProfilePage = ({ user }: ProfilePageProps) => {
  const [cultivations, setCultivations] = useState<Cultivation[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("farmlearn_cultivations") || "[]");
    setCultivations(saved);
  }, []);

  const removeCultivation = (index: number) => {
    const updated = cultivations.filter((_, i) => i !== index);
    setCultivations(updated);
    localStorage.setItem("farmlearn_cultivations", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-background pt-20 pb-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-3xl font-bold text-foreground mb-6">My Profile</h1>

          <div className="farm-card mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-foreground">{user?.name || "Farmer"}</h2>
                <p className="text-sm text-muted-foreground flex items-center gap-1"><Mail className="h-3 w-3" /> {user?.email || "farmer@email.com"}</p>
              </div>
            </div>
          </div>

          <div className="farm-card">
            <h2 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Sprout className="h-5 w-5 text-primary" /> My Cultivations
            </h2>

            {cultivations.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-8">
                No cultivations started yet. Browse the Farm section to begin! 🌱
              </p>
            ) : (
              <div className="space-y-3">
                {cultivations.map((c, i) => (
                  <div key={i} className="flex items-center justify-between bg-muted p-3 rounded-xl">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{c.emoji}</span>
                      <div>
                        <p className="font-semibold text-sm text-foreground">{c.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {c.acres ? `${c.acres} acres` : c.animalCount ? `${c.animalCount} animals` : "Started"}
                          {" · "}
                          {new Date(c.startedAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <button onClick={() => removeCultivation(i)} className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfilePage;
