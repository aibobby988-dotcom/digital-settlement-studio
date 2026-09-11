"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { CheckCircle2, XCircle, Info, X } from "lucide-react";
import { cn } from "@/lib/utils";

type ToastTone = "success" | "error" | "info";

interface ToastItem {
  id: number;
  title: string;
  description?: string;
  tone: ToastTone;
}

interface ToastContextValue {
  showToast: (toast: { title: string; description?: string; tone?: ToastTone }) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

const toneConfig: Record<ToastTone, { icon: typeof CheckCircle2; classes: string; iconClasses: string }> = {
  success: {
    icon: CheckCircle2,
    classes: "border-emerald-100 bg-paper-0",
    iconClasses: "text-emerald-500",
  },
  error: {
    icon: XCircle,
    classes: "border-rose-100 bg-paper-0",
    iconClasses: "text-rose-600",
  },
  info: {
    icon: Info,
    classes: "border-blue-100 bg-paper-0",
    iconClasses: "text-blue-600",
  },
};

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const idRef = useRef(0);

  const dismiss = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback<ToastContextValue["showToast"]>(
    ({ title, description, tone = "success" }) => {
      const id = ++idRef.current;
      setToasts((prev) => [...prev, { id, title, description, tone }]);
      setTimeout(() => dismiss(id), 5000);
    },
    [dismiss]
  );

  const value = useMemo(() => ({ showToast }), [showToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[60] flex flex-col items-center gap-2 px-4 pb-6 sm:items-end sm:px-6">
        {toasts.map((toast) => {
          const config = toneConfig[toast.tone];
          const Icon = config.icon;
          return (
            <div
              key={toast.id}
              className={cn(
                "pointer-events-auto flex w-full max-w-sm items-start gap-3 rounded-xl border p-4 shadow-lg animate-[toast-in_0.2s_ease-out]",
                config.classes
              )}
            >
              <Icon size={18} className={cn("mt-0.5 shrink-0", config.iconClasses)} />
              <div className="flex-1">
                <p className="text-[13px] font-semibold text-charcoal-900">{toast.title}</p>
                {toast.description && (
                  <p className="mt-0.5 text-[12px] leading-relaxed text-ink-500">
                    {toast.description}
                  </p>
                )}
              </div>
              <button
                onClick={() => dismiss(toast.id)}
                aria-label="Dismiss"
                className="text-ink-400 hover:text-ink-700"
              >
                <X size={15} />
              </button>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within a ToastProvider");
  return ctx;
}
