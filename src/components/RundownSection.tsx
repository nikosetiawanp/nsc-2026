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
      className="relative flex items-start justify-center gap-16 px-6 py-6 pb-36"
    >
      {/* --- Content Wrapper (animation anchor) --- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
        className="w-full max-w-5xl flex-col items-center lg:items-start"
      >
        <div className="flex w-full justify-center lg:justify-start">
          <SectionLabel className="flex w-full justify-center" />
        </div>
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          viewport={{ amount: 0.4, once: false }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          <SectionTitle className="mb-8 flex justify-center text-[#C6A34F] lg:justify-start">
            RUNDOWN
          </SectionTitle>
        </motion.div>
        <Tabs defaultValue="0" className="mt-8 min-h-10">
          <TabsList className="flex min-h-10 w-full justify-start gap-4 overflow-x-auto rounded-none bg-transparent whitespace-nowrap lg:min-h-14 lg:justify-start [&::-webkit-scrollbar]:hidden">
            {company.days.map((day, index) => (
              <motion.div key={index} whileHover={{ scale: 1.1 }}>
                <TabsTrigger
                  className={cn(
                    "font-display h-fit w-fit rounded-full border-2 border-[#C6A34F] bg-white px-4 py-2 text-sm text-[#C6A34F] shadow-none lg:text-lg",
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
                className="mt-12 flex w-full flex-col gap-2"
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
