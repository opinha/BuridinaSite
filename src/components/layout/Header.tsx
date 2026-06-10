import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const navItems = [
  { path: "/", label: "Início" },
  { path: "/atividades", label: "Atividades" },
  { path: "/cultura", label: "Cultura" },
  { path: "/gastronomia", label: "Gastronomia" },
  { path: "/hospedagem", label: "Hospedagem" },
  { path: "/contato", label: "Contato" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-amber-950/95 backdrop-blur-xl shadow-2xl py-3 border-b border-white/10"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 group drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
            >
              <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:rotate-12 transition-transform">
                B
              </div>
              <div>
                <h1 className="text-white font-black text-2xl tracking-tighter leading-none">
                  BURIDINA
                </h1>
                <p className="text-orange-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                  Aruanã • Goiás
                </p>
              </div>
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Link key={item.path} to={item.path}>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative px-4 py-2 text-sm font-bold uppercase tracking-widest transition-all rounded-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] ${
                    location.pathname === item.path
                      ? "text-orange-400 bg-white/10"
                      : "text-white hover:text-orange-300 hover:bg-white/5"
                  }`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 border border-orange-500/30 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pb-4 overflow-hidden"
            >
              {navItems.map((item, index) => (
                <Link key={item.path} to={item.path}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`block py-3 px-4 text-white font-medium rounded-lg ${
                      location.pathname === item.path
                        ? "bg-orange-600"
                        : "hover:bg-amber-800"
                    }`}
                  >
                    {item.label}
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
