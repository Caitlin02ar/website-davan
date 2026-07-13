"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { sanityImage } from "@/lib/image";

interface AprroachBannerProps {
  data: {
    heading: string;
    highlightHeading: string;
    description: string;
    backgroundImage: string;
  };
}

export default function DescriptionBanner({
  data,
}: AprroachBannerProps) {
  return (
    <section className="overflow-hidden">
      <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
        {/* BACKGROUND IMAGE */}
        <Image
          src={sanityImage(data.backgroundImage, 1920)}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/45 to-black/90" />

        <div
          className="
            absolute
            inset-0

            flex
            flex-col
            items-center
            justify-center

            text-center

            px-5
            sm:px-8
            lg:px-6
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              y: -120,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 1.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              flex
              flex-col
              items-center
            "
          >
            <h2
              className="
                font-heading

                text-white

                text-[2.2rem]
                sm:text-[3.5rem]
                md:text-5xl

                leading-[0.95]

                max-w-[95%]
                sm:max-w-3xl
              "
            >
              {data.heading.replace(
                data.highlightHeading,
                ""
              )}
            </h2>

            <span
              className="
                font-heading

                text-primary

                text-[2.2rem]
                sm:text-[3.5rem]
                md:text-5xl

                leading-[0.95]

                max-w-[95%]
                sm:max-w-3xl
              "
            >
              {data.highlightHeading}
            </span>
          </motion.div>

          {/* DESCRIPTION */}
          <motion.p
            initial={{
              opacity: 0,
              y: -80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 1.1,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              font-body

              text-white

              max-w-[95%]
              sm:max-w-xl
              lg:max-w-lg

              mt-5
              sm:mt-6

              text-[13px]
              sm:text-[15px]

              leading-relaxed
            "
          >
            {data.description}
          </motion.p>
        </div>
      </div>
    </section>
  );
}