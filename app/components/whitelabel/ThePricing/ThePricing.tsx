import { renderHighlightedText } from "@/lib/highlightText";
import Image from "next/image";

import BubbleTag from "../Common/BubbleTag";
import PricingGlassCard from "./PricingGlassCard";
import PricingItemsSection from "./PricingItemsSection";
import TextSlideIn from "../Common/TextSlideIn";

type PricingData = {
  heading: string;
  headingHighlightText: string;

  tag: {
    variant: "title" | "tag";
    number: string;
    text: string;
    highlightTextBoolean?: boolean;
  }[];

  glassCardItem: {
    icon: string;
    title: string;
    description: string;
    buttons: {
      variant: "primary" | "outline";
      animated?: boolean;
      buttonText?: string;
      text?: string;
      href: string;
    }[];
  }[];

  listItems: {
    title: string;
    description: string;
  }[];
};

type ThePricingSectionProps = {
  pricingData: PricingData;
};

export default function ThePricingSection({
  pricingData,
}: ThePricingSectionProps) {
  return (
    <section
      id="the-pricing"
      className="relative min-h-screen w-full overflow-hidden"
    >
      <Image
        src="/photos/whitelabel/the-pricing-bg.png"
        alt=""
        width={1920}
        height={1080}
        priority
        className="absolute inset-0 h-full w-full object-cover object-[72%_center] md:object-center"
      />

      <div className="absolute inset-0 bg-dark/60" />

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="w-full px-5 py-16 md:px-16 md:py-0 lg:px-24 xl:px-32">
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_380px] lg:gap-12">
              <div className="flex flex-col gap-8">
                <BubbleTag
                  variant={pricingData.tag[0].variant}
                  number={pricingData.tag[0].number}
                  items={[
                    {
                      text: pricingData.tag[0].text,
                    },
                  ]}
                />

                <TextSlideIn className="max-w-2xl">
                  {renderHighlightedText(
                    pricingData.heading,
                    pricingData.headingHighlightText
                  )}
                </TextSlideIn>
              </div>

              <div className="flex w-full max-w-[380px] items-start justify-center lg:shrink-0">
                <PricingGlassCard
                  data={pricingData.glassCardItem[0]}
                />
              </div>
            </div>

            <PricingItemsSection items={pricingData.listItems} />
          </div>
        </div>
      </div>
    </section>
  );
}