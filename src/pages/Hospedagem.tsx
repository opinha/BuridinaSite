import { motion } from "motion/react";
import { Link } from "react-router";
import { Home, ArrowRight } from "lucide-react";
import heroImage from "../assets/hero-buridina.jpg";

/**
 * Hospedagem — em breve.
 *
 * A aldeia não oferece pernoite hoje. A página existe apenas para informar
 * isso e recolher o interesse de quem gostaria de ser avisado. Nada de
 * acomodações, comodidades ou preços: enquanto o serviço não existir, qualquer
 * detalhe aqui vira promessa ao visitante.
 */
export function Hospedagem() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="relative flex-1 flex items-center justify-center overflow-hidden pt-28 pb-24 text-white">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Aldeia Buridina, em Aruanã"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/85 via-amber-950/85 to-stone-950/90" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center mx-auto mb-8">
              <Home size={36} />
            </div>

            <span className="eyebrow inline-block px-4 py-1.5 rounded-full bg-orange-500 text-white mb-6">
              Em breve
            </span>

            <h1 className="display-2 mb-6">Hospedagem</h1>

            <p className="lead text-white/85 mb-4">
              A Aldeia Buridina ainda não recebe visitantes para pernoite.
            </p>
            <p className="text-white/70 leading-relaxed mb-10">
              A comunidade está estudando como oferecer hospedagem sem comprometer a
              rotina, a privacidade e os espaços de uso coletivo das famílias. Quando
              houver novidade, ela será anunciada aqui.
            </p>

            <Link to="/contato">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full font-bold text-lg inline-flex items-center gap-2 shadow-lg shadow-black/25 cursor-pointer"
              >
                Quero ser avisado
                <ArrowRight size={20} />
              </motion.button>
            </Link>

            <p className="text-white/50 text-sm mt-6">
              Enquanto isso, conheça as{" "}
              <Link to="/atividades" className="text-orange-300 underline underline-offset-4 hover:text-orange-200">
                atividades
              </Link>{" "}
              e a{" "}
              <Link to="/gastronomia" className="text-orange-300 underline underline-offset-4 hover:text-orange-200">
                gastronomia
              </Link>{" "}
              que já recebem visitantes.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
