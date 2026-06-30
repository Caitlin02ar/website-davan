"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface MethodItemsProps {
  items: {
    number: string;
    title: string;
    description: string;
  }[];
}

function MethodRow({
  item,
  index,
}: {
  item: MethodItemsProps["items"][0];
  index: number;
}) {

  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <div
      ref={ref}
      className="
        relative
        flex
        flex-col
        gap-6
        py-10

        md:flex-row
        md:items-center
        md:justify-between
        md:gap-0
        md:py-16
      "
    >

      {/* LINE */}
      {index !== 0 && (
        <motion.div
          className="
            absolute
            left-0
            top-0
            h-px
            w-full
            bg-gradient-to-r
            from-transparent
            via-white/40
            to-transparent
          "
          initial={{ opacity: 0 }}
          animate={
            isInView
              ? { opacity: 1 }
              : { opacity: 0 }
          }
          transition={{
            duration: 0.4,
            delay: 0,
          }}
        />
      )}

      {/* NUMBER */}
      <motion.div
        className="
          w-full

          md:w-1/2
        "
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={
          isInView
            ? {
                opacity: 1,
                y: 0,
              }
            : {
                opacity: 0,
                y: -100,
              }
        }
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 0.3,
        }}
      >
        <h1
          className="
            font-subheading
            text-[4rem]
            leading-none
            text-primary

            sm:text-[5rem]

            md:text-[6rem]
          "
        >
          {item.number}
        </h1>
      </motion.div>

      {/* CONTENT */}
      <motion.div
        className="
          w-full

          md:w-1/2
          md:max-w-xl
        "
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={
          isInView
            ? {
                opacity: 1,
                y: 0,
              }
            : {
                opacity: 0,
                y: -100,
              }
        }
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 0.45,
        }}
      >

        <h2
          className="
            mb-3
            font-heading
            text-2xl
            leading-tight
            text-white

            sm:text-3xl
          "
        >
          {item.title}
        </h2>

        <p
          className="
            font-body
            text-sm
            font-light
            leading-relaxed
            text-white
          "
        >
          {item.description}
        </p>

      </motion.div>
    </div>
  );
}

export default function MethodItems({
  items,
}: MethodItemsProps) {

  return (
    <section className="w-full bg-background">

      {items.map((item, index) => (
        <MethodRow
          key={index}
          item={item}
          index={index}
        />
      ))}

      {/* BOTTOM LINE */}
      <div
        className="
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-white/40
          to-transparent
        "
      />

    </section>
  );
}