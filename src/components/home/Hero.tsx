import { useLanguage } from "../../hooks/useLanguage";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { ChevronRight, PlayCircle } from "lucide-react";

export const Hero = ({ onExplore }: { onExplore: () => void }) => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background with dynamic textures */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/0dd46f4b-307f-4109-a5e3-c1aefcbfb0a6/hero-sphinx-b44db1b5-1777359622727.webp"
          alt="African Heritage"
          className="w-full h-full object-cover brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-primary bg-primary/10 rounded-full uppercase">
            Cuga Media Presents
          </span>
          <h1 className="text-5xl md:text-8xl font-black mb-6 text-white leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-lg h-14 px-8 bg-primary hover:bg-primary/90"
              onClick={onExplore}
            >
              {t.hero.cta}
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto text-lg h-14 px-8 border-white text-white hover:bg-white/10"
            >
              <PlayCircle className="mr-2 w-5 h-5" />
              Watch Story
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Stats/Badge for gamification preview */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-10 right-10 hidden xl:block"
      >
        <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20">
          <p className="text-xs text-slate-400 uppercase font-bold mb-1">Live Activity</p>
          <p className="text-white font-bold text-sm">+100 Points awarded to @Amara</p>
        </div>
      </motion.div>
    </section>
  );
};