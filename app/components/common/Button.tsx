"use client";

export default function Button() {
  return (
    <button
      className="
        group relative overflow-hidden
        px-8 py-3
        rounded-full
        border border-primary
        text-primary
      "
    >
      <span
        className="
          absolute inset-0
          w-0
          bg-primary
          transition-all duration-500
          group-hover:w-full
        "
      />
      <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
        Start Your Transformation
      </span>
    </button>
  );
}