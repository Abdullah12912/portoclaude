"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { StatusBadge } from "@/components/ui/badge";
import { ProgressBar } from "@/components/ui/progress";
import { SectionLabel } from "@/components/ui/section-label";

export function ProjectsSection() {
  const featured = projects.slice(0, 4);
  return (
    <motion.section
      className="mb-16"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
    >
      <SectionLabel>Building</SectionLabel>
      <div className="flex flex-col">
        {featured.map((project) => (
          <Link
            key={project.slug}
            href={`/building/${project.slug}`}
            className="group flex items-start justify-between py-4 border-b border-[var(--color-faint)] gap-4 no-underline text-inherit first:border-t first:border-[var(--color-faint)]"
          >
            <div className="flex-1 min-w-0">
              <div className="text-[14px] font-medium text-[var(--color-text)] mb-1 group-hover:text-[var(--color-gold)] transition-colors">
                {project.title}
              </div>
              <div className="text-[13px] text-[var(--color-muted)] leading-snug">
                {project.description}
              </div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0 mt-0.5">
              <StatusBadge status={project.status} />
              {project.progress > 0 && (
                <ProgressBar value={project.progress} color={project.status === "paused" ? "gold" : "teal"} />
              )}
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-5">
        <Link href="/building" className="font-mono text-[11px] text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors tracking-[0.05em]">
          Semua projects →
        </Link>
      </div>
    </motion.section>
  );
}
