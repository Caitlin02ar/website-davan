"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface RunningLogoProps {
  logos: {
    src: string;
    clientName?: string;
  }[];
  duration?: number;
  gap?: string;
}

export default function RunningLogo({
  logos,
  duration = 30,
  gap = "gap-16",
}: RunningLogoProps) {
  const safeLogos = logos.filter((logo) => logo?.src);

  const half = Math.ceil(safeLogos.length / 2);
  const topLogos = safeLogos.slice(0, half);
  const bottomLogos = safeLogos.slice(half);

  const topLoop = [...topLogos, ...topLogos, ...topLogos, ...topLogos];
  const bottomLoop = [...bottomLogos, ...bottomLogos, ...bottomLogos, ...bottomLogos];

  const renderRow = (
    row: typeof safeLogos,
    keyframes: number[]
  ) => (
    <motion.div
      className={`flex items-center ${gap} w-max`}
      animate={{ x: keyframes }}
      transition={{ duration, ease: "linear", repeat: Infinity }}
    >
      {row.map((logo, index) => (
        <div
          key={index}
          className="relative h-20 w-[180px] flex-shrink-0"
        >
          <Image
            src={logo.src}
            alt={logo.clientName ? `${logo.clientName} logo` : ""}
            fill
            sizes="180px"
            loading="lazy"
            quality={75}
            className="object-contain"
          />
        </div>
      ))}
    </motion.div>
  );

  return (
    <section className="w-full overflow-hidden py-20 bg-transparent">
      <div className="mb-8 overflow-hidden">
        {renderRow(topLoop, [-1000, -200, -600, 0, -400])}
      </div>
      <div className="overflow-hidden">
        {renderRow(bottomLoop, [0, -800, -400, -1000, -600])}
      </div>
    </section>
  );
}