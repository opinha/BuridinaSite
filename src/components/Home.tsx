import { motion } from "motion/react";
import { Link } from "react-router";
import { MapPin, Palmtree, UtensilsCrossed, Home as HomeIcon, Camera, ArrowRight } from "lucide-react";
import heroImage from "figma:asset/14ee7ed2e8ffd3abac8a4a78c217ccba2ac9b94a.png";

export function Home() {
  const activities = [
    {
      icon: Camera,
      title: "Passeios",
      description: "Explore trilhas naturais e conheça os pontos históricos da aldeia",
      path: "/atividades",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Palmtree,
      title: "Trilhas",
      description: "Aventure-se em trilhas ecológicas com guias locais experientes",
      path: "/atividades",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: UtensilsCrossed,
      title: "Gastronomia",
      description: "Saboreie a autêntica culinária indígena e pratos tradicionais",
      path: "/gastronomia",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: HomeIcon,
      title: "Hospedagem",
      description: "Experimente a hospitalidade local em nossas acomodações",
      path: "/hospedagem",
      color: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={heroImage}
            alt="Entrada da Aldeia Buridina"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-amber-900/60 via-transparent to-stone-900/80" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Bem-vindo à
              <span className="block text-orange-300 mt-2">Aldeia Buridina</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl mb-8 text-orange-100 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Descubra a autêntica cultura indígena, natureza exuberante e experiências
              inesquecíveis em Aruanã, Goiás
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
            >
              <Link to="/atividades">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 mx-auto sm:mx-0"
                >
                  Explorar Atividades
                  <ArrowRight size={20} />
                </motion.button>
              </Link>

              <Link to="/contato">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/20 backdrop-blur-md border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg mx-auto sm:mx-0"
                >
                  Agendar Visita
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-3 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Sobre a Aldeia */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6 text-orange-600"
            >
              <MapPin size={28} />
              <span className="font-bold text-lg">Aruanã, Goiás</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-900">
              Uma Jornada Cultural Única
            </h2>

            <p className="text-lg text-stone-700 leading-relaxed mb-8">
              A Aldeia Buridina é um destino turístico que oferece uma experiência autêntica
              de imersão na cultura indígena. Localizada em Aruanã, às margens do Rio Araguaia,
              nossa comunidade preserva tradições ancestrais enquanto compartilha sua rica
              herança cultural com visitantes de todo o mundo.
            </p>

            <p className="text-lg text-stone-700 leading-relaxed">
              Aqui você encontrará a harmonia perfeita entre natureza exuberante, cultura
              vibrante e a calorosa hospitalidade de nosso povo. Cada experiência é cuidadosamente
              preparada para conectar você com as raízes e sabedoria que atravessam gerações.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Atividades Cards */}
      <section className="py-20 bg-gradient-to-b from-stone-50 to-amber-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-amber-900"
          >
            Experiências Inesquecíveis
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <Link key={index} to={activity.path}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group"
                  >
                    <div className={`bg-gradient-to-br ${activity.color} p-8 text-white relative overflow-hidden`}>
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                      <Icon size={48} className="relative z-10" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-amber-900 group-hover:text-orange-600 transition-colors">
                        {activity.title}
                      </h3>
                      <p className="text-stone-600 leading-relaxed">
                        {activity.description}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-amber-900 to-orange-800 text-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Pronto para Sua Aventura?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto text-orange-100"
          >
            Entre em contato conosco e planeje sua visita à Aldeia Buridina. Nossa equipe está
            pronta para criar uma experiência personalizada e memorável.
          </motion.p>

          <Link to="/contato">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-orange-600 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-shadow"
            >
              Agende Sua Visita
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
}
