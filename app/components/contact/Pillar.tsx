"use client";

import PillarItems from "./PillarItems";

export default function Pillar() {
  return (
    <section className="py-32 px-12">
      <div className="flex flex-col items-center text-center">
        <h1 className="font-heading text-3xl text-white max-w-5xl leading-tight">
          Whatever entry point you start from,
          <br />
          we connect them all
        </h1>
      </div>

      <PillarItems />
    </section>
  );
}