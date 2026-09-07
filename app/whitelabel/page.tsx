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

import { client } from "@/sanity/lib/client";
import { heroQuery } from "@/sanity/lib/queries/hero";
import { problemQuery } from "@/sanity/lib/queries/theProblem";
import { opportunityQuery } from "@/sanity/lib/queries/theOpportunity";
import { confidentialityQuery } from "@/sanity/lib/queries/confidentiality";


export default async function whiteLabelPage(){
    const hero = await client.fetch(heroQuery);
    const problem = await client.fetch(problemQuery);
    const opportunity = await client.fetch(opportunityQuery);
    const confidentiality = await client.fetch(confidentialityQuery);

    console.log("Hero", hero);
    console.log("Problem", problem);
    console.log("Opportunity", opportunity);
    console.log("Confidentiality", confidentiality);
    return(
        <div className="flex min-h-screen flex-col items-center justify-center gap-12 md:gap-16">
              <NavbarWhiteLabel/>

              <HeroSection heroData={hero}/>
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
