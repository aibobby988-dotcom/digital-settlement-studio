import { ArrowUpRight } from "lucide-react";

export function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1 font-medium text-brand-600 hover:text-brand-700 hover:underline ${className}`}
    >
      {children}
      <ArrowUpRight size={12} className="shrink-0" />
    </a>
  );
}
