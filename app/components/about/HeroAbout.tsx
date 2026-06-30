"use client";

import { motion } from "framer-motion";
import { renderHighlightedText } from "@/lib/highlightText";

const ease = [0.22, 1, 0.36, 1] as const;

interface HeroAboutProps {
  data: {
    title: string;
    highlightText: string;
    description: string;
    aboutSlogan: string;
    highlightSlogan:string;
    backgroundImage: string;
  };
}

export default function HeroAbout({
  data,
}: HeroAboutProps) {
  return (
    <section className="relative h-[180vh] overflow-hidden">
      <img
        src={data.backgroundImage}
        alt=""
        className="
          h-full
          w-full
          object-cover
          object-[center_center]
          lg:object-[center_-600px]
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />

      {/* Bottom Gradient */}
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

      <div className="absolute inset-0">
        {/* HERO SECTION */}
        <div
          className="
            min-h-screen
            flex
            flex-col
            items-center
            justify-center
            text-center
            px-6
          "
        >
          {/* HEADING */}
          <motion.h1
            initial={{
              opacity: 0,
              y: -100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease,
            }}
            className="
              font-heading
              text-4xl
              sm:text-5xl
              lg:text-5xl
              max-w-4xl
              leading-tight
            "
          >
            {/* <span className="text-primary">Integrated </span>
            <span className="text-white">creative thinkers</span> */}
            {renderHighlightedText(data.title, data.highlightText)}
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{
              opacity: 0,
              y: -60,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.7,
              ease,
            }}
            className="
              font-body
              text-xs
              sm:text-sm
              text-white
              max-w-2xl
              mt-4
              leading-relaxed
              px-2
            "
          >
            {data.description}
          </motion.p>
        </div>

        {/* SECOND SECTION */}
        <div className="min-h-screen flex items-center justify-center px-6">
          <motion.h1
            initial={{
              opacity: 0,
              y: -100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            className="
              font-subheading
              text-center
              max-w-3xl
              text-2xl
              sm:text-3xl
              lg:text-3xl
              leading-relaxed
            "
          >
            {renderHighlightedText(data.aboutSlogan, data.highlightSlogan)}
          </motion.h1>
        </div>
      </div>
    </section>
  );
}