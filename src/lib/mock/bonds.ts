/**
 * Track 2 demo data.
 *
 * Deliberately a THIRD-PARTY asset, not an HSBC-issued one. HSBC already proved
 * delivery-versus-payment against its own Orion bonds in the Ensemble sandbox in
 * August 2024, so demonstrating that again proves nothing new. The proposal is
 * that the bank provides the cash leg for assets it does not issue — which is
 * what this trade shows.
 */

export const bond = {
  isin: "HK0000MMF418",
  name: "Pacific Sterling Institutional HKD Money Market Fund — tokenised units",
  issuer: "Pacific Sterling Asset Management (third-party issuer)",
  couponRate: 3.85,
  maturity: "Open-ended",
  unitPrice: 1000,
  currency: "USD" as const,
};

/** Who does what in this trade — the point being that only the cash leg is ours. */
export const legOwnership = {
  assetLeg:
    "Issued, registered and custodied by a third-party asset manager on its own platform. The bank has no role in the asset itself.",
  cashLeg:
    "Tokenised deposits held at the bank. This is the leg the Digital Money team owns, and the only leg being proposed.",
  connection:
    "The two platforms meet over a shared interoperability layer, of the kind the Hong Kong Monetary Authority's EnsembleTX programme provides, rather than through a bilateral integration built for one counterparty.",
};

export const buyer = {
  name: "Meridian Asset Management",
  role: "Buyer",
  account: "MAM-CUST-00219",
  cashLeg: { currency: "USD" as const, requiredBalance: 5_000_000 },
};

export const seller = {
  name: "Pacific Sterling Asset Management",
  role: "Seller (third-party issuer)",
  account: "PSAM-EXT-00874",
  bondLeg: { units: 5000, requiredHoldings: 5000 },
};

export const tradeDetails = {
  tradeId: "DVP-TRD-20260913-0142",
  tradeDate: "2026-09-13",
  units: 5000,
  unitPrice: 1000,
  grossConsideration: 5_000_000,
  settlementCycle: "Atomic (T+0, cross-platform)",
};

export const whyThirdParty = {
  headline: "Why the asset is deliberately not an HSBC bond",
  body:
    "HSBC settled digital bonds issued on its own Orion platform against its own tokenised deposits in the Ensemble sandbox in August 2024. That is already proven, so re-proposing it demonstrates nothing. The unbuilt step — and the actual proposal — is providing the cash leg for assets the bank does not issue, reached over a shared interoperability layer. That turns the cash leg from a feature of HSBC's own issuance business into a franchise across the whole tokenised-asset market.",
  soWhat:
    "Same settlement mechanism, far larger addressable volume, and no new platform. The bank does not need to win the issuance mandate to earn the cash leg.",
};
