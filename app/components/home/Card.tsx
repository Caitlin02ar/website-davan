"use client";

interface CardProps {
  tag: string;
  heading: string;
  button: string;
}

export default function Card({
  tag,
  heading,
  button,
}: CardProps) {
  return (
    <div
      className="
        w-[340px]
        h-[520px]
        bg-primary
        rounded-[24px]
        px-12
        py-14
        flex
        flex-col
      "
    >
      <span className="uppercase text-xs tracking-widest">
        {tag}
      </span>

      <h3
        className="
          mt-12
          text-black
          font-heading
          text-[52px]
          leading-[0.95]
        "
      >
        {heading}
      </h3>

      <button
        className="
          mt-auto
          w-fit
          px-8
          py-3
          rounded-full
          border
          border-black
          text-black
        "
      >
        {button}
      </button>
    </div>
  );
}