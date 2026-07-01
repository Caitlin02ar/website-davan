"use client";

import RunningPicture from "./RunningPicture";
import RunningLogo from "./RunningLogo";

export default function Client({
  data,
}: {
  data: any;
}) {

  if (!data) return null;

  return (
    <section className="mt-16 flex flex-col">

      <div className="top-content">

        <RunningPicture
          items={data.picture}
        />

      </div>

      <div
        className="
          flex
          flex-col
          items-center
          justify-center
          mt-16
          gap-4
        "
      >

        <h3
          className="
            font-heading
            md:text-3xl
            text-primary
            max-w-2xl
            text-center
            text-xl
          "
        >
          {data.title}
        </h3>

        {data.description && (

          <p className="font-body text-xs md:text-sm text-center max-w-xs md:max-w-5xl">
            {data.description}
          </p>

        )}

      </div>

      {/* LOGOS */}
      <div className="bottom-content">

        <RunningLogo
          logos={data.logos}
        />

      </div>

    </section>
  );
}