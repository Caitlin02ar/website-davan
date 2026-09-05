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

  const notchStyle = {
    WebkitMaskImage:
      "radial-gradient(circle 48px at calc(100% - 8px) 8px, transparent 0%, transparent 96%, black 100%)",
    maskImage:
      "radial-gradient(circle 48px at calc(100% - 8px) 8px, transparent 0%, transparent 96%, black 100%)",
  };

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {cardData.cardDetailData.map((card) => (
        <div key={card.index} className="relative h-full">
          <div
            style={notchStyle}
            className="relative flex h-full flex-col rounded-[2.5rem] bg-[#52585C] p-8 pr-20"
          >
            <h3 className="font-heading text-2xl leading-snug text-primary">
              {card.title}
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-white">
              {card.description}
            </p>

            <ul className="mt-8 flex flex-col gap-2 list-disc pl-5 marker:text-white">
              {card.items.map((item) => (
                <li
                  key={item.no}
                  className="text-sm leading-relaxed text-white"
                >
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="absolute -right-2 -top-2 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-dark">
            <Plus className="text-primary" size={20} strokeWidth={2.5} />
          </div>
        </div>
      ))}
    </div>
  );
}