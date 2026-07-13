"use client";

import { motion } from "framer-motion";

import Tag from "../common/Tag";
import MethodItems from "./MethodItems";
import { renderHighlightedText } from "@/lib/highlightText";

interface FourMethodProps {
  data: {
    tag: string;
    title: string;
    highlight: string;

    methodContent: {
      number: string;
      title: string;
      description: string;
    }[];
  };
}

export default function FourMethod({
  data,
}: FourMethodProps) {
  return (
    <section
      className="
        bg-background
        px-5
        py-20

        sm:px-8

        md:px-16
        md:py-24

        lg:px-28
      "
    >
      {/* TOP */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        transition={{
          duration: 1.6,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          flex
          flex-col
          items-start
        "
      >
        <Tag text={data.tag} />

        <h2
          className="
            mt-4
            max-w-full
            font-heading
            text-2xl
            leading-tight
            text-white

            sm:max-w-2xl
            sm:text-3xl

            md:text-5xl
          "
        >
          {renderHighlightedText(
            data.title,
            data.highlight
          )}
        </h2>
      </motion.div>

      {/* METHOD ITEMS */}
      <div className="mt-14 md:mt-16">
        <MethodItems
          items={data.methodContent}
        />
      </div>
    </section>
  );
}