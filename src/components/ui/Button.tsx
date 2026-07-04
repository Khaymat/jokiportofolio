import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        {
          "bg-primary hover:bg-primary-light text-white focus:ring-primary":
            variant === "primary",
          "bg-accent hover:bg-accent/90 text-dark focus:ring-accent":
            variant === "secondary",
          "border-2 border-border-custom text-text-white hover:bg-border-custom focus:ring-border-custom":
            variant === "outline",
          "text-text-muted hover:text-text-white hover:bg-dark-alt focus:ring-dark-alt":
            variant === "ghost",
        },
        {
          "text-xs px-3 py-1.5": size === "sm",
          "text-sm px-5 py-2.5": size === "md",
          "text-base px-6 py-3": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
