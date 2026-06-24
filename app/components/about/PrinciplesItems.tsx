"use client";

import PrincipleCard from "./PrincipleCard";

export default function PrinciplesItems() {
  const PrinciplesItems = [
    {
      no: "1",
      title: "Creative Intelligence",
      description:
        "Strategic thinking meets AI capability to solve real marketing challenges.",
      icon: "/assets/lamp.svg",
    },
    {
      no: "2",
      title: "Intelligent Growth",
      description:
        "Creating meaningful, scalable outcomes through modernisation.",
      icon: "/assets/rocket.svg",
    },
    {
      no: "3",
      title: "Connecting the Gaps",
      description:
        "A seamless approach where identity, visibility, and profitability are unified.",
      icon: "/assets/link.svg",
    },
    {
      no: "4",
      title: "End-to-End Support",
      description:
        "Acting as a true extension of your team from strategy through to execution.",
      icon: "/assets/infinity.svg",
    },
  ];

  return (
    <section className="px-24 ">
      <div className="grid grid-cols-2 gap-y-24 gap-x-32">
        {PrinciplesItems.map((item) => (
          <PrincipleCard
            key={item.no}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}