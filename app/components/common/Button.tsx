"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface ButtonProps {
  children?: React.ReactNode;

  theme?: "light" | "dark";

  className?: string;

  icon?: boolean;

  iconOnly?: boolean;

  isOpen?: boolean;

  onClick?: () => void;

  href?: string;

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
  href,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const isLight = theme === "light";

  const buttonClass = `
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
  `;

  // Jika ada href, gunakan Link
  if (href) {
    return (
      <Link href={href} className={buttonClass}>
        {children}

        {icon && (
          <ChevronDown
            size={18}
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        )}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      suppressHydrationWarning
      className={buttonClass}
    >
      {children}

      {icon && (
        <ChevronDown
          size={18}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      )}
    </button>
  );
}