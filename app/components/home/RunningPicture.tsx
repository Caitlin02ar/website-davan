"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PictureItem {
  src: string;
  alt: string;
  width?: string;
  height?: string;
}

interface RunningPictureProps {
  items?: PictureItem[];
  duration?: number;
  gap?: string;
}

export default function RunningPicture({
  items,
  duration = 25,
  gap = "gap-4",
}: RunningPictureProps) {
  const PictureItems: PictureItem[] = items || [
    {
      src: "/photos/services-bg.webp",
      alt: "picture-1",
      width: "w-[220px]",
      height: "h-[320px]",
    },
    {
      src: "/photos/client-1.webp",
      alt: "picture-2",
      width: "w-[280px]",
      height: "h-[260px]",
    },
    {
      src: "/photos/client-2.webp",
      alt: "picture-3",
      width: "w-[220px]",
      height: "h-[380px]",
    },
    {
      src: "/photos/client-3.webp",
      alt: "picture-4",
      width: "w-[180px]",
      height: "h-[260px]",
    },
  ];

  const duplicatedItems = [...PictureItems, ...PictureItems];

  return (
    <section className="w-full overflow-hidden py-20">
      <motion.div
        className={`flex items-center ${gap} w-max`}
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className={`
              relative
              flex-shrink-0
              overflow-hidden
              ${item.width}
              ${item.height}
            `}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              quality={100}
              priority={index < 4}
              className="object-cover"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}