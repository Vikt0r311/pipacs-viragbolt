import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Truck, ArrowRight, MessageCircle } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Virágkötészet Pécel — Csokrok, Koszorúk, Esküvői Virágok | Pipacs",
  description:
    "Alkalmi csokroktól esküvői dekorációig, kegyeleti koszorútól asztaldíszig — Pécelben a Pipacsban kötöm, te megkapod. Hívj: 06-20/344-3448",
  openGraph: {
    title: "Virágkötészet Pécel — Csokrok, Koszorúk, Esküvői Virágok | Pipacs",
    description:
      "Alkalmi csokroktól esküvői dekorációig, kegyeleti koszorútól asztaldíszig — Pécelben a Pipacsban.",
    url: "https://pipacsviragbolt.hu/viragaink",
    images: [{ url: "/assets/images/viragaink-hero.png", width: 1200, height: 630 }],
  },
};

const categories = [
  {
    title: "Alkalmi csokrok",
    body: "Születésnap, névnap, anyák napja, ballagás, évforduló, 'csak úgy' ajándék — bármilyen alkalomra. Ha bizonytalan vagy a méretben, árban, stílusban, hívj és megbeszéljük.",
    image: "/assets/images/viragaink-alkalmak.png",
    icon: "/assets/icons/svg/icon-occasion-bouquet.svg",
    iconAlt: "Alkalmi csokor ikon",
    cta: "Hívj, megbeszéljük",
    ctaHref: "tel:+36203443448",
  },
  {
    title: "Menyasszonyi csokor és esküvői virágdekoráció",
    body: "Esküvőre teljes körű virágdekorációt vállalok: menyasszonyi csokor, kitűzők, autódísz, asztaldíszek, tér- és asztaldísz. Esküvői megrendelések előzetes egyeztetéssel.",
    image: "/assets/images/viragaink-eskuvo.png",
    icon: "/assets/icons/svg/icon-wedding-rings.svg",
    iconAlt: "Esküvői virágok ikon",
    cta: "Írj Messengeren",
    ctaHref: "https://m.me/pipacsviragbolt",
    ctaExternal: true,
  },
  {
    title: "Kegyeleti koszorú és csokor",
    body: "Diszkrét, gyors. Ha sürgős, szólj — megoldom.",
    image: "/assets/images/viragaink-kegyeleti.png",
    icon: "/assets/icons/svg/icon-memorial-wreath.svg",
    iconAlt: "Kegyeleti koszorú ikon",
    cta: "Hívj most",
    ctaHref: "tel:+36203443448",
  },
  {
    title: "Asztaldísz és rendezvényi dekoráció",
    body: "Rendezvények, céges események, termek díszítése. Egyeztetés előre szükséges — hívj és megbeszéljük a részleteket.",
    image: "/assets/images/viragaink-rendezveny.png",
    icon: "/assets/icons/svg/icon-table-floral.svg",
    iconAlt: "Asztaldísz ikon",
    cta: "Hívj most",
    ctaHref: "tel:+36203443448",
  },
  {
    title: "Kirakatrendezés",
    body: "Hívj, és megbeszéljük a részleteket.",
    image: "/assets/images/viragaink-kirakat.png",
    icon: "/assets/icons/svg/icon-shop-window.svg",
    iconAlt: "Kirakatrendezés ikon",
    cta: "Érdeklődjél",
    ctaHref: "tel:+36203443448",
  },
];

const faqItems = [
  {
    question: "Előre kell rendelni?",
    answer:
      "Sürgős esetben is segítek — hívj és megbeszéljük, mi van éppen készleten. Különleges alkalmakra (esküvő, rendezvény) előre egyeztetés szükséges.",
  },
  {
    question: "Milyen áron dolgozol?",
    answer:
      "Az árat az alkalom, a virágok és a méret befolyásolja. Ha előre tudni szeretnéd, hívj — percek alatt megbeszéljük.",
  },
  {
    question: "Kiszállítasz Pécelre?",
    answer:
      "Igen, Pécel területén vállalok virágküldést és házhozszállítást. A részletekért hívj a 06-20/344-3448-as számon.",
  },
];

