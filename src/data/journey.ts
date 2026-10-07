import type { Language } from "@/data/translations";

type JourneyCopy = {
  body: string[];
  caption: string;
  heading: string;
  location: string;
  period?: string;
};

export type JourneyChapter = {
  backgroundColor: string;
  id: string;
  image: string;
  imageScale: "contained" | "wide";
  translations: Record<Language, JourneyCopy>;
};

export const journeyPageIntro: Record<
  Language,
  {
    body: string;
    label: string;
    title: string;
    statement: string;
  }
> = {
  ar: {
    body: "صفحات مختصرة من رحلة أزاد طارق بين الإنتاج، السينما، الذاكرة، والمكان؛ محطات تكوّن لغة بصرية واحدة.",
    label: "01 / المسيرة",
    title: "المسيرة",
    statement: "محطات صنعت الصورة، المكان، والتجربة.",
  },
  en: {
    body: "A concise archive of Azad Tariq's movement through production, cinema, memory and place; chapters that formed one visual language.",
    label: "01 / THE JOURNEY",
    title: "THE JOURNEY",
    statement: "Chapters that shaped the image, the place and the experience.",
  },
  ku: {
    body: "ئەرشیفێکی کورت لە گەشتی ئازاد تارق لە نێوان بەرهەمهێنان، سینەما، یاد و شوێن؛ وێستگەکانێک کە زمانێکی بینراوی هاوبەشیان دروست کرد.",
    label: "01 / گەشت",
    title: "گەشت",
    statement: "وێستگەکانێک کە وێنە، شوێن و ئەزموونیان شێوە پێدا.",
  },
};

export const journeyDetailHero = {
  image: "/images/journey-page/journey-hero.jpg",
  imagePosition: "center 38%",
};

