import PricingItems from "./PricingItems";

type PricingItem = {
  title: string;
  description: string;
};

type PricingItemsSectionProps = {
  items: PricingItem[];
};

export default function PricingItemsSection({
  items,
}: PricingItemsSectionProps) {
  return (
    <div>
      <PricingItems items={items} />
    </div>
  );
}