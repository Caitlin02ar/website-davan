"use client";
import Button from "../common/Button";

interface CardProps {
  tag: string;
  heading: string;
  button: string;
  active: boolean;
}

export default function Card({
  tag,
  heading,
  button,
}: CardProps) {
  return (
    <div
      className="
        w-[360px]
        h-[450px]
        rounded-[28px]
        bg-primary
        px-12
        py-14
        flex
        flex-col
        text-black
      "
    >
      <span
        className="
          uppercase
          tracking-wide
          text-[13px]
        "
      >
        {tag}
      </span>

      <h2
        className="
          mt-14
          max-w-[280px]
          text-3xl
          font-body
          tracking-[-0.04em]
          font-medium
        "
      >
        {heading}
      </h2>

      <Button className="text-sm mt-auto w-fit" theme="dark">
        {button}
      </Button>
    </div>
  );
}