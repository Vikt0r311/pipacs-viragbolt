import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adatvédelmi Tájékoztató | Pipacs Virágbolt",
  description:
    "Pipacs Virágbolt adatvédelmi tájékoztatója — GDPR megfelelő adatkezelési tájékoztató. Posnyák Klára egyéni vállalkozó, 2119 Pécel, Szondi utca 53.",
  openGraph: {
    title: "Adatvédelmi Tájékoztató | Pipacs Virágbolt",
    url: "https://pipacsviragbolt.hu/adatvedelmi-tajekoztato",
  },
  robots: { index: false, follow: false },
};

const sections = [
  {
    title: "1. Adatkezelő neve és elérhetőségei",
    content: `Adatkezelő neve: Posnyák Klára (Pipacs Virágbolt)
Székhely / üzlet: 2119 Pécel, Szondi utca 53.
Telefon: 06-20/344-3448
E-mail: info@novenyvilag.hu
Weboldal: pipacsviragbolt.hu`,
  },
  {
    title: "2. Kezelt adatok és az adatkezelés célja",
    content: `Az adatkezelő a következő személyes adatokat kezeli:

• Kapcsolatfelvételi adatok: Neve, e-mail címe, telefonszáma, üzenete — amelyeket kapcsolatfelvétel során ad meg.
• Cél: A megkeresések megválaszolása, ügyféllel való kapcsolattartás.
• Jogalap: Az érintett hozzájárulása (GDPR 6. cikk (1) bekezdés a) pont).`,
  },
  {
    title: "3. Az adatkezelés időtartama",
    content: `A kapcsolatfelvételi adatokat az ügy lezárásáig, de legfeljebb 5 évig kezeljük. A hozzájárulás visszavonása esetén az adatokat haladéktalanul töröljük, kivéve ha jogszabályi kötelezettség az adatok megőrzésére kötelezi az adatkezelőt.`,
  },
  {
    title: "4. Adattovábbítás és adatfeldolgozók",
    content: `Az adatkezelő az Ön személyes adatait harmadik félnek nem adja át marketing vagy egyéb célból. Az adatokat az alábbi adatfeldolgozók kezelhetik:

• Netlify Inc. (tárhelyszolgáltatás) — 44 Montgomery Street, Suite 300, San Francisco, CA 94104, USA. Az adattovábbítás megfelelőségi határozat alapján történik.
• Google LLC (Maps — csak funkcionális célból)`,
  },
  {
    title: "5. Az érintett jogai",
    content: `Az érintett az alábbi jogokkal rendelkezik:

• Hozzáférési jog: Kérheti a kezelt adatai másolatát.
• Helyesbítési jog: Kérheti a pontatlan adatok javítását.
• Törlési jog: Kérheti az adatok törlését ("elfeledtetés joga").
• Adathordozhatósághoz való jog: Kérheti az adatok géppel olvasható formátumban való kiadását.
• Tiltakozási jog: Tiltakozhat az adatkezelés ellen.
• Korlátozási jog: Kérheti az adatkezelés korlátozását.

Ezeket a jogait az adatkezelő e-mail (info@novenyvilag.hu) vagy telefon (06-20/344-3448) útján gyakorolhatja.`,
  },
  {
    title: "6. Sütikre (cookie) vonatkozó tájékoztató",
    content: `Weboldalunk sütiket (cookie-kat) használ. A sütik kis szöveges fájlok, amelyeket a böngésző helyez el az Ön eszközén.

• Szükséges sütik: A weboldal működéséhez elengedhetetlenek, nem tárolnak személyes adatot.
• Elemzési sütik: Csak az Ön explicit hozzájárulásával kerülnek aktiválásra.

Sütibeállításait a weboldalon megjelenő cookie banner segítségével kezelheti.`,
  },
  {
    title: "7. Jogorvoslat",
    content: `Ha úgy érzi, adatkezelési jogait megsértettük, panaszt tehet a Nemzeti Adatvédelmi és Információszabadság Hatóságnál (NAIH):

Cím: 1055 Budapest, Falk Miksa u. 9-11.
Postacím: 1363 Budapest, Pf.: 9.
Telefon: +36 (1) 391-1400
E-mail: ugyfelszolgalat@naih.hu
Weboldal: www.naih.hu`,
  },
  {
    title: "8. Az adatvédelmi tájékoztató módosítása",
    content: `Az adatkezelő fenntartja a jogot a jelen tájékoztató módosítására. A módosításokat a weboldalon közzétesszük. A tájékoztató hatályba lépésének dátuma: 2026. május 8.`,
  },
];

export default function AdatvedelmiPage() {
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
          Adatvédelmi Tájékoztató
        </h1>
        <p className="text-sm mb-10" style={{ color: "var(--color-text-light)" }}>
          Pipacs Virágbolt · Posnyák Klára · Utolsó frissítés: 2026. május 8.
        </p>

        <div className="flex flex-col gap-10">
          {sections.map((section, i) => (
            <div key={i}>
              <h2
                className="font-bold mb-3"
                style={{ fontSize: "1.05rem", color: "var(--color-text)", fontFamily: "var(--font-serif)" }}
              >
                {section.title}
              </h2>
              <div
                className="p-5 rounded-xl"
                style={{
                  background: "var(--color-bg-subtle)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <p
                  className="text-sm leading-relaxed whitespace-pre-line"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
