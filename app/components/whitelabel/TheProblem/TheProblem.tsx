import Image from "next/image";
import { renderHighlightedText } from "@/lib/highlightText";
import BubbleTag from "../Common/BubbleTag";
import ProblemCardSection from "./ProblemCardSection";
import TextSlideIn from "../Common/TextSlideIn";
import TextStagger from "../Common/TextStagger";

export default function TheProblemSection() {
  const problems = {
    image: {
      src: "/photos/whitelabel/the-problem-bg.png",
      alt: "",
      width: 1920,
      height: 1080,
    },
    heading:
      "You win the brief. Then the build becomes the problem.",
    highlightText: "the problem.",
    subheading:
      "It is not a quality problem. It is a capacity problem, and it is the part we take.",
    subheadingHighlightText: "it is the part we take.",
    title:{
      variant:"title" as const,
      number:"01",
      text:"The Problem",
      highlight:true
    }
  };

  return (
    <section
      id="the-problem-section"
      className="relative min-h-screen w-full overflow-hidden"
    >
      <div className="absolute inset-0 bg-dark/10" />

      <div className="relative z-10 flex w-full items-center">
        <div className="w-full px-8 md:px-16 md:pt-24 lg:px-24 xl:px-32">

          <div className="w-full">
            <div className="flex w-full flex-col gap-4 items-center justify-center">
              
              <BubbleTag
                variant={problems.title.variant}
                number={problems.title.number}
                items={[
                  {
                    text: problems.title.text,
                  },
                ]}
              />

              <TextSlideIn className="w-full text-center">
                <h1>
                  {renderHighlightedText(
                    problems.heading,
                    problems.highlightText
                  )}
                </h1>
              </TextSlideIn>

              <TextStagger
              text={problems.subheading}
              highlightText={problems.subheadingHighlightText}
              highlightClassName="text-primary font-bold"
              delay={0.3}
              staggerSpeed={0.03}
              className="max-w-2xl text-sm md:text-sm leading-relaxed text-center whitespace-nowrap"
            />
            </div>
          </div>
        </div>
      </div>
       <ProblemCardSection />
    </section>
  );
}