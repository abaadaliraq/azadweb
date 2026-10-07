export const languages = ["ar", "en", "ku"] as const;

export type Language = (typeof languages)[number];
export type Direction = "rtl" | "ltr";

export type Translation = {
  meta: {
    label: string;
    dir: Direction;
  };
  nav: {
    home: string;
    journey: string;
    works: string;
    antiques: string;
    abaad: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    support: string;
    descriptor: string[];
    detailLabel: string;
    yearLabel: string;
  };
  journeyIntro: {
    index: string;
    label: string;
    title: string;
    body: string[];
    cta: string;
  };
  filmIntro: {
    index: string;
    label: string;
    meta: string;
    title: string;
    body: string[];
    cta: string;
  };
  houseIntro: {
    index: string;
    label: string;
    meta: string;
    title: string;
    body: string[];
    cta: string;
  };
  abaadIntro: {
    index: string;
    label: string;
    title: string;
    body: string[];
    cta: string;
    detail: string;
  };
  contact: {
    index: string;
    label: string;
    intro: string;
    methods: {
      email: {
        label: string;
        descriptor: string;
      };
      whatsapp: {
        label: string;
        descriptor: string;
      };
      instagram: {
        label: string;
        descriptor: string;
      };
    };
  };
  cinemaPage: {
    title: string;
    chapters: {
      index: string;
      title: string;
      body: string[];
    }[];
    linksLabel: string;
    links: {
      alJawzaa: string;
      film122: string;
    };
  };
  footer: {
    brand: string;
    location: string;
    legal: {
      terms: string;
      privacy: string;
    };
    developedPrefix: string;
    developedLink: string;
  };
};

export const defaultLanguage: Language = "ar";

