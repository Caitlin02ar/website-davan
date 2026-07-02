"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface PillarCardProps {
  number: string;
  title: string;
  description: string;
  shouldAnimate?: boolean;
  delay?: number;
}

export default function PillarCard({
  number,
  title,
  description,
  shouldAnimate,
  delay = 0,
}: PillarCardProps) {
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    if (!shouldAnimate) return;

    const timeout = setTimeout(() => {
      setTriggered(true);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [shouldAnimate, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 120 }}
      animate={triggered ? { opacity: 1, y: 0 } : { opacity: 0, y: 120 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="
        w-full
        max-w-[320px]
        min-h-[220px]
        h-auto
        rounded-[28px]
        border border-primary
        p-6
        flex flex-col
        justify-center
        bg-background

        md:w-[250px]
        md:h-[260px]
        md:max-w-none
      "
    >
      <p className="text-sm uppercase tracking-wider text-white mb-2">
        {number}
      </p>

      <h3 className="font-heading text-primary text-xl leading-none mb-4">
        {title}
      </h3>

      <p className="font-body text-white text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}