```markdown
# 🌿 Plataforma Oficial de Turismo — Aldeia Buridina

Esta é a plataforma oficial de turismo e difusão cultural da **Aldeia Buridina**, do povo **Kariri-Xocó**.

O projeto tem como objetivo promover a cultura ancestral, conectar visitantes a experiências de imersão e gerenciar com segurança as reservas de atividades de etnoturismo, trilhas, vivências e hospedagens na comunidade, localizada em **Porto Real do Colégio — AL**.

Uma ponte digital que conecta a tradição ancestral ao futuro.

---

## 🌿 Funcionalidades do Sistema

### 🧭 Navegação Imersiva e Fluida
- Roteamento completo de páginas gerenciado de forma otimizada com `react-router`.
- Navbar dinâmica e responsiva que adapta sua transparência e blur ao comportamento de rolagem (*scroll*) do usuário.
- Links internos e navegação estruturada para rápido acesso a todas as seções e serviços da aldeia.

### 🎯 Experiência Visual Hero Interativa
- Apresentação de alto impacto visual na página inicial com efeito Parallax dinâmico construído via `motion/react`.
- Destaque à identidade guerreira do povo (Bdèburè).
- Indicadores visuais de rolagem (*Scroll Indicators*) animados para guiar o usuário.

### 🌐 Sistema Nativo de Internacionalização (i18n)
- Gerenciamento global de idiomas feito através de um provedor customizado (`TranslationProvider`) baseado em Context API do React.
- Suporte nativo a múltiplos idiomas, incluindo **Português (pt)** e a língua indígena **Iny (iny)**.
- Persistência automatizada do idioma preferido do visitante utilizando `localStorage`.
- Acessibilidade e SEO otimizados: alteração em tempo real do atributo `lang` no elemento HTML principal (utilizando mapeamentos como a ISO 639-3).
- Arquitetura de segurança com *fallback* automático para o idioma padrão caso uma chave específica não seja localizada.

### ✨ Componentes e Catálogo de Atividades
- Animações fluidas de entrada e interações (*fade-in*, *scale*, *slide*) que são ativadas à medida que o usuário visualiza o conteúdo (*viewport*).
- Vitrine de serviços e atividades com cards categorizados (Passeios, Trilhas, Gastronomia e Hospedagem).
- Galeria de mídia oficial da aldeia com molduras estilizadas, efeitos de hover e exibição adaptável.

---

## 🛠️ Tecnologias Utilizadas

- ⚛️ **React.js** — Biblioteca base para a interface rica do usuário
- 🟦 **TypeScript** — Código totalmente tipado, prevenindo erros em produção
- ⚡ **Vite** — Ambiente de build ultrarrápido para melhor performance da aplicação
- 🔀 **React Router** — Gerenciamento declarativo e roteamento do site
- 🎬 **Motion/React** — Sistema de animações físicas e transições de tela (Framer Motion)
- 🎨 **Tailwind CSS** — Framework CSS utilitário para estilização e responsividade pura
- 🔍 **Lucide React** — Ícones vetoriais modernos e leves
- 🧩 **Shadcn/UI** — Coleção de componentes de interface altamente acessíveis e elegantes

---

## 🚀 Como Executar o Projeto Localmente

### ✅ Pré-requisitos

Certifique-se de ter instalado em sua máquina:
- Node.js (versão LTS)

---

### 📥 Instalação

1. Clone o repositório:
```bash
git clone [https://github.com/opinha/BuridinaSite](https://github.com/opinha/BuridinaSite)

```

2. Entre no diretório do projeto:

```bash
cd BuridinaSite

```

3. Instale as dependências necessárias:

```bash
npm install

```

4. Inicie o servidor local de produção/desenvolvimento:

```bash
npm run dev

```

5. Abra em seu navegador:

```bash
http://localhost:5173

```

```

```
