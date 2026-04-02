import type { Metadata } from "next";
import Link from "next/link";
import { readdirSync } from "fs";
import { join } from "path";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Galéria | Cégnév",
  description:
    "Munkáink galériája — elvégzett projektek képei. Cégnév, Városnév.",
  openGraph: {
    title: "Galéria | Cégnév",
    description: "Munkáink galériája — elvégzett projektek képei.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    url: "https://www.example.hu/galeria",
  },
};

function getGalleryImages(): string[] {
  try {
    const galeriaDir = join(process.cwd(), "public", "galeria");
    const files = readdirSync(galeriaDir);
    return files
      .filter((f) => /\.(webp|jpg|jpeg|png)$/i.test(f))
      .map((f) => `/galeria/${f}`);
  } catch {
    return [];
  }
}

export default function GaleriaPage() {
  const images = getGalleryImages();

  return (
    <>
      {/* Page Hero */}
      <section
        className="section-py-sm flex items-end"
        style={{
          background: "var(--color-bg-subtle)",
          borderBottom: "1px solid var(--color-border)",
          paddingTop: "6rem",
        }}
      >
        <div className="container-site">
          <div className="w-8 h-0.5 mb-4" style={{ background: "var(--color-primary)" }} />
          <h1
            className="font-black uppercase mb-4"
            style={{
              fontSize: "clamp(1.75rem, 5vw, 3.5rem)",
              letterSpacing: "-0.02em",
              color: "var(--color-text)",
              lineHeight: 1.05,
            }}
          >
            Munkáink{" "}
            <span style={{ color: "var(--color-primary)" }}>Galériája</span>
          </h1>
          <p className="text-base md:text-lg max-w-2xl" style={{ color: "var(--color-text-muted)" }}>
            {images.length > 0
              ? `${images.length} kép elvégzett munkáinkról.`
              : "Képek hamarosan — a galéria feltöltése folyamatban."}
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section style={{ background: "var(--color-bg)" }} className="section-py">
        <div className="container-site">
          {images.length > 0 ? (
            <GalleryGrid images={images} />
          ) : (
            <div
              className="rounded-xl flex flex-col items-center justify-center gap-4 py-24"
              style={{
                background: "var(--color-bg-subtle)",
                border: "1px solid var(--color-border)",
              }}
            >
              <p className="text-base font-semibold" style={{ color: "var(--color-text-muted)" }}>
                Még nincsenek galéria képek
              </p>
              <p className="text-sm" style={{ color: "var(--color-text-light)" }}>
                Adjon hozzá képeket a <code>/public/galeria/</code> mappához.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--color-bg-subtle)" }} className="section-py">
        <div className="container-site">
          <AnimateOnScroll className="max-w-2xl">
            <h2
              className="font-black uppercase mb-4"
              style={{
                fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)",
                letterSpacing: "-0.02em",
                color: "var(--color-text)",
                lineHeight: 1.1,
              }}
            >
              Érdekli egy{" "}
              <span style={{ color: "var(--color-primary)" }}>hasonló projekt?</span>
            </h2>
            <p className="text-base mb-8" style={{ color: "var(--color-text-muted)" }}>
              Városban és a környező területeken vállalunk munkákat. Kérjen ingyenes ajánlatot!
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/kapcsolat" className="px-7 py-3.5 rounded-md font-semibold text-sm btn-primary">
                Ajánlatot kérek
              </Link>
              <Link
                href="/szolgaltatasok"
                className="px-7 py-3.5 rounded-md font-semibold text-sm border transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                style={{ color: "var(--color-text-muted)", borderColor: "var(--color-border-strong)" }}
              >
                Szolgáltatásaink
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
