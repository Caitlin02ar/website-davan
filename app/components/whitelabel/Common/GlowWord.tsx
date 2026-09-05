"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

type GlowWordProps = {
  children: React.ReactNode;
  className?: string;
};

export default function GlowWord({ children, className = "" }: GlowWordProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 }); // dalam persen
  const spanRef = useRef<HTMLSpanElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (!spanRef.current) return;
    const rect = spanRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <span
      ref={spanRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className={`relative inline-block cursor-default ${className}`}
    >
      {/* Layer bawah: teks normal, selalu keliatan, warna default dari className */}
      <span className="invisible" aria-hidden="true">
        {children}
      </span>
      <span className="absolute inset-0">{children}</span>

      {/* Layer atas: gradient radial yang titik terangnya ngikutin posisi kursor */}
      <motion.span
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle 60px at ${mousePos.x}% ${mousePos.y}%, #dfff00 0%, #dfff00 30%, #6b6f72 75%)`,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          color: "transparent",
        }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {children}
      </motion.span>
    </span>
  );
}