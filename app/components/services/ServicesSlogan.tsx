"use client";

export default function ServicesSlogan() {
  return (
    <div className="relative w-full">
      <img
        src="/photos/slogan-bg.webp"
        alt=""
        className="w-full h-auto"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-heading text-white text-5xl">
          One connected system.
        </h1>

        <h1 className="font-heading text-primary text-5xl">
          Four distinct disciplines.
        </h1>

        <p className="font-body text-white max-w-3xl mt-4">
          Each pillar work independently and more powerfully together. From
          brand identity through to revenue growth, every discipline is
          designed to close the gaps in your business.
        </p>
      </div>
    </div>
  );
}