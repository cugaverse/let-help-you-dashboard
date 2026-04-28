import { useLanguage } from "../../hooks/useLanguage";
import { motion } from "framer-motion";
import { MapPin, Info, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const MUSEUMS = [
  {
    id: 1,
    name: "Lalibela Churches",
    location: "Ethiopia",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/0dd46f4b-307f-4109-a5e3-c1aefcbfb0a6/map-lalibela-f973a503-1777359622121.webp",
    desc: "11 monolithic rock-hewn churches, a UNESCO World Heritage site."
  },
  {
    id: 2,
    name: "The Giza Necropolis",
    location: "Egypt",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/0dd46f4b-307f-4109-a5e3-c1aefcbfb0a6/hero-sphinx-b44db1b5-1777359622727.webp",
    desc: "The oldest and only one of the original Seven Wonders of the Ancient World."
  },
  {
    id: 3,
    name: "National Museum of Kenya",
    location: "Kenya",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/0dd46f4b-307f-4109-a5e3-c1aefcbfb0a6/museum-interior-35448741-1777359622535.webp",
    desc: "Heritage site housing historical, cultural, and natural history artifacts."
  }
];

export const VirtualMap = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">{t.museums.title}</h2>
            <p className="text-xl text-slate-500 mb-8 leading-relaxed">
              {t.museums.description}
            </p>
            <div className="flex flex-col gap-4">
              {["Explore 50+ Sacred Sites", "3D Digital Replicas", "Interactive Tour Guides"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-lg font-medium">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
            <Button size="lg" className="mt-10 h-14 px-8 rounded-full text-lg">
              Open Interactive Map
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>

          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-3 scale-105" />
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/0dd46f4b-307f-4109-a5e3-c1aefcbfb0a6/map-capetown-6ecd0300-1777359622859.webp" 
              alt="Map Preview" 
              className="relative z-10 w-full h-[500px] object-cover rounded-3xl shadow-2xl"
            />
            {/* Pulsing map markers */}
            <div className="absolute top-1/4 left-1/3 z-20 animate-pulse">
              <div className="p-1 bg-white rounded-full shadow-lg">
                <MapPin className="w-6 h-6 text-primary" fill="currentColor" />
              </div>
            </div>
            <div className="absolute bottom-1/3 right-1/4 z-20 animate-pulse delay-700">
              <div className="p-1 bg-white rounded-full shadow-lg">
                <MapPin className="w-6 h-6 text-accent" fill="currentColor" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MUSEUMS.map((museum, idx) => (
            <motion.div
              key={museum.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow bg-slate-50 dark:bg-slate-900 overflow-hidden">
                <img src={museum.image} alt={museum.name} className="w-full h-48 object-cover" />
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-primary font-bold text-sm mb-2 uppercase tracking-wide">
                    <MapPin className="w-4 h-4" />
                    {museum.location}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{museum.name}</h3>
                  <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                    {museum.desc}
                  </p>
                  <Button variant="ghost" className="p-0 h-auto hover:bg-transparent text-primary hover:text-primary/80 font-bold group">
                    Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};