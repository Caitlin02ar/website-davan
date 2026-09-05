import Image from "next/image";
import { renderHighlightedText } from "@/lib/highlightText";
import TextSlideIn from "../Common/TextSlideIn";
import TextStagger from "../Common/TextStagger";

export default function BannerSection(){
    const bannerData = {
        bannerIcon:"/assets/whitelabel/banner-icon.png",
        bannerHeading:"The Same Production Standard, With Somebody Else's Name On It.",
        bannerHeadingHighlight:"Somebody Else's Name On It.",
        bannerDescription:"Your client sees your studio. We are the part of the process that never appears in the credits."
    }

    return(
        <section>
            <div className="mt-12 flex flex-col items-center justify-center gap-3 py-8 mb-12">
                <Image
                src={bannerData.bannerIcon}
                alt=""
                width={24}
                height={24}/>
                <div className="max-w-5xl flex flex-col items-center justify-center gap-8">
                    <TextSlideIn className="text-center text-3xl">
                        {renderHighlightedText(bannerData.bannerHeading, bannerData.bannerHeadingHighlight)}
                    </TextSlideIn>
                    <TextStagger text={bannerData.bannerDescription} 
                        delay={0.3}
                        staggerSpeed={0.025} className="text-sm"/>
                </div>
            </div>
            <div className="absolute inset-0 bg-dark/10"/>
        </section>
    )
}