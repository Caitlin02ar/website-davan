"use client";

import Tag from "../common/Tag";
import Dropdown from "./Dropdown";
import CTAGlobal from "../common/CTAGlobal";
import { renderHighlightedText } from "@/lib/highlightText";

interface FAQProps {
  faqData: FAQDataProps;
  ctaData: {
    heading: string;
    subheadingTop?: string;
    subheadingBottom?: string;
    buttonText: string;
    titleColor: "primary" | "white";
  };
}

interface FAQDataProps {
  tag: string;
  title: string;
  highlightText?: string;
  backgroundImage: string;

  faqContent: {
    question: string;
    answer: string;
  }[];

  headingCard: string;
  description: string;
  buttonText: string;
}

export default function FAQ({
  faqData,
  ctaData,
}: FAQProps) {
  return (
    <section
      id="faq"
      className="
        relative
        overflow-hidden
        min-h-screen
        bg-top
        bg-cover
        bg-no-repeat
      "
      style={{
        backgroundImage: `url('${faqData.backgroundImage}')`,
      }}
    >

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />

      {/* FAQ CONTENT */}
      <div
        className="
          relative
          z-10

          flex
          flex-col

          gap-14

          px-5
          py-20

          sm:px-8

          md:px-12

          lg:flex-row
          lg:items-stretch
          lg:gap-24
          lg:p-24
          lg:min-h-screen
        "
      >

        {/* LEFT SIDE */}
        <div
          className="
            flex
            flex-col

            gap-10

            lg:justify-between
            lg:self-stretch
            lg:w-[30%]
          "
        >

          {/* TOP */}
          <div className="flex flex-col items-start">

            <Tag text={faqData.tag} />

            <h1
              className="
                mt-4

                text-3xl
                sm:text-4xl

                font-heading
                leading-tight

                max-w-[320px]

                sm:max-w-md
              "
            >
              {renderHighlightedText(
                faqData.title,
                faqData.highlightText
              )}
            </h1>

          </div>

          {/* CARD DESKTOP ONLY */}
          <div
            className="
              hidden

              lg:block

              w-full
              p-6

              rounded-2xl

              bg-white/[0.06]
              backdrop-blur-xl

              border
              border-white/20

              shadow-[0_8px_32px_rgba(0,0,0,0.25)]
            "
          >

            <h1 className="font-bold text-xl mb-2 text-white">
              {faqData.headingCard}
            </h1>

            <p className="max-w-sm text-xs leading-relaxed text-white/70">
              {faqData.description}
            </p>

            <button
              className="
                mt-8

                border
                border-primary

                py-2.5
                px-8

                text-primary

                rounded-full
                text-xs

                transition-all
                duration-300

                hover:bg-primary
                hover:text-black
              "
            >
              {faqData.buttonText}
            </button>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:max-w-2xl">

          {/* DROPDOWN */}
          <Dropdown items={faqData.faqContent} />

          {/* CARD MOBILE */}
          <div
            className="
              mt-8

              block
              lg:hidden

              w-full

              p-5
              sm:p-6

              rounded-2xl

              bg-white/5
              backdrop-blur-xl

              border
              border-white/10

              shadow-[0_8px_32px_rgba(0,0,0,0.25)]
            "
          >

            <h1
              className="
                font-bold
                text-lg
                sm:text-xl

                mb-2

                text-white
              "
            >
              {faqData.headingCard}
            </h1>

            <p
              className="
                max-w-sm

                text-xs
                sm:text-sm

                leading-relaxed
                text-white/70
              "
            >
              {faqData.description}
            </p>

            <button
              className="
                mt-6

                border
                border-primary

                py-2.5
                px-8

                text-primary

                rounded-full
                text-xs

                transition-all
                duration-300

                hover:bg-primary
                hover:text-black
              "
            >
              {faqData.buttonText}
            </button>

          </div>

        </div>

      </div>

      {/* CTA */}
      <CTAGlobal
        title={ctaData.heading}
        buttonText={ctaData.buttonText}
        titleColor={ctaData.titleColor}
        showBackground={false}
        href="/contact-us"
      />

    </section>
  );
}