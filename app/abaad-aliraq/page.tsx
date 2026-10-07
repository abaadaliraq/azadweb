"use client";

import Link from "next/link";
import { useState } from "react";
import { TopBar } from "@/components/layout/TopBar";
import { I18nProvider, useI18n } from "@/lib/i18n";
import { Footer } from "@/src/components/layout/Footer";

const abaadHeroImage = "/images/abaad-page/hero.jpg";

const abaadWebsiteUrl = "https://abaad-aliraq.com";

function AbaadHeroImage() {
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
      src={abaadHeroImage}
    />
  );
}

function AbaadPageContent() {
  const { direction, language } = useI18n();

  const copy =
    language === "ar"
      ? {
          title: "أبعاد العراق",

          sectionOneIndex: "01",
          sectionOneTitle: "بداية من الواقع الافتراضي",
          sectionOneBody: [
            "منذ عام 2021، كان أزاد طارق من أوائل من عملوا على إدخال تقنيات الواقع الافتراضي والجولات الافتراضية إلى العراق، من خلال تأسيس وتطوير أبعاد العراق كمساحة متخصصة في تقديم تجارب رقمية جديدة للمشاريع والمؤسسات.",
            "بدأت الفكرة من الجولات الافتراضية، وتحويل المكان الحقيقي إلى تجربة يمكن استكشافها رقمياً من أي مكان. ومع الوقت، أصبحت هذه التقنية وسيلة لعرض العقارات، الفنادق، المصانع، المواقع الثقافية والمساحات التجارية بطريقة أكثر تفاعلاً ووضوحاً.",
          ],

          sectionTwoIndex: "02",
          sectionTwoTitle: "من التجربة الافتراضية إلى الحلول الرقمية",
          sectionTwoBody: [
            "مع تطور المشروع واحتياجات السوق، توسعت أبعاد العراق إلى ما هو أبعد من الجولات الافتراضية، لتعمل على بناء حلول رقمية متكاملة تبدأ من الفكرة وتُطوّر بما يناسب طبيعة كل مشروع.",
            "اليوم تشمل أعمال أبعاد العراق برمجة وتطوير الأنظمة الخاصة بالمؤسسات والشركات، تصميم وتطوير المواقع الإلكترونية، التطبيقات، المتاجر الإلكترونية، إلى جانب الجولات الافتراضية التي بقيت جزءاً أساسياً من هوية المشروع.",
          ],

          website: "زيارة موقع أبعاد العراق",
        }
      : language === "ku"
        ? {
            title: "Abaad Al-Iraq",

            sectionOneIndex: "01",
            sectionOneTitle: "لە واقعە مجازییەوە دەست پێکرد",
            sectionOneBody: [
              "لە ساڵی 2021، ئەزاد تاریق یەکێک بوو لەو کەسانەی زوو دەستیان کرد بە بەکارهێنانی تەکنەلۆژیای واقعە مجازی و گەشتی مجازی لە عێراق، لە ڕێگەی Abaad Al-Iraq.",
              "سەرەتا بیرۆکەکە لە دروستکردنی گەشتی مجازی بۆ شوێن و پڕۆژەکان دەستی پێکرد، بە شێوەیەک کە بەکارهێنەر بتوانێت شوێنەکان بە شێوەی دیجیتاڵ بگەڕێت.",
            ],

            sectionTwoIndex: "02",
            sectionTwoTitle: "لە واقعە مجازی بۆ چارەسەری دیجیتاڵ",
            sectionTwoBody: [
              "لەگەڵ گەشەکردنی پڕۆژەکە، Abaad Al-Iraq بەرەو بوارێکی فراوانتری چارەسەرە دیجیتاڵییەکان چوو.",
              "ئەمڕۆ کارەکان بریتین لە پەرەپێدان و دروستکردنی سیستەمەکان، وێبسایت، ئەپلیکەیشن، فرۆشگای ئەلیکترۆنی و گەشتی مجازی.",
            ],

            website: "سەردانی وێبسایتی Abaad Al-Iraq",
          }
        : {
            title: "Abaad Al-Iraq",

            sectionOneIndex: "01",
            sectionOneTitle: "Beginning with virtual reality",
            sectionOneBody: [
              "Since 2021, Azad Tariq has been among the early adopters introducing virtual reality and virtual tour technology into the Iraqi market through Abaad Al-Iraq, developing new ways for projects and institutions to present physical spaces digitally.",
              "The journey began with virtual tours, transforming real environments into experiences that could be explored remotely. Over time, the technology became a new way to present real estate, hotels, factories, cultural locations and commercial spaces.",
            ],

            sectionTwoIndex: "02",
            sectionTwoTitle: "From virtual experiences to digital solutions",
            sectionTwoBody: [
              "As the project developed and market needs expanded, Abaad Al-Iraq moved beyond virtual tours and into a broader field of digital solutions, building technology around the requirements of each project.",
              "Today, its work includes custom systems for companies and institutions, website design and development, applications, e-commerce platforms and virtual tours, which remain a central part of the company's identity.",
            ],

            website: "Visit Abaad Al-Iraq",
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
            <AbaadHeroImage />
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

          {/* 01 */}
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

          {/* 02 */}
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

            <div className="cinema-links">
              <Link
                aria-label={copy.website}
                className="cinema-link"
                href={abaadWebsiteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{copy.website}</span>
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>

        </section>
      </main>

      <Footer />
    </>
  );
}

export default function AbaadAlIraqPage() {
  return (
    <I18nProvider>
      <AbaadPageContent />
    </I18nProvider>
  );
}