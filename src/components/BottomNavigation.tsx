import { motion } from "motion/react";

import EventIcon from "../assets/1.svg";
import RundownIcon from "../assets/2.svg";
import LocationIcon from "../assets/3.svg";
import GalleryIcon from "../assets/4.svg";
import ContactIcon from "../assets/5.svg";
import ClosingIcon from "../assets/6.svg";
import NavBackground from "../assets/nav-background.png?url";

export default function BottomNavigation() {
  const navLinks = [
    { name: "EVENT", href: "#event", icon: EventIcon },
    { name: "RUNDOWN", href: "#rundown", icon: RundownIcon },
    { name: "LOCATION", href: "#location", icon: LocationIcon },
    { name: "GALLERY", href: "#gallery", icon: GalleryIcon },
    { name: "CONTACT", href: "#contact", icon: ContactIcon },
    { name: "CLOSING", href: "#closing", icon: ClosingIcon },
  ];

  return (
    <nav className="fixed bottom-0 left-0 z-50 flex h-36 w-screen items-center justify-center lg:h-50">
      <img
        src={NavBackground}
        alt="nav-background"
        className="absolute top-0 left-1/2 h-full w-full -translate-x-1/2 object-cover object-top"
      />
      <div className="z-50 mt-8 flex items-center justify-start gap-8 overflow-x-scroll overflow-y-hidden px-8 py-6 lg:justify-center">
        {navLinks.map((link, index) => {
          return (
            <motion.button
              key={index}
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <a
                href={link.href}
                className="flex flex-col items-center justify-center gap-2"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/80">
                  <img src={link.icon.src} alt="icon" className="w-12" />
                </div>
                <span className="text-[#C6A34F]">{link.name}</span>
              </a>
            </motion.button>
          );
        })}
      </div>
    </nav>
  );
}
