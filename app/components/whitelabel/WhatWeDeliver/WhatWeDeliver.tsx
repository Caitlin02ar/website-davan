import BubbleTag from "../Common/BubbleTag";
import { renderHighlightedText } from "@/lib/highlightText";
import CardWithPictureSection from "./CardWithPictureSection";
import AddOnsCardSection from "./AddOnsCardSection";
import TextSlideIn from "../Common/TextSlideIn";
import TextStagger from "../Common/TextStagger";


export default function WhatWeDeliverSection(){
     const deliverData = {
        heading:"Four Pillars You Can Plug Into. Two Add Ons That Attach To Anything.",
        headingHighlightText:"Four Pillars",
        description:"Take one pillar or the whole build. We work to the brief you already have, starting at the point where you capacity runs out.",
        title:{
            variant:"title" as const,
            number:"03",
            text:"What we deliver"
        },
    }
    return(
        <section id="what-we-deliver" className="relative min-h-screen w-full overflow-hidden">
            <div className="absolute inset-0 bg-dark/10"/>
            
            <div className="relative z-10 flex min-h-screen items-start">
                <div className="w-full px-8 md:px-16 md:pt-24 lg:px-24 xl:px-32">
                    <div>
                        <div className="flex flex-col gap-4">
                            <BubbleTag
                                variant={deliverData.title.variant}
                                number={deliverData.title.number}
                                items={[
                                    {
                                        text:deliverData.title.text
                                    }
                                ]}
                            />
                            <div className="flex flex-col gap-6">
                                <TextSlideIn className="max-w-4xl">
                                    {renderHighlightedText(deliverData.heading, deliverData.headingHighlightText)}
                                </TextSlideIn>
                                <TextStagger 
                                    text={deliverData.description}
                                    delay={0.3}
                                    staggerSpeed={0.025}
                                    className="max-w-md text-sm text-white leading-relaxed whitespace-nowrap"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 mt-6">
                        <CardWithPictureSection/>
                        <AddOnsCardSection/>
                    </div>
                </div>
            </div>
        </section>
    )
}