"use client";

import Tag from "../common/Tag";
import FourPillarItems from "./FourPillarItems";

export default function FourPillars() {
  return (
    <section className="relative py-32 px-24">
      <div className="flex justify-center mb-6">
        <Tag text="The Four Pillars" />
      </div>

      <div className="text-center mb-20">
        <h3 className="font-heading text-primary text-5xl">
          Four Pillars.
        </h3>

        <h3 className="font-heading text-5xl mt-2">
          Connected end-to-end.
        </h3>
      </div>

      <FourPillarItems />
    </section>
  );
}