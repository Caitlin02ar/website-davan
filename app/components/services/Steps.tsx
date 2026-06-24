export default function Steps() {
  const StepsItems = [
    {
      title: "Perception",
      description: "Building the brand identity.",
      tall: false,
    },
    {
      title: "Attraction",
      description: "Driving performance marketing.",
      tall: true,
    },
    {
      title: "Conversion",
      description: "Implementing sales systems.",
      tall: true,
    },
    {
      title: "Revenue",
      description: "Scaling intelligent growth.",
      tall: false,
    },
  ];

  return (
    <section id="four-stage" className="px-16 py-24">
      {/* Heading */}
      <div className="flex flex-col items-center text-center">
        <h1 className="font-heading text-2xl text-white">
          How we work:
        </h1>

        <h1 className="font-heading text-2xl text-primary">
          The four-stage method
        </h1>
      </div>

      {/* Timeline */}
      <div className="relative mt-24">
        {/* Horizontal Line */}
        <div
          className="
            absolute
            left-0
            right-0
            top-[132px]
            h-[1px]
            bg-gradient-to-r
            from-transparent
            via-white/80
            to-transparent
          "
        />

        <div className="grid grid-cols-4 relative z-10">
          {StepsItems.map((item, index) => (
            <div
              key={index}
              className={`
                relative
                flex flex-col items-center text-center
                ${item.tall ? "-mt-8" : ""}
              `}
            >
              {/* Title */}
              <h3 className="font-heading text-lg text-white">
                {item.title}
              </h3>

              {/* Line */}
              <div
                className={`
                  mt-4
                  w-[1px]
                  bg-white
                  ${item.tall ? "h-32" : "h-24"}
                `}
              />

              {/* Dot - absolute positioning */}
              <div
                className={`
                  absolute
                  left-1/2
                  -translate-x-1/2
                  w-2.5
                  h-2.5
                  rounded-full
                  bg-primary
                  shadow-[0_0_10px_#D7FF00]
                  -translate-y-1/2
                  ${item.tall ? "top-[164px]" : "top-[132px]"}
                `}
              />

              {/* Description */}
              <p className="mt-8 max-w-[180px] text-sm text-white font-body leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}