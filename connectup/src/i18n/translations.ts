export const locales = ['pt-br'] as const;
export type Locale = (typeof locales)[number];

export const languageLabels: Record<Locale, string> = {
  'pt-br': 'Português (BR)',
};

export const languageShort: Record<Locale, string> = {
  'pt-br': 'PT',
};

const translations = {
  'pt-br': {
    nav: {
      home: 'Início',
      about: 'Sobre',
      blog: 'Conteúdos',
      contact: 'Contato',
      getStarted: 'Começar',
      language: 'Idioma',
      services: 'Carreira',
      comunicacaoProfissional: 'Comunicação Profissional',
      cvLinkedin: 'CV & LinkedIn',
      financeiro: 'Planejamento Financeiro',
      planejamentoInternacional: 'Planejamento Financeiro Internacional',
      planejamentoFiscal: 'Planejamento Fiscal no Paraguai',
    },
    hero: {
      badge: 'Mobilidade Profissional 360°',
      headline: 'Global minds',
      headline2: 'connect.',
      subheadline:
        'Transformamos o potencial técnico em autoridade global. A ConnectUP oferece uma solução 360° para a mobilidade profissional, removendo as barreiras da comunicação, da burocracia fiscal e do posicionamento de mercado, abrindo caminho para uma atuação verdadeiramente global e financeiramente independente.',
      cta: 'Comece sua jornada global',
      ctaSecondary: 'Nossos serviços',
    },
    services: {
      title: 'Nossos Serviços',
      subtitle: 'Tudo que você precisa para estabelecer sua residência fiscal no Paraguai',
      items: [
        { title: 'Consultoria', description: 'Assessoria personalizada em otimização fiscal e estratégia de relocalização adaptada à sua situação específica.', icon: '💼' },
        { title: 'Pacote Residência Completa', description: 'Serviço completo para obter sua residência fiscal no Paraguai — dos documentos à cédula oficial.', icon: '🏠' },
        { title: 'Abertura de Empresa', description: 'Registre sua empresa no Paraguai — SAE, SRL ou SA — com suporte jurídico completo do início ao fim.', icon: '🏢' },
        { title: 'Planejamento Financeiro', description: 'Planejamento financeiro estratégico para maximizar sua economia fiscal e proteger seu patrimônio a longo prazo.', icon: '📊' },
        { title: 'Serviços de Maquila', description: 'Aproveite a Lei de Maquila do Paraguai para empresas de manufatura e exportação.', icon: '🏭' },
        { title: 'Assistência à Relocação', description: 'Tudo que você precisa para estabelecer sua residência fiscal no Paraguai — da primeira viagem à chegada com segurança.', icon: '✈️' },
      ],
    },
    why: {
      title: 'Por que o Paraguai?',
      subtitle: 'Um dos melhores paraísos fiscais do mundo — legal, simples e acessível.',
      items: [
        { title: 'Imposto Fixo de 10%', description: 'Somente sobre renda gerada dentro do Paraguai. Renda estrangeira? Totalmente isenta.' },
        { title: 'Sem Imposto sobre Patrimônio', description: 'Sem imposto de herança, patrimônio ou ganhos de capital sobre ativos estrangeiros.' },
        { title: 'Processo Rápido', description: 'Residência em apenas 60 dias com nosso pacote completo.' },
        { title: 'Baixo Custo de Vida', description: 'Assunção é uma das capitais mais acessíveis da América do Sul.' },
        { title: 'Tributação Territorial', description: 'Apenas a renda local é tributada. Sua renda estrangeira fica com você.' },
        { title: 'Liberdade Bancária', description: 'Acesso a contas em USD e locais com burocracia mínima.' },
      ],
    },
    howItWorks: {
      title: 'Como Funciona',
      subtitle: 'Três passos simples para sua liberdade financeira',
      steps: [
        { number: '01', title: 'Consulta Gratuita', description: 'Conte-nos sobre sua situação. Analisamos seu caso e traçamos a melhor estratégia.' },
        { number: '02', title: 'Preparação de Documentos', description: 'Cuidamos de toda a papelada, traduções, apostilas e registros legais.' },
        { number: '03', title: 'Você é Residente', description: 'Receba seu certificado de residência e CPF paraguaio. Comece a viver com menos impostos.' },
      ],
    },
    cta: {
      title: 'Pronto para Parar de Pagar Impostos em Excesso?',
      subtitle: 'Agende sua consulta gratuita de 30 minutos hoje.',
      button: 'Fale com a gente',
    },

    about: {
      title: 'Sobre Mim',
      badge: 'Minha História',
      story: [
        "Cresci no Brasil, construí minha carreira lá e amava meu país — mas não conseguia mais ver meu dinheiro suado desaparecer num sistema tributário que não devolvia nada.",
        'Em 2021, dei o salto. Me mudei para o Paraguai, estabeleci minha residência fiscal e abri minha empresa no regime de Maquila. A diferença foi transformadora. Mais dinheiro, mais liberdade, mais clareza.',
        'Criei a ConnectUp porque continuava recebendo perguntas de empreendedores brasileiros, nômades digitais e empresários de todo o mundo que queriam a mesma liberdade, mas não sabiam por onde começar.',
        'Hoje, ajudo pessoas do Brasil, Polônia, Espanha e de todo o mundo a trilharem o caminho para o Paraguai — de forma legal, segura e eficiente.',
      ],
      mission: 'Minha missão é simples: ajudar você a guardar mais do que ganha.',
      values: [
        { title: 'Transparência', description: 'Sem taxas ocultas. Sem surpresas. Preços claros e conselhos honestos.' },
        { title: 'Expertise', description: 'Anos de experiência prática com a legislação fiscal e os processos de residência no Paraguai.' },
        { title: 'Toque Pessoal', description: 'Passei por isso. Sei exatamente o que você precisa.' },
      ],
    },
    blog: {
      title: 'Blog',
      subtitle: 'Guias, dicas e informações sobre residência fiscal e vida no Paraguai',
      readMore: 'Ler Mais',
      backToBlog: '← Voltar ao Blog',
      by: 'Por',
    },
    footer: {
      tagline: 'Residência fiscal e liberdade financeira no Paraguai.',
      rights: 'Todos os direitos reservados.',
      linksTitle: 'Links',
      languagesTitle: 'Idiomas',
      links: { home: 'Início', about: 'Sobre', blog: 'Blog', contact: 'Contato', faq: 'FAQ', testimonials: 'Depoimentos' },
    },
    video: {
      label: 'ASSISTA — ADVOGADA PARAGUAIA RESPONDE',
      title: 'Perguntas & Respostas: Residência Fiscal no Paraguai',
      subtitle: 'Uma advogada paraguaia responde as dúvidas mais comuns sobre como obter residência fiscal no Paraguai.',
      trust: 'Perguntas respondidas por Gabriela, advogada paraguaia especialista em direito imigratório e fiscal.',
      cta: 'Falar com a ConnectUP',
      qa: [
        { q: 'Preciso morar fisicamente no Paraguai para ter residência fiscal?', a: 'Não há exigência de dias mínimos. A residência temporária requer 1 visita por ano; a permanente requer 1 visita a cada 36 meses.' },
        { q: 'Quantas viagens ao Paraguai o processo exige?', a: 'Duas viagens a Assunção, de aproximadamente 5 dias úteis cada.' },
        { q: 'O Paraguai vai tributar minha renda no exterior?', a: 'Não. O Paraguai adota o sistema de tributação territorial — apenas a renda gerada dentro do país é tributada. Toda renda estrangeira é isenta.' },
        { q: 'Qual a diferença entre residência temporária e permanente?', a: 'A residência temporária dura 2 anos e pode ser convertida em permanente. A permanente é por prazo indeterminado, renovada a cada 10 anos.' },
        { q: 'O que é o certificado de residência fiscal e quando preciso dele?', a: 'Emitido pelo SET (autoridade fiscal do Paraguai). Exigido por bancos, corretoras e exchanges de cripto para comprovar seu domicílio fiscal. Requer RUC ativo e declarações em dia.' },
      ],
    },
    steps: {
      tag: 'Como funciona',
      title: '5 passos para sua residência fiscal',
      cta: 'Começar meu processo',
      items: [
        { n: '01', title: 'Consulta gratuita', desc: 'Entendemos seu perfil e desenhamos a estratégia ideal.' },
        { n: '02', title: 'Documentação', desc: 'Te auxiliamos na preparação de todos os documentos necessários.' },
        { n: '03', title: '1ª viagem a Assunção', desc: '~5 dias úteis para iniciar o processo de residência.' },
        { n: '04', title: '2ª viagem a Assunção', desc: '~5 dias úteis para retirar sua cédula paraguaia.' },
        { n: '05', title: 'Você é residente fiscal', desc: 'Renda do exterior isenta. Estrutura funcionando.' },
      ],
    },
    faq: {
      tag: 'Dúvidas frequentes',
      title: 'Perguntas frequentes',
      cta: 'Tenho mais dúvidas — falar no WhatsApp',
      items: [
        { q: 'Preciso fechar minha empresa?', a: 'MEI infelizmente sim. LTDA, S.A. e Simples com sócios — pode manter tranquilamente.' },
        { q: 'Posso continuar investindo no Brasil?', a: 'Sim! Ações, CDBs, renda fixa — tudo continua. Só opera como não residente com a Conta 4373.' },
        { q: 'Posso manter meus imóveis no Brasil?', a: 'Podem ficar tranquilamente. Imóvel no seu nome, sem problema.' },
        { q: 'Preciso fechar minhas contas no banco?', a: 'Não fecha, só converte para conta CDE. Continua movimentando normalmente.' },
        { q: 'Minha família pode continuar morando no Brasil?', a: 'Sim. Só evite manter toda sua vida financeira concentrada lá.' },
        { q: 'E se eu me arrepender e quiser voltar?', a: 'Pode voltar quando quiser. Entrega o IR normalmente no ano seguinte.' },
        { q: 'Perco meu CPF?', a: 'Não. O CPF continua ativo para sempre.' },
      ],
    },
    blogCarousel: {
      tag: 'Conteúdo gratuito',
      title: 'Últimos artigos do blog',
      readMore: 'Ler artigo',
      viewAll: 'Ver todos os artigos',
    },
    contact: {
      tag: 'QUEM VAI TE ATENDER',
      title: 'Entre em contato',
      subtitle: 'Respondemos em até 24 horas.',
      founderRole: 'Fundadora & Consultora',
      founderBio: 'Vim ao Paraguai para entender o sistema por dentro e me tornei o elo que faltava.',
      scheduleBtn: 'Agendar reunião',
      namePlaceholder: 'Seu nome',
      phonePlaceholder: 'Seu telefone',
      emailPlaceholder: 'seu@email.com',
      messagePlaceholder: 'Como posso te ajudar?',
      submit: 'Enviar mensagem',
      thankYouTitle: 'Mensagem enviada!',
      thankYouText: 'Entraremos em contato em até 24 horas.',
      backHome: 'Voltar para o início',
    },
  },
} as const;

export type Translations = (typeof translations)['pt-br'];

export function getTranslations(locale: string): Translations {
  return (translations as Record<string, Translations>)[locale] ?? translations['pt-br'];
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
