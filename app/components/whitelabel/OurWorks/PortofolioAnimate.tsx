"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

type PortofolioAnimateProps = {
  src: string;
};

const NORMAL_DURATION = 90;
const HOVER_DURATION = 420; // jauh lebih lambat saat di-hover, kesan mau berhenti

export default function PortofolioAnimate({
  src,
}: PortofolioAnimateProps) {
  // motion value angka murni (0 sampai -50), bukan string "%"
  const x = useMotionValue(0);
  const xPercent = useTransform(x, (v) => `${v}%`);

  const durationRef = useRef(NORMAL_DURATION);
  const animationRef = useRef<ReturnType<typeof animate> | null>(null);

  const play = (duration: number) => {
    animationRef.current?.stop();

    const current = x.get();
    // hitung sisa jarak dari posisi sekarang menuju -50,
    // supaya kecepatan baru proporsional, gak lompat balik ke 0
    const remainingRatio = (0 - current) / 50; // 0 -> 1
    const remainingDuration = Math.max(duration * (1 - remainingRatio), 0.5);

    animationRef.current = animate(x, -50, {
      duration: remainingDuration,
      ease: "linear",
      onComplete: () => {
        x.set(0); // loop: reset instan ke 0 cuma pas siklus penuh selesai (gak ada visual gap karena logo di-duplikat 2x)
        play(durationRef.current);
      },
    });
  };

  useEffect(() => {
    play(NORMAL_DURATION);
    return () => {
      animationRef.current?.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      {/* LEFT FADE */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-dark to-transparent md:w-40" />

      {/* RIGHT FADE */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-dark to-transparent md:w-40" />

      <motion.div className="flex w-max" style={{ x: xPercent }}>
        <img
          src={src}
          alt="DAVAN Digital portfolio"
          className="h-auto w-auto max-w-none shrink-0"
        />

        <img
          src={src}
          alt=""
          aria-hidden="true"
          className="h-auto w-auto max-w-none shrink-0"
        />
      </motion.div>
    </div>
  );
}