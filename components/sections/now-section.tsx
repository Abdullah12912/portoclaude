"use client";

import { motion } from "framer-motion";
import { nowData } from "@/lib/data";
import { SectionLabel } from "@/components/ui/section-label";

const nowItems = [
  { label: "Focus", value: nowData.focus, active: true },
  { label: "Reading", value: nowData.reading },
  { label: "Building", value: nowData.building },
  { label: "Learning", value: nowData.learning },
  { label: "Listening", value: nowData.listening },
  { label: "Location", value: nowData.location },
];

export function NowSection() {
  return (
    <motion.section
      className="mb-16"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
    >
      <SectionLabel>Now</SectionLabel>
      <div className="grid grid-cols-2 gap-3">
        {nowItems.map((item) => (
          <div
            key={item.label}
            className="bg-[var(--color-surface)] border border-[var(--color-faint)] rounded-md px-[18px] py-4"
          >
            <div className="font-mono text-[10px] text-[var(--color-muted)] tracking-[0.08em] uppercase mb-2">
              {item.label}
            </div>
            <div className="text-[14px] text-[var(--color-text)] leading-[1.4]">
              {item.active && (
                <span className="inline-block w-[6px] h-[6px] rounded-full bg-[var(--color-teal)] mr-[6px] mb-[1px] animate-[pulse_2s_ease-in-out_infinite]" />
              )}
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
