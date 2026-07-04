// app/components/common/Footer.tsx

import Link from "next/link";

interface FooterProps {
  data: {
    footerLogo: string;
    copyright: string;

    information: {
      text: string;
      icon: string;
    }[];
  };
}

export default function Footer({
  data,
}: FooterProps) {

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
    <footer className="bg-dark px-5 py-14 sm:px-6 lg:px-28 lg:py-16">

      <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">

        {/* LOGO */}
        <div className="w-full lg:w-auto">
          <img
            src={data.footerLogo}
            alt="Davan Logo"
            className="
              w-[200px]
              sm:w-[230px]
              lg:w-[250px]
              lg:-ml-3
            "
          />
        </div>

        {/* NAVIGATION */}
        <div
          className="
            grid
            grid-cols-2
            gap-x-10
            gap-y-10

            sm:grid-cols-2

            md:flex
            md:flex-wrap
            md:gap-12

            lg:gap-16
          "
        >

          {footerLinks.map((section) => (

            <div key={section.title}>

              <h4 className="font-body mb-5 text-xs text-primary">
                {section.title}
              </h4>

              <ul className="space-y-3">

                {section.links.map((link) => (

                  <li key={link.name}>

                    <a
                      href={link.href}
                      className="
                        font-body
                        text-[11px]
                        text-white
                        transition-colors
                        hover:text-primary
                      "
                    >
                      {link.name}
                    </a>

                  </li>

                ))}

              </ul>

            </div>

          ))}

          {/* CONTACT */}
          <div className="col-span-2 md:col-span-1">

            <Link
              href="/contact-us"
              className="
                group
                relative
                inline-block
                align-top

                font-body
                mb-5
                text-xs
                text-primary
              "
            >
              Contact Us

              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>

            </Link>

          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div
        className="
          mt-14
          flex
          flex-col
          gap-5
          pt-6

          text-[11px]
          text-primary

          md:mt-16
          md:flex-row
          md:items-center
          md:justify-between
        "
      >

        {/* COPYRIGHT */}
        <p className="font-body text-left">
          {data.copyright}
        </p>

        {/* INFORMATION */}
        <div
          className="
            flex
            flex-col
            items-start
            gap-3

            sm:flex-row
            sm:items-center
            sm:justify-center
            sm:gap-8

            md:justify-end
          "
        >

          {data.information?.map((item, index) => (

            <span
              key={index}
              className="
                font-body
                flex
                items-center
                gap-2

                break-all
                sm:break-normal
              "
            >

              <img
                src={item.icon}
                alt=""
                className="
                  w-[14px]
                  h-[14px]

                  object-contain
                  shrink-0
                "
              />

              {item.text}

            </span>

          ))}

        </div>

      </div>

    </footer>
  );
}