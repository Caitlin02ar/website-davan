"use client";

import Tag from "../common/Tag";
import HowItems from "./HowItems";
export default function HowWeWork(){
    return(
        <section className="px-32">
            <div className="flex flex-col items-start">
                <Tag text="how we work with you"/>
                <h1 className="font-heading text-3xl max-w-md">
                    <span className="text-white">What it's like to be a </span>
                    <span className="text-primary">DAVAN client</span>
                </h1>
            </div>
            <div>
                <HowItems/>
            </div>
        </section>
    )
}