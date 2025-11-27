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
    <h2 className={cn("font-sans text-5xl font-bold lg:text-6xl", className)}>
      {children}
    </h2>
  );
}
