import { useState } from "react";
import { LanguageProvider } from "./hooks/useLanguage";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/home/Hero";
import { Archive } from "./components/archive/Archive";
import { VirtualMap } from "./components/museums/VirtualMap";
import { Dashboard } from "./components/dashboard/Dashboard";
import { Leaderboard } from "./components/gamification/Leaderboard";
import { Toaster } from "./components/ui/sonner";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Hero onExplore={() => setCurrentPage("archive")} />;
      case "archive":
        return <Archive />;
      case "museums":
        return <VirtualMap />;
      case "dashboard":
        return <Dashboard />;
      case "leaderboard":
        return <Leaderboard />;
      default:
        return <Hero onExplore={() => setCurrentPage("archive")} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
        <Navbar onNavigate={setCurrentPage} />
        
        <main>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </main>

        <footer className="bg-slate-900 text-white py-16 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  C
                </div>
                <span className="font-black text-2xl tracking-tighter">CUGA MEDIA</span>
              </div>
              <p className="text-slate-400 max-w-sm mb-8">
                Preserving African heritage through high-performance storytelling and gamified exploration.
              </p>
              <div className="flex gap-4">
                {/* Social icons would go here */}
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:bg-primary transition-colors" />
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:bg-primary transition-colors" />
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:bg-primary transition-colors" />
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-500">Platform</h4>
              <ul className="space-y-4 text-slate-400">
                <li className="hover:text-primary cursor-pointer transition-colors" onClick={() => setCurrentPage("archive")}>The Archive</li>
                <li className="hover:text-primary cursor-pointer transition-colors" onClick={() => setCurrentPage("museums")}>Virtual Museums</li>
                <li className="hover:text-primary cursor-pointer transition-colors" onClick={() => setCurrentPage("leaderboard")}>Leaderboard</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-500">Legal</h4>
              <ul className="space-y-4 text-slate-400">
                <li className="hover:text-primary cursor-pointer transition-colors">Accessibility</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2024 Culture Games Africa by CUGA Media. All rights reserved.</p>
            <p>Designed for Accessibility (WCAG 2.1)</p>
          </div>
        </footer>
        
        <Toaster position="bottom-right" richColors />
      </div>
    </LanguageProvider>
  );
}

export default App;