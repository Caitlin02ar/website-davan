import Image from "next/image";


export default function GlassCard(){
    const opportunity = {
        glassCardData: [
            {
                index:"1",
                icon:"/assets/whitelabel/bandwidth.svg",
                title:"Bandwidth",
                description:"Wireframes, a CMS build, integrations, QA, and a deployment. That is weeks of production your team has not got spare, sitting on top of the work you actually pitched."
            },
            {
                index:"2",
                icon:"/assets/whitelabel/goal.svg",
                title:"Focus",
                description:"Your team stays in the high value lane and your clients still get specialist execution underneath the brang work, without you managing three vendors to get it."
            },
            {
                index:"3",
                icon:"/assets/whitelabel/scale.svg",
                title:"Scale",
                description:"Convert more inbound briefs into delivered projects. Every website brief becomes margin instead of a bottleneck you have to talk the client out of."
            },
        ],
        outsideCard:"Our capability across web, brand, AI, automation, and video opens revenue lines you can offer clients without adding the headcount to deliver them.",
    }

    return(
        <div>
            <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
                    {opportunity.glassCardData.map((card) => (
                        <div
                        key={card.index}
                        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg rounded-[32px] overflow-hidden flex flex-col p-8 gap-4">
                            <Image
                            src={card.icon}
                            alt=""
                            width={32}
                            height={32}
                            />

                            <span className="font-heading text-primary text-2xl mt-4">{card.title}</span>
                            <p className="text-sm font-body">{card.description}</p>
                        </div>
                    ))}
                </div>
                <div className="p-4 border border-primary/20 bg-primary/10 shadow-primary/10 backdrop-blur-md md:rounded-full rounded-2xl">
                    <p className="text-xs text-center">{opportunity.outsideCard}</p>
                </div>
            </div>
        </div>
    )
}