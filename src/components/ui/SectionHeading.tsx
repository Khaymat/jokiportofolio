import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  highlightedWords?: number;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  description,
  highlightedWords = 2,
  centered = true,
  light = false,
  className,
}: SectionHeadingProps) {
  const words = title.split(" ");
  const highlighted = words.slice(0, highlightedWords).join(" ");
  const rest = words.slice(highlightedWords).join(" ");

  return (
    <div className={cn(centered && "text-center", className)}>
      {subtitle && (
        <p
          className={cn(
            "text-xs font-semibold mb-2 uppercase tracking-wider",
            light ? "text-text-light" : "text-primary"
          )}
        >
          {subtitle}
        </p>
      )}
      <h2
        className={cn(
          "text-2xl md:text-3xl lg:text-4xl font-extrabold font-heading mb-4 tracking-tight",
          light ? "text-text-white" : "text-dark"
        )}
      >
        {highlighted && (
          <span className="text-primary">{highlighted}</span>
        )}{" "}
        {rest}
      </h2>
      {description && (
        <p
          className={cn(
            "text-sm max-w-2xl leading-relaxed",
            centered && "mx-auto",
            light ? "text-text-light" : "text-text-muted"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
