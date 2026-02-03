import { motion } from "motion/react";
import { Home, Tent, Users, Wifi, UtensilsCrossed, Bed, Check } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hospedagem() {
  const accommodations = [
    {
      name: "Cabanas Tradicionais",
      description: "Experimente a autenticidade de nossa arquitetura tradicional com todo conforto necessário",
      icon: Home,
      capacity: "2-4 pessoas",
      amenities: ["Camas confortáveis", "Banheiro privativo", "Varanda com rede", "Ventilador"],
      price: "A partir de R$ 200/noite",
      color: "from-amber-500 to-orange-600",
      imageUrl: "https://images.unsplash.com/photo-1628940671199-3cae5ead7824?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZ2Vub3VzJTIwdmlsbGFnZSUyMGhvdXNlfGVufDF8fHx8MTc3MDA5MzQ5MHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Camping na Natureza",
      description: "Para os aventureiros que querem dormir sob as estrelas em um ambiente natural preservado",
      icon: Tent,
      capacity: "1-6 pessoas",
      amenities: ["Área para barraca", "Banheiros compartilhados", "Fogueira comunitária", "Duchas"],
      price: "A partir de R$ 80/noite",
      color: "from-green-500 to-emerald-600",
      imageUrl: "https://images.unsplash.com/photo-1767284933117-70a1cba02bf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXN0aWMlMjBjYWJpbiUyMG5hdHVyZXxlbnwxfHx8fDE3NzAwOTM0OTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Casa Comunitária",
      description: "Perfeita para grupos maiores, oferece integração total com a comunidade",
      icon: Users,
      capacity: "6-12 pessoas",
      amenities: ["Quartos compartilhados", "Cozinha equipada", "Sala de convivência", "Área externa"],
      price: "A partir de R$ 150/pessoa/noite",
      color: "from-blue-500 to-cyan-600",
      imageUrl: "https://images.unsplash.com/photo-1631802755546-e7e35a2a6c1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHJpdmVyJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3MDA5MzQyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const commonAmenities = [
    { icon: UtensilsCrossed, text: "Refeições tradicionais incluídas" },
    { icon: Wifi, text: "Wi-Fi disponível na área comum" },
    { icon: Users, text: "Guias nativos para atividades" },
    { icon: Bed, text: "Roupa de cama e toalhas" },
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
            src="https://images.unsplash.com/photo-1767284933117-70a1cba02bf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXN0aWMlMjBjYWJpbiUyMG5hdHVyZXxlbnwxfHx8fDE3NzAwOTM0OTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Hospedagem na aldeia"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-amber-900/70 to-stone-900/70" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Home className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Hospedagem
            </h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Sinta-se em casa na Aldeia Buridina com acomodações autênticas e confortáveis
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6 text-amber-900">
              Uma Estadia Memorável
            </h2>
            <p className="text-lg text-stone-700 leading-relaxed mb-6">
              Nossa hospedagem vai além do simples alojamento - é uma imersão completa na vida e
              cultura da Aldeia Buridina. Cada opção foi pensada para proporcionar conforto
              enquanto mantém a autenticidade de nossa tradição.
            </p>
            <p className="text-lg text-stone-700 leading-relaxed">
              Acorde com o canto dos pássaros, desfrute de refeições preparadas com ingredientes
              locais e durma embalado pelos sons da natureza. Aqui, cada momento é uma conexão
              profunda com a terra e com nosso povo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Accommodation Options */}
      <section className="py-20 bg-gradient-to-b from-stone-50 to-amber-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-amber-900"
          >
            Opções de Acomodação
          </motion.h2>

          <div className="space-y-12">
            {accommodations.map((accommodation, index) => {
              const Icon = accommodation.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                    {/* Image */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`relative h-80 lg:h-auto overflow-hidden ${!isEven ? 'lg:col-start-2' : ''}`}
                    >
                      <ImageWithFallback
                        src={accommodation.imageUrl}
                        alt={accommodation.name}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute top-6 ${isEven ? 'left-6' : 'right-6'} bg-gradient-to-r ${accommodation.color} text-white p-4 rounded-xl shadow-lg`}>
                        <Icon size={32} />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <h3 className="text-3xl font-bold mb-4 text-amber-900">
                        {accommodation.name}
                      </h3>
                      <p className="text-lg text-stone-700 mb-6 leading-relaxed">
                        {accommodation.description}
                      </p>

                      <div className="mb-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Users className="text-orange-600" size={24} />
                          <span className="text-stone-700 font-medium">{accommodation.capacity}</span>
                        </div>
                        <div className="text-2xl font-bold text-orange-600 mb-4">
                          {accommodation.price}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-bold text-lg mb-3 text-amber-900">Comodidades:</h4>
                        <ul className="grid grid-cols-2 gap-3">
                          {accommodation.amenities.map((amenity, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Check className="text-green-600 mt-0.5 flex-shrink-0" size={18} />
                              <span className="text-stone-700 text-sm">{amenity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <motion.a
                        href="/contato"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`block text-center bg-gradient-to-r ${accommodation.color} text-white py-3 px-6 rounded-xl font-bold shadow-lg hover:shadow-xl transition-shadow`}
                      >
                        Reservar Agora
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Common Amenities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-amber-900"
          >
            Incluído em Todas as Acomodações
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {commonAmenities.map((amenity, index) => {
              const Icon = amenity.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-b from-amber-50 to-white p-6 rounded-xl shadow-lg text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                    <Icon className="text-white" size={28} />
                  </div>
                  <p className="text-stone-700 font-medium">{amenity.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-6 text-amber-900">
                Sua Experiência na Aldeia
              </h2>
              <p className="text-lg text-stone-700">
                O que esperar durante sua estadia conosco
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Check-in Personalizado",
                  description: "Recepção calorosa com apresentação da aldeia e orientação completa sobre as atividades disponíveis",
                },
                {
                  title: "Café da Manhã Regional",
                  description: "Comece o dia com frutas frescas, tapioca, beiju e outras delícias típicas da nossa culinária",
                },
                {
                  title: "Atividades Diárias",
                  description: "Participe de trilhas, pesca, artesanato e outras experiências culturais conforme seu interesse",
                },
                {
                  title: "Jantar Comunitário",
                  description: "Compartilhe refeições e histórias com outros visitantes e membros da comunidade",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <h3 className="text-xl font-bold mb-3 text-amber-900">{item.title}</h3>
                  <p className="text-stone-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-12 text-center text-amber-900"
            >
              Informações Importantes
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-orange-600 font-bold text-xl mb-2">Check-in</div>
                <p className="text-stone-600">14:00 - 18:00</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="text-orange-600 font-bold text-xl mb-2">Check-out</div>
                <p className="text-stone-600">Até 12:00</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="text-orange-600 font-bold text-xl mb-2">Cancelamento</div>
                <p className="text-stone-600">Gratuito até 7 dias antes</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12 p-6 bg-amber-50 rounded-xl"
            >
              <h3 className="font-bold text-lg mb-3 text-amber-900">O que trazer:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-stone-700">
                <li className="flex items-center gap-2">
                  <Check className="text-green-600" size={18} />
                  Roupas leves e confortáveis
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-600" size={18} />
                  Calçados para trilha
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-600" size={18} />
                  Protetor solar e repelente
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-600" size={18} />
                  Garrafa de água reutilizável
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-600" size={18} />
                  Lanterna ou headlamp
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-600" size={18} />
                  Câmera fotográfica
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-amber-900 to-orange-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            Reserve Sua Hospedagem
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto"
          >
            Entre em contato para verificar disponibilidade e fazer sua reserva
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
            Fazer Reserva
          </motion.a>
        </div>
      </section>
    </div>
  );
}
