import { cn } from "@/lib/utils";

interface SectionLabelProps {
  index: string;
  label: string;
  /**
   * inverted=true  → inside dark sections (manufacturing, stats, certs)
   * inverted=false → default, inside light sections
   */
  inverted?: boolean;
  className?: string;
}

export default function SectionLabel({
  index,
  label,
  inverted = false,
  className,
}: SectionLabelProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className={cn("text-label", inverted ? "text-green-light/60" : "text-green/70")}>
        {index}
      </span>
      <span className={cn("block w-5 h-px", inverted ? "bg-dark-border" : "bg-border")} />
      <span className={cn("text-label", inverted ? "text-dark-muted" : "text-ink-muted")}>
        {label}
      </span>
    </div>
  );
}
