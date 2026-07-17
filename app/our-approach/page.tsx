import HeroApproach from "../components/approach/HeroApproach";
import Description from "../components/approach/Description";
import FourMethod from "../components/approach/FourMethod";
import Clients from "../components/approach/Clients";
import CTAGlobal from "../components/common/CTAGlobal";
import DescriptionBanner from "../components/approach/DescriptionBanner";
import DescriptionContent from "../components/approach/DescriptionContent";
import { Metadata } from "next";

import { client } from "@/sanity/lib/client";
import { pageOpenGraph } from "@/lib/seo";

const TITLE = "Our Approach - DAVAN Digital";
const DESCRIPTION =
  "Discover DAVAN Digital's approach to delivering innovative solutions, our methodology, and how we engage with clients to achieve success.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  ...pageOpenGraph({ title: TITLE, description: DESCRIPTION, path: "/our-approach" }),
};

export const revalidate = 60;

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
  && "approach" in pages
][0]{
  heading,
  titleColor,
  "backgroundImage": backgroundImage.asset->url,
  "button": buttons[page == "approach"][0]{
    buttonText,
    href
  }
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
    _id == "approachDescription"
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
    _id == "approachMethod"
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
    <main>

      <HeroApproach data={heroData} />

      <DescriptionContent data={descriptionData} />

      <DescriptionBanner data={bannerData} />

      <FourMethod data={methodData} />

      <Clients data={clientData} />

      <CTAGlobal
        title={ctaData?.heading}
        buttonText={ctaData?.button?.buttonText}
        titleColor={ctaData?.titleColor}
        backgroundImage={ctaData?.backgroundImage}
        href={ctaData?.button?.href}
      />

    </main>
  );
}