import HeroApproach from "../components/approach/HeroApproach";
import Description from "../components/approach/Description";
import FourMethod from "../components/approach/FourMethod";
import Clients from "../components/approach/Clients";
import CTAGlobal from "../components/common/CTAGlobal";
import DescriptionBanner from "../components/approach/DescriptionBanner";
import DescriptionContent from "../components/approach/DescriptionContent";

import { client } from "@/sanity/lib/client";

export default async function OurApproach() {

  // HERO
  const heroData = await client.fetch(`
    *[
      _type == "heroGlobal"
      && page == "approach"
    ][0]{
      title,
      subheading,
      "backgroundImage": backgroundImage.asset->url
    }
  `);

  // CLIENT
  const clientData = await client.fetch(`
    *[
      _type == "clientSection"
      && page == "approach"
    ][0]{

      title,

      picture[]{
        "src": asset->url
      },

      logos[]{
        "src": asset->url
      }

    }
  `);

  // CTA
  const ctaData = await client.fetch(`
    *[
      _type == "ctaGlobal"
      && page == "approach"
    ][0]{
      heading,
      buttonText,
      titleColor,
      "backgroundImage": backgroundImage.asset->url
    }
  `);

  // BANNER
  const bannerData = await client.fetch(`
    *[
      _type == "bannerSection"
      && page == "approach"
    ][0]{
      heading,
      highlightHeading,
      description,
      "backgroundImage": backgroundImage.asset->url
    }
  `);

  // DESCRIPTION CONTENT
  const descriptionData = await client.fetch(`
    *[
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

    }
  `);
  const methodData = await client.fetch(`
  *[
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
`);

  return (
    <section>

      <HeroApproach data={heroData} />

      <Description />

      <DescriptionContent data={descriptionData} />

      <DescriptionBanner data={bannerData} />

      <FourMethod data={methodData}/>

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