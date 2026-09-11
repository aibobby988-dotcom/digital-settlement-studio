"use client";

import { useEffect, type ReactNode } from "react";
import { X } from "lucide-react";

export function Modal({
  open,
  onClose,
  title,
  subtitle,
  children,
  width = "max-w-lg",
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: ReactNode;
  width?: string;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-charcoal-950/60 px-4 py-8 backdrop-blur-[2px]">
      <div
        className={`w-full ${width} rounded-2xl border border-paper-200 bg-paper-0 shadow-2xl`}
      >
        <div className="flex items-start justify-between border-b border-paper-200 px-6 py-5">
          <div>
            <h2 className="text-[16px] font-semibold text-charcoal-900">{title}</h2>
            {subtitle && <p className="mt-1 text-[12.5px] text-ink-500">{subtitle}</p>}
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-ink-400 hover:bg-paper-100 hover:text-ink-700"
          >
            <X size={18} />
          </button>
        </div>
        <div className="px-6 py-6">{children}</div>
      </div>
    </div>
  );
}
