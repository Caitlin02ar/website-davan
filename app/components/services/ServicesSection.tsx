"use client";

import ServicesCard from "./ServicesCard";
import ServicesSlogan from "./ServicesSlogan";

export default function ServicesSection(){
    return(
        <section>
            <div>
                <div className="p-24">
                    <ServicesCard/>
                </div>
                <ServicesSlogan/>
            </div>
        </section>
    )
}