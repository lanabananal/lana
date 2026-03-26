export const locales = ['en', 'pt-br', 'pl', 'es'] as const;
export type Locale = (typeof locales)[number];

export const languageLabels: Record<Locale, string> = {
  'en':    'English',
  'pt-br': 'Português (BR)',
  'pl':    'Polski',
  'es':    'Español',
};

export const languageShort: Record<Locale, string> = {
  'en':    'EN',
  'pt-br': 'PT',
  'pl':    'PL',
  'es':    'ES',
};

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      blog: 'Content',
      contact: 'Contact',
      getStarted: 'Get Started',
    },
    hero: {
      badge: 'Paraguay Tax Residency Experts',
      headline: 'Save Money in Taxes.',
      headline2: 'Live Free.',
      subheadline:
        'Tax residency, company setup, maquila services, and financial planning for global citizens ready to take control of their finances.',
      cta: 'Book a Free Consultation',
      ctaSecondary: 'Learn More',
    },
    services: {
      title: 'Our Services',
      subtitle: 'Everything you need to establish your tax residency in Paraguay',
      items: [
        {
          title: 'Consultancy',
          description:
            'Personalized advice on tax optimization and relocation strategy tailored to your specific situation.',
          icon: '💼',
        },
        {
          title: 'Full Residency Package',
          description:
            'Complete end-to-end service to obtain your Paraguay tax residency — from documents to official ID card.',
          icon: '🏠',
        },
        {
          title: 'Company Setup',
          description:
            'Register your business in Paraguay — SAE, SRL, or SA — with full legal support from start to finish.',
          icon: '🏢',
        },
        {
          title: 'Financial Planning',
          description:
            'Strategic financial planning to maximize your tax savings and protect your wealth long-term.',
          icon: '📊',
        },
        {
          title: 'Maquila Services',
          description:
            "Take advantage of Paraguay's Maquila Law for manufacturing and export-oriented businesses.",
          icon: '🏭',
        },
      ],
    },
    why: {
      title: 'Why Paraguay?',
      subtitle: 'One of the best tax havens in the world — legal, simple, and affordable.',
      items: [
        { title: '10% Flat Tax', description: 'Only on income sourced within Paraguay. Foreign income? Fully exempt.' },
        { title: 'No Wealth Tax', description: 'No inheritance, wealth, or capital gains tax on foreign assets.' },
        { title: 'Fast Process', description: 'Residency in as little as 60 days with our full package.' },
        { title: 'Low Cost of Living', description: 'Asunción is one of the most affordable capitals in South America.' },
        { title: 'Territorial Taxation', description: 'Only local-sourced income is taxed. Foreign income stays yours.' },
        { title: 'Banking Freedom', description: 'Access to USD and local accounts with minimal bureaucracy.' },
      ],
    },
    howItWorks: {
      title: 'How It Works',
      subtitle: 'Three simple steps to your financial freedom',
      steps: [
        { number: '01', title: 'Free Consultation', description: 'Tell us about your situation. We assess your case and outline the best strategy.' },
        { number: '02', title: 'Document Preparation', description: 'We handle all paperwork, translations, apostilles, and legal filings.' },
        { number: '03', title: "You're Resident", description: 'Receive your residency certificate and tax ID. Start living tax-free.' },
      ],
    },
    cta: {
      title: 'Ready to Stop Overpaying in Taxes?',
      subtitle: 'Book your free 30-minute consultation today.',
      button: 'Book Free Consultation',
    },
    about: {
      title: 'About Me',
      badge: 'My Story',
      story: [
        "I grew up in Brazil, built my career there, and loved my country — but I couldn't keep watching my hard-earned money disappear into a tax system that gave nothing back.",
        'In 2021, I made the leap. I relocated to Paraguay, established my tax residency, and set up my business under the Maquila regime. The difference was life-changing. More money, more freedom, more clarity.',
        "I started ConnectUp because I kept getting questions from Brazilian entrepreneurs, digital nomads, and business owners from around the world who wanted the same freedom but didn't know where to start.",
        'Today, I help people from Brazil, Poland, Spain, and beyond navigate the path to Paraguay — legally, confidently, and efficiently.',
      ],
      mission: 'My mission is simple: help you keep more of what you earn.',
      values: [
        { title: 'Transparency', description: 'No hidden fees. No surprises. Clear pricing and honest advice.' },
        { title: 'Expertise', description: 'Years of hands-on experience with Paraguay tax law and residency processes.' },
        { title: 'Personal Touch', description: 'I went through this myself. I know exactly what you need.' },
      ],
    },
    blog: {
      title: 'Blog',
      subtitle: 'Guides, tips, and insights on tax residency and living in Paraguay',
      readMore: 'Read More',
      backToBlog: '← Back to Blog',
      by: 'By',
    },
    footer: {
      tagline: 'Tax residency and financial freedom in Paraguay.',
      rights: 'All rights reserved.',
      links: { home: 'Home', about: 'About', blog: 'Blog', contact: 'Contact' },
    },
    video: {
      label: 'WATCH — PARAGUAYAN LAWYER ANSWERS',
      title: 'Q&A: Tax Residency in Paraguay',
      subtitle: 'A Paraguayan attorney answers the most common questions about obtaining tax residency in Paraguay.',
      trust: 'Questions answered by Gabriela, Paraguayan attorney specializing in immigration and tax law.',
      qa: [
        { q: 'Do I need to physically live in Paraguay for tax residency?', a: 'No minimum days required. Temporary residency requires 1 visit per year; permanent residency requires 1 visit every 36 months.' },
        { q: 'How many trips to Paraguay does the process require?', a: 'Two trips to Asunción, approximately 5 business days each.' },
        { q: 'Will Paraguay tax my foreign income?', a: 'No. Paraguay uses a territorial tax system — only income sourced within Paraguay is taxed. All foreign income is fully exempt.' },
        { q: 'What\'s the difference between temporary and permanent residency?', a: 'Temporary residency lasts 2 years and is renewable to permanent. Permanent residency is indefinite, renewed every 10 years.' },
        { q: 'What is the fiscal residency certificate and when do I need it?', a: 'Issued by SET (Paraguay\'s tax authority). Required by banks, brokers, and crypto exchanges to prove your tax domicile. Requires an active RUC and up-to-date tax filings.' },
      ],
    },
    steps: {
      tag: 'How it works',
      title: '5 steps to your tax residency',
      cta: 'Start my process',
      items: [
        { n: '01', title: 'Free consultation', desc: 'We understand your profile and design the ideal strategy.' },
        { n: '02', title: 'Documentation', desc: 'We help you prepare all the necessary documents.' },
        { n: '03', title: '1st trip to Asunción', desc: '~5 business days to start the residency process.' },
        { n: '04', title: '2nd trip to Asunción', desc: '~5 business days to collect your Paraguayan ID.' },
        { n: '05', title: 'You are a tax resident', desc: 'Foreign income exempt. Structure in place.' },
      ],
    },
    faq: {
      tag: 'FAQ',
      title: 'Frequently Asked Questions',
      cta: 'More questions? Chat on WhatsApp',
      items: [
        { q: 'Do I need to close my company?', a: 'Solo/MEI unfortunately yes. LTD, S.A. and partnerships — you can keep them.' },
        { q: 'Can I keep investing in Brazil?', a: 'Yes! Stocks, bonds, fixed income — everything continues. Just operate as a non-resident with a 4373 Account.' },
        { q: 'Can I keep my real estate in Brazil?', a: 'They stay with no problem. Property in your name, no issue.' },
        { q: 'Do I need to close my bank accounts?', a: 'No closing, just convert to a CDE account. Keep operating normally.' },
        { q: 'Can my family keep living in Brazil?', a: 'Yes. Just avoid keeping your entire financial life concentrated there.' },
        { q: 'What if I change my mind and want to return?', a: 'You can return anytime. Just file your tax return normally the following year.' },
        { q: 'Do I lose my tax ID?', a: 'No. Your tax ID stays active forever.' },
      ],
    },
    blogCarousel: {
      tag: 'Free content',
      title: 'Latest blog posts',
      readMore: 'Read article',
      viewAll: 'View all articles',
    },
    contact: {
      tag: 'YOUR POINT OF CONTACT',
      title: 'Get in touch',
      subtitle: 'We respond within 24 hours.',
      namePlaceholder: 'Your name',
      phonePlaceholder: 'Your phone',
      emailPlaceholder: 'your@email.com',
      messagePlaceholder: 'How can we help you?',
      submit: 'Send message',
      thankYouTitle: 'Message sent!',
      thankYouText: 'We will get back to you within 24 hours.',
      backHome: 'Back to home',
    },
  },

  'pt-br': {
    nav: {
      home: 'Início',
      about: 'Sobre',
      blog: 'Conteúdos',
      contact: 'Contato',
      getStarted: 'Começar',
    },
    hero: {
      badge: 'Especialistas em Residência Fiscal no Paraguai',
      headline: 'O Brasil tributa até 27,5% do que você ganha.',
      headline2: 'O Paraguai, zero sobre renda do exterior.',
      subheadline:
        'Residência fiscal legal, segura e sem complicação — com quem já fez o caminho.',
      cta: 'Fale com a gente',
      ctaSecondary: 'Como funciona',
      statTaxRate: 'Alíquota Máxima',
      statDays: 'Dias para Residência',
      statForeign: 'Imposto sobre Renda Exterior',
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
      links: { home: 'Início', about: 'Sobre', blog: 'Blog', contact: 'Contato' },
    },
    video: {
      label: 'ASSISTA — ADVOGADA PARAGUAIA RESPONDE',
      title: 'Perguntas & Respostas: Residência Fiscal no Paraguai',
      subtitle: 'Uma advogada paraguaia responde as dúvidas mais comuns sobre como obter residência fiscal no Paraguai.',
      trust: 'Perguntas respondidas por Gabriela, advogada paraguaia especialista em direito imigratório e fiscal.',
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

  pl: {
    nav: {
      home: 'Strona Główna',
      about: 'O Mnie',
      blog: 'Treści',
      contact: 'Kontakt',
      getStarted: 'Zacznij',
    },
    hero: {
      badge: 'Eksperci ds. Rezydencji Podatkowej w Paragwaju',
      headline: 'Oszczędź na Podatkach.',
      headline2: 'Żyj Wolno.',
      subheadline:
        'Rezydencja podatkowa, zakładanie firm, usługi maquila i planowanie finansowe dla globalnych obywateli gotowych przejąć kontrolę nad swoimi finansami.',
      cta: 'Umów Bezpłatną Konsultację',
      ctaSecondary: 'Dowiedz Się Więcej',
    },
    services: {
      title: 'Nasze Usługi',
      subtitle: 'Wszystko, czego potrzebujesz do uzyskania rezydencji podatkowej w Paragwaju',
      items: [
        { title: 'Konsultacje', description: 'Spersonalizowane doradztwo w zakresie optymalizacji podatkowej i strategii relokacji dopasowanej do Twojej sytuacji.', icon: '💼' },
        { title: 'Pełny Pakiet Rezydencji', description: 'Kompleksowa usługa uzyskania rezydencji podatkowej w Paragwaju — od dokumentów po oficjalny dowód tożsamości.', icon: '🏠' },
        { title: 'Zakładanie Firm', description: 'Zarejestruj swoją firmę w Paragwaju — SAE, SRL lub SA — z pełnym wsparciem prawnym od początku do końca.', icon: '🏢' },
        { title: 'Planowanie Finansowe', description: 'Strategiczne planowanie finansowe w celu maksymalizacji oszczędności podatkowych i długoterminowej ochrony majątku.', icon: '📊' },
        { title: 'Usługi Maquila', description: 'Skorzystaj z paragwajskiej Ustawy Maquila dla firm produkcyjnych i eksportowych.', icon: '🏭' },
      ],
    },
    why: {
      title: 'Dlaczego Paragwaj?',
      subtitle: 'Jeden z najlepszych rajów podatkowych na świecie — legalny, prosty i przystępny.',
      items: [
        { title: '10% Podatku Liniowego', description: 'Tylko od dochodów uzyskanych w Paragwaju. Zagraniczne dochody? W pełni zwolnione.' },
        { title: 'Brak Podatku Majątkowego', description: 'Brak podatku od spadków, majątku ani zysków kapitałowych od zagranicznych aktywów.' },
        { title: 'Szybki Proces', description: 'Rezydencja już w 60 dni z naszym pełnym pakietem.' },
        { title: 'Niski Koszt Życia', description: 'Asunción to jedna z najtańszych stolic w Ameryce Południowej.' },
        { title: 'Terytorialne Opodatkowanie', description: 'Opodatkowane są tylko dochody lokalne. Zagraniczne dochody pozostają Twoje.' },
        { title: 'Wolność Bankowa', description: 'Dostęp do kont w USD i lokalnych z minimalną biurokracją.' },
      ],
    },
    howItWorks: {
      title: 'Jak To Działa',
      subtitle: 'Trzy proste kroki do Twojej wolności finansowej',
      steps: [
        { number: '01', title: 'Bezpłatna Konsultacja', description: 'Opowiedz nam o swojej sytuacji. Oceniamy Twój przypadek i przedstawiamy najlepszą strategię.' },
        { number: '02', title: 'Przygotowanie Dokumentów', description: 'Zajmujemy się całą papierkową robotą, tłumaczeniami, apostille i rejestracją prawną.' },
        { number: '03', title: 'Jesteś Rezydentem', description: 'Otrzymaj certyfikat rezydencji i numer podatkowy. Zacznij żyć z niższymi podatkami.' },
      ],
    },
    cta: {
      title: 'Gotowy, by Przestać Przepłacać Podatki?',
      subtitle: 'Umów bezpłatną 30-minutową konsultację już dziś.',
      button: 'Umów Bezpłatną Konsultację',
    },
    about: {
      title: 'O Mnie',
      badge: 'Moja Historia',
      story: [
        'Dorastałam w Brazylii, tam zbudowałam swoją karierę i kochałam swój kraj — ale nie mogłam patrzeć, jak moje ciężko zarobione pieniądze znikają w systemie podatkowym, który nic w zamian nie dawał.',
        'W 2021 roku podjęłam decyzję. Przeprowadziłam się do Paragwaju, uzyskałam rezydencję podatkową i założyłam firmę w reżimie Maquila. Różnica była przełomowa. Więcej pieniędzy, więcej wolności, więcej jasności.',
        'Założyłam ConnectUp, bo ciągle dostawałam pytania od brazylijskich przedsiębiorców, cyfrowych nomadów i właścicieli firm z całego świata, którzy chcieli tej samej wolności, ale nie wiedzieli od czego zacząć.',
        'Dziś pomagam ludziom z Brazylii, Polski, Hiszpanii i całego świata przejść drogę do Paragwaju — legalnie, pewnie i efektywnie.',
      ],
      mission: 'Moja misja jest prosta: pomóc Ci zachować więcej z tego, co zarabiasz.',
      values: [
        { title: 'Przejrzystość', description: 'Żadnych ukrytych opłat. Żadnych niespodzianek. Jasne ceny i uczciwe porady.' },
        { title: 'Ekspertyza', description: 'Lata praktycznego doświadczenia z paragwajskim prawem podatkowym i procesami rezydencji.' },
        { title: 'Osobiste Podejście', description: 'Sama przez to przeszłam. Wiem dokładnie, czego potrzebujesz.' },
      ],
    },
    blog: {
      title: 'Blog',
      subtitle: 'Poradniki, wskazówki i informacje o rezydencji podatkowej i życiu w Paragwaju',
      readMore: 'Czytaj Więcej',
      backToBlog: '← Powrót do Bloga',
      by: 'Autor',
    },
    footer: {
      tagline: 'Rezydencja podatkowa i wolność finansowa w Paragwaju.',
      rights: 'Wszelkie prawa zastrzeżone.',
      links: { home: 'Strona Główna', about: 'O Mnie', blog: 'Blog', contact: 'Kontakt' },
    },
    video: {
      label: 'OGLĄDAJ — PARAGWAJSKA PRAWNICZKA ODPOWIADA',
      title: 'Q&A: Rezydencja Podatkowa w Paragwaju',
      subtitle: 'Paragwajska prawniczka odpowiada na najczęstsze pytania dotyczące uzyskania rezydencji podatkowej w Paragwaju.',
      trust: 'Odpowiedzi udzieliła Gabriela, paragwajska prawniczka specjalizująca się w prawie imigracyjnym i podatkowym.',
      qa: [
        { q: 'Czy muszę fizycznie mieszkać w Paragwaju, aby uzyskać rezydencję podatkową?', a: 'Nie ma minimalnej liczby dni. Rezydencja tymczasowa wymaga 1 wizyty rocznie; stała wymaga 1 wizyty co 36 miesięcy.' },
        { q: 'Ile podróży do Paragwaju wymaga cały proces?', a: 'Dwie podróże do Asunción, każda trwająca około 5 dni roboczych.' },
        { q: 'Czy Paragwaj opodatkuje moje dochody zagraniczne?', a: 'Nie. Paragwaj stosuje terytorialny system podatkowy — opodatkowane są wyłącznie dochody uzyskane w Paragwaju. Wszelkie dochody zagraniczne są zwolnione z podatku.' },
        { q: 'Jaka jest różnica między rezydencją tymczasową a stałą?', a: 'Rezydencja tymczasowa trwa 2 lata i może być przekształcona w stałą. Stała jest bezterminowa, odnawiana co 10 lat.' },
        { q: 'Czym jest certyfikat rezydencji podatkowej i kiedy jest potrzebny?', a: 'Wydawany przez SET (paragwajski urząd skarbowy). Wymagany przez banki, brokerów i giełdy kryptowalut jako dowód miejsca zamieszkania do celów podatkowych. Wymaga aktywnego RUC i aktualnych deklaracji podatkowych.' },
      ],
    },
    steps: {
      tag: 'Jak to działa',
      title: '5 kroków do rezydencji podatkowej',
      cta: 'Rozpocznij mój proces',
      items: [
        { n: '01', title: 'Bezpłatna konsultacja', desc: 'Poznajemy Twój profil i projektujemy idealną strategię.' },
        { n: '02', title: 'Dokumentacja', desc: 'Pomagamy przygotować wszystkie niezbędne dokumenty.' },
        { n: '03', title: '1. podróż do Asunción', desc: '~5 dni roboczych na rozpoczęcie procesu rezydencji.' },
        { n: '04', title: '2. podróż do Asunción', desc: '~5 dni roboczych na odbiór paragwajskiego dowodu.' },
        { n: '05', title: 'Jesteś rezydentem podatkowym', desc: 'Dochody zagraniczne zwolnione. Struktura działa.' },
      ],
    },
    faq: {
      tag: 'FAQ',
      title: 'Często zadawane pytania',
      cta: 'Więcej pytań? Napisz na WhatsApp',
      items: [
        { q: 'Czy muszę zamknąć firmę?', a: 'Jednoosobowa działalność niestety tak. Spółki z o.o., S.A. i spółki — możesz zachować.' },
        { q: 'Czy mogę nadal inwestować w swoim kraju?', a: 'Tak! Akcje, obligacje, lokaty — wszystko kontynuowane. Działasz jako nierezydent.' },
        { q: 'Czy mogę zachować nieruchomości?', a: 'Mogą zostać bez problemu. Nieruchomość na Twoje nazwisko, bez przeszkód.' },
        { q: 'Czy muszę zamknąć konta bankowe?', a: 'Nie zamykasz, tylko konwertujesz na konto nierezydenta. Nadal normalnie operujesz.' },
        { q: 'Czy moja rodzina może nadal mieszkać w Polsce?', a: 'Tak. Tylko unikaj trzymania całego życia finansowego tam.' },
        { q: 'Co jeśli się rozmyślę i zechcę wrócić?', a: 'Możesz wrócić kiedy chcesz. Składasz deklarację normalnie w następnym roku.' },
        { q: 'Czy stracę swój NIP?', a: 'Nie. Twój NIP pozostaje aktywny na zawsze.' },
      ],
    },
    blogCarousel: {
      tag: 'Darmowe treści',
      title: 'Ostatnie artykuły',
      readMore: 'Czytaj artykuł',
      viewAll: 'Zobacz wszystkie artykuły',
    },
    contact: {
      tag: 'TWÓJ PUNKT KONTAKTU',
      title: 'Skontaktuj się',
      subtitle: 'Odpowiadamy w ciągu 24 godzin.',
      namePlaceholder: 'Twoje imię',
      phonePlaceholder: 'Twój telefon',
      emailPlaceholder: 'twoj@email.com',
      messagePlaceholder: 'Jak możemy Ci pomóc?',
      submit: 'Wyślij wiadomość',
      thankYouTitle: 'Wiadomość wysłana!',
      thankYouText: 'Odezwiemy się w ciągu 24 godzin.',
      backHome: 'Powrót do strony głównej',
    },
  },

  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre Mí',
      blog: 'Contenidos',
      contact: 'Contacto',
      getStarted: 'Comenzar',
    },
    hero: {
      badge: 'Expertos en Residencia Fiscal en Paraguay',
      headline: 'Ahorra en Impuestos.',
      headline2: 'Vive Libre.',
      subheadline:
        'Residencia fiscal, apertura de empresa, servicios de maquila y planificación financiera para ciudadanos globales listos para tomar el control de sus finanzas.',
      cta: 'Reservar Consulta Gratuita',
      ctaSecondary: 'Saber Más',
    },
    services: {
      title: 'Nuestros Servicios',
      subtitle: 'Todo lo que necesitas para establecer tu residencia fiscal en Paraguay',
      items: [
        { title: 'Consultoría', description: 'Asesoramiento personalizado en optimización fiscal y estrategia de reubicación adaptada a tu situación específica.', icon: '💼' },
        { title: 'Paquete Residencia Completa', description: 'Servicio integral para obtener tu residencia fiscal en Paraguay — desde documentos hasta cédula oficial.', icon: '🏠' },
        { title: 'Apertura de Empresa', description: 'Registra tu empresa en Paraguay — SAE, SRL o SA — con soporte legal completo de principio a fin.', icon: '🏢' },
        { title: 'Planificación Financiera', description: 'Planificación financiera estratégica para maximizar tu ahorro fiscal y proteger tu patrimonio a largo plazo.', icon: '📊' },
        { title: 'Servicios Maquila', description: 'Aprovecha la Ley Maquila de Paraguay para empresas de manufactura y exportación.', icon: '🏭' },
      ],
    },
    why: {
      title: '¿Por qué Paraguay?',
      subtitle: 'Uno de los mejores paraísos fiscales del mundo — legal, simple y asequible.',
      items: [
        { title: '10% de Impuesto Fijo', description: 'Solo sobre ingresos generados dentro de Paraguay. ¿Ingresos extranjeros? Totalmente exentos.' },
        { title: 'Sin Impuesto al Patrimonio', description: 'Sin impuesto de herencia, patrimonio ni ganancias de capital sobre activos extranjeros.' },
        { title: 'Proceso Rápido', description: 'Residencia en tan solo 60 días con nuestro paquete completo.' },
        { title: 'Bajo Costo de Vida', description: 'Asunción es una de las capitales más asequibles de Sudamérica.' },
        { title: 'Tributación Territorial', description: 'Solo se gravan los ingresos locales. Tus ingresos extranjeros se quedan contigo.' },
        { title: 'Libertad Bancaria', description: 'Acceso a cuentas en USD y locales con burocracia mínima.' },
      ],
    },
    howItWorks: {
      title: 'Cómo Funciona',
      subtitle: 'Tres simples pasos hacia tu libertad financiera',
      steps: [
        { number: '01', title: 'Consulta Gratuita', description: 'Cuéntanos tu situación. Evaluamos tu caso y trazamos la mejor estrategia.' },
        { number: '02', title: 'Preparación de Documentos', description: 'Gestionamos toda la documentación, traducciones, apostillas y registros legales.' },
        { number: '03', title: 'Ya Eres Residente', description: 'Recibe tu certificado de residencia y número fiscal. Empieza a vivir con menos impuestos.' },
      ],
    },
    cta: {
      title: '¿Listo para Dejar de Pagar Impuestos de Más?',
      subtitle: 'Reserva tu consulta gratuita de 30 minutos hoy.',
      button: 'Reservar Consulta Gratuita',
    },
    about: {
      title: 'Sobre Mí',
      badge: 'Mi Historia',
      story: [
        'Crecí en Brasil, construí mi carrera allí y amaba mi país — pero no podía seguir viendo cómo mi dinero ganado con esfuerzo desaparecía en un sistema tributario que no devolvía nada.',
        'En 2021, tomé el salto. Me mudé a Paraguay, establecí mi residencia fiscal y abrí mi empresa bajo el régimen Maquila. La diferencia fue transformadora. Más dinero, más libertad, más claridad.',
        'Creé ConnectUp porque no paraba de recibir preguntas de emprendedores brasileños, nómadas digitales y empresarios de todo el mundo que querían la misma libertad pero no sabían por dónde empezar.',
        'Hoy ayudo a personas de Brasil, Polonia, España y de todo el mundo a recorrer el camino hacia Paraguay — de forma legal, segura y eficiente.',
      ],
      mission: 'Mi misión es simple: ayudarte a conservar más de lo que ganas.',
      values: [
        { title: 'Transparencia', description: 'Sin tarifas ocultas. Sin sorpresas. Precios claros y consejos honestos.' },
        { title: 'Experiencia', description: 'Años de experiencia práctica con la legislación fiscal y los procesos de residencia en Paraguay.' },
        { title: 'Toque Personal', description: 'Yo misma lo viví. Sé exactamente lo que necesitas.' },
      ],
    },
    blog: {
      title: 'Blog',
      subtitle: 'Guías, consejos e información sobre residencia fiscal y vida en Paraguay',
      readMore: 'Leer Más',
      backToBlog: '← Volver al Blog',
      by: 'Por',
    },
    footer: {
      tagline: 'Residencia fiscal y libertad financiera en Paraguay.',
      rights: 'Todos los derechos reservados.',
      links: { home: 'Inicio', about: 'Sobre Mí', blog: 'Blog', contact: 'Contacto' },
    },
    video: {
      label: 'MIRA — ABOGADA PARAGUAYA RESPONDE',
      title: 'Preguntas & Respuestas: Residencia Fiscal en Paraguay',
      subtitle: 'Una abogada paraguaya responde las preguntas más frecuentes sobre cómo obtener la residencia fiscal en Paraguay.',
      trust: 'Preguntas respondidas por Gabriela, abogada paraguaya especializada en derecho migratorio y fiscal.',
      qa: [
        { q: '¿Necesito vivir físicamente en Paraguay para tener residencia fiscal?', a: 'No hay días mínimos requeridos. La residencia temporal exige 1 visita al año; la permanente exige 1 visita cada 36 meses.' },
        { q: '¿Cuántos viajes a Paraguay requiere el proceso?', a: 'Dos viajes a Asunción, de aproximadamente 5 días hábiles cada uno.' },
        { q: '¿Paraguay gravará mis ingresos del exterior?', a: 'No. Paraguay utiliza un sistema de tributación territorial — solo se gravan los ingresos generados dentro del país. Todos los ingresos extranjeros están completamente exentos.' },
        { q: '¿Cuál es la diferencia entre residencia temporal y permanente?', a: 'La residencia temporal dura 2 años y es renovable a permanente. La permanente es indefinida, renovada cada 10 años.' },
        { q: '¿Qué es el certificado de residencia fiscal y cuándo lo necesito?', a: 'Emitido por la SET (autoridad fiscal de Paraguay). Requerido por bancos, brokers e exchanges de cripto para acreditar tu domicilio fiscal. Requiere RUC activo y declaraciones al día.' },
      ],
    },
    steps: {
      tag: 'Cómo funciona',
      title: '5 pasos para tu residencia fiscal',
      cta: 'Empezar mi proceso',
      items: [
        { n: '01', title: 'Consulta gratuita', desc: 'Entendemos tu perfil y diseñamos la estrategia ideal.' },
        { n: '02', title: 'Documentación', desc: 'Te ayudamos a preparar todos los documentos necesarios.' },
        { n: '03', title: '1er viaje a Asunción', desc: '~5 días hábiles para iniciar el proceso de residencia.' },
        { n: '04', title: '2º viaje a Asunción', desc: '~5 días hábiles para recoger tu cédula paraguaya.' },
        { n: '05', title: 'Ya eres residente fiscal', desc: 'Ingresos del exterior exentos. Estructura funcionando.' },
      ],
    },
    faq: {
      tag: 'Preguntas frecuentes',
      title: 'Preguntas frecuentes',
      cta: '¿Más dudas? Habla por WhatsApp',
      items: [
        { q: '¿Necesito cerrar mi empresa?', a: 'Autónomo/MEI lamentablemente sí. SRL, S.A. y sociedades — puedes mantenerlas.' },
        { q: '¿Puedo seguir invirtiendo en mi país?', a: '¡Sí! Acciones, bonos, renta fija — todo continúa. Solo opera como no residente.' },
        { q: '¿Puedo mantener mis inmuebles?', a: 'Pueden quedarse sin problema. Propiedad a tu nombre, sin inconvenientes.' },
        { q: '¿Necesito cerrar mis cuentas bancarias?', a: 'No cierras, solo conviertes a cuenta de no residente. Sigues operando normalmente.' },
        { q: '¿Mi familia puede seguir viviendo en mi país?', a: 'Sí. Solo evita tener toda tu vida financiera concentrada allí.' },
        { q: '¿Y si me arrepiento y quiero volver?', a: 'Puedes volver cuando quieras. Presentas tu declaración normalmente al año siguiente.' },
        { q: '¿Pierdo mi identificación fiscal?', a: 'No. Tu número fiscal sigue activo para siempre.' },
      ],
    },
    blogCarousel: {
      tag: 'Contenido gratuito',
      title: 'Últimos artículos',
      readMore: 'Leer artículo',
      viewAll: 'Ver todos los artículos',
    },
    contact: {
      tag: 'TU PUNTO DE CONTACTO',
      title: 'Contáctanos',
      subtitle: 'Respondemos en menos de 24 horas.',
      namePlaceholder: 'Tu nombre',
      phonePlaceholder: 'Tu teléfono',
      emailPlaceholder: 'tu@email.com',
      messagePlaceholder: '¿Cómo podemos ayudarte?',
      submit: 'Enviar mensaje',
      thankYouTitle: '¡Mensaje enviado!',
      thankYouText: 'Nos pondremos en contacto en menos de 24 horas.',
      backHome: 'Volver al inicio',
    },
  },
} as const;

export type Translations = (typeof translations)['en'];

export function getTranslations(locale: string): Translations {
  return (translations as Record<string, Translations>)[locale] ?? translations['en'];
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
