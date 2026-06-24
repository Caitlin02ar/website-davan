"use client"
import RunningPicture from "./RunningPicture"
import RunningLogo from "./RunningLogo"

export default function Client(){
    return(
        <section className="mt-16 flex flex-col min-h-screen">
            <div className="top-content">
                <RunningPicture/>
            </div>
            <div className="flex flex-col items-center justify-center mt-16 gap-4">
                <h3 className="font-heading text-3xl text-primary max-w-2xl text-center">Trusted across technology, healthcare, and retail</h3>
                <p className="font-body text-m">A snapshot of the partners we've helped build, scale, and transform.</p>
            </div>
            <div className="bottom-content">
                <RunningLogo/>
            </div>
        </section>
    )
}