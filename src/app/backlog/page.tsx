"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, CircleDot, GitBranch, ListTodo, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardHeader } from "@/components/ui/Card";
import { StatusBadge, PriorityBadge, Badge } from "@/components/ui/Badge";
import { PrintButton } from "@/components/ui/PrintButton";
import {
  definitionOfDone,
  definitionOfReady,
  epics,
  initiativeName,
  initiativeSummary,
  nonFunctionalRequirements,
} from "@/lib/mock/backlog";
import { cn } from "@/lib/utils";

export default function BacklogPage() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ "epic-1": true, "epic-2": true });

  function toggle(id: string) {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function expandAll() {
    setExpanded(Object.fromEntries(epics.map((e) => [e.id, true])));
  }

  const totalStories = epics.reduce((sum, e) => sum + e.stories.length, 0);
  const totalPoints = epics.reduce((sum, e) => sum + e.stories.reduce((s, st) => s + st.points, 0), 0);

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Delivery Backlog"
        title="Product delivery backlog"
        description="A single initiative broken into delivery epics and user stories, each with clear acceptance criteria — structured for cross-functional delivery across Product, Engineering, Operations, Legal, Compliance, Financial Crime and Risk."
        actions={<PrintButton onBeforePrint={expandAll} />}
      />

      <Card className="bg-charcoal-950 border-charcoal-900">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="neutral" className="bg-charcoal-800 text-ink-400 ring-charcoal-700">
            Initiative
          </Badge>
          <Badge tone="neutral" className="bg-charcoal-800 text-brand-300 ring-charcoal-700">
            {epics.length} epics
          </Badge>
          <Badge tone="neutral" className="bg-charcoal-800 text-brand-300 ring-charcoal-700">
            {totalStories} user stories
          </Badge>
          <Badge tone="neutral" className="bg-charcoal-800 text-brand-300 ring-charcoal-700">
            {totalPoints} points
          </Badge>
        </div>
        <h2 className="mt-3 text-[17px] font-semibold text-paper-0">{initiativeName}</h2>
        <p className="mt-2 max-w-2xl text-[13px] leading-relaxed text-ink-400">{initiativeSummary}</p>
      </Card>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader title="Definition of Ready" />
          <ul className="space-y-1.5">
            {definitionOfReady.map((d) => (
              <li key={d} className="flex items-start gap-2 text-[12px] text-charcoal-900">
                <CircleDot size={10} className="mt-1 shrink-0 text-blue-600" />
                {d}
              </li>
            ))}
          </ul>
        </Card>
        <Card>
          <CardHeader title="Definition of Done" />
          <ul className="space-y-1.5">
            {definitionOfDone.map((d) => (
              <li key={d} className="flex items-start gap-2 text-[12px] text-charcoal-900">
                <CircleDot size={10} className="mt-1 shrink-0 text-emerald-600" />
                {d}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card>
        <CardHeader title="Non-functional requirements" subtitle="Apply across every epic, not just where called out explicitly" />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {nonFunctionalRequirements.map((n) => (
            <div key={n.area} className="rounded-lg border border-paper-200 bg-paper-50 px-3.5 py-3">
              <div className="flex items-center gap-1.5 text-[11.5px] font-semibold text-charcoal-900">
                <ShieldCheck size={13} className="text-brand-500" />
                {n.area}
              </div>
              <p className="mt-1 text-[12px] leading-relaxed text-ink-500">{n.requirement}</p>
            </div>
          ))}
        </div>
      </Card>

      <div className="space-y-4">
        {epics.map((epic, idx) => {
          const isOpen = !!expanded[epic.id];
          const points = epic.stories.reduce((s, st) => s + st.points, 0);
          return (
            <Card key={epic.id} padded={false} className="print-break">
              <button
                onClick={() => toggle(epic.id)}
                className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-ink-400">
                    {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                  </span>
                  <div>
                    <p className="text-[11px] font-mono font-medium text-ink-400">
                      EPIC-{String(idx + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-[14px] font-semibold text-charcoal-900">{epic.title}</h3>
                    <p className="mt-1 max-w-2xl text-[12px] leading-relaxed text-ink-500">{epic.goal}</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      <Badge tone="neutral">Product: {epic.owners.product}</Badge>
                      <Badge tone="neutral">Delivery: {epic.owners.delivery}</Badge>
                      <Badge tone="neutral">Risk: {epic.owners.risk}</Badge>
                    </div>
                  </div>
                </div>
                <div className="flex shrink-0 flex-col items-end gap-1.5">
                  <StatusBadge status={epic.status} />
                  <span className="text-[11px] text-ink-400">
                    {epic.stories.length} stories · {points} pts
                  </span>
                </div>
              </button>

              {isOpen && (
                <div className="space-y-3 border-t border-paper-200 px-5 py-4">
                  {epic.stories.map((story) => (
                    <div key={story.id} className="rounded-lg border border-paper-200 p-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="rounded bg-paper-100 px-1.5 py-0.5 font-mono text-[10.5px] font-medium text-ink-500">
                            {story.id}
                          </span>
                          <h4 className="text-[13px] font-semibold text-charcoal-900">{story.title}</h4>
                        </div>
                        <div className="flex items-center gap-2">
                          <PriorityBadge priority={story.priority} />
                          <Badge tone="neutral">{story.points} pts</Badge>
                        </div>
                      </div>
                      <p className="mt-2.5 text-[12.5px] leading-relaxed text-ink-700">{story.narrative}</p>
                      <div className="mt-2.5 flex items-center gap-1.5 text-[11px] text-ink-500">
                        <GitBranch size={12} className={story.dependency === "None" ? "text-ink-400" : "text-amber-500"} />
                        {story.dependency}
                      </div>
                      <div className="mt-3">
                        <p className="mb-1.5 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-ink-400">
                          <ListTodo size={12} />
                          Acceptance criteria
                        </p>
                        <ul className="space-y-1.5">
                          {story.acceptanceCriteria.map((ac) => (
                            <li key={ac} className="flex items-start gap-2 text-[12px] text-charcoal-900">
                              <CircleDot
                                size={11}
                                className={cn("mt-0.5 shrink-0 text-brand-500")}
                              />
                              {ac}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
