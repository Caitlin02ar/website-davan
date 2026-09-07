import { renderHighlightedText } from "@/lib/highlightText";

import BubbleTag from "../Common/BubbleTag";

import Dropdown from "../Common/Dropdown";

import ReceiptItem from "./ReceiptItem";

import TextSlideIn from "../Common/TextSlideIn";

import TextStagger from "../Common/TextStagger";

type ConfidentialityData = {
    heading: string;
    headingHighlightText: string;
    description: string;

    tag: {
        variant: "title" | "tag";
        number: string;
        text: string;
        highlightTextBoolean?: boolean;
    }[];

    receipt: {
        leftTopText: string;
        rightTopText: string;
        receiptItems: {
            label: string;
            value: string;
        }[];
        note: {
            title: string;
            description: string;
        };
    };

    dropdownItems: {
        title: string;
        description: string;
        icon: string;
    }[];
};

type ConfidentialitySectionProps = {
    confidentialityData: ConfidentialityData;
};

export default function ConfidentialitySection({
    confidentialityData,
}: ConfidentialitySectionProps) {
    return (
        <section
            id="confidentiality"
            className="relative w-full py-24"
        >
            <div className="pointer-events-none absolute inset-0 bg-dark/10" />

            <div className="relative z-10 w-full px-5 md:px-16 lg:px-24 xl:px-32">
                <div className="grid grid-cols-1 items-start justify-center gap-12 lg:grid-cols-2 lg:gap-16">
                    <div className="flex flex-col gap-4">
                        <BubbleTag
                            variant={confidentialityData.tag[0].variant}
                            number={confidentialityData.tag[0].number}
                            items={[
                                {
                                    text: confidentialityData.tag[0].text,
                                },
                            ]}
                        />

                        <TextSlideIn>
                            {renderHighlightedText(
                                confidentialityData.heading,
                                confidentialityData.headingHighlightText
                            )}
                        </TextSlideIn>

                        <TextStagger
                            text={confidentialityData.description}
                            delay={0.3}
                            staggerSpeed={0.025}
                            className="text-sm"
                        />

                        <div className="mt-6 w-full">
                            <ReceiptItem
                                receipt={confidentialityData.receipt}
                            />
                        </div>
                    </div>

                    <div className="w-full">
                        <Dropdown
                            variant="confidentiality"
                            items={confidentialityData.dropdownItems}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}