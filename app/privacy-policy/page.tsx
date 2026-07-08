import {Metadata} from "next";
import { client } from "@/sanity/lib/client";
import LegalPageContent from "../components/common/LegalPageContent";

export const metadata: Metadata = {
    title: "Privacy Policy - DAVAN Digital",
    description: "Read DAVAN Digital's privacy policy to understand how we collect, use, and protect your personal information.",
  };

export default async function PrivacyPolicy(){

    const legalData = await client.fetch(`
  *[
    _type == "legalPages"
    && page == "privacy-policy"
  ][0]{

    title,
    companyName,
    lastUpdate,

    contentLegalPage[]{
      title,
      blocks[]{
        _type,
        text,
        items,
        linkLabel,
        linkHref
      }
    }

  }
`);


    return(
        <main>
            <LegalPageContent data={legalData}/>
        </main>
    );
}