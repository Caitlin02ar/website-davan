"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Tag from "../common/Tag";
import { renderHighlightedText } from "@/lib/highlightText";

interface DescriptionContentProps {
  data: {
    tag: string;

    contentDescription: {
      title: string;
      highlightText: string;
      description: string;

      picture: {
        asset: {
          url: string;
        };
      };
    }[];
  };
}

export default function DescriptionContent({
  data,
}: DescriptionContentProps) {

  // CMS CONTENT + HARDCODE LAYOUT LOGIC
  const DescriptionContentItems =
    data.contentDescription.map((item, index) => ({
      title: item.title,
      highlightText: item.highlightText,
      description: item.description,

      image: item.picture.asset.url,

      // HARD CODE VISUAL LAYOUT
      imagePosition:
        index % 2 === 0
          ? ("right" as const)
          : ("left" as const),

      alignment:
        index % 2 === 0
          ? ("left" as const)
          : ("right" as const),

      mirrored:
        index % 2 === 0,
    }));

  return (
    <section className="overflow-hidden bg-background">
      {DescriptionContentItems.map(
        (item, index) => (
          <DescriptionBlock
            key={index}
            item={item}
            index={index}
            tag={data.tag}
          />
        )
      )}
    </section>
  );
}

function DescriptionBlock({
  item,
  index,
  tag,
}: {
  item: {
    title: string;
    highlightText: string;
    description: string;

    image: string;

    imagePosition: "left" | "right";
    alignment: "left" | "right";
    mirrored: boolean;
  };

  index: number;

  tag: string;
}) {

  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  // TAG ANIMATION
  const tagVariants = {
    hidden: {
      opacity: 0,
      x:
        item.imagePosition === "right"
          ? 200
          : -200,
    },

    visible: {
      opacity: 1,
      x: 0,

      transition: {
        duration: 0.6,
        type: "tween" as const,
        delay: 0.8,
      },
    },
  };

  // HEADING ANIMATION
  const headingVariants = {
    hidden: {
      opacity: 0,
      x:
        item.imagePosition === "right"
          ? 200
          : -200,
    },

    visible: {
      opacity: 1,
      x: 0,

      transition: {
        duration: 0.6,
        type: "tween" as const,
        delay: 0.8,
      },
    },
  };

  // DESCRIPTION ANIMATION
  const descriptionVariants = {
    hidden: {
      opacity: 0,
      x:
        item.imagePosition === "right"
          ? 200
          : -200,
    },

    visible: {
      opacity: 1,
      x: 0,

      transition: {
        duration: 0.6,
        type: "tween" as const,
        delay: 1.4,
      },
    },
  };

  return (
    <div
      id="the-gap"
      ref={ref}
      className={`
        relative
        flex
        flex-col
        overflow-hidden
        px-6
        sm:px-12

        lg:px-24

        ${
          index === 0
            ? "justify-center pt-12 sm:pt-16"
            : "min-h-[50vh] sm:min-h-screen justify-center"
        }
      `}
    >

      {/* TAG */}
      {index === 0 && (
        <motion.div
          className="
            mb-2
            flex
            flex-col
            items-start
            lg:mb-0
          "
          initial="hidden"
          animate={
            inView ? "visible" : "hidden"
          }
          variants={tagVariants}
        >
          <Tag text={tag} />
        </motion.div>
      )}

      {/* IMAGE — decorative only (alt=""), hidden on mobile where it has no room to bleed */}
      <motion.div
        initial={{
          opacity: 0,
          x:
            item.imagePosition === "right"
              ? 200
              : -200,
        }}
        animate={
          inView
            ? {
                opacity: 1,
                x: 0,
              }
            : {}
        }
        transition={{
          duration: 0.8,
          type: "tween",
        }}
        className={`
          pointer-events-none
          absolute
          top-1/2
          -translate-y-1/2

          hidden
          sm:block

          ${
            item.imagePosition === "right"
              ? "-right-32 sm:-right-40 lg:-right-48"
              : "-left-32 sm:-left-40 lg:-left-48"
          }
        `}
      >
        <Image
          src={item.image}
          alt=""
          width={700}
          height={700}
          sizes="(min-width: 1024px) 700px, 500px"
          className={`
            h-[400px]
            w-[400px]
            select-none
            object-contain

            sm:h-[500px]
            sm:w-[500px]

            lg:h-[700px]
            lg:w-[700px]

            ${
              item.mirrored
                ? "-scale-x-100"
                : ""
            }
          `}
        />
      </motion.div>

      {/* CONTENT — left-aligned on mobile; desktop keeps the alternating left/right alignment */}
      <div
        className={`
          relative
          z-10
          max-w-xl

          text-left

          ${
            item.alignment === "right"
              ? "sm:ml-auto sm:text-right"
              : "sm:text-left"
          }
        `}
      >

        {/* HEADING */}
        <motion.div
          initial="hidden"
          animate={
            inView ? "visible" : "hidden"
          }
          variants={headingVariants}
        >
          <h2
            className="
              mb-6
              font-heading
              text-2xl
              text-white

              sm:mb-8
              sm:text-3xl

              lg:text-4xl
            "
          >
            {renderHighlightedText(
              item.title,
              item.highlightText
            )}
          </h2>
        </motion.div>

        {/* DESCRIPTION */}
        <motion.p
          className="
            max-w-xl
            font-body
            text-sm
            leading-relaxed
            text-white
          "
          initial="hidden"
          animate={
            inView ? "visible" : "hidden"
          }
          variants={descriptionVariants}
        >
          {item.description}
        </motion.p>

      </div>
    </div>
  );
}
