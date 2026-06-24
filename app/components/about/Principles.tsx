"use client";
import Tag from "../common/Tag";
import PrinciplesItems from "./PrinciplesItems";

export default function Principles(){
    return(
        <section className="px-32 py-34 flex ">
            <div className="flex flex-col items-start">
                <Tag text="our principles"/>
                <h1 className="font-heading max-w-sm">
                    <span className="text-4xl text-primary">The four </span>
                    <span className="text-4xl">anchors</span>
                </h1>
            </div>
            <div>
                <PrinciplesItems/>
            </div>

        </section>
    )
}