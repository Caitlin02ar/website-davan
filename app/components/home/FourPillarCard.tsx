"use client";

import { motion } from "framer-motion";

interface FourPillarCardProps {
  number: string;
  title: string;
  description: string;
  image: string;
  index: number;
}

export default function FourPillarCard({
  number,
  title,
  description,
  image,
}: FourPillarCardProps) {
  return (
    <motion.div
      variants={{
        hidden: {
          y: 120,
          opacity: 0,
        },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 1.15,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      whileHover={{
        scale: 1.04,
        transition: {
          duration: 0.25,
          ease: "easeOut",
        },
      }}
      className="
        relative
        origin-top
        hover:z-30
        bg-[#0E0E0E]
        border border-white/10
        rounded-[28px]
        p-4
        cursor-pointer
        
        transition-[border-color,box-shadow]
        duration-300
        hover:border-white/20
      "
    >
      {/* IMAGE CONTAINER */}
      <div className="overflow-hidden rounded-[22px]">
        <img
          src={image}
          alt={title}
          className="w-full h-[180px] sm:h-[220px] md:h-[220px] lg:h-[280px] object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="pt-4 sm:pt-5 md:pt-6 px-2 pb-3 md:pb-4">
        <span className="text-xs sm:text-sm uppercase tracking-wider text-white">
          {number}
        </span>

        <h3
          className="
            mt-2
            text-primary
            font-heading
            text-lg
            sm:text-xl
            md:text-xl
            leading-tight
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-3
            sm:mt-4
            text-white
            text-xs
            sm:text-sm
            leading-relaxed
            max-w-[220px]
            font-light
            hover:font-medium
          "
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}