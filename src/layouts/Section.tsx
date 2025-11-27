import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export default function Section({
  children,
  className,
  id,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn("h-screen w-full snap-center scroll-pt-24", className)}
    >
      {children}
    </section>
  );
}
