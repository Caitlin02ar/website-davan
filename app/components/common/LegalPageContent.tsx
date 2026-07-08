// LegalPageContent.tsx

"use client";

import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

interface Block {
  _type: "paragraph" | "subtitle" | "bulletList";
  text?: string;
  items?: string[];
  linkLabel?: string;
  linkHref?: string;
}

interface Section {
  title?: string;
  blocks?: Block[];
}

interface LegalPageContentProps {
  data: {
    title?: string;
    companyName?: string;
    lastUpdate?: string;
    contentLegalPage?: Section[];
  };
}

function slugify(text: string, index: number) {
  const base = text
    ? text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
    : "";
  return base ? `${base}` : `section-${index}`;
}

function renderLine(line: string, block: Block) {
  const { linkLabel, linkHref } = block;

  if (!linkHref || !linkLabel || !line.includes("{link}")) {
    return line;
  }

  const parts = line.split("{link}");

  return parts.map((part, index) => (
    <Fragment key={index}>
      {part}
      {index < parts.length - 1 && (
        <Link
          href={linkHref}
          className="text-primary underline underline-offset-4 transition-colors duration-300 hover:text-white"
        >
          {linkLabel}
        </Link>
      )}
    </Fragment>
  ));
}

function renderParagraphText(block: Block) {
  const { text } = block;

  if (!text) return null;

  const lines = text.split("\n");

  return lines.map((line, index) => (
    <Fragment key={index}>
      {renderLine(line, block)}
      {index < lines.length - 1 && <br />}
    </Fragment>
  ));
}

export default function LegalPageContent({
  data,
}: LegalPageContentProps) {

  const sections = data.contentLegalPage ?? [];

  const sectionIds = sections.map((section, index) =>
    slugify(section.title ?? "", index)
  );

  const [activeId, setActiveId] = useState<string>("");
  const [tocOpen, setTocOpen] = useState(false);

  // Highlight the section currently in view.
  useEffect(() => {
    if (sectionIds.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  const handleTocClick = (id: string) => {
    setActiveId(id);
    setTocOpen(false);
  };
  console.log(JSON.stringify(data.contentLegalPage, null, 2));

  return (
    <section className="px-5 py-16 sm:px-6 lg:px-10 lg:py-20">

      <div className="mx-auto max-w-6xl">

        {/* HERO */}
        <div className="mt-16 text-center lg:mt-20">

          {data.companyName && (
            <p className="font-body mb-4 text-xs uppercase tracking-[0.2em] text-primary">
              {data.companyName}
            </p>
          )}

          {data.title && (
            <h1 className="font-heading text-4xl text-white lg:text-5xl">
              {data.title}
            </h1>
          )}

          {data.lastUpdate && (
            <p className="font-body mt-6 text-sm text-white/60">
              Last updated: {data.lastUpdate}
            </p>
          )}

        </div>

        {/* BODY: TOC + CONTENT */}
        <div className="mt-16 flex flex-col gap-10 lg:flex-row lg:gap-16">

          {/* TOC */}
          <aside className="lg:w-64 lg:flex-shrink-0">

            <div className="lg:sticky lg:top-28">

              {/* Mobile toggle */}
              <button
                type="button"
                onClick={() => setTocOpen((prev) => !prev)}
                className="
                  font-body
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-lg
                  border
                  border-white/10
                  px-4
                  py-3
                  text-sm
                  text-white

                  lg:hidden
                "
              >
                On this page
                <span
                  className={`transition-transform duration-300 ${
                    tocOpen ? "rotate-180" : ""
                  }`}
                >
                  &#9662;
                </span>
              </button>

              <nav
                className={`
                  mt-3
                  flex-col
                  gap-1

                  lg:mt-0
                  lg:flex

                  ${tocOpen ? "flex" : "hidden"}
                `}
              >

                <p className="font-body mb-3 hidden text-xs uppercase tracking-[0.2em] text-white/40 lg:block">
                  On this page
                </p>

                {sections.map((section, index) => {
                  const id = sectionIds[index];
                  const isActive = activeId === id;

                  return (
                    <a
                      key={id}
                      href={`#${id}`}
                      onClick={() => handleTocClick(id)}
                      className={`
                        font-body
                        border-l-2
                        py-2
                        pl-4
                        text-sm
                        transition-colors
                        duration-300

                        ${
                          isActive
                            ? "border-primary text-primary"
                            : "border-white/10 text-white/60 hover:border-white/30 hover:text-white"
                        }
                      `}
                    >
                      {section.title}
                    </a>
                  );
                })}

              </nav>

            </div>

          </aside>

          {/* CONTENT */}
          <div className="min-w-0 flex-1">

            {sections.map((section, sectionIndex) => {
              const id = sectionIds[sectionIndex];

              return (
                <section
                  key={id}
                  id={id}
                  className="scroll-mt-28 border-b border-white/10 py-10 first:pt-0 last:border-none last:pb-0"
                >

                  {section.title && (
                    <h2 className="font-subheading mb-6 text-xl text-primary lg:text-2xl">
                      {section.title}
                    </h2>
                  )}

                  <div className="space-y-5">

                    {section.blocks?.map((block, blockIndex) => {

                      // PARAGRAPH
                      if (block._type === "paragraph") {
                        return (
                          <p
                            key={blockIndex}
                            className="font-body text-[15px] leading-8 text-white/80 lg:text-base"
                          >
                            {renderParagraphText(block)}
                          </p>
                        );
                      }

                      // SUBTITLE
                      if (block._type === "subtitle") {
                        return (
                          <h3
                            key={blockIndex}
                            className="font-body pt-2 text-base font-semibold text-white lg:text-lg"
                          >
                            {block.text}
                          </h3>
                        );
                      }

                      // BULLET LIST
                      if (block._type === "bulletList") {
                        return (
                          <ul
                            key={blockIndex}
                            className="ml-6 list-disc space-y-2 marker:text-primary"
                          >
                            {block.items?.map((item, itemIndex) => (
                              <li
                                key={itemIndex}
                                className="font-body text-[15px] leading-8 text-white/80 lg:text-base"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        );
                      }

                      return null;
                    })}

                  </div>

                </section>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}