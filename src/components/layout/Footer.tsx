export function Footer() {
  return (
    <footer className="mt-16 border-t border-paper-200 px-6 py-6 lg:px-10">
      <div className="max-w-3xl rounded-lg border border-brand-100 bg-brand-50/60 px-4 py-3">
        <p className="text-[11px] font-semibold text-brand-600">
          Independent product case study — not an HSBC product
        </p>
        <p className="mt-1 text-[11px] leading-relaxed text-ink-500">
          Fictional data and workflows for demonstration only, prepared unofficially for an HSBC
          Senior Product Manager – Digital Currencies interview. This prototype is not affiliated
          with, endorsed by, or built on the systems of HSBC or any bank, and does not use any
          real HSBC branding, logos, or confidential material. All entities, balances,
          transactions and figures shown are simulated for illustrative purposes.
        </p>
      </div>
    </footer>
  );
}
