"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { renderHighlightedText } from "@/lib/highlightText";
import { sanityImage } from "@/lib/image";

interface ServicesBannerProps {
  data: {
    heading: string;
    highlightHeading: string;
    description: string;
    backgroundImage: string;
  };
}

export default function ServicesSlogan({
  data,
}: ServicesBannerProps) {
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <div className="relative w-full overflow-hidden h-[420px] sm:h-[500px] md:h-[600px]">
      <Image
        src={sanityImage(data.backgroundImage, 1920)}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/35" />

      {/* CONTENT */}
      <div
        className="
          absolute
          inset-0
          flex
          flex-col
          items-center
          justify-center
          px-5
          text-center

          sm:px-8

          md:px-12
        "
      >
        {/* HEADING */}
        <motion.h1
          initial={{
            opacity: 0,
            y: -120,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 1.2,
            ease,
          }}
          className="
            font-heading
            max-w-[95%]
            text-2xl
            leading-tight

            sm:max-w-3xl
            sm:text-4xl

            md:max-w-4xl
            md:text-5xl
          "
        >
          {renderHighlightedText(
            data.heading,
            data.highlightHeading
          )}
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
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.9,
            delay: 0.8,
            ease,
          }}
          className="
            font-body
            mt-4
            max-w-[95%]
            text-xs
            leading-relaxed
            text-white

            sm:mt-5
            sm:max-w-2xl
            sm:text-sm

            md:mt-6
            md:max-w-3xl
            md:text-md
          "
        >
          {data.description}
        </motion.p>
      </div>
    </div>
  );
}