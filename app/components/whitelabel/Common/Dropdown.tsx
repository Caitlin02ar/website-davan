"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { CircleArrowDown } from "lucide-react";

type DropdownVariant = "confidentiality" | "questions";

type ConfidentialityItem = {
  number: string;
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
}: {
  variant: DropdownVariant;
}) {
  /* =====================================================
     DATA — CONFIDENTIALITY
  ===================================================== */

  const dropDownDataConfidentiality: {
    data: ConfidentialityItem[];
  } = {
    data: [
      {
        number: "1",
        icon: "/assets/whitelabel/eyes-off.svg",
        title: "No DAVAN branding on anything",
        description:
          "Files, repositories, CMS credentials, and documentation are handed over clean, with no trace of us inside them.",
      },
      {
        number: "2",
        icon: "/assets/whitelabel/call-off.svg",
        title: "We do not contact your client",
        description:
          "Not during the project and not after it. You decide whether we are ever in the room, and most of the time we are not.",
      },
      {
        number: "3",
        icon: "/assets/whitelabel/pict-off.svg",
        title: "Your work stays off our channels",
        description:
          "No case studies, no social posts, no portfolio entries, no awards submissions. If we cannot name it, nobody can trace it back to you.",
      },
      {
        number: "4",
        icon: "/assets/whitelabel/doc-lock.svg",
        title: "NDA before the first brief",
        description:
          "Confidentiality is the starting position. We will sign yours as it stands, or supply ours if you would rather not draft one.",
      },
      {
        number: "5",
        icon: "/assets/whitelabel/shield.svg",
        title: "Three year non solicit, in writing",
        description:
          "We will not approach, pitch, or accept direct work from your clients for the life of the partnership and for three years after it ends. It is a clause in the agreement, not a promise.",
      },
      {
        number: "6",
        icon: "/assets/whitelabel/key.svg",
        title: "Your list, your IP, your relationships",
        description:
          "Ownership transfers to you in full at handover. Nothing is licensed back to us and nothing is held in reserve.",
      },
    ],
  };

  /* =====================================================
     DATA — QUESTIONS / FAQ
  ===================================================== */

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

  /* =====================================================
     STATE
  ===================================================== */

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  /* =====================================================
     MODEL 1 — CONFIDENTIALITY
  ===================================================== */

  if (variant === "confidentiality") {
    return (
      <div className="flex w-full flex-col gap-3">
        {dropDownDataConfidentiality.data.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <motion.div
              key={item.number}
              layout
              onClick={() => handleToggle(index)}
              initial={false}
              animate={{
                backgroundColor: isActive ? "#363636" : "#262626",
                borderRadius: isActive ? "28px" : "24px",
              }}
              transition={{
                layout: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                backgroundColor: { duration: 0.3 },
                borderRadius: { duration: 0.3 },
              }}
              className="group relative w-full overflow-hidden text-left cursor-pointer border border-white/5"
            >
              <div
                className={`flex w-full flex-col transition-all duration-300 ${
                  isActive ? "p-8" : "px-6 py-4"
                }`}
              >
                {/* TOP HEADER ROW */}
                <div className="flex w-full items-center justify-between">
                  <div className="relative h-6 w-6 shrink-0 md:h-7 md:w-7">
                    <Image
                      src={item.icon}
                      alt=""
                      fill
                      className={`object-contain transition-[filter] duration-300 ${
                        !isActive ? "group-hover:brightness-0 group-hover:invert" : ""
                      }`}
                    />
                  </div>

                  <CircleArrowDown
                    size={22}
                    strokeWidth={2}
                    className={`shrink-0 text-[#DFFF00] transition-transform duration-500 ease-out ${
                      isActive ? "rotate-180" : "rotate-0 group-hover:text-white"
                    }`}
                  />
                </div>

                {/* CONTENT AREA */}
                <AnimatePresence initial={false} mode="wait">
                  {isActive ? (
                    <motion.div
                      key="active-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                        opacity: { duration: 0.2, delay: 0.1 },
                      }}
                      className="overflow-hidden"
                    >
                      <h3 className="mt-8 font-semibold text-[#DFFF00] text-xl md:text-2xl leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-sm md:text-base leading-relaxed text-white/90 max-w-[90%]">
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
                      <span className="font-semibold text-sm md:text-base text-[#DFFF00] group-hover:text-white transition-colors duration-300">
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

  /* =====================================================
     MODEL 2 — QUESTIONS / FAQ
  ===================================================== */

  return (
    <div className="flex w-full flex-col gap-2">
      {dropDownQuestions.data.map((item, index) => {
        const isActive = activeIndex === index;

        return (
          <div key={item.number} className="w-full">
            {/* HEADER */}
            <motion.button
              type="button"
              onClick={() => handleToggle(index)}
              whileTap={{ scale: 0.995 }}
              className="group flex min-h-[42px] w-full items-center rounded-full bg-[#363636] px-7 text-left transition-colors duration-300 cursor-pointer"
            >
              <span
                className={`text-[14px] font-semibold leading-none transition-colors duration-300 ${
                  isActive ? "text-[#DFFF00]" : "text-white group-hover:text-[#DFFF00]"
                }`}
              >
                {item.question}
              </span>

              <CircleArrowDown
                size={20}
                strokeWidth={2}
                className={`ml-auto shrink-0 transition-all duration-300 ${
                  isActive
                    ? "rotate-180 text-[#DFFF00]"
                    : "rotate-0 text-white group-hover:text-[#DFFF00]"
                }`}
              />
            </motion.button>

            {/* ANSWER */}
            <AnimatePresence initial={false}>
              {isActive && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                    opacity: { duration: 0.2 },
                  }}
                  className="overflow-hidden"
                >
                  <div className="mt-1 rounded-[16px] bg-[#555B5F] px-7 py-6">
                    {item.answer.split("/br").map((paragraph, paragraphIndex) => (
                      <p
                        key={paragraphIndex}
                        className="mb-4 text-[12px] leading-[1.45] text-white/90 last:mb-0"
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