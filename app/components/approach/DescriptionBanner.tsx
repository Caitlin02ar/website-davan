"use client";

export default function DescriptionBanner(){
    return(
        <section>
            <div className="relative w-full">
                <img src="/photos/approach-banner.webp" alt=""
                className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90"/>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <h1 className="font-heading text-white text-5xl">We make it work</h1>
                    <h1 className="font-heading text-primary text-5xl">differently.</h1>
                    <p className="font-body text-white max-w-xl mt-4 text-sm">We see the whole picture and build it completely. Brand, marketing, and sales connected by design, driven by creativity, and created to last.</p>
                </div>
            </div>
        </section>
    )
}