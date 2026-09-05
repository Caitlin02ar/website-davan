export default function CardWithNumber(){
    const cardData = {
        card:[
            {
                number:"01",
                title:"You set the volume",
                description:"One project at a time, or a steady monthly cadence. No minimum retainer, no exclusivity, and no packages to buy into.",
            },
            {
                number:"02",
                title:"A project manager who owns your timeline",
                description:"A dedicated production team, coordinated by one person who is accountable to your deadline rather than to ours.",
            },
            {
                number:"03",
                title:"Scope in writing before you price the client",
                description:"Scope, timeline, and effort come back in a form you can present. No bloat and no agency speak, just a working plan.",
            },
            {
                number:"04",
                title:"Broader capability than a web shop",
                description:"Brand, UX, development, AI, automation, and video under one roof. One partner for whatever the next brief asks for.",
            },
            {
                number:"05",
                title:"Perth based, on your time zone",
                description:"Direction, account management, and quality control sit here, with delivery experience across Asia, Europe, and North America.",
            },
            {
                number:"06",
                title:"Output that passes as your own",
                description:"We have delivered for global and regional brands for years. The work should be indistinguishable from your studio's.",
            },
        ]
    }

    return(
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cardData.card.map((item) => (
                <div
                    key={item.number}
                    className="relative flex h-56 flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-[#0F0F11] to-[#52585C] p-6"
                >
                    <h3 className="font-heading text-md leading-snug text-primary">
                        {item.title}
                    </h3>

                    <p className="mt-3 max-w-[85%] text-sm leading-relaxed text-white">
                        {item.description}
                    </p>

                    <span className="pointer-events-none absolute bottom-2 right-4 font-heading text-6xl font-extrabold leading-none text-white/10">
                        {item.number}
                    </span>
                </div>
            ))}
        </div>
    )
}