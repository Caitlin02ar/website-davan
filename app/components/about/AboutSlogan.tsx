"use client";

import { motion } from "framer-motion";
import { renderHighlightedText } from "@/lib/highlightText";
import { sanityImage } from "@/lib/image";
import Image from "next/image";

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
    <section className="overflow-hidden overflow-x-hidden ">
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">

        <Image
          src={sanityImage(data.backgroundImage, 1920)}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />

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
          <motion.h2
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
              amount: 1,
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
          </motion.h2>

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
              sm:text-sm

              md:max-w-2xl
              
            "
          >
            {data.description}
          </motion.p>
        </div>
      </div>
    </section>
  );
}