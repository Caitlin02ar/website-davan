import React from "react";

import { Plus } from "lucide-react";

type CardWithIconProps = {
    cards: {
        heading: string;
        subheading: string;
        description: string[];
    }[];
};

export default function CardWithIcon({
    cards,
}: CardWithIconProps) {
    return (
        <>
            <svg className="absolute h-0 w-0 pointer-events-none">
                <defs>
                    <clipPath
                        id="card-notch-clip"
                        clipPathUnits="objectBoundingBox"
                    >
                        <path d="M 0.1,0 L 0.78,0 C 0.81,0 0.83,0.02 0.83,0.06 C 0.83,0.18 0.87,0.22 0.95,0.22 C 0.98,0.22 1,0.25 1,0.31 L 1,0.9 C 1,0.96 0.95,1 0.9,1 L 0.1,1 C 0.04,1 0,0.96 0,0.9 L 0,0.1 C 0,0.04 0.04,0 0.1,0 Z" />
                    </clipPath>
                </defs>
            </svg>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2  p-8">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="relative w-full max-w-lg"
                    >
                        <div
                            style={{
                                clipPath:
                                    "url(#card-notch-clip)",
                            }}
                            className="relative flex h-full flex-col bg-[#50565B] p-8 pt-9 pb-10"
                        >
                            <h3
                                className="font-var(--font-sequel) text-2xl leading-tight text-primary tracking-wide pr-24"
                                style={{
                                    fontFamily:
                                        "var(--font-sequel)",
                                }}
                            >
                                {card.heading}
                            </h3>

                            <p className="mt-5 text-sm leading-relaxed text-gray-200 pr-12 font-light">
                                {card.subheading}
                            </p>

                            <ul className="mt-12 flex flex-col gap-2.5 list-disc pl-5 text-sm text-gray-200">
                                {card.description.map(
                                    (text, itemIndex) => (
                                        <li
                                            key={itemIndex}
                                            className="leading-relaxed pl-1"
                                        >
                                            {text}
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>

                        <button
                            type="button"
                            className="absolute top-2 right-2 flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary transition-transform hover:scale-105"
                        >
                            <Plus
                                className="text-primary"
                                size={26}
                                strokeWidth={2}
                            />
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}