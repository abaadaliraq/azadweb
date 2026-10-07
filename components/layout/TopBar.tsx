"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { SiteLogo } from "@/components/ui/SiteLogo";
import { useI18n } from "@/lib/i18n";

const navLinks = [
  { href: "/", key: "home" },
  { href: "/journey", key: "journey" },
  { href: "/works", key: "works" },
  { href: "/house-of-antiques", key: "antiques" },
  { href: "/abaad-aliraq", key: "abaad" },
] as const;

const mobileMenuImage = "/images/footer/footer-tobbar.jpg";

const subscribeToMount = () => () => {};
const getMountedSnapshot = () => true;
const getServerSnapshot = () => false;

export function TopBar() {
  const [isOpen, setIsOpen] = useState(false);
  const isMounted = useSyncExternalStore(
    subscribeToMount,
    getMountedSnapshot,
    getServerSnapshot,
  );
  const { t, direction, language } = useI18n();

  const contactLabel =
    language === "ar"
      ? "التواصل"
      : language === "ku"
        ? "پەیوەندی"
        : "Contact";

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <header
        className="topbar"
        data-direction={direction}
        data-theme="dark"
        dir="ltr"
      >
        <SiteLogo
          className="topbar-logo"
          priority
          size={44}
        />

        <div className="topbar-language">
          <LanguageSwitcher />
        </div>

        <button
          aria-controls="site-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          className={`menu-button ${isOpen ? "is-open" : ""}`}
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={isOpen ? "topbar-nav is-open" : "topbar-nav"}
          dir={direction}
          id="site-navigation"
        >
          <div className="mobile-nav-links">
            {navLinks.map((link, index) => (
              <Link
                href={link.href}
                key={link.key}
                onClick={closeMenu}
              >
                <span className="mobile-nav-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="mobile-nav-text">
                  {t.nav[link.key]}
                </span>
              </Link>
            ))}

            <Link
              href="/#contact"
              onClick={closeMenu}
            >
              <span className="mobile-nav-number">
                06
              </span>

              <span className="mobile-nav-text">
                {contactLabel}
              </span>
            </Link>
          </div>

          <div className="mobile-nav-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={mobileMenuImage}
              alt=""
            />

            <div
              className="mobile-nav-image-shade"
              aria-hidden="true"
            />
          </div>
        </nav>
      </header>

      <button
        aria-label="Close navigation"
        className={`mobile-nav-overlay ${isOpen ? "is-open" : ""}`}
        onClick={closeMenu}
        tabIndex={isOpen ? 0 : -1}
        type="button"
      />

      <style jsx global>{`

        /* =========================================
           MOBILE-ONLY ELEMENTS
        ========================================= */

        .mobile-nav-number,
        .mobile-nav-image,
        .mobile-nav-overlay {
          display: none;
        }

        .topbar .menu-button {
          position: relative;
        }

        .topbar .menu-button span {
          position: absolute;
          left: 50%;
          display: block;
          width: 18px;
          height: 1px;
          margin: 0;
          background: currentColor;
          transform-origin: center;
          transition:
            transform 380ms cubic-bezier(0.22, 1, 0.36, 1),
            opacity 280ms ease;
        }

        .topbar .menu-button span:first-child {
          transform: translate(-50%, -6px);
        }

        .topbar .menu-button span:nth-child(2) {
          transform: translate(-50%, 0);
        }

        .topbar .menu-button span:nth-child(3) {
          transform: translate(-50%, 6px);
        }

        @media (max-width: 768px) {

          /* =========================================
             PAGE OVERLAY
          ========================================= */

          .mobile-nav-overlay {
            position: fixed;
            inset: 0;

            z-index: 998;

            display: block;

            width: 100%;
            height: 100%;

            padding: 0;
            border: 0;

            background: rgba(0, 0, 0, 0.5);

            opacity: 0;
            visibility: hidden;
            pointer-events: none;

            transition:
              opacity 420ms cubic-bezier(0.22, 1, 0.36, 1),
              visibility 420ms;
          }

          .mobile-nav-overlay.is-open {
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
          }


          /* =========================================
             SIDE DRAWER
          ========================================= */

          .topbar .topbar-nav {
            position: fixed !important;

            top: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            left: auto !important;

            z-index: 999 !important;

            width: 56vw !important;
            min-width: 190px;
            max-width: 280px;

            height: 100dvh !important;

            display: flex !important;
            flex-direction: column !important;
            align-items: stretch !important;

            padding: 88px 0 0 !important;
            margin: 0 !important;

            overflow: hidden !important;

            background: #090807 !important;

            opacity: 1 !important;
            visibility: visible !important;

            transform: translateX(105%) !important;

            transition:
              transform 480ms cubic-bezier(0.22, 1, 0.36, 1) !important;
          }

          .topbar .topbar-nav.is-open {
            transform: translateX(0) !important;
          }


          /* =========================================
             MENU BUTTON / X
          ========================================= */

          .topbar .menu-button {
            z-index: 1001;
            position: relative;

            transition:
              opacity 300ms ease,
              transform 350ms cubic-bezier(0.22, 1, 0.36, 1);
          }

          .topbar .menu-button.is-open {
            position: fixed !important;

            top: 18px !important;
            right: 18px !important;
            left: auto !important;

            width: 32px !important;
            height: 32px !important;

            padding: 0 !important;
            margin: 0 !important;

            border: 0 !important;
            border-radius: 0 !important;

            background: transparent !important;
            box-shadow: none !important;

            display: flex !important;
            align-items: center !important;
            justify-content: center !important;

            opacity: 0.72;
          }

          .topbar .menu-button.is-open:hover {
            opacity: 1;
          }

          .topbar .menu-button span {
            position: absolute;

            left: 50%;

            width: 18px !important;
            height: 1px !important;

            background: #efe9de !important;

            transform-origin: center;

            transition:
              transform 380ms cubic-bezier(0.22, 1, 0.36, 1),
              opacity 280ms ease;
          }

          .topbar .menu-button span:first-child {
            transform: translate(-50%, -6px);
          }

          .topbar .menu-button span:nth-child(2) {
            transform: translate(-50%, 0);
          }

          .topbar .menu-button span:nth-child(3) {
            transform: translate(-50%, 6px);
          }

          .topbar .menu-button.is-open span:first-child {
            width: 17px !important;
            transform: translate(-50%, 0) rotate(45deg);
          }

          .topbar .menu-button.is-open span:nth-child(2) {
            opacity: 0;
            transform: translate(-50%, 0) scaleX(0.2);
          }

          .topbar .menu-button.is-open span:nth-child(3) {
            width: 17px !important;
            transform: translate(-50%, 0) rotate(-45deg);
          }


          /* =========================================
             NAVIGATION
          ========================================= */

          .mobile-nav-links {
            position: relative;
            z-index: 2;

            display: flex;
            flex-direction: column;

            width: 100%;

            padding:
              0
              23px
              25px;

            gap: 0;
          }

          .topbar .topbar-nav .mobile-nav-links > a,
          .topbar .topbar-nav .mobile-nav-links > a:visited,
          .topbar .topbar-nav .mobile-nav-links > a:hover,
          .topbar .topbar-nav .mobile-nav-links > a:active {
            position: relative;

            display: flex !important;
            align-items: center;
            gap: 12px;

            width: 100%;

            padding:
              14px
              0
              15px !important;

            margin: 0 !important;

            color: rgba(241, 237, 229, 0.88) !important;

            font-size: 14px !important;
            font-weight: 300 !important;
            line-height: 1.4 !important;

            letter-spacing: 0.01em !important;

            text-decoration: none !important;

            opacity: 0;
            transform: translateY(10px);

            transition:
              opacity 450ms cubic-bezier(0.22, 1, 0.36, 1),
              transform 450ms cubic-bezier(0.22, 1, 0.36, 1),
              color 300ms ease;
          }


          /* =========================================
             VINTAGE DIVIDER
          ========================================= */

          .topbar .topbar-nav .mobile-nav-links > a::after {
            content: "";

            position: absolute;

            right: 0;
            bottom: 0;
            left: 0;

            height: 1px;

            background:
              linear-gradient(
                90deg,
                transparent 0%,
                rgba(188, 164, 128, 0.08) 6%,
                rgba(188, 164, 128, 0.28) 50%,
                rgba(188, 164, 128, 0.08) 94%,
                transparent 100%
              );

            opacity: 0.75;
          }

          .topbar .topbar-nav .mobile-nav-links > a:last-child::after {
            opacity: 0.35;
          }


          /* =========================================
             NAV ANIMATION
          ========================================= */

          .topbar .topbar-nav.is-open .mobile-nav-links > a {
            opacity: 1;
            transform: translateY(0);
          }

          .topbar .topbar-nav.is-open .mobile-nav-links > a:nth-child(1) {
            transition-delay: 80ms;
          }

          .topbar .topbar-nav.is-open .mobile-nav-links > a:nth-child(2) {
            transition-delay: 120ms;
          }

          .topbar .topbar-nav.is-open .mobile-nav-links > a:nth-child(3) {
            transition-delay: 160ms;
          }

          .topbar .topbar-nav.is-open .mobile-nav-links > a:nth-child(4) {
            transition-delay: 200ms;
          }

          .topbar .topbar-nav.is-open .mobile-nav-links > a:nth-child(5) {
            transition-delay: 240ms;
          }

          .topbar .topbar-nav.is-open .mobile-nav-links > a:nth-child(6) {
            transition-delay: 280ms;
          }


          /* =========================================
             LINK NUMBER
          ========================================= */

          .mobile-nav-number {
            display: inline-block;

            min-width: 19px;

            color: rgba(194, 169, 132, 0.52);

            font-size: 8px;
            font-weight: 400;
            line-height: 1;

            letter-spacing: 0.1em;
          }


          /* =========================================
             LINK TEXT
          ========================================= */

          .mobile-nav-text {
            opacity: 0.94;
          }


          /* =========================================
             IMAGE
          ========================================= */

          .mobile-nav-image {
            position: relative;

            display: block;

            width: 100%;

            height: clamp(
              165px,
              30vh,
              215px
            );

            margin-top: auto;

            overflow: hidden;
          }

          .mobile-nav-image img {
            display: block;

            width: 100%;
            height: 100%;

            object-fit: cover;
            object-position: center center;

            transform: scale(1.045);

            filter:
              saturate(0.82)
              contrast(1.04)
              brightness(0.82);

            transition:
              transform 1.15s cubic-bezier(0.22, 1, 0.36, 1);
          }

          .topbar-nav.is-open .mobile-nav-image img {
            transform: scale(1);
          }


          /* =========================================
             IMAGE FADE INTO BLACK
          ========================================= */

          .mobile-nav-image-shade {
            position: absolute;
            inset: 0;

            pointer-events: none;

            background:
              linear-gradient(
                to bottom,
                #090807 0%,
                rgba(9, 8, 7, 0.92) 8%,
                rgba(9, 8, 7, 0.55) 19%,
                rgba(9, 8, 7, 0) 48%
              );
          }
        }


        /* =========================================
           VERY SMALL PHONES
        ========================================= */

        @media (max-width: 360px) {
          .topbar .topbar-nav {
            width: 59vw !important;
            min-width: 185px;
          }

          .mobile-nav-links {
            padding-inline: 19px;
          }

          .topbar .topbar-nav .mobile-nav-links > a {
            padding:
              12px
              0
              13px !important;

            font-size: 13px !important;
          }

          .mobile-nav-number {
            font-size: 7.5px;
          }

          .mobile-nav-image {
            height: clamp(
              155px,
              28vh,
              190px
            );
          }
        }


        /* =========================================
           REDUCED MOTION
        ========================================= */

        @media (prefers-reduced-motion: reduce) {
          .mobile-nav-overlay,
          .topbar .topbar-nav,
          .topbar .topbar-nav .mobile-nav-links > a,
          .mobile-nav-image img,
          .topbar .menu-button span {
            transition-duration: 0.01ms !important;
            transition-delay: 0ms !important;
          }
        }
      `}</style>
    </>
  );
}
