"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { renderMultiHighlight } from "@/lib/renderMultiHighlight";

export default function CardWithPicture() {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

  const toggleCardOnTouch = (index: string) => {
    if (window.matchMedia("(hover: none)").matches) {
      setHoveredIndex((current) => (current === index ? null : index));
    }
  };

  const cardData = [
    {
      index: "1",
      title: "Website design and build",
      titleHighlights: [
        { text: "Website", className: "text-primary" },
        { text: "design", className: "text-primary" },
        { text: "build", className: "text-primary" },
      ],
      subtitle: "Where most partners start",
      image: "/photos/whitelabel/card-1.png",
      description: [
        { no: "1", text: "Wireframes, sitemaps, and user flows grounded in conversion logic" },
        { no: "2", text: "Responsive UI across desktop, tablet, and mobile" },
        { no: "3", text: "Webflow, WordPress, and Framer, plus fully custom front and back end" },
        { no: "4", text: "SEO foundations and Core Web Vitals from day one" },
        { no: "5", text: "CRM, form, payment, and analytics integrations" },
      ],
    },
    {
      index: "2",
      title: "Brand and identity",
      titleHighlights: [
        { text: "Brand", className: "text-primary" },
        { text: "identity", className: "text-white" },
      ],
      subtitle: "Overflow capacity, never a replacement",
      image: "/photos/whitelabel/card-2.png",
      description: [
        { no: "1", text: "Brand strategy, positioning, and messaging when a brief needs more depth than the quarter allows" },
        { no: "2", text: "Visual identity systems, guidelines, and asset libraries" },
        { no: "3", text: "Pitch and presentation design for the briefs you still have to win" },
        { no: "4", text: "Delivered behind your creative direction, with editable files handed over" },
      ],
    },
    {
      index: "3",
      title: "AI and automation",
      titleHighlights: [
        { text: "AI", className: "text-primary" },
        { text: "automation", className: "text-primary" },
      ],
      subtitle: "The highest margin thing you can sell",
      image: "/photos/whitelabel/card-3.png",
      description: [
        { no: "1", text: "AI search visibility so client sites get surfaced by ChatGPT, Perplexity, and Google AI Overviews" },
        { no: "2", text: "Conversion systems and enquiry flows that turn traffic into qualified leads" },
        { no: "3", text: "Funnel and CRM automation from first click to closed deal" },
        { no: "4", text: "Reporting dashboards branded as yours" },
      ],
    },
    {
      index: "4",
      title: "Video and creative production",
      titleHighlights: [
        { text: "Video", className: "text-primary" },
        { text: "production", className: "text-primary" },
      ],
      subtitle: "Rarely available at boutique scale",
      image: "/photos/whitelabel/card-4.png",
      description: [
        { no: "1", text: "Brand films, product reels, and social content at cinematic quality" },
        { no: "2", text: "AI driven workflows that cut cost and turnaround against a traditional shoot" },
        { no: "3", text: "Hero assets that match the polish of the brand work you have already built" },
        { no: "4", text: "Award winning production trusted by global brands" },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {cardData.map((card) => {
        const isHovered = hoveredIndex === card.index;

        return (
          <div
            key={card.index}
            className="group relative flex min-h-[320px] w-full flex-col overflow-hidden rounded-3xl"
            onMouseEnter={() => setHoveredIndex(card.index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => toggleCardOnTouch(card.index)}
          >

            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover"
            />


            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/30 to-dark/70" />


            <motion.div
              className="pointer-events-none absolute inset-0 bg-dark/30"
              initial={false}
              animate={{
                opacity: isHovered ? 0.65 : 0,
              }}
              transition={{
                duration: 0.35,
                ease: "easeInOut",
              }}
            />

            <div className="relative z-10 flex h-full flex-col p-6 pb-16">

              <div className="shrink-0">
                <h3 className="font-heading text-xl leading-snug">
                  {renderMultiHighlight(
                    card.title,
                    card.titleHighlights
                  )}
                </h3>

                <p className="mt-1 text-sm font-semibold leading-snug text-primary">
                  {card.subtitle}
                </p>
              </div>


              <motion.ul
                initial={false}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? 0 : 10,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className={`mt-6 list-disc space-y-3 pl-5 marker:text-white ${
                  isHovered
                    ? "pointer-events-auto"
                    : "pointer-events-none"
                }`}
              >
                {card.description.map((item, i) => (
                  <motion.li
                    key={item.no}
                    initial={false}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      y: isHovered ? 0 : 8,
                    }}
                    transition={{
                      duration: 0.25,
                      delay: isHovered ? i * 0.04 : 0,
                      ease: "easeOut",
                    }}
                    className="text-xs leading-relaxed text-white"
                  >
                    {item.text}
                  </motion.li>
                ))}
              </motion.ul>


              <div
                className="absolute inset-x-0 bottom-5 flex justify-center"
              >
                <motion.span
                  animate={{
                    opacity: isHovered ? 0 : 1,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="cursor-pointer text-sm text-white underline underline-offset-4"
                >
                  read more...
                </motion.span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
