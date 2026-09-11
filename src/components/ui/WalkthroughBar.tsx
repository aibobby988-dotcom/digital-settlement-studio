"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Compass, X } from "lucide-react";
import { tourSteps, TOUR_STORAGE_KEY, type TourState } from "@/lib/tour";

export function WalkthroughBar({ step }: { step: number }) {
  const router = useRouter();
  const [active, setActive] = useState(false);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(TOUR_STORAGE_KEY);
      if (raw) {
        const state = JSON.parse(raw) as TourState;
        // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time hydration from sessionStorage after mount
        setActive(!!state.active);
      }
    } catch {
      // sessionStorage unavailable — walkthrough banner simply won't appear
    }
  }, []);

  if (!active) return null;

  const current = tourSteps[step - 1];
  const next = tourSteps[step];
  const isLast = step >= tourSteps.length;

  function exitTour() {
    try {
      sessionStorage.removeItem(TOUR_STORAGE_KEY);
    } catch {
      // ignore
    }
    setActive(false);
  }

  function goNext() {
    if (isLast) {
      exitTour();
      return;
    }
    try {
      sessionStorage.setItem(TOUR_STORAGE_KEY, JSON.stringify({ active: true, step: step + 1 }));
    } catch {
      // ignore
    }
    router.push(next.path);
  }

  return (
    <div className="no-print mb-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-brand-100 bg-brand-50 px-4 py-3">
      <div className="flex items-center gap-2.5">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-500 text-paper-0">
          <Compass size={14} />
        </div>
        <p className="text-[12.5px] text-charcoal-900">
          <span className="font-semibold">Guided walkthrough</span> · step {step} of {tourSteps.length}
          {" — "}
          {current?.label}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={exitTour}
          className="inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-[12px] font-medium text-ink-500 hover:bg-brand-100/60"
        >
          <X size={13} />
          Exit
        </button>
        <button
          onClick={goNext}
          className="inline-flex items-center gap-1.5 rounded-lg bg-brand-500 px-3.5 py-1.5 text-[12px] font-medium text-paper-0 hover:bg-brand-600"
        >
          {isLast ? "Finish walkthrough" : `Next: ${next.label}`}
          {!isLast && <ArrowRight size={13} />}
        </button>
      </div>
    </div>
  );
}
