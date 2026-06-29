import { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { SectionLabel } from "@/components/ui/section-label";
import { StatusBadge } from "@/components/ui/badge";
import { ProgressBar } from "@/components/ui/progress";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Building",
  description: "Projects yang sedang dan pernah aku bangun.",
};

export default function BuildingPage() {
  const grouped = {
    active: projects.filter((p) => p.status === "active"),
    planning: projects.filter((p) => p.status === "planning"),
    paused: projects.filter((p) => p.status === "paused"),
    completed: projects.filter((p) => p.status === "completed"),
  };

  return (
    <div className="max-w-[680px] mx-auto px-6 pb-20">
      <Nav />
      <div className="mb-12">
        <h1 className="text-[40px] font-light tracking-[-0.02em] text-[var(--color-text)] mb-3">Building</h1>
        <p className="text-[var(--color-muted)] text-[14px] max-w-[480px]">
          Semua yang sedang dibangun, direncanakan, atau dijeda. Laporan kerja yang jujur.
        </p>
      </div>

      {grouped.active.length > 0 && (
        <section className="mb-12">
          <SectionLabel>Active</SectionLabel>
          <ProjectList projects={grouped.active} />
        </section>
      )}
      {grouped.planning.length > 0 && (
        <section className="mb-12">
          <SectionLabel>Planning</SectionLabel>
          <ProjectList projects={grouped.planning} />
        </section>
      )}
      {grouped.paused.length > 0 && (
        <section className="mb-12">
          <SectionLabel>Paused</SectionLabel>
          <ProjectList projects={grouped.paused} />
        </section>
      )}
      <Footer />
    </div>
  );
}

function ProjectList({ projects }: { projects: typeof import("@/lib/data").projects }) {
  return (
    <div className="flex flex-col">
      {projects.map((project) => (
        <Link
          key={project.slug}
          href={`/building/${project.slug}`}
          className="group flex items-start justify-between py-5 border-b border-[var(--color-faint)] gap-4 no-underline text-inherit first:border-t first:border-[var(--color-faint)]"
        >
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[14px] font-medium text-[var(--color-text)] group-hover:text-[var(--color-gold)] transition-colors">
                {project.title}
              </span>
              <StatusBadge status={project.status} />
            </div>
            <p className="text-[13px] text-[var(--color-muted)] leading-snug mb-3">{project.description}</p>
            <div className="flex gap-2 flex-wrap">
              {project.tech.slice(0, 4).map((t) => (
                <span key={t} className="font-mono text-[10px] text-[var(--color-muted)] bg-[var(--color-surface2)] border border-[var(--color-faint)] px-2 py-0.5 rounded-[3px]">
                  {t}
                </span>
              ))}
            </div>
          </div>
          {project.progress > 0 && (
            <div className="flex flex-col items-end gap-1 flex-shrink-0 mt-1">
              <span className="font-mono text-[10px] text-[var(--color-muted)]">{project.progress}%</span>
              <ProgressBar value={project.progress} color={project.status === "paused" ? "gold" : "teal"} />
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}
