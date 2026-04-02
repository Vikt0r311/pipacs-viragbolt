import type { Metadata } from "next";
import Link from "next/link";
import ConcretePoLine from "@/components/ConcretePoLine";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Galéria — Vasbeton Szerkezeteink Veszprémben",
  description:
    "Vasbeton szerkezeteink galériája — födémek, falak, lépcsők Veszprémben és a Balaton-felvidéken | Virág Gábor Építő Bt.",
  openGraph: {
    title: "Galéria | Virág Gábor Építő Bt.",
    description:
      "Vasbeton szerkezeteink galériája — födémek, falak, lépcsők Veszprémben és a Balaton-felvidéken.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    url: "https://www.viragepito.hu/galeria",
  },
};

// Generate all image paths: Image01–Image09, Image10–Image207
function generateImagePaths(): string[] {
  const paths: string[] = [];
  for (let i = 1; i <= 207; i++) {
    const name = i < 10 ? `Image0${i}` : `Image${i}`;
    paths.push(`/galeria/${name}.webp`);
  }
  return paths;
}

const images = generateImagePaths();

export default function GaleriaPage() {
  return (
    <>
      {/* Page Hero */}
      <section
        className="section-py-sm flex items-end"
        style={{
          background: "#1C1C1C",
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
            Vasbeton Munkáink Galériája —{" "}
            <span style={{ color: "var(--color-primary)" }}>Veszprém és Balaton-felvidék</span>
          </h1>
          <p className="text-base md:text-lg max-w-2xl" style={{ color: "var(--color-text-muted)" }}>
            {images.length} kép elvégzett munkáinkról — monolit vasbeton födémek, falak, lépcsők és egyéb szerkezetek.
          </p>
        </div>
      </section>

      <ConcretePoLine />

      {/* Gallery */}
      <section style={{ background: "var(--color-bg)" }} className="section-py">
        <div className="container-site">
          <GalleryGrid images={images} />
        </div>
      </section>

      <ConcretePoLine />

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
              Veszprémben és a Balaton-felvidéken vállalunk monolit vasbeton munkákat. Kérjen ingyenes ajánlatot!
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/kapcsolat" className="px-7 py-3.5 rounded-md font-semibold text-sm btn-amber">
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
