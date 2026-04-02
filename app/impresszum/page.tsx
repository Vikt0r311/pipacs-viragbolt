import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impresszum",
  description:
    "Virág Gábor Építő Bt. impresszuma — céges adatok, tárhelyszolgáltató, ügyvezető.",
  openGraph: {
    title: "Impresszum",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    url: "https://www.viragepito.hu/impresszum",
  },
};

const rows = [
  { label: "Cégnév", value: "Virág Gábor Építő Betéti Társaság" },
  { label: "Rövid név", value: "Virág Gábor Építő Bt." },
  { label: "Székhely", value: "8225 Szentkirályszabadja, Gárdonyi utca 5." },
  { label: "Adószám", value: "29217731-2-19" },
  { label: "Cégjegyzékszám", value: "19-06-510279" },
  { label: "Bejegyző bíróság", value: "Veszprémi Törvényszék Cégbírósága" },
  { label: "Alapítás dátuma", value: "2021. április 27." },
  { label: "Ügyvezető", value: "Virágné Mátyás Mónika" },
  { label: "Telefon", value: "06-30/685-7901" },
  { label: "E-mail", value: "viraggabi23@gmail.com" },
  { label: "TEÁOR", value: "4100 – Lakó- és nem lakóépület építése" },
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
