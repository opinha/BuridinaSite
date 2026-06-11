import { motion } from "motion/react";
import { Link } from "react-router";
import { Soup, Fish, Leaf, Flame, UtensilsCrossed } from "lucide-react";
import { ImageWithFallback } from "../components/shared/ImageWithFallback";
import { useTranslation } from "../context/TranslationContext";

export function Gastronomia() {
  const { t } = useTranslation();

  const dishes = [
    {
      name: t("gastronomia.dishesList.0.name"),
      description: t("gastronomia.dishesList.0.description"),
      icon: Fish,
      time: "45 min",
      difficulty: t("gastronomia.dishesList.0.difficulty"),
    },
    {
      name: t("gastronomia.dishesList.1.name"),
      description: t("gastronomia.dishesList.1.description"),
      icon: Leaf,
      time: "30 min",
      difficulty: t("gastronomia.dishesList.1.difficulty"),
    },
    {
      name: t("gastronomia.dishesList.2.name"),
      description: t("gastronomia.dishesList.2.description"),
      icon: Soup,
      time: "60 min",
      difficulty: t("gastronomia.dishesList.2.difficulty"),
    },
  ];

  const ingredients = [
    {
      name: t("gastronomia.ingredientsList.0.name"),
      description: t("gastronomia.ingredientsList.0.description"),
      icon: "🐟",
    },
    {
      name: t("gastronomia.ingredientsList.1.name"),
      description: t("gastronomia.ingredientsList.1.description"),
      icon: "🥔",
    },
    {
      name: t("gastronomia.ingredientsList.2.name"),
      description: t("gastronomia.ingredientsList.2.description"),
      icon: "🌿",
    },
    {
      name: t("gastronomia.ingredientsList.3.name"),
      description: t("gastronomia.ingredientsList.3.description"),
      icon: "🍇",
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
            src="https://images.unsplash.com/photo-1764426382474-7709eb400f47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJlJTIwY29va2luZyUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc3MDA5MzQ5MXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt={t("gastronomia.title")}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-amber-950/80 to-stone-950/80" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <UtensilsCrossed className="w-16 h-16 mx-auto mb-6 drop-shadow-lg" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow-xl">
              {t("gastronomia.title")}
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto text-shadow-md">
              {t("gastronomia.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6 text-amber-900">
              {t("gastronomia.introTitle")}
            </h2>
            <p className="text-lg text-stone-700 leading-relaxed mb-6">
              {t("gastronomia.introPara1")}
            </p>
            <p className="text-lg text-stone-700 leading-relaxed">
              {t("gastronomia.introPara2")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-amber-900"
          >
            {t("gastronomia.dishesTitle")}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dishes.map((dish, index) => {
              const Icon = dish.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="bg-gradient-to-br from-orange-500 to-red-600 p-8 text-white text-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon size={48} className="mx-auto mb-4" />
                    </motion.div>
                    <h3 className="text-2xl font-bold">{dish.name}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-stone-700 mb-6 leading-relaxed">{dish.description}</p>
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center gap-2 text-orange-600">
                        <Flame size={16} />
                        <span className="font-medium">{dish.time}</span>
                      </div>
                      <div className="text-amber-900 font-medium">{dish.difficulty}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-24 bg-culture-pattern">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-950">
              {t("gastronomia.ingredientsTitle").split(" ")[0]} <span className="text-orange-600">{t("gastronomia.ingredientsTitle").split(" ").slice(1).join(" ")}</span>
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ingredients.map((ingredient, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-8 rounded-2xl text-center"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2, delay: index * 0.2 }}
                  className="text-6xl mb-4"
                >
                  {ingredient.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-amber-900">{ingredient.name}</h3>
                <p className="text-stone-600">{ingredient.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cooking Experience */}
      <section className="py-20 bg-gradient-to-r from-amber-900 to-orange-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">{t("gastronomia.expTitle")}</h2>
              <p className="text-lg text-orange-100 leading-relaxed mb-6">
                {t("gastronomia.expText1")}
              </p>
              <p className="text-lg text-orange-100 leading-relaxed mb-8">
                {t("gastronomia.expText2")}
              </p>
              <Link to="/contato">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl cursor-pointer"
                >
                  {t("gastronomia.expBtn")}
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl overflow-hidden shadow-2xl"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1700353763351-cb61036f3232?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGJyYXppbGlhbiUyMGZvb2R8ZW58MXx8fHwxNzcwMDkzNDkwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt={t("gastronomia.title")}
                  className="w-full h-[500px] object-cover"
                />
              </motion.div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute top-6 -left-6 bg-white text-amber-900 p-4 rounded-xl shadow-2xl"
              >
                <p className="font-bold text-lg">{t("gastronomia.badgeOrganic")}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-6 -right-6 bg-white text-amber-900 p-4 rounded-xl shadow-2xl"
              >
                <p className="font-bold text-lg">{t("gastronomia.badgeAncestral")}</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <Leaf className="text-white" size={36} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-amber-900">{t("gastronomia.featureSust")}</h3>
              <p className="text-stone-600">
                {t("gastronomia.featureSustDesc")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                <Flame className="text-white" size={36} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-amber-900">{t("gastronomia.featureTec")}</h3>
              <p className="text-stone-600">
                {t("gastronomia.featureTecDesc")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                <UtensilsCrossed className="text-white" size={36} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-amber-900">{t("gastronomia.featureComp")}</h3>
              <p className="text-stone-600">
                {t("gastronomia.featureCompDesc")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
