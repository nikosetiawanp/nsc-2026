import Section from "@/layouts/Section";
import SectionLabel from "./SectionLabel";
import SectionTitle from "./SectionTitle";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function ClosingSection() {
  return (
    <Section
      id="closing"
      className="relative flex flex-col items-center justify-start px-6 pt-24 lg:items-start lg:pt-0 lg:pl-48"
    >
      {/* Background image + animated fade */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        viewport={{ amount: 0.4, once: false }}
        transition={{ duration: 1 }}
        className={cn(
          "pointer-events-none absolute top-0 right-0 -z-50 h-full w-[50%]",
          "max-lg:top-auto max-lg:bottom-0 max-lg:left-0 max-lg:h-[30%] max-lg:w-full",
        )}
      >
        <img
          src="https://images.unsplash.com/photo-1473075109809-7a17d327bdf6?q=80&w=1470&auto=format&fit=crop"
          alt="pattern"
          className={cn(
            "h-full w-full object-cover saturate-0",
            "max-lg:object-top",
          )}
        />
        <div
          className={cn(
            "absolute inset-0",
            "bg-gradient-to-r from-white/100 to-white/0",
            "max-lg:bg-gradient-to-b max-lg:from-white/100 max-lg:to-white/0",
          )}
        />
      </motion.div>

      <div className="w-full max-w-5xl lg:mt-24">
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
        >
          <SectionTitle className="mb-8 text-[#C6A34F]">CLOSING</SectionTitle>
        </motion.div>

        {/* Form – fixed overflow so SEND button shows on mobile */}
        <form className="flex w-full max-w-md flex-col gap-12">
          {/* NAME */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.4, once: false }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="flex flex-col"
          >
            <label
              htmlFor="name"
              className="text-2xl font-medium text-[#C6A34F] lg:text-4xl"
            >
              NAME
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              className="border-b-2 border-b-[#C6A34F]/50 bg-transparent px-1 py-3 text-stone-500 transition-all placeholder:text-stone-500 focus:border-b-[#C6A34F] focus:outline-0"
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
              className="text-2xl font-medium text-[#C6A34F] lg:text-4xl"
            >
              DEPARTMENT
            </label>
            <input
              id="department"
              name="department"
              type="text"
              placeholder="Enter your department"
              className="border-b-2 border-b-[#C6A34F]/50 bg-transparent px-1 py-3 text-stone-500 transition-all placeholder:text-stone-500 focus:border-b-[#C6A34F] focus:outline-0"
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
              className="text-2xl font-medium text-[#C6A34F] lg:text-4xl"
            >
              COMMENT
            </label>
            <input
              id="comment"
              name="comment"
              type="text"
              placeholder="Enter your comment"
              className="border-b-2 border-b-[#C6A34F]/50 bg-transparent px-1 py-3 text-stone-500 transition-all placeholder:text-stone-500 focus:border-b-[#C6A34F] focus:outline-0"
            />
          </motion.div>

          {/* SEND button */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.4, once: false }}
            transition={{ duration: 0.45, delay: 0.3 }}
          >
            <Button
              className="w-full bg-[#C6A34F] hover:bg-[#C6A34F] lg:w-fit"
              size="lg"
            >
              SEND
            </Button>
          </motion.div>
        </form>
      </div>
    </Section>
  );
}
