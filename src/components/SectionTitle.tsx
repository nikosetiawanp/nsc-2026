import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export default function SectionTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2 className={cn("font-display text-5xl lg:text-5xl", className)}>
      {children}
    </h2>
  );
}
