export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-[10px] font-mono text-[11px] text-[var(--color-gold-dim)] tracking-[0.1em] uppercase mb-6">
      {children}
      <span className="flex-1 h-px bg-[var(--color-faint)]" />
    </div>
  );
}
