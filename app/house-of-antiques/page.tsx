"use client";

import Link from "next/link";
import { useState } from "react";
import { TopBar } from "@/components/layout/TopBar";
import { I18nProvider, useI18n } from "@/lib/i18n";
import { Footer } from "@/src/components/layout/Footer";

const houseHeroImage = "/images/house-page/hero.jpg";

// ضعي رابط موقع بيت التحفيات هنا
const houseWebsiteUrl = "";

function HouseHeroImage() {
  const [hasImage, setHasImage] = useState(true);

  if (!hasImage) {
    return <div className="cinema-hero-missing" aria-hidden="true" />;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt=""
      className="cinema-hero-media"
      onLoad={(event) => {
        if (!event.currentTarget.naturalWidth) {
          setHasImage(false);
        }
      }}
      onError={() => setHasImage(false)}
      src={houseHeroImage}
    />
  );
}

function HousePageContent() {
  const { direction, language } = useI18n();

  const copy =
  language === "ar"
    ? {
        title: "بيت التحفيات",

        sectionOneIndex: "01",
        sectionOneTitle: "إرث يمتد عبر ثلاثة أجيال",
        sectionOneBody: [
          "بيت التحفيات ليس مجرد مكان في حياة أزاد طارق الألماني، بل جزء من ذاكرته العائلية ومن الجذور التي شكّلت علاقته بالفن، بالمكان، وبفكرة الحفاظ على الأشياء التي تحمل قصة. يمتد هذا الإرث عبر ثلاثة أجيال من عائلة الألماني، بدءاً من محمد علي الألماني، وصولاً إلى طارق محمد علي الألماني الذي حوّل هذا الاهتمام إلى مساحة حقيقية داخل بغداد.",

          "في عام 1989 أسس طارق بيت التحفيات في أبو نؤاس، وفتح أبوابه أمام عالم من السجاد والتحف والفضيات والنحاسيات والأعمال الفنية والمقتنيات القادمة من فترات وثقافات مختلفة. بالنسبة للعائلة، لم تكن هذه الأشياء مجرد قطع قديمة، بل شواهد على حياة وأزمنة وأشخاص؛ ولهذا أصبح البيت مع السنوات جزءاً من ذاكرة بغداد بقدر ما كان جزءاً من ذاكرة العائلة.",
        ],

        sectionTwoIndex: "02",
        sectionTwoTitle: "الجيل الثالث",
        sectionTwoBody: [
          "كبر أزاد وهو يحمل هذه الذاكرة معه حتى خلال السنوات التي عاش فيها بعيداً عن العراق. ومع اختلاف مسيرته بين الفن والإنتاج والعمل في مجالات أخرى، بقي بيت التحفيات يمثل بالنسبة له رابطاً مباشراً مع العائلة، ومع بغداد، ومع جزء من حياته لم يكن يريد أن يتحول إلى مجرد ذكرى.",

          "في عام 2022 بدأ أزاد رحلة العودة إلى البيت وإحيائه من جديد بوصفه الجيل الثالث من عائلة الألماني. لم تكن الفكرة إعادة المكان كما كان فقط، بل الحفاظ على روحه ومنحه دوراً جديداً؛ مساحة يلتقي فيها التراث مع الفن والثقافة والمعارض والفعاليات والتجارب المعاصرة. بهذا المعنى، أصبح بيت التحفيات بالنسبة لأزاد امتداداً للماضي، لكنه في الوقت نفسه مشروعاً للمستقبل ومسؤولية يحملها من جيل إلى جيل.",
        ],

        website: "زيارة موقع بيت التحفيات",
      }

    : language === "ku"
      ? {
          title: "House of Antiques",

          sectionOneIndex: "01",
          sectionOneTitle: "میراتێک بە سێ نەوە",
          sectionOneBody: [
            "House of Antiques تەنها شوێنێک لە ژیانی ئەزاد تاریق ئەلمانی نییە، بەڵکو بەشێکە لە یادەوەری خێزان و لەو ڕەگانەی کە پەیوەندیی ئەوی بە هونەر، شوێن و پاراستنی چیرۆکەکان دروست کردووە. ئەم میراتە بە سێ نەوەی خێزانی ئەلمانی بەردەوام بووە.",

            "لە ساڵی 1989 تاریق محەمەد عەلی ئەلمانی House of Antiques ـی لە ئەبو نواس دامەزراند و شوێنەکە بووە ماڵێک بۆ فەرش، پارچە کۆنەکان، زیو، مس، هونەر و کۆکراوەی سەردەم و کولتوورە جیاوازەکان. ئەم شتانە بۆ خێزان تەنها پارچەی کۆن نەبوون، بەڵکو یادەوەریی ژیان و مێژوو بوون.",
          ],

          sectionTwoIndex: "02",
          sectionTwoTitle: "نەوەی سێیەم",
          sectionTwoBody: [
            "ئەزاد ئەم یادەوەرییەی لەگەڵ خۆی هەڵگرت، تەنانەت لەو ساڵانەی لە دەرەوەی عێراق ژیا. House of Antiques بۆ ئەو بەردەوام بوو وەک پەیوەندییەک لەگەڵ خێزان، بەغدا و بەشێک لە ژیانی خۆی.",

            "لە ساڵی 2022 ئەزاد وەک نەوەی سێیەم دەستی بە گەڕانەوە و زیندووکردنەوەی ماڵەکە کرد. ئامانج تەنها گەڕاندنەوەی ڕابردوو نەبوو، بەڵکو دروستکردنی شوێنێکی زیندوو بوو کە میرات، هونەر، پێشانگا و چالاکییە کەلتوورییە نوێکان تێیدا یەکدەگرن.",
          ],

          website: "سەردانی وێبسایتی House of Antiques",
        }

      : {
          title: "House of Antiques",

          sectionOneIndex: "01",
          sectionOneTitle: "A legacy across three generations",
          sectionOneBody: [
            "House of Antiques is more than a place in Azad Tariq Al-Almani's life. It is part of his family's memory and one of the roots that shaped his relationship with art, place and the idea of preserving objects that carry stories. This legacy extends across three generations of the Al-Almani family, from Muhammad Ali Al-Almani to Tariq Muhammad Ali Al-Almani, who transformed that passion into a physical space in Baghdad.",

            "In 1989, Tariq established House of Antiques on Abu Nuwas, bringing together carpets, silver, copper, artworks and objects from different periods and cultures. For the family, these were never simply old objects. They were traces of lives, places and times, allowing the House to become part of Baghdad's memory as much as it was part of the family's own story.",
          ],

          sectionTwoIndex: "02",
          sectionTwoTitle: "The third generation",
          sectionTwoBody: [
            "Azad carried this memory with him even through the years he spent away from Iraq. While his own journey developed through art, production and different professional worlds, House of Antiques remained a direct connection to his family, to Baghdad and to a part of his life that he did not want to become only a memory.",

            "In 2022, Azad began the journey of returning to and reviving the House as the third generation of the Al-Almani family. The intention was not simply to recreate what had existed before, but to preserve its spirit while giving it a new role: a living space where heritage meets art, exhibitions, cultural gatherings and contemporary experiences. For Azad, House of Antiques became both a continuation of the past and a responsibility carried into the future.",
          ],

          website: "Visit House of Antiques",
        };

  return (
    <>
      <TopBar />

      <main className="cinema-page">

        {/* HERO */}
        <header
          className="journey-detail-hero cinema-hero"
          data-topbar-theme="dark"
        >
          <div className="journey-detail-hero-image">
            <HouseHeroImage />
          </div>

          <div
            className="journey-detail-hero-shade"
            aria-hidden="true"
          />

          <div
            className="journey-detail-hero-content"
            dir={direction}
          >
            <h1>{copy.title}</h1>
          </div>
        </header>

        {/* CONTENT */}
        <section
          className="cinema-content"
          dir={direction}
        >

          <article className="cinema-chapter">
            <p className="cinema-chapter-index">
              {copy.sectionOneIndex}
            </p>

            <h2>{copy.sectionOneTitle}</h2>

            <div className="cinema-chapter-body">
              {copy.sectionOneBody.map((paragraph) => (
                <p key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </article>

          <article className="cinema-chapter">
            <p className="cinema-chapter-index">
              {copy.sectionTwoIndex}
            </p>

            <h2>{copy.sectionTwoTitle}</h2>

            <div className="cinema-chapter-body">
              {copy.sectionTwoBody.map((paragraph) => (
                <p key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>

            {houseWebsiteUrl ? (
              <div className="cinema-links">
                <Link
                  className="cinema-link"
                  href={houseWebsiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{copy.website}</span>
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            ) : null}
          </article>

        </section>
      </main>

      <Footer />
    </>
  );
}

export default function HouseOfAntiquesPage() {
  return (
    <I18nProvider>
      <HousePageContent />
    </I18nProvider>
  );
}