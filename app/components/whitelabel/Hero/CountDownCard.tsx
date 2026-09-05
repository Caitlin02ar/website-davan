"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function CountDownCard() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.5,
    margin: "0px 0px -100px 0px",
  });

  const countdownData = [
    {
      number: 50,
      start: 10,
      title: "Brands our team has delivered for, globally.",
      direction: "up",
      suffix: "+",
    },
    {
      number: 4,
      start: 1,
      title: "Capabilities under one roof, plugged in as you need them.",
      direction: "left",
      suffix: "",
    },
    {
      number: 0,
      start: 0,
      title: "Portfolio posts, case studies, or credits with your name on them.",
      direction: "left",
      suffix: "",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden py-12 pb-0"
    >
      <div className="mx-auto flex max-w-[1100px] flex-col items-stretch md:flex-row">
        <div className="z-20 w-full flex-1 md:-mr-3 md:w-auto">
          <CountCard
            item={countdownData[0]}
            index={0}
            isInView={isInView}
            isFirst={true}
          />
        </div>

        {/* CARDS 2 & 3: CONTAINER */}
        <div className="flex flex-1 flex-col items-center rounded-3xl border border-white/20 bg-[#161618] px-6 py-6 md:flex-[2] md:flex-row md:pl-10 md:pr-8">
          <div className="w-full flex-1">
            <CountCard
              item={countdownData[1]}
              index={1}
              isInView={isInView}
              isFirst={false}
            />
          </div>

          {/* VERTICAL DIVIDER */}
          <div className="my-4 h-px w-full bg-white/20 md:mx-6 md:my-0 md:h-[84px] md:w-px md:shrink-0" />

          <div className="w-full flex-1">
            <CountCard
              item={countdownData[2]}
              index={2}
              isInView={isInView}
              isFirst={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CountCard({
  item,
  index,
  isInView,
  isFirst,
}: {
  item: {
    number: number;
    start: number;
    title: string;
    direction: string;
    suffix: string;
  };
  index: number;
  isInView: boolean;
  isFirst: boolean;
}) {
  const [count, setCount] = useState(item.start);

  useEffect(() => {
    if (!isInView) return;

    // Card 3 static 0
    if (item.start === item.number) {
      setCount(item.number);
      return;
    }

    setCount(item.start);

    // Wait until card entrance transition finishes before counting
    const startDelay = isFirst ? 200 : 350;
    const duration = 1400; // Duration of the number count up

    let animationFrameId: number;

    const timeoutId = setTimeout(() => {
      const startTime = performance.now();

      const animateCount = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Smooth easeOut curve
        const easedProgress = 1 - Math.pow(1 - progress, 2);

        const currentValue = Math.floor(
          item.start + (item.number - item.start) * easedProgress
        );

        setCount(currentValue);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animateCount);
        } else {
          setCount(item.number);
        }
      };

      animationFrameId = requestAnimationFrame(animateCount);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, item.start, item.number, isFirst]);

  return isFirst ? (
    <div className="flex min-h-[170px] h-full w-full flex-col justify-center rounded-3xl bg-[#38383b] px-8 py-7 shadow-2xl">
      <div className="overflow-hidden">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="font-heading text-6xl font-bold leading-none text-[#dfff00] md:text-7xl"
        >
          {count}
          {item.suffix}
        </motion.div>
      </div>

      <motion.p
        initial={{ y: 35, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 35, opacity: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mt-4 max-w-[250px] text-xs leading-relaxed text-white/70"
      >
        {item.title}
      </motion.p>
    </div>
  ) : (
    <div className="flex h-full w-full items-center">
      <div className="w-[80px] shrink-0 overflow-hidden">
        <motion.div
          initial={{ y: 40, opacity: 0, scale: 0.9 }}
          animate={
            isInView
              ? { y: 0, opacity: 1, scale: 1 }
              : { y: 40, opacity: 0, scale: 0.9 }
          }
          transition={{
            duration: 0.6,
            delay: index * 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="font-heading text-6xl font-bold leading-none text-white md:text-7xl"
        >
          {count}
          {item.suffix}
        </motion.div>
      </div>

      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: -40, opacity: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.35 + index * 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="ml-6 max-w-[230px]"
      >
        <p className="text-xs leading-relaxed text-white/80">{item.title}</p>
      </motion.div>
    </div>
  );
}