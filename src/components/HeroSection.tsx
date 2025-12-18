import Section from "@/layouts/Section";
import type { Company } from "@/types/company";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Particles } from "@/components/ui/shadcn-io/particles";

function HeroSection({ company }: { company: Company }) {
  return (
    <Section
      id="hero"
      className="relative flex flex-col items-center justify-center gap-4 overflow-hidden text-white"
    >
      {/* <Particles
        className="absolute inset-0"
        quantity={250}
        ease={80}
        staticity={50}
        color="#C6A34F"
        size={2}
      /> */}

      {/* Background Image */}
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        viewport={{ amount: 0.5, once: false }}
        transition={{ duration: 0.6 }}
        src="https://images.unsplash.com/photo-1447233053706-4d987282231b?q=80&w=1632&auto=format&fit=crop"
        alt=""
        className="absolute top-0 left-0 -z-50 h-full w-full object-cover brightness-25 saturate-0"
      />

      {/* Green gradient overlay */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        viewport={{ amount: 0.5, once: false }}
        transition={{ duration: 0.6 }}
        className="absolute bottom-0 left-0 -z-40 h-1/2 w-full bg-gradient-to-t from-[#2B653D]/50 to-[#2B653D]/0"
      /> */}

      {/* Logo */}
      <motion.img
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        viewport={{ amount: 0.5, once: false }}
        transition={{ duration: 0.35, delay: 0.15 }}
        className="mb-12 w-48 brightness-0 invert"
        src={company.image}
        alt={company.name}
      />

      {/* Text */}
      {/* <motion.span
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        viewport={{ amount: 0.5, once: false }}
        transition={{ duration: 0.3, delay: 0.25 }}
        className="text-2xl lg:text-4xl"
      >
        Welcome, <strong>{company.name}</strong>
      </motion.span> */}

      {/* <motion.span
        initial={{ y: 25, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        viewport={{ amount: 0.5, once: false }}
        transition={{ duration: 0.3, delay: 0.35 }}
        className="text-2xl lg:text-4xl"
      >
        You are Invited to
      </motion.span> */}

      {/* <motion.span
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        viewport={{ amount: 0.5, once: false }}
        transition={{ duration: 0.3, delay: 0.45 }}
        className="font-display text-5xl lg:text-9xl"
      >
        NSC 2026
      </motion.span> */}

      {/* Button */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        exit={{ opacity: 0 }}
        viewport={{ amount: 0.5, once: false }}
        transition={{ duration: 0.1 }}
        whileHover={{ scale: 1.1 }}
      >
        <Button
          size="lg"
          className="mt-16 bg-[#C6A34F] hover:bg-[#C6A34F]"
          onClick={() =>
            document
              .getElementById("about")!
              .scrollIntoView({ behavior: "auto" })
          }
        >
          PLAY
        </Button>
      </motion.div>
    </Section>
  );
}

export default HeroSection;
