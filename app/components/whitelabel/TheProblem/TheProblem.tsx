import { renderHighlightedText } from "@/lib/highlightText";
import BubbleTag from "../Common/BubbleTag";
import ProblemCardSection from "./ProblemCardSection";
import TextSlideIn from "../Common/TextSlideIn";
import TextStagger from "../Common/TextStagger";

type TheProblemData = {
  titleSection: string;
  titleHighlight: string;
  subtitle: string;
  subtitleHighlight: string;
  tag: {
    variant: "title" | "tag";
    number: string;
    text: string;
    highlightTextBoolean?: boolean;
  }[];
  cardSection: {
    heading: string;
    headingHighlightText: string;
    description: string;
    icon: string;
    title: string;
  }[];
};

export default function TheProblemSection({
  problemData,
}: {
  problemData: TheProblemData;
}) {
  return (
    <section
      id="the-problem-section"
      className="relative min-h-screen w-full overflow-hidden"
    >
      <div className="absolute inset-0 bg-dark/10" />

      <div className="relative z-10 flex w-full items-center">
        <div className="w-full px-5 py-16 md:px-16 md:py-0 md:pt-24 lg:px-24 xl:px-32">
          <div className="w-full">
            <div className="flex w-full flex-col items-center justify-center gap-4">

              <BubbleTag
                variant={problemData.tag[0].variant}
                number={problemData.tag[0].number}
                items={[
                  {
                    text: problemData.tag[0].text,
                  },
                ]}
              />

              <TextSlideIn className="w-full text-center">
                <h1>
                  {renderHighlightedText(
                    problemData.titleSection,
                    problemData.titleHighlight
                  )}
                </h1>
              </TextSlideIn>

              <TextStagger
                text={problemData.subtitle}
                highlightText={problemData.subtitleHighlight}
                highlightClassName="text-primary font-bold"
                delay={0.3}
                staggerSpeed={0.03}
                className="max-w-2xl text-center text-sm leading-relaxed md:whitespace-nowrap"
              />
            </div>
          </div>
        </div>
      </div>

      <ProblemCardSection cards={problemData.cardSection} />
    </section>
  );
}