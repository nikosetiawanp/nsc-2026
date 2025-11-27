import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Menu } from "lucide-react";

export const navLinks = [
  { label: "ABOUT", target: "#about" },
  { label: "RUNDOWN", target: "#rundown" },
  { label: "LOCATION", target: "#location" },
  { label: "CONTACT", target: "#contact" },
  { label: "GALLERY", target: "#gallery" },
  { label: "CLOSING", target: "#closing" },
];

export default function TopBar() {
  return (
    <nav className="fixed top-0 left-0 z-50 flex h-[72px] w-screen items-center justify-between border-b-4 border-b-[#C6A34F] bg-[#2B653D] px-6 lg:hidden">
      <img
        src="/logo.png"
        alt="logo"
        className="flex h-auto w-4 items-center brightness-0 invert"
      />

      <Sheet>
        <SheetTrigger>
          <Menu className="text-white active:text-[#C6A34F]" />
        </SheetTrigger>
        <SheetContent className="items-justify-center border-0 bg-[#2B653D]">
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
            <div className="mt-24 flex flex-col items-end justify-center gap-8 text-4xl text-white">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.target}
                  className="active:text-[#C6A34F]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
