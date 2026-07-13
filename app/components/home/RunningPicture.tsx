"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { sanityImage } from "@/lib/image"; 

interface PictureItem {
  src: string;
  alt?: string;
}

interface RunningPictureProps {
  items: PictureItem[];
}

const layouts = [
  { className: "w-[220px] h-[320px]", w: 220, h: 320 },
  { className: "w-[280px] h-[260px]", w: 280, h: 260 },
  { className: "w-[220px] h-[380px]", w: 220, h: 380 },
  { className: "w-[180px] h-[260px]", w: 180, h: 260 },
];

export default function RunningPicture({
  items,
}: RunningPictureProps) {
  const loopItems = [...items, ...items, ...items];

  return (
    <section className="w-full overflow-hidden py-20">
      <motion.div
        className="flex items-center gap-4 w-max"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {loopItems.map((item, index) => {
          const layout = layouts[index % layouts.length];

          return (
            <div
              key={index}
              className={`relative flex-shrink-0 overflow-hidden ${layout.className}`}
            >
              <Image
                src={sanityImage(item.src, layout.w * 2, layout.h * 2, 90)}
                alt={item.alt ?? ""}
                fill
                sizes={`${layout.w}px`}
                loading="lazy"
                quality={90}
                className="object-cover transition-transform duration-700"
              />
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}