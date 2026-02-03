import { motion } from "motion/react";
import { useState } from "react";
import { Fish, Compass, TreePine, Palette, ChevronRight, Clock, Users, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Atividades() {
  const [selectedActivity, setSelectedActivity] = useState(0);

  const activities = [
    {
      id: 0,
      icon: Compass,
      title: "Passeios Culturais",
      subtitle: "Conheça nossa história e tradições",
      description: "Embarque em uma jornada pela história e cultura da Aldeia Buridina. Nossos guias nativos compartilham histórias ancestrais, demonstrações de rituais tradicionais e a sabedoria passada através de gerações.",
      duration: "2-3 horas",
      groupSize: "4-15 pessoas",
      difficulty: "Fácil",
      includes: [
        "Guia nativo experiente",
        "Visita ao centro cultural",
        "Demonstração de rituais tradicionais",
        "Histórias e lendas ancestrais",
        "Água e lanches naturais",
      ],
      imageUrl: "https://images.unsplash.com/photo-1717412059783-e58bf305db38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZ2Vub3VzJTIwY3VsdHVyYWwlMjB0b3VyfGVufDF8fHx8MTc3MDA5MzQyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      color: "from-amber-500 to-orange-600",
    },
    {
      id: 1,
      icon: TreePine,
      title: "Trilhas Ecológicas",
      subtitle: "Explore a natureza exuberante",
      description: "Aventure-se por trilhas ecológicas que revelam a biodiversidade da região. Acompanhado por guias locais, você aprenderá sobre plantas medicinais, fauna nativa e a relação harmoniosa entre nosso povo e a natureza.",
      duration: "3-4 horas",
      groupSize: "2-10 pessoas",
      difficulty: "Moderada",
      includes: [
        "Guia especializado em flora e fauna",
        "Trilha pela mata nativa",
        "Conhecimento sobre plantas medicinais",
        "Observação de aves e animais",
        "Kit de hidratação",
      ],
      imageUrl: "https://images.unsplash.com/photo-1694100381966-5cf52917d452?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjB0cmFpbCUyMG5hdHVyZXxlbnwxfHx8fDE3NzAwMzQ5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "from-green-500 to-emerald-600",
    },
    {
      id: 2,
      icon: Fish,
      title: "Pesca Tradicional",
      subtitle: "Aprenda técnicas ancestrais",
      description: "Experimente as técnicas tradicionais de pesca utilizadas há séculos pelo nosso povo. No Rio Araguaia, você aprenderá métodos sustentáveis e terá a oportunidade de pescar peixes típicos da região.",
      duration: "4-5 horas",
      groupSize: "2-8 pessoas",
      difficulty: "Fácil a Moderada",
      includes: [
        "Equipamento de pesca tradicional",
        "Instrutor de pesca experiente",
        "Barco e transporte fluvial",
        "Conhecimento sobre espécies locais",
        "Almoço típico incluído",
      ],
      imageUrl: "https://images.unsplash.com/photo-1761768611876-bd18b7087414?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaXZlciUyMGZpc2hpbmclMjBuYXR1cmV8ZW58MXx8fHwxNzcwMDkzNDIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "from-blue-500 to-cyan-600",
    },
    {
      id: 3,
      icon: Palette,
      title: "Artesanato e Pinturas",
      subtitle: "Crie sua própria arte indígena",
      description: "Participe de oficinas práticas de artesanato indígena. Aprenda técnicas de pintura corporal, confecção de colares, cocares e outros artefatos tradicionais sob orientação de artesãos locais.",
      duration: "2-3 horas",
      groupSize: "4-12 pessoas",
      difficulty: "Fácil",
      includes: [
        "Materiais para artesanato",
        "Instrução de artesão local",
        "Pintura corporal tradicional",
        "Leve sua criação para casa",
        "Certificado de participação",
      ],
      imageUrl: "https://images.unsplash.com/photo-1759142761123-9ab45592b5f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGluZGlnZW5vdXMlMjBjcmFmdHN8ZW58MXx8fHwxNzcwMDkzNDIzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "from-purple-500 to-pink-600",
    },
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1669635455986-95af2fb7e755?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZ2Vub3VzJTIwcGVvcGxlJTIwaGlraW5nJTIwdHJhaWx8ZW58MXx8fHwxNzcwMDkzNDIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1694100381966-5cf52917d452?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjB0cmFpbCUyMG5hdHVyZXxlbnwxfHx8fDE3NzAwMzQ5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1761768611876-bd18b7087414?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaXZlciUyMGZpc2hpbmclMjBuYXR1cmV8ZW58MXx8fHwxNzcwMDkzNDIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1759142761123-9ab45592b5f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGluZGlnZW5vdXMlMjBjcmFmdHN8ZW58MXx8fHwxNzcwMDkzNDIzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  ];

  const currentActivity = activities[selectedActivity];
  const Icon = currentActivity.icon;

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-amber-900 to-orange-800 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Atividades e Experiências
            </h1>
            <p className="text-xl text-orange-100">
              Descubra aventuras únicas que conectam você com a natureza e nossa cultura ancestral
            </p>
          </motion.div>
        </div>
      </section>

      {/* Activity Selector */}
      <section className="py-12 bg-white sticky top-20 z-40 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {activities.map((activity, index) => {
              const ActivityIcon = activity.icon;
              return (
                <motion.button
                  key={activity.id}
                  onClick={() => setSelectedActivity(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-3 px-6 py-3 rounded-full font-bold transition-all ${
                    selectedActivity === index
                      ? "bg-gradient-to-r " + activity.color + " text-white shadow-lg"
                      : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                  }`}
                >
                  <ActivityIcon size={20} />
                  <span className="hidden sm:inline">{activity.title}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Activity Detail */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <motion.div
            key={selectedActivity}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="aspect-[4/3]">
                <ImageWithFallback
                  src={currentActivity.imageUrl}
                  alt={currentActivity.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={`absolute top-6 left-6 bg-gradient-to-r ${currentActivity.color} text-white p-4 rounded-xl shadow-lg`}>
                <Icon size={32} />
              </div>
            </motion.div>

            {/* Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-orange-600 font-bold mb-2">{currentActivity.subtitle}</p>
                <h2 className="text-4xl font-bold mb-6 text-amber-900">
                  {currentActivity.title}
                </h2>
                <p className="text-lg text-stone-700 leading-relaxed mb-8">
                  {currentActivity.description}
                </p>

                {/* Info Cards */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-white p-4 rounded-xl shadow-md text-center">
                    <Clock className="mx-auto mb-2 text-orange-600" size={24} />
                    <p className="text-sm text-stone-600 mb-1">Duração</p>
                    <p className="font-bold text-stone-800">{currentActivity.duration}</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-md text-center">
                    <Users className="mx-auto mb-2 text-orange-600" size={24} />
                    <p className="text-sm text-stone-600 mb-1">Grupo</p>
                    <p className="font-bold text-stone-800">{currentActivity.groupSize}</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-md text-center">
                    <MapPin className="mx-auto mb-2 text-orange-600" size={24} />
                    <p className="text-sm text-stone-600 mb-1">Dificuldade</p>
                    <p className="font-bold text-stone-800">{currentActivity.difficulty}</p>
                  </div>
                </div>

                {/* Includes List */}
                <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                  <h3 className="font-bold text-xl mb-4 text-amber-900">O que está incluído:</h3>
                  <ul className="space-y-3">
                    {currentActivity.includes.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <ChevronRight className="text-green-600 mt-0.5 flex-shrink-0" size={20} />
                        <span className="text-stone-700">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <motion.a
                  href="/contato"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`block w-full bg-gradient-to-r ${currentActivity.color} text-white text-center py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-shadow`}
                >
                  Agendar Esta Atividade
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 text-amber-900"
          >
            Galeria de Momentos
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="relative aspect-square rounded-xl overflow-hidden shadow-lg cursor-pointer"
              >
                <ImageWithFallback
                  src={image}
                  alt={`Galeria ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 text-amber-900"
          >
            O Que Nossos Visitantes Dizem
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dante Souza",
                location: "Goianira, GO",
                text: "Uma experiência transformadora! A conexão com a natureza e a cultura foi incrível. Os guias são extremamente atenciosos e conhecedores.",
                rating: 5,
              },
              {
                name: "Gabriel Braga",
                location: "Inhumas, GO",
                text: "A pesca tradicional foi o ponto alto da minha viagem. Aprendi técnicas ancestrais e vivi momentos únicos no Rio Araguaia.",
                rating: 5,
              },
              {
                name: "Yendo Leonardo",
                location: "Goiânia, GO",
                text: "As trilhas ecológicas são maravilhosas! Conhecer as plantas medicinais e a biodiversidade local foi educativo e emocionante.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-orange-500 text-xl">★</span>
                  ))}
                </div>
                <p className="text-stone-700 italic mb-4">"{testimonial.text}"</p>
                <div className="border-t border-stone-200 pt-4">
                  <p className="font-bold text-amber-900">{testimonial.name}</p>
                  <p className="text-sm text-stone-600">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
