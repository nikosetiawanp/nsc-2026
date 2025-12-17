import Section from "@/layouts/Section";
import SectionLabel from "./SectionLabel";
import SectionTitle from "./SectionTitle";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const galleryItems = [
  {
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1470&auto=format&fit=crop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?q=80&w=1170&auto=format&fit=crop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1561489396-888724a1543d?q=80&w=1170&auto=format&fit=crop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1559223607-a43c990c692c?q=80&w=1170&auto=format&fit=crop",
  },
];

export default function GallerySection() {
  return (
    <Section
      id="gallery"
      className="relative flex flex-col items-center justify-start px-6 pt-24 lg:items-start lg:pt-0"
    >
      {/* --- Background image with AboutSection-style animation --- */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        viewport={{ amount: 0.4, once: false }}
        transition={{ duration: 1 }}
        className={cn(
          "pointer-events-none absolute top-0 right-0 -z-50 h-full w-[30%]",
          "max-lg:top-auto max-lg:bottom-0 max-lg:left-0 max-lg:h-[30%] max-lg:w-full",
        )}
      >
        <img
          src="https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?q=80&w=881&auto=format&fit=crop"
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

      {/* --- Content --- */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        viewport={{ amount: 0.4, once: false }}
        transition={{ duration: 0.45 }}
        className="w-full max-w-5xl lg:mt-24"
      >
        <SectionLabel className="text-[#C6A34F]">NSC 2026</SectionLabel>

        <motion.div
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          viewport={{ amount: 0.4, once: false }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          <SectionTitle className="mb-8 text-[#C6A34F]">GALLERY</SectionTitle>
        </motion.div>

        {/* Scroll container + fade overlays */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          viewport={{ amount: 0.4, once: false }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="relative h-fit"
        >
          {/* Fade left */}
          {/* <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-0 bg-gradient-to-r from-white to-transparent lg:w-20" /> */}

          {/* Fade right */}
          {/* <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-0 bg-gradient-to-l from-white to-transparent lg:w-20" /> */}

          <div className="scrollbar-none flex h-fit gap-3 overflow-x-scroll overflow-y-hidden pr-6 pb-4 [&::-webkit-scrollbar]:hidden">
            {galleryItems.map((item, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{
                      duration: 0.45,
                      delay: 0.05 * index,
                      ease: "easeOut",
                    }}
                    className="relative flex h-[350px] min-w-[200px] flex-col overflow-hidden rounded-xl lg:h-[500px] lg:min-w-[325px]"
                  >
                    <img
                      src={item.image}
                      className="h-full w-full object-cover"
                      alt=""
                    />
                  </motion.div>
                </DialogTrigger>

                <DialogContent className="max-w-4xl border-none bg-transparent p-2 shadow-none">
                  <img src={item.image} className="h-auto w-full rounded-xl" />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
