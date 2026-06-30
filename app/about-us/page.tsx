import HeroAbout from "../components/about/HeroAbout";
import AboutDavan from "../components/about/AboutDavan";
import AboutSlogan from "../components/about/AboutSlogan";
import Principles from "../components/about/Principles";
import HowWeWork from "../components/about/HowWeWork";
import CTAGlobal from "../components/common/CTAGlobal";

import { client } from "@/sanity/lib/client";

export default async function About() {

  const heroData = await client.fetch(`
    *[
      _type == "heroGlobal"
      && page == "about"
    ][0]{
      title,
      highlightText,
      description,
      aboutSlogan,
      highlightSlogan,
      "backgroundImage": backgroundImage.asset->url
    }
  `);

  const bannerData = await client.fetch(`
    *[
    _type == "bannerSection"
    && page == "about"
  ][0]{
    heading,
    highlightHeading,
    description,
    "backgroundImage": backgroundImage.asset->url
  }
    `)

    const howWeWorkData = await client.fetch(`
  *[
    _type == "HowWeWork"
  ][0]{

    tag,
    heading,
    hightlightText,

    contentHowWeWork[]{
      title,
      description,
      image{
        asset->{
          url
        }
      }
    }

  }
`);

const aboutData = await client.fetch(`
  *[
  _type == "aboutSlogan"
  ][0]{
  heading,
  highlightText,
  description,
  }
  `);

  const principlesData = await client.fetch(`
  *[
    _type == "principlesAbout"
  ][0]{

    tag,
    heading,
    hightlightText,

    contentPrinciples[]{
      title,
      description,

      icon{
        asset->{
          url
        }
      }
    }

  }
`);

const ctaData = await client.fetch(`
    *[
      _type == "ctaGlobal"
      && page == "about"
    ][0]{
      heading,
      buttonText,
      titleColor,
      "backgroundImage": backgroundImage.asset->url
    }
  `);

  return (
    <main>
      <HeroAbout data={heroData} />

      <AboutDavan data={aboutData}/>

      <AboutSlogan data={bannerData} />

      <Principles data={principlesData} />

      <HowWeWork data={howWeWorkData} />

      <CTAGlobal
        title={ctaData.heading}
        titleColor={ctaData.titleColor}
        buttonText={ctaData.buttonText}
        backgroundImage={ctaData.backgroundImage}
        href="/contact-us"
      />
    </main>
  );
}