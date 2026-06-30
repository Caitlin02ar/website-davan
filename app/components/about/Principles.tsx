"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

import Tag from "../common/Tag";
import PrinciplesItems from "./PrinciplesItems";

import { renderHighlightedText } from "@/lib/highlightText";

const ease = [0.22, 1, 0.36, 1] as const;

interface PrinciplesProps {
  data: {
    tag: string;
    heading: string;
    hightlightText: string;

    contentPrinciples: {
      title: string;
      description: string;

      icon: {
        asset: {
          url: string;
        };
      };
    }[];
  };
}

export default function Principles({
  data,
}: PrinciplesProps) {

  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  return (
    <section
      id="four-anchors"
      ref={ref}
      className="
        flex
        flex-col
        gap-16
        overflow-hidden

        px-6
        py-24

        sm:px-10

        lg:flex-row
        lg:px-32
        lg:py-34
      "
    >

      {/* LEFT */}
      <motion.div
        initial={{
          opacity: 0,
          x: -120,
        }}
        animate={
          inView
            ? {
                opacity: 1,
                x: 0,
              }
            : {
                opacity: 0,
                x: -120,
              }
        }
        transition={{
          duration: 1,
          ease,
        }}
        className="
          flex
          shrink-0
          flex-col
          items-start
        "
      >

        <Tag text={data.tag} />

        <h1
          className="
            mt-4
            max-w-sm
            font-heading
            leading-tight
            text-4xl
          "
        >
          {renderHighlightedText(
            data.heading,
            data.hightlightText
          )}
        </h1>

      </motion.div>

      {/* RIGHT */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={
          inView
            ? {
                opacity: 1,
              }
            : {
                opacity: 0,
              }
        }
        transition={{
          delay: 1,
          duration: 0.6,
          ease,
        }}
        className="w-full"
      >

        <PrinciplesItems
          shouldAnimate={inView}
          data={data.contentPrinciples}
        />

      </motion.div>

    </section>
  );
}