export const journeyFeaturedChapters: JourneyChapter[] = [
  {
    backgroundColor: "#F3EFE7",
    id: "image-and-cinema",
    image: "/images/journey-page/image-and-cinema.jpg",
    imageScale: "wide",
    translations: {
      ar: {
        body: [
          "شكّلت الولايات المتحدة إحدى المحطات المبكرة في تجربة أزاد طارق، حيث عمل ضمن بيئة إنتاجية وواصل اهتمامه بالصورة وبناء المشهد.",
          "وفي مصر، اتسعت تجربته في السينما والإنتاج البصري والإدارة الفنية، من خلال العمل خلف الكاميرا في أعمال من بينها «122» و«الجوزاء» وأعمال أخرى.",
        ],
        caption: "الولايات المتحدة · مصر",
        heading: "من الصورة إلى المشهد.",
        location: "الولايات المتحدة · مصر",
      },
      en: {
        body: [
          "The United States formed one of the early chapters in Azad Tariq's experience, where he worked within a production environment and continued his interest in image-making and scene construction.",
          "In Egypt, his experience expanded across cinema, visual production and art direction through work behind the camera on productions including 122, Al-Jawzaa and other works.",
        ],
        caption: "United States · Egypt",
        heading: "From image to scene.",
        location: "United States · Egypt",
      },
      ku: {
        body: [
          "ویلایەتە یەکگرتووەکان یەکێک بوو لە وێستگە سەرەتاییەکانی ئەزموونی ئازاد تارق، لەوێدا لە ژینگەیەکی بەرهەمهێناندا کاری کرد و گرنگیدانی بە وێنە و دروستکردنی دیمەن بەردەوام بوو.",
          "لە میسر، ئەزموونی لە سینەما، بەرهەمهێنانی بینراو و ئاراستەی هونەری فراوان بوو؛ لە ڕێگەی کارکردن لە پشت کامێرا لە کارەکانی وەک «122» و «الجوزاء» و کارەکانی تر.",
        ],
        caption: "ویلایەتە یەکگرتووەکان · میسر",
        heading: "لە وێنەوە بۆ دیمەن.",
        location: "ویلایەتە یەکگرتووەکان · میسر",
      },
    },
  },
  {
    backgroundColor: "#EEE6D7",
    id: "baghdad-house-of-antiques",
    image: "/images/journey-page/house-of-antiques.jpg",
    imageScale: "wide",
    translations: {
      ar: {
        body: [
          "في العراق، اتصلت تجربة أزاد بالهوية والذاكرة والمكان. ويجسّد بيت التحفيات هذا الامتداد العائلي في الفن والأنتيك والذاكرة البغدادية، بوصفه الجيل الثالث المرتبط بالبيت.",
          "اليوم يدير مساحاته الثقافية والفنية، ويشرف على الإدارة الفنية للمعارض والفعاليات والتصوير والأعمال التي تقام داخله.",
        ],
        caption: "العراق · الذاكرة والمكان",
        heading: "المكان امتدادًا للصورة.",
        location: "العراق · الذاكرة والمكان",
      },
      en: {
        body: [
          "In Iraq, Azad's experience became connected to identity, memory and place. House of Antiques embodies this family extension in art, antiques and Baghdad's memory, as he is the third generation connected to the House.",
          "Today, he manages its cultural and artistic spaces, overseeing the art direction of exhibitions, events, shoots and works held within it.",
        ],
        caption: "Iraq · Memory and Place",
        heading: "Place as an extension of the image.",
        location: "Iraq · Memory and Place",
      },
      ku: {
        body: [
          "لە عێراق، ئەزموونی ئازاد پەیوەست بوو بە ناسنامە، یاد و شوێن. ماڵی کۆنەکارەکان ئەم درێژکراوەیەی خێزانی لە هونەر، کۆنەکارەکان و یادی بەغدا پیشان دەدات؛ وەک نەوەی سێیەمی پەیوەست بەو ماڵە.",
          "ئەمڕۆ شوێنە کلتووری و هونەرییەکانی بەڕێوە دەبات، و سەرپەرشتی ئاراستەی هونەری پێشانگا، بۆنە، وێنەگرتن و کارەکانی ناو ئەو شوێنە دەکات.",
        ],
        caption: "عێراق · یاد و شوێن",
        heading: "شوێن وەک درێژکراوەی وێنە.",
        location: "عێراق · یاد و شوێن",
      },
    },
  },
  {
    backgroundColor: "#F3EFE7",
    id: "abaad-al-iraq-featured",
    image: "/images/journey-page/abaad-al-iraq.jpg",
    imageScale: "wide",
    translations: {
      ar: {
        body: [
          "منذ عام 2019، بدأ أزاد العمل على الواقع الافتراضي والجولات الافتراضية، ليتطور هذا المسار لاحقًا إلى أبعاد العراق.",
          "وامتدت التجربة من توثيق الأماكن افتراضيًا إلى المواقع والحلول الرقمية، لتجمع بين الصورة والمكان والتقنية.",
        ],
        caption: "منذ 2019 · المكان والتقنية",
        heading: "من المكان إلى التجربة الرقمية.",
        location: "منذ 2019 · المكان والتقنية",
      },
      en: {
        body: [
          "Since 2019, Azad began working with virtual reality and virtual tours, a path that later developed into Abaad Al-Iraq.",
          "The experience expanded from virtual documentation of places into websites and digital solutions, bringing together image, place and technology.",
        ],
        caption: "Since 2019 · Place and Technology",
        heading: "From place to digital experience.",
        location: "Since 2019 · Place and Technology",
      },
      ku: {
        body: [
          "لە ساڵی 2019ەوە، ئازاد دەستی کرد بە کارکردن لەسەر واقعی مەجازی و گەشتی مەجازی؛ ئەم ڕێگایە دواتر بوو بە ئەبعادی عێراق.",
          "ئەزموونەکە لە تۆمارکردنی مەجازیی شوێنەکانەوە فراوان بوو بۆ ماڵپەڕ و چارەسەری دیجیتاڵی، بۆ ئەوەی وێنە، شوێن و تەکنەلۆژیا بەیەک بگەیەنێت.",
        ],
        caption: "لە 2019ەوە · شوێن و تەکنەلۆژیا",
        heading: "لە شوێنەوە بۆ ئەزموونی دیجیتاڵی.",
        location: "لە 2019ەوە · شوێن و تەکنەلۆژیا",
      },
    },
  },
];

