"use client";

interface HowCardProps {
  title: string;
  description: string;
  image: string;
  className?: string;
}

export default function HowCard({
  title,
  description,
  image,
  className = "",
}: HowCardProps) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-[28px]
        ${className}
      `}
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-8 left-8 z-10">
        <h3 className="font-heading text-white text-2xl leading-none mb-2">
          {title}
        </h3>

        <p className="max-w-sm font-body text-white leading-relaxed text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}