import BubbleTag from "../Common/BubbleTag";

import { renderHighlightedText } from "@/lib/highlightText";

import CardWithPictureSection from "./CardWithPictureSection";

import AddOnsCardSection from "./AddOnsCardSection";

import TextSlideIn from "../Common/TextSlideIn";

import TextStagger from "../Common/TextStagger";

type WhatWeDeliverData = {
    heading: string;
    headingHighlight: string;
    description: string;

    tag: {
        variant: "title" | "tag";
        number: string;
        text: string;
        highlightTextBoolean?: boolean;
    }[];

    firstcardSection: {
        title: string;
        subtitle: string;
        cardItems: {
            title: string;
            titleHighlightText: string[];
            subtitle: string;
            description: string[];
        }[];
    }[];

    secondCardSection: {
        title: string;
        subtitle: string;
        cardItems: {
            heading: string;
            subheading: string;
            description: string[];
        }[];
    }[];
};

type WhatWeDeliverSectionProps = {
    deliverData: WhatWeDeliverData;
};

export default function WhatWeDeliverSection({
    deliverData,
}: WhatWeDeliverSectionProps) {
    return (
        <section
            id="what-we-deliver"
            className="relative min-h-screen w-full overflow-hidden"
        >
            <div className="absolute inset-0 bg-dark/10" />

            <div className="relative z-10 flex min-h-screen items-start">
                <div className="w-full px-5 py-16 md:px-16 md:py-0 md:pt-24 lg:px-24 xl:px-32">
                    <div>
                        <div className="flex flex-col gap-4">
                            <BubbleTag
                                variant={deliverData.tag[0].variant}
                                number={deliverData.tag[0].number}
                                items={[
                                    {
                                        text: deliverData.tag[0].text,
                                    },
                                ]}
                            />

                            <div className="flex flex-col gap-6">
                                <TextSlideIn className="max-w-6xl">
                                    {renderHighlightedText(
                                        deliverData.heading,
                                        deliverData.headingHighlight
                                    )}
                                </TextSlideIn>

                                <TextStagger
                                    text={deliverData.description}
                                    delay={0.3}
                                    staggerSpeed={0.025}
                                    className="max-w-md text-sm leading-relaxed text-white md:whitespace-nowrap"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 mt-6">
                        <CardWithPictureSection
                            data={deliverData.firstcardSection[0]}
                        />

                        <AddOnsCardSection
                            data={deliverData.secondCardSection[0]}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}