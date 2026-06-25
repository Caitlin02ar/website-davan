"use client";

interface FourPillarCardProps {
  number: string;
  title: string;
  description: string;
  image: string;
}

export default function FourPillarCard({
  number,
  title,
  description,
  image,
}: FourPillarCardProps) {
  return (
    <div
      className="
        bg-[#0E0E0E]
        border border-white/10
        rounded-[28px]
        p-4
        transition-all
        duration-300
        hover:-translate-y-2
      "
    >
      {/* IMAGE */}
      <div className="overflow-hidden rounded-[22px]">
        <img
          src={image}
          alt={title}
          className="w-full h-[320px] object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="pt-6 px-2 pb-4">
        <span className="text-[11px] uppercase tracking-wider text-white/60">
          {number}
        </span>

        <h3
          className="
            mt-2
            text-[#D8FF2F]
            font-heading
            text-[36px]
            leading-[0.95]
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-4
            text-white/75
            text-sm
            leading-relaxed
            max-w-[220px]
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}