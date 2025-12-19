import Section from "@/layouts/Section";
import SectionLabel from "./SectionLabel";
import SectionTitle from "./SectionTitle";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import CompanyLogo from "../assets/company-logo.svg";

const images = [
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
  // "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
  // "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
  // "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
];

const columns = [[], [], []];
images.forEach((image: string, index) => {
  columns[index % 3].push(image);
});

export default function GallerySection() {
  return (
    <Section
      id="gallery"
      className="relative flex flex-col items-center justify-start gap-8 px-6 pt-6 pb-36 lg:flex-row lg:justify-center"
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
      <div className="grid max-h-[425px] max-w-[425px] grid-cols-3 gap-2">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="grid gap-2">
            {column.map((src, imgIndex) => (
              <div className="overflow-hidden rounded-sm">
                <img
                  key={imgIndex}
                  src={src}
                  alt=""
                  className="h-full w-auto object-cover"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
}
