"use client";

import Image from "next/image";

import { useState } from "react";

import { motion } from "framer-motion";

import { renderMultiHighlight } from "@/lib/renderMultiHighlight";

type CardWithPictureProps = {
    cards: {
        title: string;
        titleHighlightText: string[];
        subtitle: string;
        description: string[];
    }[];
};

export default function CardWithPicture({
    cards,
}: CardWithPictureProps) {
    const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

    const toggleCardOnTouch = (index: string) => {
        if (window.matchMedia("(hover: none)").matches) {
            setHoveredIndex((current) =>
                current === index ? null : index
            );
        }
    };

    return (
        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card, cardIndex) => {
                const index = String(cardIndex + 1);

                const isHovered = hoveredIndex === index;

                const titleHighlights = card.titleHighlightText.map(
                    (text) => ({
                        text,
                        className: "text-primary",
                    })
                );

                return (
                    <div
                        key={index}
                        className="group relative flex min-h-[320px] w-full flex-col overflow-hidden rounded-3xl"
                        onMouseEnter={() =>
                            setHoveredIndex(index)
                        }
                        onMouseLeave={() =>
                            setHoveredIndex(null)
                        }
                        onClick={() =>
                            toggleCardOnTouch(index)
                        }
                    >
                        <Image
                            src={`/photos/whitelabel/card-${index}.png`}
                            alt={card.title}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            className="object-cover"
                        />
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
                                        titleHighlights
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
                                {card.description.map(
                                    (text, i) => (
                                        <motion.li
                                            key={i}
                                            initial={false}
                                            animate={{
                                                opacity: isHovered
                                                    ? 1
                                                    : 0,
                                                y: isHovered
                                                    ? 0
                                                    : 8,
                                            }}
                                            transition={{
                                                duration: 0.25,
                                                delay: isHovered
                                                    ? i * 0.04
                                                    : 0,
                                                ease: "easeOut",
                                            }}
                                            className="text-xs leading-relaxed text-white"
                                        >
                                            {text}
                                        </motion.li>
                                    )
                                )}
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