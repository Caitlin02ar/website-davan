"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { urlFor } from "@/lib/image";
import { renderMultiHighlight } from "@/lib/renderMultiHighlight";

type CardWithPictureProps = {
    cards: {
        title: string;
        titleHighlightText: string[];
        subtitle: string;
        description: string[];
        image: {
            asset: {
                _ref: string;
                _type: "reference";
            };
            alt?: string;
        };
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

                // Minta Sanity generate versi high-res + auto format (webp/avif).
                // width 1600 dipilih supaya ada headroom buat retina/HiDPI mobile
                // (mobile bisa full-bleed 1 kolom dgn devicePixelRatio 2-3x, jadi
                // butuh source jauh lebih besar dari lebar visualnya).
                // Gak pakai .height() fixed di sini — biarin `fill` + object-cover
                // di <Image> yang nentuin crop sesuai container (beda rasio antara
                // mobile 1-kolom yg tinggi vs desktop 4-kolom yg lebih landscape).
                const imageUrl = card.image?.asset
                    ? urlFor(card.image)
                          .width(1600)
                          .auto("format")
                          .quality(90)
                          .url()
                    : `/photos/whitelabel/card-${index}.png`; // fallback kalau image belum ke-set di CMS

                return (
                    <div
                        key={index}
                        className="group relative flex aspect-[3/4] w-full flex-col overflow-hidden rounded-3xl sm:aspect-auto sm:min-h-[320px]"
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
                        {/* Card Image */}
                        <Image
                            src={imageUrl}
                            alt={card.image?.alt || card.title}
                            fill
                            priority={cardIndex < 4}
                            quality={90}
                            sizes="
                                (max-width: 640px) calc(100vw - 2rem),
                                (max-width: 1024px) calc(50vw - 2rem),
                                25vw
                            "
                            className="object-cover"
                        />

                        {/* Hover Overlay */}
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

                        {/* Content */}
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

                            {/* Description */}
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

                            {/* Read More */}
                            <div className="absolute inset-x-0 bottom-5 flex justify-center">
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