import Section from "@/layouts/Section";
import SectionLabel from "./SectionLabel";
import SectionTitle from "./SectionTitle";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import ClosingImage from "../assets/closing-image.webp?url";

import type React from "react";

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const data = Object.fromEntries(formData.entries());

  const payload = {
    sheetId: "1rzpDAfs3edCEmxIsLQ1LprPm2emSZfoPAoP21n1o7HI",
    range: "Sheet1!A1",
    values: [[data.name, data.department, data.comment]],
  };

  try {
    const res = await fetch(
      "https://nsc-2026-worker.tigaraksansc2026.workers.dev",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      },
    );

    const text = await res.text(); // get response text

    if (res.ok) {
      console.log("Success response:", text);
      alert("Data sent!");
    } else {
      console.error("Error response:", text);
      alert("Failed to send. Check console for details.");
    }
  } catch (err) {
    console.error("Fetch error:", err);
    alert("Error sending data. Check console for details.");
  }
};

export default function ClosingSection() {
  return (
    <Section
      id="closing"
      className="relative flex items-start justify-center gap-16 px-6 pt-6 pb-36 lg:items-center"
    >
      <div className="w-fit lg:w-full lg:max-w-5xl">
        {/* Animated LABEL */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          viewport={{ amount: 0.4, once: false }}
          transition={{ duration: 0.45 }}
        >
          <SectionLabel className="text-[#C6A34F]">NSC 2026</SectionLabel>
        </motion.div>

        {/* Animated TITLE */}
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          viewport={{ amount: 0.4, once: false }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="flex justify-center lg:justify-start"
        >
          <SectionTitle className="mb-8 text-[#C6A34F]">CLOSING</SectionTitle>
        </motion.div>

        {/* Form – fixed overflow so SEND button shows on mobile */}
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-md flex-col gap-6 lg:gap-12"
        >
          {/* NAME */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.4, once: false }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="flex w-full flex-col"
          >
            <label
              htmlFor="name"
              className="text-xl font-medium text-[#C6A34F] lg:text-xl"
            >
              NAME
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              className="rounded-lg border border-[#C29D43] bg-white px-2 py-4 focus:outline-0"
            />
          </motion.div>

          {/* DEPARTMENT */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.4, once: false }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="flex flex-col"
          >
            <label
              htmlFor="department"
              className="text-xl font-medium text-[#C6A34F] lg:text-xl"
            >
              DEPARTMENT
            </label>
            <input
              id="department"
              name="department"
              type="text"
              placeholder="Enter your department"
              className="rounded-lg border border-[#C29D43] bg-white px-2 py-4 focus:outline-0"
            />
          </motion.div>

          {/* COMMENT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.4, once: false }}
            transition={{ duration: 0.45, delay: 0.25 }}
            className="flex flex-col"
          >
            <label
              htmlFor="comment"
              className="text-xl font-medium text-[#C6A34F] lg:text-xl"
            >
              COMMENT
            </label>
            <input
              id="comment"
              name="comment"
              type="text"
              placeholder="Enter your comment"
              className="rounded-lg border border-[#C29D43] bg-white px-2 py-4 focus:outline-0"
            />
          </motion.div>

          {/* SEND button */}
          <motion.div
            initial={{ opacity: 0, y: 26, scale: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.4, once: false }}
            transition={{ duration: 0.45 }}
            whileHover={{ scale: 1.1 }}
          >
            <Button
              className="font-display w-full bg-[#C6A34F] py-6 text-xl hover:cursor-pointer hover:bg-[#C6A34F]"
              size="lg"
            >
              SEND
            </Button>
          </motion.div>
        </form>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.4, once: false }}
        transition={{ duration: 1 }}
        className="absolute right-0 -z-40 flex h-full w-auto flex-col justify-center"
      >
        <img
          src={ClosingImage}
          className="max-h-[768px] w-full lg:h-full lg:w-auto"
        />
      </motion.div>
    </Section>
  );
}
