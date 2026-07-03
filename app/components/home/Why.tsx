"use client";

import { motion } from "framer-motion";
import CardHome from "./CardHome";
import { renderHighlightedText } from "@/lib/highlightText";

export default function Why({
  data,
}: {
  data: any;
}) {
  const ease = [0.22, 1, 0.36, 1] as const;

  const viewportSettings = {
    once: true,
    amount: 0.35,
  };

  return (
    <section
      id="why-davan"
      className="
        overflow-hidden
        px-5
        py-16
        sm:px-6
        md:px-12
        lg:px-28
      "
    >
      <div
        className="
          flex
          flex-col
          items-start
          justify-between
          gap-12
          md:gap-14
          lg:flex-row
          lg:items-center
          lg:gap-20
        "
      >
        {/* LEFT CONTENT */}
        <div
          className="
            left-content
            flex
            w-full
            flex-col
            items-center
            gap-4
            text-center

            lg:max-w-md
            lg:items-start
            lg:text-left
          "
        >
          {/* HEADING */}
          <motion.h3
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1.2,
              ease,
            }}
            viewport={viewportSettings}
            className="
              font-heading
              max-w-full
              text-2xl
              leading-tight

              sm:max-w-xs
              sm:text-3xl

              md:max-w-sm
              md:text-4xl

              lg:max-w-none
            "
          >
            {renderHighlightedText(data.title, data.highlight)}
          </motion.h3>

          <motion.p
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1.2,
              delay: 1.25,
              ease,
            }}
            viewport={viewportSettings}
            className="
              font-body
              max-w-full
              text-sm
              font-light
              leading-relaxed
              text-white

              sm:max-w-sm
              sm:text-md

              lg:max-w-none
            "
          >
            {data.description}
          </motion.p>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            x: 120,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1.4,
            delay: 2.6,
            ease,
          }}
          viewport={viewportSettings}
          className="
            right-content
            w-full
            lg:pt-4"
        >
          <CardHome cards={data.cards} />
        </motion.div>
      </div>
    </section>
  );
}