type CardWithNumberItem = {
  numberCard: string;
  titleCard: string;
  descriptionCard: string;
};

type CardWithNumberProps = {
  cards: CardWithNumberItem[];
};

export default function CardWithNumber({
  cards,
}: CardWithNumberProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((item) => (
        <div
          key={item.numberCard}
          className="relative flex h-56 flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-[#0F0F11] to-[#52585C] p-6"
        >
          <h3 className="font-heading text-md leading-snug text-primary">
            {item.titleCard}
          </h3>

          <p className="mt-3 max-w-[90%] text-sm font-light leading-relaxed text-white">
            {item.descriptionCard}
          </p>

          <span className="pointer-events-none absolute bottom-2 right-4 font-heading text-6xl font-extrabold leading-none text-white/10">
            {item.numberCard}
          </span>
        </div>
      ))}
    </div>
  );
}