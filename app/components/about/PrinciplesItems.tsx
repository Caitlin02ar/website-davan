"use client";

import { motion } from "motion/react";
import PrincipleCard from "./PrincipleCard";

const ease = [0.22, 1, 0.36, 1] as const;

interface PrinciplesItemsProps {
  shouldAnimate: boolean;

  data: {
    title: string;
    description: string;

    icon: {
      asset: {
        url: string;
      };
    };
  }[];
}

export default function PrinciplesItems({
  shouldAnimate,
  data,
}: PrinciplesItemsProps) {

  const PrinciplesItems = data.map(
    (item, index) => ({
      no: `${index + 1}`,

      title: item.title,

      description: item.description,

      icon: item.icon.asset.url,
    })
  );

  return (
    <section
      className="
        overflow-hidden

        px-5
        sm:px-8
        md:px-12
        lg:px-0
      "
    >

      <div
        className="
          grid
          grid-cols-1
          gap-y-14

          sm:grid-cols-2
          sm:gap-x-10

          lg:gap-x-16
          lg:gap-y-28
        "
      >

        {PrinciplesItems.map((item, i) => (

          <motion.div
            key={item.no}
            initial={{
              opacity: 0,
              x: -120,
            }}
            animate={
              shouldAnimate
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {
                    opacity: 0,
                    x: -120,
                  }
            }
            transition={{
              duration: 0.9,
              ease,
              delay: 1.2 + i * 0.6,
            }}
          >

            <PrincipleCard
              icon={item.icon}
              title={item.title}
              description={item.description}
            />

          </motion.div>

        ))}

      </div>

    </section>
  );
}