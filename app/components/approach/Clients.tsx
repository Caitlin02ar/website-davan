"use client";
import RunningLogo from "../home/RunningLogo";
import RunningPicture from "../home/RunningPicture";

export default function Clients(){
    return(
        <section>
            <div className="flex flex-col items-center justify-center p-16">
                <h1 className="font-heading text-white text-3xl">Brands we've worked with</h1>
            </div>
            <RunningLogo/>
            <RunningPicture/>
        </section>
    )
}