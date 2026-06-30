"use client";

import { motion } from "framer-motion";

import FourPillarCard from "./FourPillarCard";

export default function FourPillarItems({
  items,
}: {
  items: any[];
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.7, // jeda antar card
          },
        },
      }}
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-4

        gap-4
        sm:gap-5
        md:gap-6
      "
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: {
              y: 90,
              opacity: 0,
              scale: 0.96,
            },
            visible: {
              y: 0,
              opacity: 1,
              scale: 1,
            },
          }}
          transition={{
            duration: 1.25,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <FourPillarCard
            index={index}
            number={item.tag}
            title={item.title}
            description={item.description}
            image={item.picture}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}