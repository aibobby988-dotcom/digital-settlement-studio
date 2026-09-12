"use client";

import { BookOpenCheck, Eye, EyeOff, Layers3, Presentation } from "lucide-react";
import { usePathname } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { navItems, pageUseMeta, type PageUse } from "@/lib/nav";

const useIcons: Record<PageUse, typeof Presentation> = {
  "must-show": Presentation,
  "screen-share": Eye,
  supporting: Layers3,
  "study-first": BookOpenCheck,
  private: EyeOff,
  review: BookOpenCheck,
  archive: Layers3,
};

export function PageGuidance() {
  const pathname = usePathname();
  const normalisedPathname = pathname === "/" ? pathname : pathname.replace(/\/$/, "");
  const item = navItems.find((navItem) => navItem.href === normalisedPathname);

  if (!item) return null;

  const meta = pageUseMeta[item.use];
  const Icon = useIcons[item.use];

  return (
    <aside className="mb-6 flex items-start gap-3 rounded-xl border border-paper-200 bg-paper-0 px-4 py-3 shadow-[0_1px_2px_rgba(15,21,33,0.03)]">
      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-paper-100 text-brand-600">
        <Icon size={14} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone={meta.tone}>{meta.label}</Badge>
          {item.studyPriority && <span className="text-[11px] font-medium text-ink-500">Study priority {item.studyPriority}</span>}
        </div>
        <p className="mt-1.5 text-[12px] leading-relaxed text-ink-700">{item.guidance}</p>
      </div>
    </aside>
  );
}
