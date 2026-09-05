import { renderHighlightedText } from "@/lib/highlightText";
import BubbleTag from "../Common/BubbleTag";
import Dropdown from "../Common/Dropdown";
import ReceiptItem from "./ReceiptItem";
import TextSlideIn from "../Common/TextSlideIn";
import TextStagger from "../Common/TextStagger";

export default function ConfidentialitySection(){
    const sectionData = {
        title:{
            variant:"title" as const,
            number:"04",
            text:"Confidentiality"
        },
        heading:"Invisible By Default",
        headingHightlightText:"Invisible",
        subheading:"Everything here is how we operate as standard. None of it is an upgrade you have to ask for, and none of it depends on us being nice about it."
    }

    return(
        <section id="confidentiality" className="relative w-full py-24">
            <div className="absolute inset-0 bg-dark/10 pointer-events-none" />

            <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 xl:px-32">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 justify-center items-center">

                    <div className="flex flex-col gap-4">
                        <BubbleTag
                            variant={sectionData.title.variant}
                            number={sectionData.title.number}
                            items={[
                                {
                                    text:sectionData.title.text
                                }
                            ]}
                        />
                        <TextSlideIn>
                            {renderHighlightedText(sectionData.heading, sectionData.headingHightlightText)}
                        </TextSlideIn>
                        <TextStagger text={sectionData.subheading}
                                delay={0.3}
                                    staggerSpeed={0.025}
                                    className=""/>

                        <div className="mt-6 w-full">
                            <ReceiptItem/>
                        </div>
                    </div>

                    <div className="w-full">
                        <Dropdown variant="confidentiality"/>
                    </div>
                </div>
            </div>
        </section>
    )
}