/* Date: 4/20/2026 | Developer: Yahia Saad | License: First Stand Studio. All rights reserved. */
import type { CollectionEntry } from "astro:content";
import { defaultLocale, type SupportedLocale } from "./config";

export type DevlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "highlight"; text: string };

interface LocalizedDevlogEntry {
  title: Record<SupportedLocale, string>;
  description: Record<SupportedLocale, string>;
  tags: Record<SupportedLocale, string[]>;
  body: Record<SupportedLocale, DevlogBlock[]>;
}

const devlogTranslations: Record<string, LocalizedDevlogEntry> = {
  "first-stand-studio-site": {
    title: {
      en: "First Stand Studio Goes Live",
      ar: "إطلاق الموقع الرسمي لـ First Stand Studio",
      fr: "First Stand Studio passe en ligne",
      ru: "First Stand Studio выходит в публичный режим",
      ja: "First Stand Studio が公開へ"
    },
    description: {
      en: "Establishing the official studio surface with a calmer voice, stronger hierarchy, and room for work to accumulate over time.",
      ar: "تثبيت الواجهة الرسمية للاستوديو بصوت أكثر هدوءًا، وهرمية أوضح، ومساحة تسمح للعمل بأن يتراكم مع الوقت.",
      fr: "Mise en place de la surface officielle du studio avec une voix plus calme, une hiérarchie plus forte et de l’espace pour que le travail s’accumule dans le temps.",
      ru: "Формирование официальной поверхности студии с более спокойным тоном, более сильной иерархией и пространством для накопления работы со временем.",
      ja: "より静かな声、より強い階層、そして時間とともに仕事が積み上がる余白を持つ、公式スタジオ面の立ち上げ。"
    },
    tags: {
      en: ["studio", "website", "foundation"],
      ar: ["الاستوديو", "الموقع", "الأساس"],
      fr: ["studio", "site", "fondation"],
      ru: ["студия", "сайт", "основание"],
      ja: ["スタジオ", "サイト", "基盤"]
    },
    body: {
      en: [
        { type: "paragraph", text: "The first requirement for the studio site was restraint." },
        {
          type: "paragraph",
          text: "It needed to feel official without slipping into startup noise, and cinematic without becoming decorative. The result is a structure built around clarity: a visible project surface, a readable devlog, and a studio identity that can hold future work without changing temperament every few months."
        },
        { type: "paragraph", text: "This is not meant to be a loud launch page. It is a durable one." },
        {
          type: "paragraph",
          text: "The studio exists to make original projects worth continuing. The website should reflect that by presenting only what is real, what is active, and what has enough weight to stand on its own."
        }
      ],
      ar: [
        { type: "paragraph", text: "كان الشرط الأول لموقع الاستوديو هو الانضباط." },
        {
          type: "paragraph",
          text: "كان عليه أن يبدو رسميًا من دون أن ينزلق إلى ضجيج الشركات الناشئة، وسينمائيًا من دون أن يتحول إلى زخرفة. والنتيجة هي بنية مبنية حول الوضوح: واجهة مشروع ظاهرة، وديفلوغ قابل للقراءة، وهوية استوديو تستطيع حمل الأعمال القادمة من دون أن تغيّر نبرتها كل بضعة أشهر."
        },
        { type: "paragraph", text: "هذه ليست صفحة إطلاق صاخبة. إنها صفحة قابلة للاستمرار." },
        {
          type: "paragraph",
          text: "الاستوديو موجود لصنع مشاريع أصلية تستحق أن تُستكمل. ويجب أن يعكس الموقع ذلك عبر عرض ما هو حقيقي فقط، وما هو نشط، وما يملك وزنًا كافيًا ليقف وحده."
        }
      ],
      fr: [
        { type: "paragraph", text: "La première exigence du site du studio était la retenue." },
        {
          type: "paragraph",
          text: "Il devait paraître officiel sans glisser vers le bruit startup, et cinématographique sans devenir décoratif. Le résultat est une structure construite autour de la clarté : une surface projet visible, un devlog lisible et une identité de studio capable de porter les travaux futurs sans changer de tempérament tous les quelques mois."
        },
        { type: "paragraph", text: "Ce n’est pas une page de lancement bruyante. C’est une page faite pour durer." },
        {
          type: "paragraph",
          text: "Le studio existe pour produire des projets originaux qui valent la peine d’être poursuivis. Le site doit refléter cela en ne montrant que ce qui est réel, actif et assez solide pour tenir par lui-même."
        }
      ],
      ru: [
        { type: "paragraph", text: "Первым требованием к сайту студии была сдержанность." },
        {
          type: "paragraph",
          text: "Он должен был ощущаться официальным, не скатываясь в шум стартапов, и кинематографичным, не становясь декоративным. В результате получилась структура, основанная на ясности: видимая поверхность проекта, читаемый devlog и идентичность студии, способная держать будущую работу, не меняя характер каждые несколько месяцев."
        },
        { type: "paragraph", text: "Это не шумная страница запуска. Это долговечная страница." },
        {
          type: "paragraph",
          text: "Студия существует ради оригинальных проектов, которые стоит продолжать. Сайт должен отражать это, показывая только то, что реально, активно и обладает достаточным весом, чтобы стоять самостоятельно."
        }
      ],
      ja: [
        { type: "paragraph", text: "このスタジオサイトに最初に求められたのは抑制でした。" },
        {
          type: "paragraph",
          text: "スタートアップ的な騒がしさに落ちずに公式らしく、装飾過剰にならずにシネマティックである必要がありました。その結果できたのは、明快さを中心に組まれた構造です。見えるプロジェクト面、読みやすい devlog、そして数か月ごとに気質を変えずに将来の仕事を受け止められるスタジオのアイデンティティです。"
        },
        { type: "paragraph", text: "これは騒がしいローンチページではありません。残り続けるためのページです。" },
        {
          type: "paragraph",
          text: "スタジオは、続ける価値のある独自のプロジェクトを作るために存在しています。だからサイトも、本当に存在し、今動いていて、単独で立てるだけの重さを持つものだけを見せるべきです。"
        }
      ]
    }
  },
  "erire-foundations": {
    title: {
      en: "Devlog 0: Foundations",
      ar: "التدوينة 0: البدايات",
      fr: "Devlog 0 : Fondations",
      ru: "Devlog 0: Основы",
      ja: "Devlog 0: Foundations"
    },
    description: {
      en: "Why Erire began and what it is trying to simplify.",
      ar: "لماذا بدأت Erire وما الذي تحاول تبسيطه.",
      fr: "Pourquoi Erire a commencé et ce qu'il cherche à simplifier.",
      ru: "Почему появился Erire и что именно он пытается упростить.",
      ja: "Erire が始まった理由と、何を簡潔にしようとしているのか。"
    },
    tags: {
      en: ["erire", "foundations", "ui-first"],
      ar: ["erire", "البدايات", "واجهة-أولاً"],
      fr: ["erire", "fondations", "ui-first"],
      ru: ["erire", "основы", "ui-first"],
      ja: ["erire", "foundations", "ui-first"]
    },
    body: {
      en: [
        {
          type: "paragraph",
          text: "Erire started from a simple frustration: building applications should feel more direct."
        },
        {
          type: "paragraph",
          text: "Too much time disappears into setup, scattered tooling, and UI work that feels heavier than it should."
        },
        {
          type: "paragraph",
          text: "The early direction is simple: keep the language, runtime, and interface flow close to each other so building software feels faster and clearer."
        },
        {
          type: "highlight",
          text: "The goal is less friction between the idea and the working application."
        }
      ],
      ar: [
        {
          type: "paragraph",
          text: "بدأت Erire من انزعاج بسيط: بناء التطبيقات يجب أن يكون أكثر مباشرة."
        },
        {
          type: "paragraph",
          text: "يُهدر وقت كثير في الإعداد، وتشتت الأدوات، والعمل على الواجهة بشكل أثقل مما ينبغي."
        },
        {
          type: "paragraph",
          text: "الاتجاه المبكر واضح: إبقاء اللغة و runtime وتدفق الواجهة قريبين من بعضهم حتى يصبح بناء البرمجيات أسرع وأوضح."
        },
        {
          type: "highlight",
          text: "الهدف هو تقليل الاحتكاك بين الفكرة والتطبيق الذي يعمل."
        }
      ],
      fr: [
        {
          type: "paragraph",
          text: "Erire est né d'une frustration simple : créer des applications devrait être plus direct."
        },
        {
          type: "paragraph",
          text: "Trop de temps disparaît dans la configuration, les outils dispersés et un travail UI plus lourd qu'il ne devrait l'être."
        },
        {
          type: "paragraph",
          text: "La direction initiale est simple : garder le langage, le runtime et le flux d'interface proches afin que la création logicielle soit plus rapide et plus claire."
        },
        {
          type: "highlight",
          text: "Le but est de réduire la friction entre l'idée et l'application fonctionnelle."
        }
      ],
      ru: [
        {
          type: "paragraph",
          text: "Erire появился из простой проблемы: создание приложений должно быть более прямым."
        },
        {
          type: "paragraph",
          text: "Слишком много времени уходит на настройку, разрозненные инструменты и UI-работу, которая ощущается тяжелее, чем должна."
        },
        {
          type: "paragraph",
          text: "Начальное направление простое: держать язык, runtime и интерфейсный поток ближе друг к другу, чтобы создание софта было быстрее и яснее."
        },
        {
          type: "highlight",
          text: "Цель — уменьшить трение между идеей и работающим приложением."
        }
      ],
      ja: [
        {
          type: "paragraph",
          text: "Erire はひとつの素朴な不満から始まりました。アプリ開発はもっと直接的であるべきだということです。"
        },
        {
          type: "paragraph",
          text: "セットアップ、散らばったツール、そして必要以上に重い UI 作業に、多くの時間が消えています。"
        },
        {
          type: "paragraph",
          text: "初期の方向性は単純です。言語、runtime、UI の流れを近くに保ち、ソフトウェア作成をより速く、より明快にすることです。"
        },
        {
          type: "highlight",
          text: "目標は、アイデアと動くアプリケーションの間の摩擦を減らすことです。"
        }
      ]
    }
  },
  "erire-ide": {
    title: {
      en: "Devlog 1: Erire IDE",
      ar: "التدوينة 1: بيئة Erire",
      fr: "Devlog 1 : Erire IDE",
      ru: "Devlog 1: Erire IDE",
      ja: "Devlog 1: Erire IDE"
    },
    description: {
      en: "Building an IDE around speed, clarity, and real application flow.",
      ar: "بناء IDE حول السرعة والوضوح وتدفق التطبيق الحقيقي.",
      fr: "Construire un IDE autour de la vitesse, de la clarté et d'un vrai flux d'application.",
      ru: "Разработка IDE вокруг скорости, ясности и реального рабочего потока приложения.",
      ja: "速度、明快さ、実際のアプリ開発フローを中心に IDE を構築しています。"
    },
    tags: {
      en: ["erire", "ide", "workflow"],
      ar: ["erire", "ide", "سير-العمل"],
      fr: ["erire", "ide", "workflow"],
      ru: ["erire", "ide", "workflow"],
      ja: ["erire", "ide", "workflow"]
    },
    body: {
      en: [
        {
          type: "paragraph",
          text: "The Erire IDE is being shaped around one principle: development should stay direct."
        },
        {
          type: "paragraph",
          text: "Writing code, organizing files, running projects, and building applications should happen inside one clear workflow instead of being scattered across too many tools."
        },
        {
          type: "paragraph",
          text: "The goal is not only to edit code, but to make the whole environment feel focused and usable from the start."
        },
        {
          type: "highlight",
          text: "Current work is centered on responsiveness, project handling, and a smoother path from syntax to a working application."
        }
      ],
      ar: [
        {
          type: "paragraph",
          text: "يتم تشكيل IDE الخاص بـ Erire حول مبدأ واحد: يجب أن تبقى عملية التطوير مباشرة."
        },
        {
          type: "paragraph",
          text: "كتابة الكود، وتنظيم الملفات، وتشغيل المشاريع، وبناء التطبيقات يجب أن يحدث داخل تدفق واضح واحد بدل التشتت بين أدوات كثيرة."
        },
        {
          type: "paragraph",
          text: "الهدف ليس فقط مكانًا لكتابة الكود، بل بيئة تبدو مركزة وقابلة للاستخدام منذ البداية."
        },
        {
          type: "highlight",
          text: "العمل الحالي يركز على الاستجابة، وإدارة المشاريع، ومسار أنعم من الصياغة إلى تطبيق يعمل."
        }
      ],
      fr: [
        {
          type: "paragraph",
          text: "L'IDE d'Erire est façonné autour d'un principe : le développement doit rester direct."
        },
        {
          type: "paragraph",
          text: "Écrire du code, organiser les fichiers, lancer les projets et construire des applications doit se faire dans un seul flux clair au lieu d'être dispersé entre trop d'outils."
        },
        {
          type: "paragraph",
          text: "Le but n'est pas seulement d'éditer du code, mais de faire en sorte que tout l'environnement paraisse concentré et utilisable dès le début."
        },
        {
          type: "highlight",
          text: "Le travail actuel se concentre sur la réactivité, la gestion des projets et un passage plus fluide de la syntaxe à une application fonctionnelle."
        }
      ],
      ru: [
        {
          type: "paragraph",
          text: "IDE для Erire строится вокруг одного принципа: разработка должна оставаться прямой и ясной."
        },
        {
          type: "paragraph",
          text: "Написание кода, организация файлов, запуск проектов и сборка приложений должны происходить в одном понятном потоке, а не быть разбросанными по множеству инструментов."
        },
        {
          type: "paragraph",
          text: "Цель не только в том, чтобы дать место для набора кода, но и в том, чтобы вся среда ощущалась собранной и пригодной к использованию с самого начала."
        },
        {
          type: "highlight",
          text: "Текущая работа сосредоточена на отзывчивости, управлении проектами и более плавном пути от синтаксиса к работающему приложению."
        }
      ],
      ja: [
        {
          type: "paragraph",
          text: "Erire IDE はひとつの原則を中心に形作られています。開発は直接的であるべきだということです。"
        },
        {
          type: "paragraph",
          text: "コードを書くこと、ファイルを整理すること、プロジェクトを実行すること、アプリをビルドすることは、多数のツールに散らばるのではなく、ひとつの明快な流れの中で行われるべきです。"
        },
        {
          type: "paragraph",
          text: "目標は単にコードを書く場所を作ることではなく、最初から環境全体が集中していて使いやすいと感じられることです。"
        },
        {
          type: "highlight",
          text: "現在は、応答性、プロジェクト管理、そして構文から動くアプリまでの流れをより滑らかにすることに注力しています。"
        }
      ]
    }
  },
  "proof-of-existence": {
    title: {
      en: "Every Project Is a Proof of Existence",
      ar: "كل مشروع هو دليل على الوجود",
      fr: "Chaque projet est une preuve d’existence",
      ru: "Каждый проект — доказательство существования",
      ja: "すべてのプロジェクトは存在の証明"
    },
    description: {
      en: "A short note on why the studio keeps its scope tight and why each release should justify its own presence.",
      ar: "ملاحظة قصيرة حول سبب إبقاء الاستوديو نطاقه ضيقًا، ولماذا يجب على كل إصدار أن يبرر حضوره بنفسه.",
      fr: "Une courte note sur les raisons pour lesquelles le studio garde son périmètre serré et pourquoi chaque sortie doit justifier sa propre présence.",
      ru: "Короткая заметка о том, почему студия удерживает масштаб узким и почему каждый релиз должен оправдывать собственное присутствие.",
      ja: "なぜスタジオがスコープを絞り続けるのか、そしてなぜ各リリースが自らの存在を正当化すべきなのかについての短い記録。"
    },
    tags: {
      en: ["studio", "identity", "philosophy"],
      ar: ["الاستوديو", "الهوية", "الفلسفة"],
      fr: ["studio", "identité", "philosophie"],
      ru: ["студия", "идентичность", "философия"],
      ja: ["スタジオ", "アイデンティティ", "思想"]
    },
    body: {
      en: [
        { type: "paragraph", text: "There is no interest in building noise for its own sake." },
        {
          type: "paragraph",
          text: "First Stand Studio is small on purpose. A smaller scope makes it easier to preserve identity, easier to reject unnecessary motion, and easier to let the work speak without a layer of explanation wrapped around it."
        },
        {
          type: "paragraph",
          text: "Every project should earn its place by existing clearly and by refusing to disappear the moment attention moves elsewhere."
        },
        { type: "highlight", text: "Every project is a proof of existence." }
      ],
      ar: [
        { type: "paragraph", text: "لا يوجد اهتمام بصناعة الضجيج لمجرد الضجيج." },
        {
          type: "paragraph",
          text: "First Stand Studio صغير عن قصد. النطاق الأصغر يجعل الحفاظ على الهوية أسهل، ورفض الحركة غير الضرورية أسهل، وترك العمل يتكلم من دون طبقة تفسير ملفوفة حوله أسهل."
        },
        {
          type: "paragraph",
          text: "يجب أن يكسب كل مشروع مكانه عبر وجوده بوضوح، وعبر رفضه أن يختفي في اللحظة التي تنتقل فيها الأنظار إلى مكان آخر."
        },
        { type: "highlight", text: "كل مشروع هو دليل على الوجود." }
      ],
      fr: [
        { type: "paragraph", text: "Il n’y a aucun intérêt à produire du bruit pour le bruit." },
        {
          type: "paragraph",
          text: "First Stand Studio reste petit volontairement. Un périmètre plus réduit facilite la préservation de l’identité, le rejet des mouvements inutiles et le fait de laisser le travail parler sans l’envelopper d’une couche d’explication."
        },
        {
          type: "paragraph",
          text: "Chaque projet doit mériter sa place en existant clairement et en refusant de disparaître au moment où l’attention se déplace ailleurs."
        },
        { type: "highlight", text: "Chaque projet est une preuve d’existence." }
      ],
      ru: [
        { type: "paragraph", text: "Нет интереса производить шум ради самого шума." },
        {
          type: "paragraph",
          text: "First Stand Studio намеренно остаётся маленькой. Более узкий масштаб облегчает сохранение идентичности, отказ от лишнего движения и позволяет работе говорить самой за себя без слоя объяснений вокруг неё."
        },
        {
          type: "paragraph",
          text: "Каждый проект должен заслужить своё место тем, что существует ясно и отказывается исчезнуть в тот момент, когда внимание уходит в другую сторону."
        },
        { type: "highlight", text: "Каждый проект — доказательство существования." }
      ],
      ja: [
        { type: "paragraph", text: "雑音のための雑音を作ることに関心はありません。" },
        {
          type: "paragraph",
          text: "First Stand Studio が小さいのは意図的です。スコープが小さいほど、アイデンティティを守りやすくなり、不必要な動きを拒みやすくなり、説明の層で包まずに仕事そのものを語らせやすくなります。"
        },
        {
          type: "paragraph",
          text: "すべてのプロジェクトは、明確に存在し、注意が別の場所へ移った瞬間にも消えないことで、自分の居場所を獲得すべきです。"
        },
        { type: "highlight", text: "すべてのプロジェクトは存在の証明です。" }
      ]
    }
  }
};

export function getLocalizedDevlog(slug: string, locale: SupportedLocale) {
  const entry = devlogTranslations[slug];

  if (!entry) {
    throw new Error(`Missing localized devlog content for slug: ${slug}`);
  }

  return {
    title: entry.title[locale] ?? entry.title[defaultLocale],
    description: entry.description[locale] ?? entry.description[defaultLocale],
    tags: entry.tags[locale] ?? entry.tags[defaultLocale],
    body: entry.body[locale] ?? entry.body[defaultLocale]
  };
}

export function getLocalizedDevlogFromEntry(entry: CollectionEntry<"devlogs">, locale: SupportedLocale) {
  return getLocalizedDevlog(entry.id, locale);
}
