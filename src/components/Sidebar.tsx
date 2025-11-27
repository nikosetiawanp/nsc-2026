import { Info, Calendar, MapPin, Images, Phone, Mail } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { motion } from "framer-motion";

export const navLinks = [
  { name: "About", icon: Info, href: "#about" },
  { name: "Rundown", icon: Calendar, href: "#rundown" },
  { name: "Location", icon: MapPin, href: "#location" },
  { name: "Gallery", icon: Images, href: "#gallery" },
  { name: "Contact", icon: Phone, href: "#contact" },
  { name: "Closing", icon: Mail, href: "#closing" },
];

export default function Sidebar() {
  return (
    <nav className="fixed left-0 z-50 hidden h-screen flex-col items-center justify-between border-r-4 border-r-[#C6A34F] bg-[#2B653D] p-8 lg:flex">
      {/* Use logo from public folder */}
      <img
        src="/logo.png"
        alt="logo"
        className="h-auto w-6 brightness-0 invert"
      />
      <div className="flex flex-col items-center gap-6">
        {navLinks.map((link, index) => {
          return (
            <Tooltip key={index}>
              <motion.div whileHover={{ scale: 1.5 }}>
                <TooltipTrigger className="group p-2 hover:cursor-pointer">
                  <a href={link.href}>
                    <link.icon className="text-white transition-colors group-hover:text-[#C6A34F]" />
                  </a>
                </TooltipTrigger>
              </motion.div>
              <TooltipContent side="right">{link.name}</TooltipContent>
            </Tooltip>
          );
        })}
      </div>
      <div />
    </nav>
  );
}
