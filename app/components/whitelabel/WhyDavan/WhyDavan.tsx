import Image from "next/image";
import { renderHighlightedText } from "@/lib/highlightText";
import BubbleTag from "../Common/BubbleTag";
import WhiteLabelButton from "../Common/Button";
import CardWithNumber from "./CardWithNumber";
import TextSlideIn from "../Common/TextSlideIn";
import TextStagger from "../Common/TextStagger";


export default function WhyDavanSection(){
    const whyData = {
        heading:"Capacity that flexes to you pipeline.",
        headingHighlightText:"Capacity",
        subheading:"You should not have to hire against a maybe. Scale us up for a busy quarter and back down when it passes, without carrying the cost in between",
        buttonText:"Request the rate card",
        title:{
            variant:"title" as const,
            number:"06",
            text:"Why DAVAN"
        },
        image:{
            src:"/photos/whitelabel/why-davan-bg.webp",
            alt:"",
            width:1920,
            height:1080
        },
        button:{
            variant:"primary" as const,
            animated:true,
            href:"#the-pricing"
        }
    }

    return(
        <section id="why-davan" className="relative w-full py-24">
            <Image
            src={whyData.image.src}
            alt={whyData.image.alt}
            width={whyData.image.width}
            height={whyData.image.height}
            priority
            className="absolute inset-0 h-full w-full object-cover "
            />
            <div className="absolute inset-0 bg-dark/10"/>

            <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 xl:px-32">
                <div className="flex flex-col gap-4">
                    <BubbleTag
                    variant={whyData.title.variant}
                    number={whyData.title.number}
                    items={[
                        {
                            text:whyData.title.text
                        }
                    ]}
                    />
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                        <TextSlideIn>
                            {renderHighlightedText(whyData.heading, whyData.headingHighlightText)}
                        </TextSlideIn>
                        <div className="flex flex-col gap-4 items-start justify-center max-w-sm">
                            <TextStagger
                            text={whyData.subheading}
                            delay={0.3}
                            staggerSpeed={0.03} className="text-xs leading-normal tracking-wide"/>
                            <WhiteLabelButton variant={whyData.button.variant} animated={whyData.button.animated} href={whyData.button.href}>
                                {whyData.buttonText}
                            </WhiteLabelButton>
                        </div>
                    </div>

                    <div className="mt-12">
                        <CardWithNumber/>
                    </div>
                </div>
            </div>
        </section>
    )
}