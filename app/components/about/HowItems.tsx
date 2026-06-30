"use client";

import { motion } from "framer-motion";
import HowCard from "./HowCard";

interface HowItemsProps {
  data: {
    title: string;
    description: string;

    image: {
      asset: {
        url: string;
      };
    };
  }[];
}

export default function HowItems({
  data,
}: HowItemsProps) {

  // HARD CODE LAYOUT
  const HowItems = data.map(
    (item, index) => ({
      no: `${index + 1}`,

      title: item.title,

      description: item.description,

      image: item.image.asset.url,
    })
  );

  return (
    <section className="py-12 md:py-20">

      <div
        className="
          grid
          grid-cols-1
          gap-4

          md:grid-cols-[42%_58%]
          md:gap-5
        "
      >

        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-4 md:gap-5">

          {/* CARD 1 */}
          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
          >
            <HowCard
              title={HowItems[0]?.title}
              description={HowItems[0]?.description}
              image={HowItems[0]?.image}
              className="
                h-[240px]

                sm:h-[280px]

                md:h-[240px]
              "
            />
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.9,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
          >
            <HowCard
              title={HowItems[2]?.title}
              description={HowItems[2]?.description}
              image={HowItems[2]?.image}
              className="
                h-[300px]

                sm:h-[360px]

                md:h-[420px]
              "
            />
          </motion.div>

        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-4 md:gap-5">

          {/* CARD 2 */}
          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.6,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
          >
            <HowCard
              title={HowItems[1]?.title}
              description={HowItems[1]?.description}
              image={HowItems[1]?.image}
              className="
                h-[260px]

                sm:h-[320px]

                md:h-[320px]
              "
            />
          </motion.div>

          {/* CARD 4 */}
          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 1.2,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
          >
            <HowCard
              title={HowItems[3]?.title}
              description={HowItems[3]?.description}
              image={HowItems[3]?.image}
              className="
                h-[280px]

                sm:h-[340px]

                md:h-[340px]
              "
            />
          </motion.div>

        </div>

      </div>

    </section>
  );
}