export const journeyChapters: JourneyChapter[] = [
  {
    backgroundColor: "#62513C",
    id: "united-states",
    image: "/images/journey-page/usa.jpg",
    imageScale: "contained",
    translations: {
      ar: {
        body: [
          "شكّلت الولايات المتحدة إحدى المحطات المبكرة في تجربة أزاد طارق، حيث عمل ضمن بيئة إنتاجية وواصل اهتمامه بالصورة وبناء المشهد.",
          "كانت هذه المرحلة جزءاً من تكوين نظرته للعمل البصري، قبل انتقال التجربة إلى محطات أخرى أكثر ارتباطاً بالسينما والإنتاج.",
        ],
        caption: "UNITED STATES / Production Archive",
        heading: "البداية مع الصورة والإنتاج.",
        location: "الولايات المتحدة",
      },
      en: {
        body: [
          "The United States formed one of the early chapters in Azad Tariq's experience, where he worked within a production environment and continued developing his interest in image-making and scene construction.",
          "This period helped shape his view of visual work before the journey moved toward chapters more closely tied to cinema and production.",
        ],
        caption: "UNITED STATES / Production Archive",
        heading: "The beginning with image and production.",
        location: "United States",
      },
      ku: {
        body: [
          "ویلایەتە یەکگرتووەکان یەکێک بوو لە وێستگە سەرەتاییەکانی ئەزموونی ئازاد تارق، لەوێدا لە ژینگەیەکی بەرهەمهێناندا کاری کرد و گرنگیدانی بە وێنە و دروستکردنی دیمەن بەردەوام بوو.",
          "ئەم قۆناغە بەشێک بوو لە پێکهێنانی دیدی بۆ کاری بینراو، پێش ئەوەی ئەزموونەکە بەرەو وێستگەکانی پەیوەستتر بە سینەما و بەرهەمهێنان بڕوات.",
        ],
        caption: "ویلایەتە یەکگرتووەکان / ئەرشیفی بەرهەمهێنان",
        heading: "دەستپێک لەگەڵ وێنە و بەرهەمهێنان.",
        location: "ویلایەتە یەکگرتووەکان",
      },
    },
  },
  {
    backgroundColor: "#8A5526",
    id: "egypt",
    image: "/images/journey-page/egypt.jpg",
    imageScale: "wide",
    translations: {
      ar: {
        body: [
          "في مصر، اتسعت تجربة أزاد في السينما والإنتاج البصري، وعمل ضمن عدد من الأعمال السينمائية والتلفزيونية.",
          "هناك تطورت علاقته ببناء المشهد والإدارة الفنية والعمل خلف الكاميرا، ضمن تجارب من بينها «122» و«الجوزاء» وأعمال أخرى.",
        ],
        caption: "EGYPT / Film & Production Archive",
        heading: "السينما من خلف الكاميرا.",
        location: "مصر",
      },
      en: {
        body: [
          "In Egypt, Azad's experience in cinema and visual production expanded as he worked across a number of film and television projects.",
          "There, his relationship with scene building, art direction and work behind the camera developed through projects including 122, Al-Jawzaa and other productions.",
        ],
        caption: "EGYPT / Film & Production Archive",
        heading: "Cinema from behind the camera.",
        location: "Egypt",
      },
      ku: {
        body: [
          "لە میسر، ئەزموونی ئازاد لە سینەما و بەرهەمهێنانی بینراودا فراوان بوو، و لە چەند کارێکی سینەمایی و تەلەڤزیۆنیدا بەشداری کرد.",
          "لەوێ پەیوەندییەکەی بە دروستکردنی دیمەن، ئاراستەی هونەری و کارکردن لە پشت کامێرا گەشەی کرد؛ لەوانە «122» و «الجوزاء» و کارەکانی تر.",
        ],
        caption: "میسر / ئەرشیفی سینەما و بەرهەمهێنان",
        heading: "سینەما لە پشت کامێراوە.",
        location: "میسر",
      },
    },
  },
  {
    backgroundColor: "#542B27",
    id: "iraq",
    image: "/images/journey-page/iraq.jpg",
    imageScale: "contained",
    translations: {
      ar: {
        body: [
          "في العراق، استمرت التجربة البصرية عبر مشاريع وأعمال مختلفة، مع انتقال الاهتمام من المشهد السينمائي وحده إلى المكان والتجربة المحيطة به.",
          "أصبحت الصورة بالنسبة لأزاد مرتبطة أكثر بالهوية، الذاكرة، والبيئة التي تتحرك داخلها.",
        ],
        caption: "IRAQ / Place & Memory",
        heading: "العودة إلى المكان.",
        location: "العراق",
      },
      en: {
        body: [
          "In Iraq, the visual experience continued through different projects and works, as the focus moved from the cinematic scene alone toward place and the experience surrounding it.",
          "For Azad, the image became increasingly connected to identity, memory and the environment it moves within.",
        ],
        caption: "IRAQ / Place & Memory",
        heading: "The return to place.",
        location: "Iraq",
      },
      ku: {
        body: [
          "لە عێراق، ئەزموونی بینراو لە ڕێگەی پرۆژە و کارە جیاوازەکانەوە بەردەوام بوو، و گرنگیدانەکە لە دیمەنی سینەمایییەوە بەرەو شوێن و ئەزموونی دەوروبەری گواسترایەوە.",
          "بۆ ئازاد، وێنە زیاتر پەیوەست بوو بە ناسنامە، یاد و ئەو ژینگەیەی لەناویدا دەجوڵێت.",
        ],
        caption: "عێراق / شوێن و یاد",
        heading: "گەڕانەوە بۆ شوێن.",
        location: "عێراق",
      },
    },
  },
  {
    backgroundColor: "#3D3327",
    id: "house-of-antiques",
    image: "/images/journey-page/house.jpg",
    imageScale: "wide",
    translations: {
      ar: {
        body: [
          "يمثل بيت التحفيات امتداداً لعلاقة عائلية طويلة مع الأنتيك والفن والذاكرة البغدادية، ويواصل أزاد هذه الرحلة بوصفه الجيل الثالث المرتبط بالمكان.",
          "اليوم يدير البيت ومساحاته الثقافية والفنية، ويشرف على الإدارة الفنية للمعارض والفعاليات والتصوير والأعمال التي تقام داخله.",
        ],
        caption: "HOUSE OF ANTIQUES / Baghdad Archive",
        heading: "إرثٌ أصبح مساحة ثقافية.",
        location: "بيت التحفيات",
      },
      en: {
        body: [
          "House of Antiques extends a long family relationship with antiques, art and Baghdad's memory, a journey Azad continues as the third generation connected to the place.",
          "Today, he leads the House and its cultural and artistic spaces, overseeing the art direction of exhibitions, events, shoots and productions held within it.",
        ],
        caption: "HOUSE OF ANTIQUES / Baghdad Archive",
        heading: "A legacy that became a cultural space.",
        location: "House of Antiques",
      },
      ku: {
        body: [
          "ماڵی کۆنەکارەکان درێژکراوەی پەیوەندییەکی خێزانیی درێژە لەگەڵ کۆنەکارەکان، هونەر و یادی بەغدا؛ ئازاد ئەم گەشتە وەک نەوەی سێیەم بەردەوام دەکات.",
          "ئەمڕۆ ئەو ماڵەکە و شوێنە کلتووری و هونەرییەکانی بەڕێوە دەبات، و سەرپەرشتی ئاراستەی هونەری پێشانگا، بۆنە، وێنەگرتن و کارەکانی ناو ئەو شوێنە دەکات.",
        ],
        caption: "ماڵی کۆنەکارەکان / ئەرشیفی بەغدا",
        heading: "میراتێک کە بوو بە شوێنی کلتووری.",
        location: "ماڵی کۆنەکارەکان",
      },
    },
  },
  {
    backgroundColor: "#26342D",
    id: "abaad-al-iraq",
    image: "/images/journey-page/abaad.jpg",
    imageScale: "contained",
    translations: {
      ar: {
        body: [
          "منذ عام 2019، بدأ أزاد العمل على تقنيات الواقع الافتراضي والجولات الافتراضية، لتصبح لاحقاً أحد المسارات الأساسية في تجربته.",
          "ومن هذه التجربة تطورت أبعاد العراق، من الجولات الافتراضية إلى المواقع والحلول والتجارب الرقمية التي تجمع بين الصورة، المكان والتقنية.",
        ],
        caption: "ABAAD AL-IRAQ / Digital Spatial Work",
        heading: "من المكان الحقيقي إلى التجربة الرقمية.",
        location: "أبعاد العراق",
        period: "منذ 2019",
      },
      en: {
        body: [
          "Since 2019, Azad has worked with virtual reality and virtual-tour technologies, which later became one of the essential paths in his practice.",
          "From that experience, Abaad Al-Iraq developed from virtual tours into websites, solutions and digital experiences that connect image, space and technology.",
        ],
        caption: "ABAAD AL-IRAQ / Digital Spatial Work",
        heading: "From real place to digital experience.",
        location: "Abaad Al-Iraq",
        period: "Since 2019",
      },
      ku: {
        body: [
          "لە ساڵی 2019ەوە، ئازاد کاری لەسەر تەکنەلۆژیای واقعی مەجازی و گەشتی مەجازی دەست پێکرد؛ ئەمە دواتر بوو بە یەکێک لە ڕێگا سەرەکییەکانی ئەزموونەکەی.",
          "لەو ئەزموونەوە، ئەبعادی عێراق لە گەشتی مەجازییەوە گەشەی کرد بۆ ماڵپەڕ، چارەسەر و ئەزموونی دیجیتاڵی کە وێنە، شوێن و تەکنەلۆژیا بەیەک دەگەیەنێت.",
        ],
        caption: "ئەبعادی عێراق / کاری دیجیتاڵی و شوێنی",
        heading: "لە شوێنی ڕاستەقینەوە بۆ ئەزموونی دیجیتاڵی.",
        location: "ئەبعادی عێراق",
        period: "لە 2019ەوە",
      },
    },
  },
];
