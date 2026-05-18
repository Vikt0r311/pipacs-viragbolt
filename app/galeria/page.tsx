import type { Metadata } from "next";
import Link from "next/link";
import { readdirSync } from "fs";
import { join } from "path";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Virágaink Galériája | Pipacs Virágbolt Pécel",
  description:
    "Csokraink, dekorációink és virágkötészeti alkotásaink galériája. Pipacs Virágbolt, Pécel.",
  openGraph: {
    title: "Virágaink Galériája | Pipacs Virágbolt Pécel",
    description: "Csokraink, dekorációink és virágkötészeti alkotásaink galériája.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    url: "https://www.novenyvilag.hu/galeria",
  },
};

function getGalleryImages(): string[] {
  try {
    const dir = join(process.cwd(), "public", "referencia");
    const files = readdirSync(dir);
    return files
      .filter((f) => /\.(webp|jpg|jpeg|png)$/i.test(f))
      .sort((a, b) => {
        const na = parseInt(a.replace(/\D/g, ""), 10);
        const nb = parseInt(b.replace(/\D/g, ""), 10);
        return na - nb;
      })
      .map((f) => `/referencia/${f}`);
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
            Elkészült{" "}
            <span style={{ color: "var(--color-primary)" }}>Alkotásaim</span>
          </h1>
          <p className="text-base md:text-lg max-w-2xl" style={{ color: "var(--color-text-muted)" }}>
            Elkészült alkotásaim galériája — csokrok, dekorációk és egyedi virágkötészeti munkák a Pipacs Virágboltból.
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
              Szeretne hasonló{" "}
              <span style={{ color: "var(--color-primary)" }}>virágdíszt?</span>
            </h2>
            <p className="text-base mb-8" style={{ color: "var(--color-text-muted)" }}>
              Pécelről és a környező településekről is várjuk megrendeléseit. Vegye fel velünk a kapcsolatot!
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/kapcsolat" className="px-7 py-3.5 rounded-md font-semibold text-sm btn-primary">
                Kapcsolatfelvétel
              </Link>
              <Link
                href="/viragaink"
                className="px-7 py-3.5 rounded-md font-semibold text-sm border transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                style={{ color: "var(--color-text-muted)", borderColor: "var(--color-border-strong)" }}
              >
                Virágaink
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
