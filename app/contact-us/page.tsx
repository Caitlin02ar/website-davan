
import Form from "../components/contact/Form";
import Pillar from "../components/contact/Pillar";
import CTA from "../components/common/CTA";
import { client } from "@/sanity/lib/client";

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


    return(
        <main>
            <Form data={contactData} modalData={modalData}/>
            <Pillar data={fourPillarData}/>
            <CTA/>
        </main>
    )
}