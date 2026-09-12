import { PageHeader } from "@/components/layout/PageHeader";
import { TermsOnThisPage } from "@/components/ui/TermsOnThisPage";
import { Card, CardHeader } from "@/components/ui/Card";
import { TransactionFlowAnimation } from "@/components/transaction-flow/TransactionFlowAnimation";

export default function TransactionFlowPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="How It Works"
        title="Transaction flow — happy path vs. exception path"
        description="The same transfer, played two ways: everything clearing normally, and a real control stopping it. Watch how atomic settlement handles both."
      />

      <TermsOnThisPage terms={["Settlement", "Sanctions screening", "Exception handling", "Reconciliation", "Atomic settlement"]} />

      <section>
        <TransactionFlowAnimation />
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader title="What the happy path shows" />
          <p className="text-[12.5px] leading-relaxed text-ink-700">
            Six controls run in a fixed order — entitlement, screening, authorisation, atomic
            settlement, then reconciliation. Every stage has to actually clear; nothing is
            skipped or assumed. This is the same six-stage lifecycle used on the Tokenised
            Treasury page&apos;s transaction timeline, just watched end-to-end in one view.
          </p>
        </Card>
        <Card>
          <CardHeader title="What the exception path shows" />
          <p className="text-[12.5px] leading-relaxed text-ink-700">
            A sanctions screening hit at stage 3 doesn&apos;t just stop the transfer — it rolls
            back cleanly. Nothing partially settles. This is the same principle demonstrated on
            the Bond DvP and FX PvP pages&apos; &ldquo;simulate exception&rdquo; buttons, shown
            here for the treasury flow specifically.
          </p>
        </Card>
      </section>
    </div>
  );
}
