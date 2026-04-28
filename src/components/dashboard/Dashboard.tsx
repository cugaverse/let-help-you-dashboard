import { useLanguage } from "../../hooks/useLanguage";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { Trophy, History, Star, BookOpen, UserCheck, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

export const Dashboard = () => {
  const { t } = useLanguage();

  const handleStartQuiz = () => {
    toast.promise(new Promise(resolve => setTimeout(resolve, 1000)), {
      loading: 'Loading Heritage Quiz...',
      success: 'Quiz Ready! Earn +25 Points.',
      error: 'Could not load quiz.',
    });
  };

  const userStats = [
    { label: "Total Points", value: "1,450", icon: Trophy, color: "text-amber-500" },
    { label: "Rank", value: "Keep Keeper", icon: Shield, color: "text-primary" },
    { label: "Stories Shared", value: "12", icon: History, color: "text-accent" },
    { label: "Badges Earned", value: "8", icon: Star, color: "text-purple-500" },
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-4xl text-white font-black">
              AM
            </div>
            <div className="absolute -bottom-1 -right-1 bg-green-500 w-6 h-6 rounded-full border-4 border-slate-50" title="Online" />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-black mb-1">Amara Mutombo</h1>
            <p className="text-slate-500 font-medium">Lagos, Nigeria • Joined 2024</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {userStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="text-center border-none shadow-sm">
                <CardContent className="pt-8">
                  <div className={`mx-auto w-12 h-12 rounded-xl flex items-center justify-center bg-slate-100 mb-4`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <p className="text-2xl font-black">{stat.value}</p>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <History className="w-5 h-5 text-primary" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  { action: "Shared a new story: 'Kente Weaving Masterclass'", points: "+100", time: "2 hours ago" },
                  { action: "Commented on 'Great Zimbabwe' article", points: "+10", time: "Yesterday" },
                  { action: "Completed 'Yoruba Mythology' Quiz", points: "+25", time: "2 days ago" },
                ].map((act, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b last:border-0 border-slate-100">
                    <div>
                      <p className="font-bold text-slate-700">{act.action}</p>
                      <p className="text-xs text-slate-400">{act.time}</p>
                    </div>
                    <span className="text-green-600 font-black text-sm">{act.points}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-primary text-white border-none overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-16 -translate-y-16" />
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  {t.gamification.quizTitle}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-primary-foreground/80">{t.gamification.quizDesc}</p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="secondary" onClick={handleStartQuiz}>Start Today's Quiz</Button>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">View Topics</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-accent" />
                  Profile Completion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex justify-between text-sm font-bold">
                  <span>80% Complete</span>
                  <span className="text-primary">Master Explorer</span>
                </div>
                <Progress value={80} className="h-3" />
                <p className="text-xs text-slate-400 mt-4 leading-relaxed">
                  Complete your bio and verify your location to unlock the "Heritage Keeper" badge!
                </p>
                <Button className="w-full mt-6" variant="outline">Finish Profile</Button>
              </CardContent>
            </Card>

            <div className="rounded-2xl bg-gradient-to-br from-accent to-ochre p-6 text-white shadow-xl">
              <h3 className="font-black text-xl mb-2 flex items-center gap-2">
                <Trophy className="w-6 h-6" />
                Weekly Challenge
              </h3>
              <p className="text-sm opacity-90 mb-6 leading-tight">
                Upload a video about your local architecture to earn double points this week!
              </p>
              <div className="text-3xl font-black mb-1">x2</div>
              <p className="text-[10px] uppercase font-bold tracking-widest opacity-70">Multiplier Active</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};