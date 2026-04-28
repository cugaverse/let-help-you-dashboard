import { useLanguage } from "../../hooks/useLanguage";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Trophy, Medal, Crown } from "lucide-react";
import { motion } from "framer-motion";

const LEADERBOARD = [
  { id: 1, name: "Fatima Al-Sayed", points: 8750, rank: 1, country: "Egypt", avatar: "FA" },
  { id: 2, name: "Kofi Boateng", points: 7920, rank: 2, country: "Ghana", avatar: "KB" },
  { id: 3, name: "Chidi Okafor", points: 7450, rank: 3, country: "Nigeria", avatar: "CO" },
  { id: 4, name: "Mariam Diallo", points: 6800, rank: 4, country: "Senegal", avatar: "MD" },
  { id: 5, name: "Samuel Gebre", points: 6120, rank: 5, country: "Ethiopia", avatar: "SG" },
  { id: 6, name: "Zuhura Juma", points: 5900, rank: 6, country: "Tanzania", avatar: "ZJ" },
];

export const Leaderboard = () => {
  const { t } = useLanguage();

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="w-6 h-6 text-yellow-500" />;
      case 2: return <Medal className="w-6 h-6 text-slate-400" />;
      case 3: return <Medal className="w-6 h-6 text-amber-600" />;
      default: return <span className="font-bold text-slate-400">#{rank}</span>;
    }
  };

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block p-4 bg-primary/10 rounded-full mb-6"
          >
            <Trophy className="w-12 h-12 text-primary" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-primary">{t.gamification.leaderboardTitle}</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Celebrating the individuals who contribute most to preserving our continent's stories.
          </p>
        </div>

        <div className="space-y-4">
          {LEADERBOARD.map((user, idx) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className={`group hover:shadow-lg transition-all duration-300 border-none ${user.rank === 1 ? 'bg-gradient-to-r from-primary/5 to-transparent' : 'bg-white'}`}>
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="w-8 flex justify-center">
                      {getRankIcon(user.rank)}
                    </div>
                    
                    <Avatar className="h-12 w-12 border-2 border-slate-100">
                      <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} />
                      <AvatarFallback>{user.avatar}</AvatarFallback>
                    </Avatar>
                    
                    <div>
                      <h3 className="font-black text-lg group-hover:text-primary transition-colors">{user.name}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{user.country}</span>
                        <Badge variant="secondary" className="text-[10px] py-0 px-1 bg-slate-100">Verified Keeper</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-2xl font-black text-primary">{user.points.toLocaleString()}</div>
                    <div className="text-[10px] font-bold uppercase text-slate-400 tracking-tighter">Points</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-400 mb-6">Want to see your name here?</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-xl shadow-sm">
              <div className="text-primary font-bold">+100</div>
              <div className="text-[10px] uppercase text-slate-400">Post Stories</div>
            </div>
            <div className="p-4 bg-white rounded-xl shadow-sm">
              <div className="text-accent font-bold">+25</div>
              <div className="text-[10px] uppercase text-slate-400">Take Quizzes</div>
            </div>
            <div className="p-4 bg-white rounded-xl shadow-sm col-span-2 sm:col-span-1">
              <div className="text-amber-500 font-bold">+10</div>
              <div className="text-[10px] uppercase text-slate-400">Engage</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};