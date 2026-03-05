<div align="center">

<img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
<img src="https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
<img src="https://img.shields.io/badge/Tailwind-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
<img src="https://img.shields.io/badge/MUI-7-007FFF?style=for-the-badge&logo=mui&logoColor=white" />
<img src="https://img.shields.io/badge/Framer_Motion-12-EF4A8B?style=for-the-badge&logo=framer&logoColor=white" />
<img src="https://img.shields.io/badge/Deploy-GitHub_Pages-222?style=for-the-badge&logo=github&logoColor=white" />

<br /><br />

# 🌿 FinAI — Landing Page

**Landing page moderna para um app de finanças pessoais com IA.**  
Desenvolvida com React 19, Material UI, Framer Motion e deploy automático via GitHub Actions.

<a href="https://andrewblack21.github.io/finai-landing/" target="_blank">
  <img src="https://img.shields.io/badge/🚀_Ver_Demo_ao_Vivo-1ea360?style=for-the-badge" />
</a>

</div>

---

## 🎯 Sobre o Projeto

O **FinAI** é um conceito de aplicativo de controle financeiro com inteligência artificial. Esta landing page foi criada para demonstrar o produto, converter visitantes em usuários beta e servir como peça de portfólio de desenvolvimento front-end.

### O que a página apresenta

- Proposta de valor clara para o público jovem adulto (18–30 anos)
- Demonstração interativa do chatbot via simulação de conversa
- Seção de funcionalidades com categorização automática, alertas e relatórios
- Depoimentos de usuários com social proof
- CTAs estratégicos para captação de leads na lista de espera

---

## ✨ Funcionalidades Técnicas

- **Animações com Framer Motion** — entrada de elementos por scroll, transições suaves
- **Design System coerente** — paleta verde escuro/claro com variáveis CSS consistentes
- **Tipografia customizada** — fontes Syne (display) + DM Sans (corpo) via Google Fonts
- **Responsivo** — layout adaptado para mobile, tablet e desktop
- **Deploy automático** — pipeline CI/CD com GitHub Actions a cada `push` na branch `main`
- **SEO básico** — meta tags, Open Graph e descrição configurados no `index.html`

---

## 🛠️ Stack Tecnológica

| Tecnologia | Versão | Uso |
|---|---|---|
| [React](https://react.dev/) | 19 | Framework principal |
| [Vite](https://vitejs.dev/) | 7 | Build tool e dev server |
| [Material UI](https://mui.com/) | 7 | Componentes (Navbar, Cards) |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Utilitários de estilo |
| [Framer Motion](https://www.framer.com/motion/) | 12 | Animações e transições |
| [Lucide React](https://lucide.dev/) | 0.556 | Ícones |
| [GitHub Pages](https://pages.github.com/) | — | Hospedagem |

---

## 📁 Estrutura do Projeto

```
finai-landing/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD — deploy automático no GitHub Pages
├── public/
├── src/
│   ├── assets/
│   │   └── imagens/            # Imagens do projeto
│   ├── components/
│   │   ├── Header/
│   │   │   └── Navbar.jsx      # Barra de navegação responsiva
│   │   ├── Hero/
│   │   │   └── Hero.jsx        # Seção principal com headline e CTAs
│   │   ├── Sobre/
│   │   │   └── Sobre.jsx       # Diferencial do produto + estatísticas
│   │   ├── Funcionalidade/
│   │   │   └── Function.jsx    # Grid de 6 funcionalidades
│   │   ├── MobileChat/
│   │   │   └── Chat.jsx        # Demo animada do chatbot IA
│   │   ├── Agent/
│   │   │   └── AgentSection.jsx # Seção do assistente WhatsApp
│   │   ├── MobileSection/
│   │   │   └── MobileSection.jsx # Disponibilidade multiplataforma
│   │   ├── Coments/
│   │   │   └── Comentarios.jsx # Depoimentos de usuários
│   │   ├── CTASection/
│   │   │   └── Cta.jsx         # Call-to-action final
│   │   ├── Footer/
│   │   │   └── Footer.jsx      # Rodapé com links
│   │   └── ui/
│   │       └── button.jsx      # Componente Button reutilizável (CVA)
│   ├── lib/
│   │   └── utils.ts            # Utilitários (cn para Tailwind)
│   ├── App.jsx                 # Composição das seções
│   ├── main.jsx                # Entry point
│   └── index.css               # Estilos globais + importação de fontes
├── index.html                  # HTML base com meta tags SEO
├── vite.config.js              # Configuração do Vite + alias @
├── tailwind.config.js          # Configuração Tailwind
├── postcss.config.js           # PostCSS
└── package.json
```

---

## 🚀 Como Rodar Localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) 20+
- npm 8+

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/andrewblack21/finai-landing.git

# 2. Entre na pasta
cd finai-landing

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse em: `http://localhost:5173`

### Outros comandos

```bash
npm run build      # Gera a build de produção em /dist
npm run preview    # Pré-visualiza a build localmente
npm run lint       # Analisa o código com ESLint
```

---

## ⚙️ Deploy

O deploy é feito automaticamente no **GitHub Pages** via GitHub Actions sempre que há um `push` na branch `main`.

### Como funciona o pipeline

```
push na main
    ↓
GitHub Actions (.github/workflows/deploy.yml)
    ↓
npm install → npm run build → /dist gerado
    ↓
Upload do /dist como artefato de páginas
    ↓
Deploy automático no GitHub Pages
```

### Para configurar no seu fork

1. Vá em **Settings → Pages** no seu repositório
2. Em **Source**, selecione **GitHub Actions**
3. Faça um `push` — o deploy acontece automaticamente

---

## 🎨 Decisões de Design

| Decisão | Justificativa |
|---|---|
| **Verde escuro como cor primária** | Transmite confiança e estabilidade financeira sem o clichê do azul bancário |
| **Fontes Syne + DM Sans** | Syne tem personalidade forte para headlines; DM Sans é altamente legível para corpo de texto |
| **Seção de chat escura** | Contraste visual que quebra o ritmo da página e destaca o diferencial do produto |
| **Social proof no Hero** | Reduz fricção para o usuário logo na primeira dobra |
| **CTAs com urgência** | "Entrar na lista de espera" cria escassez percebida antes do lançamento |

---

## 📈 Melhorias Futuras

- [ ] Formulário funcional de captura de e-mail (integração com Mailchimp ou Resend)
- [ ] Página de preços
- [ ] Modo escuro completo
- [ ] Testes com Vitest + Testing Library
- [ ] Internacionalização (i18n) para inglês
- [ ] Lighthouse score ≥ 95 em todas as métricas

---

## 👨‍💻 Autor

Desenvolvido por **[Andrew Black](https://github.com/andrewblack21)**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](www.linkedin.com/in/andrewsilvaferreira)
[![GitHub](https://img.shields.io/badge/GitHub-222?style=for-the-badge&logo=github&logoColor=white)](https://github.com/andrewblack21)
[![Portfólio](https://img.shields.io/badge/Portfólio-1ea360?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolioandrewferreira.vercel.app/)

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">
  <sub>Feito com 💚 e muito café ☕</sub>
</div>
