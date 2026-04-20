/* Date: 4/20/2026 | Developer: Yahia Saad | License: First Stand Studio. All rights reserved. */
import { projects } from "../data/projects";
import type { ProjectRecord } from "../data/types";
import { defaultLocale, type SupportedLocale } from "./config";

const projectTranslations = {
  erire: {
    label: {
      en: "Featured Project",
      ar: "المشروع المميّز",
      fr: "Projet principal",
      ru: "Главный проект",
      ja: "注目プロジェクト"
    },
    title: {
      en: "Erire Language",
      ar: "Erire Language",
      fr: "Erire Language",
      ru: "Erire Language",
      ja: "Erire Language"
    },
    shortTitle: {
      en: "Erire",
      ar: "Erire",
      fr: "Erire",
      ru: "Erire",
      ja: "Erire"
    },
    subtitle: {
      en: "PROGRAMMING LANGUAGE",
      ar: "لغة برمجة",
      fr: "LANGAGE DE PROGRAMMATION",
      ru: "ЯЗЫК ПРОГРАММИРОВАНИЯ",
      ja: "プログラミング言語"
    },
    description: {
      en: "UI-first language and tooling for building apps faster.",
      ar: "لغة وأدوات بأسلوب UI-first لبناء التطبيقات بسرعة أكبر.",
      fr: "Langage et outils UI-first pour créer des applications plus vite.",
      ru: "UI-first язык и инструменты для более быстрой разработки приложений.",
      ja: "より速くアプリを作るための UI-first 言語とツール。"
    },
    status: {
      en: "IN DEVELOPMENT",
      ar: "قيد التطوير",
      fr: "EN DÉVELOPPEMENT",
      ru: "В РАЗРАБОТКЕ",
      ja: "開発中"
    },
    type: {
      en: "Programming Language & UI-First Development System",
      ar: "لغة برمجة ونظام تطوير موجه للواجهة",
      fr: "Langage de programmation et systeme de developpement UI-first",
      ru: "Язык программирования и UI-first система разработки",
      ja: "プログラミング言語 / UI-first 開発システム"
    },
    atmosphere: {
      en: "Built to make application development faster, clearer, and more direct.",
      ar: "مبنية لتجعل تطوير التطبيقات أسرع وأوضح وأكثر مباشرة.",
      fr: "Conçu pour rendre le développement d'applications plus rapide, plus clair et plus direct.",
      ru: "Создана, чтобы делать разработку приложений быстрее, яснее и прямее.",
      ja: "より速く、より明快で、より直接的なアプリ開発のために設計されています。"
    },
    facts: {
      en: [
        { label: "Type", value: "Programming Language & UI-First Development System" },
        { label: "Status", value: "In Development" },
        { label: "Architecture", value: "Language + Runtime + IDE" },
        { label: "UI System", value: "Built-in UI components and layout tools" },
        { label: "Workflow", value: "Direct run and build from Erire Studio" },
        { label: "Backend", value: "main.er, backend.er, or backend/" },
        { label: "Integration", value: "Python and C++ for heavy logic" },
        { label: "Current Focus", value: "Performance, stability, and IDE user experience" }
      ],
      ar: [
        { label: "النوع", value: "لغة برمجة ونظام تطوير موجه للواجهة" },
        { label: "الحالة", value: "قيد التطوير" },
        { label: "البنية", value: "اللغة + runtime + IDE" },
        { label: "نظام الواجهة", value: "مكونات UI وأدوات layout مدمجة" },
        { label: "سير العمل", value: "تشغيل وبناء مباشر من Erire Studio" },
        { label: "الخلفية", value: "main.er و backend.er أو المجلد backend" },
        { label: "التكامل", value: "Python و C++ للعمليات الثقيلة والمنطق المتقدم" },
        { label: "التركيز الحالي", value: "الأداء والاستقرار وتجربة IDE" }
      ],
      fr: [
        { label: "Type", value: "Langage de programmation et systeme de developpement UI-first" },
        { label: "Statut", value: "En développement" },
        { label: "Architecture", value: "Langage + runtime + IDE" },
        { label: "UI", value: "Composants UI et outils de layout intégrés" },
        { label: "Flux", value: "Exécution et build directs depuis Erire Studio" },
        { label: "Backend", value: "main.er, backend.er ou dossier backend" },
        { label: "Integration", value: "Python et C++ pour la logique lourde" },
        { label: "Focus actuel", value: "Performance, stabilité et UX de l'IDE" }
      ],
      ru: [
        { label: "Тип", value: "Язык программирования и UI-first система разработки" },
        { label: "Статус", value: "В разработке" },
        { label: "Архитектура", value: "Язык + runtime + IDE" },
        { label: "UI-система", value: "Встроенные UI-компоненты и layout-инструменты" },
        { label: "Поток", value: "Прямой запуск и сборка из Erire Studio" },
        { label: "Backend", value: "main.er, backend.er или каталог backend" },
        { label: "Интеграция", value: "Python и C++ для тяжёлой логики" },
        { label: "Текущий фокус", value: "Производительность, стабильность и UX IDE" }
      ],
      ja: [
        { label: "種類", value: "プログラミング言語と UI-first 開発システム" },
        { label: "状態", value: "開発中" },
        { label: "構成", value: "言語 + runtime + IDE" },
        { label: "UI システム", value: "組み込み UI コンポーネントと layout ツール" },
        { label: "ワークフロー", value: "Erire Studio から直接実行とビルド" },
        { label: "バックエンド", value: "main.er、backend.er、または backend/" },
        { label: "連携", value: "重い処理向けの Python と C++" },
        { label: "現在の重点", value: "パフォーマンス、安定性、IDE UX" }
      ]
    },
    fallbackMessages: {
      en: [
        "Defined Erire around one direct flow: language, runtime, and IDE together.",
        "Current work is focused on runtime stability and the Erire Studio experience."
      ],
      ar: [
        "تم تحديد Erire حول تدفق مباشر واحد: اللغة و runtime و IDE معًا.",
        "يركز العمل الحالي على استقرار runtime وتجربة Erire Studio."
      ],
      fr: [
        "Erire a été défini autour d'un flux direct : langage, runtime et IDE ensemble.",
        "Le travail actuel se concentre sur la stabilité du runtime et l'expérience Erire Studio."
      ],
      ru: [
        "Erire выстроен вокруг одного прямого потока: язык, runtime и IDE вместе.",
        "Текущая работа сосредоточена на стабильности runtime и опыте Erire Studio."
      ],
      ja: [
        "Erire は、言語・runtime・IDE をひとつの直接的な流れとして定義しています。",
        "現在の作業は runtime の安定性と Erire Studio 体験に集中しています。"
      ]
    }
  }
} as const satisfies Record<
  string,
  {
    label: Record<SupportedLocale, string>;
    title: Record<SupportedLocale, string>;
    shortTitle: Record<SupportedLocale, string>;
    subtitle: Record<SupportedLocale, string>;
    description: Record<SupportedLocale, string>;
    status: Record<SupportedLocale, string>;
    type: Record<SupportedLocale, string>;
    atmosphere: Record<SupportedLocale, string>;
    facts: Record<SupportedLocale, { label: string; value: string }[]>;
    fallbackMessages: Record<SupportedLocale, string[]>;
  }
