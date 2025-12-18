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
  {
    name: "Rizky",
    number: "+62 821-1122-3344",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800&auto=format&fit=crop",
  },
];

export default function ContactSection() {
  return (
    <Section
      id="contact"
      className="relative flex flex-col items-center justify-start px-6 py-6 lg:items-start lg:pt-0"
    >
      {/* Background image + animated fade */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        viewport={{ amount: 0.4, once: false }}
        transition={{ duration: 1 }}
        className={cn(
          "pointer-events-none absolute top-0 right-0 -z-50 h-full w-[25%]",
          "max-lg:top-auto max-lg:bottom-0 max-lg:left-0 max-lg:h-[40%] max-lg:w-full",
        )}
      >
        <img
          src="https://plus.unsplash.com/premium_photo-1684106553502-e4f80cac5964?q=80&w=1470&auto=format&fit=crop"
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
          <SectionTitle className="mb-8 text-[#C6A34F]">CONTACT</SectionTitle>
        </motion.div>

        {/* Scroll container */}
        <div className="scrollbar-none flex gap-3 overflow-x-scroll overflow-y-hidden pb-4 [&::-webkit-scrollbar]:hidden">
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
        </div>
      </div>
    </Section>
  );
}
