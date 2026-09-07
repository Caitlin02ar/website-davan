type PricingItem = {
  title: string;
  description: string;
};

type PricingItemsProps = {
  items: PricingItem[];
};

export default function PricingItems({
  items,
}: PricingItemsProps) {
  return (
    <section className="w-full">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 md:grid-cols-4 md:gap-4">
        {items.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className={`
              flex flex-col justify-start gap-4
              ${index !== 0 ? "md:border-l md:border-primary md:pl-8" : ""}
              ${
                index !== 0
                  ? "border-t border-primary/30 pt-8 md:border-t-0 md:pt-2"
                  : ""
              }
            `}
          >
            <h3 className="font-heading text-md leading-snug tracking-wide tracking-tight text-white md:text-md">
              {item.title}
            </h3>

            <p className="mt-4 text-xs font-normal leading-relaxed text-white md:text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}