import Link from "next/link";
import { Compass } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

type TrackKey = "baseline" | "track1" | "track2" | "forward" | "foundation" | "evidence";

const tracks: Record<
  TrackKey,
  { label: string; tone: "brand" | "blue" | "amber" | "neutral"; line: string }
> = {
  baseline: {
    label: "Baseline — the rail HSBC already runs",
    tone: "neutral",
    line: "This demo shows a single instructed, 24/7 tokenised transfer with its controls — capability the Tokenised Deposit Service already has. It is the foundation Track 1 builds on. Track 1's actual addition, money moving by policy rather than instruction, is demonstrated on the Tokenised Treasury page.",
  },
  track1: {
    label: "Track 1 — Automated cash pooling",
    tone: "brand",
    line: "This page demonstrates the commercial engine: automated, policy-driven pooling on a rail that is already 24/7 — where the deposits are.",
  },
  track2: {
    label: "Track 2 — Cash leg for tokenised assets",
    tone: "blue",
    line: "This page demonstrates the strategic track: tokenised deposits settling against tokenised assets. HSBC already proved this against its own Orion bonds in August 2024 — the proposal is to extend it to assets HSBC does not issue.",
  },
  forward: {
    label: "Forward look — not a lead proposal",
    tone: "amber",
    line: "Roadmap material rather than an opening pitch. Raise it as an observation about where the estate could go, not as a plan you are volunteering to lead.",
  },
  foundation: {
    label: "Foundation — how the rail works",
    tone: "neutral",
    line: "Supporting detail behind both tracks. Use it to answer how questions, not to open the conversation.",
  },
  evidence: {
    label: "Evidence — why it can run in a bank",
    tone: "neutral",
    line: "Proof that the proposition can operate safely and commercially. Open it when the conversation turns to risk, money or sequencing.",
  },
};

/**
 * Declares where a page sits in the two-track TDS strategy, so no page is
 * orphaned from the narrative the interview actually runs on.
 */
export function StrategyContext({ track }: { track: TrackKey }) {
  const t = tracks[track];

  return (
    <div className="flex items-start gap-3 rounded-xl border border-paper-200 bg-paper-0 px-4 py-3">
      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-paper-100 text-brand-600">
        <Compass size={14} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone={t.tone}>{t.label}</Badge>
          <Link href="/tds-strategy" className="text-[11.5px] font-medium text-brand-600">
            See the full strategy
          </Link>
        </div>
        <p className="mt-1.5 text-[12px] leading-relaxed text-ink-700">{t.line}</p>
      </div>
    </div>
  );
}
