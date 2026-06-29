"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/now", label: "Now" },
  { href: "/creating", label: "Creating" },
  { href: "/building", label: "Building" },
  { href: "/journey", label: "Journey" },
  { href: "/notes", label: "Notes" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between py-7 border-b border-[var(--color-faint)] mb-14">
      <Link
        href="/"
        className="text-xs font-medium tracking-[0.06em] uppercase text-[var(--color-text)] hover:text-[var(--color-gold)] transition-colors"
      >
        Rifqi Abdullah
      </Link>
      <ul className="flex gap-5 list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={cn(
                "text-xs transition-colors",
                pathname === link.href || pathname.startsWith(link.href + "/")
                  ? "text-[var(--color-gold)]"
                  : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
