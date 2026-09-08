import Image from "next/image";
import BubbleTag from "../Common/BubbleTag";
import { renderHighlightedText } from "@/lib/highlightText";
import GlassCardSection from "./GlassCardSection";
import BannerSection from "./BannerSection";
import TextSlideIn from "../Common/TextSlideIn";
import TextStagger from "../Common/TextStagger";

type TheOpportunityData = {
    backgroundImage: string;
    heading: string;
    headingHighlight: string;
    description: string;

    tag: {
        variant: "title" | "tag";
        number: string;
        text: string;
        highlightTextBoolean?: boolean;
    }[];

    cardItems: {
        title: string;
        description: string;
        icon: string;
    }[];

    externalCard: string;

    bannerTitle: string;
    bannerHightlightText: string;
    bannerSubheading: string;
};

type TheOpportunitySectionProps = {
    opportunityData: TheOpportunityData;
};

export default function TheOpportunitySection({
    opportunityData,
}: TheOpportunitySectionProps) {
    return (
        <section
            id="the-opportunity"
            className="relative min-h-screen w-full overflow-hidden bg-dark"
        >
            {/* Background Container */}
            <div className="absolute inset-0 h-full w-full pointer-events-none">
                <Image
                    src={opportunityData.backgroundImage}
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="
                        h-full w-full
                        object-cover
                        /* Penyesuaian Mobile: Posisi fokus atas agar objek utama gambar tetap terlihat */
                        object-[center_top]
                        /* Mengatur scaling agar tidak terlalu ter-zoom ekstrem di HP */
                        scale-105 sm:scale-100
                        /* Kembalikan ke pengaturan desktop asli kamu */
                        md:object-[center_12%]
                        lg:object-[30%_12%]
                        transition-all duration-300
                    "
                />

                {/* Overlay Gelap Khusus Mobile (Mencegah gambar pecah/ramai mengganggu keterbacaan teks) */}
                <div className="absolute inset-0 bg-dark/40 md:bg-transparent" />
            </div>

            {/* Top transition */}
            <div
                className="
                    absolute inset-x-0 top-0
                    h-24
                    md:h-40
                    lg:h-48
                    bg-gradient-to-b
                    from-dark
                    via-dark/75
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
                    via-dark/80
                    to-transparent
                    pointer-events-none
                    z-[1]
                "
            />

            {/* Content */}
            <div className="relative z-10 flex items-start">
                <div className="w-full px-5 py-12 md:px-16 md:py-0 md:pt-24 lg:px-24 xl:px-32">
                    <div>
                        <div className="flex w-full flex-col gap-4">
                            <BubbleTag
                                variant={opportunityData.tag[0].variant}
                                number={opportunityData.tag[0].number}
                                items={[
                                    {
                                        text: opportunityData.tag[0].text,
                                    },
                                ]}
                            />

                            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                                <TextSlideIn>
                                    <h1>
                                        {renderHighlightedText(
                                            opportunityData.heading,
                                            opportunityData.headingHighlight
                                        )}
                                    </h1>
                                </TextSlideIn>

                                <TextStagger
                                    text={opportunityData.description}
                                    delay={0.3}
                                    staggerSpeed={0.025}
                                    className="mb-4 max-w-md text-sm leading-relaxed text-white"
                                />
                            </div>

                            <GlassCardSection
                                cards={opportunityData.cardItems}
                                externalCard={opportunityData.externalCard}
                            />

                            <BannerSection
                                bannerTitle={opportunityData.bannerTitle}
                                bannerHightlightText={
                                    opportunityData.bannerHightlightText
                                }
                                bannerSubheading={
                                    opportunityData.bannerSubheading
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}