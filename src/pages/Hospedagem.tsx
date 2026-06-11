import { motion } from "motion/react";
import { Link } from "react-router";
import { Home, Tent, Users, Wifi, UtensilsCrossed, Bed, Check } from "lucide-react";
import { ImageWithFallback } from "../components/shared/ImageWithFallback";
import { useTranslation } from "../context/TranslationContext";

export function Hospedagem() {
  const { t } = useTranslation();

  const accommodations = [
    {
      name: t("hospedagem.accommodationsList.0.name"),
      description: t("hospedagem.accommodationsList.0.description"),
      icon: Home,
      capacity: t("hospedagem.accommodationsList.0.capacity"),
      amenities: t("hospedagem.accommodationsList.0.amenities") as unknown as string[],
      price: t("hospedagem.accommodationsList.0.price"),
      styles: {
        gradient: "from-amber-500 to-orange-600",
        btnActive: "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-orange-500/25"
      },
      imageUrl: "https://images.unsplash.com/photo-1628940671199-3cae5ead7824?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZ2Vub3VzJTIwdmlsbGFnZSUyMGhvdXNlfGVufDF8fHx8MTc3MDA5MzQ5MHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: t("hospedagem.accommodationsList.1.name"),
      description: t("hospedagem.accommodationsList.1.description"),
      icon: Tent,
      capacity: t("hospedagem.accommodationsList.1.capacity"),
      amenities: t("hospedagem.accommodationsList.1.amenities") as unknown as string[],
      price: t("hospedagem.accommodationsList.1.price"),
      styles: {
        gradient: "from-green-500 to-emerald-600",
        btnActive: "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/25"
      },
      imageUrl: "https://images.unsplash.com/photo-1767284933117-70a1cba02bf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXN0aWMlMjBjYWJpbiUyMG5hdHVyZXxlbnwxfHx8fDE3NzAwOTM0OTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: t("hospedagem.accommodationsList.2.name"),
      description: t("hospedagem.accommodationsList.2.description"),
      icon: Users,
      capacity: t("hospedagem.accommodationsList.2.capacity"),
      amenities: t("hospedagem.accommodationsList.2.amenities") as unknown as string[],
      price: t("hospedagem.accommodationsList.2.price"),
      styles: {
        gradient: "from-blue-500 to-cyan-600",
        btnActive: "bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg shadow-blue-500/25"
      },
      imageUrl: "https://images.unsplash.com/photo-1631802755546-e7e35a2a6c1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHJpdmVyJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3MDA5MzQyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const commonAmenities = [
    { icon: UtensilsCrossed, text: t("hospedagem.commonItems.0") },
    { icon: Wifi, text: t("hospedagem.commonItems.1") },
    { icon: Users, text: t("hospedagem.commonItems.2") },
    { icon: Bed, text: t("hospedagem.commonItems.3") },
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
            src="https://images.unsplash.com/photo-1767284933117-70a1cba02bf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXN0aWMlMjBjYWJpbiUyMG5hdHVyZXxlbnwxfHx8fDE3NzAwOTM0OTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt={t("hospedagem.title")}
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
            <Home className="w-16 h-16 mx-auto mb-6 drop-shadow-lg" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow-xl">
              {t("hospedagem.title")}
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto text-shadow-md">
              {t("hospedagem.subtitle")}
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
              {t("hospedagem.introTitle")}
            </h2>
            <p className="text-lg text-stone-700 leading-relaxed mb-6">
              {t("hospedagem.introPara1")}
            </p>
            <p className="text-lg text-stone-700 leading-relaxed">
              {t("hospedagem.introPara2")}
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
            {t("hospedagem.optionsTitle")}
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
                      <div className={`absolute top-6 ${isEven ? 'left-6' : 'right-6'} bg-gradient-to-r ${accommodation.styles.gradient} text-white p-4 rounded-xl shadow-lg`}>
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
                        <h4 className="font-bold text-lg mb-3 text-amber-900">{t("hospedagem.amenitiesTitle")}</h4>
                        <ul className="grid grid-cols-2 gap-3">
                          {accommodation.amenities.map((amenity, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Check className="text-green-600 mt-0.5 flex-shrink-0" size={18} />
                              <span className="text-stone-700 text-sm">{amenity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link to="/contato" className="block text-center">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`w-full ${accommodation.styles.btnActive} py-3 px-6 rounded-xl font-bold transition-shadow cursor-pointer`}
                        >
                          {t("hospedagem.btnReserve")}
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Common Amenities */}
      <section className="py-24 bg-culture-pattern">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-950">
              {t("hospedagem.commonTitle")}
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full" />
          </motion.div>

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
                  className="glass-card p-8 rounded-xl text-center"
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
                {t("hospedagem.experienceTitle")}
              </h2>
              <p className="text-lg text-stone-700">
                {t("hospedagem.experienceSubtitle")}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: t("hospedagem.experienceList.0.title"),
                  description: t("hospedagem.experienceList.0.description"),
                },
                {
                  title: t("hospedagem.experienceList.1.title"),
                  description: t("hospedagem.experienceList.1.description"),
                },
                {
                  title: t("hospedagem.experienceList.2.title"),
                  description: t("hospedagem.experienceList.2.description"),
                },
                {
                  title: t("hospedagem.experienceList.3.title"),
                  description: t("hospedagem.experienceList.3.description"),
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
              {t("hospedagem.infoTitle")}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-orange-600 font-bold text-xl mb-2">{t("hospedagem.checkinLabel")}</div>
                <p className="text-stone-600">{t("hospedagem.checkinDesc") || "14:00 - 18:00"}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="text-orange-600 font-bold text-xl mb-2">{t("hospedagem.checkoutLabel")}</div>
                <p className="text-stone-600">{t("hospedagem.checkoutDesc") || "Até 12:00"}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="text-orange-600 font-bold text-xl mb-2">{t("hospedagem.cancellationLabel")}</div>
                <p className="text-stone-600">{t("hospedagem.cancellationDesc") || "Gratuito até 7 dias antes"}</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12 p-6 bg-amber-50 rounded-xl"
            >
              <h3 className="font-bold text-lg mb-3 text-amber-900">{t("hospedagem.whatToBringTitle")}</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-stone-700">
                {(t("hospedagem.whatToBringItems") as unknown as string[]).map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="text-green-600" size={18} />
                    {item}
                  </li>
                ))}
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
            {t("hospedagem.ctaReserveTitle")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto"
          >
            {t("hospedagem.ctaReserveText")}
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
              {t("hospedagem.ctaReserveBtn")}
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
}
