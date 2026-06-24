"use client";

import Button from "../common/Button";

export default function FormCard() {
  const options = [
    "Outdated website",
    "No lead system",
    "Disconnected tools",
    "Unsure where AI fits",
    "Others.",
  ];

  return (
    <section className="px-24 py-32">
      <div className="max-w-[1400px] mx-auto rounded-[32px] bg-[#050505] p-6">
        <div className="grid grid-cols-[1.05fr_0.95fr] gap-8">
          {/* LEFT */}
          <div className="relative h-[620px] overflow-hidden rounded-[24px]">
            <img
              src="/photos/how-3.webp"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="absolute bottom-10 left-10 max-w-md">
              <h2 className="font-heading text-2xl leading-none text-primary">
                Connecting the gaps
              </h2>

              <h2 className="font-heading text-2xl leading-none text-white mb-6">
                in your growth
              </h2>

              <p className="font-body text-white text-sm leading-relaxed">
                We exist to remove friction and replace it with flow.
                Tell us where your growth is breaking, and we'll
                show you how to close the gap.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col justify-center">
            <h1 className="font-heading text-4xl leading-none text-white mb-12 max-w-sm">
              Send us a message
            </h1>

            <form className="space-y-6">
              {/* Row 1 */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm mb-2">
                    Name
                  </label>

                  <input
                    type="text"
                    className="
                      w-full
                      h-14
                      rounded-lg
                      bg-[#A0A0A0]
                      px-4
                      text-black
                      outline-none
                    "
                  />
                </div>

                <div>
                  <label className="block text-white text-sm mb-2">
                    Business Name
                  </label>

                  <input
                    type="text"
                    className="
                      w-full
                      h-14
                      rounded-lg
                      bg-[#A0A0A0]
                      px-4
                      text-black
                      outline-none
                    "
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-white text-sm mb-2">
                  Email
                </label>

                <input
                  type="email"
                  className="
                    w-full
                    h-14
                    rounded-lg
                    bg-[#A0A0A0]
                    px-4
                    text-black
                    outline-none
                  "
                />
              </div>

              {/* Question */}
              <div>
                <label className="block text-white text-sm mb-4">
                  What's the biggest gap in your growth right now?
                </label>

                <div className="grid grid-cols-[1fr_220px] gap-4">
                  <textarea
                    rows={4}
                    className="
                      rounded-lg
                      bg-[#A0A0A0]
                      px-4
                      py-3
                      text-black
                      resize-none
                      outline-none
                    "
                  />

                  <div className="flex flex-col gap-3 justify-center">
                    {options.map((option) => (
                      <label
                        key={option}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="gap"
                          className="accent-white"
                        />

                        <span className="text-sm text-white">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Button>
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}