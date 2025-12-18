import Section from "@/layouts/Section";
import SectionLabel from "./SectionLabel";
import SectionTitle from "./SectionTitle";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const contacts = [
  {
    name: "Andi",
    number: "+62 812-3456-7890",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Siti",
    number: "+62 813-9876-5432",
    image:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=800&auto=format&fit=crop",
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
              className="group flex items-center gap-4 lg:items-end"
            >
              <div className="h-48 w-48 rounded-sm bg-[#007343] lg:h-80 lg:w-48"></div>
              <div className="flex flex-col">
                <span className="font-display text-2xl text-[#007343]">
                  {contact.name}
                </span>
                <span className="text-[#007343]">PIC</span>
                <span className="text-[#007343]">081 2345 67890</span>
                <motion.button className="rounded-sm bg-[#007343] py-1 text-white">
                  Whatsapp
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll container */}
        {/* <div className="scrollbar-none flex gap-3 overflow-x-scroll overflow-y-hidden pb-4 [&::-webkit-scrollbar]:hidden">
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3, once: false }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="group relative flex h-[350px] min-w-[200px] flex-col overflow-hidden rounded-xl lg:h-[500px] lg:min-w-[325px]"
            >
              <img
                src={contact.image}
                alt={contact.name}
                className="absolute inset-0 h-full w-full object-cover saturate-0 transition-all group-hover:saturate-100"
              />

              <div className="absolute bottom-0 left-0 flex w-full flex-col bg-gradient-to-t from-black/100 to-black/0 p-4">
                <span className="text-2xl font-bold text-white">
                  {contact.name}
                </span>
                <span className="text-stone-300">PIC</span>
                <span className="text-white underline">{contact.number}</span>

                <Button className="mt-8 w-fit bg-[#C6A34F] hover:bg-[#C6A34F]">
                  WHATSAPP
                </Button>
              </div>
            </motion.div>
          ))}
        </div> */}
      </div>
    </Section>
  );
}
