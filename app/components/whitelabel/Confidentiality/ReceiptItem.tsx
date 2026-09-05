"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ReceiptItem() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-sm select-none">
      {/* PRINTER SLOT COVER (Z-30 ON TOP) */}
      <div className="relative z-30 w-full rounded-t-sm border border-white/30 bg-gradient-to-r from-[#111111] via-[#777777] to-[#f2f2f2] p-[3px] shadow-[0_4px_14px_rgba(0,0,0,0.55)]">
        <div className="h-2.5 w-full bg-gradient-to-r from-black via-[#454545] to-[#e6e6e6] shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]" />
        <div className="pointer-events-none absolute inset-x-3 bottom-0 h-px bg-white/40" />
      </div>

      {/* RECEIPT PAPER CONTAINER (Z-20 UNDERNEATH SLOT COVER) */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="relative z-20 -mt-2 flex w-full cursor-pointer justify-center text-left focus:outline-none"
      >
        <motion.div
          layout
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1], // Smooth motorized printer feed
          }}
          className="relative w-[92%] origin-top overflow-hidden bg-[#aeb2b3] text-black shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
          style={{
            maskImage:
              "radial-gradient(circle 8px at 12px 100%, transparent 100%, black 100%)",
            maskSize: "20px 100%",
            maskRepeat: "repeat-x",
            WebkitMaskImage:
              "radial-gradient(circle 8px at 12px 100%, transparent 100%, black 100%)",
            WebkitMaskSize: "32px 100%",
            WebkitMaskRepeat: "repeat-x",
          }}
        >
          {/* PRINTER SLOT SHADOW CAST ON PAPER */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-6 bg-gradient-to-b from-black/35 via-black/15 to-transparent" />

          {/* PRINTED PAPER CONTENT */}
          <div className="relative z-10 px-6 pb-8 pt-7 md:px-8 md:pb-9 md:pt-8">
            {/* NEW PRINTED LINES (FEEDS DOWNWARD FROM PRINTER SLOT ON OPEN) */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0, y: -15 }}
                  animate={{ height: "auto", opacity: 1, y: 0 }}
                  exit={{ height: 0, opacity: 0, y: -15 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="flex items-center justify-between pb-2 text-xs text-black/60 md:text-sm">
                    <span>Project credit</span>
                    <span>As your client sees it</span>
                  </div>
                  <div className="mb-4 space-y-1">
                    <div className="h-px bg-black/40" />
                    <div className="h-px bg-black/40" />
                  </div>
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-sm md:text-base">Delivered by</span>
                    <span className="font-heading text-base font-bold text-[#595959] md:text-lg">
                      DAVAN Digital
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* BASE RECEIPT INFO */}
            <div className="flex items-center justify-between">
              <span className="text-xs md:text-sm">Client</span>
              <span className="font-body text-sm font-bold text-primary md:text-base">
                Your Client
              </span>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <span className="text-xs md:text-sm">Design and build</span>
              <span className="font-body text-sm font-bold text-primary md:text-base">
                Your Studio
              </span>
            </div>

            {/* BARCODE & INSTRUCTIONS */}
            <div className="mt-8 grid grid-cols-2 items-end gap-4">
              <div>
                <p className="text-[10px] font-medium text-primary md:text-xs">
                  &quot;Click the receipt.&quot;
                </p>

                <p className="font-body mt-1 text-xs leading-relaxed opacity-80">
                  That is the only place our name appears, and your client never
                  sees this page.
                </p>
              </div>
              <div className="flex justify-end">
                <Barcode />
              </div>
            </div>
          </div>
        </motion.div>
      </button>
    </div>
  );
}

function Barcode() {
  const bars = [3, 1, 2, 1, 4, 2, 1, 3, 1, 2, 4, 1, 2, 3, 1];

  return (
    <div className="flex h-12 items-stretch gap-1 md:h-14">
      {bars.map((width, index) => (
        <span
          key={index}
          className="bg-black"
          style={{ width: `${width * 1.8}px` }}
        />
      ))}
    </div>
  );
}