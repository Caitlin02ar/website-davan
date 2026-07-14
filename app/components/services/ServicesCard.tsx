"use client";

import Image from "next/image";

interface ServicesCardProps {
  subtitle: string;
  title: string;
  description: string;
  tag: string[];
  backgroundImage?: string;

  width?: string;
  priority?: boolean;
}

export default function ServicesCard({
  subtitle,
  title,
  description,
  tag,
  backgroundImage,

  width = "w-full lg:w-[75%]",
  priority = false,
}: ServicesCardProps) {
  return (
    <div
      className={`
        relative
        overflow-hidden

        rounded-[28px]

        ${width}

        px-6
        py-10

        sm:px-8
        sm:py-12

        flex
        flex-col

        min-h-[420px]

        sm:min-h-[500px]

        bg-dark
      `}
    >

      {/* BACKGROUND */}
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority={priority}
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 92vw, 41vw"
          className="object-cover object-center"
        />
      )}

      <div className="relative z-10 flex flex-col justify-center h-full">

        <span
          className="
            text-xs
            sm:text-sm

            uppercase

            tracking-[0.18em]

            text-white
            font-medium
          "
        >
          {subtitle}
        </span>

        {/* TITLE */}
        <h3
          className="
            mt-3

            font-heading
            text-primary

            text-2xl
            sm:text-2xl

            leading-[0.93]

            tracking-[-0.01em]

            max-w-[260px]
          "
        >
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p
          className="
            mt-4
            text-sm
            sm:text-sm

            leading-relaxed

            text-white

            max-w-[320px]
          "
        >
          {description}
        </p>

        {/* TAGS */}
        <div className="pt-5 flex flex-wrap gap-[7px]">

          {tag?.map((item, index) => (

            <span
              key={index}
              className="
                inline-block

                px-3
                py-1.5

                rounded-full

                border
                border-white/15

                bg-white/5

                text-[11px]
                sm:text-xs

                text-white/70

                whitespace-nowrap

                backdrop-blur-sm
              "
            >
              {item}
            </span>

          ))}

        </div>

      </div>

    </div>
  );
}