export const translations: Record<Language, Translation> = {
  ar: {
    meta: {
      label: "AR",
      dir: "rtl",
    },
    nav: {
      home: "الرئيسية",
      journey: "المسيرة",
      works: "الأعمال",
      antiques: "بيت التحفيات",
      abaad: "أبعاد العراق",
    },
    hero: {
      eyebrow: "مخرج فني • رائد أعمال • صانع تجارب بصرية",
      title: "أزاد طارق",
      support: "بين السينما، الذاكرة، والتقنية.",
      descriptor: ["إنتاج بصري", "إدارة فنية", "تراث", "واقع افتراضي"],
      detailLabel: "مجالات",
      yearLabel: "2026",
    },
    journeyIntro: {
      index: "01",
      label: "المسيرة",
      title: "بين الصورة، المكان، والتقنية.",
      body: [
        "امتدت رحلة أزاد طارق بين الولايات المتحدة ومصر والعراق، من الإنتاج البصري إلى تجارب ترتبط بالمكان والذاكرة والتقنية.",
        "مسارات مختلفة تجمعها رؤية واحدة للصورة والتجربة.",
      ],
      cta: "اكتشف المسيرة",
    },
    filmIntro: {
      index: "02",
      label: "السينما والإنتاج",
      meta: "القاهرة / بغداد",
      title: "من خلف الكواليس، تُبنى الصورة.",
      body: [
        "شكّلت السينما والإنتاج البصري مرحلة أساسية في تجربة أزاد، خصوصاً خلال سنوات عمله في مصر.",
        "امتدت خبرته بين بناء المشهد، الإدارة الفنية والعمل خلف الكاميرا ضمن أعمال من بينها «122» و«الجوزاء».",
      ],
      cta: "استكشف الأعمال",
    },
    houseIntro: {
      index: "03",
      label: "بيت التحفيات",
      meta: "بغداد / أرشيف البيت",
      title: "إرثٌ مستمر عبر ثلاثة أجيال.",
      body: [
        "يمثل بيت التحفيات امتداداً لعلاقة عائلية طويلة مع الفن، الأنتيك والذاكرة البغدادية.",
        "يواصل أزاد هذه الرحلة كجيل ثالث، في مساحة ثقافية وتراثية تستضيف المعارض والفعاليات والتجارب الفنية.",
      ],
      cta: "اكتشف بيت التحفيات",
    },
    abaadIntro: {
      index: "04",
      label: "أبعاد العراق",
      title: "حين أصبحت المساحة تجربة.",
      body: [
        "منذ عام 2019، بدأ أزاد توظيف الواقع الافتراضي والجولات الافتراضية لبناء تجارب رقمية للمكان.",
        "ومن هذا المسار توسعت أبعاد العراق نحو مواقع وحلول وتجارب تجمع الصورة بالمكان والتقنية.",
      ],
      cta: "اكتشف أبعاد العراق",
      detail: "رقمي / مكاني",
    },
    contact: {
      index: "05",
      label: "تواصل",
      intro: "للتعاون والمشاريع والأفكار الجديدة.",
      methods: {
        email: {
          label: "البريد الإلكتروني",
          descriptor: "ابدأ حديثاً",
        },
        whatsapp: {
          label: "واتساب",
          descriptor: "تواصل مباشر",
        },
        instagram: {
          label: "إنستغرام",
          descriptor: "تابع الأعمال",
        },
      },
    },
    cinemaPage: {
      title: "السينما والإنتاج",
      chapters: [
        {
          index: "01",
          title: "الصورة من خلف الكاميرا.",
          body: [
            "اتسعت تجربة أزاد طارق في السينما والإنتاج البصري خلال عمله في مصر، حيث شارك في أعمال سينمائية وتلفزيونية، وتطورت علاقته ببناء المشهد والإدارة الفنية.",
            "شكّلت هذه المرحلة مساحة لتطوير نظرته إلى الصورة، والعمل ضمن فرق الإنتاج لتحويل الأفكار إلى مشاهد.",
          ],
        },
        {
          index: "02",
          title: "تجارب على الشاشة.",
          body: [
            "من بين الأعمال التي شارك فيها أزاد طارق «الجوزاء» و«122»، إلى جانب أعمال أخرى أسهمت في تشكيل تجربته خلف الكاميرا.",
            "تمثل هذه المشاركات جانبًا من مسيرته في السينما والإنتاج البصري، وارتباطه بالصورة وبناء المشهد.",
          ],
        },
      ],
      linksLabel: "روابط مشاهدة",
      links: {
        alJawzaa: "الجوزاء",
        film122: "122",
      },
    },
    footer: {
      brand: "AZAD TARIQ",
      location: "بغداد، العراق",
      legal: {
        terms: "سياسة الاستخدام",
        privacy: "سياسة الخصوصية",
      },
      developedPrefix: "تطوير",
      developedLink: "أبعاد العراق",
    },
  },
  en: {
    meta: {
      label: "EN",
      dir: "ltr",
    },
    nav: {
      home: "Home",
      journey: "Journey",
      works: "Works",
      antiques: "House of Antiques",
      abaad: "Abaad Al-Iraq",
    },
    hero: {
      eyebrow: "ART DIRECTOR • ENTREPRENEUR • VISUAL STORYTELLER",
      title: "Azad Tariq",
      support: "Cinema, memory and technology.",
      descriptor: [
        "FILM PRODUCTION",
        "ART DIRECTION",
        "HERITAGE",
        "VIRTUAL REALITY",
      ],
      detailLabel: "FIELDS",
      yearLabel: "2026",
    },
    journeyIntro: {
      index: "01",
      label: "THE JOURNEY",
      title: "Between image, place and technology.",
      body: [
        "Azad Tariq’s journey developed across the United States, Egypt and Iraq, from visual production to experiences shaped by place, memory and technology.",
        "Different paths, held together by one visual approach.",
      ],
      cta: "Explore the Journey",
    },
    filmIntro: {
      index: "02",
      label: "FILM & PRODUCTION",
      meta: "CAIRO / BAGHDAD",
      title: "The image begins behind the scenes.",
      body: [
        "Film and visual production became a defining part of Azad’s journey, especially during his years working in Egypt.",
        "His experience developed through art direction, scene building and work behind the camera, including 122 and Al-Jawzaa.",
      ],
      cta: "Explore the Works",
    },
    houseIntro: {
      index: "03",
      label: "HOUSE OF ANTIQUES",
      meta: "BAGHDAD / HOUSE ARCHIVE",
      title: "A legacy carried through three generations.",
      body: [
        "House of Antiques carries a long family connection with art, antiques and Baghdad’s cultural memory.",
        "Azad continues that path as a third generation, shaping the House as a cultural and heritage space for exhibitions, events and artistic experiences.",
      ],
      cta: "Discover House of Antiques",
    },
    abaadIntro: {
      index: "04",
      label: "ABAAD AL-IRAQ",
      title: "When space became an experience.",
      body: [
        "In 2019, Azad began using virtual reality and virtual-tour technology to build digital experiences for physical spaces.",
        "That work grew into Abaad Al-Iraq, connecting image, space and technology through websites, solutions and digital experiences.",
      ],
      cta: "Explore Abaad Al-Iraq",
      detail: "DIGITAL / SPATIAL",
    },
    contact: {
      index: "05",
      label: "CONTACT",
      intro: "For collaborations, projects and new ideas.",
      methods: {
        email: {
          label: "EMAIL",
          descriptor: "Start a conversation",
        },
        whatsapp: {
          label: "WHATSAPP",
          descriptor: "Direct contact",
        },
        instagram: {
          label: "INSTAGRAM",
          descriptor: "Follow the work",
        },
      },
    },
    cinemaPage: {
      title: "Film & Production",
      chapters: [
        {
          index: "01",
          title: "The image from behind the camera.",
          body: [
            "Azad Tariq's experience in cinema and visual production expanded during his work in Egypt, where he took part in cinematic and television works, and his relationship with scene building and art direction developed.",
            "This stage became a space for developing his view of the image, and for working within production teams to turn ideas into scenes.",
          ],
        },
        {
          index: "02",
          title: "Experiences on screen.",
          body: [
            "Among the works Azad Tariq participated in are Al-Jawzaa and 122, alongside other works that helped shape his experience behind the camera.",
            "These participations represent part of his journey in cinema and visual production, and his connection to image-making and scene construction.",
          ],
        },
      ],
      linksLabel: "Viewing links",
      links: {
        alJawzaa: "Al-Jawzaa",
        film122: "122",
      },
    },
    footer: {
      brand: "AZAD TARIQ",
      location: "Baghdad, Iraq",
      legal: {
        terms: "Terms of Use",
        privacy: "Privacy Policy",
      },
      developedPrefix: "Developed by",
      developedLink: "Abaad Al-Iraq",
    },
  },
  ku: {
    meta: {
      label: "KU",
      dir: "rtl",
    },
    nav: {
      home: "سەرەکی",
      journey: "گەشت",
      works: "کارەکان",
      antiques: "ماڵی کۆنەکارەکان",
      abaad: "ئەبعادی عێراق",
    },
    hero: {
      eyebrow: "دەرهێنەری هونەری • کارئافرین • چیرۆکگێڕی بینراو",
      title: "ئازاد تارق",
      support: "لە نێوان سینەما، یاد، و تەکنەلۆژیا.",
      descriptor: [
        "بەرهەمهێنانی بینراو",
        "ئاراستەی هونەری",
        "میرات",
        "واقعی مەجازی",
      ],
      detailLabel: "بوارەکان",
      yearLabel: "2026",
    },
    journeyIntro: {
      index: "01",
      label: "گەشتی ژیان",
      title: "لە نێوان وێنە، شوێن، و تەکنەلۆژیا.",
      body: [
        "گەشتی ئازاد تارق لە نێوان ئەمریکا، میسر و عێراق فراوان بوو؛ لە بەرهەمهێنانی بینراوەوە بۆ ئەزموونی پەیوەست بە شوێن، یاد و تەکنەلۆژیا.",
        "ڕێگاکانی جیاوازن، بەڵام بە دیدێکی بینراوی هاوبەش گرێدراون.",
      ],
      cta: "دۆزینەوەی گەشت",
    },
    filmIntro: {
      index: "02",
      label: "سینەما و بەرهەمهێنان",
      meta: "قاهیرە / بەغدا",
      title: "وێنە لە پشت پەردەوە دەست پێدەکات.",
      body: [
        "سینەما و بەرهەمهێنانی بینراو بەشێکی گرنگن لە ئەزموونی ئازاد، بە تایبەتی لە ساڵانی کاری لە میسر.",
        "ئەزموونی لە ئاراستەی هونەری، دروستکردنی دیمەن و کار لە پشت کامێرا گەشەی کرد؛ لەوانە «122» و «الجوزاء».",
      ],
      cta: "دۆزینەوەی کارەکان",
    },
    houseIntro: {
      index: "03",
      label: "ماڵی کۆنەکارەکان",
      meta: "بەغدا / ئەرشیفی ماڵ",
      title: "میراتێک کە لە سێ نەوەدا بەردەوامە.",
      body: [
        "ماڵی کۆنەکارەکان بەردەوامی پەیوەندییەکی خێزانیی درێژە لەگەڵ هونەر، کۆنەکارەکان و یادی بەغدا.",
        "ئازاد وەک نەوەی سێیەم ئەم ڕێگایە دەباتە پێشەوە لە شوێنێکی کلتووری و میراتی بۆ پێشانگا و بۆنە هونەرییەکان.",
      ],
      cta: "دۆزینەوەی ماڵی کۆنەکارەکان",
    },
    abaadIntro: {
      index: "04",
      label: "ئەبعادی عێراق",
      title: "کاتێک شوێن بوو بە ئەزموون.",
      body: [
        "لە ساڵی 2019ەوە، ئازاد دەستی کرد بە بەکارهێنانی واقعی مەجازی و گەشتی مەجازی بۆ دروستکردنی ئەزموونی دیجیتاڵی بۆ شوێن.",
        "ئەم ڕێگایە بوو بە بنەمای ئەبعادی عێراق، لە نێوان وێنە، شوێن و تەکنەلۆژیا.",
      ],
      cta: "دۆزینەوەی ئەبعادی عێراق",
      detail: "دیجیتاڵ / شوێن",
    },
    contact: {
      index: "05",
      label: "پەیوەندی",
      intro: "بۆ هاوکاری، پرۆژە و بیرۆکەی نوێ.",
      methods: {
        email: {
          label: "ئیمەیل",
          descriptor: "گفتوگۆ دەست پێ بکە",
        },
        whatsapp: {
          label: "واتساپ",
          descriptor: "پەیوەندی ڕاستەوخۆ",
        },
        instagram: {
          label: "ئینستاگرام",
          descriptor: "کارەکان ببینە",
        },
      },
    },
    cinemaPage: {
      title: "سینەما و بەرهەمهێنان",
      chapters: [
        {
          index: "01",
          title: "وێنە لە پشت کامێراوە.",
          body: [
            "ئەزموونی ئازاد تارق لە سینەما و بەرهەمهێنانی بینراودا لە کاتی کاری لە میسردا فراوان بوو، لەوێدا لە کارە سینەمایی و تەلەڤزیۆنییەکاندا بەشداری کرد، و پەیوەندییەکەی بە دروستکردنی دیمەن و ئاراستەی هونەری گەشەی کرد.",
            "ئەم قۆناغە بوو بە شوێنێک بۆ پەرەپێدانی دیدی بۆ وێنە، و کارکردن لە ناو تیمەکانی بەرهەمهێنان بۆ گۆڕینی بیرۆکەکان بۆ دیمەن.",
          ],
        },
        {
          index: "02",
          title: "ئەزموونەکان لەسەر شاشە.",
          body: [
            "لە نێو ئەو کارانەی ئازاد تارق بەشداری تێدا کردووە «الجوزاء» و «122» هەن، لەگەڵ کارەکانی تر کە بەشدارییان کرد لە شێوەدانی ئەزموونی لە پشت کامێرا.",
            "ئەم بەشدارییانە بەشێکن لە گەشتی لە سینەما و بەرهەمهێنانی بینراو، و پەیوەندییەکەی بە وێنە و دروستکردنی دیمەن.",
          ],
        },
      ],
      linksLabel: "بەستەری بینین",
      links: {
        alJawzaa: "الجوزاء",
        film122: "122",
      },
    },
    footer: {
      brand: "AZAD TARIQ",
      location: "بەغدا، عێراق",
      legal: {
        terms: "مەرجەکانی بەکارهێنان",
        privacy: "سیاسەتی تایبەتی",
      },
      developedPrefix: "پەرەپێدراو لەلایەن",
      developedLink: "ئەبعادی عێراق",
    },
  },
};
