import Image from "next/image";

type GlassCardProps = {
    cards: {
        title: string;
        description: string;
        icon: string;
    }[];
    externalCard: string;
};

export default function GlassCard({
    cards,
    externalCard,
}: GlassCardProps) {
    return (
        <div>
            <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg rounded-[32px] overflow-hidden flex flex-col p-8 gap-4"
                        >
                            <Image
                                src={card.icon}
                                alt=""
                                width={32}
                                height={32}
                            />

                            <span className="font-heading text-primary text-2xl mt-4">
                                {card.title}
                            </span>

                            <p className="text-sm font-body">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="p-4 border border-primary/20 bg-primary/10 shadow-primary/10 backdrop-blur-md md:rounded-full rounded-2xl">
                    <p className="text-xs text-center">
                        {externalCard}
                    </p>
                </div>
            </div>
        </div>
    );
}