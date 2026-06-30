"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface DropdownProps {
  items: {
    question: string;
    answer: string;
  }[];
}

export default function Dropdown({
  items,
}: DropdownProps) {

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-2xl min-w-0">

      <div className="space-y-4">

        {items.map((item, index) => {

          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="
                rounded-2xl
                overflow-hidden

                border
                border-white/20

                bg-white/5
                backdrop-blur-lg

                shadow-[0_8px_32px_rgba(0,0,0,0.35)]

                transition-all
                duration-500

                hover:border-white/20
                hover:bg-white/[0.05]
              "
            >

              {/* QUESTION */}
              <button
                onClick={() => toggleDropdown(index)}
                className="
                  w-full

                  px-5
                  py-5

                  sm:px-8
                  sm:py-6

                  flex
                  items-center
                  justify-between

                  gap-4

                  text-left
                "
              >

                <h3
                  className="
                    font-body
                    font-bold

                    text-base
                    sm:text-lg

                    leading-snug

                    text-white
                  "
                >
                  {item.question}
                </h3>

                <div
                  className="
                    flex
                    items-center
                    justify-center

                    w-9
                    h-9
                    min-w-9

                    sm:w-10
                    sm:h-10
                    sm:min-w-10

                    rounded-xl

                    border
                    border-primary

                    text-primary

                    transition-all
                    duration-300

                    hover:bg-primary
                    hover:text-black
                    hover:scale-105
                  "
                >

                  {isOpen ? (
                    <ChevronUp
                      size={18}
                      className="transition-transform duration-300"
                    />
                  ) : (
                    <ChevronDown
                      size={18}
                      className="transition-transform duration-300"
                    />
                  )}

                </div>

              </button>

              {/* ANSWER */}
              <div
                className={`
                  grid
                  transition-all
                  duration-500
                  ease-in-out

                  ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }
                `}
              >

                <div className="overflow-hidden">

                  <div
                    className="
                      px-5
                      pb-5
                      sm:px-8
                      sm:pb-6
                    "
                  >

                    <p
                      className="
                        text-sm
                        sm:text-sm

                        leading-relaxed

                        text-white
                      "
                    >
                      {item.answer}
                    </p>

                  </div>

                </div>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}