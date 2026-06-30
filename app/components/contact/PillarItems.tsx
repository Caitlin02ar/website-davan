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
        mt-20
        grid
        grid-cols-1
        gap-8

        md:grid-cols-2

        xl:grid-cols-4
      "
    >

      {data.map((item, index) => (

        <div
          key={index}
          className="
            flex
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
              index * 0.2
            }
          />

        </div>

      ))}

    </section>
  );
}