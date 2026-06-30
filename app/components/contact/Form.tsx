"use client";

import { motion } from "framer-motion";
import FormCard from "./FormCard";

interface FormProps {
  data: any;
  modalData: any;
}

export default function Form({
  data,
  modalData,
}: FormProps) {

  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        px-24
        py-24
      "
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">

        <img
          src="/photos/hero-bg.webp"
          alt=""
          className="h-full w-full object-cover"
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-black/80
            via-black/40
            to-black/90
          "
        />

      </div>

      {/* CONTENT */}
      <div className="relative z-10">

        <motion.div
          initial={{
            y: -250,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <FormCard
            data={data}
            modalData={modalData}
          />

        </motion.div>

      </div>

    </section>
  );
}