import FlipCard from "./FlipCard";

type ProblemCard = {
  heading: string;
  headingHighlightText: string;
  description: string;
  icon: string;
  title: string;
};

export default function ProblemCardSection({
  cards,
}: {
  cards: ProblemCard[];
}) {
  return (
    <div className="w-full px-5 md:px-16 lg:px-24 xl:px-32">
      <FlipCard cards={cards} />
    </div>
  );
}