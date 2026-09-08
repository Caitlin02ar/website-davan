"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

type PortofolioAnimateProps = {
  items: {
    image: string;
  }[];
};

const NORMAL_DURATION = 100;
const HOVER_DURATION = 190;

export default function PortofolioAnimate({
  items,
}: PortofolioAnimateProps) {
  const x = useMotionValue(0);
  const xPercent = useTransform(x, (v) => `${v}%`);

  const durationRef = useRef(NORMAL_DURATION);
  const animationRef = useRef<ReturnType<typeof animate> | null>(null);

  const play = (duration: number) => {
    animationRef.current?.stop();

    const current = x.get();
    const remainingRatio = (0 - current) / 50;

    const remainingDuration = Math.max(
      duration * (1 - remainingRatio),
      0.5
    );

    animationRef.current = animate(x, -50, {
      duration: remainingDuration,
      ease: "linear",
      onComplete: () => {
        x.set(0);
        play(durationRef.current);
      },
    });
  };

  useEffect(() => {
    play(NORMAL_DURATION);

    return () => {
      animationRef.current?.stop();
    };
  }, []);

  const handleMouseEnter = () => {
    durationRef.current = HOVER_DURATION;
    play(HOVER_DURATION);
  };

  const handleMouseLeave = () => {
    durationRef.current = NORMAL_DURATION;
    play(NORMAL_DURATION);
  };

  const getOptimizedImage = (url: string) => {
    return `${url}?w=800&auto=format`;
  };

  return (
    <div
      className="relative mt-12 w-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-dark to-transparent md:w-40" />

      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-dark to-transparent md:w-40" />

      <motion.div
        className="flex w-max"
        style={{ x: xPercent }}
      >
        {/* First sequence */}
        {items.map((item, index) => (
          <img
            key={`portfolio-${index}`}
            src={getOptimizedImage(item.image)}
            alt={`DAVAN Digital portfolio ${index + 1}`}
            loading={index < 3 ? "eager" : "lazy"}
            decoding="async"
            className="h-auto w-[350px] max-w-none shrink-0 sm:w-[500px] md:w-[800px]"
          />
        ))}

        {/* Duplicate sequence for infinite loop */}
        {items.map((item, index) => (
          <img
            key={`portfolio-duplicate-${index}`}
            src={getOptimizedImage(item.image)}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="h-auto w-[350px] max-w-none shrink-0 sm:w-[500px] md:w-[800px]"
          />
        ))}
      </motion.div>
    </div>
  );
}