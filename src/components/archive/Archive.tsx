import { useLanguage } from "../../hooks/useLanguage";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Search, Upload, Filter, MessageSquare, Share2, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const ARCHIVE_DATA = [
  {
    id: 1,
    title: "The Spirits of the Serengeti",
    author: "Zainab M.",
    type: "Story",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/0dd46f4b-307f-4109-a5e3-c1aefcbfb0a6/archive-nature-ec6421fc-1777359621621.webp",
    likes: 124,
    comments: 12
  },
  {
    id: 2,
    title: "Lalibela: Ancient Faith",
    author: "Kofi A.",
    type: "Photo Essay",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/0dd46f4b-307f-4109-a5e3-c1aefcbfb0a6/map-lalibela-f973a503-1777359622121.webp",
    likes: 89,
    comments: 5
  },
  {
    id: 3,
    title: "Modern Tech in Traditions",
    author: "Elena S.",
    type: "Digital Art",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/0dd46f4b-307f-4109-a5e3-c1aefcbfb0a6/archive-storytelling-79faf07d-1777359622709.webp",
    likes: 256,
    comments: 45
  }
];

export const Archive = () => {
  const { t } = useLanguage();

  const handleAction = (type: string) => {
    toast.success(`Action recorded! +10 ${t.common.points}`);
  };

  const handleUpload = () => {
    toast.info("Opening secure contribution portal...");
  };

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl font-black text-primary mb-2">{t.archive.title}</h2>
            <p className="text-slate-500 max-w-xl">{t.archive.description}</p>
          </div>
          <div className="flex gap-3">
            <Button className="bg-accent hover:bg-accent/90" onClick={handleUpload}>
              <Upload className="mr-2 w-4 h-4" />
              {t.archive.upload}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar filters */}
          <aside className="md:col-span-1 space-y-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input className="pl-10" placeholder="Search archive..." />
            </div>
            
            <div className="space-y-4">
              <h3 className="font-bold text-sm uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Filter className="w-4 h-4" /> Filter by
              </h3>
              {["Visual Arts", "Oral Traditions", "Architecture", "Textiles"].map((cat) => (
                <button 
                  key={cat} 
                  className="block w-full text-left px-3 py-2 rounded-lg hover:bg-primary/5 hover:text-primary transition-colors text-sm font-medium"
                >
                  {cat}
                </button>
              ))}
            </div>
          </aside>

          {/* Feed */}
          <main className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ARCHIVE_DATA.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader className="p-4 pb-2">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-accent bg-accent/10 px-2 py-0.5 rounded">
                        {item.type}
                      </span>
                    </div>
                    <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                      {item.title}
                    </CardTitle>
                    <CardDescription>by {item.author}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0 flex items-center justify-between border-t mt-4 border-slate-100">
                    <div className="flex items-center gap-4">
                      <button 
                        className="flex items-center gap-1 text-xs text-slate-500 hover:text-red-500"
                        onClick={() => handleAction("like")}
                      >
                        <Heart className="w-4 h-4" /> {item.likes}
                      </button>
                      <button className="flex items-center gap-1 text-xs text-slate-500 hover:text-primary">
                        <MessageSquare className="w-4 h-4" /> {item.comments}
                      </button>
                    </div>
                    <button className="text-slate-400 hover:text-primary">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </main>
        </div>
      </div>
    </section>
  );
};