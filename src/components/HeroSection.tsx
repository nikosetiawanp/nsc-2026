import Section from "@/layouts/Section";
import type { Company } from "@/types/company";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Particles } from "@/components/ui/shadcn-io/particles";
import HeroImage from "../assets/hero-image.webp?url";
import ShadowImage from "../assets/shadow.webp?url";

// import HeroImage from "../assets/hero-image.jpeg?url";

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
        src={HeroImage}
        alt=""
        className="absolute top-0 left-0 -z-50 h-full w-full object-cover"
      />

      {/* Logo */}
      <motion.img
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        viewport={{ amount: 0.5, once: false }}
        transition={{ duration: 0.35, delay: 0.15 }}
        className="mb-48 w-48"
        src={company.image}
        alt={company.name}
      />
    </Section>
  );
}

export default HeroSection;
