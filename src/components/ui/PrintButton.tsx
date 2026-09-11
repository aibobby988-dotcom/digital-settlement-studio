"use client";

import { Printer } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function PrintButton({
  label = "Print / Export PDF",
  onBeforePrint,
}: {
  label?: string;
  onBeforePrint?: () => void;
}) {
  return (
    <Button
      variant="secondary"
      size="sm"
      icon={<Printer size={14} />}
      onClick={() => {
        onBeforePrint?.();
        window.setTimeout(() => window.print(), onBeforePrint ? 50 : 0);
      }}
      className="no-print"
    >
      {label}
    </Button>
  );
}
