import { motion } from "motion/react";
import { Link } from "react-router";

const navItems = [
  { path: "/", label: "Início" },
  { path: "/atividades", label: "Atividades" },
  { path: "/cultura", label: "Cultura" },
  { path: "/gastronomia", label: "Gastronomia" },
  { path: "/hospedagem", label: "Hospedagem" },
  { path: "/contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-amber-900 to-amber-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-xl mb-4 text-orange-300">
              Aldeia Buridina
            </h3>
            <p className="text-orange-100">
              Descubra a autêntica cultura indígena e a
              natureza exuberante de Aruanã.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-bold text-xl mb-4 text-orange-300">
              Navegação
            </h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-orange-100 hover:text-orange-300 transition-colors"
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
            <h3 className="font-bold text-xl mb-4 text-orange-300">
              Contato
            </h3>
            <p className="text-orange-100 mb-2">
              Aruanã - Goiás
            </p>
            <p className="text-orange-100">
              contato@aldeiaburidina.com.br
            </p>
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
            © 2026 Aldeia Buridina. Todos os direitos
            reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
