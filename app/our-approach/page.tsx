import HeroApproach from "../components/approach/HeroApproach";
import Description from "../components/approach/Description";
import FourMethod from "../components/approach/FourMethod";
import Clients from "../components/approach/Clients";
import CTAGlobal from "../components/common/CTAGlobal";
import DescriptionBanner from "../components/approach/DescriptionBanner";
import DescriptionContent from "../components/approach/DescriptionContent";
import { Metadata } from "next";

import { client } from "@/sanity/lib/client";

export const metadata: Metadata = {
  title: "Our Approach - DAVAN Digital",
  description:
    "Discover DAVAN Digital's approach to delivering innovative solutions, our methodology, and how we engage with clients to achieve success.",
};

const APPROACH_QUERY = `{

  "hero": *[
    _type == "heroGlobal"
    && page == "approach"
  ][0]{
    title,
    subheading,
    "backgroundImage": backgroundImage.asset->url
  },

  "client": *[
    _type == "clientSection"
    && page == "approach"
  ][0]{
    title,

    picture[]{
      "src": asset->url
    },

    logos[]{
      "src": image.asset->url,
      clientName
    }
  },

  "cta": *[
    _type == "ctaGlobal"
    && page == "approach"
  ][0]{
    heading,
    buttonText,
    titleColor,
    "backgroundImage": backgroundImage.asset->url
  },

  "banner": *[
    _type == "bannerSection"
    && page == "approach"
  ][0]{
    heading,
    highlightHeading,
    description,
    "backgroundImage": backgroundImage.asset->url
  },

  "description": *[
    _type == "approachDescription"
  ][0]{
    tag,

    contentDescription[]{
      title,
      highlightText,
      description,

      picture{
        asset->{
          url
        }
      }
    }
  },

  "method": *[
    _type == "approachMethod"
  ][0]{
    tag,
    title,
    highlight,

    methodContent[]{
      number,
      title,
      description
    }
  }

}`;

export default async function OurApproach() {

  const data = await client.fetch(APPROACH_QUERY);

  const heroData = data.hero;
  const clientData = data.client;
  const ctaData = data.cta;
  const bannerData = data.banner;
  const descriptionData = data.description;
  const methodData = data.method;

  return (
    <section>

      <HeroApproach data={heroData} />

      <DescriptionContent data={descriptionData} />

      <DescriptionBanner data={bannerData} />

      <FourMethod data={methodData} />

      <Clients data={clientData} />

      <CTAGlobal
        title={ctaData.heading}
        titleColor={ctaData.titleColor}
        buttonText={ctaData.buttonText}
        backgroundImage={ctaData.backgroundImage}
        href="/contact-us"
      />

    </section>
  );
}