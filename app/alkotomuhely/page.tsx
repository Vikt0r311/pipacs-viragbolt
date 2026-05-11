import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Clock, CheckCircle, Heart, ArrowRight } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Alkotóműhely Pécel — Kézműves Workshop | Pipacs Virágbolt",
  description:
    "Kézműves alkotófoglalkozások Pécelből — a Pipacs Virágboltban nem csak vásárolni, hanem alkotni is lehet. Hívj: 06-20/344-3448",
  openGraph: {
    title: "Alkotóműhely Pécel — Kézműves Workshop | Pipacs Virágbolt",
    description:
      "Kézműves alkotófoglalkozások Pécelből — a Pipacs Virágboltban nem csak vásárolni, hanem alkotni is lehet.",
    url: "https://pipacsviragbolt.hu/alkotomuhely",
    images: [{ url: "/assets/images/alkotomuhely-folyamat.png", width: 1200, height: 630 }],
  },
};

const programs = [
  {
    title: "Koszorúkötés",
    body: "Megmutatom, hogyan kell — te csinálod.",
    image: "/assets/images/alkotomuhely-folyamat.png",
    icon: "/assets/icons/svg/icon-wreath-workshop.svg",
    iconAlt: "Koszorúkötés ikon",
  },
  {
    title: "Virágkötő foglalkozás",
    body: "Csokorkötés, az alapoktól. Alkalomra, saját kezűleg — megmutatom, hogyan csináljuk.",
    image: "/assets/images/alkotomuhely-folyamat.png",
    icon: "/assets/icons/svg/icon-flower-workshop.svg",
    iconAlt: "Virágkötő foglalkozás ikon",
  },
  {
    title: "Díszcsomagolás és ajándékkészítés",
    body: "Saját kezű munka — hívj a 06-20/344-3448-as számon, és megbeszéljük a részleteket.",
    image: "/assets/images/alkotomuhely-csoport.png",
    icon: "/assets/icons/svg/icon-gift-workshop.svg",
    iconAlt: "Ajándékkészítés ikon",
  },
  {
    title: "Csoportos alkotóprogram",
    body: "Barátnőknek, pároknak, anyáknak és gyerekeknek együtt.",
    image: "/assets/images/alkotomuhely-csoport.png",
    icon: "/assets/icons/svg/icon-group-workshop.svg",
    iconAlt: "Csoportos workshop ikon",
  },
];

const audience = [
  "Azoknak, akik valami egyedit szeretnének csinálni saját kezükkel",
  "Barátnőknek, pároknak, anyáknak és gyerekeknek együtt",
  "Mindenkinek, aki kíváncsi, hogyan kötünk mi virágot",
];

const faqItems = [
  {
    question: "Kell előzetes tapasztalat?",
    answer:
      "Nem. Megmutatom lépésről lépésre — ha soha nem csináltad, akkor is ott leszek melletted.",
  },
  {
    question: "Hány fő vehet részt egyszerre?",
    answer:
      "A csoportlétszám és az aktuális foglalkozások részleteiért hívj a 06-20/344-3448-as számon.",
  },
  {
    question: "Mennyibe kerül?",
    answer:
      "A foglalkozás árát az alkalom típusa és a szükséges anyagok befolyásolják. A pontos részletekért hívj.",
  },
  {
    question: "Hogyan jelentkezem?",
    answer:
      "Hívj a 06-20/344-3448-as számon, és megbeszéljük a részleteket. Nincs bonyolult foglalási folyamat.",
  },
];

