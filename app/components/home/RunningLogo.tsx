"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const topLogos = [
  "/photos/client-logo/logo-1.webp",
  "/photos/client-logo/logo-2.webp",
  "/photos/client-logo/logo-3.webp",
  "/photos/client-logo/logo-4.webp",
  "/photos/client-logo/logo-5.webp",
  "/photos/client-logo/logo-6.webp",
];

const bottomLogos = [
  "/photos/client-logo/logo-7.webp",
  "/photos/client-logo/logo-8.webp",
  "/photos/client-logo/logo-9.webp",
  "/photos/client-logo/logo-10.webp",
  "/photos/client-logo/logo-11.webp",
  "/photos/client-logo/logo-12.webp",
  "/photos/client-logo/logo-13.webp",
];

export default function RunningLogo() {
  return (
    <section className="overflow-hidden py-20">
      <div className="mb-8 overflow-hidden">
        <motion.div
          className="flex gap-16 w-max"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...topLogos, ...topLogos].map((logo, index) => (
            <div
              key={index}
              className="relative h-20 w-[180px] flex-shrink-0"
            >
              <Image
                src={logo}
                alt="Client Logo"
                fill
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* BOTTOM */}
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-16 w-max"
          animate={{
            x: ["-50%", "0%"],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...bottomLogos, ...bottomLogos].map((logo, index) => (
            <div
              key={index}
              className="relative h-20 w-[180px] flex-shrink-0"
            >
              <Image
                src={logo}
                alt="Client Logo"
                fill
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}