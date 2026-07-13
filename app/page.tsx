import Hero from "./components/home/Hero";
import RunningText from "./components/home/RunningText";
import FourPillars from "./components/home/FourPillars";
import Client from "./components/home/Client";
import Why from "./components/home/Why";
import CTAGlobal from "./components/common/CTAGlobal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - DAVAN Digital",
  description: "Welcome to DAVAN Digital, your trusted partner for innovative digital solutions. Explore our services, approach, and success stories.",
};

import { client } from "@/sanity/lib/client";

const HOME_QUERY = `{
  "hero": *[_type == "heroGlobal" && page == "home"][0]{
    title,
    highlightText,
    description,
    buttonText,
    "backgroundImage": backgroundImage.asset->url
  },

  "why": *[_type == "why"][0]{
    title,
    highlight,
    description,
    cards[]{
      tag,
      title,
      buttonText
    }
  },

  "fourPillar": *[_type == "fourpillar" && page == "home"][0]{
    tag,
    title,
    highlight,
    card[]{
      tag,
      title,
      description,
      "picture": picture.asset->url
    }
  },

  "client": *[_type == "clientSection" && page == "home"][0]{
    title,
    description,

    picture[]{
      "src": asset->url
    },

    logos[]{
      "src": image.asset->url,
      clientName
    }
  },

  "cta": *[_type == "ctaGlobal" && page == "home"][0]{
    heading,
    subheadingTop,
    subheadingBottom,
    buttonText,
    titleColor,
    "backgroundImage": backgroundImage.asset->url
  }
}`;

export default async function Home() {
  const data = await client.fetch(HOME_QUERY);

  const heroData = data.hero;
  const whyData = data.why;
  const fourPillarData = data.fourPillar;
  const clientData = data.client;
  const ctaData = data.cta;

  return (
    <main id="home">

      <Hero data={heroData} />

      <RunningText  />

      <Why data={whyData} />

      <FourPillars data={fourPillarData} />

      <Client data={clientData} />

      <CTAGlobal
        topText={ctaData.subheadingTop}
        title={ctaData.heading}
        bottomText={ctaData.subheadingBottom}
        buttonText={ctaData.buttonText}
        titleColor={ctaData.titleColor}
        backgroundImage={ctaData.backgroundImage}
        href="/contact-us"
      />

    </main>
  );
}