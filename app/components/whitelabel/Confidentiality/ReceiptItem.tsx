"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ReceiptItem() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full max-w-sm mx-auto select-none">
      {/* PRINTER SLOT */}
      <div className="relative z-20 w-full">
        <div className=" border border-white/20 bg-gradient-to-b from-neutral-300 via-neutral-500 to-neutral-700 p-[3px] shadow-[0_4px_14px_rgba(0,0,0,0.55)]">
          <div className="h-2.5 w-full bg-gradient-to-r from-black via-neutral-800 to-black" />
        </div>
      </div>

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="relative z-10 -mt-px flex w-full justify-center text-left focus:outline-none cursor-pointer"
      >
        <motion.div
          layout
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 28,
            mass: 0.9,
          }}
          className="relative w-[92%] bg-[#aeb2b3] text-black shadow-[0_10px_25px_rgba(0,0,0,0.5)] overflow-hidden"
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
          <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-black/25 to-transparent pointer-events-none" />

          <div className="relative px-6 pb-8 pt-8 md:px-8 md:pb-9 md:pt-9 z-10">
            <AnimatePresence mode="wait" initial={false}>
              {!isOpen ? (
                <motion.div
                  key="collapsed"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-xs md:text-sm">
                      Client
                    </span>
                    <span className="font-body font-bold text-sm text-primary md:text-base">
                      Your Client
                    </span>
                  </div>

                  <div className="mt-6 flex items-start justify-between">
                    <span className="text-xs md:text-sm">
                      Design and build
                    </span>
                    <span className="font-body font-bold text-sm text-primary md:text-base">
                      Your Studio
                    </span>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-4 items-end">
                    <div>
                      <p className="text-[10px] font-medium text-primary md:text-xs">
                        &quot;Click the receipt.&quot;
                      </p>
                      <p className="mt-1 text-xs leading-relaxed md:text-xs opacity-80 font-body">
                        That is the only place our name appears, and your client
                        never sees this page.
                      </p>
                    </div>
                    <div className="flex justify-end">
                      <Barcode />
                    </div>
                  </div>
                </motion.div>
              ) : (
                /* STATE 2: CLICKED / EXPANDED */
                <motion.div
                  key="expanded"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-black/60 md:text-sm">
                      Project credit
                    </span>
                    <span className="text-xs text-black/60 md:text-sm">
                      As your client sees it
                    </span>
                  </div>

                  <div className="mt-2 mb-6 space-y-1">
                    <div className="h-px bg-black/40" />
                    <div className="h-px bg-black/40" />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm md:text-base">
                      Delivered by
                    </span>
                    <span className="font-heading text-base font-bold text-[#595959] md:text-lg">
                      DAVAN Digital
                    </span>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-sm md:text-base">
                      Client
                    </span>
                    <span className="font-body text-base font-bold text-primary md:text-lg">
                      Your Client
                    </span>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-sm md:text-base">
                      Design and build
                    </span>
                    <span className="font-body text-base font-bold text-primary md:text-lg">
                      Your Studio
                    </span>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-4 items-end">
                    <div>
                      <p className="text-[8px] text-primary md:text-sm">
                        &quot;Click the receipt.&quot;
                      </p>
                      <p className="mt-1 text-xs leading-relaxed md:text-sm opacity-80">
                        That is the only place our name appears, and your client
                        never sees this page.
                      </p>
                    </div>
                    <div className="flex justify-end">
                      <Barcode />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
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