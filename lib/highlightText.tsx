// lib/highlightText.tsx

export function renderHighlightedText(
  text: string,
  highlight?: string
) {

  if (!highlight) return text;

  const regex = new RegExp(`(${highlight})`, "gi");

  return text
    .split(regex)
    .map((part, index) => {

      const isHighlighted =
        part.toLowerCase() ===
        highlight.toLowerCase();

      return isHighlighted ? (
        <span
          key={index}
          className="text-primary"
        >
          {part}
        </span>
      ) : (
        <span key={index}>
          {part}
        </span>
      );
    });
}

