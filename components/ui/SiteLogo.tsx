"use client";

import Image from "next/image";
import Link from "next/link";

const logoPath = "/azad-logo.png";
const logoSize = 2000;

type SiteLogoProps = {
  className?: string;
  href?: string;
  priority?: boolean;
  size?: number;
};

export function SiteLogo({
  className,
  href = "/",
  priority = false,
  size = 44,
}: SiteLogoProps) {
  const logo = (
    <Image
      alt="Azad Tariq logo"
      className="site-logo-image"
      height={logoSize}
      priority={priority}
      src={logoPath}
      width={logoSize}
      style={{
        height: size,
        width: size,
      }}
    />
  );

  if (!href) {
    return (
      <span className={className} aria-label="Azad Tariq">
        {logo}
      </span>
    );
  }

  return (
    <Link className={className} href={href} aria-label="Azad Tariq home">
      {logo}
    </Link>
  );
}
