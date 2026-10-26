import { motion } from "motion/react";
import { Link } from "react-router";
import {
  ShieldCheck,
  Database,
  Target,
  Lock,
  UserCheck,
  Cookie,
  Mail,
} from "lucide-react";

export function Privacidade() {
  const sections = [
    {
      icon: Database,
      title: "Dados que coletamos",
      body: (
        <>
          <p className="mb-4">
            Para realizar seu cadastro e utilizar as funcionalidades do site e do
            aplicativo, poderemos solicitar informações como nome, telefone,
            e-mail, data de nascimento, informações de contato, dados
            relacionados a reservas ou visitas e fotografias, quando necessárias
            para as funcionalidades disponibilizadas.
          </p>
        </>
      ),
    },
    {
      icon: Target,
      title: "Para que usamos",
      body: (
        <p>
          Os dados coletados serão utilizados somente para finalidades
          relacionadas aos serviços da Aldeia Buridina, como identificação do
          usuário, realização de cadastros, atendimento, agendamento de visitas e
          atividades, reservas, comunicação com o visitante e funcionamento dos
          serviços oferecidos pela plataforma.
        </p>
      ),
    },
    {
      icon: Lock,
      title: "Segurança e compartilhamento",
      body: (
        <p>
          As informações serão tratadas com medidas adequadas de segurança e não
          serão utilizadas para finalidades incompatíveis com aquelas informadas
          ao usuário. Eventual compartilhamento de dados deverá ocorrer somente
          quando necessário para a prestação dos serviços, cumprimento de
          obrigação legal ou nas demais situações permitidas pela LGPD.
        </p>
      ),
    },
    {
      icon: UserCheck,
      title: "Seus direitos como titular",
      body: (
        <>
          <p className="mb-4">
            A legislação garante ao titular direitos relacionados ao acesso,
            correção, eliminação em determinadas situações e, quando aplicável,
            revogação do consentimento.
          </p>
          <ul className="space-y-2 list-disc pl-5">
            <li>Confirmação da existência de tratamento e acesso aos dados</li>
            <li>Correção de dados incompletos, inexatos ou desatualizados</li>
            <li>
              Eliminação dos dados tratados com consentimento, nas situações
              previstas em lei
            </li>
            <li>Informação sobre o compartilhamento de dados</li>
            <li>Revogação do consentimento, quando aplicável</li>
          </ul>
        </>
      ),
    },
    {
      icon: Cookie,
      title: "Cookies",
      body: (
        <>
          <p className="mb-4">
            Utilizamos cookies e tecnologias semelhantes para o funcionamento do
            site e para melhorar sua experiência de navegação. Os cookies
            necessários mantêm preferências básicas, como o idioma escolhido e o
            registro do seu consentimento, e são indispensáveis para o
            funcionamento da plataforma.
          </p>
          <p>
            Cookies opcionais, usados para medir a audiência e entender como o
            site é utilizado, só são ativados mediante a sua aceitação no aviso
            exibido no primeiro acesso. Você pode recusar os cookies opcionais
            sem prejuízo à navegação e pode alterar sua escolha a qualquer
            momento limpando os dados do site no seu navegador.
          </p>
        </>
      ),
    },
    {
      icon: Mail,
      title: "Fale com o encarregado",
      body: (
        <p>
          Dúvidas ou solicitações relacionadas ao tratamento dos seus dados
          pessoais podem ser enviadas para{" "}
          <a
            href="mailto:contato@aldeiaburidina.com.br"
            className="text-orange-700 font-semibold underline underline-offset-4 hover:text-orange-800"
          >
            contato@aldeiaburidina.com.br
          </a>
          .
        </p>
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-gradient-to-b from-amber-900 to-orange-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-culture-pattern-dark opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
              <ShieldCheck size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacidade e Proteção de Dados
            </h1>
            <p className="text-lg text-orange-100">
              A Aldeia Buridina respeita a sua privacidade e realiza o tratamento
              de dados pessoais de acordo com a Lei Geral de Proteção de Dados
              Pessoais – LGPD (Lei nº 13.709/2018).
            </p>
          </motion.div>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.article
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-amber-50/60 border border-amber-100 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white flex items-center justify-center flex-shrink-0">
                      <Icon size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-amber-900">
                      {section.title}
                    </h2>
                  </div>
                  <div className="text-stone-700 leading-relaxed">
                    {section.body}
                  </div>
                </motion.article>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-amber-900 to-orange-800 text-white p-8 rounded-2xl"
            >
              <h2 className="text-2xl font-bold mb-4">Consentimento</h2>
              <p className="text-orange-100 leading-relaxed mb-6">
                Ao continuar com o cadastro, o usuário declara que leu e
                compreendeu as informações sobre o tratamento de seus dados
                pessoais.
              </p>
              <Link
                to="/contato"
                className="inline-flex items-center bg-white text-amber-900 px-6 py-3 rounded-xl font-bold hover:bg-orange-100 transition-colors"
              >
                Ir para o formulário
              </Link>
            </motion.div>

            <p className="text-sm text-stone-500 text-center">
              Última atualização: agosto de 2026.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
