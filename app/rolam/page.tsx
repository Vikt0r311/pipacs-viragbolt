import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, ArrowRight, Flower, Gift, Scissors } from "lucide-react";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Rólam — Posnyák Árkádiáné (Klári néni) | Pipacs Virágbolt Pécel",
  description:
    "1986 óta vagyok virágüzlet-tulajdonos — Klári néniként ismernek Pécelén. Ismerd meg a Pipacs Virágbolt mögötti sztorit.",
  openGraph: {
    title: "Rólam — Posnyák Árkádiáné | Pipacs Virágbolt Pécel",
    description:
      "1986 óta vagyok virágüzlet-tulajdonos — Klári néniként ismernek Pécelén.",
    url: "https://pipacsviragbolt.hu/rolam",
    images: [{ url: "/assets/images/rolam-klara-portre.png", width: 1200, height: 630 }],
  },
};

const differentiators = [
  {
    icon: "/assets/icons/svg/icon-triple-profile.svg",
    iconAlt: "Hármas profil ikon",
    title: "Hármas profil egy helyen",
    body: "Virágkötészet, ajándéküzlet és kézműves alkotóműhely egy helyen. Nem kell több helyre menni.",
  },
  {
    icon: "/assets/icons/svg/icon-designed-interior.svg",
    iconAlt: "Tervezett belső tér ikon",
    title: "Tervezett, látványos tér",
    body: "Erdős Ibolya és Madarász Péter munkája látszik a bolt minden részletében. Szétnézni is érdemes.",
  },
  {
    icon: "/assets/icons/svg/icon-handmade-selection.svg",
    iconAlt: "Kézzel készített és válogatott ikon",
    title: "Kézzel készített és válogatott",
    body: "Amit a Pipacsban kézműves tárgynak hívunk, azt tényleg kézzel csinálták.",
  },
  {
    icon: "/assets/icons/svg/icon-local-pecel.svg",
    iconAlt: "Helyi Pécel ikon",
    title: "Megközelíthető Pécel szívében",
    body: "Nem kell Budapestre menni egy szép virágért vagy különleges ajándékért.",
  },
];

