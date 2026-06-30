"use client";

import { motion } from "framer-motion";

interface FourPillarCardProps {
  number: string;
  title: string;
  description: string;
  image: string;
  index: number;
}

export default function FourPillarCard({
  number,
  title,
  description,
  image,
  index,
}: FourPillarCardProps) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      
      transition={{ 
        y: { 
          duration: 0.9, 
          ease: [0.16, 1, 0.3, 1], 
          delay: index * 0.45 
        },
        opacity: { 
          duration: 0.9, 
          ease: [0.16, 1, 0.3, 1], 
          delay: index * 0.45 
        },
        scale: { 
          duration: 0.2, 
          ease: "easeOut",
          delay: 0 
        }
      }}
      
      // Animasi zoom saat di-hover
      whileHover={{ 
        scale: 1.04 
      }}
      className="
        relative
        origin-top
        hover:z-30
        bg-[#0E0E0E]
        border border-white/10
        rounded-[28px]
        p-4
        cursor-pointer
        
        transition-[border-color,box-shadow]
        duration-300
        hover:border-white/20
      "
    >
      {/* IMAGE CONTAINER */}
      <div className="overflow-hidden rounded-[22px]">
        <img
          src={image}
          alt={title}
          className="w-full h-[200px] sm:h-[260px] md:h-[280px] lg:h-[320px] object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="pt-4 sm:pt-5 md:pt-6 px-2 pb-3 md:pb-4">
        <span className="text-xs sm:text-sm uppercase tracking-wider text-white/60">
          {number}
        </span>

        <h3
          className="
            mt-2
            text-primary
            font-heading
            text-lg
            sm:text-xl
            md:text-xl
            leading-tight
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-3
            sm:mt-4
            text-white/75
            text-xs
            sm:text-sm
            leading-relaxed
            max-w-[220px]
          "
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}