"use client";

import { motion } from "framer-motion";

interface HeroServicesProps {
  data: {
    title: string;
    subheading: string;
    backgroundImage: string;
  };
}

export default function HeroServices({
  data,
}: HeroServicesProps) {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <img
        src={data.backgroundImage}
        alt="Services Page Background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />

      <div
        className="
          relative
          z-10
          flex
          min-h-screen
          flex-col
          items-center
          justify-center
          px-6
          text-center
        "
      >
        <motion.h1
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            font-heading
            text-5xl
            sm:text-3xl
            md:text-5xl
            lg:text-6xl
            leading-none"
        >
          {data.title}
        </motion.h1>

        <motion.h4
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-4
            max-w-[90%]
            font-subheading
            text-md
            text-primary
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