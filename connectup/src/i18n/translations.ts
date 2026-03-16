export const locales = ['en', 'pt-br', 'pl', 'es'] as const;
export type Locale = (typeof locales)[number];

export const languageLabels: Record<Locale, string> = {
  'en':    '🇬🇧 English',
  'pt-br': '🇧🇷 Português (BR)',
  'pl':    '🇵🇱 Polski',
  'es':    '🇪🇸 Español',
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
      blog: 'Blog',
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
  },

  'pt-br': {
    nav: {
      home: 'Início',
      about: 'Sobre',
      blog: 'Blog',
      contact: 'Contato',
      getStarted: 'Começar',
    },
    hero: {
      badge: 'Especialistas em Residência Fiscal no Paraguai',
      headline: 'Economize em Impostos.',
      headline2: 'Viva Livre.',
      subheadline:
        'Residência fiscal, abertura de empresa, serviços de maquila e planejamento financeiro para cidadãos globais prontos para assumir o controle das suas finanças.',
      cta: 'Agendar Consulta Gratuita',
      ctaSecondary: 'Saiba Mais',
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
      button: 'Agendar Consulta Gratuita',
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
  },

  pl: {
    nav: {
      home: 'Strona Główna',
      about: 'O Mnie',
      blog: 'Blog',
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
  },

  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre Mí',
      blog: 'Blog',
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
  },
} as const;

export type Translations = (typeof translations)['en'];

export function getTranslations(locale: string): Translations {
  return (translations as Record<string, Translations>)[locale] ?? translations['en'];
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
