"use client";

import PillarCard from "./PillarCard";

export default function PillarItems() {
  const PillarItems = [
    {
      number: "Pillar 1",
      title: "Branding",
      description:
        "Brand systems built to outlive trends.",
    },
    {
      number: "Pillar 2",
      title: "Website Development",
      description:
        "Websites engineered to generate leads, not just look good.",
    },
    {
      number: "Pillar 3",
      title: "AI and Automation Systems",
      description:
        "The connected growth engine.",
    },
    {
      number: "Pillar 4",
      title: "Shoot by Code",
      description:
        "Award-winning AI creative production, trusted by global brands.",
    },
  ];

  return (
    <div className="flex justify-center gap-4 mt-16 flex-wrap">
      {PillarItems.map((item, index) => (
        <PillarCard
          key={index}
          number={item.number}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}