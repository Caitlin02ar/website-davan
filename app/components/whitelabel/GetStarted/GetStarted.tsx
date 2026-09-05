import BubbleTag from "../Common/BubbleTag";
import WhiteLabelButton from "../Common/Button";
import { renderHighlightedText } from "@/lib/highlightText";
import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";
import TextSlideIn from "../Common/TextSlideIn";
import TextStagger from "../Common/TextStagger";

export default function GetStarted(){
    const currentYear = new Date().getFullYear();

    const getStartedData = {
        image:{
            src:"/photos/whitelabel/get-started-bg.webp",
            alt:"",
            width:1920,
            height:1080
        },
        title:{
            variant:"title" as const,
            number:"10",
            text:"Get Started"
        },
        heading:"Start With One Brief.",
        headingHighlight:"One Brief.",
        subheading:"Send us something small and see how it goes. We will come back with scope, timeline, and an effort estimate you can price and put straight in front of your client.",
        textButtonOutline:"Send us a brief",
        textButtonPrimary:"Request the rate card",
        button:{
            href:"mailto:david@davan.digital"
        },
        contact:{
            titleInformation:"Primary Contact",
            location:"Perth, Australia",
            email:"david@davan.digital",
            telephone:"(+61) 430 305 664"
        },
        additionalInformation:"This page is unlisted. It is not linked from davan.digital and it is not indexed by search engines. Please keep the link between us."
    }

    return(
        <section id="get-started" className="relative min-h-screen w-full overflow-hidden">
            <Image
                src={getStartedData.image.src}
                alt={getStartedData.image.alt}
                width={getStartedData.image.width}
                height={getStartedData.image.height}
                priority
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-dark/40"/>

            <div className="relative z-10 flex min-h-screen flex-col justify-between">
                <div className="w-full px-8 pt-16 md:px-16 md:pt-24 lg:px-24 xl:px-32">
                    <div className="flex flex-row items-end justify-between gap-12">

                        <div className="flex flex-col gap-8 max-w-xl">
                            <BubbleTag
                                variant={getStartedData.title.variant}
                                number={getStartedData.title.number}
                                items={[
                                    {
                                        text:getStartedData.title.text
                                    }
                                ]}
                            />
                            <div className="flex flex-col gap-4">
                                <TextSlideIn>
                                    {renderHighlightedText(getStartedData.heading, getStartedData.headingHighlight)}

                                </TextSlideIn>
                                
                                <TextStagger 
                                    text={getStartedData.subheading}
                                    delay={0.3}
                                    staggerSpeed={0.025}
                                />
                            </div>
                            <div className="flex flex-row items-center gap-4">
                                <WhiteLabelButton variant="outline" animated={true} href={getStartedData.button.href}>
                                    {getStartedData.textButtonOutline} 
                                </WhiteLabelButton>
                                <WhiteLabelButton variant="primary" animated={true} href={getStartedData.button.href}>
                                    {getStartedData.textButtonPrimary}
                                </WhiteLabelButton>
                            </div>
                        </div>

                        <div className="hidden md:flex flex-col items-end gap-3 shrink-0">
                            <span className="font-body text-primary text-sm font-semibold">
                                {getStartedData.contact.titleInformation}
                            </span>
                            <div className="flex items-center gap-3">
                                <span className="font-body text-sm">{getStartedData.contact.location}</span>
                                <MapPin className="text-primary" size={18} strokeWidth={2} />
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="font-body text-sm">{getStartedData.contact.email}</span>
                                <Mail className="text-primary" size={18} strokeWidth={2} />
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="font-body text-sm">{getStartedData.contact.telephone}</span>
                                <Phone className="text-primary" size={18} strokeWidth={2} />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="w-full px-8 pb-8 md:px-16 lg:px-24 xl:px-32">
                    <p className="font-body text-xs text-white text-right max-w-md ml-auto">
                        {getStartedData.additionalInformation} © {currentYear} DAVAN Digital. All rights reserved.
                    </p>
                </div>
            </div>
        </section>
    )
}