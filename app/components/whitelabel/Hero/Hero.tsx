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

const heroData = {
  image: {
    src: "/photos/whitelabel/hero-bg-whitelabel.png",
    alt: "White Label Delivery",
    width: 1920,
    height: 1080,
  },

  tag: {
    variant: "tag" as const,
    items: [
      { text: "White Label Delivery" },
      { text: " / " },
      { text: "Perth, Australia", highlight: true },
    ],
  },

  heading: "Your Name  On The Work Ours Nowhere On It.",
  headingHighlights: [
    { text: "Your Name", className: "text-primary" },
    {
      text: "Ours",
      render: (text: string) => (
        <GlowWord className="text-[#52585C]">{text}</GlowWord>
      ),
    },
    { text: " Nowhere On It.", className: "text-white/50" },
  ],

  description:
    "DAVAN is the delivery team behind boutique studios and agencies. We design and build the websites, automation, and content your studio wins, inside your brand and to your standards. Your client never hears our name.",

  buttons: [
    {
      text: "Request the Rate Card",
      variant: "outline" as const,
      animated: true,
      href: "#the-pricing",
    },
    {
      text: "See what you can hand over",
      variant: "primary" as const,
      animated: true,
      href: "#what-we-deliver",
    },
  ],
};

export default function HeroSection() {
  const descriptionWords = heroData.description.split(" ");

  return (
    <section
      id="hero-section"
      className="relative mt-24 min-h-screen w-full overflow-hidden bg-dark md:mt-32"
    >
      <Image
        src={heroData.image.src}
        alt={heroData.image.alt}
        width={heroData.image.width}
        height={heroData.image.height}
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
                variant={heroData.tag.variant}
                items={heroData.tag.items}
              />
            </motion.div>

            <div className="max-w-2xl overflow-hidden">
              <TextSlideIn className="font-heading text-white leading-normal">
                <h1>{renderMultiHighlight(heroData.heading, heroData.headingHighlights)}</h1>
              </TextSlideIn>
            </div>

            <TextStagger text={heroData.description} delay={0.3}
              staggerSpeed={0.025}/>
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
          <CountDownCard />
          <RunningText />
        </div>
      </div>
    </section>
  );
}
