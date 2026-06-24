"use client";

import Tag from "../common/Tag";
import Dropdown from "./Dropdown";

export default function FAQ() {
  return (
    <section className="relative overflow-hidden flex flex-col">
      <img
        src="/photos/faq-bg.webp"
        alt=""
        className="w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />

      <div className="absolute inset-0 z-10 flex items-start justify-between p-32">
        <div className="flex flex-col items-start gap-32">
          <div className="flex flex-col items-start">
            <Tag text="FAQ" />
            <h1 className="text-3xl font-heading text-white max-w-xs">
                Common Question
            </h1>
          </div>
          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
            <h1 className="font-bold text-xl mb-2 text-white">
                Still have questions?
            </h1>

            <p className="max-w-sm text-xs text-white/80">
                Can't find the answer to your question? Send us an email and
                we'll get back to you as soon as possible!
            </p>

            <button className="mt-8 border border-primary py-2 px-8 text-primary rounded-full text-xs">
                Send Email
            </button>
            </div>
        </div>

        <div className="">
          <Dropdown/>
        </div>
      </div>
    </section>
  );
}