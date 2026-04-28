import { useState } from "react";
import { useLanguage } from "../../hooks/useLanguage";
import { Language } from "../../i18n/translations";
import { Menu, X, Globe, User, Trophy, Map, Library, Home } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: t.nav.home, icon: Home },
    { id: "archive", label: t.nav.archive, icon: Library },
    { id: "museums", label: t.nav.museums, icon: Map },
    { id: "leaderboard", label: t.nav.leaderboard, icon: Trophy },
    { id: "dashboard", label: t.nav.dashboard, icon: User },
  ];

  const languages: { id: Language; label: string }[] = [
    { id: "en", label: "English" },
    { id: "fr", label: "Français" },
    { id: "sw", label: "Kiswahili" },
    { id: "ar", label: "العربية" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => onNavigate("home")}
          role="button"
          aria-label="Culture Games Africa Home"
        >
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
            C
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:block text-primary">
            CUGA
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-2"
              aria-label={item.label}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Change Language">
                <Globe className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.id}
                  onClick={() => setLanguage(lang.id)}
                  className={language === lang.id ? "bg-accent" : ""}
                >
                  {lang.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button 
            className="hidden sm:flex" 
            variant="outline"
            onClick={() => onNavigate("dashboard")}
          >
            {t.nav.login}
          </Button>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-background border-b border-border absolute w-full left-0 shadow-lg"
          >
            <div className="flex flex-col p-4 gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent text-left font-medium"
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </button>
              ))}
              <Button onClick={() => onNavigate("dashboard")}>{t.nav.login}</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};