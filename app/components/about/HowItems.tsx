"use client";

import HowCard from "./HowCard";

export default function HowItems() {
  const HowItems = [
    {
      no: "1",
      title: "Reliable Execution",
      description:
        "We do what we say we'll do, when we say we'll do it.",
      image: "/photos/how-1.webp",
    },
    {
      no: "2",
      title: "Practical, not Performative",
      description:
        "Every recommendation has to earn its place by making the business work better.",
      image: "/photos/how-2.webp",
    },
    {
      no: "3",
      title: "Intentional Design",
      description:
        "Nothing in your work with us exists by accident.",
      image: "/photos/how-3.webp",
    },
    {
      no: "4",
      title: "A True Partnership",
      description:
        "We act as a single point of accountability across brand, marketing, and growth.",
      image: "/photos/how-4.webp",
    },
  ];

  return (
    <section className="py-24">
      <div className="grid grid-cols-[42%_58%] gap-5">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-5">
          <HowCard
            title={HowItems[0].title}
            description={HowItems[0].description}
            image={HowItems[0].image}
            className="h-[240px]"
          />

          <HowCard
            title={HowItems[2].title}
            description={HowItems[2].description}
            image={HowItems[2].image}
            className="h-[420px]"
          />
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-5">
          <HowCard
            title={HowItems[1].title}
            description={HowItems[1].description}
            image={HowItems[1].image}
            className="h-[320px]"
          />

          <HowCard
            title={HowItems[3].title}
            description={HowItems[3].description}
            image={HowItems[3].image}
            className="h-[340px]"
          />
        </div>
      </div>
    </section>
  );
}