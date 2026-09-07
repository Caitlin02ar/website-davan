import Image from "next/image";

import { renderHighlightedText } from "@/lib/highlightText";

import BubbleTag from "../Common/BubbleTag";

import WhiteLabelButton from "../Common/Button";

import CardWithNumber from "./CardWithNumber";

import TextSlideIn from "../Common/TextSlideIn";

import TextStagger from "../Common/TextStagger";

type WhyDavanData = {
  heading: string;
  headingHighlightText: string;
  subheading: string;

  backgroundImage: string;

  tag: {
    variant: "title" | "tag";
    number: string;
    text: string;
    highlightTextBoolean?: boolean;
  }[];

  buttons: {
    href: string;
    text: string;
    variant: "primary" | "outline";
  }[];

  cardItems: {
    numberCard: string;
    titleCard: string;
    descriptionCard: string;
  }[];
};

type WhyDavanSectionProps = {
  whyDavanData: WhyDavanData;
};

export default function WhyDavanSection({
  whyDavanData,
}: WhyDavanSectionProps) {
  return (
    <section id="why-davan" className="relative w-full py-24">
      <Image
        src={whyDavanData.backgroundImage}
        alt=""
        width={1920}
        height={1080}
        priority
        className="absolute inset-0 h-full w-full object-cover object-[40%_center] md:object-center"
      />

      <div className="absolute inset-0 bg-dark/10" />

      <div className="relative z-10 w-full px-5 md:px-16 lg:px-24 xl:px-32">
        <div className="flex flex-col gap-4">
          <BubbleTag
            variant={whyDavanData.tag[0]?.variant}
            number={whyDavanData.tag[0]?.number}
            items={[
              {
                text: whyDavanData.tag[0]?.text ?? "",
              },
            ]}
          />

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <TextSlideIn>
              {renderHighlightedText(
                whyDavanData.heading,
                whyDavanData.headingHighlightText
              )}
            </TextSlideIn>

            <div className="flex flex-col gap-4 items-start justify-center max-w-sm">
              <TextStagger
                text={whyDavanData.subheading}
                delay={0.3}
                staggerSpeed={0.03}
                className="text-xs leading-normal tracking-wide"
              />

              <WhiteLabelButton
                variant={whyDavanData.buttons[0]?.variant}
                animated={true}
                href={whyDavanData.buttons[0]?.href}
              >
                {whyDavanData.buttons[0]?.text}
              </WhiteLabelButton>
            </div>
          </div>

          <div className="mt-12">
            <CardWithNumber cards={whyDavanData.cardItems} />
          </div>
        </div>
      </div>
    </section>
  );
}