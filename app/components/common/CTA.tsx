"use client";

import Button from "./Button";

export default function CTA() {
  return (
    <section className="h-[75vh]">
      <div className="relative h-full w-full">
        <img
          src="/photos/cta-bg.webp"
          alt="CTA Background"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/90" />

        <img
          src="/photos/cta-logo.webp"
          alt="CTA Logo"
          className="absolute left-1/2 top-1/2 z-10 w-[80%] max-w-5xl -translate-x-1/2 -translate-y-1/2"
        />

        <div className="absolute left-1/2 top-1/2 z-10 max-w-5xl -translate-x-1/2 -translate-y-1/2 flex flex-col text-center gap-18 mt-12">
          <div className="flex flex-col">
            <h3 className="font-body text-white">
                One partner.
            </h3>
            <h3 className="text-[2rem] text-primary font-heading">
                Connected end-to-end.
                </h3>
            <h3 className="font-body text-white">
                Real growth.
            </h3>
          </div>
          <div className="flex flex-col items-center">
            <Button theme="dark">
              Start Your Transformation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}