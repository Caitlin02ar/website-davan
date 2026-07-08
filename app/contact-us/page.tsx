
import Form from "../components/contact/Form";
import Pillar from "../components/contact/Pillar";
import { client } from "@/sanity/lib/client";
import CTAGlobal from "../components/common/CTAGlobal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - DAVAN Digital",
  description: "Get in touch with DAVAN Digital for inquiries, support, or collaboration opportunities.",
};

export default async function ContactUs(){
    const fourPillarData = await client.fetch(`
      *[_type == "fourpillar" && page == "contact"][0]{
        tag,
        title,
        highlight,
        card[]{
          tag,
          title,
          description,
        }
      }
    `);

    const contactData = await client.fetch(`
  *[
    _type == "contactContent"
    ][0]{
      title,
      heading,
      highlightText,
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

    }
`);

const modalData = await client.fetch(`
  *[
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

  }
`);

const ctaData = await client.fetch(`
  *[
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
  `)


    return(
        <main>
            <Form data={contactData} modalData={modalData}/>
            <Pillar data={fourPillarData}/>
            <CTAGlobal  
            topText={ctaData.subheadingTop}
            title={ctaData.heading}
            bottomText={ctaData.subheadingBottom}
            buttonText={ctaData.buttonText}
            titleColor={ctaData.titleColor}
            backgroundImage={ctaData.backgroundImage}
            href={ctaData.linkContact}/>
        </main>
    )
}