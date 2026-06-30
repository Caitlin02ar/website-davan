"use client";

interface PrinciplesCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function PrincipleCard({
  icon,
  title,
  description,
}: PrinciplesCardProps) {
  return (
    <div className="flex items-start gap-5">
      {/* Icon */}
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary">
        <img
          src={icon}
          alt={title}
          className="h-5 w-5 object-contain"
        />
      </div>

      <div>
        <h3 className="font-subheading font-semibold text-lg leading-none text-primary">
          {title}
        </h3>

        <p className="mt-4 max-w-xs font-body text-white text-sm leading-relaxed font-light">
          {description}
        </p>
      </div>
    </div>
  );
}