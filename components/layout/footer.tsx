import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-faint)] pt-8 flex justify-between items-center flex-wrap gap-3 mt-20">
      <span className="font-mono text-[11px] text-[var(--color-muted)]">
        Last updated: Juni 2026
      </span>
      <div className="flex gap-4">
        {[
          { href: "https://github.com/rifqiabdullah", label: "GitHub" },
          { href: "https://linkedin.com/in/rifqiabdullah", label: "LinkedIn" },
          { href: "mailto:rifqi@email.com", label: "Email" },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
