/* Date: 4/20/2026 | Developer: Yahia Saad | License: First Stand Studio. All rights reserved. */
import { defaultLocale, type SupportedLocale } from "./config";

const erirePageCopy = {
  en: {
    summaryEyebrow: "Core Summary",
    summaryTitle: "Erire brings the language, runtime, and IDE into one system.",
    visualEyebrow: "Visual / System",
    visualTitle: "Interface, logic, execution, and build are meant to live inside one workflow.",
    visualCopy:
      "Instead of relying on multiple libraries, long environment setup, and a hard split between frontend and backend, Erire keeps application structure and UI work inside the language itself and runs through a dedicated environment.",
    factsEyebrow: "Key Facts",
    factsTitle: "Current system shape.",
    relatedEyebrow: "Related Devlogs",
    relatedTitle: "Direction notes tied to the system.",
    relatedCopy:
      "The Erire devlog is meant to track language direction, runtime decisions, IDE workflow, backend flexibility, and UI-first architecture without turning into a noisy dashboard.",
    emptyRelated: "Project-specific devlogs will appear here as soon as new entries are added.",
    stateEyebrow: "Project State",
    stateCopy:
      "The project is still in development. Current work is focused on runtime performance, execution stability, IDE user experience, backend flexibility, and continuous feature additions across the unified system."
  },
  ar: {
    summaryEyebrow: "الملخص الأساسي",
    summaryTitle: "Erire تجمع اللغة و runtime و IDE في نظام واحد.",
    visualEyebrow: "الهوية / النظام",
    visualTitle: "الواجهة والمنطق والتنفيذ والبناء يفترض أن يعيشوا داخل سير عمل واحد.",
    visualCopy:
      "بدل الاعتماد على مكتبات متعددة، وإعدادات طويلة، وفصل حاد بين frontend و backend، تحافظ Erire على بنية التطبيق وعمل الواجهة داخل اللغة نفسها وتعمل من خلال بيئة مخصصة.",
    factsEyebrow: "حقائق أساسية",
    factsTitle: "شكل النظام الحالي.",
    relatedEyebrow: "ديفلوغات مرتبطة",
    relatedTitle: "ملاحظات اتجاه مرتبطة بالنظام.",
    relatedCopy:
      "ديفلوغ Erire مخصص لتتبع اتجاه اللغة وقرارات runtime وسير عمل IDE ومرونة الخلفية وبنية UI-first من دون أن يتحول إلى لوحة عامة صاخبة.",
    emptyRelated: "ستظهر هنا ديفلوغات خاصة بالمشروع فور إضافة تدوينات جديدة.",
    stateEyebrow: "حالة المشروع",
    stateCopy:
      "المشروع لا يزال قيد التطوير. يتركز العمل الحالي على أداء runtime، واستقرار التنفيذ، وتجربة المستخدم داخل IDE، ومرونة الخلفية، وإضافة ميزات جديدة بشكل مستمر داخل النظام الموحد."
  },
  fr: {
    summaryEyebrow: "Resume central",
    summaryTitle: "Erire réunit langage, runtime et IDE dans un seul système.",
    visualEyebrow: "Visuel / Systeme",
    visualTitle: "Interface, logique, execution et build sont pensés pour vivre dans un seul flux.",
    visualCopy:
      "Au lieu de dépendre de plusieurs bibliothèques, d'une configuration lourde et d'une séparation dure entre frontend et backend, Erire garde la structure de l'application et le travail UI à l'intérieur même du langage et les fait passer par un environnement dédié.",
    factsEyebrow: "Faits cles",
    factsTitle: "Forme actuelle du système.",
    relatedEyebrow: "Devlogs lies",
    relatedTitle: "Notes de direction liées au système.",
    relatedCopy:
      "Le devlog Erire sert à suivre la direction du langage, les choix du runtime, le flux de l'IDE, la flexibilité du backend et l'architecture UI-first sans devenir un tableau de bord bruyant.",
    emptyRelated: "Les devlogs propres au projet apparaîtront ici dès que de nouvelles entrées seront ajoutées.",
    stateEyebrow: "Etat du projet",
    stateCopy:
      "Le projet est toujours en développement. Le travail actuel se concentre sur la performance du runtime, la stabilité d'exécution, l'expérience utilisateur dans l'IDE, la flexibilité backend et l'ajout continu de nouvelles fonctionnalités."
  },
  ru: {
    summaryEyebrow: "Ключевое резюме",
    summaryTitle: "Erire объединяет язык, runtime и IDE в одну систему.",
    visualEyebrow: "Визуал / Система",
    visualTitle: "Интерфейс, логика, выполнение и сборка должны жить внутри одного потока.",
    visualCopy:
      "Вместо зависимости от множества библиотек, длинной настройки среды и жёсткого разделения между frontend и backend, Erire удерживает структуру приложения и работу с UI внутри самого языка и проводит их через отдельную среду.",
    factsEyebrow: "Ключевые факты",
    factsTitle: "Текущая форма системы.",
    relatedEyebrow: "Связанные Devlogs",
    relatedTitle: "Заметки о направлении системы.",
    relatedCopy:
      "Devlog Erire нужен для отслеживания направления языка, решений по runtime, рабочего потока IDE, гибкости backend и UI-first архитектуры, а не для превращения в шумную публичную панель.",
    emptyRelated: "Связанные с проектом devlog-записи появятся здесь после добавления новых материалов.",
    stateEyebrow: "Состояние проекта",
    stateCopy:
      "Проект всё ещё находится в разработке. Текущая работа сосредоточена на производительности runtime, стабильности выполнения, пользовательском опыте в IDE, гибкости backend и постоянном добавлении новых возможностей в единую систему."
  },
  ja: {
    summaryEyebrow: "中核の要約",
    summaryTitle: "Erire は言語・runtime・IDE をひとつのシステムにまとめます。",
    visualEyebrow: "ビジュアル / システム",
    visualTitle: "インターフェース、ロジック、実行、ビルドをひとつの流れに収めることが前提です。",
    visualCopy:
      "複数のライブラリ、長い環境設定、frontend と backend の強い分離に頼る代わりに、Erire はアプリケーション構造と UI 開発を言語そのものの中に保ち、専用環境から直接扱います。",
    factsEyebrow: "主要情報",
    factsTitle: "現在のシステム形状。",
    relatedEyebrow: "関連 Devlogs",
    relatedTitle: "このシステムに結びついた方向メモ。",
    relatedCopy:
      "Erire の devlog は、言語の方向性、runtime の判断、IDE のワークフロー、backend の柔軟性、UI-first アーキテクチャを記録するためのものであり、騒がしい公開ダッシュボードになるためのものではありません。",
    emptyRelated: "新しい記事が追加されると、プロジェクト関連の Devlog がここに表示されます。",
    stateEyebrow: "プロジェクト状況",
    stateCopy:
      "プロジェクトは現在も開発中です。runtime の性能、実行安定性、IDE 内のユーザー体験、backend の柔軟性、そして統一システム全体での継続的な機能追加に重点が置かれています。"
  }
} as const;

export function getErirePageCopy(locale: SupportedLocale) {
  return erirePageCopy[locale] ?? erirePageCopy[defaultLocale];
}
