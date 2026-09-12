import { PageHeader } from "@/components/layout/PageHeader";
import { StrategyContext } from "@/components/ui/StrategyContext";
import { TermsOnThisPage } from "@/components/ui/TermsOnThisPage";
import { StakeholderDemo } from "@/components/demo/StakeholderDemo";

export default function StakeholderDemoPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="Live Product Demonstration"
        title="From client outcome to controlled settlement"
        description="A stakeholder-ready walkthrough of the flagship tokenised-treasury proposition: the client interface, the bank control plane, the commercial narrative and the cross-functional operating model."
      />

      <TermsOnThisPage terms={["Tokenised deposit", "Maker-checker", "Sanctions screening", "Reconciliation", "RM", "Treasurer", "Exception handling"]} />

      <StrategyContext track="track1" />
      <StakeholderDemo />
    </div>
  );
}
