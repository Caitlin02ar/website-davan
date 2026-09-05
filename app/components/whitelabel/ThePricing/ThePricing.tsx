import { renderHighlightedText } from "@/lib/highlightText";
import Image from "next/image";
import BubbleTag from "../Common/BubbleTag";
import PricingGlassCard from "./PricingGlassCard";
import PricingItemsSection from "./PricingItemsSection";
import TextSlideIn from "../Common/TextSlideIn";

export default function ThePricingSection() {
  const pricingData = {
    title: {
      variant: "title" as const,
      number: "08",
      text: "The Pricing",
    },

    heading:
      "Wholesale pricing, and nothing to buy into.",

    headingHighlightText: "Wholesale pricing,",

    image: {
      src: "/photos/whitelabel/the-pricing-bg.png",
      alt: "",
      width: 1920,
      height: 1080,
    },
  };

  return (
    <section
      id="the-pricing"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Background */}
      <Image
        src={pricingData.image.src}
        alt={pricingData.image.alt}
        width={pricingData.image.width}
        height={pricingData.image.height}
        priority
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-dark/60" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="w-full px-8 md:px-16 lg:px-24 xl:px-32">

          <div className="flex flex-col gap-8">

            {/* TOP CONTENT */}
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_380px] lg:gap-12">

              {/* LEFT CONTENT */}
              <div className="flex flex-col gap-8">

                {/* Section Title */}
                <BubbleTag
                  variant={pricingData.title.variant}
                  number={pricingData.title.number}
                  items={[
                    {
                      text: pricingData.title.text,
                    },
                  ]}
                />

                {/* Heading */}
                <TextSlideIn className="max-w-2xl">
                  {renderHighlightedText(
                    pricingData.heading,
                    pricingData.headingHighlightText
                  )}
                </TextSlideIn>

              </div>

              {/* RIGHT CONTENT */}
              <div className="flex w-full max-w-[380px] shrink-0 items-start justify-center">
                <PricingGlassCard />
              </div>

            </div>

            {/* PRICING ITEMS */}
            <PricingItemsSection />

          </div>

        </div>
      </div>
    </section>
  );
}