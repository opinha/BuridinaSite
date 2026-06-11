import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router";
import { Fish, Compass, TreePine, Palette, ChevronRight, Clock, Users, MapPin } from "lucide-react";
import { ImageWithFallback } from "../components/shared/ImageWithFallback";
import { useTranslation } from "../context/TranslationContext";

import aldeia1 from "../assets/aldeia-1.jpg";
import aldeia2 from "../assets/aldeia-2.jpg";
import aldeia3 from "../assets/aldeia-3.jpg";
import aldeia4 from "../assets/aldeia-4.jpg";
import aldeia5 from "../assets/aldeia-5.jpg";
import arte1 from "../assets/arte-1.jpg";
import arte2 from "../assets/arte-2.jpg";

export function Atividades() {
  const [selectedActivity, setSelectedActivity] = useState(0);
  const { t } = useTranslation();

  const activities = [
    {
      id: 0,
      icon: Compass,
      title: t("atividades.activitiesList.0.title"),
      subtitle: t("atividades.activitiesList.0.subtitle"),
      description: t("atividades.activitiesList.0.description"),
      duration: t("atividades.activitiesList.0.durationVal"),
      groupSize: t("atividades.activitiesList.0.groupVal"),
      difficulty: t("atividades.activitiesList.0.diffVal"),
      includes: t("atividades.activitiesList.0.includesItems"),
      imageUrl: aldeia2,
      styles: {
        gradient: "from-amber-500 to-orange-600",
        btnActive: "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg"
      }
    },
    {
      id: 1,
      icon: TreePine,
      title: t("atividades.activitiesList.1.title"),
      subtitle: t("atividades.activitiesList.1.subtitle"),
      description: t("atividades.activitiesList.1.description"),
      duration: t("atividades.activitiesList.1.durationVal"),
      groupSize: t("atividades.activitiesList.1.groupVal"),
      difficulty: t("atividades.activitiesList.1.diffVal"),
      includes: t("atividades.activitiesList.1.includesItems"),
      imageUrl: aldeia3,
      styles: {
        gradient: "from-green-500 to-emerald-600",
        btnActive: "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg"
      }
    },
    {
      id: 2,
      icon: Fish,
      title: t("atividades.activitiesList.2.title"),
      subtitle: t("atividades.activitiesList.2.subtitle"),
      description: t("atividades.activitiesList.2.description"),
      duration: t("atividades.activitiesList.2.durationVal"),
      groupSize: t("atividades.activitiesList.2.groupVal"),
      difficulty: t("atividades.activitiesList.2.diffVal"),
      includes: t("atividades.activitiesList.2.includesItems"),
      imageUrl: aldeia1,
      styles: {
        gradient: "from-blue-500 to-cyan-600",
        btnActive: "bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg"
      }
    },
    {
      id: 3,
      icon: Palette,
      title: t("atividades.activitiesList.3.title"),
      subtitle: t("atividades.activitiesList.3.subtitle"),
      description: t("atividades.activitiesList.3.description"),
      duration: t("atividades.activitiesList.3.durationVal"),
      groupSize: t("atividades.activitiesList.3.groupVal"),
      difficulty: t("atividades.activitiesList.3.diffVal"),
      includes: t("atividades.activitiesList.3.includesItems"),
      imageUrl: arte1,
      styles: {
        gradient: "from-purple-500 to-pink-600",
        btnActive: "bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg"
      }
    },
  ];

  const galleryImages = [
    aldeia1,
    aldeia2,
    aldeia3,
    aldeia4,
    aldeia5,
    arte1,
    arte2,
  ];

  const currentActivity = activities[selectedActivity];
  const Icon = currentActivity.icon;

  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-20 text-white">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src={aldeia4}
            alt="Atividades Buridina e Bdèburè"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-amber-950/80 to-stone-950/80" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow-xl">
              {t("atividades.title")}
            </h1>
            <p className="text-xl text-white text-shadow-md font-medium">
              {t("atividades.subtitle")}
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
                      ? activity.styles.btnActive
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
              <div className={`absolute top-6 left-6 bg-gradient-to-r ${currentActivity.styles.gradient} text-white p-4 rounded-xl shadow-lg`}>
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
                    <p className="text-sm text-stone-600 mb-1">{t("atividades.duration")}</p>
                    <p className="font-bold text-stone-800">{currentActivity.duration}</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-md text-center">
                    <Users className="mx-auto mb-2 text-orange-600" size={24} />
                    <p className="text-sm text-stone-600 mb-1">{t("atividades.groupSize")}</p>
                    <p className="font-bold text-stone-800">{currentActivity.groupSize}</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-md text-center">
                    <MapPin className="mx-auto mb-2 text-orange-600" size={24} />
                    <p className="text-sm text-stone-600 mb-1">{t("atividades.difficulty")}</p>
                    <p className="font-bold text-stone-800">{currentActivity.difficulty}</p>
                  </div>
                </div>

                {/* Includes List */}
                <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                  <h3 className="font-bold text-xl mb-4 text-amber-900">{t("atividades.includes")}</h3>
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
                <Link to="/contato" className="block w-full">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full bg-gradient-to-r ${currentActivity.styles.gradient} text-white text-center py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer`}
                  >
                    {t("atividades.bookBtn")}
                  </motion.button>
                </Link>
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
            {t("atividades.galleryTitle")}
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
            {t("atividades.testimonialsTitle")}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: t("atividades.testimonials.0.name"),
                location: t("atividades.testimonials.0.location"),
                text: t("atividades.testimonials.0.text"),
                rating: 5,
              },
              {
                name: t("atividades.testimonials.1.name"),
                location: t("atividades.testimonials.1.location"),
                text: t("atividades.testimonials.1.text"),
                rating: 5,
              },
              {
                name: t("atividades.testimonials.2.name"),
                location: t("atividades.testimonials.2.location"),
                text: t("atividades.testimonials.2.text"),
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
