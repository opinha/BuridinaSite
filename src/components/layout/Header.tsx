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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        location.pathname === "/"
          ? isScrolled
            ? "bg-amber-950/95 backdrop-blur-md shadow-lg"
            : "bg-gradient-to-b from-amber-950/90 to-transparent"
          : "bg-amber-950/95 backdrop-blur-md shadow-lg border-b border-orange-950/20"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <div>
                <h1 className="text-white font-bold text-xl">
                  Aldeia Buridina
                </h1>
                <p className="text-orange-200 text-xs">
                  Aruanã - GO
                </p>
              </div>
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link key={item.path} to={item.path}>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                  className={`relative text-white font-medium transition-colors ${
                    location.pathname === item.path
                      ? "text-orange-300"
                      : "hover:text-orange-200"
                  }`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-300"
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
