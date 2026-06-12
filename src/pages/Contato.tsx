import { motion } from "motion/react";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  CheckCircle,
} from "lucide-react";
import { ImageWithFallback } from "../components/shared/ImageWithFallback";
import { useTranslation } from "../context/TranslationContext";

export function Contato() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "1",
    activity: "",
    date: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular envio do formulário
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        guests: "1",
        activity: "",
        date: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t("contato.info.location.title"),
      details: t("contato.info.location.details") as unknown as string[],
      styles: {
        gradientClass: "bg-gradient-to-r from-orange-500 to-red-600",
      },
    },
    {
      icon: Phone,
      title: t("contato.info.phone.title"),
      details: t("contato.info.phone.details") as unknown as string[],
      styles: {
        gradientClass: "bg-gradient-to-r from-green-500 to-emerald-600",
      },
    },
    {
      icon: Mail,
      title: t("contato.info.email.title"),
      details: t("contato.info.email.details") as unknown as string[],
      styles: {
        gradientClass: "bg-gradient-to-r from-blue-500 to-cyan-600",
      },
    },
    {
      icon: Clock,
      title: t("contato.info.hours.title"),
      details: t("contato.info.hours.details") as unknown as string[],
      styles: {
        gradientClass: "bg-gradient-to-r from-purple-500 to-pink-600",
      },
    },
  ];

  const activities = t("contato.activityOptions") as unknown as string[];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-20 text-white">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1920"
            alt={t("contato.title")}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-amber-900/70 to-stone-900/70" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow-xl">
              {t("contato.title")}
            </h1>
            <p className="text-xl text-orange-100 text-shadow-md">
              {t("contato.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
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
                  <div
                    className={`${info.styles.gradientClass} p-6 text-white text-center`}
                  >
                    <Icon size={40} className="mx-auto" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-amber-900 text-center">
                      {info.title}
                    </h3>
                    {info.details.map((detail, i) => (
                      <p
                        key={i}
                        className="text-stone-600 text-center mb-1"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Form and Map Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-amber-900">
                {t("contato.formTitle")}
              </h2>
              <p className="text-stone-600 mb-8">
                {t("contato.formSubtitle")}
              </p>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <label htmlFor="name" className="block text-stone-700 font-medium mb-2">
                      {t("contato.formName")} <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      className="w-full px-4 py-3 rounded-xl border-2 border-stone-200 focus:border-orange-500 focus:outline-none transition-colors"
                      placeholder={t("contato.formNamePlaceholder")}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                  >
                    <label htmlFor="email" className="block text-stone-700 font-medium mb-2">
                      {t("contato.formEmail")} <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      className="w-full px-4 py-3 rounded-xl border-2 border-stone-200 focus:border-orange-500 focus:outline-none transition-colors"
                      placeholder="seu@email.com"
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <label htmlFor="phone" className="block text-stone-700 font-medium mb-2">
                      {t("contato.formPhone")} <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      className="w-full px-4 py-3 rounded-xl border-2 border-stone-200 focus:border-orange-500 focus:outline-none transition-colors"
                      placeholder="(00) 00000-0000"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 }}
                  >
                    <label htmlFor="guests" className="block text-stone-700 font-medium mb-2">
                      {t("contato.formGuests")}
                    </label>
                    <input
                      id="guests"
                      type="number"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      min="1"
                      className="w-full px-4 py-3 rounded-xl border-2 border-stone-200 focus:border-orange-500 focus:outline-none transition-colors"
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <label htmlFor="activity" className="block text-stone-700 font-medium mb-2">
                      {t("contato.formSelect")}
                    </label>
                    <select
                      id="activity"
                      name="activity"
                      value={formData.activity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-stone-200 focus:border-orange-500 focus:outline-none transition-colors"
                    >
                      <option value="">
                        {t("contato.formSelectPlaceholder")}
                      </option>
                      {activities.map((activity, i) => (
                        <option key={i} value={activity}>
                          {activity}
                        </option>
                      ))}
                    </select>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 }}
                  >
                    <label htmlFor="date" className="block text-stone-700 font-medium mb-2">
                      {t("contato.formDate")}
                    </label>
                    <input
                      id="date"
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-stone-200 focus:border-orange-500 focus:outline-none transition-colors"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="message" className="block text-stone-700 font-medium mb-2">
                    {t("contato.formMessage")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border-2 border-stone-200 focus:border-orange-500 focus:outline-none transition-colors resize-none"
                    placeholder={t("contato.formMessagePlaceholder")}
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.45 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitted}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle size={24} />
                      {t("contato.successTitle")}
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      {t("contato.formSubmit")}
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="rounded-2xl overflow-hidden shadow-lg h-96 bg-stone-200 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.89!2d-51.08!3d-14.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDU1JzEyLjAiUyA1McKwMDQnNDguMCJX!5e0!3m2!1sen!2sbr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title={t("contato.mapTitle")}
                />
              </div>

              {/* Info Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-amber-900 to-orange-800 text-white p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold mb-4">
                  {t("contato.howToGetTitle")}
                </h3>
                <ul className="space-y-3">
                  {(t("contato.howToGetItems") as unknown as string[]).map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm">{i + 1}</span>
                      </div>
                      <p>{step}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-amber-50 p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold mb-4 text-amber-900">
                  {t("contato.tipsTitle")}
                </h3>
                <ul className="space-y-3 text-stone-700">
                  {(t("contato.tipsItems") as unknown as string[]).map((tip, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle
                        className="text-green-600 mt-0.5 flex-shrink-0"
                        size={20}
                      />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-stone-50 to-amber-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 text-amber-900"
          >
            {t("contato.faqTitle")}
          </motion.h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {(t("contato.faqList") as unknown as any[]).map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold mb-3 text-amber-900">
                  {faq.question}
                </h3>
                <p className="text-stone-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
