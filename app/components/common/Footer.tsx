export default function Footer() {
  const footerLinks = [
    {
      title: "About Us",
      links: ["History", "Four Anchors", "Review"],
    },
    {
      title: "Services",
      links: ["Four Pillars", "How We Work", "FAQ"],
    },
    {
      title: "Our Approach",
      links: ["The Gap", "Our Clients", "Portfolio"],
    },
  ];

  return (
    <footer className="bg-black px-8 py-16 lg:px-20">
      <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
        {/* Logo */}
        <div>
          <img
            src="/photos/logo-1.webp"
            alt="Davan Logo"
            className="w-[220px]"
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
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-[11px] text-white hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="font-body text-primary mb-5 text-xs">
              Contact Us
            </h4>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 text-[10px] text-primary md:flex-row md:justify-between">
        <p className="font-body">
          © 2025 DAVAN Digital. All rights reserved.
        </p>

        <div className="flex items-center gap-8">
          <a href="#" className="font-body hover:opacity-80">
            📍 Perth, Australia
          </a>

          <a
            href="mailto:team@davan.digital"
            className="font-body hover:opacity-80"
          >
            ✉ team@davan.digital
          </a>
        </div>
      </div>
    </footer>
  );
}