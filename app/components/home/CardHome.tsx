// CardHome.tsx

"use client";

import CardItems from "./CardItems";

export default function CardHome({
  cards,
}: {
  cards: any[];
}) {

  return (
    <section className="relative overflow-hidden mt-16">
      <CardItems cards={cards} />
    </section>
  );
}