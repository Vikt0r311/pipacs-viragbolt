import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Az oldal nem található | Virág Gábor Építő Bt.",
};

export default function NotFound() {
  return (
    <section
      className="section-py flex items-center justify-center"
      style={{ background: "var(--color-bg)", minHeight: "70vh" }}
    >
      <div className="container-site max-w-2xl text-center">
        <div
          className="text-8xl font-black mb-6 select-none"
          style={{ color: "rgba(212,147,42,0.15)", letterSpacing: "-0.04em" }}
        >
          404
        </div>
        <div className="w-10 h-0.5 mx-auto mb-6" style={{ background: "var(--color-primary)" }} />
        <h1
          className="font-black uppercase mb-4"
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
            letterSpacing: "-0.02em",
            color: "var(--color-text)",
          }}
        >
          Az oldal nem található
        </h1>
        <p className="text-base mb-10" style={{ color: "var(--color-text-muted)" }}>
          A keresett oldal nem létezik vagy áthelyezésre került. Kérjük, ellenőrizze a
          webcímet, vagy használja az alábbi linkeket.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <Link href="/" className="px-7 py-3.5 rounded-md font-semibold text-sm btn-amber">
            Vissza a főoldalra
          </Link>
          <Link
            href="/kapcsolat"
            className="px-7 py-3.5 rounded-md font-semibold text-sm border transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            style={{ color: "var(--color-text-muted)", borderColor: "var(--color-border-strong)" }}
          >
            Kapcsolat
          </Link>
        </div>

        <a
          href="tel:+36306857901"
          className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-80"
          style={{ color: "var(--color-primary)" }}
        >
          <Phone size={16} />
          06-30/685-7901
        </a>
      </div>
    </section>
  );
}
