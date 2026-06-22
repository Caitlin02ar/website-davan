
export default function HeroApproach(){
    return(
        <section className="relative min-h-screen">
            <img src="/photos/services-bg.webp" alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90"/>
            <div className="relative z-10 flex flex-col items-center justify-center text-center gap-6 min-h-screen">
                <h1 className="font-heading text-6xl">Our Approach</h1>
                <h4 className="font-body text-primary">Integrated thinking. Real results.</h4>
            </div>
        </section>
    )
}