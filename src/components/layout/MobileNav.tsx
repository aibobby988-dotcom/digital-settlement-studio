"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navGroups, navItems, pageUseMeta, type NavItem, type PageUse } from "@/lib/nav";
import { cn } from "@/lib/utils";
import { SearchButton } from "@/components/layout/SiteSearch";

const allItems = navItems;

const navUseClasses: Record<PageUse, string> = {
  "must-show": "bg-amber-300 text-charcoal-950",
  "screen-share": "bg-emerald-300 text-charcoal-950",
  supporting: "bg-blue-300 text-charcoal-950",
  "study-first": "bg-brand-300 text-charcoal-950",
  private: "bg-rose-300 text-charcoal-950",
  review: "bg-amber-200 text-charcoal-950",
  archive: "bg-charcoal-700 text-ink-200",
};

function MobileNavList({
  items,
  pathname,
  onNavigate,
}: {
  items: NavItem[];
  pathname: string;
  onNavigate: () => void;
}) {
  return (
    <ul className="space-y-1">
      {items.map((item) => {
        const active = pathname === item.href;
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "block rounded-lg px-3 py-2.5 text-[13px] font-medium",
                active
                  ? "bg-brand-500/12 text-paper-0 ring-1 ring-inset ring-brand-400/25"
                  : "text-ink-400 hover:bg-charcoal-800/70"
              )}
              >
                <span>{item.label}</span>
                <span className={cn("ml-2 rounded-full px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide", navUseClasses[item.use])}>
                  {pageUseMeta[item.use].shortLabel}
                </span>
              </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const normalisedPathname = pathname === "/" ? pathname : pathname.replace(/\/$/, "");
  const current = allItems.find((item) => item.href === normalisedPathname);
  const close = () => setOpen(false);

  return (
    <div className="lg:hidden sticky top-0 z-40 bg-charcoal-950 text-paper-50 border-b border-charcoal-800">
      <div className="flex items-center justify-between px-4 py-3.5">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-brand-500/15 border border-brand-400/30">
            <div className="h-2.5 w-2.5 rounded-sm bg-brand-400" />
          </div>
          <span className="text-[13px] font-semibold">{current?.label ?? "Digital Settlement Studio"}</span>
        </div>
        <div className="flex items-center gap-1">
        <SearchButton variant="mobile" />
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
          className="flex h-8 w-8 items-center justify-center rounded-md text-ink-400 hover:bg-charcoal-800"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-charcoal-800 px-3 py-3 max-h-[75vh] overflow-y-auto">
          <p className="px-3 pb-2 pt-1 text-[10px] font-semibold uppercase tracking-wider text-ink-500">Your preparation map</p>
          <div className="space-y-4">
            {navGroups.map((group) => (
              <div key={group.section}>
                <p className="px-3 text-[10.5px] font-medium text-brand-300/80">{group.section}</p>
                <p className="px-3 pb-1.5 pt-0.5 text-[10px] leading-relaxed text-ink-500">{group.description}</p>
                <MobileNavList items={group.items} pathname={normalisedPathname} onNavigate={close} />
              </div>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
}
