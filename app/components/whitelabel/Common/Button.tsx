import { ArrowUpRight } from "lucide-react";

type WhiteLabelButtonProps = {
  children: React.ReactNode;
  variant?: "outline" | "primary";
  animated?: boolean;
  href?: string;
};

export default function WhiteLabelButton({
  children,
  variant = "primary",
  animated = true,
  href = "#",
}: WhiteLabelButtonProps) {
  const isPrimary = variant === "primary";

  if (!animated) {
    return (
      <a
        href={href}
        className={`
          inline-flex items-center justify-center whitespace-nowrap
          rounded-full px-4 py-2 font-bold text-body
          ${
            isPrimary
              ? "bg-primary text-black"
              : "border-2 border-primary bg-transparent text-white"
          }
        `}
      >
        <span>{children}</span>
        <ArrowUpRight
          className={`h-5 w-5 ${isPrimary ? "text-black" : "text-primary"}`}
        />
      </a>
    );
  }

  return (
    <a
      href={href}
      className={`
        group relative inline-flex items-center justify-center
        overflow-hidden rounded-full
        border-2 border-primary
        px-6 py-2
        font-bold text-body
        transition-colors duration-500
        ${isPrimary ? "bg-primary text-black" : "bg-transparent text-white"}
      `}
    >
      <span
        className={`
          absolute bottom-0 left-1/2
          h-5 w-5
          -translate-x-1/2 translate-y-1/2
          scale-0
          rounded-full
          transition-transform duration-500
          ease-[cubic-bezier(0.76,0,0.24,1)]
          group-hover:scale-[20]
          ${isPrimary ? "bg-dark" : "bg-primary"}
        `}
      />

      <span
        className={`
          relative z-10
          transition-colors duration-500
          ${
            isPrimary
              ? "text-black group-hover:text-white"
              : "text-white group-hover:text-black"
          }
        `}
      >
        {children}
      </span>

      <ArrowUpRight
        className={`
          relative z-10 ml-5 h-5 w-5
          transition-colors duration-500
          ${
            isPrimary
              ? "text-black group-hover:text-white"
              : "text-primary group-hover:text-black"
          }
        `}
      />
    </a>
  );
}