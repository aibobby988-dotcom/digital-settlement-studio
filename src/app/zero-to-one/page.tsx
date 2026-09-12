import Link from "next/link";
import { ArrowRight, CheckCircle2, Compass, Layers, ShieldAlert, Target, XCircle } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { TermsOnThisPage } from "@/components/ui/TermsOnThisPage";
import { Card, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { framework, productBuilds } from "@/lib/mock/zeroToOne";

export default function ZeroToOnePage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="How It Works"
        title="Building 0 → 1: how each product actually got built"
        description="Not the craft of writing a story — the full reasoning that comes before one: discovery, MVP scope, the thinnest slice that proves it, and what has to be true before it leaves pilot. Walked through for all three settlement flows."
      />

      <TermsOnThisPage terms={["MVP", "Walking skeleton", "Go/no-go gate", "Jobs to be done", "RFP"]} />

      <section>
        <div className="mb-1 flex items-center gap-2">
          <Compass size={18} className="text-brand-500" />
          <h2 className="text-[18px] font-semibold text-charcoal-900">The framework, once</h2>
        </div>
        <p className="mb-5 text-[13px] text-ink-500">
          The same seven questions apply to every product below — and to any product you build
          yourself. Learn this once, apply it three times.
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {framework.map((f) => (
            <Card key={f.step}>
              <p className="text-[12.5px] font-semibold text-brand-600">{f.step}</p>
              <p className="mt-1.5 text-[12px] leading-relaxed text-ink-700">{f.question}</p>
            </Card>
          ))}
        </div>
      </section>

      {productBuilds.map((p) => (
        <section key={p.id} className="print-break">
          <div className="rounded-2xl bg-charcoal-950 px-6 py-7 sm:px-8">
            <Badge tone="brand" className="bg-brand-500/10 text-brand-300 ring-brand-400/25">
              {p.name}
            </Badge>
            <h2 className="mt-3 text-[20px] font-semibold text-paper-0">{p.tagline}</h2>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <Card>
              <div className="mb-1 flex items-center gap-2">
                <Target size={15} className="text-brand-500" />
                <CardHeader title="1. The problem" />
              </div>
              <p className="text-[12.5px] leading-relaxed text-ink-700">{p.problem}</p>
            </Card>
            <Card className="border-brand-100 bg-brand-50/30">
              <CardHeader title="2. MVP hypothesis" />
              <p className="text-[12.5px] leading-relaxed text-charcoal-900">{p.hypothesis}</p>
            </Card>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <Card>
              <div className="mb-1 flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-600" />
                <CardHeader title="3. In scope for v1" />
              </div>
              <ul className="space-y-1.5">
                {p.scopeIn.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-[12px] leading-relaxed text-charcoal-900">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-500" />
                    {s}
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <div className="mb-1 flex items-center gap-2">
                <XCircle size={15} className="text-rose-600" />
                <CardHeader title="Explicitly deferred" />
              </div>
              <ul className="space-y-1.5">
                {p.scopeOut.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-[12px] leading-relaxed text-ink-700">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-rose-400" />
                    {s}
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <Card className="mt-4">
            <div className="mb-1 flex items-center gap-2">
              <Layers size={15} className="text-brand-500" />
              <CardHeader title="4. The walking skeleton" subtitle="The thinnest slice that's genuinely end-to-end" />
            </div>
            <p className="text-[12.5px] leading-relaxed text-ink-700">{p.walkingSkeleton}</p>
          </Card>

          <div className="mt-4">
            <p className="mb-3 text-[13px] font-semibold text-charcoal-900">5. First epic and stories</p>
            {p.epics.length === 0 ? (
              <Card>
                <p className="text-[12.5px] leading-relaxed text-ink-700">
                  This is the flagship flow — its full delivery backlog (7 epics, every story and
                  acceptance criterion) already exists in detail.{" "}
                  <Link href="/backlog" className="font-medium text-brand-600">
                    See the full Delivery Backlog
                  </Link>
                  .
                </p>
              </Card>
            ) : (
              p.epics.map((epic) => (
                <Card key={epic.title} padded={false} className="mb-3">
                  <div className="p-5 pb-3">
                    <p className="text-[13px] font-semibold text-charcoal-900">{epic.title}</p>
                    <p className="mt-1 text-[12px] text-ink-500">{epic.goal}</p>
                  </div>
                  <div className="space-y-3 border-t border-paper-200 px-5 py-4">
                    {epic.stories.map((story) => (
                      <div key={story.id} className="rounded-lg border border-paper-200 p-4">
                        <div className="flex items-center gap-2">
                          <span className="rounded bg-paper-100 px-1.5 py-0.5 font-mono text-[10.5px] font-medium text-ink-500">
                            {story.id}
                          </span>
                          <h4 className="text-[12.5px] font-semibold text-charcoal-900">{story.title}</h4>
                        </div>
                        <p className="mt-2 text-[12px] leading-relaxed text-ink-700">{story.narrative}</p>
                        <ul className="mt-2.5 space-y-1">
                          {story.acceptanceCriteria.map((ac) => (
                            <li key={ac} className="flex items-start gap-2 text-[11.5px] leading-relaxed text-charcoal-900">
                              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-500" />
                              {ac}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </Card>
              ))
            )}
          </div>

          <Card className="mt-4 bg-charcoal-950 border-charcoal-900">
            <div className="mb-1 flex items-center gap-2">
              <ShieldAlert size={15} className="text-brand-400" />
              <p className="text-[13px] font-semibold text-paper-0">6. De-risk the biggest unknown first</p>
            </div>
            <p className="mt-2 text-[12.5px] leading-relaxed text-paper-100">
              <strong className="font-semibold">Biggest unknown:</strong> {p.biggestUnknown}
            </p>
            <p className="mt-2 text-[12.5px] leading-relaxed text-ink-400">{p.deriskingApproach}</p>
          </Card>

          <Card className="mt-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[13px] font-semibold text-charcoal-900">7. What &ldquo;ready to leave pilot&rdquo; means</p>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-700">{p.launchCriteria}</p>
              </div>
              <Link
                href={p.launchCriteriaLink}
                className="inline-flex shrink-0 items-center gap-1 text-[12px] font-medium text-brand-600"
              >
                View gates
                <ArrowRight size={13} />
              </Link>
            </div>
          </Card>
        </section>
      ))}
    </div>
  );
}
