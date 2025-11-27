import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export default function SectionLabel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("font-display text-2xl", className)}>{children}</span>
  );
}
