import type { Metadata } from "next";
import Link from "next/link";
import { Star, Shield, Clock } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FAQAccordion from "@/components/FAQAccordion";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Szolgáltatás Városban | Cégnév",
  description:
    "Rövid leírás a cégről és a szolgáltatásról. Városnév és környéke. Kérjen ajánlatot!",
  openGraph: {
    title: "Szolgáltatás Városban | Cégnév",
    description: "Rövid leírás a cégről és a szolgáltatásról.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    url: "https://www.example.hu",
  },
};

// TODO: Replace all placeholder values with real business data
const businessData = {
  name: "Cégnév",
  description: "Rövid cégleírás. Szolgáltatás Városban és környékén.",
  url: "https://www.example.hu",
  telephone: "+36XXXXXXXXX",
  email: "info@example.hu",
  address: {
    streetAddress: "Utca neve 1.",
    addressLocality: "Városnév",
    postalCode: "1000",
    addressCountry: "HU",
  },
  geo: { latitude: 47.5, longitude: 19.0 },
  openingHours: ["Mo-Fr 08:00-17:00"],
  priceRange: "$$",
  areaServed: [
    "Városnév",
    "Szomszéd város 1",
    "Szomszéd város 2",
    "Szomszéd város 3",
    "Szomszéd város 4",
    "Szomszéd város 5",
  ],
  sameAs: [
    "https://www.facebook.com/TODO",
    "https://www.instagram.com/TODO",
  ],
  type: "LocalBusiness" as const,
};

// TODO: Replace with real FAQ questions relevant to the business and location
const faqData = [
  {
    question: "Milyen területen dolgoznak?",
    answer: "TODO: Leírás a szolgáltatási területről.",
  },
  {
    question: "Mennyi idő alatt készülnek el a munkák?",
    answer: "TODO: Átlagos átfutási idő leírása.",
  },
  {
    question: "Hogyan lehet ajánlatot kérni?",
    answer: "TODO: Ajánlatkérés folyamatának leírása.",
  },
  {
    question: "Milyen garanciát vállalnak a munkákra?",
    answer: "TODO: Garanciavállalás leírása.",
  },
  {
    question: "Mennyibe kerülnek a szolgáltatások?",
    answer: "TODO: Árazás leírása.",
  },
];

// TODO: Replace with real services
const services = [
  {
    title: "Szolgáltatás 1",
    description: "Rövid leírás a szolgáltatásról. Miért érdemes ezt választani, mik az előnyei.",
    href: "/szolgaltatasok",
  },
  {
    title: "Szolgáltatás 2",
    description: "Rövid leírás a szolgáltatásról. Miért érdemes ezt választani, mik az előnyei.",
    href: "/szolgaltatasok",
  },
  {
    title: "Szolgáltatás 3",
    description: "Rövid leírás a szolgáltatásról. Miért érdemes ezt választani, mik az előnyei.",
    href: "/szolgaltatasok",
  },
];

