import { motion } from "motion/react";
import { Link } from "react-router";
import { Waves, MapPin, Home as HomeIcon, Landmark, Sprout, ArrowRight } from "lucide-react";
import heroImage from "../assets/hero-buridina.jpg";

/**
 * História das aldeias Buridina e Bdè Burè.
 *
 * O texto foi enviado pela própria comunidade e está reproduzido aqui de forma
 * fiel, apenas organizado em seções para leitura na web. Qualquer ajuste de
 * conteúdo deve voltar à comunidade antes de ser publicado.
 */

type Secao = {
  icone: typeof Waves;
  titulo: string;
  paragrafos: string[];
};

const SECOES: Secao[] = [
  {
    icone: Waves,
    titulo: "O rio e a origem do povo Iny",
    paragrafos: [
      "Na cosmologia Iny, a origem do povo está ligada ao fundo das águas do Rio Araguaia. O rio não é apenas um recurso natural ou uma referência geográfica. É elemento central da vida comunitária, da espiritualidade, da alimentação, da mobilidade, da memória e da própria identidade do povo.",
      "Ao longo de gerações, as famílias Iny estabeleceram aldeias, espaços de moradia, áreas de pesca, locais de plantio, caminhos, cemitérios e espaços de realização de atividades culturais nas duas margens do Araguaia e nas proximidades da foz do Rio Vermelho.",
    ],
  },
  {
    icone: MapPin,
    titulo: "Uma presença antiga no território",
    paragrafos: [
      "Registros históricos descrevem a presença indígena tanto na região da foz do Rio Vermelho quanto nas praias situadas do outro lado do Rio Araguaia, em território atualmente pertencente ao Estado de Mato Grosso. Uma dessas áreas é hoje conhecida como Praia do Índio.",
      "A ocupação Iny não se limitava a um único ponto fixo. A comunidade utilizava um território amplo, orientada pelos ciclos do rio, pela pesca, pelo cultivo nas áreas de vazante, pela caça, pela coleta e pelas relações familiares e culturais.",
      "Pesquisas arqueológicas realizadas na região também identificaram vestígios cerâmicos associados à ocupação indígena no vale do Araguaia. Esses registros, somados às fontes históricas e à memória oral, demonstram que a presença Iny em Aruanã não decorre de ocupação recente. Trata-se de uma relação territorial construída e mantida ao longo de muitos séculos.",
    ],
  },
  {
    icone: HomeIcon,
    titulo: "A formação da Aldeia Buridina",
    paragrafos: [
      "Com o passar do tempo, as famílias foram estabelecendo suas moradias de maneira mais permanente na margem goiana do Rio Araguaia, no local onde se consolidou a Aldeia Buridina. A aldeia tornou-se um dos principais espaços de residência, organização comunitária e continuidade cultural do povo Iny em Aruanã.",
      "Sua constituição, contudo, não significou o abandono das demais áreas tradicionalmente utilizadas. As famílias continuaram atravessando o rio e percorrendo outros pontos do território para pescar, plantar, caçar, coletar alimentos e materiais, realizar atividades culturais e buscar proteção em períodos de conflito ou ameaça.",
      "O território tradicional de Buridina era muito mais amplo que a área atualmente reconhecida como aldeia. Abrangia praias, lagos, áreas de cerrado, matas, caminhos e locais de pesca e cultivo. Alguns desses espaços possuíam importância especial para a alimentação e para a vida comunitária. Outros eram utilizados em cerimônias, na formação dos jovens, na convivência entre as famílias e na transmissão de conhecimentos entre as gerações.",
    ],
  },
  {
    icone: Landmark,
    titulo: "O avanço da cidade e a redução do território",
    paragrafos: [
      "A expansão da ocupação não indígena e o crescimento urbano de Aruanã alteraram profundamente essa dinâmica. A abertura de ruas, a implantação de imóveis, a instalação de atividades comerciais e turísticas e a formação de propriedades particulares avançaram sobre áreas tradicionalmente utilizadas pela comunidade. Espaços de pesca, coleta, circulação e realização de práticas culturais foram reduzidos ou passaram a ser controlados por terceiros.",
      "Nesse processo, a Aldeia Buridina ficou cercada pela cidade e limitada a uma pequena área. O crescimento urbano ocorreu sem assegurar a proteção adequada dos espaços necessários à reprodução física e cultural da comunidade. Áreas de valor histórico foram afetadas, inclusive locais relacionados aos antepassados e à memória coletiva.",
      "Apesar da redução territorial e da proximidade crescente com a cidade, Buridina permaneceu como espaço de resistência e continuidade do povo Iny. A comunidade preservou a produção artesanal, os conhecimentos tradicionais, as relações familiares, as práticas de pesca e a ligação com o Rio Araguaia. Também foram desenvolvidas iniciativas comunitárias voltadas ao fortalecimento da língua e da educação escolar indígena.",
    ],
  },
  {
    icone: Sprout,
    titulo: "A retomada e a formação de Bdè Burè",
    paragrafos: [
      "Foi nesse contexto de luta territorial que se formou a Aldeia Bdè Burè. A área onde a aldeia está situada já era utilizada tradicionalmente como espaço de caça, coleta, plantio e proteção. Em momentos de conflito e pressão sobre Buridina, o local também servia de abrigo e esconderijo para famílias indígenas.",
      "A ocupação mais permanente da área ocorreu durante o processo de retomada de espaços tradicionais. Naquele período, nem todas as famílias encontravam moradia disponível em Buridina. Algumas passaram, então, a permanecer provisoriamente na área retomada, fortalecendo a presença indígena e contribuindo para sua proteção.",
      "Com o tempo, Bdè Burè também recebeu famílias Iny provenientes de outras partes do território tradicional do povo, inclusive grupos Karajá e Javaé ligados à Ilha do Bananal. A aldeia passou a reunir diferentes vínculos familiares e trajetórias, mantendo a identidade Iny e ampliando a ocupação indígena na região de Aruanã.",
      "O surgimento de Bdè Burè não representa uma separação em relação a Buridina. As duas aldeias fazem parte de uma mesma história territorial e mantêm relações familiares, culturais, econômicas e comunitárias.",
    ],
  },
];

