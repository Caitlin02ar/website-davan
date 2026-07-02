
import Form from "../components/contact/Form";
import Pillar from "../components/contact/Pillar";
import { client } from "@/sanity/lib/client";
import CTAGlobal from "../components/common/CTAGlobal";

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

    form{
      title,
      heading,
      hightlightText,
      description,

      formFields[]{
        fieldName,
        fieldType
      }
    },

    fieldReasons[]{
      reason
    },

    formButtonText,

    headingCard,

    pillarContact[]{
      tag,
      title,
      description
    }

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
        "backgroundImage": backgroundImage.asset->url
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
            href="/contact-us" />
        </main>
    )
}