import HeroServices from "../components/services/HeroServices";
import ServicesSection from "../components/services/ServicesSection";
import Steps from "../components/services/Steps";
import FAQ from "../components/services/FAQ";
import ServicesSlogan from "../components/services/ServicesSlogan";
import ServicesCardItems from "../components/services/ServicesCardItems";
import { Metadata } from "next";
import { client } from "@/sanity/lib/client";


export const metadata: Metadata = {
  title: "Services - DAVAN Digital",
  description: "Explore the range of services offered by DAVAN Digital, including digital marketing, web development, and more.",
};

export default async function Services() {

    const heroData = await client.fetch(`
        *[
            _type == "heroGlobal"
            && page == "services"
            ][0]{
            title,
            subheading,
            "backgroundImage": backgroundImage.asset->url
        }
    `)

    const ctaData = await client.fetch(`
        *[
            _type == "ctaGlobal"
            && page == "services"
            ][0]{
            heading,
            buttonText,
            titleColor
        }
    `);

    const bannerData = await client.fetch(`
      *[
          _type == "bannerSection"
          && page == "services"
          ][0]{
            heading,
            highlightHeading,
            description,
            "backgroundImage": backgroundImage.asset->url
          }  
      `)

      const faqData = await client.fetch(`
        *[
          _type == "faqSection"
          ][0]{
            tag,
            title,
            highlightText,
            "backgroundImage": backgroundImage.asset->url,

            faqContent[]{
              question,
              answer
            },

            headingCard,
            description,
            buttonText
          }
      `)

  const stepsData = await client.fetch(`
    *[
      _type == "howWeWork"
        ][0]{
          heading,
          subheading,

          content[]{
            number,
            title,
            description
          }
        }
  `);

const servicesCardData = await client.fetch(`
  *[
    _type == "fourpillar" && page == "services"
    ][0]{
      card[]{
        tag,
        title,
        description,
        badgesItems,
      }
    }
`);

  return (
    <main>
      <HeroServices data={heroData}/>
      <ServicesCardItems data={servicesCardData}/>
      <ServicesSlogan data={bannerData}/>
      <Steps data={stepsData}/>
      <FAQ 
      faqData = {faqData}
      ctaData={ctaData} />
    </main>
  );
}