export default function PricingItems() {
  const detailPricingItem = {
    data: [
      {
        index: "1",
        title: "One wholesale rate card, priced per project",
        description:
          "No licence fees, no tiers, and no membership to maintain. The same card applies whether it is your first project or your tenth.",
      },
      {
        index: "2",
        title: "You set your own margin",
        description:
          "We do not see what you charge your client and we never price against it. What you make on top is your business.",
      },
      {
        index: "3",
        title: "Care plans attach at handover",
        description:
          "Every site you deliver can carry a monthly line, so the work keeps earning after launch rather than ending at go live.",
      },
      {
        index: "4",
        title: "Clear commercial terms before anything starts",
        description:
          "Scope, price, payment schedule, and ownership agreed in writing up front. Nothing is renegotiated halfway through a build, and nothing appears on an invoice you have not already seen.",
      },
    ],
  };

  return (
    <section className="w-full">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 md:grid-cols-4 md:gap-4">
        {detailPricingItem.data.map((item, index) => (
          <div
            key={item.index}
            className={`
                flex flex-col justify-start
                ${index !== 0 ? "md:border-l md:border-primary md:pl-8" : ""}
                ${index !== 0 ? "border-t border-primary md:border-t-0" : ""}
            `}
            >
            <h3 className="font-heading text-sm leading-relaxed tracking-wide text-white md:text-sm">
                {item.title}
            </h3>

            <p className="mt-4 text-xs font-normal leading-relaxed text-white md:text-xs">
                {item.description}
            </p>
            </div>
        ))}
      </div>
    </section>
  );
}