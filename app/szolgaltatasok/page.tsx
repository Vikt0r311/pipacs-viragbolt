import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Szolgáltatások Pécelen | Pipacs Virágbolt",
  description:
    "Virágkötészet, kézműves ajándékok, díszcsomagolás és alkotóműhely Pécelen, a Pipacs Virágboltban.",
  openGraph: {
    title: "Szolgáltatások | Pipacs Virágbolt Pécel",
    description:
      "Virágkötészet, ajándékok és alkotóműhely Pécelen, személyes egyeztetéssel.",
    images: [{ url: "/assets/images/viragaink-hero.png", width: 1200, height: 630 }],
    url: "https://pipacsviragbolt.hu/szolgaltatasok",
  },
};

const services = [
  {
    id: "alkalmi-csokrok",
    title: "Alkalmi csokrok",
    subtitle: "Születésnap · Névnap · Ballagás · Anyák napja",
    paragraphs: [
      "Friss, az alkalomhoz illő csokrokat készítünk születésnapra, névnapra, ballagásra, anyák napjára vagy egyszerűen csak úgy.",
      "Ha nem tudod pontosan, milyen stílus, méret vagy ár lenne jó, telefonon gyorsan egyeztethetjük a lehetőségeket.",
    ],
    specs: [
      "Személyes egyeztetés",
      "Alkalomhoz illő összeállítás",
      "Napi készlethez igazodó javaslatok",
      "Átvétel Pécelen, a Szondi utcában",
    ],
    image: "/assets/images/viragaink-alkalmak.png",
    imageAlt: "Alkalmi csokrok a Pipacs Virágboltban",
  },
  {
    id: "eskuvoi-viragok",
    title: "Esküvői virágok és dekoráció",
    subtitle: "Menyasszonyi csokor · Kitűző · Asztaldísz",
    paragraphs: [
      "Esküvőre menyasszonyi csokrot, kitűzőt, autódíszt, asztaldíszt és térdekorációt is készítünk.",
      "Az esküvői virágoknál előzetes egyeztetés szükséges, hogy a színek, mennyiségek és határidők időben összeálljanak.",
    ],
    specs: [
      "Előzetes időpont-egyeztetés",
      "Stílushoz és helyszínhez igazított virágok",
      "Menyasszonyi csokor és kiegészítők",
      "Rendezvényi asztaldíszek",
    ],
    image: "/assets/images/viragaink-eskuvo.png",
    imageAlt: "Esküvői virágdekoráció a Pipacs Virágboltból",
  },
  {
    id: "kegyeleti-viragok",
    title: "Kegyeleti koszorú és csokor",
    subtitle: "Koszorú · Sírcsokor · Diszkrét egyeztetés",
    paragraphs: [
      "Kegyeleti alkalmakra koszorút és csokrot készítünk visszafogott, az alkalomhoz méltó összeállításban.",
      "Ilyenkor a gyors, egyértelmű egyeztetés számít a legtöbbet, ezért érdemes telefonon keresni minket.",
    ],
    specs: [
      "Koszorúk és kegyeleti csokrok",
      "Feliratszalag egyeztetéssel",
      "Telefonos pontosítás",
    ],
    image: "/assets/images/viragaink-kegyeleti.png",
    imageAlt: "Kegyeleti virágok és koszorúk",
  },
  {
    id: "kezmuves-ajandekok",
    title: "Kézműves ajándékok és díszcsomagolás",
    subtitle: "Ajándék · Lakásdekoráció · Csomagolás",
    paragraphs: [
      "A virágok mellett kézzel készített lakásdekorációkat, ajándéktárgyakat és gondosan válogatott különlegességeket találsz a boltban.",
      "Ha virágot vagy ajándékot szeretnél szépen átadni, díszcsomagolásban is segítünk.",
    ],
    specs: [
      "Helyben válogatható ajándékok",
      "Kézzel készített dekorációk",
      "Egyedi díszcsomagolás",
    ],
    image: "/assets/images/ajandek-termekek.png",
    imageAlt: "Kézműves ajándékok a Pipacs Virágboltban",
  },
  {
    id: "alkotomuhely",
    title: "Alkotóműhely",
    subtitle: "Workshop · Kézműves foglalkozás · Közös készítés",
    paragraphs: [
      "A Pipacs alkotóműhelyében kézműves foglalkozásokon lehet részt venni, egyéni érdeklődőknek és kisebb csoportoknak is.",
      "Az aktuális témákról, időpontokról és férőhelyekről telefonon vagy Messengeren érdemes érdeklődni.",
    ],
    specs: [
      "Kézműves témák",
      "Kisebb csoportos alkalmak",
      "Előzetes érdeklődés alapján",
    ],
    image: "/assets/images/alkotomuhely-csoport.png",
    imageAlt: "Alkotóműhely a Pipacs Virágboltban",
  },
];

export default function SzolgaltatasokPage() {
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
            Szolgáltatásaink{" "}
            <span style={{ color: "var(--color-primary)" }}>Pécelen</span>
          </h1>
          <p className="text-base md:text-lg max-w-2xl" style={{ color: "var(--color-text-muted)" }}>
            Virágkötészet, kézműves ajándékok, díszcsomagolás és alkotóműhely a Pipacs
            Virágboltban, Pécelen.
          </p>
        </div>
      </section>

      {/* Services */}
      {services.map((service, i) => (
        <section
          key={service.id}
          className="section-py"
          style={{ background: i % 2 === 0 ? "var(--color-bg)" : "var(--color-bg-subtle)" }}
        >
          <div className="container-site">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
              {/* Text — 7 cols, alternating order */}
              <AnimateOnScroll
                className={`md:col-span-7 ${i % 2 === 1 ? "md:order-2" : ""}`}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: "var(--color-primary)" }}
                >
                  {service.subtitle}
                </p>
                <h2
                  className="font-bold mb-5"
                  style={{
                    fontSize: "clamp(1.4rem, 3vw, 2rem)",
                    color: "var(--color-text)",
                    lineHeight: 1.15,
                  }}
                >
                  {service.title}
                </h2>
                {service.paragraphs.map((para, j) => (
                  <p
                    key={j}
                    className="text-sm md:text-base leading-relaxed mb-4"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {para}
                  </p>
                ))}
                <div className="mt-6 flex flex-col gap-2.5">
                  {service.specs.map((spec, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: "var(--color-primary)" }}
                      />
                      <span className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                        {spec}
                      </span>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll
                className={`md:col-span-5 ${i % 2 === 1 ? "md:order-1" : ""}`}
                delay={0.15}
              >
                <div
                  className="relative w-full rounded-md overflow-hidden"
                  style={{
                    aspectRatio: "4/3",
                    background: "var(--color-bg-subtle)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 42vw, 100vw"
                  />
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
      ))}

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
                Tervezzen velünk —{" "}
                <span style={{ color: "var(--color-primary)" }}>egyeztessünk!</span>
              </h2>
              <p className="text-base mb-8 max-w-xl" style={{ color: "var(--color-text-muted)" }}>
                Csokor, esküvői virág, kegyeleti koszorú, ajándék vagy workshop kapcsán telefonon
                tudunk a leggyorsabban egyeztetni.
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
