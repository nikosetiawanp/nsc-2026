import Section from "@/layouts/Section";
import SectionLabel from "./SectionLabel";
import SectionTitle from "./SectionTitle";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import CompanyLogo from "../assets/company-logo.svg";

import img1 from "../assets/gallery/1.webp?url";
import img2 from "../assets/gallery/2.webp?url";
import img3 from "../assets/gallery/3.webp?url";
import img4 from "../assets/gallery/4.webp?url";
import img5 from "../assets/gallery/5.webp?url";
import img6 from "../assets/gallery/6.webp?url";
import img7 from "../assets/gallery/7.webp?url";
import img8 from "../assets/gallery/8.webp?url";
import img9 from "../assets/gallery/9.webp?url";
import img10 from "../assets/gallery/10.webp?url";
import img11 from "../assets/gallery/11.webp?url";
import img12 from "../assets/gallery/12.webp?url";
import img13 from "../assets/gallery/13.webp?url";
import img14 from "../assets/gallery/14.webp?url";
import img15 from "../assets/gallery/15.webp?url";
import img16 from "../assets/gallery/16.webp?url";
import img17 from "../assets/gallery/17.webp?url";
import img18 from "../assets/gallery/18.webp?url";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
];

const columns = [[], [], []];
images.forEach((image: string, index) => {
  columns[index % 3].push(image);
});

export default function GallerySection() {
  return (
    <Section
      id="gallery"
      className="relative flex flex-col items-center justify-start gap-0 px-6 pt-6 pb-36 lg:flex-row lg:justify-center lg:gap-8"
    >
      {/* Content*/}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        viewport={{ amount: 0.4, once: false }}
        transition={{ duration: 0.45 }}
        className="flex max-w-5xl flex-col items-center lg:items-start"
      >
        <img
          src={CompanyLogo.src}
          alt="company-logo"
          className="h-24 lg:mt-16 lg:hidden"
        />
        <div className="flex justify-center lg:justify-start">
          <SectionLabel className="text-[#C6A34F]" />
        </div>
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          viewport={{ amount: 0.4, once: false }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="flex flex-col items-center lg:items-start"
        >
          <SectionTitle className="mb-8 text-[#C6A34F]">GALLERY</SectionTitle>
        </motion.div>

        <img
          src={CompanyLogo.src}
          alt="company-logo"
          className="hidden h-64 lg:mt-16 lg:block"
        />
      </motion.div>

      {/* Images */}
      <div className="grid max-h-[325px] max-w-[425px] grid-cols-3 gap-2 overflow-y-scroll lg:max-h-[425px] [&::-webkit-scrollbar]:hidden">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-2">
            {column.map((src, imgIndex) => {
              // global index so pattern doesn't reset per column
              const globalIndex = colIndex + imgIndex * 3;
              const isSquare = globalIndex % 2 === 1; // odd → 1/1, even → 3/4

              return (
                <Dialog key={imgIndex}>
                  <DialogTrigger asChild>
                    <div
                      className={cn(
                        "group relative w-full cursor-pointer overflow-hidden rounded-sm",
                        isSquare ? "aspect-square" : "aspect-[3/4]",
                      )}
                    >
                      <img
                        src={src}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                      />
                    </div>
                  </DialogTrigger>

                  <DialogContent className="max-h-[90vh] max-w-[90vw] overflow-hidden p-0">
                    <img
                      src={src}
                      alt=""
                      className="h-auto w-full object-contain"
                    />
                  </DialogContent>
                </Dialog>
              );
            })}
          </div>
        ))}
      </div>
    </Section>
  );
}
