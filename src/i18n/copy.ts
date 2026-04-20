/* Date: 4/20/2026 | Developer: Yahia Saad | License: First Stand Studio. All rights reserved. */
import { defaultLocale, type SupportedLocale } from "./config";

interface PrincipleCardCopy {
  label: string;
  title: string;
  copy: string;
}

interface Dictionary {
  meta: {
    defaultDescription: string;
    aboutDescription: string;
    devlogDescription: string;
    erireDescription: string;
    notFoundDescription: string;
  };
  common: {
    skipToContent: string;
    readEntry: string;
    backToDevlog: string;
    devlogEntry: string;
    projectPage: string;
    recentDevelopment: string;
    githubAware: string;
    noProjectLinks: string;
    inDevelopment: string;
    programmingLanguage: string;
    currentState: string;
    usefulLinks: string;
    returnHome: string;
    studioFooter: string;
    footerLinksAria: string;
    languageLabel: string;
    directionLabel: string;
  };
  navigation: {
    home: string;
    about: string;
    devlog: string;
    erire: string;
  };
  hero: {
    eyebrow: string;
    support: string;
    pill: string;
    founded: string;
    positionLabel: string;
    positionCopy: string;
    standardLabel: string;
    standardCopy: string;
    standardDescriptor: string;
    indicator: string;
  };
  home: {
    projectsEyebrow: string;
    projectsTitle: string;
    projectsCopy: string;
    devlogsEyebrow: string;
    devlogsTitle: string;
    devlogsCopy: string;
    teamEyebrow: string;
    teamTitle: string;
    teamCopy: string;
  };
  aboutSection: {
    eyebrow: string;
    manifesto: string;
    aboutText: string;
    founderLabel: string;
    originLabel: string;
    positionLabel: string;
    positionValue: string;
  };
  contactSection: {
    eyebrow: string;
    title: string;
    copy: string;
    emailLabel: string;
    githubLabel: string;
    portfolioLabel: string;
    button: string;
  };
  aboutPage: {
    eyebrow: string;
    title: string;
    lede: string;
    principlesEyebrow: string;
    principlesTitle: string;
    principlesCopy: string;
    principles: PrincipleCardCopy[];
    teamEyebrow: string;
    teamTitle: string;
    teamCopy: string;
  };
  team: {
    futureTop: string;
    futureBottom: string;
    currentTeamEyebrow: string;
  };
  footer: {
    copyright: string;
    tagline: string;
  };
  devlog: {
    indexEyebrow: string;
    indexTitle: string;
    indexCopy: string;
    articleEyebrow: string;
  };
  erirePage: {
    summaryEyebrow: string;
    summaryTitle: string;
    visualEyebrow: string;
    visualTitle: string;
    visualCopy: string;
    factsEyebrow: string;
    factsTitle: string;
    relatedEyebrow: string;
    relatedTitle: string;
    relatedCopy: string;
    emptyRelated: string;
    stateEyebrow: string;
    stateCopy: string;
  };
  notFound: {
    eyebrow: string;
    title: string;
    copy: string;
  };
}

