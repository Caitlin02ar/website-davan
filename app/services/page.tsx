"use client";

import HeroServices from "../components/services/HeroServices";
import ServicesSection from "../components/services/ServicesSection";
import Steps from "../components/services/Steps";
import FAQ from "../components/services/FAQ";


export default function Services(){
    return(
        <main>
            <HeroServices/>
            <ServicesSection/>
            <Steps/>
            <FAQ/>
        </main>
    )
}