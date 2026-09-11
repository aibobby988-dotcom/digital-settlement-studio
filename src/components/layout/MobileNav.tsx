"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navGroups, navItems, studyNavItems, type NavItem } from "@/lib/nav";
import { cn } from "@/lib/utils";

const allItems = [...navItems, ...studyNavItems];

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
              {item.label}
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
  const current = allItems.find((item) => item.href === pathname);
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
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
          className="flex h-8 w-8 items-center justify-center rounded-md text-ink-400 hover:bg-charcoal-800"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-charcoal-800 px-3 py-3 max-h-[75vh] overflow-y-auto">
          <p className="px-3 pb-2 pt-1 text-[10px] font-semibold uppercase tracking-wider text-ink-500">
            Product case study
          </p>
          <div className="space-y-3">
            {navGroups.map((group) => (
              <div key={group.section}>
                <p className="px-3 pb-1.5 text-[10.5px] font-medium text-brand-300/80">
                  {group.section}
                </p>
                <MobileNavList items={group.items} pathname={pathname} onNavigate={close} />
              </div>
            ))}
          </div>

          <div className="my-3 border-t border-charcoal-800" />

          <p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-wider text-ink-500">
            Study materials
          </p>
          <MobileNavList items={studyNavItems} pathname={pathname} onNavigate={close} />
        </nav>
      )}
    </div>
  );
}
