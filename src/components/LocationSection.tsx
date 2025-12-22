import Section from "@/layouts/Section";
import SectionLabel from "./SectionLabel";
import SectionTitle from "./SectionTitle";
import { Button } from "./ui/button";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import LocationImage from "../assets/location-image.webp?url";

export default function LocationSection() {
  return (
    <Section
      id="location"
      className="relative flex flex-col items-center justify-start gap-16 px-6 pt-6 pb-36 xl:flex-row xl:justify-center"
    >
      {/* Left */}
      <div className="w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="itemsz-center flex flex-col xl:items-start"
        >
          <SectionLabel className="text-[#C6A34F]">NSC 2026</SectionLabel>
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            viewport={{ amount: 0.4, once: false }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <SectionTitle className="mb-8 flex justify-center text-[#C6A34F] xl:justify-start">
              LOCATION
            </SectionTitle>
          </motion.div>{" "}
        </motion.div>

        <div className="flex flex-col items-center xl:items-start">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="mb-4 flex h-fit max-h-40 w-full justify-center overflow-hidden rounded-lg border md:w-fit xl:max-h-64"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.7387213102606!2d106.8236296759134!3d-6.165733860427557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5ccfad31207%3A0xbe8fbd60a735cbd6!2sM%C3%B6venpick%20Hotel%20Jakarta%20City%20Centre!5e0!3m2!1sen!2sid!4v1763963947152!5m2!1sen!2sid"
              width="600"
              height="450"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col items-center gap-2 xl:items-start"
          >
            <span className="text-center text-2xl font-bold text-[#C29D43] xl:text-left xl:text-4xl">
              The Grand Platinum Hotel Jakarta
            </span>

            <p className="hidden text-center text-[#C29D43] lg:block xl:text-left">
              Jl. Kartini Raya No 57, RT.3/RW.2, Kelurahan Kartini, Kecamatan
              Sawah Besar, Jakarta Pusat, DKI Jakarta 10750
            </p>

            <a
              href="https://maps.app.goo.gl/dtmD9ndyudNEqs6Y9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center xl:justify-start"
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
      </div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        className="absolute bottom-24 left-1/2 -z-50 w-full max-w-3xl min-w-sm -translate-x-1/2 xl:right-0 xl:bottom-auto xl:left-auto xl:translate-x-0"
      >
        <img
          src={LocationImage}
          alt="location-image"
          className="h-full w-full"
        />
      </motion.div>
    </Section>
  );
}
