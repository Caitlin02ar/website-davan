"use client";

import { ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import Card from "./Card";

const ease = [0.22, 1, 0.36, 1] as const;

export default function CardItems({
  cards,
}: {
  cards: any[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextCard = () => {
    if (activeIndex < cards.length - 1) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  const prevCard = () => {
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  return (
    <section
      className="
        relative
        flex
        flex-col
        items-center
        justify-center
        overflow-hidden

        h-[620px]

        md:h-[590px]
      "
    >
      {/* CARD STACK */}
      <div
        className="
          relative
          h-[420px]
          w-full
          max-w-[320px]

          sm:h-[460px]
          sm:max-w-[360px]

          md:h-[500px]
          md:w-[600px]
          md:max-w-none
        "
      >
        {cards.map((card, index) => {
          const offset = index - activeIndex;

          const isActive = offset === 0;

          const isMobile =
            typeof window !== "undefined" &&
            window.innerWidth < 768;

          return (
            <motion.div
              key={index}
              className="absolute top-0"
              animate={{
                // MOBILE → stack turun ke bawah
                x: isMobile ? 0 : offset * -32,

                y: isMobile
                  ? Math.abs(offset) * 14
                  : Math.abs(offset) * -12,

                scale: 1,
              }}
              transition={{
                duration: 0.65,
                ease,
              }}
              style={{
                left: "50%",
                translateX: "-50%",

                zIndex: isActive
                  ? 50
                  : 40 - Math.abs(offset),

                opacity:
                  isActive
                    ? 1
                    : 0.22 - Math.abs(offset) * 0.04,
              }}
            >
              {/* ACTIVE CARD */}
              {isActive ? (
                <div className="scale-[0.78] sm:scale-[0.88] md:scale-100">
                  <Card
                    active={true}
                    tag={card.tag}
                    heading={card.title}
                    button={card.buttonText}
                  />
                </div>
              ) : (
                /* STACK CARD */
                <div
                  className="
                    h-[320px]
                    w-[240px]
                    rounded-[22px]

                    border
                    border-white

                    bg-white/50

                    backdrop-blur-md

                    shadow-[0_0_20px_rgba(255,255,255,0.02)]

                    sm:h-[380px]
                    sm:w-[300px]

                    md:h-[450px]
                    md:w-[360px]
                    md:rounded-[28px]
                  "
                />
              )}
            </motion.div>
          );
        })}
      </div>

      {/* MOBILE BUTTONS */}
      <div
        className="
          mt-6
          flex
          items-center
          justify-center
          gap-4

          md:hidden
        "
      >
        {activeIndex > 0 && (
          <button
            onClick={prevCard}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-primary
              text-primary
              transition-all
              hover:bg-primary
              hover:text-black
            "
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        )}

        {activeIndex < cards.length - 1 && (
          <button
            onClick={nextCard}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-primary
              text-primary
              transition-all
              hover:bg-primary
              hover:text-black
            "
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* DESKTOP LEFT BUTTON */}
      {activeIndex > 0 && (
        <button
          onClick={prevCard}
          className="
            absolute
            left-[8%]
            z-50
            hidden
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            border
            border-primary
            text-primary
            transition-all
            hover:bg-primary
            hover:text-black

            md:flex
          "
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      )}

      {/* DESKTOP RIGHT BUTTON */}
      {activeIndex < cards.length - 1 && (
        <button
          onClick={nextCard}
          className="
            absolute
            right-[8%]
            z-50
            hidden
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            border
            border-primary
            text-primary
            transition-all
            hover:bg-primary
            hover:text-black
            md:flex
          "
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      )}
    </section>
  );
}