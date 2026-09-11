"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Presentation,
  LayoutDashboard,
  Landmark,
  ArrowLeftRight,
  ShieldCheck,
  Map,
  ListChecks,
  Repeat,
  Network,
  Globe,
  GraduationCap,
  BookOpen,
} from "lucide-react";
import { navItems, studyNavItems, type NavItem } from "@/lib/nav";
import { cn } from "@/lib/utils";

const icons: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  "/": Presentation,
  "/overview": LayoutDashboard,
  "/treasury": Landmark,
  "/bond-dvp": ArrowLeftRight,
  "/fx-pvp": Repeat,
  "/architecture": Network,
  "/ecosystem": Globe,
  "/risk-controls": ShieldCheck,
  "/roadmap": Map,
  "/backlog": ListChecks,
  "/interview-prep": GraduationCap,
  "/industry-knowledge": BookOpen,
};

function NavList({ items, pathname }: { items: NavItem[]; pathname: string }) {
  return (
    <ul className="space-y-1">
      {items.map((item) => {
        const active = pathname === item.href;
        const Icon = icons[item.href];
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              className={cn(
                "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition-colors",
                active
                  ? "bg-brand-500/12 text-paper-0 ring-1 ring-inset ring-brand-400/25"
                  : "text-ink-400 hover:bg-charcoal-800/70 hover:text-paper-100"
              )}
            >
              <Icon size={16} strokeWidth={2} />
              <span className="flex-1">{item.label}</span>
              {active && <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex lg:w-72 lg:shrink-0 lg:flex-col lg:fixed lg:inset-y-0 bg-charcoal-950 text-paper-50 border-r border-charcoal-800">
      <div className="px-6 pt-7 pb-6 border-b border-charcoal-800">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-brand-500/15 border border-brand-400/30">
            <div className="h-3 w-3 rounded-sm bg-brand-400" />
          </div>
          <div>
            <p className="text-[13px] font-semibold tracking-tight text-paper-0 leading-none">
              Digital Settlement
            </p>
            <p className="text-[13px] font-semibold tracking-tight text-paper-0 leading-tight">
              Studio
            </p>
          </div>
        </div>
        <p className="mt-3 text-[11px] leading-relaxed text-ink-400">
          Institutional settlement product prototype
        </p>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-5">
        <p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-wider text-ink-500">
          Product case study
        </p>
        <NavList items={navItems} pathname={pathname} />

        <div className="my-4 border-t border-charcoal-800" />

        <p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-wider text-ink-500">
          Study materials
        </p>
        <NavList items={studyNavItems} pathname={pathname} />
      </nav>

      <div className="border-t border-charcoal-800 px-6 py-5">
        <div className="rounded-lg bg-charcoal-900 border border-charcoal-700 px-3.5 py-3">
          <p className="text-[11px] font-semibold text-paper-100">Case study environment</p>
          <p className="mt-1 text-[11px] leading-relaxed text-ink-400">
            All data is fictional and simulated locally. No live systems, wallets or payments.
          </p>
        </div>
      </div>
    </aside>
  );
}
