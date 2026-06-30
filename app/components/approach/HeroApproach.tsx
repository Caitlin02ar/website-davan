"use client";

import { motion } from "framer-motion";

interface HeroApproachProps {
  data: {
    title: string;
    subheading: string;
    backgroundImage: string;
  };
}

export default function HeroApproach({
    data,
}: HeroApproachProps) {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <img
        src={data.backgroundImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />

      <div
        className="
          relative
          z-10
          flex
          flex-col
          items-center
          justify-center
          text-center
          gap-4
          md:gap-6
          min-h-screen
          px-6
        "
      >
        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: -120 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            font-heading 
            text-4xl
            sm:text-5xl
            md:text-5xl
            lg:text-6xl
            text-white
          "
        >
          {data.title}
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.h4
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            font-subheading
            text-primary
            text-md
            sm:text-md
            md:text-md
            lg:text-md
          "
        >
          {data.subheading}
        </motion.h4>
      </div>
    </section>
  );
}