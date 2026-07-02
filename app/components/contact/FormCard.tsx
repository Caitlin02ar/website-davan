"use client";

import { useState } from "react";

import Button from "../common/Button";
import SuccessModal from "./SuccessModal";

import { renderHighlightedText } from "@/lib/highlightText";

interface FormCardProps {
  data: {
    form: {
      title: string;
      heading: string;
      hightlightText: string;
      description: string;

      formFields: {
        fieldName: string;
        fieldType: string;
      }[];
    };

    fieldReasons: {
      reason: string;
    }[];

    formButtonText: string;
  };

  modalData: {
    message: string;

    icon: {
      asset: {
        url: string;
      };
    };
  };
}

export default function FormCard({
  data,
  modalData,
}: FormCardProps) {

  const {
    form,
    fieldReasons,
    formButtonText,
  } = data;

  // FORM STATE
  const [formData, setFormData] =
    useState<Record<string, string>>({});

  // MODAL
  const [openModal, setOpenModal] =
    useState(false);

  // LOADING
  const [isSending, setIsSending] =
    useState(false);

  // HANDLE INPUT
  const handleChange = (
    name: string,
    value: string
  ) => {

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

  };

  // HANDLE SUBMIT
  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    try {

      setIsSending(true);

      const response = await fetch(
        "/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(
            formData
          ),
        }
      );

      const result =
        await response.json();

      if (result.success) {

        // OPEN MODAL
        setOpenModal(true);

        // RESET FORM
        setFormData({});

      } else {

        alert(
          "Failed to send message."
        );

      }

    } catch (error) {

      console.error(error);

      alert(
        "Something went wrong."
      );

    } finally {

      setIsSending(false);

    }

  };

  return (
    <>
      <section className="px-4 py-12 md:px-6 md:py-16">

        {/* OUTER CARD */}
        <div
          className="
            mx-auto
            max-w-[1020px]
            rounded-[22px]
            border
            border-white/[0.04]
            bg-black/60
            p-4
            shadow-[0_20px_80px_rgba(0,0,0,0.45)]
            backdrop-blur-xl

            md:rounded-[28px]
          "
        >

          <div
            className="
              grid
              grid-cols-1
              gap-5

              md:grid-cols-[0.82fr_1fr]
            "
          >

            {/* LEFT IMAGE */}
            <div
              className="
                relative
                h-[200px]
                overflow-hidden
                rounded-[22px]

                md:h-full
              "
            >

              <img
                src="/photos/how-3.webp"
                alt=""
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  scale-[1.6]
                  object-cover

                  md:scale-[2.5]
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black
                  via-black/20
                  to-transparent
                "
              />

              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  right-5

                  md:bottom-8
                  md:left-8
                  md:right-auto
                  md:max-w-[350px]
                "
              >

                <h2
                  className="
                    font-heading
                    text-xl
                    text-white

                    md:text-2xl
                  "
                >
                  {renderHighlightedText(
                    form.heading,
                    form.hightlightText
                  )}
                </h2>

                <p
                  className="
                    mt-2
                    font-body
                    text-xs
                    leading-relaxed
                    text-white/80
                  "
                >
                  {form.description}
                </p>

              </div>

            </div>

            {/* RIGHT FORM */}
            <div
              className="
                flex
                flex-col
                justify-center
                px-1
                pt-2

                md:pt-0
              "
            >

              <h1
                className="
                  mb-6
                  font-heading
                  text-2xl
                  max-w-xs
                  leading-[0.9]
                  tracking-[-0.05em]
                  text-white

                  md:mb-8
                  md:text-3xl
                "
              >
                {form.title}
              </h1>

              <form
                className="space-y-4"
                onSubmit={handleSubmit}
              >

                {/* DYNAMIC FIELDS */}
                {form.formFields.map(
                  (field, index) => {

                    const fieldKey =
                      field.fieldName
                        .toLowerCase()
                        .replace(/\s+/g, "");

                    // TEXTAREA
                    if (
                      field.fieldType ===
                      "textarea"
                    ) {

                      return (
                        <div key={index}>

                          <label
                            className="
                              mb-3
                              block
                              text-[11px]
                              text-white/75
                            "
                          >
                            {field.fieldName}
                          </label>

                          <div
                            className="
                              grid
                              grid-cols-1
                              gap-3

                              md:grid-cols-[1fr_170px]
                            "
                          >

                            {/* TEXTAREA */}
                            <textarea
                              rows={4}
                              value={
                                formData[fieldKey] || ""
                              }
                              onChange={(e) =>
                                handleChange(
                                  fieldKey,
                                  e.target.value
                                )
                              }
                              className="
                                resize-none
                                rounded-[10px]
                                border
                                border-white/[0.05]
                                bg-white/[0.08]
                                px-4
                                py-3
                                text-[13px]
                                text-white
                                outline-none
                                transition-all
                                focus:border-primary
                              "
                            />

                            {/* OPTIONS */}
                            <div
                              className="
                                flex
                                flex-col
                                justify-center
                                gap-2.5
                              "
                            >

                              {fieldReasons.map(
                                (
                                  option,
                                  optionIndex
                                ) => (

                                  <label
                                    key={optionIndex}
                                    className="
                                      flex
                                      cursor-pointer
                                      items-center
                                      gap-2.5
                                    "
                                  >

                                    <input
                                      type="radio"
                                      name="gap"
                                      value={
                                        option.reason
                                      }
                                      onChange={(e) =>
                                        handleChange(
                                          "reason",
                                          e.target.value
                                        )
                                      }
                                      className="
                                        h-3.5
                                        w-3.5
                                        accent-primary
                                      "
                                    />

                                    <span
                                      className="
                                        text-[11px]
                                        text-white/75
                                      "
                                    >
                                      {option.reason}
                                    </span>

                                  </label>

                                )
                              )}

                            </div>

                          </div>

                        </div>
                      );

                    }

                    return (
                      <div key={index}>

                        <label
                          className="
                            mb-2
                            block
                            text-[11px]
                            text-white/75
                          "
                        >
                          {field.fieldName}
                        </label>

                        <input
                          type={field.fieldType}
                          value={
                            formData[fieldKey] || ""
                          }
                          onChange={(e) =>
                            handleChange(
                              fieldKey,
                              e.target.value
                            )
                          }
                          className="
                            h-[40px]
                            w-full
                            rounded-[10px]
                            border
                            border-white/[0.05]
                            bg-white/[0.08]
                            px-4
                            text-[13px]
                            text-white
                            outline-none
                            transition-all
                            focus:border-primary
                          "
                        />

                      </div>
                    );

                  }
                )}

                {/* BUTTON */}
                <div className="pt-1">

                  <Button
                    type="submit"
                    disabled={isSending}
                  >

                    {isSending
                      ? "Sending..."
                      : formButtonText}

                  </Button>

                </div>

              </form>

            </div>

          </div>

        </div>

      </section>

      <SuccessModal
        open={openModal}
        onClose={() =>
          setOpenModal(false)
        }
        message={modalData.message}
        icon={modalData.icon.asset.url}
      />
    </>
  );
}