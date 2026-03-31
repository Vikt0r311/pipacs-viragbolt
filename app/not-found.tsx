import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Az oldal nem található | Cégnév", // TODO: Replace Cégnév
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-32 px-6 text-center">
      <p
        className="text-8xl font-black mb-4 leading-none"
        style={{ color: "var(--color-border-strong)" }}
      >
        404
      </p>
      <h1
        className="text-2xl md:text-3xl font-bold mb-4"
        style={{ color: "var(--color-primary)" }}
      >
        Ez az oldal nem található
      </h1>
      <p
        className="text-base mb-10 max-w-md leading-relaxed"
        style={{ color: "var(--color-text-muted)" }}
      >
        A keresett oldal nem létezik, vagy áthelyezték. Nézze meg a többi
        oldalunkat!
      </p>

      <div className="flex flex-wrap gap-3 justify-center">
        <Link
          href="/"
          className="px-6 py-2.5 rounded-md font-semibold text-sm transition-colors"
          style={{
            background: "var(--color-primary)",
            color: "var(--color-text-inverse)",
          }}
        >
          Főoldal
        </Link>
        <Link
          href="/szolgaltatasok"
          className="px-6 py-2.5 rounded-md font-semibold text-sm border transition-colors"
          style={{
            color: "var(--color-primary)",
            borderColor: "var(--color-border-strong)",
          }}
        >
          Szolgáltatások
        </Link>
        <Link
          href="/kapcsolat"
          className="px-6 py-2.5 rounded-md font-semibold text-sm border transition-colors"
          style={{
            color: "var(--color-primary)",
            borderColor: "var(--color-border-strong)",
          }}
        >
          Kapcsolat
        </Link>
      </div>
    </div>
  );
}
