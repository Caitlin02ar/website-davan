"use client";

import FourPillarCard from "./FourPillarCard";

export default function FourPillarItems() {
  const items = [
    {
      number: "PILLAR 1",
      title: "Branding",
      description: "Brand systems built to outlive trends.",
      image: "/photos/how-1.webp",
    },
    {
      number: "PILLAR 2",
      title: "Website Development",
      description:
        "Websites engineered to generate leads, not just look good.",
      image: "/photos/how-2.webp",
    },
    {
      number: "PILLAR 3",
      title: "AI and Automation Systems",
      description: "The connected growth engine.",
      image: "/photos/how-3.webp",
    },
    {
      number: "PILLAR 4",
      title: "Shoot by Code",
      description:
        "Award-winning AI creative production, trusted by global brands.",
      image: "/photos/how-4.webp",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {items.map((item, index) => (
        <FourPillarCard
          key={index}
          number={item.number}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
  );
}