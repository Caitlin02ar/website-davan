"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import WhiteLabelButton from "../Common/Button";

export default function PricingGlassCard() {
  const [hoverCount, setHoverCount] = useState(0);

  const dataGlassCard = {
    icon: "/assets/whitelabel/lock.svg",
    title: "The rate card, on request.",
    description:
      "We do not publish wholesale pricing on a page anyone could forward. Ask and we will send the current card, plus an indicative scope for whatever you have sitting on your desk right now.",
    button: {
      variant: "primary" as const,
      animated: true,
      buttonText: "Request the rate card",
      href: "mailto:david@davan.digital",
    },
  };

  const handleMouseEnter = () => {
    setHoverCount((prev) => prev + 1);
  };

  return (
    <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-primary/40 via-primary/5 to-transparent">
      <div
        onMouseEnter={handleMouseEnter}
        className="relative flex flex-col gap-8 overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-t from-white/[0.04] via-transparent to-primary/[0.06] px-8 py-12 backdrop-blur-2xl backdrop-saturate-150 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
      >
        {/* WHITE FLASH LIGHT BEAM (ONE DIRECTION & SLOWER) */}
        <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-3xl">
          {hoverCount > 0 && (
            <motion.div
              key={hoverCount}
              initial={{ x: "-120%", y: "120%", opacity: 0 }} // Start Bottom-Left
              animate={{ x: "120%", y: "-120%", opacity: [0, 1, 1, 0] }} // Move to Top-Right
              transition={{
                duration: 4, // Slower, smoother speed
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute -left-[50%] -top-[50%] flex h-[200%] w-[200%] items-center justify-center"
            >
              {/* DIAGONAL WHITE LIGHT STREAK */}
              <div className="h-[250%] w-28 -rotate-45 bg-gradient-to-r from-transparent via-white/80 via-white to-transparent blur-[2px] md:w-36" />
            </motion.div>
          )}
        </div>

        {/* BACKGROUND GLOWS */}
        <div className="pointer-events-none absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-white/[0.04] blur-3xl" />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center justify-center gap-4">
          <Image src={dataGlassCard.icon} alt="" width={68} height={68} />
          <span className="font-heading text-center text-primary">
            {dataGlassCard.title}
          </span>
          <p className="text-center text-sm text-white/80">
            {dataGlassCard.description}
          </p>
        </div>

        {/* BUTTON (INDEPENDENT HOVER) */}
        <div className="relative z-30 flex justify-center">
          <WhiteLabelButton
            variant={dataGlassCard.button.variant}
            animated={dataGlassCard.button.animated}
            href={dataGlassCard.button.href}
          >
            {dataGlassCard.button.buttonText}
          </WhiteLabelButton>
        </div>
      </div>
    </div>
  );
}