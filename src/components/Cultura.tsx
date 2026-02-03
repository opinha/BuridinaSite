import { motion } from "motion/react";
import { BookOpen, Music, Users2, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Cultura() {
  const culturalAspects = [
    {
      icon: BookOpen,
      title: "História e Tradições",
      description: "Nossa história remonta a séculos de conexão com a terra e preservação de saberes ancestrais.",
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: Music,
      title: "Música e Dança",
      description: "Ritmos tradicionais e danças cerimoniais que celebram a vida e nossa relação com a natureza.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Users2,
      title: "Comunidade",
      description: "Valores de coletividade, respeito aos anciãos e transmissão de conhecimento entre gerações.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Sparkles,
      title: "Espiritualidade",
      description: "Conexão profunda com os elementos da natureza e rituais que honram nossos ancestrais.",
      color: "from-purple-500 to-pink-600",
    },
  ];

  const timeline = [
    {
      year: "Ancestral",
      title: "Origens",
      description: "Estabelecimento das primeiras comunidades às margens do Rio Araguaia",
    },
    {
      year: "Século XIX",
      title: "Consolidação",
      description: "Fortalecimento das tradições e expansão do território da aldeia",
    },
    {
      year: "Século XX",
      title: "Preservação",
      description: "Início dos esforços de preservação cultural e reconhecimento territorial",
    },
    {
      year: "Século XXI",
      title: "Turismo Cultural",
      description: "Abertura da aldeia para visitação turística sustentável e compartilhamento cultural",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1737219238862-45244c3a15ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZ2Vub3VzJTIwY3VsdHVyZSUyMGNlcmVtb255fGVufDF8fHx8MTc3MDA5MzQ4OXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Cultura Buridina"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-amber-900/70 to-stone-900/70" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Nossa Cultura
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl text-orange-100 max-w-3xl mx-auto"
          >
            Conheça a rica herança cultural do povo Buridina, preservada e compartilhada através das gerações
          </motion.p>
        </div>
      </section>

      {/* Cultural Aspects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-amber-900">Pilares Culturais</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Nossa cultura se sustenta em valores fundamentais que guiam nossa comunidade há gerações
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {culturalAspects.map((aspect, index) => {
              const Icon = aspect.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-gradient-to-b from-stone-50 to-white p-8 rounded-2xl shadow-lg text-center"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${aspect.color} flex items-center justify-center`}
                  >
                    <Icon className="text-white" size={32} />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-amber-900">{aspect.title}</h3>
                  <p className="text-stone-600">{aspect.description}</p>
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
            <h2 className="text-4xl font-bold mb-4 text-amber-900">Nossa Jornada</h2>
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
              <h2 className="text-4xl font-bold mb-6 text-amber-900">Artesanato Tradicional</h2>
              <p className="text-lg text-stone-700 leading-relaxed mb-6">
                Nosso artesanato é mais do que arte - é a expressão viva de nossa identidade cultural.
                Cada peça carrega símbolos, histórias e técnicas transmitidas através de gerações.
              </p>
              <p className="text-lg text-stone-700 leading-relaxed mb-8">
                Os artesãos da Aldeia Buridina trabalham com materiais naturais como sementes, fibras,
                madeira e tintas extraídas de plantas. Cada criação é única e sustentável, respeitando
                profundamente a natureza que nos sustenta.
              </p>
              <motion.div
                className="flex flex-wrap gap-4"
              >
                {["Colares", "Cocares", "Cestos", "Instrumentos", "Pinturas", "Esculturas"].map((item, index) => (
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
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="aspect-square rounded-2xl overflow-hidden shadow-lg"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1763669029345-7e37cfa6e059?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXRpdmUlMjBhbWVyaWNhbiUyMGFydGlmYWN0c3xlbnwxfHx8fDE3NzAwOTM0OTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Artesanato 1"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="aspect-square rounded-2xl overflow-hidden shadow-lg mt-8"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759142761123-9ab45592b5f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGluZGlnZW5vdXMlMjBjcmFmdHN8ZW58MXx8fHwxNzcwMDkzNDIzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Artesanato 2"
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
            Vivencie Nossa Cultura
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto"
          >
            Participe de workshops, cerimônias e experiências culturais autênticas
          </motion.p>
          <motion.a
            href="/contato"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-orange-600 px-10 py-4 rounded-full font-bold text-lg shadow-xl"
          >
            Agende Sua Experiência Cultural
          </motion.a>
        </div>
      </section>
    </div>
  );
}
