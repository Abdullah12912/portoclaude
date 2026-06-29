"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/section-label";

const recentNotes = [
  { title: "Mengapa food security adalah asymmetric bet", category: "Economics", slug: "food-security-asymmetric" },
  { title: "PDCA sebagai framework kehidupan, bukan hanya manajemen", category: "Frameworks", slug: "pdca-life-framework" },
  { title: "Memisahkan keuangan pribadi dan institusi: sistem sederhana", category: "Systems", slug: "keuangan-personal-institusi" },
  { title: "Belajar dari pesantren: hidup komunal dan sistem berpikir", category: "Ideas", slug: "pesantren-sistem-berpikir" },
];

export function NotesSection() {
  return (
    <motion.section
      className="mb-16"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
    >
      <SectionLabel>Recent Notes</SectionLabel>
      <div className="flex flex-col">
        {recentNotes.map((note) => (
          <Link
            key={note.slug}
            href={`/notes/${note.slug}`}
            className="group flex items-baseline justify-between py-[14px] border-b border-[var(--color-faint)] gap-4 no-underline text-inherit first:border-t first:border-[var(--color-faint)]"
          >
            <span className="text-[14px] text-[var(--color-text)] group-hover:text-[var(--color-gold)] transition-colors">
              {note.title}
            </span>
            <span className="font-mono text-[10px] text-[var(--color-muted)] flex-shrink-0">
              {note.category}
            </span>
          </Link>
        ))}
      </div>
      <div className="mt-5">
        <Link href="/notes" className="font-mono text-[11px] text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors tracking-[0.05em]">
          Semua notes →
        </Link>
      </div>
    </motion.section>
  );
}
