"use client";

import RunningLogo from "../home/RunningLogo";
import RunningPicture from "../home/RunningPicture";

export default function Clients({
    data,
}:{
    data:any;
}){

    if(!data) return null;

    return(
        <section id="our-clients">
            <div
                className="
                    flex
                    flex-col
                    items-center
                    justify-center
                    p-16">

                <h2
                    className="
                        font-heading
                        text-white
                        text-3xl
                        text-center
                    "
                >
                    {data.title}
                </h2>

                {data.description && (

                    <p
                        className="
                            font-body
                            mt-4
                            text-center
                            text-white/70
                            max-w-2xl
                        "
                    >
                        {data.description}
                    </p>

                )}

            </div>

            {/* LOGOS */}
            <RunningLogo
                logos={data.logos}
            />

            {/* PICTURES */}
            <RunningPicture
                items={data.picture}
            />

        </section>
    )
}