"use client";

import { motion } from "framer-motion";
import { renderHighlightedText } from "@/lib/highlightText";

const ease = [0.22, 1, 0.36, 1] as const;

interface AboutSloganProps {
  data: {
    heading: string;
    highlightHeading: string;
    description: string;
    backgroundImage: string;
  };
}

export default function AboutSlogan({ data }: AboutSloganProps) {
  return (
    <section className="overflow-hidden">
      <div className="relative w-full">

        {/* BACKGROUND IMAGE */}
        <img
          src={data.backgroundImage}
          alt=""
          className="
            w-full
            h-[420px]
            object-cover

            sm:h-[520px]
            md:h-auto
          "
        />

        {/* OVERLAY CONTENT */}
        <div
          className="
            absolute inset-0
            flex flex-col
            items-center
            justify-center
            text-center
            px-5

            sm:px-8
            md:px-10
          "
        >
          {/* HEADING */}
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
              font-heading
              text-white
              leading-tight

              text-2xl
              sm:text-4xl
              md:text-5xl
            "
          >
            {renderHighlightedText(data.heading, data.highlightHeading)}
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{
              opacity: 0,
              y: -60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.9,
              ease,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            className="
              font-body
              text-white
              mt-4

              max-w-xs
              text-xs
              leading-relaxed

              sm:max-w-lg
              sm:text-base

              md:max-w-3xl
            "
          >
            {data.description}
          </motion.p>
        </div>
      </div>
    </section>
  );
}