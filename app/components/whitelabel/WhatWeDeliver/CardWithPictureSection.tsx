import CardWithPicture from "./CardWithPicture";
import TitleLineModel from "./TitleLineModel";

type CardWithPictureSectionProps = {
    data: {
        title: string;
        subtitle: string;
        cardItems: {
            title: string;
            titleHighlightText: string[];
            subtitle: string;
            description: string[];
            image: {
                asset: {
                    _ref: string;
                    _type: "reference";
                };
                alt?: string;
            };
        }[];
    };
};

export default function CardWithPictureSection({
    data,
}: CardWithPictureSectionProps) {
    return (
        <div>
            <TitleLineModel
                label={data.title}
                rightText={data.subtitle}
            />

            <CardWithPicture cards={data.cardItems} />
        </div>
    );
}