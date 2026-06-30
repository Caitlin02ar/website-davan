"use client";

import { motion } from "framer-motion";

interface StepsProps {
  data: {
    heading: string;
    subheading: string;

    content: {
      number: number;
      title: string;
      description: string;
    }[];
  };
}

export default function Steps({
  data,
}: StepsProps) {
  const ease = [0.22, 1, 0.36, 1] as const;

  const StepsItems = data.content.map(
    (item, index) => ({
      ...item,
      tall: index === 1 || index === 2,
    })
  );

  return (
    <section
      id="how-we-work"
      className="
        overflow-hidden
        px-5
        py-20
        sm:px-6
        md:px-16
        md:py-32
      "
    >
      {/* HEADING */}
      <div className="flex flex-col items-center text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: -100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.6,
          }}
          transition={{
            duration: 1.2,
            ease,
          }}
          className="flex flex-col items-center"
        >
          <h1
            className="
              font-heading
              text-xl
              leading-tight
              text-white

              sm:text-2xl

              md:text-3xl
            "
          >
            {data.heading}
          </h1>

          <h1
            className="
              font-heading
              text-xl
              leading-tight
              text-primary

              sm:text-2xl

              md:text-3xl
            "
          >
            {data.subheading}
          </h1>
        </motion.div>
      </div>

      {/* TIMELINE */}
      <div className="relative mt-14 md:mt-24">

        {/* HORIZONTAL LINE */}
        <motion.div
          initial={{
            scaleX: 0,
            opacity: 0,
          }}
          whileInView={{
            scaleX: 1,
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 1.2,
            delay: 1.3,
            ease: [0.65, 0, 0.35, 1],
          }}
          style={{
            originX: 0,
          }}
          className="
            absolute
            left-0
            right-0
            top-[132px]
            hidden
            h-[1px]
            bg-gradient-to-r
            from-transparent
            via-white/80
            to-transparent

            md:block
          "
        />

        {/* DESKTOP */}
        <div className="relative z-10 hidden md:grid grid-cols-4">
          {StepsItems.map((item, index) => {

            // STEP BERURUTAN
            const sequenceDelay = 2.3 + index * 1.5;

            return (
              <div
                key={item.number}
                className={`
                  relative
                  flex
                  flex-col
                  items-center
                  text-center

                  ${item.tall ? "-mt-8" : ""}
                `}
              >

                {/* TITLE */}
                <motion.h3
                  initial={{
                    opacity: 0,
                    y: -70,
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
                    duration: 0.8,
                    delay: sequenceDelay,
                    ease,
                  }}
                  className="
                    font-heading
                    text-lg
                    text-white
                  "
                >
                  {item.title}
                </motion.h3>

                {/* VERTICAL LINE */}
                <div
                  className={`
                    mt-4
                    flex
                    items-end
                    overflow-hidden

                    ${item.tall ? "h-32" : "h-24"}
                  `}
                >
                  <motion.div
                    initial={{
                      height: 0,
                    }}
                    whileInView={{
                      height: item.tall ? 128 : 96,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.4,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: sequenceDelay,
                      ease: [0.65, 0, 0.35, 1],
                    }}
                    className="
                      w-[1px]
                      self-end
                      bg-white
                    "
                  />
                </div>

                {/* DOT */}
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.4,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: sequenceDelay,
                  }}
                  className={`
                    absolute
                    left-1/2
                    h-2.5
                    w-2.5
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-primary
                    shadow-[0_0_10px_#D7FF00]

                    ${item.tall ? "top-[164px]" : "top-[132px]"}
                  `}
                />

                {/* DESCRIPTION */}
                <motion.p
                  initial={{
                    opacity: 0,
                    y: 40,
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
                    duration: 0.8,
                    delay: sequenceDelay,
                    ease,
                  }}
                  className="
                    mt-8
                    max-w-[180px]
                    font-body
                    text-sm
                    leading-relaxed
                    text-white
                  "
                >
                  {item.description}
                </motion.p>

              </div>
            );
          })}
        </div>

        {/* MOBILE */}
        <div
          className="
            relative
            z-10
            flex
            flex-col
            gap-12

            md:hidden
          "
        >
          {StepsItems.map((item, index) => {

            // STEP BERURUTAN
            const sequenceDelay = 2.3 + index * 1.5;

            return (
              <div
                key={item.number}
                className="relative flex items-start gap-5"
              >

                {/* LEFT */}
                <div className="flex flex-col items-center">

                  {/* DOT */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.7,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.4,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: sequenceDelay,
                    }}
                    className="
                      h-2.5
                      w-2.5
                      rounded-full
                      bg-primary
                      shadow-[0_0_10px_#D7FF00]
                    "
                  />

                  {index !== StepsItems.length - 1 && (
                    <div className="flex h-20 items-end overflow-hidden">
                      <motion.div
                        initial={{
                          height: 0,
                        }}
                        whileInView={{
                          height: 80,
                        }}
                        viewport={{
                          once: true,
                          amount: 0.4,
                        }}
                        transition={{
                          duration: 0.8,
                          delay: sequenceDelay,
                          ease: [0.65, 0, 0.35, 1],
                        }}
                        className="
                          w-[1px]
                          self-end
                          bg-white
                        "
                      />
                    </div>
                  )}

                </div>

                <div className="flex-1">

                  {/* TITLE */}
                  <motion.h3
                    initial={{
                      opacity: 0,
                      y: -50,
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
                      duration: 0.8,
                      delay: sequenceDelay,
                      ease,
                    }}
                    className="
                      font-heading
                      text-base
                      text-white

                      sm:text-lg
                    "
                  >
                    {item.title}
                  </motion.h3>

                  {/* DESCRIPTION */}
                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 35,
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
                      duration: 0.8,
                      delay: sequenceDelay,
                      ease,
                    }}
                    className="
                      mt-2
                      font-body
                      text-sm
                      leading-relaxed
                      text-white
                    "
                  >
                    {item.description}
                  </motion.p>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}