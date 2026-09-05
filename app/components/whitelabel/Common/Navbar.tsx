"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import WhiteLabelButton from "../Common/Button";

const navItems = [
  { label: "The Problem", id: "the-problem-section" },
  { label: "What We Deliver", id: "what-we-deliver" },
  { label: "Confidentiality", id: "confidentiality" },
  { label: "How It Works", id: "how-it-works" },
  { label: "Our Work", id: "our-works" },
  { label: "Pricing", id: "the-pricing" },
];

export default function NavbarWhiteLabel() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const hashSection = window.location.hash.slice(1);
    if (navItems.some((item) => item.id === hashSection)) {
      setActiveSection(hashSection);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) setActiveSection(visibleEntry.target.id);
      },
      { rootMargin: "-25% 0px -60%", threshold: [0.01, 0.25, 0.5] }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <nav
      className="fixed left-1/2 top-3 z-50 w-[calc(100%-1.5rem)] max-w-5xl -translate-x-1/2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur-md sm:top-4 sm:w-[calc(100%-2rem)] sm:rounded-2xl sm:px-5 sm:py-3 lg:px-6"
      aria-label="White label navigation"
    >
      <div className="flex items-center justify-between gap-3 sm:gap-4">
        <Link
          href="/"
          className="relative h-8 w-24 shrink-0 outline-none focus:outline-none sm:h-9 sm:w-28 lg:h-10 lg:w-32"
        >
          <Image
            src="/photos/logo-1.webp"
            alt="DAVAN Digital Logo"
            fill
            priority
            sizes="(max-width: 640px) 96px, (max-width: 1024px) 112px, 128px"
            className="object-contain object-left"
          />
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <li key={item.id}>
                <Link
                  href={`#${item.id}`}
                  aria-current={isActive ? "location" : undefined}
                  className={`whitespace-nowrap text-sm transition-colors duration-300 hover:font-bold ${
                    isActive ? "font-bold text-primary" : "text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden shrink-0 sm:flex">
          <WhiteLabelButton variant="primary" animated href="#the-pricing">
            Rate Card
          </WhiteLabelButton>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-primary hover:text-primary lg:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="whitelabel-mobile-menu"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={22} />}
        </button>
      </div>

      {isMenuOpen && (
        <div
          id="whitelabel-mobile-menu"
          className="absolute left-0 right-0 top-[calc(100%+0.5rem)] overflow-hidden rounded-2xl border border-white/10 bg-[#171719]/95 p-3 shadow-2xl backdrop-blur-xl lg:hidden"
        >
          <ul className="flex flex-col">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <li key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    aria-current={isActive ? "location" : undefined}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex rounded-xl px-4 py-3 text-sm transition-colors ${
                      isActive ? "bg-primary/10 font-bold text-primary" : "text-white hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-3 border-t border-white/10 pt-3 sm:hidden">
            <WhiteLabelButton variant="primary" animated href="#the-pricing">
              Rate Card
            </WhiteLabelButton>
          </div>
        </div>
      )}
    </nav>
  );
}