const TERRAS = [
  {
    nome: "Karajá de Aruanã I",
    detalhe: "Abrange a Aldeia Buridina, cercada pela área urbana de Aruanã.",
  },
  {
    nome: "Karajá de Aruanã II",
    detalhe: "Área que permite a continuidade da pesca, do plantio, da caça e da coleta.",
  },
  {
    nome: "Karajá de Aruanã III",
    detalhe: "Espaço de proteção ambiental e de circulação entre lugares historicamente usados pelas famílias.",
  },
];

export function Historia() {
  return (
    <div className="min-h-screen">
      {/* Abertura */}
      <section className="relative pt-36 pb-24 overflow-hidden text-white">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Entrada da Aldeia Buridina, em Aruanã"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/85 via-amber-950/80 to-stone-950/95" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="eyebrow text-orange-300">Povo Iny Mahãdu</span>
            <h1 className="display-2 mt-4 mb-6">
              História das aldeias <span className="text-orange-300">Buridina e Bdè Burè</span>
            </h1>
            <p className="lead measure mx-auto text-white/85">
              As aldeias Buridina e Bdè Burè estão localizadas no município de Aruanã, em
              Goiás, às margens do Rio Araguaia, e representam a permanência histórica e a
              resistência territorial do povo Iny Mahãdu, conhecido também como Karajá.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Linha do texto */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="measure mx-auto text-lg leading-relaxed text-stone-700 mb-16"
          >
            A formação dessas aldeias está diretamente relacionada à ligação ancestral dos
            Iny com o rio, às mudanças ocorridas na ocupação da região e às estratégias
            comunitárias adotadas para preservar o território, a cultura e as formas
            próprias de vida.
          </motion.p>

          <div className="max-w-3xl mx-auto space-y-16">
            {SECOES.map((secao, index) => {
              const Icone = secao.icone;
              return (
                <motion.article
                  key={secao.titulo}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center flex-shrink-0">
                      <Icone size={22} />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-amber-950">
                      {secao.titulo}
                    </h2>
                  </div>

                  <div className="space-y-5">
                    {secao.paragrafos.map((texto, i) => (
                      <p key={i} className="text-stone-700 leading-relaxed text-[1.05rem]">
                        {texto}
                      </p>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Terras Indígenas */}
      <section className="py-20 bg-culture-pattern">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="display-2 text-amber-950 mb-4">
              Terras Indígenas <span className="text-orange-600">Karajá de Aruanã</span>
            </h2>
            <p className="lead measure mx-auto text-stone-700">
              O reconhecimento das Terras Indígenas Karajá de Aruanã I, II e III representou
              um passo importante para a proteção de partes do território tradicional. Essas
              áreas possuem funções diferentes e complementares para a comunidade.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {TERRAS.map((terra, index) => (
              <motion.div
                key={terra.nome}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-7 shadow-lg border border-amber-100"
              >
                <span className="eyebrow text-orange-600">Terra Indígena</span>
                <h3 className="text-xl font-bold text-amber-900 mt-2 mb-3">{terra.nome}</h3>
                <p className="text-stone-600 leading-relaxed">{terra.detalhe}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hoje */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 space-y-5">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="display-2 text-amber-950 mb-6"
          >
            As duas aldeias hoje
          </motion.h2>

          <p className="text-stone-700 leading-relaxed text-[1.05rem]">
            A história recente das duas aldeias também é marcada pela vigilância constante do
            território. A comunidade participa de ações de monitoramento, acompanha
            intervenções realizadas nas áreas indígenas e comunica aos órgãos responsáveis
            situações de ocupação ou uso irregular.
          </p>
          <p className="text-stone-700 leading-relaxed text-[1.05rem]">
            Buridina mantém viva a história de uma aldeia que resistiu ao avanço da cidade e
            à redução de seu espaço. Bdè Burè representa a retomada de uma área tradicional e
            a ampliação das condições de permanência das famílias no território.
          </p>
          <p className="text-stone-700 leading-relaxed text-[1.05rem]">
            As duas aldeias permanecem ligadas ao Rio Araguaia, às praias, às áreas de pesca
            e plantio e aos caminhos percorridos pelos antepassados. Sua história demonstra
            que o território Iny não pode ser compreendido apenas pelos limites atuais das
            áreas demarcadas. Ele também é composto por memórias, relações familiares,
            práticas culturais, lugares de importância coletiva e formas tradicionais de uso
            da terra e das águas.
          </p>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-l-4 border-orange-500 pl-6 py-2 my-10"
          >
            <p className="text-xl md:text-2xl font-serif text-amber-950 leading-snug">
              A história de Buridina e Bdè Burè não se resume à criação de dois núcleos de
              moradia. Trata-se da continuidade de uma presença indígena antiga e da defesa
              de um território tradicional.
            </p>
          </motion.blockquote>

          <p className="text-stone-700 leading-relaxed text-[1.05rem]">
            A permanência do povo Iny Mahãdu em Aruanã resulta de uma trajetória de adaptação
            e resistência. Mesmo diante da ocupação urbana, da redução territorial e das
            dificuldades para proteger integralmente suas terras, a comunidade continua
            fortalecendo suas aldeias, transmitindo conhecimentos, produzindo artesanato,
            mantendo sua relação com o Rio Araguaia e reivindicando o respeito aos seus
            direitos.
          </p>
        </div>
      </section>

      {/* Chamada */}
      <section className="py-16 bg-gradient-to-r from-amber-900 to-orange-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Conheça a cultura que sustenta essa história
          </h2>
          <Link
            to="/cultura"
            className="inline-flex items-center gap-2 bg-white text-orange-700 px-8 py-4 rounded-full font-bold hover:bg-orange-50 transition-colors"
          >
            Ver cultura e tradições
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
