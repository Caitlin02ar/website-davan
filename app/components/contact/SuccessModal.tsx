"use client";

import Image from "next/image";
import { sanityImage } from "@/lib/image";

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
  message: string;
  icon: string;
}

export default function SuccessModal({
  open,
  onClose,
  message,
  icon
}: SuccessModalProps) {

  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[999]
        flex
        items-center
        justify-center
        bg-black/40
        backdrop-blur-sm

        px-4
        py-6

        sm:px-6
      "
    >

      {/* MODAL CARD */}
      <div
        className="
          relative
          w-full
          max-w-xl

          rounded-[24px]
          border
          border-white/10

          bg-dark

          px-6
          py-12

          sm:px-10
          sm:py-14

          md:px-14
          md:py-16
        "
      >

        <button
          onClick={onClose}
          className="
            absolute

            right-4
            top-4

            rounded-full
            border
            border-primary

            px-4
            py-2

            font-body
            text-xs
            text-primary

            transition-all
            duration-300

            hover:bg-primary
            hover:text-black

            sm:right-6
            sm:top-6

            sm:px-5
            sm:py-2.5

            sm:text-sm
          "
        >
          Close
        </button>

        {/* CONTENT */}
        <div
          className="
            flex
            flex-col
            items-center
            text-center
          "
        >

          <Image
            src={sanityImage(icon, 120)}
            alt=""
            width={60}
            height={60}
            sizes="100vw"
            className="
              mb-6

              h-[60px]
              w-[60px]

              object-contain

              sm:mb-8

              sm:h-[60px]
              sm:w-[60px]
              
            "
          />

          {/* TEXT */}
          <p
            className="
              max-w-xl

              font-body
              text-base
              leading-relaxed
              text-white

              sm:text-sm

              md:text-md
            "
          >
           {message}
          </p>

        </div>

      </div>

    </div>
  );
}