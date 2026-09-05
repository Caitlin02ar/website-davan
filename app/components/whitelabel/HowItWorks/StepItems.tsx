"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

type StepItemData = {
  number: string;
  tag: string;
  title: string;
  description: string;
};

type StepItemsProps = {
  progress: MotionValue<number>;
};

export default function StepItems({ progress }: StepItemsProps) {
  const stepsItemData: StepItemData[] = [
    {
      number: "01",
      tag: "Your Studio",
      title: "You win the brief",
      description:
        "You lead acquisition, discovery, and creative direction. The client relationship stays entirely yours. They know you, they trust you, they pay you. We are not visible at this stage at all.",
    },
    {
      number: "02",
      tag: "Together",
      title: "We scope it together",
      description:
        "Send the brief, the brand assets, and any direction already locked in. You get scope, timeline, and an effort estimate in writing, in a form you can price and put straight in front of your client.",
    },
    {
      number: "03",
      tag: "DAVAN",
      title: "We build inside your standards",
      description:
        "Your style guides, your brand rules, your review rhythm. Progress shared in Figma, on staging links, or however you already work. Revisions handled, deadlines respected.",
    },
    {
      number: "04",
      tag: "Your Studio",
      title: "You deliver, we disappear",
      description:
        "You present under your name. Source files, code, CMS credentials, and assets transfer to you clean. We stay on quietly as your delivery layer, or hand over fully. Your call.",
    },
  ];


  const startOffset = 0.25;
  const endOffset = 0.95;

  const circlePoints = [
    startOffset,
    startOffset + (endOffset - startOffset) * 0.25,
    startOffset + (endOffset - startOffset) * 0.5,
    startOffset + (endOffset - startOffset) * 0.75,
  ];

  const lineWidth = useTransform(progress, [startOffset, endOffset], ["0%", "100%"]);

  return (
    <div className="mx-auto w-full max-w-7xl px-5 pb-12 md:px-4">
      <div className="relative mb-4 hidden md:block">
        <div className="pointer-events-none absolute left-0 right-0 top-1/2 h-px w-full -translate-y-1/2">
          <div className="absolute inset-0 h-px bg-white/20" />

          <motion.div
            style={{ width: lineWidth }}
            className="absolute left-0 top-0 h-px bg-[#dfff00]"
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-6 lg:gap-10">
          {stepsItemData.map((_, index) => {
            const point = circlePoints[index];
            const triggerStart = Math.max(0, point - 0.04);

            const circleBg = useTransform(
              progress,
              index === 0 ? [0, startOffset] : [triggerStart, point],
              index === 0
                ? ["rgba(255,255,255,0.35)", "#dfff00"]
                : ["rgba(255,255,255,0.35)", "#dfff00"]
            );

            return (
              <div key={index} className="flex items-center">
                <motion.div
                  style={{ backgroundColor: circleBg }}
                  className="h-3.5 w-3.5 shrink-0 rounded-full border border-white/40"
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-6 lg:gap-10">
        {stepsItemData.map((step, index) => (
          <StepItem
            key={step.number}
            step={step}
            index={index}
            progress={progress}
            point={circlePoints[index]}
            startOffset={startOffset}
          />
        ))}
      </div>
    </div>
  );
}

function StepItem({
  step,
  index,
  progress,
  point,
  startOffset,
}: {
  step: StepItemData;
  index: number;
  progress: MotionValue<number>;
  point: number;
  startOffset: number;
}) {
  const triggerStart = Math.max(0, point - 0.04);

  const activeColor = useTransform(
    progress,
    index === 0 ? [0, startOffset] : [triggerStart, point],
    ["rgba(255,255,255,0.35)", "#dfff00"]
  );

  const tagBg = useTransform(
    progress,
    index === 0 ? [0, startOffset] : [triggerStart, point],
    ["rgba(255,255,255,0.05)", "#dfff00"]
  );

  const tagText = useTransform(
    progress,
    index === 0 ? [0, startOffset] : [triggerStart, point],
    ["rgba(255,255,255,0.4)", "#000000"]
  );

  return (
    <div className="relative flex flex-col items-start border-l border-white/20 pb-8 pl-6 last:pb-0 md:border-l-0 md:pb-0 md:pl-0">
      <motion.div
        style={{ backgroundColor: activeColor }}
        className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full border border-white/40 md:hidden"
      />
      <motion.span
        style={{ color: activeColor }}
        className="font-heading text-4xl md:text-4xl"
      >
        {step.number}
      </motion.span>

      <motion.div
        style={{
          backgroundColor: tagBg,
          color: tagText,
        }}
        className="mt-3 w-fit rounded-full border border-white/20 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-wider"
      >
        {step.tag}
      </motion.div>

      <motion.h3
        style={{ color: activeColor }}
        className="mt-2 max-w-lg font-heading text-lg leading-relaxed md:text-lg"
      >
        {step.title}
      </motion.h3>

      <p className="mt-4 max-w-xl text-xs leading-relaxed text-white/80">
        {step.description}
      </p>
    </div>
  );
}
