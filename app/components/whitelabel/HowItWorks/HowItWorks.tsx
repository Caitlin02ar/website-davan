"use client";

import Image from "next/image";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import { renderHighlightedText } from "@/lib/highlightText";
import BubbleTag from "../Common/BubbleTag";
import StepComponent from "./StepComponent";
import TextSlideIn from "../Common/TextSlideIn";

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const howItWorksData = {
    image: {
      src: "/photos/whitelabel/how-it-works-bg.png",
      alt: "",
      width: 1920,
      height: 1080,
    },

    heading: "Four Steps. You Stay In Front The Whole Way",
    headingHighlightText: "Four Steps.",

    title: {
      variant: "title" as const,
      number: "05",
      text: "How it Works",
    },
  };

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative min-h-0 w-full md:min-h-[600vh]"
    >
      <div className="top-0 flex w-full flex-col justify-between md:sticky md:min-h-screen">
        <div className="absolute inset-0 -z-10">
          <Image
            src={howItWorksData.image.src}
            alt={howItWorksData.image.alt}
            width={howItWorksData.image.width}
            height={howItWorksData.image.height}
            priority
            className="h-full w-full object-cover object-[60%_center] md:object-center"
          />

          <div className="absolute inset-0 bg-dark/10" />
        </div>

        <div className="relative z-10 grid grid-rows-[auto_1fr] md:min-h-screen">
          <div className="flex flex-col items-center px-5 pt-16 md:px-16 md:pt-20 lg:px-24 xl:px-32">
            <div className="flex flex-col items-center gap-3">
              <BubbleTag
                variant={howItWorksData.title.variant}
                number={howItWorksData.title.number}
                items={[
                  {
                    text: howItWorksData.title.text,
                  },
                ]}
              />

              <div className="max-w-4xl">
                <TextSlideIn className="text-center">
                  {renderHighlightedText(
                    howItWorksData.heading,
                    howItWorksData.headingHighlightText
                  )}
                </TextSlideIn>
              </div>
            </div>
          </div>

          <StepComponent progress={scrollYProgress} />
        </div>
      </div>
    </section>
  );
}
