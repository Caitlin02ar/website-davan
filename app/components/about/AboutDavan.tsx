"use client";

import { motion } from "framer-motion";
import { renderHighlightedText } from "@/lib/highlightText";

const ease = [0.22, 1, 0.36, 1] as const;

interface AboutProps{
  data:{
    heading:string;
    highlightText:string;
    description:string;
  }
}

export default function AboutDavan({
  data,
}:AboutProps) {
  return (
    <section
    id="history"
      className="
        py-32
        lg:py-44
        px-6
        sm:px-10
        lg:px-32
        overflow-hidden
        overflow-x-hidden 
      "
    >
      <div className="flex flex-col">
        <div
          className="
            flex
            flex-col
            lg:flex-row
            lg:justify-between
            lg:items-center
            gap-10
          "
        >
          {/* HEADING */}
          <motion.div
            initial={{
              opacity: 0,
              x: -120,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              ease,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
          >
            <h1
              className="
                font-heading
                text-4xl
                sm:text-5xl
                lg:text-5xl
                max-w-2xl
                leading-tight
              "
            >
              {renderHighlightedText(data.heading, data.highlightText)}
            </h1>
          </motion.div>

          {/* DESCRIPTION */}
          <motion.div
            initial={{
              opacity: 0,
              x: -80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.9,
              ease,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
          >
            <p
              className="
                font-body
                text-xs
                sm:text-sm
                max-w-xs
                font-light
                leading-relaxed
              "
            >
              {data.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}