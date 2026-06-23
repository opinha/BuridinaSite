# 🌿 Plataforma Oficial de Turismo — Aldeia Buridina e Bdèburè

Esta é a plataforma oficial de turismo, difusão cultural e agendamento de vivências da **Aldeia Buridina e Bdèburè**, do povo **Iny (Karajá)**.

Localizada em **Aruanã — GO**, às margens do Rio Araguaia, a comunidade abre suas portas virtuais por meio desta plataforma para conectar visitantes a experiências autênticas de etnoturismo, trilhas ecológicas, gastronomia regional, artesanato tradicional e hospedagens tradicionais. O projeto atua como uma ponte digital que conecta a sabedoria ancestral ao futuro.

---

## 🌿 Funcionalidades do Sistema

### 🧭 Roteamento e Navegação SPA
- Roteamento completo de páginas gerenciado com `react-router` (Single Page Application).
- Páginas estruturadas para cobertura completa do destino: **Início**, **Atividades**, **Cultura**, **Gastronomia**, **Hospedagem** e **Contato**.
- Navbar dinâmica e responsiva que adapta sua transparência, sombra e filtro de desfoque de fundo (*backdrop blur*) com base na rolagem da página (*scroll*).

### 🎬 Experiência Visual Premium
- Hero Section na página inicial com efeito Parallax dinâmico e animações de escala suave construídas com `motion/react`.
- Transições de tela, revelação ao rolar a página (*scroll-triggered animations*) e micro-interações fluidas aplicadas aos botões e links.
- Layouts responsivos e otimizados para dispositivos móveis e desktops utilizando **Tailwind CSS v4**.

### 🌐 Sistema de Internacionalização (i18n) Nativo
- Provedor de tradução customizado (`TranslationProvider`) baseado em **Context API** do React.
- Suporte a múltiplos idiomas: **Português (pt)** e a língua nativa **Iny (iny)**.
- Persistência automática da preferência de idioma utilizando o `localStorage` do navegador.
- SEO e Acessibilidade automatizados: alteração em tempo real do atributo `lang` no elemento HTML raiz (`pt-BR` para Português ou `kjr` para a língua Iny-Karajá, de acordo com o padrão ISO 639-3).
- Mecanismo de segurança contra quebras (*fallback*): caso uma chave de tradução esteja ausente no idioma selecionado, o sistema exibe automaticamente a versão em português.

### ✨ Catálogos e Seções Interativas
- **Atividades e Experiências**: Vitrine de serviços com categorias detalhadas de passeios culturais, trilhas ecológicas, pesca tradicional e oficinas de artesanato.
- **Hospedagem**: Cartões detalhados das acomodações disponíveis (Redários, Oca Tradicional, Cabanas) mostrando capacidades, facilidades inclusas e faixa de preço.
- **Gastronomia Tradicional**: Apresentação da culinária típica do povo Iny com destaque aos pratos locais.
- **Formulário de Contato e Reserva**: Formulário interativo com validação de dados em tempo real, seleção de atividades de interesse, número de visitantes e simulação de envio com feedback visual de sucesso.
- **FAQ Interativo**: Acordeão retrátil para esclarecimento de dúvidas frequentes dos visitantes.

### 🛡️ Robustez Visual
- Componente utilitário `ImageWithFallback` para prevenção de falhas de carregamento de mídia externa. Se uma imagem falhar ao carregar devido a link quebrado, um marcador gráfico baseado em SVG inline é exibido de forma amigável no lugar.

---

## 📂 Estrutura do Projeto

O código está organizado seguindo as melhores práticas do desenvolvimento moderno com React:

```text
src/
├── assets/          # Imagens, logotipos e ilustrações
├── components/      # Componentes compartilhados e de layout
│   ├── layout/      # Header (Navbar), Footer e RootLayout
│   ├── shared/      # Utilitários globais como o ImageWithFallback
│   └── ui/          # Componentes de interface do Shadcn/UI (Dialog, Accordion, etc.)
├── context/         # Provedor de contexto global (TranslationContext)
├── locales/         # Dicionário de traduções (translations.json)
├── pages/           # Páginas principais que compõem o roteiro da aplicação
├── router/          # Configuração de rotas baseadas no React Router v7
├── globals.css      # Estilos globais e configurações de tema do Tailwind CSS v4
├── main.tsx         # Ponto de entrada do React
└── vite-env.d.ts    # Definições de tipo do ambiente do Vite
```

---

## 🛠️ Tecnologias Utilizadas

- ⚛️ **React.js 18** — Biblioteca base para construção da interface de usuário.
- 🟦 **TypeScript** — Tipagem estática para aumentar a robustez e manutenibilidade do código.
- ⚡ **Vite 6 (SWC)** — Ferramenta de build extremamente rápida para desenvolvimento local.
- 🔀 **React Router v7** — Gerenciador de rotas declarativas e navegação SPA.
- 🎬 **Motion/React** — Nova biblioteca oficial da equipe do Framer Motion para animações físicas de alta fidelidade.
- 🎨 **Tailwind CSS v4** — Framework de estilização utilitária de última geração com compilação ultra veloz.
- 🧩 **Shadcn/UI & Radix UI** — Componentes de UI acessíveis e altamente customizáveis.
- 🔍 **Lucide React** — Conjunto de ícones vetoriais modernos e consistentes.

---

## 🚀 Como Executar o Projeto Localmente

### ✅ Pré-requisitos

Certifique-se de ter instalado em sua máquina:
- **Node.js** (versão 18 ou superior recomendada)
- Gerenciador de pacotes **npm** (incluso com o Node)

---

### 📥 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/opinha/BuridinaSite.git
```

2. Acesse o diretório do projeto:
```bash
cd BuridinaSite
```

3. Instale as dependências:
```bash
npm install
```

4. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

5. O servidor será aberto em seu navegador padrão. Caso contrário, acesse manualmente:
```url
http://localhost:3000
```
*(Nota: A porta local `3000` está configurada como padrão no arquivo `vite.config.ts`)*.

---

### 📦 Compilação para Produção

Para gerar os arquivos estáticos otimizados para produção, execute:

```bash
npm run build
```

Os arquivos gerados serão salvos na pasta `/build` (definida na configuração do Vite), prontos para serem hospedados em qualquer servidor estático.

---

## 🌐 Deploy na Vercel

O projeto conta com o arquivo `vercel.json` pré-configurado para implantações de Single Page Applications na Vercel. Ele redireciona todas as requisições de rotas internas para o `index.html` para evitar erros `404` na navegação direta e define a pasta `/build` como o diretório final de saída.
