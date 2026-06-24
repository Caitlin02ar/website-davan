"use client";
import Tag from "../common/Tag";
import MethodItems from "./MethodItems";

export default function FourMethod(){
    return(
        <section className="p-32">
            <div className="flex flex-col items-start">
                <Tag text="the four-stage method"/>
                <h1 className="font-heading text-5xl">How Every</h1>
                <h1 className="font-heading text-5xl text-primary">Engagement Runs</h1>
            </div>
            <MethodItems/>
        </section>
    )
}