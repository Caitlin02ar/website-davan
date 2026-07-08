import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import LegalPageContent from "../components/common/LegalPageContent";

export const metadata: Metadata = {
    title: "Terms of Use - DAVAN Digital",
    description: "Read DAVAN Digital's terms of use to understand the rules and guidelines for using our website and services.",
  };

export default async function TermsOfUse(){
    
    
    const legalData = await client.fetch(`
    *[
        _type == "legalPages"
            && page == "terms-of-use"
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