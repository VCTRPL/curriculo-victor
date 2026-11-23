// Todo o conteúdo do site fica aqui. Edite este arquivo para atualizar textos, projetos e experiências.

export const profile = {
  name: 'Victor Reis Silva de Paula',
  shortName: 'Victor Reis',
  location: 'Betim, MG, Brasil',
  email: 'victorrsdp@gmail.com',
  phone: '(31) 99777-7135',
  whatsapp: 'https://wa.me/5531997777135',
  linkedin: 'https://linkedin.com/in/victor-paula',
  github: 'https://github.com/VCTRPL',
  cvFile: '/Curriculo_Victor_Reis_Silva_de_Paula.pdf',
};

export const about = {
  pt: {
    label: 'Português',
    headline: 'Desenvolvedor em formação, com foco em experiência do usuário',
    paragraphs: [
      'Sou estudante de Engenharia de Software na PUC Minas, no 2º período, com previsão de conclusão em 2029. Estou no começo da minha trajetória e ainda não tenho experiência profissional de mercado.',
      'Crio soluções digitais modernas, funcionais e agradáveis de usar. Tenho conhecimentos em HTML, CSS, JavaScript e Python, estou estudando Java e uso Git, GitHub, VS Code e terminal nos meus projetos acadêmicos e pessoais.',
      'Sou fluente em inglês (diploma Cambridge). Meu objetivo é conquistar minha primeira oportunidade profissional na área de desenvolvimento de software, aplicando na prática o que aprendo na graduação.',
    ],
  },
  en: {
    label: 'English',
    headline: 'Developer in training, focused on user experience',
    paragraphs: [
      'I am a Software Engineering student at PUC Minas, in my 2nd semester, expected to graduate in 2029. I am at the start of my journey and do not have professional market experience yet.',
      'I build modern, functional and pleasant digital solutions. I have knowledge of HTML, CSS, JavaScript and Python, I am currently studying Java, and I use Git, GitHub, VS Code and the terminal in my academic and personal projects.',
      'I am fluent in English (Cambridge diploma). My goal is to land my first professional opportunity in software development, applying in practice what I learn in my degree.',
    ],
  },
};

// Competências — níveis autoavaliados, conforme o currículo.
export const skills = [
  { name: 'HTML & CSS', level: 'Introdutório', pct: 40 },
  { name: 'JavaScript', level: 'Básico', pct: 35 },
  { name: 'Python', level: 'Inicial', pct: 30 },
  { name: 'Java', level: 'Em estudo', pct: 15 },
];

export const tools = ['Visual Studio Code', 'Git', 'GitHub', 'Terminal / linha de comando'];

export const softSkills = {
  pt: ['Aprendizado rápido', 'Organização', 'Trabalho em equipe', 'Comunicação', 'Pensamento analítico', 'Resolução de problemas', 'Proatividade'],
  en: ['Fast learner', 'Organization', 'Teamwork', 'Communication', 'Analytical thinking', 'Problem solving', 'Proactivity'],
};

export const languages = [
  { name: 'Português', level: { pt: 'Nativo', en: 'Native' } },
  { name: 'Inglês', level: { pt: 'Fluente · diploma Cambridge', en: 'Fluent · Cambridge diploma' } },
  { name: 'Espanhol', level: { pt: 'Básico', en: 'Basic' } },
];

/*
  PROJETOS — linha do tempo do mais antigo para o mais recente.
  Obs.: a data abaixo é a da última atualização de cada repositório no GitHub.
  Para cada projeto, coloque um GIF/imagem em public/projects/ e informe o caminho em `media`.
*/
export const projects = [
  {
    id: 'snakobra',
    date: '2026-06',
    dateLabel: { pt: 'Jun/2026', en: 'Jun/2026' },
    name: 'Snakobra (JogoPy)',
    description: {
      pt: 'Jogo da cobrinha em Python, projeto final da disciplina Introdução a Algoritmos. Tem HUD com pontuação e tempo de sobrevivência, ranking Top 5 salvo em arquivo e testes automatizados.',
      en: 'Snake game in Python, the final project of the Introduction to Algorithms course. Features a HUD with score and survival time, a Top 5 ranking saved to file, and automated tests.',
    },
    tech: ['Python', 'Pygame', 'pytest'],
    repo: 'https://github.com/VCTRPL/JogoPy',
    media: null, // ex.: '/projects/snakobra.gif'
  },
  {
    id: 'catalogo-produtos',
    date: '2026-11-02',
    dateLabel: { pt: 'Nov/2026', en: 'Nov/2026' },
    name: 'Catálogo de Produtos',
    description: {
      pt: 'Catálogo de produtos em React integrado a uma API REST. Permite buscar produtos por nome, ver detalhes com estoque e trata estados de lista vazia e API indisponível.',
      en: 'Product catalog in React integrated with a REST API. Lets users search products by name, view details including stock, and handles empty-list and API-unavailable states.',
    },
    tech: ['React', 'Vite', 'JavaScript', 'Node.js', 'Express'],
    repo: 'https://github.com/VCTRPL/catalogo-produtos',
    media: null,
  },
  {
    id: 'portfolio-3d',
    date: '2026-11',
    dateLabel: { pt: 'Nov/2026', en: 'Nov/2026' },
    name: 'Portfolio 3D',
    description: {
      pt: 'Portfólio interativo em 3D: um escritório noturno com um computador retrô de tubo (CRT), onde o currículo aparece na tela como um sistema operacional navegável.',
      en: 'Interactive 3D portfolio: a night-time office with a retro CRT computer, where the résumé appears on screen as a navigable operating system.',
    },
    tech: ['React', 'Three.js', 'React Three Fiber', 'Vite', 'Vercel'],
    repo: 'https://github.com/VCTRPL/Portfolio-3D',
    media: null,
  },
];

