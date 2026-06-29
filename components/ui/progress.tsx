interface ProgressBarProps {
  value: number; // 0-100
  className?: string;
  color?: "teal" | "gold";
}

export function ProgressBar({ value, color = "teal" }: ProgressBarProps) {
  return (
    <div className="w-14 h-[3px] bg-[var(--color-faint)] rounded-full overflow-hidden flex-shrink-0">
      <div
        className="h-full rounded-full transition-all duration-500"
        style={{
          width: `${value}%`,
          background: color === "teal" ? "var(--color-teal)" : "var(--color-gold-dim)",
        }}
      />
    </div>
  );
}
