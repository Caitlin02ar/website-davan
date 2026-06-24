"use client";

import { useState } from "react";
import Button from "../common/Button";

export default function Dropdown() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const FAQItems = [
    {
      question: "Do we have to take all four pillars?",
      answer:
        "No. Many of our clients start with one pillar, most often branding or website, and add the others as their growth needs evolve. The advantage of working with DAVAN is that each pillar is designed to connect to the next when you're ready.",
    },
    {
      question: "What if we already have a brand we love?",
      answer:
        "Then we leave it alone. We'll work within your existing brand system and focus on the pillars that need building, whether that's your website, your automation, or your production.",
    },
    {
      question: "Do you work with businesses outside Perth?",
      answer:
        "Yes. We're based in Perth but work with clients across Australia and internationally. Most of the work is delivered remotely, with on-site sessions for strategy or production where it adds value.",
    },
    {
      question: "How long until we see results?",
      answer:
        "It depends on the pillar. Branding and website projects typically run 6 to 12 weeks. AI and automation systems show measureable impact within the first 30 to 90 days of going live. We set clear milestones at the start so you always know what to expect.",
    },
    {
      question: "How do we get started?",
      answer:
        "Send us a message through the contact page. If we're the right fit, we'll book a 30-minute call to map your growth gaps and recommend where to start.",
    },
  ];

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-16">
      <div className="max-w-2xl mx-auto space-y-4">
        {FAQItems.map((item, index) => (
          <div
            key={index}
            className="border border-white/20 rounded-2xl overflow-hidden bg-black/40 backdrop-blur-sm hover:border-white/40 transition-colors duration-300"
          >
            {/* Question Header */}
            <button
              onClick={() => toggleDropdown(index)}
              className="w-full px-8 py-6 flex items-center justify-between gap-4 text-left hover:bg-white/5 transition-colors duration-200"
            >
              <h3 className="font-body font-bold text-lg text-white">{item.question}</h3>

              <div className="flex-shrink-0">
                <Button
                  icon={true}
                  iconOnly={true}
                  theme="light"
                  isOpen={openIndex === index}
                />
              </div>
            </button>

            {/* Answer */}
            {openIndex === index && (
              <div className="px-8 pb-6 border-t border-white/10 pt-6">
                <p className="text-white/80 font-body text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}