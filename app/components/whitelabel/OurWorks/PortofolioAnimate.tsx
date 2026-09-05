"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

type PortofolioAnimateProps = {
  src: string;
};

const NORMAL_DURATION = 90;
const HOVER_DURATION = 420;

export default function PortofolioAnimate({
  src,
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
        <img
          src={src}
          alt="DAVAN Digital portfolio"
          className="h-auto w-[8000px] max-w-none shrink-0 md:w-auto"
        />

        <img
          src={src}
          alt=""
          aria-hidden="true"
          className="h-auto w-[8000px] max-w-none shrink-0 md:w-auto"
        />
      </motion.div>
    </div>
  );
}