// TODO: Replace with real USP items
const uspItems = [
  {
    icon: Star,
    title: "USP 1 — Minőség",
    description: "Rövid leírás, mi teszi egyedivé a céget. Miért érdemes minket választani.",
  },
  {
    icon: Shield,
    title: "USP 2 — Megbízhatóság",
    description: "Rövid leírás, mi teszi egyedivé a céget. Miért érdemes minket választani.",
  },
  {
    icon: Clock,
    title: "USP 3 — Gyorsaság",
    description: "Rövid leírás, mi teszi egyedivé a céget. Miért érdemes minket választani.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd business={businessData} faq={faqData} />

      {/* Hero */}
      <HeroSection />

      {/* USP Strip */}
      <section
        style={{ background: "var(--color-bg-subtle)" }}
        className="section-py"
      >
        <div className="container-site">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {uspItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={i}>
                  <div className="flex flex-col gap-3">
                    <div
                      className="w-10 h-10 flex items-center justify-center rounded-md"
                      style={{
                        background: "rgba(37,99,235,0.1)",
                        color: "var(--color-primary)",
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <h3
                      className="text-xl font-bold"
                      style={{ color: "var(--color-text)" }}
                    >
                      {item.title}
                    </h3>
                    <p style={{ color: "var(--color-text-muted)" }} className="text-sm leading-relaxed">
                      {item.description}
                    </p>
                    <div
                      className="w-8 h-0.5 mt-2"
                      style={{ background: "var(--color-primary)" }}
                    />
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Services Overview */}
      <section style={{ background: "var(--color-bg)" }} className="section-py">
        <div className="container-site">
          <AnimateOnScroll className="mb-14">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--color-primary)" }}
            >
              Szakterületünk
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
              Szolgáltatásaink{" "}
              <span style={{ color: "var(--color-primary)" }}>Városban</span>
            </h2>
          </AnimateOnScroll>

          <div className="flex flex-col gap-0">
            {services.map((service, i) => (
              <AnimateOnScroll key={i} delay={i * 0.08}>
                <div
                  className="flex flex-col md:flex-row items-start gap-6 py-8 border-b"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <div
                    className="md:w-16 shrink-0 text-5xl font-black leading-none select-none"
                    style={{ color: "rgba(37,99,235,0.15)", letterSpacing: "-0.04em" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1 max-w-2xl">
                    <h3
                      className="text-xl font-bold mb-3"
                      style={{ color: "var(--color-text)" }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed mb-4"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1 text-sm font-semibold transition-opacity hover:opacity-80"
                      style={{ color: "var(--color-primary)" }}
                    >
                      Részletek →
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/szolgaltatasok"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-semibold text-sm btn-primary"
            >
              Összes szolgáltatás
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <StatsSection />

      {/* Gallery Preview */}
      <section style={{ background: "var(--color-bg)" }} className="section-py">
        <div className="container-site">
          <AnimateOnScroll className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "var(--color-primary)" }}
              >
                Referenciáink
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
                Munkáink —{" "}
                <span style={{ color: "var(--color-primary)" }}>Galéria</span>
              </h2>
            </div>
            <Link
              href="/galeria"
              className="shrink-0 text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ color: "var(--color-primary)" }}
            >
              Galéria megtekintése →
            </Link>
          </AnimateOnScroll>

          {/* Placeholder gallery area */}
          <div
            className="rounded-xl flex items-center justify-center"
            style={{
              height: "320px",
              background: "var(--color-bg-subtle)",
              border: "1px solid var(--color-border)",
            }}
          >
            <p className="text-sm" style={{ color: "var(--color-text-light)" }}>
              Képek hozzáadása a galéria mappába: /public/galeria/
            </p>
          </div>

          <div className="mt-6 text-center md:text-left">
            <Link
              href="/galeria"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-semibold text-sm border transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              style={{
                color: "var(--color-text-muted)",
                borderColor: "var(--color-border-strong)",
              }}
            >
              Összes projekt megtekintése →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "var(--color-bg-subtle)" }} className="section-py">
        <div className="container-site">
          <AnimateOnScroll className="mb-10">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--color-primary)" }}
            >
              Kérdések & Válaszok
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
              Gyakran Ismételt{" "}
              <span style={{ color: "var(--color-primary)" }}>Kérdések</span>
            </h2>
          </AnimateOnScroll>

          <div className="max-w-3xl">
            <FAQAccordion items={faqData} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "var(--color-primary)" }}
              >
                Kapcsolat
              </p>
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
                <span style={{ color: "var(--color-primary)" }}>Kérjen ajánlatot!</span>
              </h2>
              <p
                className="text-base mb-8 max-w-xl"
                style={{ color: "var(--color-text-muted)" }}
              >
                Városban és a környező településeken vállalunk munkákat. Vegye fel velünk a kapcsolatot!
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/kapcsolat"
                  className="px-7 py-3.5 rounded-md font-semibold text-sm btn-primary"
                >
                  Ajánlatot kérek
                </Link>
                <a
                  href="tel:+36XXXXXXXXX"
                  className="px-7 py-3.5 rounded-md font-semibold text-sm border transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                  style={{
                    color: "var(--color-text-muted)",
                    borderColor: "var(--color-border-strong)",
                  }}
                >
                  +36 XX XXX XXXX
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
