import GlassCard from "./GlassCard";

type GlassCardSectionProps = {
    cards: {
        title: string;
        description: string;
        icon: string;
    }[];
    externalCard: string;
};

export default function GlassCardSection({
    cards,
    externalCard,
}: GlassCardSectionProps) {
    return (
        <section>
            <div>
                <GlassCard
                    cards={cards}
                    externalCard={externalCard}
                />
            </div>
        </section>
    );
}