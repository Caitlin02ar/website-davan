"use client";

import { motion } from "framer-motion";
import Tag from "../common/Tag";
import HowItems from "./HowItems";
import { renderHighlightedText } from "@/lib/highlightText";

interface HowWeWorkProps {
  data: {
    tag: string;
    heading: string;
    hightlightText: string;

    contentHowWeWork: {
      title: string;
      description: string;

      image: {
        asset: {
          url: string;
        };
      };
    }[];
  };
}

export default function HowWeWork({
  data,
}: HowWeWorkProps) {

  return (
    <section
      id="review"
      className="
        px-5
        py-16
        overflow-x-hidden
        sm:px-8

        md:px-16

        lg:px-32
      "
    >

      <div className="flex flex-col items-start">

        {/* TAG */}
        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
        >
          <Tag text={data.tag} />
        </motion.div>

        {/* HEADING */}
        <motion.h2
          className="
            font-heading
            leading-tight

            text-2xl
            max-w-xs

            sm:text-3xl
            sm:max-w-lg

            md:text-4xl
            md:max-w-xl
          "
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
        >
          {renderHighlightedText(
            data.heading,
            data.hightlightText
          )}
        </motion.h2>

      </div>

      <HowItems
        data={data.contentHowWeWork}
      />

    </section>
  );
}