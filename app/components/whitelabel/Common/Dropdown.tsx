"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { CircleChevronDown } from "lucide-react";

type DropdownVariant = "confidentiality" | "questions";

type ConfidentialityItem = {
  number?: string;
  icon: string;
  title: string;
  description: string;
};

type QuestionItem = {
  number: string;
  question: string;
  answer: string;
};

export default function Dropdown({
  variant,
  items,
}: {
  variant: DropdownVariant;
  items?: ConfidentialityItem[];
}) {
  const dropDownQuestions: {
    data: QuestionItem[];
  } = {
    data: [
      {
        number: "1",
        question: "Will you ever go direct to our clients?",
        answer:
          "No, and it is contractual rather than a handshake. The partnership agreement carries a non solicit that runs for the life of the engagement and for three years after it ends. /br It is also the business model. Our pipeline is studios. Poaching one client would cost us every other partner we have.",
      },
      {
        number: "2",
        question: "Who owns the work?",
        answer:
          "You do. Source files, code, repositories, CMS access, and assets transfer in full at handover. Nothing is licensed back to us and nothing is held as leverage over a renewal.",
      },
      {
        number: "3",
        question: "Where is the team based?",
        answer:
          "Direction, account management, and quality control sit in Perth, Western Australia. Production runs through our own offshore team, coordinated by a project manager who is accountable to your timeline. /br That structure is why wholesale pricing works. We would rather you heard it from us now than found out on the third project.",
      },
      {
        number: "4",
        question: "How do revisions work?",
        answer:
          "Two review rounds are included in every scope and defined up front, so there is no argument at the end. Anything beyond that is quoted before it starts.",
      },
      {
        number: "5",
        question: "What if we lose the client mid build?",
        answer:
          "You are billed for work completed to that point and you keep everything produced. No cancellation penalty and no minimum project value.",
      },
      {
        number: "6",
        question: "Do you sign our NDA, or bring your own?",
        answer:
          "We'll execute your NDA in its existing form, or provide our standard agreement if you'd rather not draft one. Confidentiality is established before any brief is shared.",
      },
      {
        number: "7",
        question: "Can you work inside our tools?",
        answer:
          "Yes. We work inside your tools and process. Figma, staging links, your PM system, whatever you already run. No need to adapt to ours.",
      },
      {
        number: "8",
        question: "Are you insured?",
        answer:
          "Yes. We hold professional indemnity and public liability insurance. Policy limits, insurer details and a current Certificate of Currency are available on request.",
      },
      {
        number: "9",
        question: "How do we start?",
        answer:
          "With one small brief. A landing page, a set of wireframes, or a build you are already behind on. You will see how we work before you commit anything larger, and we would rather earn the second project than negotiate for it.",
      },
    ],
  };

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  if (variant === "confidentiality") {
    return (
      <div className="flex w-full flex-col gap-3">
        {items?.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <motion.div
              key={`${item.title}-${index}`}
              layout
              onClick={() => handleToggle(index)}
              initial={false}
              animate={{
                backgroundColor: isActive ? "#363636" : "#262626",
                borderRadius: isActive ? "28px" : "24px",
              }}
              transition={{
                layout: {
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                },
                backgroundColor: {
                  duration: 0.3,
                },
                borderRadius: {
                  duration: 0.3,
                },
              }}
              className="group relative w-full overflow-hidden text-left cursor-pointer border border-white/5 outline-none focus:outline-none"
            >
              <div
                className={`flex w-full flex-col transition-all duration-300 ${
                  isActive ? "p-8" : "px-6 py-4"
                }`}
              >
                <div className="flex w-full items-center justify-between">
                  <div className="relative h-6 w-6 shrink-0 md:h-7 md:w-7">
                    <Image
                      src={item.icon}
                      alt=""
                      fill
                      className={`object-contain transition-[filter] duration-300 ${
                        !isActive
                          ? "group-hover:brightness-0 group-hover:invert"
                          : ""
                      }`}
                    />
                  </div>

                  <CircleChevronDown
                    size={22}
                    strokeWidth={2}
                    className={`shrink-0 text-primary transition-transform duration-500 ease-out ${
                      isActive
                        ? "rotate-180"
                        : "rotate-0 group-hover:text-white"
                    }`}
                  />
                </div>

                <AnimatePresence initial={false} mode="wait">
                  {isActive ? (
                    <motion.div
                      key="active-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: {
                          duration: 0.35,
                          ease: [0.16, 1, 0.3, 1],
                        },
                        opacity: {
                          duration: 0.2,
                          delay: 0.1,
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <h3
                        className="mt-8 text-primary text-xl md:text-xl leading-snug"
                        style={{
                          fontFamily: "var(--font-sequel)",
                        }}
                      >
                        {item.title}
                      </h3>

                      <p className="mt-4 text-sm md:text-base leading-relaxed text-white max-w-[90%]">
                        {item.description}
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="collapsed-title"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-16 top-1/2 -translate-y-1/2 pr-12"
                    >
                      <span
                        className="text-xs md:text-sm text-primary group-hover:text-white transition-colors duration-300"
                        style={{
                          fontFamily: "var(--font-sequel)",
                        }}
                      >
                        {item.title}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-2">
      {dropDownQuestions.data.map((item, index) => {
        const isActive = activeIndex === index;

        return (
          <div key={item.number} className="w-full">
            <motion.button
              type="button"
              onClick={() => handleToggle(index)}
              whileTap={{ scale: 0.995 }}
              className="group flex min-h-[42px] w-full items-center rounded-2xl bg-[#363636] px-7 text-left transition-colors duration-300 cursor-pointer border border-white/20 outline-none focus:outline-none"
            >
              <span
                className={`text-sm leading-none tracking-wide transition-colors duration-300 ${
                  isActive
                    ? "text-primary"
                    : "text-white group-hover:text-primary"
                }`}
                style={{
                  fontFamily: "var(--font-sequel)",
                }}
              >
                {item.question}
              </span>

              <CircleChevronDown
                size={20}
                strokeWidth={2}
                className={`ml-auto shrink-0 transition-all duration-300 ${
                  isActive
                    ? "rotate-180 text-primary"
                    : "rotate-0 text-white group-hover:text-primary"
                }`}
              />
            </motion.button>

            <AnimatePresence initial={false}>
              {isActive && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: {
                      duration: 0.35,
                      ease: [0.16, 1, 0.3, 1],
                    },
                    opacity: {
                      duration: 0.2,
                    },
                  }}
                  className="overflow-hidden"
                >
                  <div className="mt-1 rounded-[16px] bg-[#52585C] px-7 py-6">
                    {item.answer
                      .split("/br")
                      .map((paragraph, paragraphIndex) => (
                        <p
                          key={paragraphIndex}
                          className="mb-4 text-[12px] leading-[1.45] text-white last:mb-0"
                        >
                          {paragraph.trim()}
                        </p>
                      ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}