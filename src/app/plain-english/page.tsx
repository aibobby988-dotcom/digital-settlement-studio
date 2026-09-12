import { BookOpen, Info } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { explainerCategories, explainers } from "@/lib/mock/explainers";

export const metadata = {
  title: "Plain English — Digital Settlement Studio",
};

export default function PlainEnglishPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="Study Materials"
        title="Plain English"
        description="Every acronym and piece of jargon used anywhere on this site, spelled out in full and explained as if you were meeting it for the first time — plus why each one matters for this specific role."
      />

      <div className="flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-100/20 px-4 py-3.5">
        <Info size={16} className="mt-0.5 shrink-0 text-blue-600" />
        <p className="text-[12.5px] leading-relaxed text-charcoal-900">
          Read this first if anything elsewhere on the site loses you. Terms are grouped by
          topic rather than alphabetically, so related ideas sit together — that makes them
          much easier to remember than a flat A-to-Z list.
        </p>
      </div>

      <section>
        <Card className="border-brand-100 bg-brand-50/30">
          <div className="flex items-start gap-3">
            <BookOpen size={18} className="mt-0.5 shrink-0 text-brand-600" />
            <div>
              <p className="text-[13px] font-semibold text-charcoal-900">
                The four terms to get right before anything else
              </p>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-700">
                If you only lock in four, make them these: a{" "}
                <strong className="font-semibold text-charcoal-900">tokenised deposit</strong>{" "}
                (the product), <strong className="font-semibold text-charcoal-900">stablecoin</strong>{" "}
                (the thing people confuse it with),{" "}
                <strong className="font-semibold text-charcoal-900">atomic settlement</strong>{" "}
                (the technical claim) and{" "}
                <strong className="font-semibold text-charcoal-900">legal finality</strong>{" "}
                (the caveat that stops the claim being overstated). Those four carry most
                conversations in this field.
              </p>
            </div>
          </div>
        </Card>
      </section>

      {explainerCategories.map((category) => {
        const items = explainers.filter((entry) => entry.category === category);
        if (items.length === 0) return null;

        return (
          <section key={category}>
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 className="text-[18px] font-semibold text-charcoal-900">{category}</h2>
              <span className="text-[11.5px] text-ink-400">{items.length} terms</span>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {items.map((entry) => (
                <Card key={entry.term}>
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <p className="text-[13.5px] font-semibold text-charcoal-900">{entry.term}</p>
                    {entry.full && (
                      <p className="text-[12px] font-medium text-brand-600">{entry.full}</p>
                    )}
                  </div>

                  <p className="mt-2 text-[12.5px] leading-relaxed text-ink-700">{entry.simple}</p>

                  <div className="mt-2.5 rounded-lg border-l-2 border-l-brand-300 bg-paper-50 px-3 py-2">
                    <p className="text-[10.5px] font-semibold uppercase tracking-wide text-ink-400">
                      Example
                    </p>
                    <p className="mt-1 text-[12px] leading-relaxed text-charcoal-900">
                      {entry.example}
                    </p>
                  </div>

                  {entry.status && (
                    <div className="mt-2.5 rounded-lg border border-amber-100 bg-amber-50/50 px-3 py-2">
                      <p className="text-[11.5px] leading-relaxed text-amber-700">
                        <strong className="font-semibold">Current status:</strong> {entry.status}
                      </p>
                    </div>
                  )}

                  <div className="mt-2.5 rounded-lg bg-paper-50 px-3 py-2">
                    <p className="text-[12px] leading-relaxed text-brand-600">
                      <strong className="font-semibold">Why it matters for this role:</strong>{" "}
                      {entry.why}
                    </p>
                  </div>

                  {entry.url && (
                    <ExternalLink href={entry.url} className="mt-2.5 text-[11.5px]">
                      Primary source
                    </ExternalLink>
                  )}
                </Card>
              ))}
            </div>
          </section>
        );
      })}

      <section>
        <Card>
          <p className="text-[13px] font-semibold text-charcoal-900">
            A note on using these in the room
          </p>
          <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-700">
            Knowing a definition is not the same as using it well. The strongest pattern is to
            say the plain-English version first and the technical term second — &ldquo;both legs
            settle together, what the industry calls payment-versus-payment&rdquo;. That shows
            command of the concept rather than memorisation of the label, and it keeps
            non-technical people in the conversation.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Badge tone="emerald">Concept first</Badge>
            <Badge tone="neutral">Label second</Badge>
            <Badge tone="amber">Never label only</Badge>
          </div>
        </Card>
      </section>
    </div>
  );
}
