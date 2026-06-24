"use client";

interface PillarCardProps {
  number: string;
  title: string;
  description: string;
}

export default function PillarCard({
  number,
  title,
  description,
}: PillarCardProps) {
  return (
    <div
      className="
        w-[250px]
        h-[260px]
        rounded-[28px]
        border border-primary
        p-6
        flex flex-col
        justify-center
        bg-background
        transition-all duration-300
        hover:-translate-y-2
      "
    >
      <p className="text-sm uppercase tracking-wider text-white mb-2">
        {number}
      </p>

      <h3 className="font-heading text-primary text-xl leading-none mb-4">
        {title}
      </h3>

      <p className="font-body text-white text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}