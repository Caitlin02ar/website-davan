"use client";

import { useState } from "react";
import Card from "./Card";

export default function CardItems() {
  const cards = [
    {
      number: "1",
      heading:
        "You are paying multiple agencies and still not growing the way you should be.",
    },
    {
      number: "2",
      heading:
        "Your website looks dated, or it just doesn't bring in enquiries.",
    },
    {
      number: "3",
      heading:
        "You have heard about AI and automation but have no idea where to start.",
    },
    {
      number: "4",
      heading:
        "Leads come in, but nothing happens to them. Follow-up is manual and slow.",
    },
  ];

  const [active, setActive] = useState(0);

  const nextCard = () => {
    setActive((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setActive((prev) =>
      prev === 0 ? cards.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative flex justify-center items-center h-[700px]">
      {/* LEFT BUTTON */}

      <button
        onClick={prevCard}
        className="
          absolute
          left-20
          z-50
          w-12
          h-12
          rounded-xl
          border
          border-primary
          flex
          items-center
          justify-center
          text-primary
        "
      >
        ←
      </button>

      {/* STACK CARDS */}

      <div className="relative w-[700px] h-[560px]">
        {/* BACK CARD 3 */}

        <div
          className="
            absolute
            top-[30px]
            left-[120px]
            w-[340px]
            h-[520px]
            rounded-[24px]
            bg-white/[0.03]
            border
            border-white/10
            backdrop-blur-sm
          "
        />

        {/* BACK CARD 2 */}

        <div
          className="
            absolute
            top-[20px]
            left-[90px]
            w-[340px]
            h-[520px]
            rounded-[24px]
            bg-white/[0.04]
            border
            border-white/10
            backdrop-blur-sm
          "
        />

        {/* BACK CARD 1 */}

        <div
          className="
            absolute
            top-[10px]
            left-[60px]
            w-[340px]
            h-[520px]
            rounded-[24px]
            bg-white/[0.05]
            border
            border-white/10
            backdrop-blur-sm
          "
        />

        {/* ACTIVE CARD */}

        <div className="absolute z-20">
          <Card
            tag="IS THIS YOU?"
            heading={cards[active].heading}
            button="Start Your Transformation"
          />
        </div>
      </div>

      {/* RIGHT BUTTON */}

      <button
        onClick={nextCard}
        className="
          absolute
          right-20
          z-50
          w-12
          h-12
          rounded-xl
          border
          border-primary
          flex
          items-center
          justify-center
          text-primary
        "
      >
        →
      </button>
    </div>
  );
}