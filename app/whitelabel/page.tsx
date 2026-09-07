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
import { whatWeDeliverQuery } from "@/sanity/lib/queries/whatWeDeliver";
import { confidentialityQuery } from "@/sanity/lib/queries/confidentiality";
import { howItWorksQuery } from "@/sanity/lib/queries/howItWorks";
import { whyDavanQuery } from "@/sanity/lib/queries/whyDavan";
import { ourWorksQuery } from "@/sanity/lib/queries/ourWorks";
import { thePricingQuery } from "@/sanity/lib/queries/thePricing";
import { commonQuestionsQuery } from "@/sanity/lib/queries/commonQuestions";
import { getStartedQuery } from "@/sanity/lib/queries/getStarted";


export default async function whiteLabelPage(){
    const hero = await client.fetch(heroQuery);
    const problem = await client.fetch(problemQuery);
    const opportunity = await client.fetch(opportunityQuery);
    const whatWeDeliver = await client.fetch(whatWeDeliverQuery);
    const confidentiality = await client.fetch(confidentialityQuery);
    const howItWorks = await client.fetch(howItWorksQuery);
    const whyDavan = await client.fetch(whyDavanQuery);
    const ourWorks = await client.fetch(ourWorksQuery);
    const thePricing = await client.fetch(thePricingQuery);
    const commonQuestion = await client.fetch(commonQuestionsQuery);
    const getStarted = await client.fetch(getStartedQuery);


    console.log("Hero", hero);
    console.log("Problem", problem);
    console.log("Opportunity", opportunity);
    console.log("What We Deliver", whatWeDeliver);
    console.log("Confidentiality", confidentiality);
    console.log("How it works", howItWorks);
    console.log("Why DAVAN", whyDavan);
    console.log("Our Works", ourWorks);
    console.log("The Pricing", thePricing);
    console.log("Common Question", commonQuestion);
    console.log("Get Started", getStarted); 
    
    return(
        <div className="flex min-h-screen flex-col items-center justify-center gap-12 md:gap-16">
              <NavbarWhiteLabel/>

              <HeroSection heroData={hero}/>
              <TheProblemSection problemData={problem}/>
              <TheOpportunitySection opportunityData={opportunity}/>
              <WhatWeDeliverSection deliverData={whatWeDeliver}/>
              <ConfidentialitySection confidentialityData={confidentiality}/>
              <HowItWorksSection howItWorksData={howItWorks} />
              <WhyDavanSection whyDavanData={whyDavan} />
              <OurWorksSection worksSectionData={ourWorks}/>
              <ThePricingSection pricingData={thePricing} />
              <CommonQuestionsSection/>
              <GetStarted getStartedData={getStarted}/>
        </div>
    )
}
