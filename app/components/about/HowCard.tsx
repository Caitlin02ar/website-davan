"use client";

import Image from "next/image";
import { sanityImage } from "@/lib/image";

interface HowCardProps {
  title: string;
  description: string;
  image: string;
  className?: string;
}

export default function HowCard({
  title,
  description,
  image,
  className = "",
}: HowCardProps) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-[24px]

        md:rounded-[28px]

        ${className}
      `}
    >
      <Image
        src={sanityImage(image, 1000)}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      {/* Content */}
      <div
        className="
          absolute
          bottom-5
          left-5
          z-10

          sm:bottom-6
          sm:left-6

          md:bottom-8
          md:left-8
        "
      >
        <h3
          className="
            font-heading
            text-white
            leading-none
            mb-2

            text-xl

            sm:text-2xl
          "
        >
          {title}
        </h3>

        <p
          className="
            font-body
            text-white
            leading-relaxed

            max-w-[260px]
            text-xs

            sm:max-w-sm
            sm:text-sm
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}