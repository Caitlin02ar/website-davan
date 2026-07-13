"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { renderHighlightedText } from "@/lib/highlightText";

const ease = [0.22, 1, 0.36, 1] as const;

interface HeroAboutProps {
  data: {
    title: string;
    highlightText: string;
    description: string;
    aboutSlogan: string;
    highlightSlogan: string;
    backgroundImage: string;
  };
}

export default function HeroAbout({
  data,
}: HeroAboutProps) {
  return (
    <section className="relative h-[180vh] overflow-hidden">
      {/* Background */}
      <motion.div
        initial={{
          scale: 1.08,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1.8,
          ease,
        }}
        className="absolute inset-0"
      >
        <Image
          src={data.backgroundImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-center
            lg:object-[center_-600px]
          "
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />

      {/* Bottom Gradient */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-[180px]
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
              y: -140,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1.3,
              ease,
            }}
            className="
              font-heading
              text-3xl
              sm:text-5xl
              lg:text-6xl
              max-w-5xl
              leading-tight
            "
          >
            {renderHighlightedText(data.title, data.highlightText)}
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{
              opacity: 0,
              y: -50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 1.2,
              ease,
            }}
            className="
              font-body
              text-xs
              sm:text-xs
              md:text-sm
              text-white/90
              max-w-2xl
              mt-6
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
              filter: "blur(8px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1.1,
              ease,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            className="
              font-subheading
              text-center
              max-w-4xl
              text-2xl
              sm:text-3xl
              lg:text-4xl
              leading-relaxed
            "
          >
            {renderHighlightedText(
              data.aboutSlogan,
              data.highlightSlogan
            )}
          </motion.h1>
        </div>
      </div>
    </section>
  );
}
