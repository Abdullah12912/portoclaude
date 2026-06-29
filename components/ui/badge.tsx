import { cn } from "@/lib/utils";
import { ProjectStatus } from "@/lib/types";

const statusConfig: Record<ProjectStatus, { label: string; className: string }> = {
  active: {
    label: "Active",
    className: "bg-[rgba(29,158,117,0.12)] text-[var(--color-teal)] border border-[rgba(29,158,117,0.25)]",
  },
  planning: {
    label: "Planning",
    className: "bg-[rgba(200,169,126,0.1)] text-[var(--color-gold-dim)] border border-[rgba(200,169,126,0.2)]",
  },
  paused: {
    label: "Paused",
    className: "bg-[rgba(136,133,128,0.1)] text-[var(--color-muted)] border border-[var(--color-faint)]",
  },
  completed: {
    label: "Completed",
    className: "bg-[rgba(200,169,126,0.15)] text-[var(--color-gold)] border border-[rgba(200,169,126,0.3)]",
  },
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  const config = statusConfig[status];
  return (
    <span className={cn("font-mono text-[10px] px-2 py-0.5 rounded-[3px] font-medium tracking-[0.04em] uppercase", config.className)}>
      {config.label}
    </span>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[10px] text-[var(--color-muted)] bg-[var(--color-surface2)] border border-[var(--color-faint)] px-2 py-0.5 rounded-[3px]">
      {children}
    </span>
  );
}
