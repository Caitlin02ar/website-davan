"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

type CTAGlobalProps = {
  topText?: string;
  title: string;
  bottomText?: string;
  buttonText: string;

  onClick?: () => void;
  href?: string;

  showBackground?: boolean;

  backgroundImage?: string;
  logoImage?: string;

  height?: string;
  titleColor?: "primary" | "white";
};

export default function CTAGlobal({
  topText,
  title,
  bottomText,

  buttonText,

  onClick,
  href,

  showBackground = true,

  backgroundImage = "/photos/cta-bg.webp",
  logoImage = "/photos/cta-logo.webp",

  height = "h-[75vh] sm:h-[75vh]",
  titleColor = "primary",
}: CTAGlobalProps) {

  // Decide how to render the button:
  // - Anchor on the same page (starts with "#") -> plain <a> for reliable smooth scroll
  // - External URL (http/https) -> <a> with target/rel
  // - Internal route -> Next.js <Link>
  // - No href but onClick provided -> button with onClick
  // - No href and no onClick -> fallback to the contact form anchor
  let ctaButton;

  if (href) {
    const isAnchor = href.startsWith("#");
    const isExternal = href.startsWith("http");

    if (isAnchor) {
      ctaButton = (
        <a href={href}>
          <Button theme="dark">{buttonText}</Button>
        </a>
      );
    } else if (isExternal) {
      ctaButton = (
        <a href={href} target="_blank" rel="noopener noreferrer">
          <Button theme="dark">{buttonText}</Button>
        </a>
      );
    } else {
      ctaButton = (
        <Link href={href}>
          <Button theme="dark">{buttonText}</Button>
        </Link>
      );
    }
  } else if (onClick) {
    ctaButton = (
      <Button theme="dark" onClick={onClick}>
        {buttonText}
      </Button>
    );
  } else {
    // FALLBACK: no href and no onClick -> scroll to the contact form.
    ctaButton = (
      <a href="#form">
        <Button theme="dark">{buttonText}</Button>
      </a>
    );
  }

  return (
    <>
      <section
        className={`
          hidden
          sm:block

          ${height}

          min-h-[680px]

          sm:min-h-auto
        `}
      >
        <div className="relative h-full w-full overflow-hidden">

          {showBackground && (
            <>
              <Image
                src={backgroundImage}
                alt="CTA Background"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/90 pointer-events-none" />
            </>
          )}

          <Image
            src={logoImage}
            alt="CTA Logo"
            width={1200}
            height={1200}
            className="
              absolute
              left-1/2
              top-1/2
              z-10

              w-[170%]

              sm:w-[95%]

              lg:w-[80%]

              max-w-5xl

              -translate-x-1/2
              -translate-y-1/2

              pointer-events-none
            "
          />

          <div
            className="
              absolute
              left-1/2
              top-1/2
              z-20

              flex
              flex-col

              w-[92%]

              sm:w-[90%]
              sm:max-w-5xl

              max-w-5xl

              -translate-x-1/2
              -translate-y-1/2

              gap-8

              sm:gap-18

              text-center

              mt-4
              sm:mt-12

              px-4
              sm:px-0
            "
          >

            <div className="flex flex-col gap-2 sm:gap-2">

              {topText && (
                <h3
                  className="
                    font-subheading
                    text-white

                    text-xl
                    sm:text-2xl
                  "
                >
                  {topText}
                </h3>
              )}

              <h3
                className={`
                  font-heading
                  text-xl
                  sm:text-xl
                  lg:text-3xl
                  leading-[0.9]
                  sm:leading-normal
                  max-w-[320px]
                  sm:max-w-xl
                  mx-auto
                  ${
                    titleColor === "primary"
                      ? "text-primary"
                      : "text-white"
                  }
                `}
              >
                {title}
              </h3>

              {bottomText && (
                <h3
                  className="
                    font-subheading
                    text-white
                    text-lg
                    sm:text-2xl
                    max-w-[280px]
                    sm:max-w-none
                    mx-auto
                  "
                >
                  {bottomText}
                </h3>
              )}

            </div>

            {/* BUTTON */}
            <div className="flex flex-col items-center pt-2 sm:pt-0 -mt-4">
              {ctaButton}
            </div>

          </div>

        </div>
      </section>

      <section className="sm:hidden relative overflow-hidden">

        {showBackground && (
          <>
            <Image
              src={backgroundImage}
              alt="CTA Background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/90 pointer-events-none" />
          </>
        )}

        <div className="relative z-10 flex flex-col items-center px-4 py-10">

          <div className="relative w-full max-w-[380px]">
            <Image
              src={logoImage}
              alt="CTA Logo"
              width={1200}
              height={1200}
              className="w-full h-auto pointer-events-none"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-10 text-center">
              {topText && (
                <h3 className="font-heading text-white text-xs">
                  {topText}
                </h3>
              )}

              <h3
                className={`
                  font-heading
                  text-xs
                  leading-[0.95]
                  max-w-lg
                  mx-auto
                  ${titleColor === "primary" ? "text-primary" : "text-white"}
                `}
              >
                {title}
              </h3>

              {bottomText && (
                <h3 className="font-heading text-white text-xs max-w-[220px] mx-auto">
                  {bottomText}
                </h3>
              )}
            </div>
          </div>

          
          <div className="flex flex-col items-center scale-[0.5] -mt-11">
            {ctaButton}
          </div>

        </div>
      </section>
    </>
  );
}