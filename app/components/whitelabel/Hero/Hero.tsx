"use client";

import { motion } from "framer-motion";

import BubbleTag from "../Common/BubbleTag";
import Image from "next/image";
import Button from "../Common/Button";
import { renderMultiHighlight } from "@/lib/renderMultiHighlight";
import CountDownCard from "./CountDownCard";
import RunningText from "./RunningText";
import TextSlideIn from "../Common/TextSlideIn";
import GlowWord from "../Common/GlowWord";
import TextStagger from "../Common/TextStagger";

type HeroData = {
  backgroundImage: string;

  tag: {
    variant: "tag" | "title";
    text: string;
    highlightTextBoolean?: boolean;
    textHighlight?: string;
    number?: number;
  }[];

  heading: {
    text: string;
    style?: "normal" | "highlight" | "glow" | "muted";
  }[];

  description: string;

  buttons: {
    text: string;
    variant: "primary" | "outline";
    animated?: boolean;
    href?: string;
  }[];

  countdownItems: {
    value: number;
    description: string;
    suffix?: string;
  }[];

  runningTextItems: {
    textBefore?: string;
    highlightText: string;
    textAfter?: string;
  }[];
};

export default function HeroSection({
  heroData,
}: {
  heroData: HeroData;
}) {
  const descriptionWords = heroData.description.split(" ");

  const cmsTag = heroData.tag?.[0];

  const tagItems = cmsTag
    ? (() => {
        const text = cmsTag.text || "";
        const highlight = cmsTag.textHighlight || "";

        if (
          cmsTag.highlightTextBoolean &&
          highlight &&
          text.includes(highlight)
        ) {
          const parts = text.split(highlight);

          return [
            ...(parts[0]
              ? [
                  {
                    text: parts[0],
                    highlight: false,
                  },
                ]
              : []),
            {
              text: highlight,
              highlight: true,
            },
            ...(parts[1]
              ? [
                  {
                    text: parts[1],
                    highlight: false,
                  },
                ]
              : []),
          ];
        }

        return [
          {
            text,
            highlight: false,
          },
        ];
      })()
    : [];

  const tagData = {
    variant: cmsTag?.variant || "tag",
    items: tagItems,
  };

  const headingText = heroData.heading
    .map((item) => item.text)
    .join(" ");

  const headingHighlights = heroData.heading.map((item) => {
    if (item.style === "highlight") {
      return {
        text: item.text,
        className: "text-primary",
      };
    }

    if (item.style === "glow") {
      return {
        text: item.text,
        render: (text: string) => (
          <GlowWord className="text-[#52585C]">{text}</GlowWord>
        ),
      };
    }

    if (item.style === "muted") {
      return {
        text: item.text,
        className: "text-white/50",
      };
    }

    return {
      text: item.text,
    };
  });


const countdownItems = heroData.countdownItems.map((item, index) => ({
  number: item.value,
  start: index === 0 ? 10 : index === 1 ? 1 : 0,
  title: item.description,
  direction: (index === 0 ? "up" : "left") as "up" | "left",
  suffix: item.suffix,
}));

  const runningTextItems = heroData.runningTextItems.map((item, index) => ({
  id: String(index + 1),
  textBefore: item.textBefore,
  highlightText: item.highlightText,
  textAfter: item.textAfter,
}));

  return (
    <section
      id="hero-section"
      className="relative mt-24 min-h-screen w-full overflow-hidden bg-dark md:mt-32"
    >
      <Image
        src={heroData.backgroundImage}
        alt="White Label Delivery"
        width={1920}
        height={1080}
        priority
        className="absolute inset-0 h-full w-full object-cover object-[75%_center] md:object-center"
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-dark via-black/60 to-transparent md:h-96" />

      <div className="absolute inset-0 bg-dark/30" />

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="w-full px-5 py-12 md:px-16 md:py-0 lg:px-24 xl:px-32">
          <div className="max-w-3xl">
            <motion.div
              className="mb-8"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <BubbleTag
                variant={tagData.variant as "tag" | "title"}
                items={tagData.items}
              />
            </motion.div>

            <div className="max-w-2xl overflow-hidden">
              <TextSlideIn className="font-heading text-white leading-normal">
                <h1>
                  {renderMultiHighlight(
                    headingText,
                    headingHighlights
                  )}
                </h1>
              </TextSlideIn>
            </div>

            <TextStagger
              text={heroData.description}
              delay={0.3}
              staggerSpeed={0.025}
            />

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-4"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 2.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {heroData.buttons.map((button) => (
                <Button
                  key={button.text}
                  variant={button.variant}
                  animated={button.animated}
                  href={button.href}
                >
                  {button.text}
                </Button>
              ))}
            </motion.div>
          </div>

          <CountDownCard items={countdownItems} />
          <RunningText items={runningTextItems} />
        </div>
      </div>
    </section>
  );
}