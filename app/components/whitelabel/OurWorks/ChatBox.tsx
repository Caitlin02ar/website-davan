type ChatBoxProps = {
  title: string;
  subheading: string;
  subtitle: string;
  description: string;
};

export default function ChatBox({
  title,
  subheading,
  subtitle,
  description,
}: ChatBoxProps) {
  return (
    <div className="relative mx-5 mt-16 w-auto max-w-6xl rounded-[28px] bg-[#5b6064] px-6 py-8 md:mx-auto md:w-full md:rounded-[36px] md:px-12 md:py-12 lg:px-16 lg:py-14">


      <div
        className="
          absolute right-20 top-0
          h-0 w-0
          -translate-y-full
          border-l-[14px] border-r-[14px] border-b-[18px]
          border-l-transparent
          border-r-transparent
          border-b-[#5b6064]
        "
      />

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-0">

        <div className="flex flex-col gap-8 md:pr-10 lg:pr-16">
          <h2 className="max-w-xl font-heading text-2xl leading-snug tracking-wide text-white md:text-xl lg:text-xl">
            {title}
          </h2>

          <p className="max-w-xl font-body text-xs leading-relaxed text-white md:text-xs">
            {subheading}
          </p>
        </div>

        <div className="flex flex-col gap-6 border-white md:border-l md:pl-10 lg:pl-16">
          <h3 className="font-heading text-md text-white md:text-md">
            {subtitle}
          </h3>

          <p className="max-w-xl font-body text-xs leading-relaxed text-white md:text-xs">
            {description}
          </p>
        </div>

      </div>
    </div>
  );
}
