"use client";

import PillarCard from "./PillarCard";

interface PillarItemsProps {

  startDelay: number;

  data: {
    tag: string;
    title: string;
    description: string;
  }[];
}

export default function PillarItems({
  startDelay,
  data,
}: PillarItemsProps) {

  return (
    <section
      className="
        mt-12
        grid
        grid-cols-1
        gap-6

        md:mt-20
        md:grid-cols-2
        md:gap-8

        xl:grid-cols-4
      "
    >

      {data.map((item, index) => (

        <div
          key={index}
          className="
            flex
            w-full
            justify-center
          "
        >

          <PillarCard
            number={item.tag}
            title={item.title}
            description={item.description}
            shouldAnimate={true}
            delay={
              startDelay +
              index * 1
            }
          />

        </div>

      ))}

    </section>
  );
}