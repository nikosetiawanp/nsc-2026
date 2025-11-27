import Section from "@/layouts/Section";
import SectionLabel from "./SectionLabel";
import SectionTitle from "./SectionTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Company } from "@/types/company";
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Divider from "./Divider";

export default function RundownSection({ company }: { company: Company }) {
  return (
    <Section
      id="rundown"
      className="relative flex flex-col items-center justify-start px-6 pt-24 lg:items-start lg:pt-0 lg:pl-48"
    >
      {/* --- Background --- */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        viewport={{ amount: 0.4, once: false }}
        transition={{ duration: 1 }}
        className={cn(
          "pointer-events-none absolute top-0 right-0 -z-50 h-full w-[50%]",
          "max-lg:top-auto max-lg:bottom-0 max-lg:left-0 max-lg:h-[40%] max-lg:w-full",
        )}
      >
        <img
          src="https://images.unsplash.com/photo-1587329310686-91414b8e3cb7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="pattern"
          className={cn(
            "h-full w-full object-cover saturate-0",
            "max-lg:object-top",
          )}
        />

        <div
          className={cn(
            "absolute inset-0",
            "bg-gradient-to-r from-white/100 to-white/0",
            "max-lg:bg-gradient-to-b max-lg:from-white/100 max-lg:to-white/0",
          )}
        />
      </motion.div>

      {/* --- Content Wrapper (animation anchor) --- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
        className="w-full max-w-5xl lg:mt-24"
      >
        <SectionLabel className="text-[#C6A34F]">NSC 2026</SectionLabel>
        <SectionTitle className="mb-8 text-[#C6A34F]">RUNDOWN</SectionTitle>

        <Tabs defaultValue="0" className="mt-8 min-h-10">
          <TabsList className="flex min-h-10 w-full justify-start gap-4 overflow-x-auto rounded-none bg-transparent whitespace-nowrap lg:min-h-14 [&::-webkit-scrollbar]:hidden">
            {company.days.map((day, index) => (
              <motion.div key={index} whileHover={{ scale: 1.1 }}>
                <TabsTrigger
                  className={cn(
                    "h-fit w-fit rounded-full border-2 border-[#C6A34F] bg-white px-4 py-2 text-sm font-bold text-[#C6A34F] shadow-none lg:text-lg",
                    "data-[state=active]:bg-[#C6A34F] data-[state=active]:text-white",
                  )}
                  value={`${index}`}
                >
                  {day.date}
                </TabsTrigger>
              </motion.div>
            ))}
          </TabsList>

          <div className="flex max-w-3xl flex-col">
            {company.days.map((day, index) => (
              <TabsContent
                key={index}
                value={`${index}`}
                className="mt-12 flex flex-col gap-2"
              >
                {day.schedules.map((schedule, idx) => (
                  <React.Fragment key={idx}>
                    {idx === 0 && <Divider />}

                    <div className="flex w-full justify-between gap-6 py-2 lg:gap-8">
                      <span className="text-lg font-bold text-[#C6A34F] lg:text-3xl">
                        {schedule.time}
                      </span>
                      <span className="text-stone-500">{schedule.event}</span>
                    </div>

                    {idx <= day.schedules.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </motion.div>
    </Section>
  );
}
