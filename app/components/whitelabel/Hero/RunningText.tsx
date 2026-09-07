"use client";

import { motion } from "framer-motion";

type RunningTextItem = {
  textBefore?: string;
  highlightText: string;
  textAfter?: string;
};

export default function RunningText({
  items,
}: {
  items: RunningTextItem[];
}) {
  const runningTextData = items.map((item, index) => ({
    id: String(index),

    parts: [
      ...(item.textBefore
        ? [
            {
              text: item.textBefore,
              highlight: false,
            },
          ]
        : []),

      {
        text: item.highlightText,
        highlight: true,
      },

      ...(item.textAfter
        ? [
            {
              text: item.textAfter,
              highlight: false,
            },
          ]
        : []),
    ],
  }));

  return (
    <section
      className="
        relative left-1/2
        w-screen
        -translate-x-1/2
        overflow-hidden
        py-8
      "
    >
      <motion.div
        className="flex w-max items-center"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <div className="flex shrink-0 items-center gap-16 px-8">
          {runningTextData.map((item) => (
            <div
              key={`first-${item.id}`}
              className="
                whitespace-nowrap
                font-heading
                text-xl md:text-xl
                uppercase
                tracking-wider
              "
            >
              {item.parts.map((part, pIdx) => (
                <span
                  key={pIdx}
                  className={
                    part.highlight
                      ? "font-extrabold text-white"
                      : "font-medium text-white/35"
                  }
                >
                  {part.text}
                </span>
              ))}
            </div>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-16 px-8">
          {runningTextData.map((item) => (
            <div
              key={`second-${item.id}`}
              className="
                whitespace-nowrap
                font-heading
                text-xl md:text-xl
                uppercase
                tracking-wider
              "
            >
              {item.parts.map((part, pIdx) => (
                <span
                  key={pIdx}
                  className={
                    part.highlight
                      ? "font-extrabold text-white"
                      : "font-medium text-white/35"
                  }
                >
                  {part.text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </motion.div>

      <div
        className="
          pointer-events-none
          absolute inset-y-0 left-0
          z-10
          w-28 md:w-36
          bg-gradient-to-r
          from-dark
          via-dark/80
          to-transparent
          backdrop-blur-[2px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute inset-y-0 right-0
          z-10
          w-28 md:w-36
          bg-gradient-to-l
          from-dark
          via-dark/80
          to-transparent
          backdrop-blur-[2px]
        "
      />
    </section>
  );
}