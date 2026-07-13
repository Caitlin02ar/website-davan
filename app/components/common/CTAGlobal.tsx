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
    ctaButton = (
      <a href="#form">
        <Button theme="dark">{buttonText}</Button>
      </a>
    );
  }

  const textBlock = (
    <>
      {topText && (
        <h3 className="font-subheading text-white text-xl sm:text-2xl">
          {topText}
        </h3>
      )}

      <h3
        className={`
          font-heading
          text-xl
          sm:text-xl
          lg:text-3xl
          leading-tight
          max-w-xl
          mx-auto
          ${titleColor === "primary" ? "text-primary" : "text-white"}
        `}
      >
        {title}
      </h3>

      {bottomText && (
        <h3 className="font-subheading text-white text-lg sm:text-2xl mx-auto">
          {bottomText}
        </h3>
      )}
    </>
  );

  return (
    <>
      {/* DESKTOP */}
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
                alt=""
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/90 pointer-events-none" />
            </>
          )}

          {/* LOGO WRAPPER = anchor for everything */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              z-10

              w-[95%]
              lg:w-[80%]
              max-w-5xl

              -translate-x-1/2
              -translate-y-1/2
            "
          >
            <Image
              src={logoImage}
              alt=""
              width={1200}
              height={1200}
              sizes="90vw"
              className="w-full h-auto pointer-events-none"
            />

            {/* TEXT: centered in the inner "hole" of the pill (upper area) */}
            <div
              className="
                absolute
                inset-x-0
                top-0
                h-[95%]

                z-20

                flex
                flex-col
                items-center
                justify-center

                gap-2

                px-[14%]
                text-center
              "
            >
              {textBlock}
            </div>

            <div
              className="
                absolute
                inset-x-0
                bottom-[6%]

                z-20

                flex
                justify-center
              "
            >
              {ctaButton}
            </div>
          </div>

        </div>
      </section>

      {/* MOBILE */}
      <section className="sm:hidden relative overflow-hidden">

        {showBackground && (
          <>
            <Image
              src={backgroundImage}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/90 pointer-events-none" />
          </>
        )}

        <div className="relative z-10 flex flex-col items-center px-4 py-10">

          <div className="relative w-full max-w-[380px]">
            <Image
              src={logoImage}
              alt=""
              width={1200}
              height={1200}
              className="w-full h-auto pointer-events-none"
              sizes="100vw"
            />

            <div className="absolute inset-x-0 top-0 h-[62%] flex flex-col items-center justify-center gap-1 px-10 text-center">
              {topText && (
                <h3 className="font-heading text-white text-xs">{topText}</h3>
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

            <div className="absolute inset-x-0 bottom-[11%] z-20 flex justify-center scale-[0.5]">
              {ctaButton}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}