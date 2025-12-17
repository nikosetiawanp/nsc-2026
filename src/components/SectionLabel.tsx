import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import Nsc2026 from "../assets/nsc-2026.svg";

export default function SectionLabel({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return <img src={Nsc2026.src} alt="nsc-2026" className="h-14" />;
}
