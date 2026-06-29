"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/section-label";

const stats = [
  { num: "4", label: "Projects aktif" },
  { num: "12", label: "Notes ditulis" },
  { num: "3", label: "Buku dibaca" },
  { num: "1", label: "Semester berjalan" },
  { num: "2", label: "Divisi pesantren" },
  { num: "∞", label: "Hal yang ingin dipelajari" },
];

export function PulseSection() {
  return (
    <motion.section
      className="mb-16"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
    >
      <SectionLabel>Pulse</SectionLabel>
      <div className="grid grid-cols-3 gap-3">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center py-5 px-3 bg-[var(--color-surface)] border border-[var(--color-faint)] rounded-md">
            <div className="font-mono text-[24px] font-medium text-[var(--color-text)] mb-1">{stat.num}</div>
            <div className="text-[11px] text-[var(--color-muted)]">{stat.label}</div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
