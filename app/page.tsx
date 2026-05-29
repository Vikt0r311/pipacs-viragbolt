import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Clock, ArrowRight, MessageCircle, Star } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Pipacs Virágbolt Pécel — Virágkötészet, Ajándék, Alkotóműhely",
  description:
    "Virágkötészet, egyedi ajándékok és alkotóműhely Pécelen, a Pipacs Virágboltban — Posnyák Klára várja a Szondi utca 53. alatt. Telefon: 06-20/447-4328",
  openGraph: {
    title: "Pipacs Virágbolt Pécel — Virágkötészet, Ajándék, Alkotóműhely",
    description:
      "Virágkötészet, egyedi ajándékok és alkotóműhely Pécelen, a Pipacs Virágboltban.",
    url: "https://pipacsviragbolt.hu",
    images: [
      { url: "/assets/images/hero-bolt-belso.png", width: 1200, height: 630 },
      { url: "/assets/images/hero-csokor-kozel.png", width: 1200, height: 630 },
      { url: "/assets/images/rolam-klara-portre.png", width: 800, height: 1000 },
    ],
  },
};

const businessData = {
  name: "Pipacs Virágbolt",
  description:
    "Virágkötészet, kézműves ajándékok és alkotóműhely Pécelben. Posnyák Klára személyesen fogad a Szondi utca 53. alatt.",
  url: "https://pipacsviragbolt.hu",
  telephone: "+36204474328",
  email: "info@novenyvilag.hu",
  address: {
    streetAddress: "Szondi utca 53.",
    addressLocality: "Pécel",
    postalCode: "2119",
    addressCountry: "HU",
  },
  geo: { latitude: 47.4872, longitude: 19.2578 },
  openingHours: [
    "Mo 12:00-19:00",
    "Tu-Fr 09:00-19:00",
    "Sa-Su 09:00-14:00",
  ],
  priceRange: "$$",
  areaServed: ["Pécel", "Gödöllő", "Isaszeg", "Maglód", "Vecsés", "Gyömrő", "Kistarcsa"],
  sameAs: ["https://www.facebook.com/pipacsviragbolt"],
  type: "Florist" as const,
};

const faqData = [
  {
    question: "Mikor van nyitva a Pipacs Virágbolt Pécelben?",
    answer:
      "Hétfőn 12:00-tól 19:00-ig, kedd-péntek között 09:00-19:00, szombaton és vasárnap 09:00-14:00. A bolt a Szondi utca 53. alatt található Pécelben, a bejárat a Fáy utca felőli kapun van.",
  },
  {
    question: "Kell-e előre rendelni csokrot?",
    answer:
      "Sürgős esetben is érdemes telefonon egyeztetni az aktuális készletről. Különleges alkalmakra (esküvő, rendezvény, kegyeleti megrendelés) előre egyeztetés szükséges.",
  },
  {
    question: "Vállal-e a Pipacs házhozszállítást Pécelre?",
    answer:
      "Igen, virágküldést és házhozszállítást vállalok Pécel területén. A részletek telefonon egyeztethetők: 06-20/447-4328.",
  },
  {
    question: "Milyen alkalmakra kötnek csokrot?",
    answer:
      "Születésnap, névnap, ballagás, esküvő, anyák napja, évforduló, kegyeleti koszorú — és az a 'csak úgy' csokor, ami magától értetődő ajándék. Minden alkalomra.",
  },
  {
    question: "Van-e alkotóműhely a Pipacsban?",
    answer:
      "Igen. A Pipacs alkotóműhelyében kézműves foglalkozások indulnak kezdőknek is. Az aktuális témák és időpontok az Alkotóműhely oldalon, illetve telefonon egyeztethetők.",
  },
];

const servicePaths = [
  {
    slug: "viragaink",
    title: "Csokorkötés, ahogy kell",
    body: "Alkalmi csokrok (születésnapi, ballagási, anyák napi), menyasszonyi csokor, kegyeleti koszorú, asztaldísz — és az a 'csak úgy' csokor, ami magától értetődő ajándék. Bizonytalanság esetén telefonon egyeztethető, mi illik az adott alkalomra.",
    cta: "Telefonos egyeztetés",
    ctaHref: "tel:+36204474328",
    image: "/assets/images/kinalat-virag.png",
    icon: "/assets/icons/svg/icon-bouquet.svg",
    iconAlt: "Csokorkötés ikon",
    label: "Virágkötészet",
  },
  {
    slug: "ajandek",
    title: "Ajándék, ami nem tömegáru",
    body: "Kézzel készített lakásdekoráció, egyedi díszcsomagolás, apró kézműves tárgyak — olyasmi, ami nem bevásárlóközponti tömegáru. Különleges ajándékhoz érdemes személyesen körülnézni.",
    cta: "Cím és nyitvatartás",
    ctaHref: "/kapcsolat",
    image: "/assets/images/kinalat-ajandek.png",
    icon: "/assets/icons/svg/icon-handmade-gift.svg",
    iconAlt: "Kézműves ajándék ikon",
    label: "Ajándék & Kézművesség",
  },
  {
    slug: "alkotomuhely",
    title: "Alkotás a műhelyben",
    body: "A Pipacsban nem csak vásárolni, hanem alkotni is lehet. Baráti, családi vagy kisebb csoportos foglalkozásokhoz telefonos egyeztetés javasolt.",
    cta: "Workshop információk",
    ctaHref: "/alkotomuhely",
    image: "/assets/images/kinalat-workshop.png",
    icon: "/assets/icons/svg/icon-workshop-hands.svg",
    iconAlt: "Alkotóműhely ikon",
    label: "Alkotóműhely",
  },
];

