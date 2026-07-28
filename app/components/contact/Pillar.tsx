"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

import PillarItems from "./PillarItems";
import { renderHighlightedText } from "@/lib/highlightText";

interface PillarProps {
  data: {
    heading: {
      tag: string;
      title: string;
      highlight: string;
    };

    card: {
      tag: string;
      title: string;
      description: string;
    }[];
  };
}

export default function Pillar({ data }: PillarProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });

  useEffect(() => {
    if (!isInView || !headingRef.current) return;

    animate(
      headingRef.current,
      {
        opacity: [0, 1],
        y: [-40, 0],
      },
      {
        duration: 0.6,
        ease: "easeOut",
      }
    );
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="
        px-6
        py-16
        md:px-12
        md:py-32
        w-full
        flex
        flex-col
        items-center
      "
    >
      <div className="w-full max-w-[320px] md:max-w-5xl flex flex-col items-center">
        
        <div className="w-full text-center ">
          <h2
            ref={headingRef}
            style={{
              opacity: 0,
            }}
            className="
              w-full
              font-heading
              text-xl
              md:text-3xl
              leading-tight
              text-white
            "
          >
            {renderHighlightedText(
              data.heading.title,
              data.heading.highlight
            )}
          </h2>
        </div>

        {/* ITEMS */}
        <div className="w-full flex justify-center">
          <PillarItems data={data.card} startDelay={0.8} />
        </div>
        
      </div>
    </section>
  );
}