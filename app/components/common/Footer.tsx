import { MapPin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const footerLinks = [
    {
      title: "About Us",
      links: [
        { name: "History", href: "/about-us/#history" },
        { name: "Four Anchors", href: "/about-us/#four-anchors" },
        { name: "Review", href: "/about-us/#review" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Four Pillars", href: "/services/#four-pillars" },
        { name: "How We Work", href: "/services/#how-we-work" },
        { name: "FAQ", href: "/services/#faq" },
      ],
    },
    {
      title: "Our Approach",
      links: [
        { name: "The Gap", href: "/our-approach/#the-gap" },
        { name: "Our Clients", href: "/our-approach/#our-clients" },
        { name: "Portfolio", href: "/our-approach/#portfolio" },
      ],
    },
  ];

  return (
    <footer className="bg-dark px-6 py-16 lg:px-28">
      <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:items-start">
        <div>
          <img
            src="/photos/logo-1.webp"
            alt="Davan Logo"
            className="w-[250px]"
          />
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap gap-12 lg:gap-16">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-body text-primary mb-5 text-xs">
                {section.title}
              </h4>

              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="font-body text-[11px] text-white hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <div>
              <Link
                href="/contact-us"
                className="group relative inline-block font-body text-primary mb-5 text-xs align-top"
              >
                Contact Us

                <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-16 flex flex-col gap-4 pt-6 text-[11px] text-primary md:flex-row md:justify-between">
        <p className="font-body">
          © 2025 DAVAN Digital. All rights reserved.
        </p>

        <div className="flex items-center gap-8">
          <span className="font-body flex justify-center items-center gap-1">
            <MapPin size={14} />
            Perth, Australia
          </span>

          <span className="font-body flex justify-center items-center gap-1">
            <Mail size={14} />
            team@davan.digital
          </span>
        </div>
      </div>
    </footer>
  );
}