import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Flower, Gift, HeartHandshake } from "lucide-react";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Rólunk | Pipacs Virágbolt Pécel",
  description:
    "Ismerd meg a Pipacs Virágboltot Pécelen: virágkötészet, kézműves ajándékok és alkotóműhely a Szondi utca 53. alatt.",
  openGraph: {
    title: "Rólunk | Pipacs Virágbolt Pécel",
    description:
      "Virágkötészet, kézműves ajándékok és alkotóműhely Pécelen, a Pipacs Virágboltban.",
    images: [{ url: "/assets/images/rolam-bolt-ter.png", width: 1200, height: 630 }],
    url: "https://pipacsviragbolt.hu/rolunk",
  },
};

const values = [
  {
    icon: Flower,
    title: "Személyes virágkötészet",
    description: "Az alkalomhoz, a stílushoz és a kerethez igazítjuk a csokrot, koszorút vagy dekorációt.",
  },
  {
    icon: Gift,
    title: "Válogatott ajándékok",
    description: "Kézzel készített és gondosan kiválasztott tárgyakat tartunk, nem tömegáru jellegű kínálatot.",
  },
  {
    icon: HeartHandshake,
    title: "Helyi, közvetlen hang",
    description: "Telefonon vagy személyesen gyorsan egyeztethető, mire van szükséged és mi érhető el éppen.",
  },
];

export default function RolunkPage() {
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
            Rólunk —{" "}
            <span style={{ color: "var(--color-primary)" }}>Pécelen</span>
          </h1>
          <p className="text-base md:text-lg max-w-2xl" style={{ color: "var(--color-text-muted)" }}>
            A Pipacs Virágbolt Pécelen, a Szondi utca 53. alatt vár virággal, ajándékkal és
            alkotóműhellyel.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section style={{ background: "var(--color-bg)" }} className="section-py">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
            {/* Text — 7 cols */}
            <AnimateOnScroll className="md:col-span-7">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "var(--color-primary)" }}
              >
                Cégünkről
              </p>
              <h2
                className="font-bold mb-6"
                style={{
                  fontSize: "clamp(1.4rem, 3vw, 2rem)",
                  color: "var(--color-text)",
                  lineHeight: 1.15,
                }}
              >
                Virágbolt, ajándéküzlet és alkotóműhely egy helyen
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
                A Pipacsban a virágkötészet a kiindulópont: alkalmi csokrok, esküvői virágok,
                kegyeleti koszorúk, asztaldíszek és rendezvényi dekorációk készülnek előzetes
                egyeztetéssel vagy a napi készlethez igazodva.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
                A bolt kínálatát kézműves ajándékok és lakásdekorációk egészítik ki. A cél az, hogy
                ne csak egy csokorért lehessen betérni, hanem akkor is, ha valaki személyesebb,
                helyben válogatott ajándékot keres.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                Az alkotóműhely a Pipacs harmadik arca: kézműves foglalkozások, közös készítés és
                virágkötészeti tapasztalat azoknak, akik nemcsak vásárolni, hanem alkotni is
                szeretnének.
              </p>
            </AnimateOnScroll>

            {/* Sidebar — 5 cols */}
            <AnimateOnScroll className="md:col-span-5" delay={0.15}>
              <div
                className="relative w-full rounded-md mb-4 overflow-hidden"
                style={{
                  aspectRatio: "3/4",
                  background: "var(--color-bg-subtle)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <Image
                  src="/assets/images/rolam-bolt-ter.png"
                  alt="A Pipacs Virágbolt belső tere Pécelen"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 42vw, 100vw"
                />
              </div>

              {/* Quick facts */}
              <div
                className="p-5 rounded-md"
                style={{ background: "var(--color-bg-subtle)", border: "1px solid var(--color-border)" }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Helyszín", value: "Pécel" },
                    { label: "Cím", value: "Szondi utca 53." },
                    { label: "Profil", value: "Virág és ajándék" },
                    { label: "Elérés", value: "06-20/344-3448" },
                  ].map((fact, i) => (
                    <div key={i}>
                      <div className="text-xs" style={{ color: "var(--color-text-light)" }}>
                        {fact.label}
                      </div>
                      <div className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>
                        {fact.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: "var(--color-bg-subtle)" }} className="section-py">
        <div className="container-site">
          <AnimateOnScroll className="mb-12">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--color-primary)" }}
            >
              Értékeink
            </p>
            <h2
              className="font-black uppercase"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                color: "var(--color-text)",
                lineHeight: 1.1,
              }}
            >
              Amire{" "}
              <span style={{ color: "var(--color-primary)" }}>büszkék vagyunk</span>
            </h2>
          </AnimateOnScroll>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <StaggerItem key={i}>
                  <div
                    className="h-full p-8 rounded-xl"
                    style={{
                      background: "var(--color-bg)",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    <div
                      className="w-12 h-12 flex items-center justify-center rounded-md mb-5"
                      style={{ background: "rgba(37,99,235,0.1)", color: "var(--color-primary)" }}
                    >
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: "var(--color-text)" }}>
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                      {value.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--color-bg)" }} className="section-py">
        <div className="container-site">
          <AnimateOnScroll>
            <div
              className="p-10 md:p-16 rounded-xl"
              style={{
                background: "var(--color-bg-subtle)",
                border: "1px solid var(--color-border)",
                borderLeftWidth: "4px",
                borderLeftColor: "var(--color-primary)",
              }}
            >
              <h2
                className="font-black uppercase mb-4"
                style={{
                  fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)",
                  letterSpacing: "-0.02em",
                  color: "var(--color-text)",
                  lineHeight: 1.1,
                }}
              >
                Dolgozzunk együtt —{" "}
                <span style={{ color: "var(--color-primary)" }}>egyeztessünk!</span>
              </h2>
              <p className="text-base mb-8 max-w-xl" style={{ color: "var(--color-text-muted)" }}>
                Csokor, esküvői virág, kegyeleti koszorú vagy workshop kapcsán telefonon tudunk a
                leggyorsabban egyeztetni.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+36203443448" className="px-7 py-3.5 rounded-md font-semibold text-sm btn-primary">
                  Hívj most
                </a>
                <Link href="/kapcsolat" className="px-7 py-3.5 rounded-md font-semibold text-sm border transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]" style={{ color: "var(--color-text-muted)", borderColor: "var(--color-border-strong)" }}>
                  Kapcsolat
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
