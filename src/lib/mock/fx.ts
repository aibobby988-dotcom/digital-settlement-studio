export const fxTrade = {
  tradeId: "PVP-TRD-20260911-0356",
  pair: "USD/HKD",
  rate: 7.8012,
  tradeDate: "2026-09-11",
  valueDate: "2026-09-11",
  cutOff: "None — 24/7 atomic settlement window",
};

export const partyA = {
  name: "Meridian Holdings (HK) — Group Treasury Center",
  delivers: { currency: "USD" as const, amount: 10_000_000 },
  receives: { currency: "HKD" as const, amount: 78_012_000 },
};

export const partyB = {
  name: "Silverline Global Bank (Counterparty)",
  delivers: { currency: "HKD" as const, amount: 78_012_000 },
  receives: { currency: "USD" as const, amount: 10_000_000 },
};

export const liquidityPool = {
  HKD: { available: 92_000_000, required: 78_012_000 },
  USD: { available: 45_000_000, required: 10_000_000 },
};

export const liquidityPoolInsufficient = {
  HKD: { available: 52_000_000, required: 78_012_000 },
  USD: { available: 45_000_000, required: 10_000_000 },
};
