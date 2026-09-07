import CardWithIcon from "./CardWithIcon";
import TitleLineModel from "./TitleLineModel";

type AddOnsCardSectionProps = {
    data: {
        title: string;
        subtitle: string;
        cardItems: {
            heading: string;
            subheading: string;
            description: string[];
        }[];
    };
};

export default function AddOnsCardSection({
    data,
}: AddOnsCardSectionProps) {
    return (
        <div>
            <TitleLineModel
                label={data.title}
                rightText={data.subtitle}
            />

            <CardWithIcon cards={data.cardItems} />
        </div>
    );
}