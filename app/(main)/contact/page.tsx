import { Metadata } from "next";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Contact",
  description: "Hubungi Rifqi Abdullah.",
};

const links = [
  { label: "Email", value: "rifqi@email.com", href: "mailto:rifqi@email.com", desc: "Untuk kolaborasi, pertanyaan, atau sekadar salam." },
  { label: "LinkedIn", value: "linkedin.com/in/rifqiabdullah", href: "https://linkedin.com/in/rifqiabdullah", desc: "Professional network dan update karir." },
  { label: "GitHub", value: "github.com/rifqiabdullah", href: "https://github.com/rifqiabdullah", desc: "Kode, project, dan kontribusi open source." },
];

export default function ContactPage() {
  return (
    <div className="max-w-[680px] mx-auto px-6 pb-20">
      <Nav />
      <div className="mb-12">
        <h1 className="text-[40px] font-light tracking-[-0.02em] text-[var(--color-text)] mb-3">Contact</h1>
        <p className="text-[var(--color-muted)] text-[14px] max-w-[480px]">
          Terbuka untuk kolaborasi, diskusi ide, atau sekadar ngobrol. Respons biasanya dalam 1–2 hari kerja.
        </p>
      </div>
      <div className="flex flex-col">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="group flex items-start justify-between py-5 border-b border-[var(--color-faint)] gap-4 no-underline text-inherit first:border-t first:border-[var(--color-faint)] hover:bg-[var(--color-surface)] transition-colors rounded-sm px-2 -mx-2"
          >
            <div>
              <div className="text-[14px] font-medium text-[var(--color-text)] group-hover:text-[var(--color-gold)] transition-colors mb-1">{link.label}</div>
              <div className="text-[13px] text-[var(--color-muted)]">{link.desc}</div>
            </div>
            <span className="font-mono text-[11px] text-[var(--color-muted)] flex-shrink-0 mt-0.5">{link.value} →</span>
          </a>
        ))}
      </div>
      <Footer />
    </div>
  );
}
