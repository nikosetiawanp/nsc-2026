import Section from "@/layouts/Section";
import SectionLabel from "./SectionLabel";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import EventLogo from "../assets/event-logo.svg";

function EventSection() {
  return (
    <Section
      id="event"
      className="relative flex items-start justify-center gap-16 px-6 pt-6 pb-36 lg:items-center"
    >
      {/* Container */}
      <div className="flex w-full max-w-5xl flex-col items-center justify-between gap-4 lg:flex-row">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          viewport={{ amount: 0.4, once: false }}
          transition={{ duration: 0.45 }}
          className="flex w-full flex-col items-center lg:max-w-[425px] lg:items-start"
        >
          {/* Image mobile */}
          <img
            src={EventLogo.src}
            alt="event-logo"
            className="w-16 lg:hidden"
          />
          <SectionLabel className="text-[#C6A34F]" />

          <motion.div
            initial={{ y: 25, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            viewport={{ amount: 0.4, once: false }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <SectionTitle className="mb-8 flex justify-center text-[#C6A34F] lg:justify-start">
              EVENT
            </SectionTitle>
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            viewport={{ amount: 0.4, once: false }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="text-center text-sm text-[#C6A34F] lg:text-left lg:text-[16px]"
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
        <img
          src={EventLogo.src}
          alt="event-logo"
          className="hidden w-64 lg:block"
        />
      </div>
    </Section>
  );
}

export default EventSection;
