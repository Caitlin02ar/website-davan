"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);

  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Our Approach", href: "/our-approach" },
    { label: "About Us", href: "/about-us" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  return (
    <nav
      className={`
        fixed
        top-0
        left-0
        z-50
        w-full
        transition-all
        duration-500
        ${
          scrolled
            ? `
              bg-gradient-to-b
              from-black/100
              via-black/50
              to-transparent
            `
            : `
              bg-gradient-to-b
              from-black/60
              via-black/20
              to-transparent
            `
        }
      `}
    >
      <div
        className={`
          relative
          flex
          items-center
          justify-between
          px-6
          transition-all
          duration-500

          ${
            scrolled
              ? "h-16 md:h-20 md:px-10"
              : "h-20 md:h-24 md:px-10"
          }
        `}
      >
        <Link href="/" className="outline-none
          focus:outline-none
          focus-visible:outline-none"
        >
          <Image
            src="/photos/logo-1.webp"
            alt="DAVAN Digital Logo"
            width={180}
            height={60}
            priority
            style={{ width:"100%", height: "auto" }}
            className={`
              transition-all
              duration-500

              ${
                scrolled
                  ? "w-[120px] md:w-[150px]"
                  : "w-[140px] md:w-[180px]"
              }
            `}
          />
        </Link>

        <ul
          className="
            absolute
            left-1/2
            hidden
            -translate-x-1/2
            items-center
            gap-10
            md:flex
          "
        >
          {NavItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={
                    `
                    group
                    relative
                    pb-1
                    text-sm
                    transition-colors
                    duration-300
                    ${
                      isActive
                        ? "text-primary"
                        : "text-white"
                    }
                    `}>
                  {item.label}

                  <span
                    className={`
                      absolute
                      bottom-0
                      left-0
                      h-[1.5px]
                      transition-all
                      duration-300

                      ${
                        isActive
                          ? "w-full bg-primary"
                          : "w-0 group-hover:w-full group-hover:bg-white"
                      }
                    `}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="
            flex
            items-center
            justify-center
            text-white
            md:hidden
          "
        >
          {mobileMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`
          overflow-hidden
          transition-all
          duration-500
          md:hidden

          ${
            mobileMenu
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div
          className="
            flex
            flex-col
            gap-6
            border-t
            border-white/10
            bg-black/80
            px-6
            py-8
          "
        >
          {NavItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenu(false)}
                className="
                  group
                  relative
                  w-fit
                  text-lg
                  text-white
                "
              >
                {item.label}

                <span
                  className={`
                    absolute
                    bottom-[-4px]
                    left-0
                    h-[1.5px]
                    bg-primary
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }
                  `}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}