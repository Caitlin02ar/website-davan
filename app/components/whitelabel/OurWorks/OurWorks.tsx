import { renderHighlightedText } from "@/lib/highlightText";

import BubbleTag from "../Common/BubbleTag";

import RunningLogo from "./RunningLogo";

import PortofolioAnimate from "./PortofolioAnimate";

import ChatBox from "./ChatBox";

import TextSlideIn from "../Common/TextSlideIn";

import TextStagger from "../Common/TextStagger";

type OurWorksData = {
  heading: string;
  headingHighlightText: string;
  description: string;
  logoCredentials: string;
  portfolioItems: {
    image: string;
  }[];
  tag: {
    variant: "title" | "tag";
    number: string;
    text: string;
    highlightTextBoolean?: boolean;
  }[];
  chatBox: {
    heading: string;
    subheading: string;
    title: string;
    description: string;
  };
};

type OurWorksSectionProps = {
  worksSectionData: OurWorksData;
};

export default function OurWorksSection({
  worksSectionData,
}: OurWorksSectionProps) {
  return (
    <section
      id="our-works"
      className="relative mb-0 min-h-screen w-full overflow-hidden"
    >
      <div className="absolute inset-0 bg-dark/10" />

      <div className="relative z-10 w-full">
        <div className="w-full px-5 pt-16 md:px-16 md:pt-24 lg:px-24 xl:px-32">
          <div className="flex flex-col gap-4">
            <BubbleTag
              variant={worksSectionData.tag[0].variant}
              number={worksSectionData.tag[0].number}
              items={[
                {
                  text: worksSectionData.tag[0].text,
                },
              ]}
            />

            <div className="flex w-full flex-col gap-6">
              <TextSlideIn>
                {renderHighlightedText(
                  worksSectionData.heading,
                  worksSectionData.headingHighlightText
                )}
              </TextSlideIn>

              <TextStagger
                text={worksSectionData.description}
                delay={0.3}
                staggerSpeed={0.025}
                className="max-w-3xl text-[12px] md:whitespace-nowrap"
              />
            </div>
          </div>
        </div>

        <RunningLogo src={worksSectionData.logoCredentials} />

        <PortofolioAnimate
          items={worksSectionData.portfolioItems}
        />

        <ChatBox
          title={worksSectionData.chatBox.heading}
          subheading={worksSectionData.chatBox.subheading}
          subtitle={worksSectionData.chatBox.title}
          description={worksSectionData.chatBox.description}
        />
      </div>
    </section>
  );
}