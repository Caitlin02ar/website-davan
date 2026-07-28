import HeroAbout from "../components/about/HeroAbout";
import AboutDavan from "../components/about/AboutDavan";
import AboutSlogan from "../components/about/AboutSlogan";
import Principles from "../components/about/Principles";
import HowWeWork from "../components/about/HowWeWork";
import CTAGlobal from "../components/common/CTAGlobal";
import { Metadata } from "next";

import { client } from "@/sanity/lib/client";
import { getPageMeta } from "@/lib/seo";

const FALLBACK_TITLE = "About Us";
const FALLBACK_DESCRIPTION =
  "Learn more about DAVAN Digital, our mission, values, and how we work.";
 
export async function generateMetadata(): Promise<Metadata> {
  return getPageMeta({
    page: "about",
    path: "/about-us",
    fallbackTitle: FALLBACK_TITLE,
    fallbackDescription: FALLBACK_DESCRIPTION,
  });
}

const ABOUT_QUERY = `{

  "hero": *[
    _type == "heroGlobal"
    && page == "about"
  ][0]{
    title,
    highlightText,
    description,
    aboutSlogan,
    highlightSlogan,
    "backgroundImage": backgroundImage.asset->url
  },

  "banner": *[
    _type == "bannerSection"
    && page == "about"
  ][0]{
    heading,
    highlightHeading,
    description,
    "backgroundImage": backgroundImage.asset->url
  },

  "howWeWork": *[
    _id == "HowWeWork"
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
  },

  "about": *[
    _id == "aboutSlogan"
  ][0]{
    heading,
    highlightText,
    description,
  },

  "principles": *[
    _id == "principlesAbout"
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
  },

  "cta": *[
  _type == "ctaGlobal"
  && "about" in pages
][0]{
  heading,
  subheadingTop,
  subheadingBottom,
  titleColor,
  "backgroundImage": backgroundImage.asset->url,
  "button": buttons[page == "about"][0]{
    buttonText,
    href
  }
}

}`;

export default async function About() {

  const data = await client.fetch(ABOUT_QUERY);

  const heroData = data.hero;
  const bannerData = data.banner;
  const howWeWorkData = data.howWeWork;
  const aboutData = data.about;
  const principlesData = data.principles;
  const ctaData = data.cta;

  return (
    <main>
      <HeroAbout data={heroData} />

      <AboutDavan data={aboutData} />

      <AboutSlogan data={bannerData} />

      <Principles data={principlesData} />

      <HowWeWork data={howWeWorkData} />

      <CTAGlobal
        title={ctaData.heading}
        titleColor={ctaData.titleColor}
        buttonText={ctaData.button?.buttonText}
        backgroundImage={ctaData.backgroundImage}
        href={ctaData.button?.href ?? "/contact-us"}
      />
    </main>
  );
}