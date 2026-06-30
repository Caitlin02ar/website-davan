
import Hero from "./components/home/Hero";
import RunningText from "./components/home/RunningText";
import FourPillars from "./components/home/FourPillars";
import Client from "./components/home/Client";
import Why from "./components/home/Why";
import CTAGlobal from "./components/common/CTAGlobal";

import { client } from "@/sanity/lib/client";

export default async function Home() {
  const heroData = await client.fetch(`
    *[_type == "heroGlobal" && page == "home"][0]{
      title,
      highlightText,
      description,
      buttonText,
      "backgroundImage": backgroundImage.asset->url
    }
  `);

  const whyData = await client.fetch(`
    *[_type == "why"][0]{
      title,
      highlight,
      description,
      cards[]{
        tag,
        title,
        buttonText
      }
    }
  `);

  const fourPillarData = await client.fetch(`
  *[_type == "fourpillar" && page == "home"][0]{
    tag,
    title,
    highlight,
    card[]{
      tag,
      title,
      description,
      "picture": picture.asset->url
    }
  }
`);
const clientData = await client.fetch(`
  *[
    _type == "clientSection"
    && page == "home"
  ][0]{

    title,
    description,

    picture[]{
      "src": asset->url
    },

    logos[]{
      "src": asset->url
    }

  }
`);

const ctaData = await client.fetch(`
  *[
    _type == "ctaGlobal"
    && page == "home"
      ][0]{
        heading,
        subheadingTop,
        subheadingBottom,
        buttonText,
        titleColor,
        "backgroundImage": backgroundImage.asset->url
      }
  `)

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