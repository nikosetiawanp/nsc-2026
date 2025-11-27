import Section from "@/layouts/Section";
import SectionLabel from "./SectionLabel";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function AboutSection() {
  return (
    <Section
      id="about"
      className="relative flex items-start justify-start px-6 pt-24 lg:items-center lg:pt-0 lg:pl-48"
    >
      {/* Background image + gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        viewport={{ amount: 0.4, once: false }}
        transition={{ duration: 1 }}
        className={cn(
          "pointer-events-none absolute top-0 right-0 -z-50 h-full w-[50%]",
          "max-lg:top-auto max-lg:bottom-0 max-lg:left-0 max-lg:h-[40%] max-lg:w-full",
        )}
      >
        <img
          src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

      {/* Text content */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        viewport={{ amount: 0.4, once: false }}
        transition={{ duration: 0.45 }}
        className="w-full lg:max-w-[425px]"
      >
        <SectionLabel className="text-[#C6A34F]">NSC 2026</SectionLabel>

        <motion.div
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          viewport={{ amount: 0.4, once: false }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          <SectionTitle className="mb-8 text-[#C6A34F]">ABOUT</SectionTitle>
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          viewport={{ amount: 0.4, once: false }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="text-stone-500"
        >
          Welcome to TRS’s National Sales Conference. Your partnership plays a
          crucial role in our shared mission, and we deeply appreciate the
          growth we’ve achieved together.
          <br />
          <br />
          This is a pivotal moment to set ambitious targets, refine our
          approach, and ensure our collaboration delivers exceptional results.
          Let’s make the most of this opportunity to focus on growth,
          innovation, and to pave a strategic path forward for 2025.
        </motion.p>
      </motion.div>
    </Section>
  );
}

export default AboutSection;
