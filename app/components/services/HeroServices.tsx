"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { sanityImage } from "@/lib/image";

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

      {/* BACKGROUND */}
      <Image
        src={sanityImage(data.backgroundImage, 1920)}
        alt=""
        fill
        fetchPriority="high"
        sizes="100vw"
        className="object-cover"
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
          sm:px-8
          md:px-12

          text-center
        "
      >

        {/* LCP element — opacity dimulai dari 0.1, bukan 0. */}
        <motion.h1
          initial={{ opacity: 0.1, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            font-heading
            leading-none

            text-4xl

            sm:text-5xl

            md:text-5xl

            lg:text-6xl
          "
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
            sm:max-w-xl
            lg:max-w-2xl

            font-subheading
            text-primary

            text-xs

            sm:text-base

            md:text-base

            lg:text-md

            leading-relaxed
          "
        >
          {data.subheading}
        </motion.h4>

      </div>
    </section>
  );
}