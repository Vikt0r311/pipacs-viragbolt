"use client";

import Link from "next/link";
import { Phone } from "lucide-react";

interface FloatingCTAProps {
  phone?: string;
  label?: string;
  href?: string;
}

export default function FloatingCTA({
  phone,
  label = "Hívjon most!",
  href,
}: FloatingCTAProps) {
  const target = href ?? (phone ? `tel:${phone.replace(/[\s\-\/]/g, "")}` : "/kapcsolat");

  return (
    <div className="md:hidden fixed bottom-5 right-5 z-40">
      <Link
        href={target}
        className="flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm transition-all active:scale-95"
        style={{
          background: "var(--color-primary)",
          color: "var(--color-text-inverse)",
          boxShadow: "var(--shadow-lg)",
        }}
        aria-label={label}
      >
        <Phone size={16} />
        {label}
      </Link>
    </div>
  );
}
