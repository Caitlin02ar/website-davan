import {Metadata} from "next";
import { client } from "@/sanity/lib/client";
import LegalPageContent from "../components/common/LegalPageContent";
import { getPageMeta } from "@/lib/seo";

const FALLBACK_TITLE = "Privacy Policy";
const FALLBACK_DESCRIPTION = "Read DAVAN Digital's privacy policy to understand how we collect, use, and protect your personal information.";

export async function generateMetadata(): Promise<Metadata>{
  return getPageMeta({
    page:"privacy-policy",
    path:"/privacy-policy",
    fallbackTitle:FALLBACK_TITLE,
    fallbackDescription: FALLBACK_DESCRIPTION,
  });
}

export const revalidate = 60;

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