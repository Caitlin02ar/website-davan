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

  return (
    <section
      id="why-davan"
      className="
        overflow-hidden
        px-5
        py-20
        sm:px-6
        md:px-12
        md:py-24
        lg:px-28
        lg:py-28
      "
    >
      <div
        className="
          flex
          flex-col
          items-start
          justify-center
          gap-12
          md:gap-14
          lg:flex-row
          lg:items-center
          lg:gap-20
        "
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1.4,
            ease,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          className="
            left-content
            flex
            w-full
            flex-col
            items-center
            justify-center
            gap-4
            text-center

            lg:items-start
            lg:text-left
            lg:max-w-md
          "
        >
          <h3
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
          </h3>

          <p
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
          </p>
        </motion.div>

        {/* RIGHT CONTENT */}
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
            delay: 0.8,
            ease,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          className="right-content w-full"
        >
          <CardHome cards={data.cards} />
        </motion.div>
      </div>
    </section>
  );
}