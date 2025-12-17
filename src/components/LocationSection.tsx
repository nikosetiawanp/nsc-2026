import Section from "@/layouts/Section";
import SectionLabel from "./SectionLabel";
import SectionTitle from "./SectionTitle";
import { Button } from "./ui/button";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function LocationSection() {
  return (
    <Section
      id="location"
      className="relative flex flex-col items-center justify-start px-6 pt-24 lg:items-start lg:pt-0"
    >
      {/* --- Background --- */}
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
          src="https://images.unsplash.com/photo-1430232324554-8f4aebd06683?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

      {/* --- Content Wrapper --- */}
      <div className="w-full max-w-5xl lg:mt-24">
        {/* --- Title Animation --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SectionLabel className="text-[#C6A34F]">NSC 2026</SectionLabel>
          <SectionTitle className="mb-4 text-[#C6A34F]">LOCATION</SectionTitle>
        </motion.div>

        {/* --- Map Animation --- */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="mb-4 h-fit max-h-64 w-full overflow-hidden rounded-lg border md:w-fit lg:max-h-none"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.7387213102606!2d106.8236296759134!3d-6.165733860427557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5ccfad31207%3A0xbe8fbd60a735cbd6!2sM%C3%B6venpick%20Hotel%20Jakarta%20City%20Centre!5e0!3m2!1sen!2sid!4v1763963947152!5m2!1sen!2sid"
            width="600"
            height="450"
            loading="lazy"
          />
        </motion.div>

        {/* --- Address + Button Animation --- */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col gap-2"
        >
          <span className="text-2xl font-bold text-stone-500 lg:text-4xl">
            Mövenpick Hotel Jakarta City Centre
          </span>

          <p className="text-stone-500">
            Pecenongan St No.7, RW.17, Kebon Kelapa, Gambir, Central Jakarta
            City, Jakarta 10120
          </p>

          <a
            href="https://maps.app.goo.gl/dtmD9ndyudNEqs6Y9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="mt-4 w-fit bg-[#C6A34F] hover:bg-[#C6A34F]"
            >
              <MapPin />
              OPEN IN GOOGLE MAPS
            </Button>
          </a>
        </motion.div>
      </div>
    </Section>
  );
}