export default function ViragainkPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section
        className="relative overflow-hidden flex items-end"
        style={{ minHeight: "70vh" }}
        aria-label="Virágaink hero"
      >
        <div className="absolute inset-0">
          <Image
            src="/assets/images/viragaink-hero.png"
            alt="Csokorkötés a Pipacs Virágboltban — Pécel"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(100deg, rgba(26,58,42,0.58) 0%, rgba(26,58,42,0.38) 45%, rgba(26,58,42,0.1) 100%)",
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
                Virágkötészet Pécelen
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
              Csokorkötés, ahogy kell —<br />Pécelen
            </h1>
            <p className="text-base md:text-lg mb-7" style={{ color: "rgba(250,246,240,0.85)" }}>
              Minden alkalom más. Születésnap, ballagás, esküvő, búcsú — mindegyikhez más kell.
              Elmondom, mi illik az adott alkalomra és megkötöm azt, amire szükséged van.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+36203443448"
                className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm btn-primary"
              >
                <Phone size={14} />
                Hívj, megbeszéljük
              </a>
              <span className="flex items-center gap-1.5 text-sm" style={{ color: "rgba(250,246,240,0.7)" }}>
                <MapPin size={13} />
                Pécel · 06-20/344-3448
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ RÖVID BEVEZETŐ ═══ */}
      <section style={{ background: "var(--color-bg)" }} className="section-py">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Image left */}
            <AnimateOnScroll>
              <div className="relative rounded-2xl overflow-hidden img-hover-scale aspect-[4/3]">
                <Image
                  src="/assets/images/viragaink-alkalmak.png"
                  alt="Alkalmi csokrok közelről — Pipacs Virágbolt"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
            </AnimateOnScroll>
            {/* Text right */}
            <AnimateOnScroll delay={0.12}>
              <h2
                className="font-bold mb-5"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                  color: "var(--color-green)",
                }}
              >
                Virág, ami rólad szól
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
                Virágkötéssel foglalkozom — ez azt jelenti, hogy nem csak megveszed a virágot, hanem én összerakom azt, ami az adott alkalomhoz illik. Nincs kész sablon, hanem az alkalom és a kért stílus alapján kötöm meg az egyedi virágcsokrot, amire vágysz.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                Ha bizonytalan vagy bármelyik részletben — stílus, méret, ár — hívj. Percek alatt megbeszéljük. Így is lehet virágot venni Pécelen.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ═══ VIRÁGKÍNÁLAT ═══ */}
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
              Virágkínálatunk
            </h2>
          </AnimateOnScroll>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <StaggerItem key={i}>
                <div
                  className="rounded-2xl overflow-hidden h-full flex flex-col"
                  style={{
                    background: "var(--color-bg)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <div className="relative h-44 img-hover-scale">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                    {/* Icon medallion — brand pictogram in light/colored medallion, kiemelt méret */}
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
                    <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "var(--color-text-muted)" }}>
                      {cat.body}
                    </p>
                    {cat.ctaExternal ? (
                      <a
                        href={cat.ctaHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-75"
                        style={{ color: "var(--color-primary)" }}
                      >
                        {cat.cta}
                        <ArrowRight size={13} />
                      </a>
                    ) : (
                      <a
                        href={cat.ctaHref}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-75"
                        style={{ color: "var(--color-primary)" }}
                      >
                        {cat.cta}
                        <ArrowRight size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══ HÁZHOZSZÁLLÍTÁS ═══ */}
      <section style={{ background: "var(--color-bg)" }}>
        <div className="container-site py-10">
          <AnimateOnScroll>
            <div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 rounded-2xl"
              style={{
                background: "var(--color-bg-subtle)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div
                className="icon-circle w-12 h-12 shrink-0"
                style={{ background: "rgba(139,26,26,0.1)" }}
              >
                <Truck size={22} style={{ color: "var(--color-primary)" }} />
              </div>
              <div className="flex-1">
                <h3
                  className="font-bold mb-1"
                  style={{ color: "var(--color-green)", fontFamily: "var(--font-serif)" }}
                >
                  Házhozszállítás Pécelre
                </h3>
                <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                  Virágküldést és házhozszállítást vállalok Pécel területén. A részletekért hívj.
                </p>
              </div>
              <a
                href="tel:+36203443448"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold btn-primary shrink-0"
              >
                <Phone size={13} />
                Hívj most
              </a>
            </div>
          </AnimateOnScroll>
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
              Gyakran kérdezitek
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
                  Csokrot keresel? Hívj most.
                </h2>
                <p style={{ color: "rgba(250,246,240,0.8)" }} className="text-base max-w-md">
                  Pécelről vállalom — hívj, és megbeszéljük, mi illik az alkalmadhoz.
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
              { label: "Rólam — ki köti a csokrokat", href: "/rolam" },
              { label: "Ajándék & Kézművesség", href: "/ajandek" },
              { label: "Kapcsolat — cím, térkép", href: "/kapcsolat" },
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