/*
  EXPERIÊNCIAS — o currículo não lista estágios ou freelas ainda.
  Para incluir algo novo, copie um bloco e preencha. Os itens abaixo são formação e idiomas.
*/
export const experiences = [
  {
    org: 'Pontifícia Universidade Católica de Minas Gerais (PUC Minas)',
    role: { pt: 'Bacharelado em Engenharia de Software', en: 'Bachelor of Software Engineering' },
    period: { pt: 'Em andamento · previsão de conclusão 2029', en: 'In progress · expected graduation 2029' },
    description: {
      pt: 'Graduação em andamento (2º período). Desenvolvo projetos acadêmicos e pessoais em desenvolvimento web e Python.',
      en: 'Degree in progress (2nd semester). I develop academic and personal projects in web development and Python.',
    },
    type: 'education',
  },
  {
    org: 'HC School (Betim, MG)',
    role: { pt: 'Curso de Inglês · Diploma Cambridge', en: 'English course · Cambridge diploma' },
    period: { pt: 'Período não informado', en: 'Period not informed' },
    description: {
      pt: 'Concluí o curso com diploma Cambridge, atingindo fluência em inglês.',
      en: 'Completed the course with a Cambridge diploma, reaching fluency in English.',
    },
    type: 'education',
  },
];

export const experienceNote = {
  pt: 'Ainda não tenho experiência profissional de mercado. Estou em busca da minha primeira oportunidade.',
  en: 'I do not have professional market experience yet. I am looking for my first opportunity.',
};

export const ui = {
  pt: {
    nav: { about: 'Sobre Mim', projects: 'Projetos', experience: 'Experiências', contact: 'Contato' },
    cv: 'Baixar currículo',
    aboutTitle: 'Sobre Mim',
    skillsTitle: 'Competências técnicas',
    softTitle: 'Competências comportamentais',
    toolsTitle: 'Ferramentas',
    langTitle: 'Idiomas',
    projectsTitle: 'Projetos',
    projectsSub: 'Linha do tempo, do mais antigo ao mais recente.',
    noMedia: 'GIF do projeto em breve',
    techLabel: 'Tecnologias',
    repoLabel: 'Repositório',
    expTitle: 'Experiências',
    expSub: 'Formação, idiomas e próximos passos.',
    contactTitle: 'Contato',
    contactSub: 'Quer conversar sobre uma oportunidade ou um projeto? Mande uma mensagem.',
    form: { name: 'Nome', email: 'E-mail', message: 'Mensagem', send: 'Enviar mensagem', sending: 'Enviando...' },
    errors: {
      name: 'Informe seu nome.',
      email: 'Informe um e-mail válido.',
      message: 'Escreva uma mensagem com pelo menos 10 caracteres.',
    },
    success: 'Mensagem enviada! Obrigado pelo contato.',
    failure: 'Não foi possível enviar agora. Tente novamente ou escreva para o e-mail ao lado.',
    notConfigured: 'Formulário ainda não configurado. Escreva diretamente para o e-mail ao lado.',
    footer: 'Feito com React + Vite.',
    channels: 'Canais',
    menu: 'Abrir menu',
    close: 'Fechar menu',
  },
  en: {
    nav: { about: 'About', projects: 'Projects', experience: 'Experience', contact: 'Contact' },
    cv: 'Download résumé',
    aboutTitle: 'About Me',
    skillsTitle: 'Technical skills',
    softTitle: 'Soft skills',
    toolsTitle: 'Tools',
    langTitle: 'Languages',
    projectsTitle: 'Projects',
    projectsSub: 'Timeline, from oldest to newest.',
    noMedia: 'Project GIF coming soon',
    techLabel: 'Technologies',
    repoLabel: 'Repository',
    expTitle: 'Experience',
    expSub: 'Education, languages and next steps.',
    contactTitle: 'Contact',
    contactSub: 'Want to talk about an opportunity or a project? Send me a message.',
    form: { name: 'Name', email: 'Email', message: 'Message', send: 'Send message', sending: 'Sending...' },
    errors: {
      name: 'Please enter your name.',
      email: 'Please enter a valid email.',
      message: 'Please write a message with at least 10 characters.',
    },
    success: 'Message sent! Thanks for reaching out.',
    failure: 'Could not send right now. Please try again or email me directly.',
    notConfigured: 'Form not configured yet. Please email me directly.',
    footer: 'Built with React + Vite.',
    channels: 'Channels',
    menu: 'Open menu',
    close: 'Close menu',
  },
};
