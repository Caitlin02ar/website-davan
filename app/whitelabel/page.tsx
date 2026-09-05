import HeroSection from "@/app/components/whitelabel/Hero/Hero";
import NavbarWhiteLabel from "../components/whitelabel/Common/Navbar";
import TheProblemSection from "../components/whitelabel/TheProblem/TheProblem";
import TheOpportunitySection from "../components/whitelabel/TheOpportunity/TheOpportunity";
import WhatWeDeliverSection from "../components/whitelabel/WhatWeDeliver/WhatWeDeliver";
import ConfidentialitySection from "../components/whitelabel/Confidentiality/Confidentiality";
import HowItWorksSection from "../components/whitelabel/HowItWorks/HowItWorks";
import WhyDavanSection from "../components/whitelabel/WhyDavan/WhyDavan";
import OurWorksSection from "../components/whitelabel/OurWorks/OurWorks";
import ThePricingSection from "../components/whitelabel/ThePricing/ThePricing";
import CommonQuestionsSection from "../components/whitelabel/CommonQuestions/CommonQuestions";
import GetStarted from "../components/whitelabel/GetStarted/GetStarted";


export default function whiteLabelPage(){
    return(
        <div className="flex min-h-screen flex-col items-center justify-center gap-12 md:gap-16">
              <NavbarWhiteLabel/>

              <HeroSection/>
              <TheProblemSection/>
              <TheOpportunitySection/>
              <WhatWeDeliverSection/>
              <ConfidentialitySection/>
              <HowItWorksSection/>
              <WhyDavanSection/>
              <OurWorksSection/>
              <ThePricingSection/>
              <CommonQuestionsSection/>
              <GetStarted/>
        </div>
    )
}
