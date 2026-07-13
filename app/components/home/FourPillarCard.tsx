"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { sanityImage } from "@/lib/image";

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // matchMedia tidak memicu forced reflow, berbeda dengan window.innerWidth
    // yang memaksa browser menghitung ulang layout setiap kali dibaca.
    const mq = window.matchMedia("(max-width: 1023px)");

    setIsMobile(mq.matches);

    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);

    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <motion.div
      variants={{
        hidden: {
          y: isMobile ? 40 : 120,
          opacity: 0,
        },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: isMobile ? 0.5 : 1.15,
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
        group
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
      <div className="relative overflow-hidden rounded-[22px] h-[160px] sm:h-[200px] md:h-[210px] lg:h-[260px]">
        <Image
          src={sanityImage(image, 640, 520)}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
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
            text-md
            sm:text-md
            md:text-md
            lg:text-md
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
            group-hover:font-medium
          "
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}