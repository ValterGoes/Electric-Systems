🚀 Projeto em Produção

Esta landing page foi desenvolvida sob encomenda para a empresa **Electric Systems** e está atualmente ativa.

🔗 Link oficial: www.electric-systems.com.br


# Electric Systems - Mário César

Landing page profissional para a empresa de serviços elétricos **Electric Systems**, localizada no Rio Grande do Sul, Brasil.

## Sobre o Projeto

Site institucional com design dark high-tech e identidade visual em amarelo (brand color), desenvolvido para captar clientes via WhatsApp. Apresenta os serviços oferecidos, portfólio de trabalhos realizados e depoimentos de clientes.

## Tecnologias

- **React 19** — UI com componentes funcionais
- **Vite 8** — Build tool e dev server
- **Tailwind CSS 4** — Estilização utility-first
- **Framer Motion** — Animações e transições
- **Lucide React** — Ícones SVG

## Estrutura

```
src/
├── App.jsx                 # Layout principal
├── main.jsx                # Entry point
├── index.css               # Tema global (dark high-tech + brand yellow)
└── components/
    ├── Navbar.jsx           # Navbar fixa com glassmorphism e CTA WhatsApp
    ├── Hero.jsx             # Hero full-screen com imagem de fundo
    ├── WhereNoOneResolves.jsx # Seção de diferenciais
    ├── BentoGrid.jsx        # Grid de serviços com galeria de imagens
    ├── Gallery.jsx          # Portfólio de projetos
    ├── SocialProof.jsx      # Carrossel de depoimentos
    ├── Footer.jsx           # Rodapé com contato
    └── AnimatedIcon.jsx     # Ícones elétricos animados (SVG)
```

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

Configurado para deploy na **Netlify** via `netlify.toml`.
