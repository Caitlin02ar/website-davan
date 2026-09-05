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
            flex h-[52px] w-[52px] shrink-0
            items-center justify-center
            rounded-full
            bg-primary
            font-heading
            text-xl
            font-bold
            text-black
          "
        >
          {number}
        </div>
      )}

      <div
        className={`
          ${
            isTitle
              ? "-ml-1 pl-6 pr-6"
              : "px-5"
          }
          rounded-full
          border border-white/30
          bg-white/10
          py-2.5
          backdrop-blur-md
        `}
      >
        <span className="font-medium">
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