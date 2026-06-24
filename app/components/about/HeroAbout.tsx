"use client";

export default function HeroAbout() {
  return (
    <section className="relative h-[180vh] overflow-hidden">
      <img
        src="/photos/aboutus-bg.webp"
        alt=""
        className="w-full h-auto object-cover object-[center_-600px]"
      />
    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90"/>
    <div
    className="
      absolute
      bottom-0
      left-0
      right-0
      h-[500px]
      bg-gradient-to-b
      from-transparent
      via-background/70
      to-background
    "
  />

      <div className="absolute inset-0">
        {/* Hero */}
        <div className="min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="font-heading text-5xl max-w-4xl">
            Integrated creative thinkers
          </h1>

          <p className="font-body text-sm text-white max-w-2xl mt-4">
            DAVAN Digital is a marketing agency and growth partner that unifies brand marketing, and sales into one seamless integration. By combining digital experience, AI marketing, CRM, and creative production, we help business attract, convert, and scale.
          </p>
        </div>

        {/* Section kedua */}
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="font-subheading text-center max-w-4xl text-3xl">
            We see the whole picture, build it completely,
            and leave something transformative behind.
          </h1>
        </div>
      </div>
    </section>
  );
}