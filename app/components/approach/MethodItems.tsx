"use client";

export default function MethodItems() {
  const MethodItems = [
    {
      number: "01",
      title: "Perception",
      description:
        "Building the brand identity. We define how your business should be seen, heard, and remembered. The foundation everything else builds on.",
    },
    {
      number: "02",
      title: "Attraction",
      description:
        "Driving performance marketing. We design the website, content, and visibility systems that pull qualified attention toward your brand.",
    },
    {
      number: "03",
      title: "Conversion",
      description:
        "Implementing sales systems. We connect your funnel, CRM, and follow-up automations so every lead that comes in is captured, nurtured, and moved toward a decision.",
    },
    {
      number: "04",
      title: "Revenue",
      description:
        "Scaling intelligent growth. We build the dashboards and AI systems that show what's working, what's not, and where to invest next, so growth becomes predictable, not lucky.",
    },
  ];

  return (
    <section className="w-full bg-background">
      {MethodItems.map((item, index) => (
        <div
          key={index}
          className="relative flex items-center justify-between px-24 py-20"
        >
          {/* Line Separator */}
          {index !== 0 && (
            <div
              className="
                absolute
                top-0
                left-0
                w-full
                h-px
                bg-gradient-to-r
                from-transparent
                via-white/40
                to-transparent
              "
            />
          )}

          {/* Number */}
          <div className="w-1/2">
            <h1
              className="
                text-[6rem]
                leading-none
                font-subheading
                text-primary
              "
            >
              {item.number}
            </h1>
          </div>

          {/* Content */}
          <div className="w-1/2 max-w-xl">
            <h2
              className="
                font-heading
                text-3xl
                
                text-white
                mb-3
              "
            >
              {item.title}
            </h2>

            <p
              className="
                font-body
                text-white
                text-sm
                leading-relaxed
                font-light
              "
            >
              {item.description}
            </p>
          </div>
        </div>
      ))}

      {/* Bottom Line */}
      <div
        className="
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-white/40
          to-transparent
        "
      />
    </section>
  );
}