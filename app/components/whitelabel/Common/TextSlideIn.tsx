"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface TextSlideInProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "left" | "right";
}

export default function TextSlideIn({
  children,
  delay = 0.2,
  duration = 1,
  direction = "left",
  className = "",
  ...props
}: TextSlideInProps) {
  const xInitial = direction === "left" ? -100 : 100;

  return (
    <div className="overflow-hidden py-2 font-heading text-[clamp(1.75rem,8vw,2.25rem)] leading-[1.12] tracking-[0.015em] uppercase text-[24px] sm:tracking-wide md:text-[42px] md:leading-normal">
      <motion.div
        initial={{ opacity: 0, x: xInitial }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration,
          delay,
          ease: [0.76, 0, 0.24, 1],
        }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    </div>
  );
}
