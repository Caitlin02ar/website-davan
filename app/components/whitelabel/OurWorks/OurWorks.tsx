import { renderHighlightedText } from "@/lib/highlightText";
import BubbleTag from "../Common/BubbleTag";
import RunningLogo from "./RunningLogo";
import PortofolioAnimate from "./PortofolioAnimate";
import ChatBox from "./ChatBox";
import TextSlideIn from "../Common/TextSlideIn";
import TextStagger from "../Common/TextStagger";

export default function OurWorksSection() {
  const worksSectionData = {
    title: {
      variant: "title" as const,
      number: "07",
      text: "Our Works",
    },

    heading: "The Experience Behind The Partnership",
    headingHiglightText: "The Experience",

    subheading:
      "Our team and production partners have delivered brand, digital, and content work for organisations across Australia, Asia, Europe, and North America.",

    logo: {
      src: "/photos/whitelabel/logo-credentials.png",
    },

    portfolio: {
      src: "/photos/whitelabel/portfolio.png",
    },

     chatBox:{
        title:"We are already the delivery layer behind a Perth studio, across brand and web.",
        subheading:"We will not name them here, which is rather the point. A reference call can be arranged with their permission once we have met.",
        subtitle:"On attribution",
        description:"The work above represents projects delivered by DAVAN, by our production partners, and by members of our team in prior roles. We will tell you exactly which is which, project by project, and put you in touch with references on request. Case studies with full scope and timesline are shared under NDA rather than published. We would rather be precise than impressive."
    }
  };

  return (
    <section
      id="our-works"
      className="relative min-h-screen w-full overflow-hidden mb-24"
    >
      <div className="absolute inset-0 bg-dark/10" />

      <div className="relative z-10 w-full">

        <div className="w-full px-8 pt-16 md:px-16 md:pt-24 lg:px-24 xl:px-32">
          <div className="flex flex-col gap-4">
            <BubbleTag
              variant={worksSectionData.title.variant}
              number={worksSectionData.title.number}
              items={[
                {
                  text: worksSectionData.title.text,
                },
              ]}
            />

            <div className="flex w-full flex-col gap-6">
              <TextSlideIn>
                {renderHighlightedText(
                  worksSectionData.heading,
                  worksSectionData.headingHiglightText
                )}
              </TextSlideIn>

              {/* <p className="max-w-3xl font-body text-sm"> */}
                
              {/* </p> */}
              <TextStagger text={worksSectionData.subheading}
              delay={0.3}
              staggerSpeed={0.025}
              className="max-w-3xl text-[12px] whitespace-nowrap"
              />
            </div>
          </div>
        </div>
        <RunningLogo src={worksSectionData.logo.src} />
        <PortofolioAnimate
          src={worksSectionData.portfolio.src}
        />
        <ChatBox 
        title={worksSectionData.chatBox.title}
        subheading={worksSectionData.chatBox.subheading}
        subtitle={worksSectionData.chatBox.subtitle}
        description={worksSectionData.chatBox.description}/>
      </div>
    </section>
  );
}