"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const NavItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Our Approach", href: "/our-approach" },
    { label: "About Us", href: "/about-us" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="relative flex items-center h-24 px-10">
        {/* Logo */}
        <Image
          src="/photos/logo-1.webp"
          alt="Davan Logo"
          width={180}
          height={60}
          priority
        />

        {/* Nav Center */}
        <ul className="absolute left-1/2 -translate-x-1/2 flex items-center gap-10">
          {NavItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative pb-1 transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-white hover:text-primary"
                  }`}
                >
                  {item.label}

                  {isActive && (
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-primary" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}