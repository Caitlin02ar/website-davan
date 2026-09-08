import Link from "next/link";
import Image from "next/image";
import HashLink from "../common/HashLink";

interface FooterProps {
  data: {
    footerLogo: string;
    copyright: string;

    information: {
      text: string;
      icon: string;
    }[];

    navigationSections: {
      title: string;
      href: string;
      links?: {
        name: string;
        href: string;
      }[];
    }[];

    legalLinks: {
      name: string;
      href: string;
    }[];
  };
}

export default function Footer({ data }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const isExternalLink = (href: string) => {
    return href.startsWith("http://") || href.startsWith("https://");
  };

  return (
    <footer className="bg-dark px-5 py-14 sm:px-6 lg:px-28 lg:py-16">
      <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
        {/* LOGO + INFORMATION */}
        <div className="w-full lg:w-auto">
          <div className="relative h-[60px] w-[200px] sm:w-[230px] lg:-ml-3 lg:w-[250px]">
            <Image
              src={data.footerLogo}
              alt="DAVAN Digital Logo"
              fill
              sizes="250px"
              className="object-contain object-left"
            />
          </div>

          <div
            className="
              mt-4
              flex
              flex-col
              items-start
              gap-3
              font-body
              text-xs
            "
          >
            {data.information?.map((item, index) => (
              <span
                key={index}
                className="
                  flex
                  items-center
                  gap-2
                  break-all
                  font-body
                  sm:break-normal
                "
              >
                <Image
                  src={item.icon}
                  alt=""
                  width={14}
                  height={14}
                  className="
                    h-[14px]
                    w-[14px]
                    shrink-0
                    object-contain
                  "
                  sizes="100vw"
                />

                {item.text}
              </span>
            ))}
          </div>
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
          {data.navigationSections?.map((section) => (
            <div key={section.title}>
              {/* SECTION TITLE */}
              {isExternalLink(section.href) ? (
                <a
                  href={section.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    relative
                    mb-5
                    inline-block
                    align-top
                    font-body
                    text-xs
                    text-primary
                  "
                >
                  {section.title}

                  <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ) : (
                <Link
                  href={section.href}
                  className="
                    group
                    relative
                    mb-5
                    inline-block
                    align-top
                    font-body
                    text-xs
                    text-primary
                  "
                >
                  {section.title}

                  <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              )}

              {/* CHILD LINKS */}
              {section.links && section.links.length > 0 && (
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      {isExternalLink(link.href) ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
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
                      ) : (
                        <HashLink
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
                        </HashLink>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* DIVIDER */}
      <div className="mt-14 border-t border-white/10 md:mt-16" />

      {/* COPYRIGHT + LEGAL LINKS */}
      <div
        className="
          flex
          flex-col
          gap-5
          pt-6
          text-[11px]
          text-primary
          md:flex-row
          md:items-center
          md:justify-between
        "
      >
        <p className="font-body text-left">
          &copy; {currentYear} {data.copyright}
        </p>

        <div
          className="
            flex
            flex-col
            items-start
            gap-3
            sm:flex-row
            sm:items-center
            sm:gap-6
          "
        >
          {data.legalLinks?.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="
                group
                relative
                inline-block
                font-body
                transition-colors
                hover:text-white
              "
            >
              {link.name}

              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}