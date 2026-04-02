import type { Metadata } from "next";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Szolgáltatások Városban | Cégnév",
  description:
    "Cégnév szolgáltatásai Városban és környékén. TODO: Rövid leírás a főbb szolgáltatásokról.",
  openGraph: {
    title: "Szolgáltatások | Cégnév",
    description: "TODO: Rövid leírás a főbb szolgáltatásokról.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    url: "https://www.example.hu/szolgaltatasok",
  },
};

// TODO: Replace with real services
const services = [
  {
    id: "szolgaltatas-1",
    title: "Szolgáltatás 1 neve",
    subtitle: "Altípus · Kulcsszó · Kulcsszó",
    paragraphs: [
      "TODO: Első bekezdés a szolgáltatásról. Mi ez, hogyan működik, mikor van rá szükség.",
      "TODO: Második bekezdés — mik az előnyök, miért érdemes ezt választani, mi különbözteti meg a versenytársaktól.",
    ],
    specs: [
      "Jellemző / előny 1",
      "Jellemző / előny 2",
      "Jellemző / előny 3",
      "Jellemző / előny 4",
    ],
  },
  {
    id: "szolgaltatas-2",
    title: "Szolgáltatás 2 neve",
    subtitle: "Altípus · Kulcsszó · Kulcsszó",
    paragraphs: [
      "TODO: Első bekezdés a szolgáltatásról.",
      "TODO: Második bekezdés.",
    ],
    specs: [
      "Jellemző / előny 1",
      "Jellemző / előny 2",
      "Jellemző / előny 3",
      "Jellemző / előny 4",
    ],
  },
  {
    id: "szolgaltatas-3",
    title: "Szolgáltatás 3 neve",
    subtitle: "Altípus · Kulcsszó · Kulcsszó",
    paragraphs: [
      "TODO: Első bekezdés a szolgáltatásról.",
      "TODO: Második bekezdés.",
    ],
    specs: [
      "Jellemző / előny 1",
      "Jellemző / előny 2",
      "Jellemző / előny 3",
    ],
  },
  {
    id: "szolgaltatas-4",
    title: "Szolgáltatás 4 neve",
    subtitle: "Altípus · Kulcsszó · Kulcsszó",
    paragraphs: [
      "TODO: Első bekezdés a szolgáltatásról.",
      "TODO: Második bekezdés.",
    ],
    specs: [
      "Jellemző / előny 1",
      "Jellemző / előny 2",
      "Jellemző / előny 3",
    ],
  },
  {
    id: "szolgaltatas-5",
    title: "Szolgáltatás 5 neve",
    subtitle: "Altípus · Kulcsszó · Kulcsszó",
    paragraphs: [
      "TODO: Első bekezdés a szolgáltatásról.",
      "TODO: Második bekezdés.",
    ],
    specs: [
      "Jellemző / előny 1",
      "Jellemző / előny 2",
      "Jellemző / előny 3",
    ],
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
            <span style={{ color: "var(--color-primary)" }}>Városban</span>
          </h1>
          <p className="text-base md:text-lg max-w-2xl" style={{ color: "var(--color-text-muted)" }}>
            TODO: Rövid leírás a főbb szolgáltatásokról és a szolgáltatási területről.
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

              {/* Image placeholder — 5 cols */}
              <AnimateOnScroll
                className={`md:col-span-5 ${i % 2 === 1 ? "md:order-1" : ""}`}
                delay={0.15}
              >
                <div
                  className="w-full rounded-md flex items-center justify-center"
                  style={{
                    aspectRatio: "4/3",
                    background: "var(--color-bg-subtle)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <p className="text-xs" style={{ color: "var(--color-text-light)" }}>
                    Kép helye — /public/galeria/
                  </p>
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
                <span style={{ color: "var(--color-primary)" }}>Kérjen ajánlatot!</span>
              </h2>
              <p className="text-base mb-8 max-w-xl" style={{ color: "var(--color-text-muted)" }}>
                Városban és a környező területeken vállalunk munkákat.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/kapcsolat" className="px-7 py-3.5 rounded-md font-semibold text-sm btn-primary">
                  Ajánlatot kérek
                </Link>
                <a
                  href="tel:+36XXXXXXXXX"
                  className="px-7 py-3.5 rounded-md font-semibold text-sm border transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                  style={{ color: "var(--color-text-muted)", borderColor: "var(--color-border-strong)" }}
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
