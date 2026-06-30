// RunningLogo.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface RunningLogoProps {

  logos: {
    src: string;
  }[];

  duration?: number;
  gap?: string;
}

export default function RunningLogo({
  logos,
  duration = 30,
  gap = "gap-16",
}: RunningLogoProps) {

  // SAFETY
  const safeLogos = logos.filter(
    (logo) => logo?.src
  );

  const half =
    Math.ceil(safeLogos.length / 2);

  const duplicatedTopLogos =
    safeLogos.slice(0, half);

  const duplicatedBottomLogos =
    safeLogos.slice(half);

  const topLoop = [
    ...duplicatedTopLogos,
    ...duplicatedTopLogos,
    ...duplicatedTopLogos,
    ...duplicatedTopLogos,
  ];

  const bottomLoop = [
    ...duplicatedBottomLogos,
    ...duplicatedBottomLogos,
    ...duplicatedBottomLogos,
    ...duplicatedBottomLogos,
  ];

  return (
    <section className="w-full overflow-hidden py-20 bg-transparent">

      {/* TOP */}
      <div className="mb-8 overflow-hidden">

        <motion.div
          className={`flex items-center ${gap} w-max`}
          animate={{
            x: [-1000, -200, -600, 0, -400],
          }}
          transition={{
            duration,
            ease: "linear",
            repeat: Infinity,
          }}
        >

          {topLoop.map((logo, index) => (

            <div
              key={index}
              className="
                relative
                h-20
                w-[180px]
                flex-shrink-0
              "
            >

              <Image
                src={logo.src}
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
          className={`flex items-center ${gap} w-max`}
          animate={{
            x: [0, -800, -400, -1000, -600],
          }}
          transition={{
            duration,
            ease: "linear",
            repeat: Infinity,
          }}
        >

          {bottomLoop.map((logo, index) => (

            <div
              key={index}
              className="
                relative
                h-20
                w-[180px]
                flex-shrink-0
              "
            >

              <Image
                src={logo.src}
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