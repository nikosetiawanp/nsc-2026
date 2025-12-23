import Section from "@/layouts/Section";
import SectionLabel from "./SectionLabel";
import SectionTitle from "./SectionTitle";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import ContactImage from "../assets/contact-image.webp?url";
import CP1 from "../assets/cp-1.jpeg?url";
import CP2 from "../assets/cp-2.jpeg?url";

const contacts = [
  {
    name: "Dian Susanti",
    number: "081310013011",
    numberLink: "6281310013011",
    image: CP1,
  },
  {
    name: "Nurhadi",
    number: "081235816919",
    numberLink: "6281235816919",
    image: CP2,
  },
];

export default function ContactSection() {
  return (
    <Section
      id="contact"
      className="relative flex items-start justify-center gap-16 px-6 pt-6 pb-36 lg:items-center"
    >
      <div className="w-full max-w-5xl">
        {/* Animated LABEL */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          viewport={{ amount: 0.4, once: false }}
          transition={{ duration: 0.45 }}
          className="flex w-full justify-center lg:justify-start"
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
          <SectionTitle className="mb-8 text-center text-[#C6A34F] lg:text-left">
            CONTACT
          </SectionTitle>
        </motion.div>

        {/* Contacts */}
        <div className="flex flex-col gap-8 md:mt-16 md:flex-row lg:flex">
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3, once: false }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="group flex items-center gap-4 md:items-end"
            >
              <div className="h-28 w-28 overflow-hidden rounded-sm bg-[#007343] md:h-80 md:w-48">
                <img
                  src={contact.image}
                  alt="contact-image"
                  className="h-auto w-full object-cover md:h-full md:w-auto"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl text-[#C29D43]">
                  {contact.name}
                </span>
                <span className="text-[#C29D43]">PIC</span>
                <span className="text-[#C29D43]">{contact.number}</span>
                <motion.button
                  className="rounded-sm bg-[#C29D43] py-1 text-white hover:cursor-pointer"
                  onClick={() => {
                    window.open(
                      "https://wa.me/" + contact.numberLink,
                      "_blank",
                    );
                  }}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Whatsapp
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        className="absolute -bottom-10 left-1/2 -z-50 w-full max-w-2xl -translate-x-1/2 lg:right-0 lg:bottom-auto lg:left-auto lg:translate-x-0"
      >
        <img
          src={ContactImage}
          alt="location-image"
          className="h-full w-full"
        />
      </motion.div>
    </Section>
  );
}
