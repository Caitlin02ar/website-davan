"use client";

import Tag from "../common/Tag";
import MethodItems from "./MethodItems";
import { renderHighlightedText } from "@/lib/highlightText";

interface FourMethodProps {
  data: {
    tag: string;
    title: string;
    highlight: string;

    methodContent: {
      number: string;
      title: string;
      description: string;
    }[];
  };
}

export default function FourMethod({
  data,
}: FourMethodProps) {

  return (
    <section
      className="
        bg-background
        px-5
        py-20

        sm:px-8

        md:px-16
        md:py-24

        lg:px-28
      "
    >

      {/* TOP */}
      <div
        className="
          flex
          flex-col
          items-start
        "
      >

        <Tag text={data.tag} />

        <h1
          className="
            mt-4
            max-w-full
            font-heading
            text-2xl
            leading-tight
            text-white

            sm:max-w-2xl
            sm:text-3xl

            md:text-5xl
          "
        >
          {renderHighlightedText(
            data.title,
            data.highlight
          )}
        </h1>

      </div>

      {/* METHOD ITEMS */}
      <div className="mt-14 md:mt-24">
        <MethodItems
          items={data.methodContent}
        />
      </div>

    </section>
  );
}