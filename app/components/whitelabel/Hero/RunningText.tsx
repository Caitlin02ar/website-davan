"use client";

import { motion } from "framer-motion";

export default function RunningText() {
  const runningTextData = [
    {
      id: "1",
      parts: [
        { text: "UNDER ", highlight: false },
        { text: "YOUR NAME", highlight: true },
      ],
    },
    {
      id: "2",
      parts: [
        { text: "ZERO DAVAN ", highlight: false },
        { text: "FOOTPRINT", highlight: true },
      ],
    },
    {
      id: "3",
      parts: [
        { text: "INVISIBLE ", highlight: true },
        { text: "BY DESIGN", highlight: false },
      ],
    },
    {
      id: "4",
      parts: [
        { text: "DELIVERED BY ", highlight: false },
        { text: "DAVAN", highlight: true },
      ],
    },
  ];

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