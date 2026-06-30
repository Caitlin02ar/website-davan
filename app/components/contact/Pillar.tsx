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
        px-12
        py-32
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

        <h1
          ref={headingRef}
          style={{
            opacity: 0,
          }}
          className="
            max-w-5xl
            font-heading
            text-3xl
            leading-tight
            text-white
          "
        >
          {renderHighlightedText(
            data.title,
            data.highlight
          )}
        </h1>

      </div>

      {/* ITEMS */}
      <PillarItems
        data={data.card}
        startDelay={0.7}
      />

    </section>
  );
}