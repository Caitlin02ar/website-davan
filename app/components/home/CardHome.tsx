// CardHome.tsx

"use client";

import CardItems from "./CardItems";

export default function CardHome({
  cards,
}: {
  cards: any[];
}) {

  return (
    <section className="relative overflow-hidden">
      <CardItems cards={cards} />
    </section>
  );
}