"use client";

export default function AboutSlogan(){
    return(
        <section>
            <div className="relative w-full">
                <img
                    src="/photos/slogan-bg.webp"
                    alt=""
                    className="w-full h-auto"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <h1 className="font-heading text-5xl">
                        <span className="text-white">What we </span>
                        <span className="text-primary">exist to do.</span>
                    </h1>
                    

                    <p className="font-body text-white max-w-3xl mt-4 text-sm">
                        To empower companies with exactly what they need to thrive in a landscape that never stops changing. That means practical, integrated growth systems that works today and keep working tomorrow, not isolated deliverabls that look good in a folder
                    </p>
                </div>
                </div>
        </section>
    )
}