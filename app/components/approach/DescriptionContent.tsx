"use client";
import Tag from "../common/Tag";

export default function DescriptionContent() {
  const DescriptionContentItems = [
    {
      titleWhite: "Revealing what others",
      titlePrimary: "cannot see",
      description:
        "Growth doesn't break because your brand is bad or your ads aren't working. It breaks in the spaces between them: the handoff from marketing to sales, the gap between your website and your CRM, the disconnect between what your brand says and what your operations actually do.",
      image: "/photos/davan-logo.webp",
      imagePosition: "right",
      alignment: "left",
      mirrored: true,
    },
    {
      titleWhite: "Our work begins by",
      titlePrimary: "mapping those gaps.",
      description:
        "Then we build what closes them, turning fragmented effort into a connected engine for growth.",
      image: "/photos/davan-logo.webp",
      imagePosition: "left",
      alignment: "right",
      mirrored: false,
    },
  ];

  return (
    <section className="bg-background overflow-hidden">
      {DescriptionContentItems.map((item, index) => (
        <div
          key={index}
          className={`
            relative flex flex-col px-24
            ${index === 0 ? "pt-16 justify-center" : "min-h-screen justify-center"}
          `}
        >
          {index === 0 && (
            <div className="flex flex-col items-start">
              <Tag text="The Transformation Process" />
            </div>
          )}

          <img
            src={item.image}
            alt=""
            className={`
              absolute
              w-[700px]
              h-[700px]
              object-contain
              pointer-events-none
              select-none
              top-1/2
              -translate-y-1/2
              ${item.imagePosition === "right" ? "-right-48" : "-left-48"}
              ${item.mirrored ? "-scale-x-100" : ""}
            `}
          />
          <div
            className={`
              relative z-10 max-w-2xl
              ${item.alignment === "right" ? "ml-auto text-right" : "text-left"}
            `}
          >
            <h2 className="font-heading text-4xl text-white mb-2">
              {item.titleWhite}
            </h2>

            <h2 className="mb-8 font-heading text-4xl text-primary">
              {item.titlePrimary}
            </h2>

            <p className="font-body leading-relaxed text-white text-sm max-w-xl">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}