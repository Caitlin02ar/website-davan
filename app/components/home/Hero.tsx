"use client";
import Button from "../common/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen">
      <img
        src="/photos/hero-bg.webp"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"/>

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center gap-6">
        <h1 className="font-heading text-5xl max-w-3xl text-white">
          The creative force
          the connects what others keep seperate. 
        </h1>
        <h6 className="font-body text-l max-w-3xl text-white">
            DAVAN Digital is the integrated marketing partner that unifies brand, marketing, and sales into a connected approach to growth, so the gaps where leads, time, and revenue dissapear finally close
        </h6>

        <div className="flex flex-col items-center">
          <Button theme="light">
            Start Your Transformation
          </Button>
        </div>
      </div>
    </section>
  );
}