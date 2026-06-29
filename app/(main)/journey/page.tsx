import { Metadata } from "next";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { timeline } from "@/lib/data";

export const metadata: Metadata = {
  title: "Journey",
  description: "Timeline perjalanan hidup dan karir.",
};

const categoryColors: Record<string, string> = {
  education: "var(--color-teal)",
  work: "var(--color-gold)",
  achievement: "#A78BFA",
  personal: "var(--color-muted)",
  project: "#60A5FA",
};

const categoryLabels: Record<string, string> = {
  education: "Pendidikan",
  work: "Pekerjaan",
  achievement: "Pencapaian",
  personal: "Personal",
  project: "Project",
};

export default function JourneyPage() {
  const sorted = [...timeline].sort(
    (a, b) => b.year - a.year || (b.month ?? 0) - (a.month ?? 0)
  );

  return (
    <div className="max-w-[680px] mx-auto px-6 pb-20">
      <Nav />
      <div className="mb-12">
        <h1 className="text-[40px] font-light tracking-[-0.02em] text-[var(--color-text)] mb-3">Journey</h1>
        <p className="text-[var(--color-muted)] text-[14px]">
          Timeline perjalanan — pendidikan, pekerjaan, dan momen yang membentuk cara berpikir.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--color-faint)]" />
        <div className="flex flex-col gap-8 pl-8">
          {sorted.map((entry, i) => {
            const color = categoryColors[entry.category] ?? "var(--color-muted)";
            const label = categoryLabels[entry.category] ?? entry.category;
            return (
              <div key={i} className="relative">
                <div
                  className="absolute -left-8 top-1 w-[15px] h-[15px] rounded-full border-2"
                  style={{
                    background: entry.highlight ? color : "var(--color-surface2)",
                    borderColor: color,
                    boxShadow: entry.highlight ? `0 0 0 3px ${color}22` : "none",
                  }}
                />
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="font-mono text-[11px]" style={{ color }}>{label}</span>
                    <span className="font-mono text-[11px] text-[var(--color-faint)]">·</span>
                    <span className="font-mono text-[11px] text-[var(--color-muted)]">
                      {entry.month
                        ? `${new Date(entry.year, entry.month - 1).toLocaleDateString("id-ID", { month: "long" })} ${entry.year}`
                        : entry.year}
                    </span>
                  </div>
                  <h3 className="text-[15px] font-medium text-[var(--color-text)] mb-1.5">{entry.title}</h3>
                  <p className="text-[13px] text-[var(--color-muted)] leading-relaxed">{entry.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
