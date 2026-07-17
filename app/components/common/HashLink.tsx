"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HashLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hashIndex = href.indexOf("#");
  const path = hashIndex === -1 ? href : href.slice(0, hashIndex);
  const hash = hashIndex === -1 ? "" : href.slice(hashIndex + 1);

  const cleanPath = path.replace(/\/$/, "") || "/";
  const isSamePage = pathname === cleanPath;

  if (isSamePage && hash) {
    const handleClick = (e: React.MouseEvent) => {
      e.preventDefault();

      const target = document.getElementById(hash);
      if (!target) return;

      window.__lenis?.scrollTo(target, {
        offset: -100,
        duration: 1.4,
      });

      window.history.replaceState(window.history.state, "", `${cleanPath}#${hash}`);
    };

    return (
      <a href={`${cleanPath}#${hash}`} className={className} onClick={handleClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}