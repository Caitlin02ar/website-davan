"use client";

import BubbleTag from "../Common/BubbleTag";
import WhiteLabelButton from "../Common/Button";

import { renderHighlightedText } from "@/lib/highlightText";
import { getLinkHref } from "@/lib/link";
import Image from "next/image";
import TextSlideIn from "../Common/TextSlideIn";
import TextStagger from "../Common/TextStagger";

type GetStartedData = {
    backgroundImage: string;
    tag: {
        variant: "title" | "tag";
        number: string;
        text: string;
        highlightTextBoolean?: boolean;
    }[];
    heading: string;
    headingHighlightText: string | null;
    description: string;
    buttons: {
        href: string;
        text: string;
        variant: "outline" | "primary";
    }[];
    contactInformation: {
        icon: string;
        informationText: string;
    }[];
    titleContactInformation: string;
    additionalInformation: string;
};

type GetStartedProps = {
    getStartedData: GetStartedData;
};

export default function GetStarted({
    getStartedData,
}: GetStartedProps) {
    const currentYear = new Date().getFullYear();

    return (
        <section
            id="get-started"
            className="relative min-h-screen w-full overflow-hidden"
        >
            <Image
                src={getStartedData.backgroundImage}
                alt=""
                width={1920}
                height={884}
                priority
                className="absolute inset-0 h-full w-full object-cover object-[55%_center] md:object-center"
            />

            <div className="absolute inset-0 bg-dark/40" />

            <div className="relative z-10 flex min-h-screen flex-col justify-between">
                <div className="w-full px-5 pt-16 md:px-16 md:pt-24 lg:px-24 xl:px-32">
                    <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
                        <div className="flex max-w-xl flex-col gap-8">
                            <BubbleTag
                                variant={getStartedData.tag[0]?.variant}
                                number={getStartedData.tag[0]?.number}
                                items={[
                                    {
                                        text:
                                            getStartedData.tag[0]?.text ?? "",
                                        highlight:
                                            getStartedData.tag[0]
                                                ?.highlightTextBoolean ?? false,
                                    },
                                ]}
                            />

                            <div className="flex flex-col gap-4">
                                <TextSlideIn>
                                    {renderHighlightedText(
                                        getStartedData.heading,
                                        getStartedData.headingHighlightText ?? ""
                                    )}
                                </TextSlideIn>

                                <TextStagger
                                    text={getStartedData.description}
                                    delay={0.3}
                                    staggerSpeed={0.025}
                                />
                            </div>

                            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                                <WhiteLabelButton
                                    variant={
                                        getStartedData.buttons[0]?.variant ??
                                        "outline"
                                    }
                                    animated={true}
                                    href={getLinkHref(
                                        getStartedData.buttons[0]?.href ?? ""
                                    )}
                                >
                                    {getStartedData.buttons[0]?.text}
                                </WhiteLabelButton>

                                <WhiteLabelButton
                                    variant={
                                        getStartedData.buttons[1]?.variant ??
                                        "primary"
                                    }
                                    animated={true}
                                    href={getLinkHref(
                                        getStartedData.buttons[1]?.href ?? ""
                                    )}
                                >
                                    {getStartedData.buttons[1]?.text}
                                </WhiteLabelButton>
                            </div>
                        </div>

                        <div className="flex shrink-0 flex-col items-start gap-3 pt-6 md:items-end md:border-t-0 md:pt-0">
                            <span className="font-body text-sm font-semibold text-primary">
                                {getStartedData.titleContactInformation}
                            </span>

                            {getStartedData.contactInformation.map(
                                (contact, index) => (
                                    <div
                                        key={`${contact.informationText}-${index}`}
                                        className="flex items-center gap-3"
                                    >
                                        <Image
                                            src={contact.icon}
                                            alt=""
                                            width={32}
                                            height={32}
                                            className="order-1 h-[18px] w-[18px] object-contain text-primary md:order-2"
                                        />

                                        <span className="order-2 font-body text-sm md:order-1">
                                            {contact.informationText}
                                        </span>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>

                <div className="w-full px-5 pb-8 md:px-16 lg:px-24 xl:px-32">
                    <p className="max-w-md text-left font-body text-xs text-white md:ml-auto md:text-right">
                        {getStartedData.additionalInformation.replace(
                            "© {year}",
                            `© ${currentYear}`
                        )}
                    </p>
                </div>
            </div>
        </section>
    );
}