"use client";

import Image from "next/image";
import { useState } from "react";
import { renderHighlightedText } from "@/lib/highlightText";
import { MoveRight } from "lucide-react";

type ProblemCard = {
  heading: string;
  headingHighlightText: string;
  description: string;
  icon: string;
  title: string;
};

export default function FlipCard({
  cards,
}: {
  cards: ProblemCard[];
}) {
  const [flippedIndex, setFlippedIndex] = useState<string | null>(null);

  const toggleCardOnMobile = (index: string) => {
    if (window.matchMedia("(max-width: 767px)").matches) {
      setFlippedIndex((current) =>
        current === index ? null : index
      );
    }
  };

  return (
    <div>
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {cards.map((card, cardIndex) => {
          const index = String(cardIndex + 1);

          return (
            <div
              key={index}
              className="group h-[320px] [perspective:1000px]"
              role="button"
              tabIndex={0}
              aria-label={`Show details for ${card.title}`}
              aria-pressed={flippedIndex === index}
              onClick={() => toggleCardOnMobile(index)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  toggleCardOnMobile(index);
                }
              }}
            >
              <div
                className={`
                  relative
                  h-full
                  w-full
                  transition-transform
                  duration-700
                  ease-[cubic-bezier(0.76,0,0.24,1)]
                  [transform-style:preserve-3d]
                  group-hover:[transform:rotateY(180deg)]
                  ${
                    flippedIndex === index
                      ? "[transform:rotateY(180deg)]"
                      : ""
                  }
                `}
              >
                <div
                  className="
                    absolute
                    inset-0
                    flex
                    flex-col
                    overflow-hidden
                    rounded-[32px]
                    bg-gray
                    [backface-visibility:hidden]
                  "
                >
                  <div className="p-8 max-w-md flex flex-1 items-center justify-center">
                    <p className="text-2xl font-heading">
                      {renderHighlightedText(
                        card.heading,
                        card.headingHighlightText
                      )}
                    </p>
                  </div>

                  <div className="mt-auto flex items-center justify-between bg-primary w-full px-8 py-5">
                    <div className="flex items-center gap-3">
                      <Image
                        src={card.icon}
                        alt={card.title}
                        width={24}
                        height={24}
                      />

                      <span className="text-black font-body font-bold">
                        {card.title}
                      </span>
                    </div>

                    <MoveRight className="text-black" />
                  </div>
                </div>

                <div
                  className="
                    absolute
                    inset-0
                    flex
                    flex-col
                    overflow-hidden
                    rounded-[32px]
                    bg-gray
                    [transform:rotateY(180deg)]
                    [backface-visibility:hidden]
                    items-center justify-center
                  "
                >
                  <div className="flex-1 overflow-y-auto p-8 flex items-center justify-center">
                    <p className="font-body text-sm leading-relaxed text-white">
                      {card.description}
                    </p>
                  </div>

                  <div className="flex items-center bg-primary w-full px-8 py-5">
                    <div className="flex items-center gap-3">
                      <Image
                        src={card.icon}
                        alt={card.title}
                        width={24}
                        height={24}
                      />

                      <span className="text-black font-body font-bold">
                        {card.title}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}