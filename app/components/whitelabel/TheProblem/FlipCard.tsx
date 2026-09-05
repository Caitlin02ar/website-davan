import Image from "next/image";
import { renderHighlightedText } from "@/lib/highlightText";
import { MoveRight } from "lucide-react";

export default function FlipCard() {
  const flipCardData = [
    {
      index: "1",
      icon: "/assets/whitelabel/clock.svg",
      title: "Capacity",
      heading: "The build is always bigger than the brief looked",
      highlightText: "always bigger",
      description:
        "Wireframes, a CMS build, integrations, QA, and a deployment. That is weeks of production your team has not got spare, sitting on top of the work you actually pitched.",
    },
    {
      index: "2",
      icon: "/assets/whitelabel/focus.svg",
      title: "Focus",
      heading: "Your best people end up doing production",
      highlightText: "doing production",
      description:
        "Senior designers get pulled off strategy and creative direction. The thinking that wins and keeps clients gets done after hours, or it does not get done at all.",
    },
    {
      index: "3",
      icon: "/assets/whitelabel/warning.svg",
      title: "Risk",
      heading:
        "Freelance capacity is only as steady as one calendar",
      highlightText: "Freelance capacity",
      description:
        "The contractor who was reliable last quarter is not free this one. Every new brief becomes a scramble, and your delivery promise rests on somebody else's availability.",
    },
  ];

  return (
    <div>
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {flipCardData.map((card) => (
          <div
            key={card.index}
            className="group h-[320px] [perspective:1000px]"
          >
            <div
              className="
                relative
                h-full
                w-full
                transition-transform
                duration-700
                ease-[cubic-bezier(0.76,0,0.24,1)]
                [transform-style:preserve-3d]
                group-hover:[transform:rotateY(180deg)]
              "
            >
              <div
                className="
                  absolute
                  inset-0
                  flex
                  flex-col
                  overflow-hidden
                  rounded-[32px]
                  bg-gray
                  [backface-visibility:hidden]
                "
              >
                <div className="p-8 max-w-md flex flex-1 items-center justify-center">
                  <p className="text-2xl font-heading">
                    {renderHighlightedText(
                      card.heading,
                      card.highlightText
                    )}
                  </p>
                </div>

                <div className="mt-auto flex items-center justify-between bg-primary w-full px-8 py-5">
                  <div className="flex items-center gap-3">
                    <Image
                      src={card.icon}
                      alt={card.title}
                      width={24}
                      height={24}
                    />

                    <span className="text-black font-body font-bold">
                      {card.title}
                    </span>
                  </div>

                  <MoveRight className="text-black" />
                </div>
              </div>

              <div
                className="
                  absolute
                  inset-0
                  flex
                  flex-col
                  overflow-hidden
                  rounded-[32px]
                  bg-gray
                  [transform:rotateY(180deg)]
                  [backface-visibility:hidden]
                  items-center justify-center
                "
              >
                <div className="flex-1 overflow-y-auto p-8 flex items-center justify-center">
                  <p className="font-body text-sm leading-relaxed text-white">
                    {card.description}
                  </p>
                </div>

                <div className="flex items-center bg-primary w-full px-8 py-5">
                  <div className="flex items-center gap-3">
                    <Image
                      src={card.icon}
                      alt={card.title}
                      width={24}
                      height={24}
                    />

                    <span className="text-black font-body font-bold">
                      {card.title}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}