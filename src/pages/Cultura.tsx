import { motion } from "motion/react";
import { Link } from "react-router";
import { BookOpen, Music, Users2, Sparkles } from "lucide-react";
import { ImageWithFallback } from "../components/shared/ImageWithFallback";
import { useTranslation } from "../context/TranslationContext";

import arte1 from "../assets/arte-1.jpg";
import arte2 from "../assets/arte-2.jpg";
import arte3 from "../assets/arte-3.jpg";
import arte4 from "../assets/arte-4.jpg";

export function Cultura() {
  const { t } = useTranslation();

  const culturalAspects = [
    {
      icon: BookOpen,
      title: t("cultura.pillars.history.title"),
      description: t("cultura.pillars.history.description"),
      styles: {
        bg: "bg-orange-50 dark:bg-orange-950/20",
        icon: "text-orange-600 dark:text-orange-400",
        border: "border border-orange-100/50 dark:border-orange-900/30"
      }
    },
    {
      icon: Music,
      title: t("cultura.pillars.music.title"),
      description: t("cultura.pillars.music.description"),
      styles: {
        bg: "bg-emerald-50 dark:bg-emerald-950/20",
        icon: "text-emerald-600 dark:text-emerald-400",
        border: "border border-emerald-100/50 dark:border-emerald-900/30"
      }
    },
    {
      icon: Users2,
      title: t("cultura.pillars.comunidade.title"),
      description: t("cultura.pillars.comunidade.description"),
      styles: {
        bg: "bg-blue-50 dark:bg-blue-950/20",
        icon: "text-blue-600 dark:text-blue-400",
        border: "border border-blue-100/50 dark:border-blue-900/30"
      }
    },
    {
      icon: Sparkles,
      title: t("cultura.pillars.spiritual.title"),
      description: t("cultura.pillars.spiritual.description"),
      styles: {
        bg: "bg-purple-50 dark:bg-purple-950/20",
        icon: "text-purple-600 dark:text-purple-400",
        border: "border border-purple-100/50 dark:border-purple-900/30"
      }
    },
  ];

  const timeline = [
    {
      year: t("cultura.timeline.0.year"),
      title: t("cultura.timeline.0.title"),
      description: t("cultura.timeline.0.description"),
    },
    {
      year: t("cultura.timeline.1.year"),
      title: t("cultura.timeline.1.title"),
      description: t("cultura.timeline.1.description"),
    },
    {
      year: t("cultura.timeline.2.year"),
      title: t("cultura.timeline.2.title"),
      description: t("cultura.timeline.2.description"),
    },
    {
      year: t("cultura.timeline.3.year"),
      title: t("cultura.timeline.3.title"),
      description: t("cultura.timeline.3.description"),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1737219238862-45244c3a15ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZ2Vub3VzJTIwY3VsdHVyZSUyMGNlcmVtb255fGVufDF8fHx8MTc3MDA5MzQ4OXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt={t("cultura.title")}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-amber-950/80 to-stone-950/80" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-shadow-xl"
          >
            {t("cultura.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl text-white max-w-3xl mx-auto text-shadow-md"
          >
            {t("cultura.subtitle")}
          </motion.p>
        </div>
      </section>

      {/* Cultural Aspects */}
      <section className="py-24 bg-culture-pattern">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-950">{t("cultura.pillarsTitle")} <span className="text-orange-600">{t("cultura.pillarsTitleHighlight")}</span></h2>
            <p className="text-xl text-stone-700 max-w-2xl mx-auto">
              {t("cultura.pillarsSubtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {culturalAspects.map((aspect, index) => {
              const Icon = aspect.icon;
              const { bg, icon, border } = aspect.styles;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="glass-card p-8 rounded-2xl text-center"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 mx-auto mb-4 rounded-full ${bg} ${border} flex items-center justify-center`}
                  >
                    <Icon className={icon} size={32} />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-amber-900 dark:text-amber-100">{aspect.title}</h3>
                  <p className="text-stone-600 dark:text-stone-300">{aspect.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-amber-900">{t("cultura.timelineTitle")}</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Uma linha do tempo que celebra nossa história e evolução cultural
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative mb-12 last:mb-0"
              >
                <div className="flex items-center gap-8">
                  {/* Timeline dot */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-full shadow-lg z-10"
                  />

                  {/* Content card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex-1 bg-white p-6 rounded-xl shadow-lg"
                  >
                    <p className="text-orange-600 font-bold mb-2">{event.year}</p>
                    <h3 className="text-2xl font-bold mb-2 text-amber-900">{event.title}</h3>
                    <p className="text-stone-600">{event.description}</p>
                  </motion.div>
                </div>

                {/* Connecting line */}
                {index < timeline.length - 1 && (
                  <div className="absolute left-[7px] top-12 w-0.5 h-12 bg-gradient-to-b from-orange-300 to-orange-100" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Artesanato Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-amber-900">{t("cultura.craftTitle")}</h2>
              <p className="text-lg text-stone-700 leading-relaxed mb-6">
                {t("cultura.craftPara1")}
              </p>
              <p className="text-lg text-stone-700 leading-relaxed mb-8">
                {t("cultura.craftPara2")}
              </p>
              <motion.div
                className="flex flex-wrap gap-4"
              >
                {((t("cultura.craftItems") || []) as string[]).map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full font-medium"
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
              >
                <ImageWithFallback
                  src={arte1}
                  alt="Artesanato Buridina e Bdèburè 1"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white mt-12"
              >
                <ImageWithFallback
                  src={arte2}
                  alt="Artesanato Buridina e Bdèburè 2"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white -mt-12"
              >
                <ImageWithFallback
                  src={arte3}
                  alt="Artesanato Buridina e Bdèburè 3"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
              >
                <ImageWithFallback
                  src={arte4}
                  alt="Artesanato Buridina e Bdèburè 4"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-amber-900 to-orange-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            {t("cultura.ctaTitle")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto"
          >
            {t("cultura.ctaText")}
          </motion.p>
          <Link to="/contato">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-orange-600 px-10 py-4 rounded-full font-bold text-lg shadow-xl cursor-pointer"
            >
              {t("cultura.ctaBtn")}
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
}
