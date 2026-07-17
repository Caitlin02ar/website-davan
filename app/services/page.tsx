import HeroServices from "../components/services/HeroServices";
import Steps from "../components/services/Steps";
import FAQ from "../components/services/FAQ";
import ServicesSlogan from "../components/services/ServicesSlogan";
import ServicesCardItems from "../components/services/ServicesCardItems";
import { client } from "@/sanity/lib/client";
import { pageOpenGraph } from "@/lib/seo";
import { Metadata } from "next";

const TITLE = "Services";
const DESCRIPTION =
  "Explore the range of services offered by DAVAN Digital, including digital marketing, web development, and more.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  ...pageOpenGraph({
    title: TITLE,
    description: DESCRIPTION,
    path: "/services",
  }),
};

export const revalidate = 60;

const SERVICES_QUERY = `{

  "hero": *[
    _type == "heroGlobal"
    && page == "services"
  ][0]{
    title,
    subheading,
    "backgroundImage": backgroundImage.asset->url 
  },

  "cta": *[
    _type == "ctaGlobal"
    && "services" in pages
  ][0]{
    heading,
    titleColor,
    "button": buttons[page == "services"][0]{
      buttonText,
      href
    }
  },

  "banner": *[
    _type == "bannerSection"
    && page == "services"
  ][0]{
    heading,
    highlightHeading,
    description,
    "backgroundImage": backgroundImage.asset->url
  },

  "faq": *[
    _id == "faqSection"
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
  },

  "steps": *[
    _type == "howWeWork"
  ][0]{
    heading,
    subheading,

    content[]{
      number,
      title,
      description
    }
  },

  "servicesCard": *[
    _type == "fourpillar"
    && "services" in pages
  ][0]{
    card[]{
      tag,
      title,
      description,
      badgesItems,
      "picture": picture.asset->url + "?w=1200&fm=webp&q=80"
    }
  }

}`;

export default async function Services() {
  const data = await client.fetch(SERVICES_QUERY);

  const heroData = data?.hero;
  const ctaData = data?.cta;
  const bannerData = data?.banner;
  const faqData = data?.faq;
  const stepsData = data?.steps;
  const servicesCardData = data?.servicesCard;

  return (
    <main>
      <HeroServices data={heroData} />

      <ServicesCardItems data={servicesCardData} />

      <ServicesSlogan data={bannerData} />

      <Steps data={stepsData} />

      <FAQ faqData={faqData} ctaData={ctaData} />
    </main>
  );
}