"use client";

import { motion, HTMLMotionProps, Variants } from "framer-motion";

interface TextStaggerProps extends HTMLMotionProps<"p"> {
  text: string;
  highlightText?: string;
  highlightClassName?: string;
  delay?: number;
  staggerSpeed?: number;
}

export default function TextStagger({
  text,
  highlightText,
  highlightClassName = "text-[#DFFF00]",
  delay = 0.5,
  staggerSpeed = 0.035,
  className = "",
  ...props
}: TextStaggerProps) {
  const words = text.split(" ");
  let highlightStart = -1;
  let highlightEnd = -1;

  if (highlightText) {
    highlightStart = text.toLowerCase().indexOf(highlightText.toLowerCase());
    if (highlightStart !== -1) {
      highlightEnd = highlightStart + highlightText.length;
    }
  }

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: delay,
        staggerChildren: staggerSpeed,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 8,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  let currentCharacterIndex = 0;

  return (
    <motion.p
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      className={className}
      {...props}
    >
      {words.map((word, index) => {
        const wordStart = currentCharacterIndex;
        const wordEnd = wordStart + word.length;

        currentCharacterIndex = wordEnd + 1;

        const isHighlighted =
          highlightStart !== -1 &&
          wordStart >= highlightStart &&
          wordEnd <= highlightEnd;

        return (
          <motion.span
            key={`${word}-${index}`}
            variants={wordVariants}
            className={`inline-block ${
              isHighlighted ? highlightClassName : ""
            }`}
          >
            {word}
            {index < words.length - 1 && "\u00A0"}
          </motion.span>
        );
      })}
    </motion.p>
  );
}