import type { Metadata } from "next";
import Image from "next/image";
import { Phone, MessageCircle, Mail, Store, Clock, HeartHandshake, Flower, MapPin, Car, Bus } from "lucide-react";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Kapcsolat — Pipacs Virágbolt Pécel | Szondi utca 53.",
  description:
    "Hívj: 06-20/344-3448 · Pécel, Szondi utca 53. · Kedd–Péntek 9–19, Szombat–Vasárnap 9–14, Hétfőn 12-től · Bejárat: Fáy utca felőli kapu",
  openGraph: {
    title: "Kapcsolat — Pipacs Virágbolt Pécel",
    description:
      "Hívj: 06-20/344-3448 · Pécel, Szondi utca 53. · Kedd–Péntek 9–19, Szombat–Vasárnap 9–14",
    url: "https://pipacsviragbolt.hu/kapcsolat",
    images: [{ url: "/assets/images/kapcsolat-hero.png", width: 1200, height: 630 }],
  },
};

const openingHours = [
  { day: "Hétfő", time: "12:00–19:00" },
  { day: "Kedd", time: "09:00–19:00" },
  { day: "Szerda", time: "09:00–19:00" },
  { day: "Csütörtök", time: "09:00–19:00" },
  { day: "Péntek", time: "09:00–19:00" },
  { day: "Szombat", time: "09:00–14:00" },
  { day: "Vasárnap", time: "09:00–14:00" },
];

const contactMethods = [
  {
    icon: Phone,
    title: "Telefon",
    body: "Ha sürgős, a leggyorsabb a telefon.",
    detail: "06-20/344-3448",
    href: "tel:+36203443448",
    external: false,
  },
  {
    icon: MessageCircle,
    title: "Messenger",
    body: "Írj Messengeren.",
    detail: "Pipacs Virágbolt",
    href: "https://m.me/pipacsviragbolt",
    external: true,
  },
  {
    icon: Mail,
    title: "E-mail",
    body: "",
    detail: "info@novenyvilag.hu",
    href: "mailto:info@novenyvilag.hu",
    external: false,
  },
  {
    icon: Store,
    title: "Személyesen",
    body: "Gyere be — a legszebb virágokat néha csak személyesen lehet kiválasztani.",
    detail: "Pécel, Szondi utca 53.",
    href: "#terkep",
    external: false,
  },
];

const benefits = [
  {
    icon: Clock,
    text: "Azonnal kiderül, mi van éppen készleten",
  },
  {
    icon: HeartHandshake,
    text: "Megbeszéljük, mi illik az alkalmadhoz — fotókra várni nem kell",
  },
  {
    icon: Flower,
    text: "Ha sürgős, meg tudom mondani, mikor jöhetsz azonnal",
  },
];

