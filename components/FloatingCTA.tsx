"use client";

import Link from "next/link";
import { Phone } from "lucide-react";

interface FloatingCTAProps {
  /** Phone number for tel: link — TODO: replace with client phone */
  phone?: string;
  /** Button label */
  label?: string;
  /** Link href — defaults to tel: if phone is set, else /kapcsolat */
  href?: string;
}

export default function FloatingCTA({
  phone, // TODO: Add client phone number
  label = "Hívjon most!",
  href,
}: FloatingCTAProps) {
  const target = href ?? (phone ? `tel:${phone.replace(/\s/g, "")}` : "/kapcsolat");

  return (
    <div className="md:hidden fixed bottom-5 right-5 z-40">
      <Link
        href={target}
        className="flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm shadow-lg transition-transform active:scale-95"
        style={{
          background: "var(--color-secondary)",
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
