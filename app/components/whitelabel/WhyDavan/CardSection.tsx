import CardWithNumber from "./CardWithNumber";

type CardSectionProps = {
  cards: {
    numberCard: string;
    titleCard: string;
    descriptionCard: string;
  }[];
};

export default function CardSection({
  cards,
}: CardSectionProps) {
  return (
    <div>
      <CardWithNumber cards={cards} />
    </div>
  );
}