export default function KapcsolatPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section
        className="relative overflow-hidden flex items-end"
        style={{ minHeight: "72vh" }}
        aria-label="Kapcsolat hero"
      >
        <div className="absolute inset-0">
          <Image
            src="/assets/images/kapcsolat-hero.png"
            alt="Pipacs Virágbolt bejárata — Pécel, Szondi utca 53."
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* left_light_fade overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, rgba(250,246,240,0.55) 0%, rgba(250,246,240,0.32) 42%, rgba(250,246,240,0.06) 68%, rgba(250,246,240,0) 100%)",
            }}
          />
        </div>

        <div className="container-site relative z-10 pb-14 pt-20">
          <div className="max-w-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5" style={{ background: "var(--color-primary)" }} />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--color-primary)" }}
              >
                Kapcsolat
              </span>
            </div>

            <h1
              className="font-bold mb-4 leading-tight"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
                color: "var(--color-text)",
                lineHeight: 1.1,
              }}
            >
              Hívj —<br />megoldom
            </h1>

            <p className="text-base mb-6 leading-relaxed max-w-md" style={{ color: "var(--color-text-muted)" }}>
              Pécelről elérhetsz telefonon, Messengeren, vagy egyszerűen betérhetsz a Szondi utcán.
              Ha sürgős, a leggyorsabb a telefon.
            </p>

            {/* Key info pills */}
            <div className="flex flex-col gap-2.5 mb-7 text-sm">
              <span className="flex items-center gap-2.5">
                <Phone size={15} style={{ color: "var(--color-primary)", flexShrink: 0 }} />
                <strong style={{ color: "var(--color-text)", fontSize: "1rem" }}>06-20/344-3448</strong>
              </span>
              <span className="flex items-center gap-2.5" style={{ color: "var(--color-text-muted)" }}>
                <MapPin size={15} style={{ color: "var(--color-green)", flexShrink: 0 }} />
                2119 Pécel, Szondi utca 53.
              </span>
              <span className="flex items-center gap-2.5" style={{ color: "var(--color-text-muted)" }}>
                <Clock size={15} style={{ color: "var(--color-green)", flexShrink: 0 }} />
                Kedd–Péntek 9:00–19:00
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+36203443448"
                className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm btn-primary"
              >
                <Phone size={14} />
                Hívj most
              </a>
              <a
                href="https://m.me/pipacsviragbolt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm btn-outline-dark"
              >
                <MessageCircle size={14} />
                Írj Messengeren
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ KAPCSOLATFELVÉTEL MÓDJA ═══ */}
      <section style={{ background: "var(--color-bg)" }} className="section-py">
        <div className="container-site">
          <AnimateOnScroll className="mb-10 text-center">
            <div className="divider-botanical mb-5">
              <span
                style={{
                  color: "var(--color-warm)",
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                }}
              >
                ✦
              </span>
            </div>
            <h2
              className="font-bold"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                color: "var(--color-green)",
              }}
            >
              Kapcsolatfelvétel módja
            </h2>
            <p className="mt-3 text-base max-w-xl mx-auto" style={{ color: "var(--color-text-muted)" }}>
              Ha csokrot szeretnél, kérdésed van a workshopról, vagy csak körülnéznél — egyforma szívesen várlak.
            </p>
          </AnimateOnScroll>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactMethods.map((method, i) => {
              const Icon = method.icon;
              return (
                <StaggerItem key={i}>
                  <a
                    href={method.href}
                    target={method.external ? "_blank" : undefined}
                    rel={method.external ? "noopener noreferrer" : undefined}
                    className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl h-full transition-shadow hover:shadow-md group"
                    style={{
                      background: "var(--color-bg-subtle)",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    <div
                      className="icon-circle w-14 h-14"
                      style={{ background: "rgba(26,58,42,0.09)" }}
                    >
                      <Icon size={24} style={{ color: "var(--color-green)" }} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3
                        className="font-bold text-base"
                        style={{ color: "var(--color-green)", fontFamily: "var(--font-serif)" }}
                      >
                        {method.title}
                      </h3>
                      <p className="text-sm leading-snug" style={{ color: "var(--color-text-muted)" }}>
                        {method.body}
                      </p>
                      <p className="text-sm font-semibold mt-1" style={{ color: "var(--color-primary)" }}>
                        {method.detail}
                      </p>
                    </div>
                  </a>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══ MIÉRT ÉRDEMES INKÁBB HÍVNI ═══ */}
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
              Miért érdemes inkább hívni?
            </h2>
          </AnimateOnScroll>

          <div className="flex flex-col gap-5">
            {benefits.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimateOnScroll key={i} delay={i * 0.08}>
                  <div
                    className="flex items-center gap-5 p-5 rounded-xl"
                    style={{
                      background: "var(--color-bg)",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    {/* Soft-circle icon — no number badges */}
                    <div
                      className="shrink-0 flex items-center justify-center rounded-full"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "rgba(200,133,74,0.12)",
                        border: "1.5px solid rgba(200,133,74,0.3)",
                      }}
                    >
                      <Icon size={22} style={{ color: "var(--color-warm)" }} />
                    </div>
                    <p className="text-base" style={{ color: "var(--color-text-muted)" }}>
                      {item.text}
                    </p>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ NYITVATARTÁS ÉS ELÉRHETŐSÉG ═══ */}
      <section style={{ background: "var(--color-bg)" }} id="nyitvatartas" className="section-py">
        <div className="container-site">
          <AnimateOnScroll className="mb-8">
            <h2
              className="font-bold"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                color: "var(--color-green)",
              }}
            >
              Nyitvatartás és elérhetőség
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* LEFT: nyitvatartás táblázat + elérhetőségek */}
            <AnimateOnScroll>
              <div>
              {/* Opening hours table */}
              <div
                className="rounded-2xl overflow-hidden mb-5"
                style={{ border: "1px solid var(--color-border)" }}
              >
                {openingHours.map((item, i) => (
                  <div
                    key={item.day}
                    className="flex justify-between gap-4 px-5 py-3 text-sm"
                    style={{
                      background: i % 2 === 0 ? "var(--color-bg-subtle)" : "var(--color-bg)",
                      borderBottom:
                        i < openingHours.length - 1 ? "1px solid var(--color-border)" : "none",
                    }}
                  >
                    <span style={{ color: "var(--color-text-muted)" }}>{item.day}</span>
                    <span className="font-semibold" style={{ color: "var(--color-text)" }}>
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
              <p
                className="mb-7 text-xs flex items-center gap-1.5"
                style={{ color: "var(--color-text-light)" }}
              >
                <Clock size={11} />
                Hétfőn 12:00-tól nyitva
              </p>

              {/* Contact details */}
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div
                    className="icon-circle w-10 h-10 shrink-0"
                    style={{ background: "rgba(139,26,26,0.1)" }}
                  >
                    <Phone size={18} style={{ color: "var(--color-primary)" }} />
                  </div>
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-wider mb-0.5"
                      style={{ color: "var(--color-text-light)" }}
                    >
                      Telefon
                    </p>
                    <a
                      href="tel:+36203443448"
                      className="text-sm font-medium transition-opacity hover:opacity-80"
                      style={{ color: "var(--color-text)" }}
                    >
                      06-20/344-3448
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="icon-circle w-10 h-10 shrink-0"
                    style={{ background: "rgba(139,26,26,0.1)" }}
                  >
                    <Mail size={18} style={{ color: "var(--color-primary)" }} />
                  </div>
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-wider mb-0.5"
                      style={{ color: "var(--color-text-light)" }}
                    >
                      E-mail
                    </p>
                    <a
                      href="mailto:info@novenyvilag.hu"
                      className="text-sm font-medium transition-opacity hover:opacity-80"
                      style={{ color: "var(--color-text)" }}
                    >
                      info@novenyvilag.hu
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="icon-circle w-10 h-10 shrink-0"
                    style={{ background: "rgba(139,26,26,0.1)" }}
                  >
                    <MessageCircle size={18} style={{ color: "var(--color-primary)" }} />
                  </div>
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-wider mb-0.5"
                      style={{ color: "var(--color-text-light)" }}
                    >
                      Facebook / Messenger
                    </p>
                    <a
                      href="https://www.facebook.com/pipacsviragbolt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium transition-opacity hover:opacity-80"
                      style={{ color: "var(--color-text)" }}
                    >
                      facebook.com/pipacsviragbolt
                    </a>
                  </div>
                </div>
              </div>
              </div>
            </AnimateOnScroll>

            {/* RIGHT: boltfotó */}
            <AnimateOnScroll delay={0.12}>
              <div
                className="relative rounded-2xl overflow-hidden img-hover-scale"
                style={{ height: "400px", border: "1px solid var(--color-border)" }}
              >
                <Image
                  src="/assets/images/kapcsolat-hero.png"
                  alt="Pipacs Virágbolt bejárata — Pécel, Szondi utca 53."
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </AnimateOnScroll>

          </div>
        </div>
      </section>

      {/* ═══ CÍM ÉS MEGKÖZELÍTÉS ═══ */}
      <section style={{ background: "var(--color-bg-subtle)" }} id="terkep" className="section-py">
        <div className="container-site">
          <AnimateOnScroll className="mb-8">
            <h2
              className="font-bold"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                color: "var(--color-green)",
              }}
            >
              Cím és megközelítés
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* LEFT: address + transport */}
            <AnimateOnScroll>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={18}
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--color-green)" }}
                  />
                  <div>
                    <p className="font-semibold text-base" style={{ color: "var(--color-text)" }}>
                      2119 Pécel, Szondi utca 53.
                    </p>
                    <p className="text-sm mt-1.5" style={{ color: "var(--color-text-muted)" }}>
                      <strong style={{ color: "var(--color-text)" }}>Fontos:</strong> A bejárat a Fáy
                      utca felőli kapun van.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Car
                    size={18}
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--color-text-light)" }}
                  />
                  <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                    Autóval: Pécelről könnyen megközelíthető, parkolás a közelben lehetséges.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Bus
                    size={18}
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--color-text-light)" }}
                  />
                  <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                    Tömegközlekedéssel: Pécel belvárosából gyalogosan is elérhető.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* RIGHT: Google Maps embed */}
            <AnimateOnScroll delay={0.12}>
              <div
                className="rounded-2xl overflow-hidden"
                style={{ border: "1px solid var(--color-border)" }}
              >
                <iframe
                  src="https://maps.google.com/maps?q=2119+P%C3%A9cel,+Szondi+utca+53&output=embed&z=16"
                  width="100%"
                  height="380"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pipacs Virágbolt — 2119 Pécel, Szondi utca 53."
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
                "linear-gradient(100deg, rgba(26,58,42,0.55) 0%, rgba(26,58,42,0.38) 50%, rgba(26,58,42,0.2) 100%)",
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
                  Hívj — megoldom
                </h2>
                <p style={{ color: "rgba(250,246,240,0.8)" }} className="text-base max-w-md">
                  Csokrot keresel? Ajándékot? Alkotófoglalkozás érdekel? Hívj, percek alatt megbeszéljük.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a
                  href="tel:+36203443448"
                  className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm btn-primary"
                >
                  <Phone size={15} />
                  Hívj most
                </a>
                <a
                  href="https://m.me/pipacsviragbolt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm btn-outline"
                >
                  <MessageCircle size={15} />
                  Írj Messengeren
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
