"use client";

import { motion } from "framer-motion";

import Tag from "../common/Tag";
import FourPillarItems from "./FourPillarItems";

import { renderHighlightedText } from "@/lib/highlightText";

export default function FourPillars({
  data,
}: {
  data: any;
}) {
  return (
    <section
      className="
        relative
        overflow-hidden

        px-4
        sm:px-6
        md:px-12
        lg:px-28

        py-10
        sm:py-14
        md:py-16
        lg:py-20
      "
    >
      {/* TOP LINE */}
      <motion.div
        initial={{
          width: 0,
          opacity: 0,
        }}
        whileInView={{
          width: "100%",
          opacity: 1,
        }}
        viewport={{
          once: true,
          amount: 0.35,
        }}
        transition={{
          duration: 1.6,
          ease: [0.22, 1, 0.36, 1],

          delay: 1.3,
        }}
        className="
          h-[1px]
          bg-gradient-to-r
          from-transparent
          via-white/80
          to-transparent

          mb-10
          sm:mb-14
          md:mb-20

          mx-auto
        "
      />

      {/* TAG + HEADING */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.35,
        }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
      >
        {/* TAG */}
        <motion.div
          variants={{
            hidden: {
              y: -40,
              opacity: 0,
            },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          className="
            flex
            justify-center
          "
        >
          <Tag text={data.tag} />
        </motion.div>

        {/* HEADING */}
        <motion.div
          variants={{
            hidden: {
              y: -70,
              opacity: 0,
            },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          className="
            text-center

            mb-10
            sm:mb-14
            md:mb-16

            flex
            flex-col
            items-center
          "
        >
          <h3
            className="
              font-heading

              text-2xl
              leading-[1.2]

              sm:text-3xl
              md:text-4xl

              mt-2

              max-w-[95%]
              sm:max-w-2xl
              md:max-w-xl
            "
          >
            {renderHighlightedText(
              data.title,
              data.highlight
            )}
          </h3>
        </motion.div>
      </motion.div>

      {/* ITEMS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              // card baru mulai setelah:
              // heading + garis selesai
              delayChildren: 2.7,

              // card satu selesai dulu baru next
              staggerChildren: 1,
            },
          },
        }}
      >
        <FourPillarItems items={data.card} />
      </motion.div>
    </section>
  );
}