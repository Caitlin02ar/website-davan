"use client";

import { motion } from "framer-motion";
import ServicesCard from "./ServicesCard";

interface ServicesCardItemsProps {
  data: {
    cardContent: {
      tag: string;
      title: string;
      description: string;
      badgesItems: string[];
    }[];
  };
}

export default function ServicesCardItems({
  data,
}: ServicesCardItemsProps) {

  // HARDCODE IMAGE ONLY
  const images = [
    "/photos/services-pillar-1.webp",
    "/photos/services-pillar-2.webp",
    "/photos/services-pillar-3.webp",
    "/photos/services-pillar-4.webp",
  ];

  // CMS CONTENT + HARDCODE IMAGE
  const CardItems = data.cardContent.map(
    (item, index) => ({
      subtitle: item.tag,
      title: item.title,
      description: item.description,
      tag: item.badgesItems,

      // IMAGE HARDCODE
      backgroundImage: images[index],
    })
  );

  return (
    <div
      id="four-pillars"
      className="
        grid
        grid-cols-1

        gap-8

        px-6
        py-16

        md:px-10

        lg:grid-cols-2
        lg:gap-2

        xl:gap-6

        lg:px-24
      "
    >

      {/* LEFT COLUMN */}
      <div
        className="
          flex
          flex-col

          gap-10

          lg:gap-16

          items-center
          lg:items-start

          justify-center
        "
      >

        {[CardItems[0], CardItems[2]].map((item, i) => (

          <motion.div
            key={i}
            initial={{
              opacity: 0,
              x: 120,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              delay: i * 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              w-full

              flex
              justify-center

              lg:justify-start
            "
          >

            <ServicesCard
              {...item}
              width="w-full lg:w-[88%]"
            />

          </motion.div>

        ))}

      </div>

      {/* RIGHT COLUMN */}
      <div
        className="
          flex
          flex-col

          gap-10

          lg:mt-18

          items-center
          lg:items-end
        "
      >

        {/* CARD 2 */}
        <motion.div
          initial={{
            opacity: 0,
            x: 120,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            delay: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            w-full

            flex
            justify-center

            lg:justify-end
          "
        >

          <ServicesCard
            {...CardItems[1]}
            width="w-full lg:w-[92%]"
          />

        </motion.div>

        {/* CARD 4 */}
        <motion.div
          initial={{
            opacity: 0,
            x: 120,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            delay: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            w-full

            flex
            justify-center

            lg:justify-end
            lg:mt-6
          "
        >

          <ServicesCard
            {...CardItems[3]}
            width="w-full lg:w-[92%]"
          />

        </motion.div>

      </div>

    </div>
  );
}