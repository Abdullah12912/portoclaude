import { Metadata } from "next";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { SectionLabel } from "@/components/ui/section-label";
import { nowData } from "@/lib/data";

export const metadata: Metadata = {
  title: "Now",
  description: "Apa yang sedang aku kerjakan sekarang.",
};

const sections = [
  {
    label: "Current Focus",
    items: [
      { key: "Utama", value: nowData.focus },
      { key: "Peran", value: "Musyrif PPQIT Al Mahir — Kepengasuhan & Ketahfidzan" },
      { key: "Side project", value: nowData.building },
    ],
  },
  {
    label: "Learning",
    items: [
      { key: "Tech", value: nowData.learning },
      { key: "Domain", value: "Agribusiness & Animal Science" },
      { key: "Bahasa", value: "English — menjaga level" },
    ],
  },
  {
    label: "Consuming",
    items: [
      { key: "Reading", value: nowData.reading },
      { key: "Listening", value: nowData.listening },
      { key: "Watching", value: "Documentaries — food systems & technology" },
    ],
  },
];

export default function NowPage() {
  return (
    <div className="max-w-[680px] mx-auto px-6 pb-20">
      <Nav />
      <div className="mb-12">
        <h1 className="text-[40px] font-light tracking-[-0.02em] text-[var(--color-text)] mb-3">Now</h1>
        <p className="text-[var(--color-muted)] text-[14px]">Snapshot of what I&apos;m currently doing, reading, and thinking about.</p>
        <p className="font-mono text-[11px] text-[var(--color-gold-dim)] mt-2">Updated: {nowData.updatedAt} · {nowData.location}</p>
      </div>
      {sections.map((section) => (
        <section key={section.label} className="mb-10">
          <SectionLabel>{section.label}</SectionLabel>
          <div className="flex flex-col gap-0">
            {section.items.map((item) => (
              <div key={item.key} className="flex gap-8 py-3 border-b border-[var(--color-faint)] first:border-t first:border-[var(--color-faint)]">
                <span className="font-mono text-[11px] text-[var(--color-muted)] w-24 flex-shrink-0 pt-0.5">{item.key}</span>
                <span className="text-[14px] text-[var(--color-text)]">{item.value}</span>
              </div>
            ))}
          </div>
        </section>
      ))}
      <Footer />
    </div>
  );
}