>;

export function getLocalizedProject(project: ProjectRecord, locale: SupportedLocale): ProjectRecord {
  const copy = projectTranslations[project.slug as keyof typeof projectTranslations];

  if (!copy) {
    return project;
  }

  return {
    ...project,
    label: copy.label[locale] ?? copy.label[defaultLocale],
    title: copy.title[locale] ?? copy.title[defaultLocale],
    shortTitle: copy.shortTitle[locale] ?? copy.shortTitle[defaultLocale],
    subtitle: copy.subtitle[locale] ?? copy.subtitle[defaultLocale],
    description: copy.description[locale] ?? copy.description[defaultLocale],
    status: copy.status[locale] ?? copy.status[defaultLocale],
    type: copy.type[locale] ?? copy.type[defaultLocale],
    atmosphere: copy.atmosphere[locale] ?? copy.atmosphere[defaultLocale],
    facts: copy.facts[locale] ?? copy.facts[defaultLocale],
    github: {
      ...project.github,
      fallback: project.github.fallback.map((item, index) => ({
        ...item,
        message:
          copy.fallbackMessages[locale]?.[index] ??
          copy.fallbackMessages[defaultLocale]?.[index] ??
          item.message
      }))
    }
  };
}

export function getLocalizedProjects(locale: SupportedLocale) {
  return projects.map((project) => getLocalizedProject(project, locale));
}
