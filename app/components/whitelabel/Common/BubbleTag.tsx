type BubbleText = {
  text: string;
  highlight?: boolean;
};

type BubbleTagProps = {
  variant?: "tag" | "title";
  number?: string;
  items: BubbleText[];
};

export default function BubbleTag({
  variant = "tag",
  number,
  items,
}: BubbleTagProps) {
  const isTitle = variant === "title";

  return (
    <div className="inline-flex items-center">
      {isTitle && (
        <div
          className="
            relative z-10
            flex h-11 min-w-[58px] shrink-0
            items-center justify-center
            rounded-full
            bg-primary
            px-4
            font-heading
            text-base
            font-bold
            text-black
          "
        >
          {number}
        </div>
      )}

      <div
        className={`
          flex h-11 items-center
          ${
            isTitle
              ? "pl-6 pr-5"
              : "px-5"
          }
          rounded-full
          border border-white/30
          bg-white/10
          backdrop-blur-md
        `}
      >
        <span className="font-body text-sm">
          {items.map((item, index) => {
            const textColor = isTitle
              ? "text-primary"
              : item.highlight
                ? "text-primary"
                : "text-white";

            return (
              <span
                key={index}
                className={textColor}
              >
                {item.text}
              </span>
            );
          })}
        </span>
      </div>
    </div>
  );
}