import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { CurrencyCode } from "@/lib/types";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

const currencyLocale: Record<CurrencyCode, string> = {
  HKD: "en-HK",
  USD: "en-US",
  GBP: "en-GB",
  SGD: "en-SG",
};

export function formatCurrency(amount: number, currency: CurrencyCode, maximumFractionDigits = 0) {
  return new Intl.NumberFormat(currencyLocale[currency], {
    style: "currency",
    currency,
    maximumFractionDigits,
  }).format(amount);
}

export function formatNumber(value: number, maximumFractionDigits = 0) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits }).format(value);
}

export function formatCompactUsd(amount: number) {
  if (amount >= 1_000_000_000) {
    return `USD ${(amount / 1_000_000_000).toFixed(2)}bn`;
  }
  if (amount >= 1_000_000) {
    return `USD ${(amount / 1_000_000).toFixed(1)}m`;
  }
  return `USD ${formatNumber(amount)}`;
}

export function generateReference(prefix: string) {
  const rand = Math.floor(1000 + Math.random() * 9000);
  const now = new Date();
  const stamp = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(
    now.getDate()
  ).padStart(2, "0")}`;
  return `${prefix}-${stamp}-${rand}`;
}

export function nowTimestamp() {
  return new Date().toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}