const dictionaries: Record<SupportedLocale, Dictionary> = {
  en: {
    meta: {
      defaultDescription:
        "Official website of First Stand Studio, a solo indie studio by Yahia Saad focused on original projects, clear identity, and enduring work.",
      aboutDescription:
        "About First Stand Studio, the solo indie studio by Yahia Saad focused on original projects, clear identity, and enduring work.",
      devlogDescription: "Development notes and project updates from First Stand Studio.",
      erireDescription:
        "Erire Language is a programming language project focused on faster application building, cleaner UI direction, and a stronger path from code to shipped software.",
      notFoundDescription: "Page not found."
    },
    common: {
      skipToContent: "Skip to content",
      readEntry: "Read entry",
      backToDevlog: "Back to Devlog",
      devlogEntry: "Devlog Entry",
      projectPage: "Project Page",
      recentDevelopment: "Recent Development",
      githubAware: "GitHub Aware",
      noProjectLinks: "Repository, website, documentation, and download links can be configured in src/data/projects.ts.",
      inDevelopment: "IN DEVELOPMENT",
      programmingLanguage: "PROGRAMMING LANGUAGE",
      currentState: "Current project state.",
      usefulLinks: "Useful Links",
      returnHome: "Return to Home",
      studioFooter: "Studio Footer",
      footerLinksAria: "Footer links",
      languageLabel: "Language",
      directionLabel: "Direction"
    },
    navigation: {
      home: "Home",
      about: "About",
      devlog: "Devlog",
      erire: "Erire"
    },
    hero: {
      eyebrow: "Yahia Saad",
      support: "Software, AI, games, systems.",
      pill: "Independent Developer",
      founded: "Fes, Morocco",
      positionLabel: "Studio Position",
      positionCopy: "We build around strong ideas, clear identity, and things that refuse to stop.",
      standardLabel: "Working Standard",
      standardCopy: "Every project is a proof of existence.",
      standardDescriptor: "No hype. No noise. Only work with enough weight to remain.",
      indicator: "Projects"
    },
    home: {
      projectsEyebrow: "Featured",
      projectsTitle: "Erire",
      projectsCopy: "",
      devlogsEyebrow: "Devlog",
      devlogsTitle: "A light note from the work.",
      devlogsCopy: "One recent entry, kept simple.",
      teamEyebrow: "Current Team",
      teamTitle: "Formal structure, kept intentionally narrow.",
      teamCopy:
        "The studio is presently a single-person structure. The system is built to expand without pretending it already has."
    },
    aboutSection: {
      eyebrow: "About",
      manifesto: "Yahia Saad",
      aboutText:
        "Self-directed developer from Morocco building software, AI tools, games, systems, and security-focused work.",
      founderLabel: "Base",
      originLabel: "Stack",
      positionLabel: "Focus",
      positionValue: "Software, AI, games, systems, security."
    },
    contactSection: {
      eyebrow: "Contact",
      title: "Hire a Dev",
      copy: "Freelance, custom software, and collaboration.",
      emailLabel: "Gmail",
      githubLabel: "GitHub",
      portfolioLabel: "Portfolio",
      button: "Hire a Dev"
    },
    aboutPage: {
      eyebrow: "About",
      title: "Yahia Saad",
      lede: "Self-directed developer from Morocco.",
      principlesEyebrow: "Capabilities",
      principlesTitle: "Built across software, AI, games, and systems.",
      principlesCopy: "14 languages. 7 engines. 4 frameworks.",
      principles: [
        {
          label: "Software",
          title: "Web, apps, backends.",
          copy: "Full-stack products, tools, launchers, and practical software work."
        },
        {
          label: "AI & Systems",
          title: "AI, ML, automation.",
          copy: "AI experiments, machine learning work, systems thinking, and product tooling."
        },
        {
          label: "Games & Security",
          title: "Games, engines, cybersecurity.",
          copy: "Game development, engine work, ethical hacking, and security-minded building."
        }
      ],
      teamEyebrow: "Current Team",
      teamTitle: "The active structure is simple and explicit.",
      teamCopy:
        "No invented headcount, no padded team wall. The current studio structure contains exactly one visible role."
    },
    team: {
      futureTop: "Future positions align here",
      futureBottom: "Structure prepared for future members",
      currentTeamEyebrow: "Current Team"
    },
    footer: {
      copyright: "© 2026 First Stand Studio. All rights reserved.",
      tagline: "Something endures."
    },
    devlog: {
      indexEyebrow: "Devlog",
      indexTitle: "A readable record of movement.",
      indexCopy:
        "Entries stay minimal, but they are meant to give the work a continuous, reviewable trail instead of a disappearing feed.",
      articleEyebrow: "Devlog Entry"
    },
    erirePage: {
      summaryEyebrow: "Core Summary",
      summaryTitle: "A language project aiming to tighten the distance between intent and shipped software.",
      visualEyebrow: "Visual / Media",
      visualTitle: "Project identity translated into a sharper showcase.",
      visualCopy:
        "The current repository only includes the official Erire mark, so the rest of the presentation is generated from that asset, restrained lighting, and product-facing typography.",
      factsEyebrow: "Key Facts",
      factsTitle: "Current project state.",
      relatedEyebrow: "Related Devlogs",
      relatedTitle: "Entries tied to the project.",
      relatedCopy: "The devlog stays close to project direction rather than drifting into a public changelog.",
      emptyRelated: "Project-specific devlogs will appear here as soon as new entries are added.",
      stateEyebrow: "Project State",
      stateCopy:
        "The project direction is defined, the identity is visible, and the public surface is prepared to reflect future progress without changing tone."
    },
    notFound: {
      eyebrow: "404",
      title: "The requested page does not hold here.",
      copy: "The route may have moved, not been configured yet, or no longer belongs to the public surface."
    }
  },
  ar: {
    meta: {
      defaultDescription:
        "الموقع الرسمي لـ First Stand Studio، وهو استوديو مستقل فردي يقوده Yahia Saad ويركز على المشاريع الأصلية والهوية الواضحة والعمل القابل للاستمرار.",
      aboutDescription:
        "نبذة عن First Stand Studio، وهو استوديو مستقل فردي يقوده Yahia Saad ويركز على المشاريع الأصلية والهوية الواضحة والعمل القابل للاستمرار.",
      devlogDescription: "ملاحظات التطوير وتحديثات المشاريع الخاصة بـ First Stand Studio.",
      erireDescription:
        "Erire Language هو مشروع لغة برمجة يركّز على بناء التطبيقات بسرعة أكبر، واتجاه واجهات أنظف، ومسار أقوى من الكود إلى البرنامج المنشور.",
      notFoundDescription: "الصفحة غير موجودة."
    },
    common: {
      skipToContent: "تخط إلى المحتوى",
      readEntry: "اقرأ التدوينة",
      backToDevlog: "العودة إلى الديفلوغ",
      devlogEntry: "تدوينة ديفلوغ",
      projectPage: "صفحة المشروع",
      recentDevelopment: "التطوير الأخير",
      githubAware: "مرتبط بـ GitHub",
      noProjectLinks: "يمكن ضبط روابط المستودع والموقع والوثائق والتنزيل داخل src/data/projects.ts.",
      inDevelopment: "قيد التطوير",
      programmingLanguage: "لغة برمجة",
      currentState: "الحالة الحالية للمشروع.",
      usefulLinks: "روابط مفيدة",
      returnHome: "العودة إلى الرئيسية",
      studioFooter: "تذييل الاستوديو",
      footerLinksAria: "روابط التذييل",
      languageLabel: "اللغة",
      directionLabel: "الاتجاه"
    },
    navigation: {
      home: "الرئيسية",
      about: "حول",
      devlog: "الديفلوغ",
      erire: "Erire"
    },
    hero: {
      eyebrow: "يحيى سعد",
      support: "برمجيات، ذكاء اصطناعي، ألعاب، وأنظمة.",
      pill: "مطور مستقل",
      founded: "فاس، المغرب",
      positionLabel: "موقع الاستوديو",
      positionCopy: "نبني حول أفكار قوية، وهوية واضحة، وأشياء ترفض أن تتوقف.",
      standardLabel: "المعيار",
      standardCopy: "كل مشروع هو دليل على الوجود.",
      standardDescriptor: "لا ضجيج. لا مبالغة. فقط عمل يملك ما يكفي من الوزن ليبقى.",
      indicator: "المشاريع"
    },
    home: {
      projectsEyebrow: "المشروع الرئيسي",
      projectsTitle: "Erire",
      projectsCopy: "",
      devlogsEyebrow: "الديفلوغ",
      devlogsTitle: "ملاحظة خفيفة من داخل العمل.",
      devlogsCopy: "تدوينة حديثة واحدة وبعرض بسيط.",
      teamEyebrow: "الفريق الحالي",
      teamTitle: "هيكل رسمي ومقصود الضيق.",
      teamCopy: "الاستوديو حاليًا يعمل ببنية من شخص واحد. النظام جاهز للتوسع من دون ادعاء أنه توسع بالفعل."
    },
    aboutSection: {
      eyebrow: "نبذة",
      manifesto: "يحيى سعد",
      aboutText:
        "مطور ذاتي التعلّم من المغرب يبني البرمجيات وأدوات الذكاء الاصطناعي والألعاب والأنظمة والأعمال ذات الطابع الأمني.",
      founderLabel: "الموقع",
      originLabel: "الخبرة",
      positionLabel: "التركيز",
      positionValue: "برمجيات، ذكاء اصطناعي، ألعاب، أنظمة، وأمن."
    },
    contactSection: {
      eyebrow: "التواصل",
      title: "وظّف مطورًا",
      copy: "أعمال حرة، برمجيات مخصصة، وتعاون.",
      emailLabel: "Gmail",
      githubLabel: "GitHub",
      portfolioLabel: "المعرض",
      button: "وظّف مطورًا"
    },
    aboutPage: {
      eyebrow: "حول",
      title: "يحيى سعد",
      lede: "مطور ذاتي التعلّم من المغرب.",
      principlesEyebrow: "القدرات",
      principlesTitle: "أعمل عبر البرمجيات والذكاء الاصطناعي والألعاب والأنظمة.",
      principlesCopy: "14 لغة. 7 محركات. 4 أطر.",
      principles: [
        {
          label: "برمجيات",
          title: "ويب، تطبيقات، وخلفيات.",
          copy: "تطوير full-stack، أدوات، launchers، وبرمجيات عملية."
        },
        {
          label: "ذكاء وأنظمة",
          title: "ذكاء اصطناعي، تعلم آلي، وأتمتة.",
          copy: "أدوات عملية، أفكار AI، ومنهجية مبنية على الأنظمة."
        },
        {
          label: "ألعاب وأمن",
          title: "تطوير ألعاب، محركات، وأمن سيبراني.",
          copy: "بناء الألعاب، العمل على المحركات، واهتمام واضح بالجانب الأمني."
        }
      ],
      teamEyebrow: "الفريق الحالي",
      teamTitle: "الهيكل الحالي بسيط وصريح.",
      teamCopy: "لا أسماء مختلقة، ولا جدار فريق مزيف. البنية الحالية تحتوي على دور واحد ظاهر فقط."
    },
    team: {
      futureTop: "ستصطف المناصب القادمة هنا",
      futureBottom: "الهيكل جاهز للأعضاء المستقبليين",
      currentTeamEyebrow: "الفريق الحالي"
    },
    footer: {
      copyright: "© 2026 First Stand Studio. جميع الحقوق محفوظة.",
      tagline: "شيء ما يبقى."
    },
    devlog: {
      indexEyebrow: "الديفلوغ",
      indexTitle: "سجل قابل للقراءة لحركة العمل.",
      indexCopy: "التدوينات تظل مختصرة، لكنها مصممة لتمنح العمل أثرًا مستمرًا قابلًا للمراجعة بدل أن تختفي كمنشورات عابرة.",
      articleEyebrow: "تدوينة ديفلوغ"
    },
    erirePage: {
      summaryEyebrow: "الملخص الأساسي",
      summaryTitle: "مشروع لغة يسعى إلى تقليص المسافة بين النية والبرنامج المنشور.",
      visualEyebrow: "الهوية / العرض",
      visualTitle: "هوية المشروع مترجمة إلى عرض أكثر حدّة.",
      visualCopy:
        "المستودع الحالي لا يحتوي إلا على الشعار الرسمي لـ Erire، لذلك تم بناء بقية العرض بصريًا حول هذا الأصل مع إضاءة منضبطة ونبرة طباعية واضحة.",
      factsEyebrow: "حقائق أساسية",
      factsTitle: "الحالة الحالية للمشروع.",
      relatedEyebrow: "ديفلوغات مرتبطة",
      relatedTitle: "تدوينات مرتبطة بالمشروع.",
      relatedCopy: "يبقى الديفلوغ قريبًا من اتجاه المشروع بدل أن يتحول إلى لوحة تغييرات عامة.",
      emptyRelated: "ستظهر هنا ديفلوغات خاصة بالمشروع فور إضافة تدوينات جديدة.",
      stateEyebrow: "حالة المشروع",
      stateCopy: "اتجاه المشروع محدد، وهويته مرئية، وسطحه العام جاهز ليعكس التقدم القادم من دون تغيير النبرة."
    },
    notFound: {
      eyebrow: "404",
      title: "الصفحة المطلوبة ليست هنا.",
      copy: "قد يكون المسار قد تغيّر، أو لم يُضبط بعد، أو لم يعد جزءًا من السطح العام للموقع."
    }
  },
  fr: {
    meta: {
      defaultDescription:
        "Site officiel de First Stand Studio, un studio indépendant solo dirigé par Yahia Saad et centré sur des projets originaux, une identité claire et un travail durable.",
      aboutDescription:
        "À propos de First Stand Studio, le studio indépendant solo de Yahia Saad consacré aux projets originaux, à l’identité claire et au travail durable.",
      devlogDescription: "Notes de développement et mises à jour des projets de First Stand Studio.",
      erireDescription:
        "Erire Language est un projet de langage de programmation axé sur une création d’applications plus rapide, une direction UI plus propre et un passage plus direct du code au logiciel livré.",
      notFoundDescription: "Page introuvable."
    },
    common: {
      skipToContent: "Aller au contenu",
      readEntry: "Lire l’entrée",
      backToDevlog: "Retour au Devlog",
      devlogEntry: "Entrée du Devlog",
      projectPage: "Page du projet",
      recentDevelopment: "Développement récent",
      githubAware: "GitHub intégré",
      noProjectLinks: "Les liens vers le dépôt, le site, la documentation et le téléchargement peuvent être configurés dans src/data/projects.ts.",
      inDevelopment: "EN DÉVELOPPEMENT",
      programmingLanguage: "LANGAGE DE PROGRAMMATION",
      currentState: "État actuel du projet.",
      usefulLinks: "Liens utiles",
      returnHome: "Retour à l’accueil",
      studioFooter: "Pied du studio",
      footerLinksAria: "Liens du pied de page",
      languageLabel: "Langue",
      directionLabel: "Direction"
    },
    navigation: {
      home: "Accueil",
      about: "À propos",
      devlog: "Devlog",
      erire: "Erire"
    },
    hero: {
      eyebrow: "Yahia Saad",
      support: "Logiciels, IA, jeux, systèmes.",
      pill: "Développeur indépendant",
      founded: "Fès, Maroc",
      positionLabel: "Position du studio",
      positionCopy: "Nous construisons autour d’idées fortes, d’une identité claire et de choses qui refusent de s’arrêter.",
      standardLabel: "Standard de travail",
      standardCopy: "Chaque projet est une preuve d’existence.",
      standardDescriptor: "Pas de battage. Pas de bruit. Seulement un travail assez solide pour durer.",
      indicator: "Projets"
    },
    home: {
      projectsEyebrow: "Projet",
      projectsTitle: "Erire",
      projectsCopy: "",
      devlogsEyebrow: "Devlog",
      devlogsTitle: "Une note légère depuis le travail.",
      devlogsCopy: "Une seule entrée récente, gardée simple.",
      teamEyebrow: "Équipe actuelle",
      teamTitle: "Une structure formelle, volontairement étroite.",
      teamCopy:
        "Le studio fonctionne actuellement comme une structure d’une seule personne. Le système est prêt à s’étendre sans prétendre l’avoir déjà fait."
    },
    aboutSection: {
      eyebrow: "À propos",
      manifesto: "Yahia Saad",
      aboutText:
        "Développeur autodidacte du Maroc, je construis des logiciels, des outils IA, des jeux, des systèmes et un travail orienté sécurité.",
      founderLabel: "Base",
      originLabel: "Parcours",
      positionLabel: "Focus",
      positionValue: "Logiciels, IA, jeux, systèmes, sécurité."
    },
    contactSection: {
      eyebrow: "Contact",
      title: "Engager un développeur",
      copy: "Freelance, logiciel sur mesure et collaboration.",
      emailLabel: "Gmail",
      githubLabel: "GitHub",
      portfolioLabel: "Portfolio",
      button: "Engager un développeur"
    },
    aboutPage: {
      eyebrow: "À propos",
      title: "Yahia Saad",
      lede: "Développeur autodidacte basé au Maroc.",
      principlesEyebrow: "Capacités",
      principlesTitle: "Travail entre logiciel, IA, jeux et systèmes.",
      principlesCopy: "14 langages. 7 moteurs. 4 frameworks.",
      principles: [
        {
          label: "Logiciel",
          title: "Web, apps, backends.",
          copy: "Produits full-stack, outils, launchers et développement logiciel pratique."
        },
        {
          label: "IA & Systèmes",
          title: "IA, ML, automatisation.",
          copy: "Travail autour de l’IA, de l’apprentissage machine et d’outils pensés comme des systèmes."
        },
        {
          label: "Jeux & Sécurité",
          title: "Jeux, moteurs, cybersécurité.",
          copy: "Développement de jeux, travail sur moteurs et approche orientée sécurité."
        }
      ],
      teamEyebrow: "Équipe actuelle",
      teamTitle: "La structure active est simple et explicite.",
      teamCopy: "Aucun effectif inventé, aucune façade. La structure actuelle contient exactement un seul rôle visible."
    },
    team: {
      futureTop: "Les futurs postes s’aligneront ici",
      futureBottom: "Structure prête pour les membres à venir",
      currentTeamEyebrow: "Équipe actuelle"
    },
    footer: {
      copyright: "© 2026 First Stand Studio. Tous droits réservés.",
      tagline: "Quelque chose demeure."
    },
    devlog: {
      indexEyebrow: "Devlog",
      indexTitle: "Une trace lisible du mouvement.",
      indexCopy:
        "Les entrées restent minimales, mais elles sont conçues pour donner au travail une continuité vérifiable au lieu d’un flux qui disparaît.",
      articleEyebrow: "Entrée du Devlog"
    },
    erirePage: {
      summaryEyebrow: "Résumé central",
      summaryTitle: "Un projet de langage qui vise à réduire la distance entre l’intention et le logiciel livré.",
      visualEyebrow: "Visuel / Media",
      visualTitle: "L’identité du projet traduite en une présentation plus nette.",
      visualCopy:
        "Le dépôt actuel ne contient que la marque officielle d’Erire, donc le reste de la présentation est construit à partir de cet actif, d’une lumière retenue et d’une typographie orientée produit.",
      factsEyebrow: "Faits clés",
      factsTitle: "État actuel du projet.",
      relatedEyebrow: "Devlogs liés",
      relatedTitle: "Entrées liées au projet.",
      relatedCopy: "Le devlog reste proche de la direction du projet au lieu de dériver vers un simple journal public de changements.",
      emptyRelated: "Les devlogs propres au projet apparaîtront ici dès que de nouvelles entrées seront ajoutées.",
      stateEyebrow: "État du projet",
      stateCopy:
        "La direction du projet est définie, son identité est visible, et sa surface publique est prête à refléter les progrès à venir sans changer de ton."
    },
    notFound: {
      eyebrow: "404",
      title: "La page demandée ne se trouve pas ici.",
      copy: "L’itinéraire a peut-être changé, n’a pas encore été configuré ou ne fait plus partie de la surface publique."
    }
  },
  ru: {
    meta: {
      defaultDescription:
        "Официальный сайт First Stand Studio — независимой сольной студии Яхьи Саада, сосредоточенной на оригинальных проектах, ясной идентичности и работе, рассчитанной на долгий срок.",
      aboutDescription:
        "О First Stand Studio — сольной независимой студии Яхьи Саада, сосредоточенной на оригинальных проектах, ясной идентичности и работе, рассчитанной на долгий срок.",
      devlogDescription: "Заметки разработки и обновления проектов First Stand Studio.",
      erireDescription:
        "Erire Language — проект языка программирования, ориентированный на более быстрое создание приложений, более чистое UI-направление и более прямой путь от кода к выпущенному продукту.",
      notFoundDescription: "Страница не найдена."
    },
    common: {
      skipToContent: "Перейти к содержимому",
      readEntry: "Читать запись",
      backToDevlog: "Назад к Devlog",
      devlogEntry: "Запись Devlog",
      projectPage: "Страница проекта",
      recentDevelopment: "Последняя разработка",
      githubAware: "Связано с GitHub",
      noProjectLinks: "Ссылки на репозиторий, сайт, документацию и загрузку можно настроить в src/data/projects.ts.",
      inDevelopment: "В РАЗРАБОТКЕ",
      programmingLanguage: "ЯЗЫК ПРОГРАММИРОВАНИЯ",
      currentState: "Текущее состояние проекта.",
      usefulLinks: "Полезные ссылки",
      returnHome: "Вернуться на главную",
      studioFooter: "Подвал студии",
      footerLinksAria: "Ссылки в подвале",
      languageLabel: "Язык",
      directionLabel: "Направление"
    },
    navigation: {
      home: "Главная",
      about: "О студии",
      devlog: "Devlog",
      erire: "Erire"
    },
    hero: {
      eyebrow: "Yahia Saad",
      support: "Софт, ИИ, игры, системы.",
      pill: "Независимый разработчик",
      founded: "Фес, Марокко",
      positionLabel: "Позиция студии",
      positionCopy: "Мы строим вокруг сильных идей, ясной идентичности и вещей, которые отказываются останавливаться.",
      standardLabel: "Рабочий стандарт",
      standardCopy: "Каждый проект — доказательство существования.",
      standardDescriptor: "Никакого шума. Никакой суеты. Только работа, у которой достаточно веса, чтобы остаться.",
      indicator: "Проекты"
    },
    home: {
      projectsEyebrow: "Проект",
      projectsTitle: "Erire",
      projectsCopy: "",
      devlogsEyebrow: "Devlog",
      devlogsTitle: "Лёгкая заметка из работы.",
      devlogsCopy: "Одна свежая запись, оставленная простой.",
      teamEyebrow: "Текущая команда",
      teamTitle: "Формальная структура, намеренно узкая.",
      teamCopy:
        "Сейчас студия представляет собой структуру из одного человека. Система готова к расширению, не притворяясь, что оно уже произошло."
    },
    aboutSection: {
      eyebrow: "Обо мне",
      manifesto: "Yahia Saad",
      aboutText:
        "Самоучка-разработчик из Марокко, создаю софт, AI-инструменты, игры, системы и продукты с уклоном в безопасность.",
      founderLabel: "База",
      originLabel: "Опыт",
      positionLabel: "Фокус",
      positionValue: "Софт, ИИ, игры, системы, безопасность."
    },
    contactSection: {
      eyebrow: "Контакт",
      title: "Нанять разработчика",
      copy: "Фриланс, кастомная разработка и сотрудничество.",
      emailLabel: "Gmail",
      githubLabel: "GitHub",
      portfolioLabel: "Портфолио",
      button: "Нанять разработчика"
    },
    aboutPage: {
      eyebrow: "О студии",
      title: "Yahia Saad",
      lede: "Самостоятельный разработчик из Марокко.",
      principlesEyebrow: "Возможности",
      principlesTitle: "Работа на стыке софта, ИИ, игр и систем.",
      principlesCopy: "14 языков. 7 движков. 4 фреймворка.",
      principles: [
        {
          label: "Софт",
          title: "Веб, приложения, backend.",
          copy: "Full-stack продукты, инструменты, launchers и прикладная разработка."
        },
        {
          label: "ИИ и системы",
          title: "ИИ, ML, автоматизация.",
          copy: "Практические AI-инструменты, машинное обучение и системный подход."
        },
        {
          label: "Игры и безопасность",
          title: "Игры, движки, кибербезопасность.",
          copy: "Разработка игр, работа с движками и security-minded подход к созданию."
        }
      ],
      teamEyebrow: "Текущая команда",
      teamTitle: "Активная структура проста и прямолинейна.",
      teamCopy: "Никакой выдуманной команды и витрины. Текущая структура содержит ровно одну видимую роль."
    },
    team: {
      futureTop: "Будущие позиции выстроятся здесь",
      futureBottom: "Структура подготовлена для будущих участников",
      currentTeamEyebrow: "Текущая команда"
    },
    footer: {
      copyright: "© 2026 First Stand Studio. Все права защищены.",
      tagline: "Что-то остаётся."
    },
    devlog: {
      indexEyebrow: "Devlog",
      indexTitle: "Читаемая запись движения.",
      indexCopy:
        "Записи остаются минимальными, но должны давать работе непрерывный и проверяемый след вместо исчезающей ленты.",
      articleEyebrow: "Запись Devlog"
    },
    erirePage: {
      summaryEyebrow: "Ключевое резюме",
      summaryTitle: "Языковой проект, стремящийся сократить дистанцию между намерением и выпущенным программным продуктом.",
      visualEyebrow: "Визуал / Media",
      visualTitle: "Идентичность проекта переведена в более точную презентацию.",
      visualCopy:
        "Текущий репозиторий содержит только официальный знак Erire, поэтому остальная подача строится вокруг этого актива, сдержанного света и продуктово-ориентированной типографики.",
      factsEyebrow: "Ключевые факты",
      factsTitle: "Текущее состояние проекта.",
      relatedEyebrow: "Связанные Devlogs",
      relatedTitle: "Записи, связанные с проектом.",
      relatedCopy: "Devlog остаётся близким к направлению проекта и не превращается в обычную публичную ленту изменений.",
      emptyRelated: "Связанные с проектом devlog-записи появятся здесь после добавления новых материалов.",
      stateEyebrow: "Состояние проекта",
      stateCopy:
        "Направление проекта определено, его идентичность видима, а публичная поверхность готова отражать дальнейший прогресс без смены тона."
    },
    notFound: {
      eyebrow: "404",
      title: "Запрошенной страницы здесь нет.",
      copy: "Маршрут мог измениться, ещё не быть настроен или больше не относиться к публичной поверхности сайта."
    }
  },
  ja: {
    meta: {
      defaultDescription:
        "First Stand Studio の公式サイト。Yahia Saad による一人のインディー・スタジオとして、独自性のあるプロジェクト、明確なアイデンティティ、そして持続する仕事に集中しています。",
      aboutDescription:
        "First Stand Studio について。Yahia Saad による一人のインディー・スタジオであり、独自性のあるプロジェクト、明確なアイデンティティ、持続する仕事に焦点を当てています。",
      devlogDescription: "First Stand Studio の開発メモとプロジェクト更新。",
      erireDescription:
        "Erire Language は、より速いアプリケーション構築、より整理された UI 方針、そしてコードから出荷までのより強い流れを目指すプログラミング言語プロジェクトです。",
      notFoundDescription: "ページが見つかりません。"
    },
    common: {
      skipToContent: "本文へ移動",
      readEntry: "記事を読む",
      backToDevlog: "Devlog に戻る",
      devlogEntry: "Devlog 記事",
      projectPage: "プロジェクトページ",
      recentDevelopment: "最近の開発",
      githubAware: "GitHub 連携",
      noProjectLinks: "リポジトリ、サイト、ドキュメント、ダウンロードのリンクは src/data/projects.ts で設定できます。",
      inDevelopment: "開発中",
      programmingLanguage: "プログラミング言語",
      currentState: "現在のプロジェクト状況。",
      usefulLinks: "関連リンク",
      returnHome: "ホームに戻る",
      studioFooter: "スタジオフッター",
      footerLinksAria: "フッターリンク",
      languageLabel: "言語",
      directionLabel: "方向性"
    },
    navigation: {
      home: "ホーム",
      about: "概要",
      devlog: "Devlog",
      erire: "Erire"
    },
    hero: {
      eyebrow: "Yahia Saad",
      support: "ソフトウェア、AI、ゲーム、システム。",
      pill: "インディペンデント開発者",
      founded: "フェズ、モロッコ",
      positionLabel: "スタジオの姿勢",
      positionCopy: "私たちは強いアイデア、明確なアイデンティティ、そして止まることを拒むものの周りに築いています。",
      standardLabel: "基準",
      standardCopy: "すべてのプロジェクトは存在の証明です。",
      standardDescriptor: "誇張はしない。騒がない。ただ、残るだけの重さを持つ仕事を置く。",
      indicator: "プロジェクト"
    },
    home: {
      projectsEyebrow: "Project",
      projectsTitle: "Erire",
      projectsCopy: "",
      devlogsEyebrow: "Devlog",
      devlogsTitle: "作業からの軽い記録。",
      devlogsCopy: "最新の記録をひとつだけ、簡潔に置いています。",
      teamEyebrow: "現在のチーム",
      teamTitle: "意図的に絞られた正式な構造。",
      teamCopy:
        "現在のスタジオは一人の構造です。まだ拡張していないのに拡張したふりをせず、そのまま拡張できるように設計されています。"
    },
    aboutSection: {
      eyebrow: "About",
      manifesto: "Yahia Saad",
      aboutText:
        "モロッコ拠点の独学開発者として、ソフトウェア、AI ツール、ゲーム、システム、セキュリティ志向の制作を行っています。",
      founderLabel: "拠点",
      originLabel: "経験",
      positionLabel: "注力",
      positionValue: "ソフトウェア、AI、ゲーム、システム、セキュリティ。"
    },
    contactSection: {
      eyebrow: "Contact",
      title: "開発を依頼する",
      copy: "フリーランス、受託開発、コラボレーションに対応。",
      emailLabel: "Gmail",
      githubLabel: "GitHub",
      portfolioLabel: "Portfolio",
      button: "開発を依頼する"
    },
    aboutPage: {
      eyebrow: "概要",
      title: "Yahia Saad",
      lede: "モロッコを拠点にする独学の開発者。",
      principlesEyebrow: "Capabilities",
      principlesTitle: "ソフトウェア、AI、ゲーム、システムを横断して制作。",
      principlesCopy: "14 言語。7 エンジン。4 フレームワーク。",
      principles: [
        {
          label: "Software",
          title: "Web、アプリ、backend。",
          copy: "full-stack プロダクト、ツール、launchers、実用的なソフトウェア開発。"
        },
        {
          label: "AI & Systems",
          title: "AI、ML、自動化。",
          copy: "実用的な AI ツール、機械学習、そしてシステム思考。"
        },
        {
          label: "Games & Security",
          title: "ゲーム、エンジン、サイバーセキュリティ。",
          copy: "ゲーム開発、エンジン作業、そして security-minded な制作。"
        }
      ],
      teamEyebrow: "現在のチーム",
      teamTitle: "現在の構造は単純で明確です。",
      teamCopy: "人数を作らず、見せかけのチーム壁も作りません。現在見えている役割はひとつだけです。"
    },
    team: {
      futureTop: "将来の役割はここに並びます",
      futureBottom: "今後のメンバーのために構造は準備済みです",
      currentTeamEyebrow: "現在のチーム"
    },
    footer: {
      copyright: "© 2026 First Stand Studio. All rights reserved.",
      tagline: "残るものがある。"
    },
    devlog: {
      indexEyebrow: "Devlog",
      indexTitle: "動きを読める形で残す記録。",
      indexCopy: "記録は最小限のままですが、消えていくフィードではなく、見返せる連続した痕跡として機能するように作られています。",
      articleEyebrow: "Devlog 記事"
    },
    erirePage: {
      summaryEyebrow: "中核の要約",
      summaryTitle: "意図から出荷されたソフトウェアまでの距離を縮めようとする言語プロジェクト。",
      visualEyebrow: "ビジュアル / メディア",
      visualTitle: "プロジェクトのアイデンティティを、より鋭い見せ方へ変換。",
      visualCopy:
        "現在のリポジトリには Erire の公式マークしか含まれていないため、残りの見せ方はそのアセット、抑制された光、そしてプロダクト志向のタイポグラフィを基に構成されています。",
      factsEyebrow: "主要情報",
      factsTitle: "現在のプロジェクト状況。",
      relatedEyebrow: "関連 Devlogs",
      relatedTitle: "このプロジェクトに結びついた記事。",
      relatedCopy: "Devlog は単なる公開変更履歴ではなく、プロジェクトの方向性に近い位置を保ちます。",
      emptyRelated: "新しい記事が追加されると、プロジェクト関連の Devlog がここに表示されます。",
      stateEyebrow: "プロジェクト状況",
      stateCopy: "プロジェクトの方向性は定まり、アイデンティティは見えており、今後の進捗をトーンを変えずに反映できる公開面が整っています。"
    },
    notFound: {
      eyebrow: "404",
      title: "指定されたページはここにはありません。",
      copy: "ルートが変わったか、まだ設定されていないか、あるいは公開面に含まれなくなった可能性があります。"
    }
  }
};

export function getDictionary(locale: SupportedLocale) {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
