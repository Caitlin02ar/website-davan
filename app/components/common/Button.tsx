"use client";

import { ChevronDown } from "lucide-react";

interface ButtonProps {
  children?: React.ReactNode;
  theme?: "light" | "dark";
  className?: string;
  icon?: boolean;
  iconOnly?: boolean;
  isOpen?: boolean;
}

export default function Button({
  children,
  theme = "light",
  className = "",
  icon = false,
  iconOnly = false,
  isOpen = false,
}: ButtonProps) {
  const isLight = theme === "light";

  // ICON ONLY BUTTON
  if (iconOnly) {
    return (
      <button
        className={`
          group relative flex items-center justify-center
          p-4 rounded-lg border
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

  // TEXT BUTTON (with optional icon)
  return (
    <button
      className={`
        group relative flex items-center justify-center gap-2
        px-8 py-3 rounded-full border
        transition-all duration-300
        ${
          isLight
            ? "border-primary text-primary hover:bg-primary hover:text-[#0F0F11]"
            : "border-[#0F0F11] text-[#0F0F11] hover:bg-[#0F0F11] hover:text-primary"
        }
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