import { motion } from "motion/react";
import { Link } from "react-router";
import logo from "../../assets/logo.png";
import { useTranslation } from "../../context/TranslationContext";

export function Footer() {
  const { t } = useTranslation();

  const navItems = [
    { path: "/", label: t("nav.home") },
    { path: "/atividades", label: t("nav.activities") },
    { path: "/cultura", label: t("nav.culture") },
    { path: "/gastronomia", label: t("nav.gastronomy") },
    { path: "/hospedagem", label: t("nav.accommodation") },
    { path: "/contato", label: t("nav.contact") },
  ];
  return (
    <footer className="bg-amber-950 text-white py-16 relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-culture-pattern-dark opacity-5" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <img
                src={logo}
                alt="Logo Aldeia Buridina e Bdèburè"
                className="w-10 h-10 rounded-full object-cover shadow-lg"
              />
              <h3 className="text-2xl font-black tracking-tighter">BURIDINA E BDÈBURÈ</h3>
            </div>
            <p className="text-orange-100/60 max-w-sm text-lg leading-relaxed">
              {t("footer.caption")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-bold text-lg uppercase tracking-widest mb-6 text-orange-400">
              {t("footer.explore")}
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-orange-100/70 hover:text-orange-300 transition-all hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-bold text-lg uppercase tracking-widest mb-6 text-orange-400">
              Contato
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-orange-100/50 uppercase tracking-tighter mb-1">Localização</p>
                <p className="text-orange-100">Aruanã - Goiás</p>
              </div>
              <div>
                <p className="text-sm text-orange-100/50 uppercase tracking-tighter mb-1">E-mail</p>
                <p className="text-orange-100">contato@aldeiaburidina.com.br</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 pt-8 border-t border-orange-700 text-center text-orange-200"
        >
          <p>
            {t("footer.copyright")}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
