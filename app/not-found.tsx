import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight, Flower } from "lucide-react";

export const metadata: Metadata = {
  title: "Az oldal nem található | Pipacs Virágbolt",
};

export default function NotFound() {
  return (
    <section
      className="section-py flex items-center justify-center"
      style={{ background: "var(--color-bg)", minHeight: "72vh" }}
    >
      <div className="container-site max-w-2xl text-center">
        {/* Decorative botanical motif */}
        <div className="flex justify-center mb-6" aria-hidden="true">
          <svg
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "64px", height: "64px", opacity: 0.18, color: "var(--color-green)" }}
          >
            <ellipse cx="40" cy="28" rx="10" ry="15" fill="currentColor" />
            <ellipse cx="27" cy="38" rx="10" ry="15" fill="currentColor" transform="rotate(-35 27 38)" />
            <ellipse cx="53" cy="38" rx="10" ry="15" fill="currentColor" transform="rotate(35 53 38)" />
            <circle cx="40" cy="34" r="7" fill="currentColor" opacity="0.9" />
            <path d="M40 56 C40 56 40 70 40 76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>

        {/* 404 number */}
        <div
          className="font-black mb-4 select-none"
          style={{
            fontSize: "clamp(5rem, 18vw, 10rem)",
            color: "rgba(26,58,42,0.08)",
            letterSpacing: "-0.05em",
            lineHeight: 1,
            fontFamily: "var(--font-serif)",
          }}
        >
          404
        </div>

        <div className="w-10 h-0.5 mx-auto mb-6" style={{ background: "var(--color-primary)" }} />

        <h1
          className="font-bold mb-4"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
            color: "var(--color-green)",
          }}
        >
          Ez az oldal nem létezik
        </h1>

        <p className="text-base mb-8 max-w-md mx-auto" style={{ color: "var(--color-text-muted)" }}>
          A keresett oldal eltűnt, vagy sosem létezett. De a virágok, az ajándékok és Klára
          megtalálhatók a Pipacsban — Pécelben, a Szondi utca 53. alatt.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/"
            className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm btn-primary"
          >
            Vissza a főoldalra
            <ArrowRight size={14} />
          </Link>
          <a
            href="tel:+36203443448"
            className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm btn-outline-dark"
          >
            <Phone size={14} />
            Hívj most
          </a>
          <Link
            href="/viragaink"
            className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm"
            style={{
              background: "var(--color-bg-subtle)",
              border: "1px solid var(--color-border)",
              color: "var(--color-text-muted)",
            }}
          >
            <Flower size={14} style={{ color: "var(--color-primary)" }} />
            Virágaink
          </Link>
        </div>
      </div>
    </section>
  );
}
