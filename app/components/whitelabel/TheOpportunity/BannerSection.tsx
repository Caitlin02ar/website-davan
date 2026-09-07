import Image from "next/image";

import { renderHighlightedText } from "@/lib/highlightText";

import TextSlideIn from "../Common/TextSlideIn";

import TextStagger from "../Common/TextStagger";

type BannerSectionProps = {
    bannerTitle: string;
    bannerHightlightText: string;
    bannerSubheading: string;
};

export default function BannerSection({
    bannerTitle,
    bannerHightlightText,
    bannerSubheading,
}: BannerSectionProps) {
    return (
        <section>
            <div className="mt-12 flex flex-col items-center justify-center gap-3 py-8 mb-12">
                <Image
                    src="/assets/whitelabel/banner-icon.png"
                    alt=""
                    width={24}
                    height={24}
                    className="h-6 w-6 object-contain"
                />

                <div className="max-w-5xl flex flex-col items-center justify-center gap-8">
                    <TextSlideIn className="text-center md:text-3xl text-2xl">
                        {renderHighlightedText(
                            bannerTitle,
                            bannerHightlightText
                        )}
                    </TextSlideIn>

                    <TextStagger
                        text={bannerSubheading}
                        delay={0.3}
                        staggerSpeed={0.025}
                        className="text-sm text-center"
                    />
                </div>
            </div>
        </section>
    );
}