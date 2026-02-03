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

export function Contato() {
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
      title: "Localização",
      details: [
        "Aldeia Buridina",
        "Aruanã - GO",
        "CEP: 76000-000",
      ],
      color: "from-orange-500 to-red-600",
    },
    {
      icon: Phone,
      title: "Telefone",
      details: [
        "(62) 3376-1234",
        "(62) 98765-4321",
        "WhatsApp disponível",
      ],
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Mail,
      title: "E-mail",
      details: [
        "contato@aldeiaburidina.com.br",
        "turismo@aldeiaburidina.com.br",
        "Resposta em até 24h",
      ],
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      details: [
        "Segunda a Sábado",
        "08:00 - 18:00",
        "Domingos: Consultar",
      ],
      color: "from-purple-500 to-pink-600",
    },
  ];

  const activities = [
    "Passeios Culturais",
    "Trilhas Ecológicas",
    "Pesca Tradicional",
    "Artesanato e Pinturas",
    "Experiência Gastronômica",
    "Hospedagem",
    "Pacote Completo",
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-900 to-orange-800 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl text-orange-100">
              Estamos prontos para ajudá-lo a planejar sua
              visita à Aldeia Buridina
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
                    className={`bg-gradient-to-r ${info.color} p-6 text-white text-center`}
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
                Agende Sua Visita
              </h2>
              <p className="text-stone-600 mb-8">
                Preencha o formulário abaixo e entraremos em
                contato para confirmar sua reserva e fornecer
                todas as informações necessárias.
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
                    <label className="block text-stone-700 font-medium mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-stone-200 focus:border-orange-500 focus:outline-none transition-colors"
                      placeholder="Seu nome"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                  >
                    <label className="block text-stone-700 font-medium mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
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
                    <label className="block text-stone-700 font-medium mb-2">
                      Telefone/WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
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
                    <label className="block text-stone-700 font-medium mb-2">
                      Número de Pessoas
                    </label>
                    <input
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
                    <label className="block text-stone-700 font-medium mb-2">
                      Atividade de Interesse
                    </label>
                    <select
                      name="activity"
                      value={formData.activity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-stone-200 focus:border-orange-500 focus:outline-none transition-colors"
                    >
                      <option value="">
                        Selecione uma atividade
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
                    <label className="block text-stone-700 font-medium mb-2">
                      Data Preferencial
                    </label>
                    <input
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
                  <label className="block text-stone-700 font-medium mb-2">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border-2 border-stone-200 focus:border-orange-500 focus:outline-none transition-colors resize-none"
                    placeholder="Conte-nos mais sobre sua visita, dúvidas ou necessidades especiais..."
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
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle size={24} />
                      Mensagem Enviada!
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Enviar Solicitação
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
                  title="Localização da Aldeia Buridina"
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
                  Como Chegar
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm">1</span>
                    </div>
                    <p>
                      De Goiânia: 310 km pela GO-070 e GO-173
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm">2</span>
                    </div>
                    <p>
                      De Brasília: 400 km pela BR-060 e GO-173
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm">3</span>
                    </div>
                    <p>
                      Aeroporto mais próximo: Goiânia (Santa
                      Genoveva)
                    </p>
                  </li>
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
                  Dicas Importantes
                </h3>
                <ul className="space-y-3 text-stone-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      className="text-green-600 mt-0.5 flex-shrink-0"
                      size={20}
                    />
                    <span>
                      Reserve com pelo menos 7 dias de
                      antecedência
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      className="text-green-600 mt-0.5 flex-shrink-0"
                      size={20}
                    />
                    <span>
                      Melhor época: Maio a Setembro (seca)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      className="text-green-600 mt-0.5 flex-shrink-0"
                      size={20}
                    />
                    <span>
                      Trazer dinheiro em espécie para artesanato
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      className="text-green-600 mt-0.5 flex-shrink-0"
                      size={20}
                    />
                    <span>
                      Respeitar as normas culturais da aldeia
                    </span>
                  </li>
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
            Perguntas Frequentes
          </motion.h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question:
                  "Preciso fazer reserva com antecedência?",
                answer:
                  "Sim, recomendamos reservar com pelo menos 7 dias de antecedência para garantir disponibilidade e melhor planejamento de sua visita.",
              },
              {
                question:
                  "Quais formas de pagamento são aceitas?",
                answer:
                  "Aceitamos PIX, transferência bancária e dinheiro. Para artesanato local, preferimos dinheiro em espécie.",
              },
              {
                question:
                  "A aldeia é acessível para pessoas com mobilidade reduzida?",
                answer:
                  "Temos áreas adaptadas, mas algumas trilhas podem apresentar dificuldades. Entre em contato para discutirmos as melhores opções para sua visita.",
              },
              {
                question:
                  "Posso visitar a aldeia com crianças?",
                answer:
                  "Sim! Oferecemos atividades adequadas para todas as idades. Crianças adoram as oficinas de artesanato e os passeios culturais.",
              },
            ].map((faq, index) => (
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