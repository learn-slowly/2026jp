"use client";

import Link from "next/link";
import type { Policy } from "@/data/policies-province";

const serif = { fontFamily: "var(--font-display-serif)" };

const ACCENT: Record<string, string> = {
  yellow: "border-l-justice-yellow",
  red: "border-l-justice-red",
  green: "border-l-justice-green",
  purple: "border-l-justice-purple",
};

export function PersonaPolicyCard({ policy }: { policy: Policy }) {
  return (
    <Link
      href="/gn"
      className={`block rounded-xl border-2 border-ink/10 border-l-[6px] ${ACCENT[policy.color]} bg-paper px-5 py-4 active:scale-[0.99] transition-transform`}
    >
      <p style={serif} className="text-[17px] font-black leading-tight text-ink">
        {policy.title}
      </p>
      <p className="text-[13px] text-ink/60 mt-1 leading-snug">{policy.summary}</p>
    </Link>
  );
}
