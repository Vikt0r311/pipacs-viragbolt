import type { Metadata } from "next";
import Link from "next/link";
import { Target, Shield, Award } from "lucide-react";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Rólunk | Cégnév",
  description:
    "Rövid leírás a cégről, a csapatról és a küldetésről. Városban és környéke.",
  openGraph: {
    title: "Rólunk | Cégnév",
    description: "Rövid leírás a cégről és a csapatról.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    url: "https://www.example.hu/rolunk",
  },
};

// TODO: Replace with real values
const values = [
  {
    icon: Target,
    title: "Precizitás",
    description: "TODO: Leírás arról, hogyan közelítik meg a munkát, mi a minőségi garancia.",
  },
  {
    icon: Shield,
    title: "Megbízhatóság",
    description: "TODO: Leírás a határidők betartásáról, az ügyfél-kommunikációról.",
  },
  {
    icon: Award,
    title: "Minőség",
    description: "TODO: Leírás a minőségi standardokról, esetleges tanúsítványokról.",
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
            <span style={{ color: "var(--color-primary)" }}>Városban</span>
          </h1>
          <p className="text-base md:text-lg max-w-2xl" style={{ color: "var(--color-text-muted)" }}>
            TODO: Rövid bevezető a cégről. Mikor alapult, mi a fő profil, hol dolgoznak.
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
                TODO: Alcím a cégtörténethez
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
                TODO: Első bekezdés a cégről — mikor alapult, ki alapította, mi volt az eredeti misszió.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
                TODO: Második bekezdés — hol tevékenykednek, milyen területen, mi a fő erősségük.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                TODO: Harmadik bekezdés — miben különböznek a versenytársaktól, miért érdemes őket választani.
              </p>
            </AnimateOnScroll>

            {/* Sidebar — 5 cols */}
            <AnimateOnScroll className="md:col-span-5" delay={0.15}>
              {/* Image placeholder */}
              <div
                className="w-full rounded-md mb-4"
                style={{
                  aspectRatio: "3/4",
                  background: "var(--color-bg-subtle)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <div className="w-full h-full flex flex-col items-center justify-center gap-3 rounded-md">
                  <div
                    className="text-6xl font-black select-none"
                    style={{ color: "rgba(37,99,235,0.1)", letterSpacing: "-0.04em" }}
                  >
                    XX
                  </div>
                  <p className="text-xs" style={{ color: "var(--color-text-light)" }}>
                    Csapatfotó / logó helye
                  </p>
                </div>
              </div>

              {/* Quick facts */}
              <div
                className="p-5 rounded-md"
                style={{ background: "var(--color-bg-subtle)", border: "1px solid var(--color-border)" }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Alapítva", value: "TODO" },
                    { label: "Telephely", value: "TODO" },
                    { label: "Csapat", value: "TODO" },
                    { label: "Terület", value: "TODO" },
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
                <span style={{ color: "var(--color-primary)" }}>Kérjen ajánlatot!</span>
              </h2>
              <p className="text-base mb-8 max-w-xl" style={{ color: "var(--color-text-muted)" }}>
                Városban és a környező területeken vállalunk munkákat. Kérjen ingyenes árajánlatot!
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/kapcsolat" className="px-7 py-3.5 rounded-md font-semibold text-sm btn-primary">
                  Ajánlatot kérek
                </Link>
                <Link
                  href="/szolgaltatasok"
                  className="px-7 py-3.5 rounded-md font-semibold text-sm border transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                  style={{ color: "var(--color-text-muted)", borderColor: "var(--color-border-strong)" }}
                >
                  Szolgáltatásaink
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
