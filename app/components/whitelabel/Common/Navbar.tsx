"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import WhiteLabelButton from "../Common/Button";

export default function NavbarWhiteLabel() {
  const navItems = [
    { label: "The Problem", href: "/whitelabel#the-problem" },
    { label: "What We Deliver", href: "/whitelabel#what-we-deliver" },
    { label: "Confidentiality", href: "/whitelabel#confidentiality" },
    { label: "How It Works", href: "/whitelabel#how-it-works" },
    { label: "Our Work", href: "/whitelabel#our-work" },
    { label: "Pricing", href: "/whitelabel#pricing" },
  ];

  const buttonData = {
    buttonText: "Rate Card",
    variant: "primary" as const,
    animated: true,
    href: "#the-pricing",
  };

  const navbarData = {
    image: {
      src: "/photos/logo-1.webp",
      alt: "DAVAN Digital Logo",
    },
  };

  const pathname = usePathname();

  return (
    <nav
      className="
        fixed left-1/2 top-4 z-50
        w-[calc(100%-1rem)]
        max-w-5xl
        -translate-x-1/2
        rounded-2xl
        border border-white/10
        bg-white/5
        px-6 py-3
        backdrop-blur-md
        md:w-[calc(100%-2rem)]
      "
    >
      <div className="flex items-center justify-between gap-4">

        <Link
          href="/"
          className="
            relative
            h-9
            w-28
            shrink-0
            outline-none
            focus:outline-none
            md:h-10
            md:w-32
          "
        >
          <Image
            src={navbarData.image.src}
            alt={navbarData.image.alt}
            fill
            priority
            className="object-contain object-left"
          />
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`
                    whitespace-nowrap
                    text-sm
                    transition-colors
                    duration-300
                    ${
                      isActive
                        ? "text-primary"
                        : "text-white"
                    }
                    hover:font-bold
                    hover:text-white
                  `}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex shrink-0 items-center">
          <WhiteLabelButton
            variant={buttonData.variant}
            animated={buttonData.animated}
            href={buttonData.href}
          >
            {buttonData.buttonText}
          </WhiteLabelButton>
        </div>

      </div>
    </nav>
  );
}