"use client";
import DescriptionContent from "./DescriptionContent";
import DescriptionBanner from "./DescriptionBanner";

export default function Description(){
    return(
        <section className="py-16">
            <DescriptionContent/>
            <DescriptionBanner/>
        </section>
    )
}