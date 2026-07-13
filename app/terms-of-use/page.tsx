import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import LegalPageContent from "../components/common/LegalPageContent";
import { pageOpenGraph } from "@/lib/seo";

const TITLE = "Terms of Use - DAVAN Digital";
const DESCRIPTION = "Read DAVAN Digital's terms of use to understand the rules and guidelines for using our website and services.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    ...pageOpenGraph({ title: TITLE, description: DESCRIPTION, path: "/terms-of-use" }),
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