export default function RolamPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section
        className="relative overflow-hidden flex items-end"
        style={{ minHeight: "70vh" }}
        aria-label="Rólam hero"
      >
        <div className="absolute inset-0">
          <Image
            src="/assets/images/rolam-csokorkotes-kozel.png"
            alt="Posnyák Klára — csokorkötés közben, Pipacs Virágbolt Pécel"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(100deg, rgba(61,107,82,0.9) 0%, rgba(61,107,82,0.6) 45%, rgba(61,107,82,0.15) 100%)",
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
                Posnyák Árkádiáné — Pipacs Virágbolt
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
              Klári néni vagyok —<br />1986 óta kötök virágot
            </h1>
            <p className="text-base md:text-lg mb-7" style={{ color: "rgba(250,246,240,0.85)" }}>
              A Pipacs nem franchise, nem lánc. Személyesen várlak Pécel közepén — ahogy minden
              vevőmet várom, hetedik éve.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+36203443448"
                className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm btn-primary"
              >
                <Phone size={14} />
                Hívj most
              </a>
              <Link
                href="/kapcsolat"
                className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm btn-outline"
              >
                <MapPin size={14} />
                Merre találsz meg
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ A BOLT SZÜLETÉSE ═══ */}
      <section style={{ background: "var(--color-bg)" }} className="section-py">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
            <AnimateOnScroll delay={0.12}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-0.5" style={{ background: "var(--color-primary)" }} />
                <span
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "var(--color-primary)" }}
                >
                  Bemutatkozás
                </span>
              </div>
              <h2
                className="font-bold mb-5"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
                  color: "var(--color-green)",
                  lineHeight: 1.2,
                }}
              >
                Posnyák Árkádiáné vagyok,<br />de kimondva csak Klári néni
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
                1986 óta vagyok virágüzlet-tulajdonos. Volt virágüzletem Cinkotán és Nagytarcsán is —
                jelenleg hetedik éve a Pipacsban igyekszem a kedves vevőim kedvében járni.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
                Szeretem az embereket és a növényeket. Közülük a pipacs a kedvencem — innen ered a
                virágbolt neve is.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
                Mindig igyekszem az újdonságokat vegyíteni a rég megszokott kötészeti elemekkel,
                szívesen valósítok meg egyedi kívánságokat, elképzeléseket.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                Lakásdekorációink nagy részét mi magunk készítjük. Szeretem, hogy a kézműves
                foglalkozások keretében tovább adhatom virágkötészeti tudásomat az alkotni vágyó
                laikusoknak.
              </p>

            </AnimateOnScroll>

            {/* Image right — designer credit chips overlaid on image */}
            <AnimateOnScroll>
              <div className="relative rounded-2xl overflow-hidden img-hover-scale aspect-[4/5]">
                <Image
                  src="/assets/klarineni.jpg"
                  alt="Posnyák Árkádiáné (Klári néni) — Pipacs Virágbolt tulajdonosa"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ═══ MI TESZI KÜLÖNLEGESSÉ ═══ */}
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
              Mi teszi különlegessé a Pipacsot?
            </h2>
          </AnimateOnScroll>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((item, i) => (
              <StaggerItem key={i}>
                <div
                  className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl h-full"
                  style={{
                    background: "var(--color-bg)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  {/* Arch/medallion frame — ívelt felső, arch-kontúros kerettel, meleg háttérszín */}
                  <div
                    className="relative flex items-center justify-center"
                    style={{
                      width: "96px",
                      height: "116px",
                      borderRadius: "48px 48px 16px 16px",
                      background: "rgba(200,133,74,0.14)",
                      border: "2.5px solid rgba(200,133,74,0.45)",
                      boxShadow: "0 4px 20px rgba(200,133,74,0.18)",
                    }}
                  >
                    <Image src={item.icon} alt={item.iconAlt} width={54} height={54} />
                  </div>
                  <h3
                    className="font-bold text-base"
                    style={{ color: "var(--color-green)", fontFamily: "var(--font-serif)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    {item.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══ MIRE VÁLLALKOZOM ═══ */}
      <section style={{ background: "var(--color-bg)" }} className="section-py">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <AnimateOnScroll>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-0.5" style={{ background: "var(--color-primary)" }} />
                <span
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "var(--color-primary)" }}
                >
                  Szolgáltatások
                </span>
              </div>
              <h2
                className="font-bold mb-5"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                  color: "var(--color-green)",
                }}
              >
                Mire vállalkozom?
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "var(--color-text-muted)" }}>
                Alkalmi csokroktól az esküvői dekorációig, kegyeleti koszorútól az asztaldíszig — ha
                van alkalom, van hozzá megoldás. Az alkotóműhelyben foglalkozásokat is tartok.
              </p>
              <p className="text-base mb-7" style={{ color: "var(--color-text-muted)" }}>
                Ha nem tudod, mit kérsz — hívj. Megbeszéljük.
              </p>
              <a
                href="tel:+36203443448"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm btn-primary"
              >
                <Phone size={14} />
                Hívj most · 06-20/344-3448
              </a>
            </AnimateOnScroll>

            {/* Image right */}
            <AnimateOnScroll delay={0.12}>
              <div className="relative rounded-2xl overflow-hidden img-hover-scale aspect-[4/3]">
                <Image
                  src="/assets/images/rolam-csokorkotes-kozel.png"
                  alt="Csokorkötés közelről — Posnyák Klára munkája"
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
                  Hívj most — megbeszéljük
                </h2>
                <p style={{ color: "rgba(250,246,240,0.8)" }} className="text-base max-w-md">
                  Csokrot keresel? Ajándékot? Alkotófoglalkozás érdekel? Egy hívás elég — megbeszéljük.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a
                  href="tel:+36203443448"
                  className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm btn-primary"
                >
                  <Phone size={14} />
                  Hívj most
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══ BELSŐ OLDALAK ═══ */}
      <section style={{ background: "var(--color-bg)" }} className="section-py-sm">
        <div className="container-site">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ color: "var(--color-text-muted)" }}
          >
            Belső oldalak
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                label: "Virágaink — csokrok és virágkötészeti kínálat",
                href: "/viragaink",
                icon: Flower,
              },
              {
                label: "Ajándék & Kézművesség — mit találsz a polcokon",
                href: "/ajandek",
                icon: Gift,
              },
              {
                label: "Alkotóműhely — workshopok és foglalkozások",
                href: "/alkotomuhely",
                icon: Scissors,
              },
            ].map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 px-5 py-4 rounded-xl transition-colors group"
                  style={{
                    background: "var(--color-bg-subtle)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text-muted)",
                  }}
                >
                  <Icon size={16} style={{ color: "var(--color-primary)", flexShrink: 0 }} />
                  <span className="text-sm font-medium flex-1 group-hover:text-[var(--color-green)] transition-colors">
                    {link.label}
                  </span>
                  <ArrowRight size={15} style={{ color: "var(--color-primary)", flexShrink: 0 }} />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
