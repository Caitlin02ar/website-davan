"use client";
import Tag from "../common/Tag";
import FourPillarCard from "./FourPillarCard";

export default function FourPillars(){
    return(
        <section className="relative min-h-screen mt-16">
            <Tag text="The Four Pillar"/>
            <div className="flex flex-col items-center justify-center">
                <h3 className="font-heading text-primary text-3xl">Four Pillars.</h3>
                <h3 className="font-heading text-3xl">Connected end-to-end.</h3>
            </div>
            
            <div className="relative">
                <FourPillarCard/>
            </div>
        </section>
    )
}