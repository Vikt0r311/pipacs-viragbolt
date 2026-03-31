import type { Metadata } from "next";

// TODO: Replace Cégnév
export const metadata: Metadata = {
  title: "Impresszum | Cégnév",
  description: "Impresszum — a weboldal üzemeltetőjének adatai.",
  robots: { index: false },
};

export default function ImpresszumPage() {
  return (
    <div className="section-py">
      <div className="container-site">
        <div className="max-w-2xl">
          <h1
            className="text-3xl font-bold mb-8"
            style={{ color: "var(--color-primary)" }}
          >
            Impresszum
          </h1>

          <div
            className="flex flex-col gap-6 text-sm"
            style={{ color: "var(--color-text-muted)" }}
          >
            <section className="flex flex-col gap-1">
              <h2
                className="font-semibold text-base mb-1"
                style={{ color: "var(--color-text)" }}
              >
                A weboldal üzemeltetője
              </h2>
              <p>Cégnév: TODO</p>
              <p>Székhely: TODO</p>
              <p>Adószám: TODO</p>
              <p>Cégjegyzékszám / Nyilvántartási szám: TODO</p>
            </section>

            <section className="flex flex-col gap-1">
              <h2
                className="font-semibold text-base mb-1"
                style={{ color: "var(--color-text)" }}
              >
                Elérhetőség
              </h2>
              <p>
                E-mail:{" "}
                <a
                  href="mailto:info@example.hu" // TODO
                  className="underline"
                  style={{ color: "var(--color-primary)" }}
                >
                  info@example.hu {/* TODO */}
                </a>
              </p>
              <p>Telefon: TODO</p>
            </section>

            <section className="flex flex-col gap-1">
              <h2
                className="font-semibold text-base mb-1"
                style={{ color: "var(--color-text)" }}
              >
                Tárhely-szolgáltató
              </h2>
              <p>Netlify, Inc.</p>
              <p>512 2nd Street, Suite 200, San Francisco, CA 94107</p>
              <p>
                <a
                  href="https://www.netlify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                  style={{ color: "var(--color-primary)" }}
                >
                  www.netlify.com
                </a>
              </p>
            </section>

            <section className="flex flex-col gap-1">
              <h2
                className="font-semibold text-base mb-1"
                style={{ color: "var(--color-text)" }}
              >
                Weboldal készítője
              </h2>
              <p>
                <a
                  href="https://cvmarketing.hu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                  style={{ color: "var(--color-primary)" }}
                >
                  CVMarketing
                </a>
              </p>
            </section>

            <section>
              <h2
                className="font-semibold text-base mb-1"
                style={{ color: "var(--color-text)" }}
              >
                Szerzői jogok
              </h2>
              <p>
                A weboldalon megjelenő tartalmak (szöveg, kép, grafika) szerzői
                jogi védelem alatt állnak. Felhasználásuk kizárólag az
                üzemeltető írásos engedélyével lehetséges.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
