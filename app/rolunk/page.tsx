import type { Metadata } from "next";
import Link from "next/link";
import { Target, Shield, Award } from "lucide-react";
import ConcretePoLine from "@/components/ConcretePoLine";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Rólunk — Monolit Vasbeton Kivitelezés Szentkirályszabadja",
  description:
    "Virág Gábor Építő Bt. — monolit vasbeton szerkezetépítés Szentkirályszabadján. 2021 óta szolgáljuk ki Veszprém megye építkezéseit precíz, minőségi munkával.",
  openGraph: {
    title: "Rólunk | Virág Gábor Építő Bt.",
    description:
      "Virág Gábor Építő Bt. — monolit vasbeton szerkezetépítés Szentkirályszabadján. 2021 óta Veszprém és Balaton-felvidéken.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    url: "https://www.viragepito.hu/rolunk",
  },
};

const values = [
  {
    icon: Target,
    title: "Precizitás",
    description:
      "Kétszer mérünk, egyszer betonozunk. Minden zsaluzat milliméterre pontos — mert az alap pontossága meghatározza az egész szerkezet minőségét.",
    wide: true,
  },
  {
    icon: Shield,
    title: "Megbízhatóság",
    description:
      "A határidők szentek. Amit elvállalunk, azt pontosan és időre teljesítjük — Veszprémben éppúgy, mint Balatonalmádiban.",
    wide: false,
  },
  {
    icon: Award,
    title: "Minőség",
    description:
      "Minden vasbeton szerkezet megfelel a legszigorúbb statikai és kivitelezési szabványoknak. Erre 2021 óta adunk garanciát.",
    wide: false,
  },
];

export default function RolunkPage() {
  return (
    <>
      {/* Page Hero */}
      <section
        className="section-py-sm flex items-end"
        style={{
          background: "#1C1C1C",
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
            Virág Gábor Építő Bt. —{" "}
            <span style={{ color: "var(--color-primary)" }}>Szentkirályszabadja</span>
          </h1>
          <p className="text-base md:text-lg max-w-2xl" style={{ color: "var(--color-text-muted)" }}>
            Monolit vasbeton szerkezetépítés 2021 óta. Kis csapat, nagy pontossággal.
          </p>
        </div>
      </section>

      <ConcretePoLine />

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
                Szakemberek Veszprém szívéből
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
                A Virág Gábor Építő Bt.-t 2021-ben alapítottuk Szentkirályszabadján — egy kis, de annál elszántabb csapattal. Szakterületünk a monolit vasbeton szerkezetek kivitelezése: födémek, falak, koszorúk, lépcsők, pillérek zsaluzása, vasalása és betonozása.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
                Székhelyünk Szentkirályszabadján van, Veszprém és Balatonalmádi szomszédságában — mindkét várostól alig 5 km-re. Ez ideális pozíció a Veszprém–Balaton-felvidék régió kiszolgálásához: könnyen elérjük Balatonfűzfőt, Litért, Csopakot, Balatonfüredet, Hajmáskért és a Bakony-aljai falvakat is.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
                Kis csapatként személyes figyelmet tudunk fordítani minden projektünkre. Nem vagyunk névtelen nagyvállalat — az ügyfeleink ismerik a nevünket, és mi ismerjük az ő építkezésük minden részletét. A Veszprém-vidéki talajviszonyok, az ottani építési előírások és a helyi anyagellátás ismerete komoly előny minden munkánknál.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                Büszkék vagyunk arra, hogy minden elkészített vasbeton szerkezetünk az előírt statikai tervek alapján, pontosan és határidőre készül el.
              </p>
            </AnimateOnScroll>

            {/* Image placeholder — 5 cols */}
            <AnimateOnScroll className="md:col-span-5" delay={0.15}>
              <div
                className="w-full rounded-md"
                style={{
                  aspectRatio: "3/4",
                  background: "linear-gradient(160deg, #2A2A2A, #303030)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <div className="w-full h-full flex flex-col items-center justify-center gap-3 rounded-md">
                  <div
                    className="text-6xl font-black select-none"
                    style={{ color: "rgba(212,147,42,0.12)", letterSpacing: "-0.04em" }}
                  >
                    VG
                  </div>
                  <p className="text-xs" style={{ color: "var(--color-text-light)" }}>
                    Csapatfotó hamarosan
                  </p>
                </div>
              </div>

              {/* Quick facts */}
              <div
                className="mt-4 p-5 rounded-md"
                style={{ background: "var(--color-bg-subtle)", border: "1px solid var(--color-border)" }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Alapítva", value: "2021" },
                    { label: "Telephely", value: "Szentkirályszabadja" },
                    { label: "Csapat", value: "~4 fő" },
                    { label: "Terület", value: "Veszprém megye" },
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

      <ConcretePoLine />

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
              Amire <span style={{ color: "var(--color-primary)" }}>büszkék vagyunk</span>
            </h2>
          </AnimateOnScroll>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* First value — 5 cols (wider) */}
            <StaggerItem className="md:col-span-5">
              <div
                className="h-full p-8 rounded-xl"
                style={{
                  background: "var(--color-bg)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-md mb-5"
                  style={{ background: "rgba(212,147,42,0.12)", color: "var(--color-primary)" }}
                >
                  <Target size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--color-text)" }}>
                  Precizitás
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                  Kétszer mérünk, egyszer betonozunk. Minden zsaluzat milliméterre pontos — mert az alap pontossága meghatározza az egész szerkezet minőségét. A veszprémi és Balaton-vidéki építkezéseken nincs helye a kompromisszumoknak.
                </p>
              </div>
            </StaggerItem>

            {/* Second value — 4 cols */}
            <StaggerItem className="md:col-span-4">
              <div
                className="h-full p-8 rounded-xl"
                style={{
                  background: "var(--color-bg)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-md mb-5"
                  style={{ background: "rgba(212,147,42,0.12)", color: "var(--color-primary)" }}
                >
                  <Shield size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--color-text)" }}>
                  Megbízhatóság
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                  A határidők szentek. Amit elvállalunk, azt pontosan és időre teljesítjük. Az ügyfeleink tudják, hogy mi nem ígérünk olyat, amit nem tudunk tartani.
                </p>
              </div>
            </StaggerItem>

            {/* Third value — 3 cols */}
            <StaggerItem className="md:col-span-3">
              <div
                className="h-full p-8 rounded-xl"
                style={{
                  background: "var(--color-bg)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-md mb-5"
                  style={{ background: "rgba(212,147,42,0.12)", color: "var(--color-primary)" }}
                >
                  <Award size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--color-text)" }}>
                  Minőség
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                  Minden szerkezet megfelel a legszigorúbb statikai szabványoknak. Erre 2021 óta adunk garanciát.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <ConcretePoLine />

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
                Veszprémben, Balatonalmádiban és a Balaton-felvidéken vállalunk vasbeton munkákat. Kérjen ingyenes árajánlatot!
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/kapcsolat" className="px-7 py-3.5 rounded-md font-semibold text-sm btn-amber">
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
