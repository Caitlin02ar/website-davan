import Form from "../components/contact/Form";
import Pillar from "../components/contact/Pillar";
import CTAGlobal from "../components/common/CTAGlobal";
import { client } from "@/sanity/lib/client";
import { pageOpenGraph } from "@/lib/seo";
import { Metadata } from "next";

const TITLE = "Contact Us";
const DESCRIPTION =
  "Get in touch with DAVAN Digital for inquiries, support, or collaboration opportunities.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  ...pageOpenGraph({
    title: TITLE,
    description: DESCRIPTION,
    path: "/contact-us",
  }),
};

export const revalidate = 60;

const CONTACT_QUERY = `{

  "fourPillar": *[
    _type == "fourpillar"
    && "contact" in pages
  ][0]{
    "heading": headings[page == "contact"][0]{
      tag,
      title,
      highlight
    },
    card[]{
      tag,
      title,
      description
    }
  },

  "contact": *[
    _id == "contactContent"
  ][0]{
    title,
    heading,
    highlightText,
    "imageContent": imageContent.asset->url,
    description,

    formFields[]{
      fieldName,
      fieldType,
      required
    },

    reasonField{
      required,
      options[]{
        reason
      }
    },

    formButtonText
  },

  "modal": *[
    _type == "modalPopUp"
  ][0]{
    title,
    message,
    buttonText,

    icon{
      asset->{
        url
      }
    }
  },

  "cta": *[
    _type == "ctaGlobal"
    && "contact" in pages
  ][0]{
    heading,
    subheadingTop,
    subheadingBottom,
    titleColor,
    "backgroundImage": backgroundImage.asset->url,
    "button": buttons[page == "contact"][0]{
      buttonText,
      href
    }
  }

}`;

export default async function ContactUs() {
  const data = await client.fetch(CONTACT_QUERY);

  const fourPillarData = data?.fourPillar;
  const contactData = data?.contact;
  const modalData = data?.modal;
  const ctaData = data?.cta;

  return (
    <main>
      <Form data={contactData} modalData={modalData} />

      <Pillar data={fourPillarData} />

      <CTAGlobal
        topText={ctaData?.subheadingTop}
        title={ctaData?.heading}
        bottomText={ctaData?.subheadingBottom}
        buttonText={ctaData?.button?.buttonText}
        titleColor={ctaData?.titleColor}
        backgroundImage={ctaData?.backgroundImage}
        href={ctaData?.button?.href}
      />
    </main>
  );
}