"use client";

import { TopBar } from "@/components/layout/TopBar";
import { I18nProvider, useI18n } from "@/lib/i18n";
import { Footer } from "@/src/components/layout/Footer";

function TermsPageContent() {
  const { direction, t } = useI18n();
  const copy = t.legalPages.terms;

  return (
    <>
      <TopBar />

      <main className="legal-page">
        <header className="legal-hero" data-topbar-theme="dark">
          <div className="legal-hero-content" dir={direction}>
            <p className="legal-eyebrow">{copy.eyebrow}</p>
            <h1>{copy.title}</h1>
            <p className="legal-subtitle">{copy.subtitle}</p>
          </div>
        </header>

        <section className="legal-content" dir={direction}>
          {copy.sections.map((section, index) => (
            <article className="legal-section" key={section.title}>
              <p className="legal-section-index">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div className="legal-section-copy">
                <h2>{section.title}</h2>
                <div className="legal-section-body">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default function TermsPage() {
  return (
    <I18nProvider>
      <TermsPageContent />
    </I18nProvider>
  );
}
