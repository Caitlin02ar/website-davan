import Image from "next/image";
import BubbleTag from "../Common/BubbleTag";
import { renderHighlightedText } from "@/lib/highlightText";
import GlassCardSection from "./GlassCardSection";
import BannerSection from "./BannerSection";
import TextSlideIn from "../Common/TextSlideIn";
import TextStagger from "../Common/TextStagger";

export default function TheOpportunitySection() {
    const theOpportunityData = {
        image: {
            src: "/photos/whitelabel/the-opportunity.png",
            alt: "",
            width: 1920,
            height: 1080,
        },
        title: {
            variant: "title" as const,
            number: "02",
            text: "The Opportunity",
        },
        heading: "What A Delivery Partner Behind You Actually Buys",
        hightlightText: "Delivery Partner",
        description:
            "Not a subcontractor you have to manage. A production layer that sits under your brand and moves at the speed your pipeline needs.",
    };

    return (
        <section
            id="the-opportunity"
            className="relative min-h-screen w-full overflow-hidden bg-dark"
        >
            {/* Background */}
            <Image
                src={theOpportunityData.image.src}
                alt={theOpportunityData.image.alt}
                width={theOpportunityData.image.width}
                height={theOpportunityData.image.height}
                priority
                className="
                    absolute inset-0
                    h-full w-full
                    object-cover
                    object-[center_12%]
                    md:object-[center_12%]
                    lg:object-[30%_12%]
                "
            />

            {/* Top transition */}
            <div
                className="
                    absolute inset-x-0 top-0
                    h-32
                    md:h-40
                    lg:h-48
                    bg-gradient-to-b
                    from-dark
                    via-dark/65
                    to-transparent
                    pointer-events-none
                    z-[1]
                "
            />

            {/* Bottom transition */}
            <div
                className="
                    absolute inset-x-0 bottom-0
                    h-32
                    md:h-44
                    lg:h-52
                    bg-gradient-to-t
                    from-dark
                    via-dark/65
                    to-transparent
                    pointer-events-none
                    z-[1]
                "
            />

            {/* Content */}
            <div className="relative z-10 flex items-start">
                <div className="w-full px-5 py-16 md:px-16 md:py-0 md:pt-24 lg:px-24 xl:px-32">
                    <div>
                        <div className="flex w-full flex-col gap-4">
                            <BubbleTag
                                variant={theOpportunityData.title.variant}
                                number={theOpportunityData.title.number}
                                items={[
                                    {
                                        text: theOpportunityData.title.text,
                                    },
                                ]}
                            />

                            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                                <TextSlideIn>
                                    <h1>
                                        {renderHighlightedText(
                                            theOpportunityData.heading,
                                            theOpportunityData.hightlightText
                                        )}
                                    </h1>
                                </TextSlideIn>

                                <TextStagger
                                    text={theOpportunityData.description}
                                    delay={0.3}
                                    staggerSpeed={0.025}
                                    className="mb-4 max-w-md text-sm leading-relaxed text-white"
                                />
                            </div>

                            <GlassCardSection />

                            <BannerSection />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}