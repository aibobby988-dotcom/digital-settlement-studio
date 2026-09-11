import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "danger";
type Size = "sm" | "md";

const variantClasses: Record<Variant, string> = {
  primary: "bg-charcoal-900 text-paper-0 hover:bg-charcoal-800 disabled:bg-ink-400",
  secondary:
    "bg-paper-0 text-charcoal-900 ring-1 ring-inset ring-paper-200 hover:bg-paper-50 disabled:text-ink-400",
  ghost: "text-ink-700 hover:bg-paper-100 disabled:text-ink-400",
  danger: "bg-rose-600 text-paper-0 hover:bg-rose-700 disabled:bg-ink-400",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-3 py-1.5 text-[12.5px]",
  md: "px-4 py-2.5 text-[13px]",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  icon,
  ...props
}: {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors disabled:cursor-not-allowed",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}
