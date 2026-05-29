import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Kézműves Ajándék Pécel — Egyedi Ajándéktárgyak | Pipacs",
  description:
    "Nem tömegáru — kézzel készített lakásdekoráció, egyedi ajándéktárgyak és díszcsomagolás Pécelről. Pipacs Virágbolt, Szondi utca 53.",
  openGraph: {
    title: "Kézműves Ajándék Pécel — Egyedi Ajándéktárgyak | Pipacs",
    description:
      "Nem tömegáru — kézzel készített lakásdekoráció, egyedi ajándéktárgyak és díszcsomagolás Pécelről.",
    url: "https://pipacsviragbolt.hu/ajandek",
    images: [{ url: "/assets/images/ajandek-termekek.png", width: 1200, height: 630 }],
  },
};

const categories = [
  {
    title: "Kézzel készített lakásdekoráció",
    body: "Apróbb tárgyak, amelyek különlegessé tesznek egy polcot, egy asztalt, egy sarkot. Nem gyári, nem sorozat — kézzel csinálták.",
    image: "/assets/images/ajandek-termekek.png",
    icon: "/assets/icons/svg/icon-handmade-decor.svg",
    iconAlt: "Kézzel készített dekoráció ikon",
  },
  {
    title: "Egyedi díszcsomagolás",
    body: "Virág vagy ajándék vásárlásához egyedi díszcsomagolás is kérhető. Egyedi, nem dobozos.",
    image: "/assets/images/ajandek-csomagolas.png",
    icon: "/assets/icons/svg/icon-ribbon-wrap.svg",
    iconAlt: "Díszcsomagolás ikon",
  },
  {
    title: "Ajándéktárgyak különleges alkalmakra",
    body: "Olyasmi, ami nem kapható minden sarkon. Különleges alkalmakra, születésnapra, névnapra vagy karácsonyra is érdemes körülnézni.",
    image: "/assets/images/ajandek-csomagolas.png",
    icon: "/assets/icons/svg/icon-occasion-gift.svg",
    iconAlt: "Ajándéktárgy ikon",
  },
  {
    title: "Virág szálas gyertya, kézzel készítve",
    body: "Egyedi ajándéktárgyak gondosan összeválogatott különlegességekből — kézzel, nem gyárilag.",
    image: "/assets/images/ajandek-gyertya.png",
    icon: "/assets/icons/svg/icon-candle-flower.svg",
    iconAlt: "Virágszállás gyertya ikon",
  },
];

const whenToVisit = [
  "Születésnapra, amikor valami egyedibb kell, mint egy sima csokor",
  "Amikor még nem pontos az elképzelés, de különleges ajándék lenne jó",
  "Amikor a csomagolás is számít",
  "Helyi kézműves munkához, nem importált tömegáruhoz",
];

