export const languages = ["ar", "en", "ku"] as const;

export type Language = (typeof languages)[number];
export type Direction = "rtl" | "ltr";

type LegalPageCopy = {
  eyebrow: string;
  title: string;
  subtitle: string;
  sections: {
    title: string;
    body: string[];
  }[];
};

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
  legalPages: {
    terms: LegalPageCopy;
    privacy: LegalPageCopy;
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
      title: "أزاد طارق الألماني",
      support: "بين السينما، الذاكرة، والتقنية.",
      descriptor: ["إنتاج بصري", "إدارة فنية", "تراث", "واقع افتراضي"],
      detailLabel: "مجالات",
      yearLabel: "01 2026",
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
    legalPages: {
      terms: {
        eyebrow: "01 / LEGAL",
        title: "شروط الاستخدام",
        subtitle:
          "توضح هذه الشروط طريقة استخدام موقع أزاد طارق الألماني كموقع شخصي وفني للتعريف بالأعمال والمشاريع.",
        sections: [
          {
            title: "قبول الشروط",
            body: [
              "باستخدام هذا الموقع، فإنك توافق على هذه الشروط بصيغتها الحالية. إذا لم تكن موافقاً عليها، يمكنك ببساطة عدم استخدام الموقع.",
            ],
          },
          {
            title: "طبيعة الموقع",
            body: [
              "هذا الموقع مخصص للتعريف بالسيرة المهنية لأزاد طارق الألماني، وأعماله في السينما والإنتاج، وبيت التحفيات، وأبعاد العراق، إضافة إلى محتوى بصري وروابط تواصل ومشاريع خارجية.",
              "المحتوى المعروض هدفه تعريفي وثقافي ومهني، ولا يشكل عرضاً تجارياً ملزماً أو استشارة قانونية أو مالية.",
            ],
          },
          {
            title: "الملكية الفكرية",
            body: [
              "النصوص، الصور، التصميم، العلامات، الأعمال، والمواد المعروضة في الموقع محمية بحقوق الملكية الفكرية الخاصة بأزاد طارق أو الجهات المالكة الأصلية لها.",
              "لا يجوز نسخ أو إعادة نشر أو استخدام أي محتوى لأغراض تجارية بدون إذن مسبق. ويمكن مشاركة روابط صفحات الموقع بالطريقة المعتادة مع الإشارة إلى المصدر.",
            ],
          },
          {
            title: "حقوق أطراف أخرى",
            body: [
              "قد تتضمن بعض الصور أو الأعمال أو المواد المعروضة محتوى تعود حقوقه إلى جهات إنتاج أو أصحاب حقوق أصليين. يتم عرض هذا المحتوى في سياق التعريف بالأعمال والمسيرة المهنية.",
            ],
          },
          {
            title: "الروابط الخارجية",
            body: [
              "يحتوي الموقع على روابط إلى خدمات ومواقع خارجية مثل YouTube وInstagram وFacebook وWhatsApp ومواقع مشاريع أخرى.",
              "عند فتح هذه الروابط، تصبح خاضعاً لشروط وسياسات تلك الجهات، ولا يتحمل هذا الموقع مسؤولية محتواها أو طريقة إدارتها لبياناتك.",
            ],
          },
          {
            title: "توفر الموقع",
            body: [
              "نبذل جهداً لإبقاء الموقع متاحاً وواضحاً، لكن لا يمكن ضمان توفره بشكل دائم أو خلوه الكامل من الأخطاء التقنية أو الانقطاعات.",
            ],
          },
          {
            title: "تحديث الشروط",
            body: [
              "قد يتم تحديث هذه الشروط من وقت إلى آخر بما يتناسب مع تطور الموقع أو المشاريع المعروضة فيه. استمرار استخدام الموقع بعد التحديث يعني قبول النسخة المحدّثة.",
            ],
          },
          {
            title: "التواصل",
            body: [
              "لأي استفسار حول هذه الشروط أو طلب إذن لاستخدام محتوى من الموقع، يمكن التواصل عبر البريد الإلكتروني: azad.pro@gmail.com.",
            ],
          },
        ],
      },
      privacy: {
        eyebrow: "02 / LEGAL",
        title: "سياسة الخصوصية",
        subtitle:
          "تشرح هذه السياسة ما يجمعه الموقع فعلياً وكيف يتعامل مع الروابط والخدمات الخارجية.",
        sections: [
          {
            title: "المعلومات التي يجمعها الموقع",
            body: [
              "لا يحتوي الموقع حالياً على نماذج تواصل داخلية، نشرات بريدية، تسجيل حسابات، متجر، عمليات دفع، أو رفع ملفات من المستخدمين.",
              "لا يطلب الموقع منك إدخال بيانات شخصية مباشرة داخل صفحاته.",
            ],
          },
          {
            title: "تفضيل اللغة",
            body: [
              "يستخدم الموقع التخزين المحلي في المتصفح لحفظ اللغة التي تختارها بين العربية والإنجليزية والكردية، حتى تظهر الزيارة التالية باللغة نفسها.",
              "هذا التفضيل يبقى داخل متصفحك ولا يُستخدم لتتبعك عبر مواقع أخرى.",
            ],
          },
          {
            title: "ملفات تعريف الارتباط",
            body: [
              "لم يظهر في الكود الحالي استخدام لملفات تعريف الارتباط Cookies أو أدوات تحليل مثل Google Analytics أو Vercel Analytics أو Meta Pixel.",
            ],
          },
          {
            title: "الروابط وخدمات التواصل الخارجية",
            body: [
              "يتضمن الموقع روابط إلى البريد الإلكتروني وWhatsApp وInstagram وFacebook. عند استخدام هذه الروابط، تنتقل إلى خدمات خارجية تخضع لسياسات الخصوصية الخاصة بها.",
              "قد تتعامل تلك الخدمات مع بيانات مثل حسابك، رقم هاتفك، رسالتك، أو معلومات جهازك وفق سياساتها الخاصة.",
            ],
          },
          {
            title: "YouTube والمحتوى الخارجي",
            body: [
              "قد يحتوي الموقع على روابط إلى YouTube أو مواقع مشاريع أخرى. فتح هذه الروابط يتم خارج الموقع، وتخضع البيانات هناك لسياسات تلك المنصات.",
            ],
          },
          {
            title: "البيانات التقنية الأساسية",
            body: [
              "مثل أي موقع ويب، قد تعالج خدمة الاستضافة بيانات تقنية أساسية لازمة لعرض الصفحات وحماية الخدمة، مثل عنوان IP ونوع المتصفح ووقت الطلب، ضمن سجلات تشغيلية قياسية.",
            ],
          },
          {
            title: "حماية المعلومات وحقوقك",
            body: [
              "بما أن الموقع لا يجمع بيانات شخصية مباشرة عبر نماذج داخلية، فإن نطاق البيانات المخزنة في الموقع محدود جداً.",
              "يمكنك حذف تفضيل اللغة من إعدادات المتصفح أو مسح بيانات الموقع المحلية في أي وقت.",
            ],
          },
          {
            title: "تحديث السياسة",
            body: [
              "قد يتم تحديث سياسة الخصوصية إذا أضيفت خدمات جديدة مثل نماذج تواصل أو أدوات تحليل أو ميزات تفاعلية. ستعكس هذه الصفحة أي تغيير جوهري.",
            ],
          },
          {
            title: "التواصل بخصوص الخصوصية",
            body: [
              "لأي سؤال متعلق بالخصوصية، يمكن التواصل عبر البريد الإلكتروني: azad.pro@gmail.com.",
            ],
          },
        ],
      },
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
      title: "AZAD TARIQ AL-ALMANI",
      support: "Cinema, memory and technology.",
      descriptor: [
        "FILM PRODUCTION",
        "ART DIRECTION",
        "HERITAGE",
        "VIRTUAL REALITY",
      ],
      detailLabel: "FIELDS",
      yearLabel: "01 2026",
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
    legalPages: {
      terms: {
        eyebrow: "01 / LEGAL",
        title: "Terms of Use",
        subtitle:
          "These terms explain how to use Azad Tariq Al-Almani's personal and artistic website.",
        sections: [
          {
            title: "Acceptance of Terms",
            body: [
              "By using this website, you agree to these terms as they appear here. If you do not agree, you may choose not to use the site.",
            ],
          },
          {
            title: "Purpose of the Website",
            body: [
              "This website presents Azad Tariq Al-Almani's professional journey, film and production work, House of Antiques, Abaad Al-Iraq, visual material, creative content, and contact links.",
              "The content is provided for portfolio, cultural, and professional information. It is not a binding commercial offer or legal, financial, or professional advice.",
            ],
          },
          {
            title: "Intellectual Property",
            body: [
              "Texts, images, design, marks, works, and other materials displayed on this website are protected by intellectual property rights owned by Azad Tariq or their original rights holders.",
              "You may not copy, republish, or reuse the content for commercial purposes without prior permission. Ordinary sharing of website links is welcome when the source is preserved.",
            ],
          },
          {
            title: "Third-Party Rights",
            body: [
              "Some images, works, or materials may belong to original producers, collaborators, or other rights holders. They are shown here in the context of presenting the work and professional journey.",
            ],
          },
          {
            title: "External Links",
            body: [
              "The website includes links to external services and websites such as YouTube, Instagram, Facebook, WhatsApp, and related project websites.",
              "When you open those links, you are using services controlled by third parties. This website is not responsible for their content, terms, or privacy practices.",
            ],
          },
          {
            title: "Availability",
            body: [
              "We aim to keep the website available and accurate, but we cannot guarantee uninterrupted access or that the site will always be free from technical errors.",
            ],
          },
          {
            title: "Changes to These Terms",
            body: [
              "These terms may be updated from time to time as the website or related projects evolve. Continued use of the website after an update means you accept the updated terms.",
            ],
          },
          {
            title: "Contact",
            body: [
              "For questions about these terms or permission to use content from the website, contact: azad.pro@gmail.com.",
            ],
          },
        ],
      },
      privacy: {
        eyebrow: "02 / LEGAL",
        title: "Privacy Policy",
        subtitle:
          "This policy explains what the website actually collects and how it handles external links and services.",
        sections: [
          {
            title: "Information the Website Collects",
            body: [
              "The website currently does not include contact forms, newsletter signups, user accounts, payments, a store, or user file uploads.",
              "It does not ask you to enter personal information directly into its pages.",
            ],
          },
          {
            title: "Language Preference",
            body: [
              "The website uses browser local storage to remember your selected language across Arabic, English, and Kurdish, so your next visit can open in the same language.",
              "This preference remains in your browser and is not used to track you across other websites.",
            ],
          },
          {
            title: "Cookies",
            body: [
              "The current code does not show the use of Cookies or analytics tools such as Google Analytics, Vercel Analytics, or Meta Pixel.",
            ],
          },
          {
            title: "External Contact Links",
            body: [
              "The website includes links to email, WhatsApp, Instagram, and Facebook. When you use those links, you move to external services governed by their own privacy policies.",
              "Those services may handle information such as your account, phone number, message, or device information according to their own rules.",
            ],
          },
          {
            title: "YouTube and External Content",
            body: [
              "The website may link to YouTube or other project websites. Opening those links happens outside this website, and data there is handled under those platforms' policies.",
            ],
          },
          {
            title: "Basic Technical Data",
            body: [
              "Like most websites, the hosting service may process basic technical data needed to deliver pages and protect the service, such as IP address, browser type, and request time, in standard operational logs.",
            ],
          },
          {
            title: "Protection and Your Rights",
            body: [
              "Because the website does not collect personal information through internal forms, the personal data stored by the site itself is very limited.",
              "You can clear the language preference at any time by clearing local site data in your browser.",
            ],
          },
          {
            title: "Policy Updates",
            body: [
              "This policy may be updated if new services are added, such as contact forms, analytics tools, or interactive features. This page will reflect material changes.",
            ],
          },
          {
            title: "Privacy Contact",
            body: [
              "For privacy-related questions, contact: azad.pro@gmail.com.",
            ],
          },
        ],
      },
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
      title: "AZAD TARIQ AL-ALMANI",
      support: "لە نێوان سینەما، یاد، و تەکنەلۆژیا.",
      descriptor: [
        "بەرهەمهێنانی بینراو",
        "ئاراستەی هونەری",
        "میرات",
        "واقعی مەجازی",
      ],
      detailLabel: "بوارەکان",
      yearLabel: "01 2026",
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
    legalPages: {
      terms: {
        eyebrow: "01 / LEGAL",
        title: "مەرجەکانی بەکارهێنان",
        subtitle:
          "ئەم مەرجانە ڕوون دەکەنەوە کە چۆن وێبسایتی کەسی و هونەری ئازاد تاریق ئەلمانی بەکاربهێنرێت.",
        sections: [
          {
            title: "پەسەندکردنی مەرجەکان",
            body: [
              "بە بەکارهێنانی ئەم وێبسایتە، تۆ ڕازی دەبیت بە ئەم مەرجانە وەک لێرە نوسراون. ئەگەر ڕازی نیت، دەتوانیت وێبسایتەکە بەکارنەهێنیت.",
            ],
          },
          {
            title: "ئامانجی وێبسایت",
            body: [
              "ئەم وێبسایتە گەشتی پیشەیی ئازاد تاریق ئەلمانی، کارەکانی لە سینەما و بەرهەمهێنان، House of Antiques، Abaad Al-Iraq، ناوەڕۆکی بینراو و بەستەرەکانی پەیوەندی پیشان دەدات.",
              "ناوەڕۆکەکە بۆ ناساندن، کلتوور و زانیاری پیشەییە؛ نەک پێشکەشکردنێکی بازرگانی پابەندکەر یان ڕاوێژی یاسایی و دارایی.",
            ],
          },
          {
            title: "مافی خاوەندارێتی",
            body: [
              "دەق، وێنە، دیزاین، نیشانەکان، کارەکان و ماددەکانی ناو وێبسایت پارێزراون بە مافی خاوەندارێتیی ئازاد تاریق یان خاوەن مافی ڕەسەنیان.",
              "نابێت ناوەڕۆکەکە بۆ مەبەستی بازرگانی کۆپی، بڵاو، یان دووبارە بەکاربهێنرێت بەبێ ڕێگەپێدانی پێشوەخت. هاوبەشکردنی بەستەرەکانی وێبسایت بە شێوەی ئاسایی ڕێگەپێدراوە بە پاراستنی سەرچاوە.",
            ],
          },
          {
            title: "مافی لایەنی سێیەم",
            body: [
              "هەندێک وێنە، کار، یان ماددە دەتوانن هی بەرهەمهێنەران، هاوکاران، یان خاوەن مافی ڕەسەن بن. ئەمانە لە چوارچێوەی ناساندنی کار و گەشتی پیشەیی پیشان دەدرێن.",
            ],
          },
          {
            title: "بەستەری دەرەکی",
            body: [
              "وێبسایتەکە بەستەر بۆ خزمەتگوزاری و وێبسایتی دەرەکی وەک YouTube وInstagram وFacebook وWhatsApp و پرۆژەکانی تر لەخۆدەگرێت.",
              "کاتێک ئەم بەستەرانە دەکەیتەوە، خزمەتگوزارییەکانی لایەنی سێیەم بەکاردەهێنیت. ئەم وێبسایتە بەرپرسیار نییە لە ناوەڕۆک، مەرج، یان سیاسەتی تایبەتییان.",
            ],
          },
          {
            title: "بەردەستبوون",
            body: [
              "هەوڵ دەدەین وێبسایتەکە بەردەست و ڕوون بێت، بەڵام ناتوانین دڵنیایی بدەین کە هەمیشە بەبێ پچڕان یان هەڵەی تەکنیکی کار بکات.",
            ],
          },
          {
            title: "گۆڕینی مەرجەکان",
            body: [
              "ئەم مەرجانە لە کاتێکەوە بۆ کاتێکی تر دەتوانن نوێ بکرێنەوە بە پێی گەشەی وێبسایت یان پرۆژەکان. بەردەوامی لە بەکارهێنان واتە پەسەندکردنی وەشانی نوێکراوە.",
            ],
          },
          {
            title: "پەیوەندی",
            body: [
              "بۆ پرسیار لەبارەی ئەم مەرجانە یان داواکاری ڕێگەپێدان بۆ بەکارهێنانی ناوەڕۆک، پەیوەندی بکە بە: azad.pro@gmail.com.",
            ],
          },
        ],
      },
      privacy: {
        eyebrow: "02 / LEGAL",
        title: "سیاسەتی تایبەتی",
        subtitle:
          "ئەم سیاسەتە ڕوون دەکاتەوە وێبسایتەکە بەڕاستی چی کۆدەکاتەوە و چۆن مامەڵە لەگەڵ بەستەر و خزمەتگوزاری دەرەکی دەکات.",
        sections: [
          {
            title: "ئەو زانیاریانەی وێبسایت کۆیان دەکاتەوە",
            body: [
              "وێبسایتەکە ئێستا فۆرمی پەیوەندی ناوخۆیی، هەواڵنامە، هەژماری بەکارهێنەر، پارەدان، فرۆشگا، یان بارکردنی فایل لەلایەن بەکارهێنەرەوە نییە.",
              "وێبسایتەکە داوای تۆ ناکات زانیاری کەسی ڕاستەوخۆ لە ناو پەڕەکاندا داخڵ بکەیت.",
            ],
          },
          {
            title: "هەڵبژاردنی زمان",
            body: [
              "وێبسایتەکە local storage ـی وێبگەڕ بەکاردەهێنێت بۆ پاراستنی زمانی هەڵبژێردراو لە نێوان عەرەبی، ئینگلیزی و کوردی، بۆ ئەوەی سەردانی داهاتوو بە هەمان زمان بکرێتەوە.",
              "ئەم هەڵبژاردنە لە ناو وێبگەڕەکەتدا دەمێنێتەوە و بۆ شوێنپێهەڵگرتنت لە وێبسایتەکانی تر بەکارناهێنرێت.",
            ],
          },
          {
            title: "Cookies",
            body: [
              "لە کۆدی ئێستادا بەکارهێنانی Cookies یان ئامرازەکانی شیکاری وەک Google Analytics، Vercel Analytics، یان Meta Pixel دەرنەکەوت.",
            ],
          },
          {
            title: "بەستەرەکانی پەیوەندی دەرەکی",
            body: [
              "وێبسایتەکە بەستەر بۆ ئیمەیل، WhatsApp، Instagram وFacebook لەخۆدەگرێت. کاتێک ئەوانە بەکاردەهێنیت، دەچیتە خزمەتگوزاری دەرەکی کە سیاسەتی تایبەتی خۆیان هەیە.",
              "ئەو خزمەتگوزارییانە دەتوانن زانیاری وەک هەژمار، ژمارەی تەلەفۆن، پەیام، یان زانیاری ئامێر بە پێی ڕێساکانی خۆیان مامەڵە پێ بکەن.",
            ],
          },
          {
            title: "YouTube و ناوەڕۆکی دەرەکی",
            body: [
              "وێبسایتەکە دەتوانێت بەستەر بۆ YouTube یان وێبسایتی پرۆژەکانی تر هەبێت. کردنەوەی ئەم بەستەرانە لە دەرەوەی ئەم وێبسایتە ڕوودەدات و زانیاری لەوێ بە پێی سیاسەتی ئەو پلاتفۆرمانە مامەڵەی پێ دەکرێت.",
            ],
          },
          {
            title: "زانیاری تەکنیکی بنەڕەتی",
            body: [
              "وەک زۆربەی وێبسایتەکان، خزمەتگوزاری خانەخوێکردن دەتوانێت زانیاری تەکنیکی بنەڕەتی بۆ پیشاندانی پەڕەکان و پاراستنی خزمەتگوزاری پرۆسە بکات، وەک IP، جۆری وێبگەڕ و کاتی داواکاری، لە تۆمارە کارگێڕییە ستانداردەکاندا.",
            ],
          },
          {
            title: "پاراستن و مافەکانت",
            body: [
              "لەبەر ئەوەی وێبسایتەکە زانیاری کەسی لە ڕێگەی فۆرمی ناوخۆییەوە کۆناکاتەوە، ئەو زانیارییە کە لە خودی وێبسایتدا دەپارێزرێت زۆر سنووردارە.",
              "دەتوانیت هەڵبژاردنی زمان هەرکات بسڕیتەوە بە پاککردنەوەی زانیاری ناوخۆیی وێبسایت لە وێبگەڕەکەت.",
            ],
          },
          {
            title: "نوێکردنەوەی سیاسەت",
            body: [
              "ئەم سیاسەتە دەتوانێت نوێ بکرێتەوە ئەگەر خزمەتگوزاری نوێ زیاد بکرێت، وەک فۆرمی پەیوەندی، ئامرازی شیکاری، یان تایبەتمەندییە کارلێککارەکان. ئەم پەڕەیە گۆڕانکارییە گرنگەکان پیشان دەدات.",
            ],
          },
          {
            title: "پەیوەندی بۆ تایبەتی",
            body: [
              "بۆ هەر پرسیارێکی پەیوەست بە تایبەتی، پەیوەندی بکە بە: azad.pro@gmail.com.",
            ],
          },
        ],
      },
    },
  },
};
