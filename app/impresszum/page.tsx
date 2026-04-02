import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impresszum | Cégnév",
  description: "Cégnév impresszuma — céges adatok, tárhelyszolgáltató, ügyvezető.",
  openGraph: {
    title: "Impresszum | Cégnév",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    url: "https://www.example.hu/impresszum",
  },
};

// TODO: Replace all TODO values with real company data
const rows = [
  { label: "Cégnév", value: "TODO Betéti Társaság / Kft. / Zrt." },
  { label: "Rövid név", value: "TODO Bt. / Kft." },
  { label: "Székhely", value: "TODO irányítószám Városnév, Utca neve 1." },
  { label: "Adószám", value: "TODO-TODO-TODO" },
  { label: "Cégjegyzékszám", value: "TODO-TODO-TODO" },
  { label: "Bejegyző bíróság", value: "TODO Törvényszék Cégbírósága" },
  { label: "Alapítás dátuma", value: "TODO" },
  { label: "Ügyvezető", value: "TODO Név" },
  { label: "Telefon", value: "+36 XX XXX XXXX" },
  { label: "E-mail", value: "info@example.hu" },
  { label: "TEÁOR", value: "TODO – TODO tevékenység neve" },
  {
    label: "Tárhelyszolgáltató",
    value: "Netlify Inc., 44 Montgomery Street, Suite 300, San Francisco, CA 94104, USA",
  },
];

export default function ImpresszumPage() {
  return (
    <section
      className="section-py"
      style={{ background: "var(--color-bg)" }}
    >
      <div className="container-site max-w-3xl">
        <div className="w-8 h-0.5 mb-4" style={{ background: "var(--color-primary)" }} />
        <h1
          className="font-black uppercase mb-10"
          style={{
            fontSize: "clamp(1.75rem, 4vw, 3rem)",
            letterSpacing: "-0.02em",
            color: "var(--color-text)",
          }}
        >
          Impresszum
        </h1>

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
