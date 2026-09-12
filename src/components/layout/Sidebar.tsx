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
  Users,
  Bot,
  GitCompareArrows,
  Scale,
  FileText,
  PlayCircle,
  Rocket,
} from "lucide-react";
import { navGroups, pageUseMeta, type NavItem, type PageUse } from "@/lib/nav";
import { cn } from "@/lib/utils";

const icons: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  "/": Presentation,
  "/stakeholder-demo": PlayCircle,
  "/overview": LayoutDashboard,
  "/treasury": Landmark,
  "/bond-dvp": ArrowLeftRight,
  "/fx-pvp": Repeat,
  "/architecture": Network,
  "/transaction-flow": GitCompareArrows,
  "/zero-to-one": Rocket,
  "/legacy-comparison": Scale,
  "/ecosystem": Globe,
  "/risk-controls": ShieldCheck,
  "/roadmap": Map,
  "/backlog": ListChecks,
  "/jd-alignment": FileText,
  "/interview-prep": GraduationCap,
  "/user-stories-guide": FileText,
  "/industry-knowledge": BookOpen,
  "/company-notes": Users,
  "/ai-preparation": Bot,
  "/ai-in-product": Bot,
  "/plain-english": BookOpen,
};

const navUseClasses: Record<PageUse, string> = {
  "must-show": "bg-amber-300 text-charcoal-950",
  "screen-share": "bg-emerald-300 text-charcoal-950",
  supporting: "bg-blue-300 text-charcoal-950",
  "study-first": "bg-brand-300 text-charcoal-950",
  private: "bg-rose-300 text-charcoal-950",
  review: "bg-amber-200 text-charcoal-950",
  archive: "bg-charcoal-700 text-ink-200",
};

function NavList({ items, pathname }: { items: NavItem[]; pathname: string }) {
  return (
    <ul className="space-y-1">
      {items.map((item) => {
        const active = pathname === item.href;
        // Nav entries and this icon map are maintained separately, so a new route
        // must not be able to crash the whole shell before its icon is added.
        const Icon = icons[item.href] ?? FileText;
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
              <span className={cn("rounded-full px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide", navUseClasses[item.use])}>
                {pageUseMeta[item.use].shortLabel}
              </span>
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
  const normalisedPathname = pathname === "/" ? pathname : pathname.replace(/\/$/, "");

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
          Your preparation map
        </p>
        <div className="space-y-5">
          {navGroups.map((group) => (
            <div key={group.section}>
              <p className="px-3 text-[10.5px] font-medium text-brand-300/80">{group.section}</p>
              <p className="px-3 pb-1.5 pt-0.5 text-[10px] leading-relaxed text-ink-500">{group.description}</p>
              <NavList items={group.items} pathname={normalisedPathname} />
            </div>
          ))}
        </div>
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
