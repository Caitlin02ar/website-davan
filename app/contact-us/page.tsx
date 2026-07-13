import Form from "../components/contact/Form";
import Pillar from "../components/contact/Pillar";
import { client } from "@/sanity/lib/client";
import CTAGlobal from "../components/common/CTAGlobal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - DAVAN Digital",
  description:
    "Get in touch with DAVAN Digital for inquiries, support, or collaboration opportunities.",
};

const CONTACT_QUERY = `{

  "fourPillar": *[
    _type == "fourpillar"
    && page == "contact"
  ][0]{
    tag,
    title,
    highlight,

    card[]{
      tag,
      title,
      description,
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
    && page == "contact"
  ][0]{
    heading,
    subheadingTop,
    subheadingBottom,
    buttonText,
    titleColor,
    "backgroundImage": backgroundImage.asset->url,
    linkContact
  }

}`;



export default async function ContactUs() {

  const data = await client.fetch(CONTACT_QUERY);

  const fourPillarData = data.fourPillar;
  const contactData = data.contact;
  const modalData = data.modal;
  const ctaData = data.cta;

  return (
    <main>
      <Form
        data={contactData}
        modalData={modalData}
      />

      <Pillar data={fourPillarData} />

      <CTAGlobal
        topText={ctaData.subheadingTop}
        title={ctaData.heading}
        bottomText={ctaData.subheadingBottom}
        buttonText={ctaData.buttonText}
        titleColor={ctaData.titleColor}
        backgroundImage={ctaData.backgroundImage}
        href={ctaData.linkContact}
      />
    </main>
  );
}