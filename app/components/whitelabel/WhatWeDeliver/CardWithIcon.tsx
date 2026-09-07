import React from "react";
import { Plus } from "lucide-react";

export default function CardWithIcon() {
  const cardData = {
    cardDetailData: [
      {
        index: "1",
        title: "Care plans and ongoing support",
        description:
          "The recurring line that turns a one off project fee into monthly revenue. Attached at handover on every site you deliver.",
        items: [
          {
            no: "1",
            text: "Hosting, updates, backups, and security after the site goes live",
          },
          {
            no: "2",
            text: "Content changes and small builds without reopening a project",
          },
          {
            no: "3",
            text: "Reported under your brand and billed through you",
          },
        ],
      },
      {
        index: "2",
        title: "Embedded design and UX hands",
        description:
          "Extra capacity inside your own process for a defined block of time, rather than a scoped project.",
        items: [
          {
            no: "1",
            text: "Works in your Figma, your files, your naming conventions",
          },
          {
            no: "2",
            text: "Useful when the pipeline spikes and hiring is not the answer",
          },
          {
            no: "3",
            text: "Scaled up or down month to month",
          },
        ],
      },
    ],
  };

  return (
    <>
      <svg className="absolute h-0 w-0 pointer-events-none">
        <defs>
          <clipPath id="card-notch-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0.1,0 L 0.78,0 C 0.81,0 0.83,0.02 0.83,0.06 C 0.83,0.18 0.87,0.22 0.95,0.22 C 0.98,0.22 1,0.25 1,0.31 L 1,0.9 C 1,0.96 0.95,1 0.9,1 L 0.1,1 C 0.04,1 0,0.96 0,0.9 L 0,0.1 C 0,0.04 0.04,0 0.1,0 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2  p-8">
        {cardData.cardDetailData.map((card) => (
          <div key={card.index} className="relative w-full max-w-lg">
            <div
              style={{ clipPath: "url(#card-notch-clip)" }}
              className="relative flex h-full flex-col bg-[#50565B] p-8 pt-9 pb-10"
            >
              <h3 className="font-var(--font-sequel) text-2xl leading-tight text-primary tracking-wide pr-24" style={{fontFamily: "var(--font-sequel)"}}>
                {card.title}
              </h3>

              <p className="mt-5 text-sm leading-relaxed text-gray-200 pr-12 font-light">
                {card.description}
              </p>

              <ul className="mt-12 flex flex-col gap-2.5 list-disc pl-5 text-sm text-gray-200">
                {card.items.map((item) => (
                  <li key={item.no} className="leading-relaxed pl-1">
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              className="absolute top-2 right-2 flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary transition-transform hover:scale-105"
            >
              <Plus className="text-primary" size={26} strokeWidth={2} />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}