// Poppy botanical SVG — unique decorative motif
function PoppyDecor({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 120 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path
        d="M60 140 C62 110 64 80 60 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M60 110 C48 100 36 92 30 75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M60 90 C72 80 80 70 85 55"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <ellipse cx="42" cy="68" rx="14" ry="20" fill="currentColor" opacity="0.6" transform="rotate(-20 42 68)" />
      <ellipse cx="78" cy="50" rx="14" ry="20" fill="currentColor" opacity="0.6" transform="rotate(15 78 50)" />
      <ellipse cx="55" cy="32" rx="12" ry="18" fill="currentColor" opacity="0.7" />
      <ellipse cx="67" cy="30" rx="12" ry="18" fill="currentColor" opacity="0.7" transform="rotate(25 67 30)" />
      <circle cx="60" cy="38" r="7" fill="currentColor" opacity="0.9" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd business={businessData} faq={faqData} />

      {/* ═══ HERO ═══ */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{ minHeight: "92vh" }}
        aria-label="Hero szekció"
      >
        {/* Background: hero-bolt-belso.png — true full bleed */}
        <div className="absolute inset-0">
          <Image
            src="/assets/images/hero-bolt-belso.png"
            alt="Pipacs Virágbolt belső tere — Pécel"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Overlay: subtle left_light_fade — image visible on both sides */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(250,246,240,0.92) 0%, rgba(250,246,240,0.80) 40%, rgba(250,246,240,0.35) 65%, rgba(250,246,240,0) 85%)",
          }}
        />

        {/* Content */}
        <div className="container-site relative z-10 py-16 md:py-20">
          <div className="max-w-xl">
            {/* Decorative line */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5" style={{ background: "var(--color-primary)" }} />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--color-primary)" }}
              >
                Pécel, Szondi utca 53.
              </span>
            </div>

            <h1
              className="font-bold mb-6 leading-tight"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
                color: "var(--color-text)",
                lineHeight: 1.15,
              }}
            >
              Virág, ajándék, alkotás —{" "}
              <span style={{ color: "var(--color-green)" }}>Pécel közepén</span>
            </h1>

            <p
              className="text-base md:text-lg mb-8 leading-relaxed max-w-lg"
              style={{ color: "#111" }}
            >
              A Pipacsban csokrot kötök, kézzel készített ajándékot választhatsz, és saját kezeddel is
              alkothatsz. Minden alkalomra — személyesen.
            </p>

            {/* Trust bar */}
            <div
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-8 text-sm"
              style={{ color: "#111" }}
            >
              <span className="flex items-center gap-1.5">
                <Clock size={14} style={{ color: "var(--color-green)" }} />
                Kedd–Péntek 9:00–19:00
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} style={{ color: "var(--color-green)" }} />
                Szombat–Vasárnap 9:00–14:00
              </span>
              <span className="flex items-center gap-1.5">
                <Phone size={14} style={{ color: "var(--color-green)" }} />
                06-20/447-4328
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+36204474328"
                className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm btn-primary"
              >
                <Phone size={15} />
                Telefonos egyeztetés
              </a>
              <Link
                href="/kapcsolat"
                className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm btn-outline-dark"
              >
                <MapPin size={15} />
                Cím és nyitvatartás
              </Link>
            </div>
          </div>
        </div>

        {/* Poppy decor — unique visual motif */}
        <div
          className="absolute right-6 bottom-6 hidden xl:block poppy-ink"
          style={{ width: "120px", color: "var(--color-primary)" }}
          aria-hidden="true"
        >
          <PoppyDecor />
        </div>
      </section>

      {/* ═══ KÍNÁLAT — HÁRMAS PROFIL ═══ */}
      <section style={{ background: "var(--color-bg)" }} className="section-py">
        <div className="container-site">
          {/* Section header */}
          <AnimateOnScroll className="mb-12 text-center">
            <div className="divider-botanical mb-5">
              <span
                className="text-sm font-semibold"
                style={{ color: "var(--color-warm)", fontFamily: "var(--font-serif)", fontStyle: "italic" }}
              >
                ✦
              </span>
            </div>
            <h2
              className="font-bold"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                color: "var(--color-green)",
              }}
            >
              Mi vár a Pipacsban?
            </h2>
          </AnimateOnScroll>

          {/* Asymmetric service paths: left (wide) + right (stacked 2) */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Card 1 — Virágkötészet (wide) */}
            <AnimateOnScroll className="lg:col-span-3">
              <div
                className="relative rounded-2xl overflow-hidden group h-full"
                style={{
                  background: "var(--color-bg-subtle)",
                  border: "1px solid var(--color-border)",
                  minHeight: "520px",
                }}
              >
                {/* Image */}
                <div className="relative h-64 lg:h-80 img-hover-scale">
                  <Image
                    src={servicePaths[0].image}
                    alt={servicePaths[0].label}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 60vw, 100vw"
                  />
                </div>
                {/* Text */}
                <div className="p-6 pt-7">
                  <span
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {servicePaths[0].label}
                  </span>
                  <h3
                    className="mt-1 mb-3 font-bold text-xl"
                    style={{ color: "var(--color-green)", fontFamily: "var(--font-serif)" }}
                  >
                    {servicePaths[0].title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
                    {servicePaths[0].body}
                  </p>
                  <a
                    href={servicePaths[0].ctaHref}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-75"
                    style={{ color: "var(--color-primary)" }}
                  >
                    <Phone size={13} />
                    {servicePaths[0].cta}
                  </a>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Right column: Cards 2 + 3 stacked */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {servicePaths.slice(1).map((path, i) => (
                <AnimateOnScroll key={path.slug} delay={0.1 + i * 0.12}>
                  <div
                    className="relative rounded-2xl overflow-hidden group"
                    style={{
                      background: "var(--color-bg-subtle)",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    {/* Image */}
                    <div className="relative h-44 img-hover-scale">
                      <Image
                        src={path.image}
                        alt={path.label}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 40vw, 100vw"
                      />
                    </div>
                    {/* Icon medallion — dark small circle top-left of right cards */}
                    <div
                      className="absolute top-3 left-4 flex items-center justify-center rounded-full shadow-md"
                      style={{
                        width: "60px",
                        height: "60px",
                        background: "rgba(61,107,82,0.88)",
                        border: "2px solid rgba(61,107,82,0.5)",
                      }}
                    >
                      <Image
                        src={path.icon}
                        alt={path.iconAlt}
                        width={34}
                        height={34}
                      />
                    </div>
                    {/* Text */}
                    <div className="p-5 pt-6">
                      <span
                        className="text-xs font-semibold uppercase tracking-widest"
                        style={{ color: "var(--color-primary)" }}
                      >
                        {path.label}
                      </span>
                      <h3
                        className="mt-1 mb-2 font-bold text-lg"
                        style={{ color: "var(--color-green)", fontFamily: "var(--font-serif)" }}
                      >
                        {path.title}
                      </h3>
                      <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--color-text-muted)" }}>
                        {path.body}
                      </p>
                      <Link
                        href={path.ctaHref}
                        className="inline-flex items-center gap-1 text-sm font-semibold transition-opacity hover:opacity-75"
                        style={{ color: "var(--color-primary)" }}
                      >
                        {path.cta}
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ELSŐDLEGES CTA BAND ═══ */}
      <section
        className="relative overflow-hidden"
        aria-label="Kapcsolatfelvétel CTA"
      >
        <div className="absolute inset-0">
          <Image
            src="/assets/images/cta-bg.webp"
            alt=""
            fill
            loading="eager"
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(100deg, rgba(61,107,82,0.55) 0%, rgba(61,107,82,0.38) 50%, rgba(61,107,82,0.2) 100%)",
            }}
          />
        </div>
        <div className="container-site relative z-10 py-16 md:py-20">
          <AnimateOnScroll>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <h2
                  className="font-bold mb-3"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                    color: "#faf6f0",
                  }}
                >
                  Csokor rendelése telefonos egyeztetéssel
                </h2>
                <p className="text-base max-w-lg" style={{ color: "rgba(250,246,240,0.8)" }}>
                  Sürgős rendelésnél vagy bizonytalan elképzelésnél telefonon gyorsan egyeztethető,
                  mi érhető el éppen. A bolt Pécelen, személyesen várja a vásárlókat.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a
                  href="tel:+36204474328"
                  className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm btn-primary"
                >
                  <Phone size={15} />
                  Telefonos egyeztetés
                </a>
                <a
                  href="https://m.me/pipacsviragbolt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm btn-outline"
                >
                  <MessageCircle size={15} />
                  Messenger üzenet
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Poppy decor right */}
        <div
          className="absolute right-8 bottom-0 hidden lg:block poppy-ink"
          style={{ width: "90px", color: "#faf6f0", opacity: 0.08 }}
          aria-hidden="true"
        >
          <PoppyDecor />
        </div>
      </section>

      {/* ═══ RÓLAM — RÖVID ═══ */}
      <section style={{ background: "var(--color-bg-subtle)" }} className="section-py">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Image left */}
            <AnimateOnScroll>
              <div className="relative rounded-2xl overflow-hidden img-hover-scale aspect-[4/5]">
                <Image
                  src="/assets/images/rolam-csokorkotes-kozel.png"
                  alt="Posnyák Klára — virágkötés közben, Pipacs Virágbolt"
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                {/* Személyes bolt label */}
                <div
                  className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{
                    background: "rgba(250,246,240,0.92)",
                    color: "var(--color-green)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  Személyes bolt — Pécel
                </div>
              </div>
            </AnimateOnScroll>

            {/* Text right */}
            <AnimateOnScroll delay={0.15}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-0.5" style={{ background: "var(--color-primary)" }} />
                <span
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "var(--color-primary)" }}
                >
                  Rólam
                </span>
              </div>

              <h2
                className="font-bold mb-5"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  color: "var(--color-green)",
                  lineHeight: 1.2,
                }}
              >
                Klára vagyok — a Pipacs Virágbolt megálmodója
              </h2>

              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "var(--color-text-muted)" }}
              >
                A Pipacs Virágbolt a virágok és a kreativitás találkozásának helye. Egyedi virágkötészeti alkotásokat készítünk, legyen szó alkalmakról, ajándékokról vagy dekorációról.
              </p>
              <p
                className="text-base leading-relaxed mb-7"
                style={{ color: "var(--color-text-muted)" }}
              >
                Kézzel készített ajándékaink személyessé és különlegessé teszik a meglepetéseket, workshopjainkon pedig bárki kipróbálhatja a virágkötés és alkotás örömét – akár kezdőként is.
              </p>

              <Link
                href="/rolam"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-75"
                style={{ color: "var(--color-primary)" }}
              >
                Olvasd el a sztorit
                <ArrowRight size={15} />
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ═══ VÉLEMÉNYEK ═══ */}
      <section style={{ background: "rgba(250,246,240,0.96)" }} className="section-py">
        <div className="container-site">
          <AnimateOnScroll className="mb-10 text-center">
            <div className="divider-botanical mb-5">
              <span
                className="text-sm font-semibold"
                style={{ color: "var(--color-warm)", fontFamily: "var(--font-serif)", fontStyle: "italic" }}
              >
                ✦
              </span>
            </div>
            <h2
              className="font-bold"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                color: "#1c1712",
              }}
            >
              Mit mondanak, akik már jártak nálam
            </h2>
          </AnimateOnScroll>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {([
              {
                quote: "Klári néni mindig pontosan tudja, mit szeretnék — még akkor is, ha én magam nem. Gyönyörű csokrot kötött az anyukám születésnapjára, mindenki odavolt érte.",
                name: "Mária",
                location: "Pécel",
              },
              {
                quote: "Évek óta itt veszem a virágokat minden alkalomra. A bolt hangulata egyedülálló, és amit kézzel készítenek, az tényleg más, mint a szupermarketben kapható.",
                name: "Eszter",
                location: "Gödöllő",
              },
              {
                quote: "Az alkotóműhelyes foglalkozás fantasztikus volt! Semmi előzetes tapasztalatom nem volt, mégis hazahoztam valami igazán szépet. Biztosan visszamegyek.",
                name: "Katalin",
                location: "Isaszeg",
              },
            ] as { quote: string; name: string; location: string }[]).map((item, i) => (
              <StaggerItem key={i}>
                <div
                  className="flex flex-col gap-5 p-7 rounded-2xl h-full"
                  style={{
                    background: "rgba(240,235,226,0.97)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  {/* Stars */}
                  <div className="flex gap-1">
                    {Array(5).fill(0).map((_, j) => (
                      <Star
                        key={j}
                        size={18}
                        style={{ color: "var(--color-warm)" }}
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  {/* Quote */}
                  <div className="flex-1">
                    <div
                      className="text-5xl leading-none mb-2 select-none"
                      style={{ color: "var(--color-primary)", fontFamily: "Georgia, serif", lineHeight: 1 }}
                      aria-hidden="true"
                    >
                      &quot;
                    </div>
                    <p className="text-sm leading-relaxed italic" style={{ color: "#3a2e25" }}>
                      {item.quote}
                    </p>
                  </div>
                  {/* Attribution */}
                  <p
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "#5c4e3f" }}
                  >
                    — {item.name}, {item.location}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
