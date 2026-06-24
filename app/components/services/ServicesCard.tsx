"use client";

import Tag from "../common/Tag";
import BubbleTag from "../common/BubbleTag";

export default function ServicesCard() {
  const CardItems = [
    {
      subtitle: "Pillar 1",
      title: "Branding",
      description:
        "We design brand systems that connect visibility to profitability. Our process ensures your identity is built to outlive the creator, driven by creativity and created to last.",
      tag: [
        "Visual Identity",
        "Messaging Framework",
        "Brand Strategy & Positioning",
        "Brand Guidelines",
      ],
    },
    {
      subtitle: "Pillar 2",
      title: "Website Development",
      description:
        "We build digital experiences that do more than impress. Our websites help business establish a stronger presence, capture leads, and position themselves for sustainable growth.",
      tag: [
        "UI & UX Design",
        "Custom Development",
        "SEO & AI Search Readiness",
        "Integrated Lead Capture & Analytics",
      ],
    },
    {
      subtitle: "Pillar 3",
      title: "AI & Automation Systems",
      description:
        "Intelligent foundations for scalable growth. The systems that turn your website and marketing into a connected, always-on growth engine.",
      tag: [
        "Creative Systems",
        "Revenue Intelligence",
        "Funnel & CRM Automation",
        "AI Conversation System",
        "AI Search Visibility (GEO)",
      ],
    },
    {
      subtitle: "Pillar 4",
      title: "Shoot by Code",
      description:
        "Cinematic speed. Intelligent impact. High-end AI-powered production that outpaces traditional workflows and delivers cinematic-quality content at a fraction of the cost and time.",
      tag: [
        "Digital Series",
        "Commercial Video",
        "IP and Mascot Development",
        "Conceptual Video",
      ],
    },
  ];

  return (
    <main className="w-full">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {CardItems.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-[32px] min-h-[500px] p-8"
          >
            <img
              src="/photos/card-bg.webp"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 flex h-full flex-col">
              <h5 className="flex flex-col items-start uppercase font-light tracking-wide font-body">{item.subtitle}</h5>

              <h2 className="mt-6 text-4xl font-heading text-primary">
                {item.title}
              </h2>

              <p className="mt-4 text-white/80 leading-relaxed">
                {item.description}
              </p>

              <div className="mt-auto flex flex-wrap gap-3 pt-8">
                {item.tag.map((tag, tagIndex) => (
                    <BubbleTag key={tagIndex} text={tag}/>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}