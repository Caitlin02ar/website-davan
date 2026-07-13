"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

import PillarItems from "./PillarItems";
import { renderHighlightedText } from "@/lib/highlightText";

interface PillarProps {
  data: {
    tag: string;
    title: string;
    highlight: string;

    card: {
      tag: string;
      title: string;
      description: string;
    }[];
  };
}

export default function Pillar({
  data,
}: PillarProps) {

  const headingRef =
    useRef<HTMLHeadingElement>(null);

  const sectionRef =
    useRef<HTMLElement>(null);

  const isInView = useInView(
    sectionRef,
    {
      once: true,
      margin: "-100px",
    }
  );

  useEffect(() => {

    if (
      !isInView ||
      !headingRef.current
    ) return;

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
      "
    >

      {/* HEADING */}
      <div
        className="
          flex
          flex-col
          items-center
          text-center
        "
      >

        <h2
          ref={headingRef}
          style={{
            opacity: 0,
          }}
          className="
            max-w-3xl
            font-heading
            md:text-3xl
            leading-tight
            text-white
            text-2xl
          "
        >
          {renderHighlightedText(
            data.title,
            data.highlight
          )}
        </h2>
      </div>

      {/* ITEMS */}
      <PillarItems
        data={data.card}
        startDelay={0.8}
      />

    </section>
  );
}