export default function AjandekPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section
        className="relative overflow-hidden flex items-end"
        style={{ minHeight: "70vh" }}
        aria-label="Ajándék hero"
      >
        <div className="absolute inset-0">
          <Image
            src="/assets/images/ajandek-termekek.png"
            alt="Kézzel készített ajándékok a Pipacs Virágboltban — Pécel"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(100deg, rgba(61,107,82,0.72) 0%, rgba(61,107,82,0.5) 45%, rgba(61,107,82,0.18) 100%)",
            }}
          />
        </div>
        <div className="container-site relative z-10 pb-14 pt-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5" style={{ background: "var(--color-warm-light)" }} />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--color-warm-light)" }}
              >
                Kézműves ajándékok Pécelből
              </span>
            </div>
            <h1
              className="font-bold mb-5 leading-tight"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "#faf6f0",
                lineHeight: 1.15,
              }}
            >
              Ajándék, ami nem tömegáru
            </h1>
            <p className="text-base md:text-lg mb-7" style={{ color: "rgba(250,246,240,0.85)" }}>
              Különleges, kézzel készült és nem minden sarkon kapható ajándékok Pécelen, a Pipacsban.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/kapcsolat"
                className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm btn-primary"
              >
                <MapPin size={14} />
                Cím és nyitvatartás
              </Link>
              <span className="flex items-center gap-1.5 text-sm" style={{ color: "rgba(250,246,240,0.7)" }}>
                <Phone size={13} />
                06-20/447-4328
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ RÖVID BEVEZETŐ ═══ */}
      <section style={{ background: "var(--color-bg)" }} className="section-py">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Text left */}
            <AnimateOnScroll>
              <h2
                className="font-bold mb-5"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                  color: "var(--color-green)",
                }}
              >
                Ajándék, ami nem tömegáru
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
                A Pipacs nem csak virágbolt. A polcokon kézzel készített lakásdekorációkat, egyedi
                ajándéktárgyakat és gondosan összeválogatott különlegességeket tartunk.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: "var(--color-text-muted)" }}>
                Minden, ami itt van, azért van itt, mert én magam is szépnek tartom.
              </p>
              <p
                className="text-sm font-medium"
                style={{ color: "var(--color-primary)", fontStyle: "italic" }}
              >
                Pipacs Virágbolt — ajándékok, amelyek nem bevásárlóközponti tömegáruk.
              </p>
            </AnimateOnScroll>
            {/* Image right */}
            <AnimateOnScroll delay={0.12}>
              <div className="relative rounded-2xl overflow-hidden img-hover-scale aspect-[4/3]">
                <Image
                  src="/assets/images/ajandek-termekek.png"
                  alt="Kézzel készített tárgyak a Pipacs Virágboltban"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ═══ KÍNÁLAT ═══ */}
      <section style={{ background: "var(--color-bg-subtle)" }} className="section-py">
        <div className="container-site">
          <AnimateOnScroll className="mb-10 text-center">
            <h2
              className="font-bold"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                color: "var(--color-green)",
              }}
            >
              Kínálatunk
            </h2>
          </AnimateOnScroll>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((cat, i) => (
              <StaggerItem key={i}>
                <div
                  className="rounded-2xl overflow-hidden h-full flex flex-col"
                  style={{
                    background: "var(--color-bg)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <div className="relative h-48 img-hover-scale">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                    {/* Icon medallion — brand pictogram in colored circle, kiemelt méret */}
                    <div
                      className="absolute bottom-4 right-4 flex items-center justify-center shadow-xl"
                      style={{
                        width: "72px",
                        height: "72px",
                        borderRadius: "36px",
                        background: "rgba(250,246,240,0.97)",
                        border: "2.5px solid rgba(200,133,74,0.5)",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      <Image src={cat.icon} alt={cat.iconAlt} width={42} height={42} />
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3
                      className="font-bold text-base mb-2"
                      style={{ color: "var(--color-green)", fontFamily: "var(--font-serif)" }}
                    >
                      {cat.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {cat.body}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══ MIKOR ÉRDEMES ═══ */}
      <section style={{ background: "var(--color-bg)" }} className="section-py">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <AnimateOnScroll>
              <h2
                className="font-bold mb-6"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                  color: "var(--color-green)",
                }}
              >
                Mikor érdemes ide jönni ajándékért?
              </h2>
              <ul className="flex flex-col gap-3">
                {whenToVisit.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "var(--color-text-muted)" }}>
                    <CheckCircle
                      size={17}
                      className="mt-0.5 shrink-0"
                      style={{ color: "var(--color-primary)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.12}>
              <div className="relative rounded-2xl overflow-hidden img-hover-scale aspect-[4/3]">
                <Image
                  src="/assets/images/ajandek-csomagolas.png"
                  alt="Egyedi díszcsomagolás a Pipacs Virágboltban"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ═══ ZÁRÓ CTA BAND ═══ */}
      <section className="relative overflow-hidden">
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
                "linear-gradient(100deg, rgba(61,107,82,0.55) 0%, rgba(61,107,82,0.28) 100%)",
            }}
          />
        </div>
        <div className="container-site relative z-10 py-16">
          <AnimateOnScroll>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <h2
                  className="font-bold mb-3"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                    color: "#faf6f0",
                  }}
                >
                  Személyes válogatás a boltban
                </h2>
                <p style={{ color: "rgba(250,246,240,0.8)" }} className="text-base max-w-md">
                  Az ajándékok a boltban várnak, nem a boltra.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  href="/kapcsolat"
                  className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm btn-primary"
                >
                  <MapPin size={14} />
                  Cím és nyitvatartás
                </Link>
                <a
                  href="tel:+36204474328"
                  className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm btn-outline"
                >
                  <Phone size={14} />
                  Telefonos egyeztetés
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══ BELSŐ LINKEK ═══ */}
      <section style={{ background: "var(--color-bg)" }} className="section-py-sm">
        <div className="container-site">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Virágaink — csokrok az ajándék mellé", href: "/viragaink" },
              { label: "Alkotóműhely — saját készítésű alkalmak", href: "/alkotomuhely" },
              { label: "Kapcsolat — nyitvatartás és térkép", href: "/kapcsolat" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between gap-3 px-5 py-4 rounded-xl transition-colors group"
                style={{
                  background: "var(--color-bg-subtle)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text-muted)",
                }}
              >
                <span className="text-sm font-medium group-hover:text-[var(--color-green)] transition-colors">
                  {link.label}
                </span>
                <ArrowRight size={15} style={{ color: "var(--color-primary)", flexShrink: 0 }} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
