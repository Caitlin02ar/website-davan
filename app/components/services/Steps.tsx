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
    <motion.section
      id="how-we-work"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      variants={{
        hidden: {},
        visible: {},
      }}
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
          variants={{
            hidden: {
              opacity: 0,
              y: -100,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 1.2,
                ease,
              },
            },
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
          variants={{
            hidden: {
              scaleX: 0,
              opacity: 0,
            },
            visible: {
              scaleX: 1,
              opacity: 1,
              transition: {
                duration: 1.2,

                // setelah heading selesai
                delay: 1.2,

                ease: [0.65, 0, 0.35, 1],
              },
            },
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
        <motion.div
          variants={{
            hidden: {},
            visible: {
              transition: {

                // nunggu heading + garis selesai
                delayChildren: 2.6,

                // step satu selesai dulu baru lanjut
                staggerChildren: 1.35,
              },
            },
          }}
          className="
            relative
            z-10
            hidden
            grid-cols-4
            md:grid
          "
        >
          {StepsItems.map((item) => {
            return (
              <motion.div
                key={item.number}
                variants={{
                  hidden: {
                    opacity: 0,
                    // y: 80,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 1,
                      ease,
                    },
                  },
                }}
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
                <h3
                  className="
                    font-heading
                    text-lg
                    text-white
                  "
                >
                  {item.title}
                </h3>

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
                    variants={{
                      hidden: {
                        height: 0,
                      },
                      visible: {
                        height: item.tall ? 128 : 96,
                        transition: {
                          duration: 0.8,
                          ease: [0.65, 0, 0.35, 1],
                        },
                      },
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
                  variants={{
                    hidden: {
                      opacity: 0,
                      scale: 0.7,
                    },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: {
                        duration: 0.5,
                      },
                    },
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
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 40,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.8,
                        ease,
                      },
                    },
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

              </motion.div>
            );
          })}
        </motion.div>

        {/* MOBILE — rebuilt: continuous connector line, numbered dots, synced fade-in */}
        <motion.div
          variants={{
            hidden: {},
            visible: {
              transition: {
                delayChildren: 0.2,
                staggerChildren: 0.25,
              },
            },
          }}
          className="
            relative
            z-10
            flex
            flex-col

            md:hidden
          "
        >

          {/* CONTINUOUS CONNECTOR LINE
              Absolutely positioned down the dot column. Grows once from top to
              bottom, so it always reaches every dot regardless of text length —
              this is what fixes the old broken/short line on the last step. */}
          <motion.div
            aria-hidden
            variants={{
              hidden: { scaleY: 0 },
              visible: {
                scaleY: 1,
                transition: {
                  duration: 1,
                  delay: 0.2,
                  ease: [0.65, 0, 0.35, 1],
                },
              },
            }}
            style={{ originY: 0 }}
            className="
              absolute
              left-[13px]
              top-3
              bottom-3
              w-[1px]
              bg-gradient-to-b
              from-white/80
              via-white/40
              to-transparent
            "
          />

          {StepsItems.map((item) => {
            return (
              <motion.div
                key={item.number}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 24,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease,
                    },
                  },
                }}
                className="
                  relative
                  flex
                  items-start
                  gap-5

                  pb-12
                  last:pb-0
                "
              >

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      scale: 0.6,
                    },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: {
                        duration: 0.4,
                        ease,
                      },
                    },
                  }}
                  className="
                    relative
                    z-10
                    flex
                    h-7
                    w-7
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-primary
                    font-heading
                    text-xs
                    font-bold
                    text-[#0F0F11]
                    shadow-[0_0_12px_#D7FF00]
                  "
                >
                </motion.div>

                {/* CONTENT */}
                <div className="flex-1 pt-0.5">

                  <h3
                    className="
                      font-heading
                      text-base
                      text-white

                      sm:text-lg
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      font-body
                      text-sm
                      leading-relaxed
                      text-white/90
                    "
                  >
                    {item.description}
                  </p>

                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </motion.section>
  );
}