export default function AlkotomuhelyPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section
        className="relative overflow-hidden flex items-end"
        style={{ minHeight: "70vh" }}
        aria-label="Alkotóműhely hero"
      >
        <div className="absolute inset-0">
          <Image
            src="/assets/images/alkotomuhely-folyamat.png"
            alt="Kézműves alkotás a Pipacs Virágbolt műhelyében — Pécel"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(100deg, rgba(26,58,42,0.72) 0%, rgba(26,58,42,0.5) 45%, rgba(26,58,42,0.18) 100%)",
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
                Alkotóműhely — Pécel
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
              Gyere alkotni —<br />nem csak vásárolni
            </h1>
            <p className="text-base md:text-lg mb-7" style={{ color: "rgba(250,246,240,0.85)" }}>
              A Pipacs alkotóműhelye azoknak szól, akik nem csak megvenni, hanem saját kezükkel
              létrehozni is szeretnének valamit.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+36203443448"
                className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm btn-primary"
              >
                <Phone size={14} />
                Foglalj helyet a workshopra
              </a>
              <div className="flex flex-col gap-1">
                <span className="flex items-center gap-1.5 text-sm" style={{ color: "rgba(250,246,240,0.7)" }}>
                  <MapPin size={13} />
                  Pécel, Szondi utca 53.
                </span>
                <span className="flex items-center gap-1.5 text-sm" style={{ color: "rgba(250,246,240,0.7)" }}>
                  <Clock size={13} />
                  Kedd–Péntek 9:00–19:00
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ RÖVID BEVEZETŐ ═══ */}
      <section style={{ background: "var(--color-bg)" }} className="section-py">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <AnimateOnScroll>
              <h2
                className="font-bold mb-5"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                  color: "var(--color-green)",
                }}
              >
                Alkoss velünk egy különleges helyen!
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
                Az Alkotóműhely a Pipacs Virágboltban egy különleges tér, ahol nem egy tanfolyamra
                jársz, hanem alkotsz. Kötetlenebb — megmutatom, hogyan kell, és te csinálod.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                Egyedül vagy barátnőddel, gyerekkel, csoportban — Mindig szuper kikapcsolódás alkotni.
              </p>
              <p
                className="mt-4 text-sm italic"
                style={{ color: "var(--color-primary)" }}
              >
                Megmutatom, hogyan kell — te csinálod.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.12}>
              <div className="relative rounded-2xl overflow-hidden img-hover-scale aspect-[4/3]">
                <Image
                  src="/assets/images/alkotomuhely-folyamat.png"
                  alt="Alkotás a Pipacs Virágbolt műhelyében"
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ═══ FOGLALKOZÁSOK ═══ */}
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
              Milyen foglalkozások vannak?
            </h2>
            <p className="mt-3 text-sm max-w-xl mx-auto" style={{ color: "var(--color-text-muted)" }}>
              Hívj, és megbeszéljük, mi van éppen, mi kell, és mikor gyere.
            </p>
          </AnimateOnScroll>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((prog, i) => (
              <StaggerItem key={i}>
                <div
                  className="rounded-2xl overflow-hidden h-full flex flex-col"
                  style={{
                    background: "var(--color-bg)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  {/* Photo at top (image_card treatment) */}
                  <div className="relative h-48 img-hover-scale">
                    <Image
                      src={prog.image}
                      alt={prog.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                    {/* Icon badge overlay — kiemelt méret */}
                    <div
                      className="absolute bottom-4 left-4 flex items-center justify-center shadow-xl"
                      style={{
                        width: "68px",
                        height: "68px",
                        borderRadius: "34px",
                        background: "rgba(250,246,240,0.97)",
                        border: "2.5px solid rgba(200,133,74,0.5)",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      <Image src={prog.icon} alt={prog.iconAlt} width={40} height={40} />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3
                      className="font-bold text-base mb-2"
                      style={{ color: "var(--color-green)", fontFamily: "var(--font-serif)" }}
                    >
                      {prog.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "var(--color-text-muted)" }}>
                      {prog.body}
                    </p>
                    <a
                      href="tel:+36203443448"
                      className="inline-flex items-center gap-1 text-sm font-semibold transition-opacity hover:opacity-75 mt-auto"
                      style={{ color: "var(--color-primary)" }}
                    >
                      <Phone size={12} />
                      Érdeklődjél
                    </a>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimateOnScroll className="mt-8 text-center">
            <div
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm"
              style={{
                background: "rgba(200,133,74,0.12)",
                border: "1px solid rgba(200,133,74,0.3)",
                color: "var(--color-text-muted)",
              }}
            >
              <Heart size={14} style={{ color: "var(--color-warm)" }} />
              Az aktuális foglalkozások időpontjaiért és áráért hívj: 06-20/344-3448
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══ KINEK VALÓ ═══ */}
      <section style={{ background: "var(--color-bg)" }} className="section-py">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <AnimateOnScroll>
              <div className="relative rounded-2xl overflow-hidden img-hover-scale aspect-[4/3]">
                <Image
                  src="/assets/images/alkotomuhely-csoport.png"
                  alt="Csoport alkotás a Pipacs Virágbolt műhelyében"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.12}>
              <h2
                className="font-bold mb-6"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                  color: "var(--color-green)",
                }}
              >
                Kinek való az alkotóműhely?
              </h2>
              <ul className="flex flex-col gap-3">
                {audience.map((item, i) => (
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
          </div>
        </div>
      </section>

      {/* ═══ GYIK ═══ */}
      <section style={{ background: "var(--color-bg-subtle)" }} className="section-py">
        <div className="container-site max-w-3xl">
          <AnimateOnScroll className="mb-8">
            <h2
              className="font-bold"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                color: "var(--color-green)",
              }}
            >
              Kérdések és válaszok
            </h2>
          </AnimateOnScroll>
          <FAQAccordion items={faqItems} />
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
                "linear-gradient(100deg, rgba(26,58,42,0.55) 0%, rgba(26,58,42,0.28) 100%)",
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
                  Kíváncsi vagy? Kérdezz bátran.
                </h2>
                <p style={{ color: "rgba(250,246,240,0.8)" }} className="text-base max-w-md">
                  Ha nem egyértelmű, milyen foglalkozás van éppen, mikor, mennyibe kerül — hívj. Percek
                  alatt megbeszéljük.
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

      {/* ═══ BELSŐ LINKEK ═══ */}
      <section style={{ background: "var(--color-bg)" }} className="section-py-sm">
        <div className="container-site">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Ajándék & Kézművesség — alkotóink termékei", href: "/ajandek" },
              { label: "Rólam — ki vezeti az alkotóműhelyt", href: "/rolam" },
              { label: "Kapcsolat — hogyan találsz meg minket", href: "/kapcsolat" },
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
