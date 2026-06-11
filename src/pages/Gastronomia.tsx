import { motion } from "motion/react";
import { Link } from "react-router";
import { Soup, Fish, Leaf, Flame, UtensilsCrossed } from "lucide-react";
import { ImageWithFallback } from "../components/shared/ImageWithFallback";

export function Gastronomia() {
  const dishes = [
    {
      name: "Peixe Assado na Folha",
      description: "Peixe fresco do Rio Araguaia temperado com ervas nativas e assado em folhas de bananeira",
      icon: Fish,
      time: "45 min",
      difficulty: "Tradicional",
    },
    {
      name: "Beiju com Tucupi",
      description: "Tapioca crocante acompanhada do autêntico molho tucupi e ervas da região",
      icon: Leaf,
      time: "30 min",
      difficulty: "Tradicional",
    },
    {
      name: "Caldo de Piranha",
      description: "Caldo nutritivo preparado com piranha fresca, legumes e temperos ancestrais",
      icon: Soup,
      time: "60 min",
      difficulty: "Tradicional",
    },
  ];

  const ingredients = [
    {
      name: "Peixes do Araguaia",
      description: "Tucunaré, pintado, piranha e outras espécies pescadas sustentavelmente",
      icon: "🐟",
    },
    {
      name: "Mandioca",
      description: "Base da nossa alimentação, transformada em farinha, beiju e tapioca",
      icon: "🥔",
    },
    {
      name: "Ervas Nativas",
      description: "Plantas aromáticas e medicinais que temperam e curam",
      icon: "🌿",
    },
    {
      name: "Frutas Regionais",
      description: "Pequi, buriti, mangaba e outras frutas do cerrado",
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
            alt="Gastronomia Tradicional"
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
              Gastronomia Tradicional
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto text-shadow-md">
              Sabores ancestrais que contam a história do nosso povo e sua conexão com a terra
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
              Uma Experiência Gastronômica Única
            </h2>
            <p className="text-lg text-stone-700 leading-relaxed mb-6">
              Nossa culinária é um reflexo direto da abundância natural que nos cerca. Cada prato é
              preparado com ingredientes frescos, técnicas ancestrais e o conhecimento transmitido
              através de gerações.
            </p>
            <p className="text-lg text-stone-700 leading-relaxed">
              Do Rio Araguaia vêm os peixes mais frescos, das roças vem a mandioca que alimenta
              nosso povo há séculos, e do cerrado colhemos frutas e ervas que dão sabor e vida aos
              nossos pratos tradicionais.
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
            Pratos Tradicionais
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
              Ingredientes <span className="text-orange-600">da Nossa Terra</span>
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
              <h2 className="text-4xl font-bold mb-6">Experiência Gastronômica</h2>
              <p className="text-lg text-orange-100 leading-relaxed mb-6">
                Mais do que apenas degustar, convidamos você a participar do processo completo.
                Desde a colheita dos ingredientes até o preparo final, cada etapa é uma
                oportunidade de aprendizado e conexão.
              </p>
              <p className="text-lg text-orange-100 leading-relaxed mb-8">
                Nossas cozinheiras tradicionais compartilham segredos culinários passados de mãe
                para filha, ensinando não apenas receitas, mas histórias, significados e a
                importância de cada ingrediente em nossa cultura.
              </p>
              <Link to="/contato">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl cursor-pointer"
                >
                  Reserve Sua Experiência Gastronômica
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
                  alt="Comida tradicional"
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
                <p className="font-bold text-lg">100% Orgânico</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-6 -right-6 bg-white text-amber-900 p-4 rounded-xl shadow-2xl"
              >
                <p className="font-bold text-lg">Receitas Ancestrais</p>
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
              <h3 className="text-xl font-bold mb-3 text-amber-900">Ingredientes Sustentáveis</h3>
              <p className="text-stone-600">
                Cultivamos e coletamos respeitando os ciclos da natureza
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
              <h3 className="text-xl font-bold mb-3 text-amber-900">Técnicas Tradicionais</h3>
              <p className="text-stone-600">
                Métodos de preparo transmitidos através de gerações
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
              <h3 className="text-xl font-bold mb-3 text-amber-900">Experiência Completa</h3>
              <p className="text-stone-600">
                Da colheita ao prato, participe de todo o processo
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
