"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { urlFor } from "@/lib/image";

const ease = [0.22, 1, 0.36, 1] as const;

interface RunningTextProps {
  data: {
    runningText: string;
    title: string;
    description: string;
    backgroundImage: {
      asset: {
        url: string;
      };
    };
    altText:string;
  };
}

export default function RunningTextClient({
  data,
}: RunningTextProps) {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.3,
  });

  const [startLoop, setStartLoop] = useState(false);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        -mt-[70px]
        overflow-x-hidden
        bg-transparent
        pt-28
        pb-20
        md:-mt-[100px]
        md:pt-40
        md:pb-28
      "
    >
      <motion.div
        initial={{
          x: "-100%",
          opacity: 0,
        }}
        animate={
          isInView
            ? {
                x: 0,
                opacity: 1,
              }
            : {}
        }
        transition={{
          duration: 1.2,
          ease,
          delay: 1.1,
        }}
        className="
          absolute
          left-0
          right-0
          bottom-0
          top-[120px]
          pointer-events-none
          md:top-[200px]
        "
      >
        <Image
          src={urlFor(data.backgroundImage)
            .width(1920)
            .quality(80)
            .auto("format")
            .url()
          }
          alt={data.altText || ""}
          fill
          priority
          className="object-cover opacity-55"
        />

        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </motion.div>

      <motion.div
        initial={{
          x: "120%",
          y: -140,
          rotate: -3,
        }}
        animate={
          isInView
            ? {
                x: 0,
                y: 0,
                rotate: -3,
              }
            : {}
        }
        transition={{
          duration: 1.1,
          ease,
        }}
        className="
          absolute
          top-[70px]
          left-0
          z-30
          w-full
          overflow-hidden
          bg-primary
          py-4
          md:top-[110px]
          md:py-6
          lg:py-8
        "
      >
        {/* RUNNING TEXT MASUK SETELAH TAPE */}
        <motion.div
          initial={{
            x: "120%",
            opacity: 0,
          }}
          animate={
            isInView
              ? {
                  x: 0,
                  opacity: 1,
                }
              : {}
          }
          transition={{
            duration: 1,
            ease,
            delay: 1.1,
          }}
          className="flex w-max"
        >
          {/* Hanya untuk screen reader */}
          <span className="sr-only">{data.runningText}</span>

          {/* Decorative marquee */}
          <motion.div
            animate={
              startLoop
                ? {
                    x: ["0%", "-50%"],
                  }
                : {
                    x: "0%",
                  }
            }
            transition={{
              duration: 18,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex w-max"
            aria-hidden="true"
          >
            {[0, 1].map((set) => (
              <div key={set} className="flex shrink-0">
                {Array.from({ length: 8 }).map((_, i) => (
                  <span
                    key={i}
                    className="
                      mx-5
                      shrink-0
                      whitespace-nowrap
                      font-heading
                      text-2xl
                      font-extrabold
                      uppercase
                      leading-none
                      tracking-[-0.05em]
                      text-black
                      sm:mx-7
                      sm:text-3xl
                      md:mx-10
                      md:text-4xl
                      lg:text-6xl
                    "
                  >
                    {data.runningText}
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* CONTENT */}
      <div
        className="
          relative
          z-20
          mx-auto
          flex
          max-w-6xl
          flex-col
          items-center
          justify-center
          px-5
          pt-32
          text-center
          md:px-6
          md:pt-46
        "
      >
        {/* TITLE */}
        <motion.h2
          initial={{
            y: -80,
            opacity: 0,
          }}
          animate={
            isInView
              ? {
                  y: 0,
                  opacity: 1,
                }
              : {}
          }
          transition={{
            duration: 1,
            ease,
            delay: 2,
          }}
          className="
            max-w-6xl
            font-heading
            text-xl
            uppercase
            leading-tight
            text-white
            sm:text-2xl
            md:text-4xl
            lg:text-5xl
          "
        >
          {data.title}
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{
            y: -30,
            opacity: 0,
          }}
          animate={
            isInView
              ? {
                  y: 0,
                  opacity: 1,
                }
              : {}
          }
          transition={{
            duration: 0.9,
            ease,
            delay: 2.3,
          }}
          onAnimationComplete={() => {
            setStartLoop(true);
          }}
          className="
            mt-5
            max-w-3xl
            px-1
            font-body
            text-xs
            leading-relaxed
            text-white
            sm:text-sm
            md:mt-7
            md:px-0
            md:text-md
          "
        >
          {data.description}
        </motion.p>
      </div>
    </section>
  );
}