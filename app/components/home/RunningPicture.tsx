"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PictureItem {
  src: string;
  alt?: string;
}

interface RunningPictureProps {
  items: PictureItem[];
}

const layouts = [
  "w-[220px] h-[320px]",
  "w-[280px] h-[260px]",
  "w-[220px] h-[380px]",
  "w-[180px] h-[260px]",
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
              className={`relative flex-shrink-0 overflow-hidden ${layout}`}
              suppressHydrationWarning
            >
              <Image
                src={item.src}
                alt={item.alt ?? "Client Picture"}
                fill
                quality={100}
                className="object-cover transition-transform duration-700"
                suppressHydrationWarning
              />
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}