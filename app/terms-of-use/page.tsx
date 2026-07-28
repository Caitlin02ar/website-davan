import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import LegalPageContent from "../components/common/LegalPageContent";
import { getPageMeta } from "@/lib/seo";

const FALLBACK_TITLE = "Terms of Use";
const FALLBACK_DESCRIPTION = "Read DAVAN Digital's terms of use to understand the rules and guidelines for using our website and services.";

export async function generateMetadata():Promise<Metadata>{
    return getPageMeta({
        page:"terms-of-use",
        path:"/terms-of-use",
        fallbackTitle: FALLBACK_TITLE,
        fallbackDescription: FALLBACK_DESCRIPTION,
    });
}

export const revalidate = 60;

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