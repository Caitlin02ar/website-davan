"use client";

import { motion } from "framer-motion";
import Button from "../common/Button";
import { renderHighlightedText } from "@/lib/highlightText";

type HeroData = {
  title: string;
  highlightText?: string;
  description: string;
  buttonText: string;
  backgroundImage: string;
};

interface HeroProps {
  data: HeroData;
}

export default function Hero({
  data,
}: HeroProps) {

  const {
    title,
    highlightText,
    description,
    buttonText,
    backgroundImage,
  } = data;

  return (
    <section className="relative min-h-screen overflow-hidden">

      <img
        src={backgroundImage}
        alt="Hero Background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 pointer-events-none" />
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-[500px]
          bg-gradient-to-b
          from-transparent
          via-background/70
          to-background
        "
      />

      <div
        className="
          relative
          z-10
          flex
          min-h-screen
          flex-col
          items-center
          justify-center
          gap-6
          px-6
          text-center
          md:px-10
        "
      >

        <motion.h1
          initial={{
            opacity: 0,
            y: -40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            font-heading
            max-w-3xl
            text-3xl
            leading-tight
            tracking-wide
            text-white
            sm:text-4xl
            md:text-5xl
          "
        >
          {renderHighlightedText(title, highlightText)}
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.h6
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            font-body
            mt-2
            max-w-xl
            text-xs
            leading-relaxed
            text-white/80
            sm:text-xs
            md:max-w-2xl
          "
        >
          {description}
        </motion.h6>

        {/* BUTTON */}
        <motion.div
          initial={{
            opacity: 0,
            y: 0,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 2,
            delay: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-2 flex flex-col items-center"
        >
          <Button theme="light">
            {buttonText}
          </Button>
        </motion.div>

      </div>
    </section>
  );
}