import { motion } from "motion/react";

import EventIcon from "../assets/1.svg";
import RundownIcon from "../assets/2.svg";
import LocationIcon from "../assets/3.svg";
import GalleryIcon from "../assets/4.svg";
import ContactIcon from "../assets/5.svg";
import ClosingIcon from "../assets/6.svg";
import NavBackground from "../assets/nav-background.png?url";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function BottomNavigation() {
  const navLinks = [
    { name: "EVENT", href: "#event", icon: EventIcon },
    { name: "RUNDOWN", href: "#rundown", icon: RundownIcon },
    { name: "LOCATION", href: "#location", icon: LocationIcon },
    { name: "GALLERY", href: "#gallery", icon: GalleryIcon },
    { name: "CONTACT", href: "#contact", icon: ContactIcon },
    { name: "CLOSING", href: "#closing", icon: ClosingIcon },
  ];

  const [hide, setHide] = useState(true);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const scrollEl = document.getElementById("scroll-container");
    if (!hero || !scrollEl) return;

    const onScroll = () => {
      const rect = hero.getBoundingClientRect();
      setHide(rect.bottom > 0 && rect.top < window.innerHeight);
    };

    scrollEl.addEventListener("scroll", onScroll);
    onScroll();

    return () => scrollEl.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed bottom-0 left-0 z-50 flex h-24 w-screen items-center justify-center lg:h-36",
      )}
    >
      <img
        src={NavBackground}
        alt="nav-background"
        className="absolute top-0 left-1/2 h-full w-full -translate-x-1/2 object-cover object-top"
      />
      <div
        className={cn(
          "absolute z-50 mt-2 flex h-full w-full items-center justify-center transition-all duration-500 lg:mt-8",
          !hide ? "pointer-events-none opacity-0" : "opacity-100",
        )}
      >
        <motion.button
          initial={{ scale: 1 }}
          transition={{ duration: 0.1 }}
          whileHover={{ scale: 1.1 }}
          className={cn(
            "button font-display left-1/2 rounded-lg bg-[#C6A34F] object-top px-4 py-2 text-white hover:cursor-pointer hover:bg-[#C6A34F]",
          )}
        >
          KICK OFF
        </motion.button>
      </div>

      {/* Bottom nav */}
      <div
        className={cn(
          "z-50 mt-4 flex items-center justify-start gap-5 overflow-x-scroll overflow-y-hidden px-8 py-6 transition-all duration-500 lg:mt-8 lg:justify-center lg:gap-8 [&::-webkit-scrollbar]:hidden",
          hide ? "pointer-events-none opacity-0" : "opacity-100",
        )}
      >
        {navLinks.map((link, index) => {
          return (
            <motion.button
              key={index}
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <a
                href={link.href}
                className="flex flex-col items-center justify-center gap-0 lg:gap-2"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 lg:h-16 lg:w-16">
                  <img
                    src={link.icon.src}
                    alt="icon"
                    className="w-10 lg:w-12"
                  />
                </div>
                <span className="text-sm text-[#C6A34F]">{link.name}</span>
              </a>
            </motion.button>
          );
        })}
      </div>
    </nav>
  );
}
