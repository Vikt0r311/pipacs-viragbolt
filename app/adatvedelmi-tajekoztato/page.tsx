import type { Metadata } from "next";

// TODO: Replace Cégnév
export const metadata: Metadata = {
  title: "Adatvédelmi tájékoztató | Cégnév",
  description: "Adatvédelmi tájékoztató — hogyan kezeljük személyes adatait.",
  robots: { index: false },
};

export default function AdatvedelmiPage() {
  return (
    <div className="section-py">
      <div className="container-site">
        <div className="max-w-3xl">
          <h1
            className="text-3xl font-bold mb-2"
            style={{ color: "var(--color-primary)" }}
          >
            Adatvédelmi tájékoztató
          </h1>
          <p
            className="text-sm mb-10"
            style={{ color: "var(--color-text-muted)" }}
          >
            Utolsó frissítés: TODO: dátum {/* TODO: Add date */}
          </p>

          <div
            className="flex flex-col gap-8 text-sm leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            <section>
              <h2
                className="text-lg font-semibold mb-3"
                style={{ color: "var(--color-text)" }}
              >
                1. Az adatkezelő adatai
              </h2>
              <p>
                TODO: Cégnév, székhely, adószám, e-mail, telefon.
              </p>
            </section>

            <section>
              <h2
                className="text-lg font-semibold mb-3"
                style={{ color: "var(--color-text)" }}
              >
                2. Kezelt személyes adatok köre
              </h2>
              <p>
                TODO: Milyen adatokat gyűjtünk (kapcsolati űrlap: név, e-mail,
                telefon, üzenet; sütik stb.).
              </p>
            </section>

            <section>
              <h2
                className="text-lg font-semibold mb-3"
                style={{ color: "var(--color-text)" }}
              >
                3. Az adatkezelés célja és jogalapja
              </h2>
              <p>
                TODO: Kapcsolatfelvétel céljából, az érintett hozzájárulása
                alapján (GDPR 6. cikk (1) bekezdés a) pont).
              </p>
            </section>

            <section>
              <h2
                className="text-lg font-semibold mb-3"
                style={{ color: "var(--color-text)" }}
              >
                4. Adatmegőrzési idő
              </h2>
              <p>TODO: Meddig tároljuk az adatokat.</p>
            </section>

            <section>
              <h2
                className="text-lg font-semibold mb-3"
                style={{ color: "var(--color-text)" }}
              >
                5. Az érintett jogai
              </h2>
              <p>
                Ön jogosult hozzáférni személyes adataihoz, azok helyesbítését,
                törlését, kezelésük korlátozását kérni, valamint tiltakozni az
                adatkezelés ellen. Kéréseit az alábbi elérhetőségen nyújthatja
                be: TODO: email.
              </p>
            </section>

            <section>
              <h2
                className="text-lg font-semibold mb-3"
                style={{ color: "var(--color-text)" }}
              >
                6. Sütik (cookie-k)
              </h2>
              <p>
                Weboldalunk sütiket használ a jobb felhasználói élmény
                érdekében. A szükséges sütik az oldal működéséhez
                elengedhetetlenek. Hozzájárulás alapján statisztikai és
                marketing sütiket is alkalmazhatunk.
              </p>
            </section>

            <section>
              <h2
                className="text-lg font-semibold mb-3"
                style={{ color: "var(--color-text)" }}
              >
                7. Jogorvoslat
              </h2>
              <p>
                Panasszal a Nemzeti Adatvédelmi és Információszabadság Hatósághoz
                fordulhat: NAIH, 1363 Budapest, Pf. 9., ugyfelszolgalat@naih.hu
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
