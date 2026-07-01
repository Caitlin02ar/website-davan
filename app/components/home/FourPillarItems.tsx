"use client";

import FourPillarCard from "./FourPillarCard";

export default function FourPillarItems({
  items,
}: {
  items: any[];
}) {
  return (
    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-4
        gap-4
        sm:gap-5
        md:gap-6
      "
    >
      {items.map((item, index) => (
        <FourPillarCard
          key={index}
          index={index}
          number={item.tag}
          title={item.title}
          description={item.description}
          image={item.picture}
        />
      ))}
    </div>
  );
}