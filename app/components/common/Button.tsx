"use client";

import { ChevronDown } from "lucide-react";

interface ButtonProps {
  children?: React.ReactNode;

  theme?: "light" | "dark";

  className?: string;

  icon?: boolean;

  iconOnly?: boolean;

  isOpen?: boolean;

  onClick?: () => void;

  type?: "button" | "submit" | "reset";

  disabled?: boolean;
}

export default function Button({
  children,

  theme = "light",

  className = "",

  icon = false,

  iconOnly = false,

  isOpen = false,

  onClick,

  type = "button",

  disabled = false,
}: ButtonProps) {
  const isLight = theme === "light";

  // ICON ONLY BUTTON
  if (iconOnly) {
    return (
      <button
        type={type}
        suppressHydrationWarning
        disabled={disabled}
        onClick={onClick}
        className={`
          group relative flex items-center justify-center
          rounded-lg border p-4
          transition-all duration-300

          ${
            isOpen
              ? isLight
                ? "border-primary bg-primary text-[#0F0F11]"
                : "border-[#0F0F11] bg-[#0F0F11] text-primary"
              : isLight
              ? "border-primary text-primary hover:bg-primary hover:text-[#0F0F11]"
              : "border-[#0F0F11] text-[#0F0F11] hover:bg-[#0F0F11] hover:text-primary"
          }

          disabled:pointer-events-none
          disabled:opacity-50

          ${className}
        `}
      >
        {icon && (
          <ChevronDown
            size={18}
            className={`
              transition-transform duration-300
              ${isOpen ? "rotate-180" : "rotate-0"}
            `}
          />
        )}
      </button>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      suppressHydrationWarning
      className={`
        group relative flex items-center justify-center gap-2
        rounded-full border px-8 py-3
        transition-all duration-300

        ${
          isLight
            ? "border-primary text-primary hover:bg-primary hover:text-[#0F0F11]"
            : "border-[#0F0F11] text-[#0F0F11] hover:bg-[#0F0F11] hover:text-primary"
        }

        disabled:pointer-events-none
        disabled:opacity-50

        ${className}
      `}
    >
      {children}

      {icon && (
        <ChevronDown
          size={18}
          className={`
            transition-transform duration-300
            ${isOpen ? "rotate-180" : "rotate-0"}
          `}
        />
      )}
    </button>
  );
}