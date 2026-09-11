export const bond = {
  isin: "XS2026GRN0417",
  name: "Meridian Sustainable Infrastructure Green Bond 2031",
  issuer: "Meridian Infrastructure Finance plc",
  couponRate: 4.25,
  maturity: "2031-06-15",
  unitPrice: 1000,
  currency: "USD" as const,
};

export const buyer = {
  name: "Meridian Asset Management",
  role: "Buyer",
  account: "MAM-CUST-00219",
  cashLeg: { currency: "USD" as const, requiredBalance: 5_000_000 },
};

export const seller = {
  name: "Horizon Capital Markets",
  role: "Seller",
  account: "HCM-CUST-00874",
  bondLeg: { units: 5000, requiredHoldings: 5000 },
};

export const tradeDetails = {
  tradeId: "DVP-TRD-20260911-0142",
  tradeDate: "2026-09-11",
  units: 5000,
  unitPrice: 1000,
  grossConsideration: 5_000_000,
  settlementCycle: "Atomic (T+0, on-ledger)",
};
