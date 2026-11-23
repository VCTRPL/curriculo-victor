# Portfólio — Victor Reis Silva de Paula

Site de portfólio profissional com seções de **Sobre Mim** (PT/EN), **Projetos** (linha do tempo), **Experiências** e **Contato** (ícones clicáveis e formulário com envio por e-mail).

**Site publicado:** `LINK_DO_SITE_AQUI`

---

## Tecnologias utilizadas

- **React 18** — construção da interface
- **Vite 5** — build e servidor de desenvolvimento
- **CSS puro** — layout responsivo com variáveis CSS e tema escuro
- **EmailJS** — envio do formulário de contato diretamente do front-end
- **react-icons** — ícones (e-mail, WhatsApp, LinkedIn, GitHub)
- **Hospedagem:** Vercel (ou GitHub Pages / Render)

## Dependências

| Pacote | Tipo | Função |
| --- | --- | --- |
| `react`, `react-dom` | runtime | Interface e renderização |
| `@emailjs/browser` | runtime | Envio de e-mail pelo formulário |
| `react-icons` | runtime | Ícones clicáveis da página de contato e botões |
| `vite`, `@vitejs/plugin-react` | dev | Build e servidor de desenvolvimento |

## Estrutura de diretórios

```
portfolio-victor/
├── public/
│   ├── projects/                 # GIFs/imagens dos projetos (ex.: snakobra.gif)
│   └── Curriculo_Victor_Reis_Silva_de_Paula.pdf
├── src/
│   ├── components/
│   │   ├── Header.jsx            # Menu de navegação e troca de idioma PT/EN
│   │   ├── About.jsx             # Sobre Mim + competências
│   │   ├── Projects.jsx          # Linha do tempo de projetos
│   │   ├── Experience.jsx        # Experiências e formação
│   │   ├── Contact.jsx           # Ícones de contato + formulário (EmailJS)
│   │   └── Footer.jsx
│   ├── data/
│   │   └── content.js            # Todo o conteúdo editável (textos, projetos, experiências)
│   ├── App.jsx                   # Composição das seções e estado do idioma
│   ├── main.jsx                  # Ponto de entrada
│   └── index.css                 # Estilos e responsividade
├── .env.example                  # Variáveis de ambiente do EmailJS
├── index.html
├── vite.config.js
└── package.json
```

## Instalação e execução local

Pré-requisito: **Node.js 18+** e npm.

```bash
# 1. Clone o repositório
git clone https://github.com/VCTRPL/portfolio.git
cd portfolio-victor

# 2. Instale as dependências
npm install

# 3. (Opcional) Configure o formulário de contato
cp .env.example .env.local
# preencha VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID e VITE_EMAILJS_PUBLIC_KEY

# 4. Rode em modo de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173`.

### Configurando o envio de e-mail (EmailJS)

1. Crie uma conta em [emailjs.com](https://www.emailjs.com/) e conecte seu Gmail em **Email Services**.
2. Crie um template em **Email Templates** usando as variáveis `{{from_name}}`, `{{from_email}}`, `{{message}}` e `{{reply_to}}`.
3. Copie o **Service ID**, o **Template ID** e a **Public Key** para o `.env.local`.
4. Em produção, cadastre as mesmas variáveis no painel de Environment Variables da Vercel.

Sem essas variáveis, o formulário exibe uma mensagem orientando o visitante a usar o e-mail direto.

### Build de produção

```bash
npm run build      # gera a pasta dist/
npm run preview    # visualiza o build localmente
```

## Como atualizar o conteúdo

Todo o texto, projetos e experiências ficam em `src/data/content.js`.

- **Projetos:** adicione um objeto em `projects` (mantendo a ordem do mais antigo para o mais recente) e coloque o GIF em `public/projects/`, informando o caminho no campo `media`.
- **Experiências:** adicione um objeto em `experiences` com instituição, cargo, período e descrição.
- **Textos "Sobre Mim":** edite `about.pt` e `about.en`.

## Hospedagem

**Vercel (recomendado):** importe o repositório na Vercel. Ela detecta o Vite automaticamente; use `npm run build` como comando e `dist` como diretório de saída.

**GitHub Pages:** altere `base` em `vite.config.js` para `'/NOME-DO-REPO/'`, rode `npm run build` e publique a pasta `dist/`.

## Licença

Uso pessoal e acadêmico.
