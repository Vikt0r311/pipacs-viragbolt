import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impresszum | Pipacs Virágbolt",
  description:
    "Pipacs Virágbolt impresszuma — Posnyák Klára egyéni vállalkozó, 2119 Pécel, Szondi utca 53.",
  openGraph: {
    title: "Impresszum | Pipacs Virágbolt",
    url: "https://pipacsviragbolt.hu/impresszum",
  },
  robots: { index: false, follow: false },
};

const rows = [
  { label: "Üzlet neve", value: "Pipacs Virágbolt" },
  { label: "Tulajdonos", value: "Posnyák Klára" },
  { label: "Székhely / üzlet", value: "2119 Pécel, Szondi utca 53." },
  { label: "Bejárat", value: "Fáy utca felőli kapu" },
  { label: "Telefon (mobil)", value: "06-20/447-4328" },
  { label: "Telefon (vezéték)", value: "06-28/740-068" },
  { label: "E-mail", value: "info@novenyvilag.hu" },
  { label: "Facebook", value: "facebook.com/pipacsviragbolt" },
  {
    label: "Tárhelyszolgáltató",
    value: "Netlify Inc., 44 Montgomery Street, Suite 300, San Francisco, CA 94104, USA",
  },
];

export default function ImpresszumPage() {
  return (
    <section className="section-py" style={{ background: "var(--color-bg)" }}>
      <div className="container-site max-w-3xl">
        <div className="w-8 h-0.5 mb-4" style={{ background: "var(--color-primary)" }} />
        <h1
          className="font-bold mb-3"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.75rem, 4vw, 3rem)",
            color: "var(--color-green)",
          }}
        >
          Impresszum
        </h1>
        <p className="text-sm mb-10" style={{ color: "var(--color-text-light)" }}>
          Pipacs Virágbolt · 2119 Pécel, Szondi utca 53.
        </p>

        <div
          className="rounded-xl overflow-hidden"
          style={{ border: "1px solid var(--color-border)" }}
        >
          {rows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-5 gap-4 px-6 py-4"
              style={{
                background: i % 2 === 0 ? "var(--color-bg)" : "var(--color-bg-subtle)",
                borderBottom:
                  i < rows.length - 1 ? "1px solid var(--color-border)" : "none",
              }}
            >
              <span
                className="col-span-2 text-sm font-semibold"
                style={{ color: "var(--color-text-muted)" }}
              >
                {row.label}
              </span>
              <span
                className="col-span-3 text-sm"
                style={{ color: "var(--color-text)" }}
              >
                {row.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
