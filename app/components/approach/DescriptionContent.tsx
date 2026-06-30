"use client";

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
    amount: 0.25,
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
        duration: 0.8,
        type: "tween" as const,
        delay: 0.5,
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
        duration: 0.8,
        type: "tween" as const,
        delay: 0.5,
      },
    },
  };

  return (
    <div
      id="the-gap"
      ref={ref}
      className={`
        relative
        overflow-hidden

        min-h-[700px]

        px-5
        py-14

        sm:px-10
        sm:py-20

        lg:px-24

        ${
          index === 0
            ? "pt-10 sm:pt-14"
            : "min-h-screen flex items-center"
        }
      `}
    >
      {/* TAG */}
      {index === 0 && (
        <motion.div
          className="
            mb-8

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

      {/* MOBILE IMAGE */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 1.1,
        }}
        animate={
          inView
            ? {
                opacity: 1,
                scale: 1,
              }
            : {}
        }
        transition={{
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute

          inset-0

          overflow-hidden

          opacity-[0.18]

          pointer-events-none

          lg:hidden
        "
      >
        <img
          src={item.image}
          alt=""
          className={`
            absolute

            bottom-[-8%]
            right-[-55%]

            h-[78%]
            w-auto

            max-w-none

            object-contain

            blur-[1px]

            ${
              item.mirrored
                ? "-scale-x-100"
                : ""
            }
          `}
        />
      </motion.div>

      {/* MOBILE + DESKTOP CONTENT */}
      <div
        className="
          relative
          z-20

          flex
          flex-col

          gap-10

          lg:block
        "
      >
        {/* CONTENT */}
        <div
          className={`
            relative
            z-20

            max-w-full
            lg:max-w-xl

            ${
              item.alignment === "right"
                ? "lg:ml-auto lg:text-right"
                : "text-left"
            }

            text-left
          `}
        >
          {/* HEADING */}
          <motion.div
            initial="hidden"
            animate={
              inView
                ? "visible"
                : "hidden"
            }
            variants={headingVariants}
          >
            <h2
              className="
                mb-5

                font-heading

                text-[2rem]
                sm:text-3xl
                lg:text-4xl

                leading-[0.95]

                text-white
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
            initial={{
              opacity: 0,
              y: -80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 1.1,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              font-body

              text-white/85

              max-w-full
              sm:max-w-2xl

              text-[14px]
              sm:text-[15px]

              leading-relaxed
            "
          >
            {item.description}
          </motion.p>
        </div>
      </div>

      {/* DESKTOP IMAGE */}
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
          duration: 0.9,
          type: "tween",
        }}
        className={`
          hidden
          lg:block

          pointer-events-none

          absolute
          top-1/2

          -translate-y-1/2

          ${
            item.imagePosition === "right"
              ? "-right-48"
              : "-left-48"
          }
        `}
      >
        <img
          src={item.image}
          alt=""
          className={`
            h-[700px]
            w-[700px]

            select-none
            object-contain

            ${
              item.mirrored
                ? "-scale-x-100"
                : ""
            }
          `}
        />
      </motion.div>
    </div>
  );
}