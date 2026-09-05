import Dropdown from "../Common/Dropdown";
import BubbleTag from "../Common/BubbleTag";
import TextSlideIn from "../Common/TextSlideIn";

export default function CommonQuestionsSection(){
    const commonQuestionData = {
        heading:"The questions every studio asks.",
        title:{
            variant:"title" as const,
            number:"09",
            text:"Common Questions"
        }
    }
    return(
        <section id="common-questions" className="relative min-h-screen w-full overflow-hidden">
            <div className="absolute inset-0 bg-dark/10"/>
            <div className="relative z-10 flex flex-col min-h-screen items-start">
                <div className="w-full px-8 md:px-16 md:pt-24 lg:px-24 xl:px-32">
                    <div>
                        <div className="flex flex-col gap-4">
                            <BubbleTag
                            variant={commonQuestionData.title.variant}
                            number={commonQuestionData.title.number}
                            items={[
                                {
                                    text:commonQuestionData.title.text
                                }
                            ]}/>
                            <div className="flex items-start justify-between">
                                <TextSlideIn>
                                    {commonQuestionData.heading}
                                </TextSlideIn>
                                <Dropdown variant="questions"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}