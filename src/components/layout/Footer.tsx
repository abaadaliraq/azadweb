"use client";

import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { SiteLogo } from "@/components/ui/SiteLogo";
import { useI18n } from "@/lib/i18n";

const footerImage = "/images/footer/azad-footer.jpg";
const footerImagePosition = "center center";

const footerNavigationLinks = [
  { href: "/", key: "home" },
  { href: "/journey", key: "journey" },
  { href: "/works", key: "works" },
  { href: "/house-of-antiques", key: "antiques" },
  { href: "/abaad-aliraq", key: "abaad" },
] as const;

const legalLinks = [
  { href: "/terms", key: "terms" },
  { href: "/privacy", key: "privacy" },
] as const;

const footerLinks = {
  instagram: "https://www.instagram.com/azad.tarriq/?__pwa=1",
  facebook: "https://www.facebook.com/share/1DpmigtJz9/",
  whatsapp: "https://wa.me/9647737079079",
  phone: "tel:+9647737079079",
  email: "mailto:azad.pro@gmail.com",
};

const socialItems = [
  {
    icon: <InstagramIcon />,
    key: "instagram",
    label: "Instagram",
  },
  {
    icon: <FacebookIcon />,
    key: "facebook",
    label: "Facebook",
  },
  {
    icon: <WhatsAppIcon />,
    key: "whatsapp",
    label: "WhatsApp",
  },
  {
    icon: <PhoneIcon />,
    key: "phone",
    label: "Phone",
  },
  {
    icon: <EmailIcon />,
    key: "email",
    label: "Email",
  },
] as const;

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <rect
        height="15"
        rx="4.2"
        width="15"
        x="4.5"
        y="4.5"
      />
      <circle cx="12" cy="12" r="3.4" />
      <circle cx="16.6" cy="7.4" r="0.8" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M14.2 8.1h2.1V4.8c-.4-.1-1.7-.2-3-.2-3 0-5 1.8-5 5.1v2.8H5v3.7h3.3v7.2h4.1v-7.2h3.3l.5-3.7h-3.8V10c0-1.1.3-1.9 1.8-1.9Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5.2 20.1 6.3 16a7.2 7.2 0 1 1 2.7 2.6l-3.8 1.5Z" />
      <path d="M9.5 8.4c-.2-.5-.4-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.1 1-1.1 2.5 1.1 2.9 1.3 3.1 2.2 3.4 5.4 4.6c2.6 1 3.1.8 3.7.7s1.8-.8 2-1.5.2-1.4.2-1.5-.2-.2-.5-.4l-1.9-.9c-.3-.1-.5-.2-.7.2l-.8 1c-.2.3-.4.3-.7.1-.4-.2-1.4-.5-2.7-1.7-1-1-1.7-2.1-1.9-2.4s0-.5.1-.7l.5-.6c.2-.2.2-.4.4-.6.1-.2.1-.4 0-.6l-.9-2.2Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M6.6 3.8 9.3 3c.5-.1 1 .1 1.2.6l1.3 3.1c.2.5.1 1-.3 1.3l-1.8 1.5a15.3 15.3 0 0 0 4.8 4.8l1.5-1.8c.3-.4.8-.5 1.3-.3l3.1 1.3c.5.2.7.7.6 1.2l-.8 2.7c-.2.6-.7 1-1.3 1C10.4 18.4 5.6 13.6 5.6 5.1c0-.6.4-1.1 1-1.3Z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <rect
        x="3.5"
        y="5.5"
        width="17"
        height="13"
        rx="2"
      />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </svg>
  );
}

function SocialControl({
  href,
  icon,
  label,
}: {
  href: string;
  icon: ReactNode;
  label: string;
}) {
  const isExternal = href.startsWith("http");

  return (
    <a
      aria-label={label}
      className="footer-social-link"
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {icon}
    </a>
  );
}

export function Footer() {
  const { direction, t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer
      className="site-footer"
      dir={direction}
      style={
        {
          "--footer-image-position": footerImagePosition,
        } as CSSProperties
      }
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt=""
        className="footer-image"
        src={footerImage}
      />

      <div className="footer-shade" aria-hidden="true" />

      <div className="footer-content">
        <div className="footer-main-row">
          <SiteLogo
            className="footer-brand"
            size={58}
          />

          <div className="footer-link-groups">
            <nav
              className="footer-nav"
              aria-label="Footer"
            >
              {footerNavigationLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.key}
                >
                  {t.nav[link.key]}
                </Link>
              ))}
            </nav>

            <nav
              className="footer-legal"
              aria-label="Legal"
            >
              {legalLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.key}
                >
                  {t.footer.legal[link.key]}
                </Link>
              ))}
            </nav>
          </div>

          <div
            className="footer-socials"
            aria-label="Social links"
          >
            {socialItems.map((item) => (
              <SocialControl
                href={footerLinks[item.key]}
                icon={item.icon}
                key={item.key}
                label={item.label}
              />
            ))}
          </div>
        </div>

        <div className="footer-bottom-row">
          <span>
            © {year} {t.footer.brand}
          </span>

          <span>
            {t.footer.developedPrefix}{" "}
            <Link
              href="https://www.abaad-aliraq.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.footer.developedLink}
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}