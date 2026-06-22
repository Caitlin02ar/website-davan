"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

export default function RunningText() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.4 })

  return (
    <div>
      {/* ===== 1. Marquee banner: slanted yellow box sliding in from right, looping text ===== */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          initial={{ x: "120%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="relative w-[120%] -ml-[10%] rotate-[1.5deg] bg-primary py-5 sm:py-7"
        >
          <div className="overflow-hidden">
            <motion.div
              className="flex w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 18,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {/* Two identical sets back-to-back so the loop is seamless */}
              {[0, 1].map((set) => (
                <div key={set} className="flex shrink-0">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <span
                      key={i}
                      className="mx-6 shrink-0 whitespace-nowrap font-heading text-3xl font-extrabold uppercase tracking-tight text-dark sm:text-5xl"
                    >
                      Mind the gap
                    </span>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ===== 2. Reveal section: hero background slides in from the right, heading drops from top ===== */}
      <div ref={sectionRef} className="relative overflow-hidden bg-dark px-6 py-20 sm:py-28">
        {/* Background image sliding in from the right */}
        <motion.div
          initial={{ x: "100%" }}
          animate={isInView ? { x: "0%" } : { x: "100%" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image
            src="/photos/hero-bg.webp"
            alt=""
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ y: -60, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: -60, opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="font-heading text-4xl font-extrabold uppercase leading-tight text-white sm:text-5xl md:text-6xl"
          >
            Davan closes the gaps.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
            className="mx-auto mt-6 max-w-2xl font-body text-sm text-white/70 sm:text-base"
          >
            Your brand agency doesn&apos;t talk to your web developer. Your web
            developer doesn&apos;t talk to your CRM. Your CRM doesn&apos;t talk
            to your ad platform. And somewhere in those gaps, leads slip, time
            disappears, and growth stalls. We connect identity, visibility, and
            conversion end-to-end, so your growth has nowhere to leak.
          </motion.p>
        </div>
      </div>
    </div>
  )
}