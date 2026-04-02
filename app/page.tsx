import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Ruler, Layers, Target, CheckCircle } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import HeroSection from "@/components/HeroSection";
import ConcretePoLine from "@/components/ConcretePoLine";
import ProcessTimeline from "@/components/ProcessTimeline";
import StatsSection from "@/components/StatsSection";
import FAQAccordion from "@/components/FAQAccordion";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Monolit Vasbeton Szerkezetek Veszprémben és Környékén | Virág Gábor Építő Bt.",
  description:
    "Monolit vasbeton szerkezetek kivitelezése Veszprémben és a Balaton-felvidéken. Födémek, falak, koszorúk, lépcsők zsaluzása, vasalása, betonozása. Kérjen ajánlatot!",
  openGraph: {
    title: "Monolit Vasbeton Szerkezetek Veszprémben | Virág Gábor Építő Bt.",
    description:
      "Monolit vasbeton szerkezetek kivitelezése Veszprémben és a Balaton-felvidéken. Fodémek, falak, koszorúk, lépcsők. Kérjen ajánlatot!",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    url: "https://www.viragepito.hu",
  },
};

const businessData = {
  name: "Virág Gábor Építő Bt.",
  description:
    "Monolit vasbeton szerkezetek kivitelezése: födémek, falak, koszorúk, lépcsők zsaluzása, vasalása és betonozása Veszprém megyében.",
  url: "https://www.viragepito.hu",
  telephone: "+36306857901",
  email: "viraggabi23@gmail.com",
  address: {
    streetAddress: "Gárdonyi utca 5.",
    addressLocality: "Szentkirályszabadja",
    postalCode: "8225",
    addressCountry: "HU",
  },
  geo: { latitude: 47.0572, longitude: 17.971 },
  openingHours: ["Mo-Fr 07:00-17:00"],
  priceRange: "$$",
  areaServed: [
    "Szentkirályszabadja",
    "Veszprém",
    "Balatonalmádi",
    "Balatonfűzfő",
    "Litér",
    "Királyszentistván",
    "Vilonya",
    "Hajmáskér",
    "Csopak",
    "Balatonfüred",
    "Felsőörs",
    "Alsóörs",
    "Berhida",
    "Papkeszi",
    "Veszprémfajsz",
  ],
  sameAs: ["https://www.facebook.com/profile.php?id=61550622090357"],
  type: "GeneralContractor" as const,
};

const faqData = [
  {
    question: "Mennyibe kerül egy monolit vasbeton födém Veszprémben?",
    answer:
      "A monolit vasbeton födém ára számos tényezőtől függ: a födém méretétől, vastagságától, a vasalás bonyolultságától és a helyszín megközelíthetőségétől. Kérjen személyre szabott ajánlatot, és helyszíni felméréssel pontos árat adunk!",
  },
  {
    question: "Miért jobb a monolit vasbeton födém, mint az előregyártott?",
    answer:
      "A monolit födém helyszínen készül, így tökéletesen illeszkedik az épület geometriájához. Jobb akusztikai és hőszigetelési tulajdonságokkal rendelkezik, és nem igényel vakolást betonozás után.",
  },
  {
    question: "Mennyi idő alatt készül el egy vasbeton födém?",
    answer:
      "Egy átlagos családi ház födémje — a zsaluzástól a kizsaluzásig — általában 2–4 hét, az időjárástól és a födém méretétől függően. A betonnak minimum 28 napig kell kötnie a teljes szilárdsághoz.",
  },
  {
    question: "Vállalnak munkát Veszprém környékén is?",
    answer:
      "Igen! Szentkirályszabadjai székhelyünkről Veszprém, Balatonalmádi, Balatonfűzfő, Csopak, Balatonfüred és a teljes Balaton-felvidék területén vállalunk vasbeton szerkezetépítési munkákat.",
  },
  {
    question: "Milyen munkákat vállalnak monolit vasbetonból?",
    answer:
      "Födémek, falak, koszorúk, lépcsők, pillérek, gerendák, támfalak és egyéb egyedi vasbeton szerkezetek zsaluzását, vasalását és betonozását végezzük.",
  },
  {
    question: "Szükséges-e statikai terv a vasbeton munkákhoz?",
    answer:
      "Igen, minden vasbeton szerkezethez statikai terv szükséges, amit a tervező biztosít. Mi a terv alapján végezzük el a zsaluzást, vasalást és betonozást precízen és szakszerűen.",
  },
];

const services = [
  {
    title: "Monolit Vasbeton Födém",
    description:
      "Panelzsaluzattal, pontos vasalással és minőségi betonozással készítjük el a monolit vasbeton födémeket. Tökéletesen illeszkedik bármilyen épületgeometriához.",
    href: "/szolgaltatasok",
    image: "/galeria/Image165.webp",
    imageAlt: "Monolit vasbeton födém betonozása Veszprémben — Virág Gábor Építő Bt.",
  },
  {
    title: "Vasbeton Falak",
    description:
      "Teherhordó falak nagy panelzsaluzattal. Vékonyabb falvastagság = több hasznos alapterület. Ideális Balaton-felvidéki nyaralóhoz és veszprémi társasházhoz egyaránt.",
    href: "/szolgaltatasok",
    image: "/galeria/Image200.webp",
    imageAlt: "Vasbeton fal panelzsaluzat Veszprém megye — Virág Gábor Építő Bt.",
  },
  {
    title: "Koszorú Készítés",
    description:
      "A koszorú a falszerkezet gerince. Pontos vasalással és betonozással biztosítjuk a teherhordó falak megfelelő összeköttetését, különösen Veszprém-vidéki építkezéseken.",
    href: "/szolgaltatasok",
    image: "/galeria/Image125.webp",
    imageAlt: "Koszorú vasalás Veszprém környékén — Virág Gábor Építő Bt.",
  },
  {
    title: "Vasbeton Lépcsők",
    description:
      "Egyedi formájú, helyszínen öntött vasbeton lépcsők. Egyetlen előregyártott elem sem tud olyan pontos geometriát biztosítani, mint a monolit megoldás.",
    href: "/szolgaltatasok",
    image: "/galeria/Image155.webp",
    imageAlt: "Vasbeton lépcső zsaluzat Veszprémben — Virág Gábor Építő Bt.",
  },
  {
    title: "Egyéb Vasbeton Szerkezetek",
    description:
      "Pillérek, gerendák, támfalak, alapozás és egyéb egyedi vasbeton szerkezetek kivitelezése Veszprém megye és a Balaton-felvidék területén.",
    href: "/szolgaltatasok",
    image: "/galeria/Image35.webp",
    imageAlt: "Vasbeton pillér alapozás Veszprém megye — Virág Gábor Építő Bt.",
  },
];

const uspItems = [
  {
    icon: Ruler,
    title: "Precíz zsaluzás",
    description: "Milliméteres pontossággal állítjuk be a zsaluzatot. Az alap pontossága meghatározza a végeredményt.",
  },
  {
    icon: Target,
    title: "Szakszerű vasalás",
    description: "Statikai terv alapján, szabályosan elrendezett vasalás — a szerkezet teherbírásának alapköve.",
    wide: true,
  },
  {
    icon: Layers,
    title: "Minőségi betonozás",
    description: "Megfelelő konzisztenciájú beton, precíz tömörítés, optimális utókezelés.",
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
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            {/* First item — 40% width */}
            <StaggerItem className="md:col-span-5">
              <div className="flex flex-col gap-3">
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-md"
                  style={{
                    background: "rgba(212,147,42,0.12)",
                    color: "var(--color-primary)",
                  }}
                >
                  <Ruler size={20} />
                </div>
                <h3
                  className="text-xl font-bold"
                  style={{ color: "var(--color-text)" }}
                >
                  Precíz zsaluzás
                </h3>
                <p style={{ color: "var(--color-text-muted)" }} className="text-sm leading-relaxed">
                  Milliméteres pontossággal állítjuk be a zsaluzatot. Az alap pontossága meghatározza a végeredményt — ezt mi jól tudjuk.
                </p>
                <div
                  className="w-8 h-0.5 mt-2"
                  style={{ background: "var(--color-primary)" }}
                />
              </div>
            </StaggerItem>

            {/* Second item — 30% width */}
            <StaggerItem className="md:col-span-4">
              <div className="flex flex-col gap-3">
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-md"
                  style={{
                    background: "rgba(212,147,42,0.12)",
                    color: "var(--color-primary)",
                  }}
                >
                  <Target size={20} />
                </div>
                <h3
                  className="text-xl font-bold"
                  style={{ color: "var(--color-text)" }}
                >
                  Szakszerű vasalás
                </h3>
                <p style={{ color: "var(--color-text-muted)" }} className="text-sm leading-relaxed">
                  Statikai terv alapján, szabályosan elrendezett vasalás — a szerkezet teherbírásának alapköve.
                </p>
                <div
                  className="w-8 h-0.5 mt-2"
                  style={{ background: "var(--color-primary)" }}
                />
              </div>
            </StaggerItem>

            {/* Third item — 30% width */}
            <StaggerItem className="md:col-span-3">
              <div className="flex flex-col gap-3">
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-md"
                  style={{
                    background: "rgba(212,147,42,0.12)",
                    color: "var(--color-primary)",
                  }}
                >
                  <Layers size={20} />
                </div>
                <h3
                  className="text-xl font-bold"
                  style={{ color: "var(--color-text)" }}
                >
                  Minőségi betonozás
                </h3>
                <p style={{ color: "var(--color-text-muted)" }} className="text-sm leading-relaxed">
                  Megfelelő konzisztenciájú beton, precíz tömörítés, optimális utókezelés.
                </p>
                <div
                  className="w-8 h-0.5 mt-2"
                  style={{ background: "var(--color-primary)" }}
                />
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <ConcretePoLine />

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
              <span style={{ color: "var(--color-primary)" }}>Veszprém Megyében</span>
            </h2>
          </AnimateOnScroll>

          <div className="flex flex-col gap-0">
            {services.map((service, i) => (
              <AnimateOnScroll key={i} delay={i * 0.08}>
                <div
                  className="flex flex-col md:flex-row items-start gap-6 py-8 border-b"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  {/* Number — asymmetric 2/12 */}
                  <div
                    className="md:w-16 shrink-0 text-5xl font-black leading-none select-none"
                    style={{ color: "rgba(212,147,42,0.2)", letterSpacing: "-0.04em" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  {/* Content — 7/12 */}
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
                  {/* Service image */}
                  {service.image && (
                    <div className="hidden lg:block w-48 h-32 rounded-md shrink-0 img-hover-scale overflow-hidden"
                      style={{ border: "1px solid var(--color-border)" }}
                    >
                      <Image
                        src={service.image}
                        alt={service.imageAlt ?? service.title}
                        width={384}
                        height={256}
                        className="w-full h-full object-cover"
                        unoptimized
                      />
                    </div>
                  )}
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/szolgaltatasok"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-semibold text-sm btn-amber"
            >
              Összes szolgáltatás
            </Link>
          </div>
        </div>
      </section>

      <ConcretePoLine />

      {/* Process Timeline */}
      <section style={{ background: "var(--color-bg-subtle)" }} className="section-py">
        <div className="container-site">
          <AnimateOnScroll className="mb-14 max-w-2xl">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--color-primary)" }}
            >
              Így dolgozunk
            </p>
            <h2
              className="font-black uppercase mb-4"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                color: "var(--color-text)",
                lineHeight: 1.1,
              }}
            >
              A vasbeton szerkezet{" "}
              <span style={{ color: "var(--color-primary)" }}>készítésének lépései</span>
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              Szentkirályszabadjai székhelyünkről egész Veszprém megye területén végzünk vasbeton
              szerkezetépítési munkákat. Minden projektet az egyeztetéstől az átadásig felügyeljük.
            </p>
          </AnimateOnScroll>

          <ProcessTimeline />
        </div>
      </section>

      <ConcretePoLine />

      {/* Statistics */}
      <StatsSection />

      <ConcretePoLine />

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
                Munkáink — <span style={{ color: "var(--color-primary)" }}>Vasbeton Szerkezetek</span>
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

          {/* Editorial asymmetric grid */}
          <div
            className="hidden md:grid grid-cols-12 gap-3"
            style={{ gridTemplateRows: "260px 260px" }}
          >
            {/* Top-left landscape — 7 cols, 1 row */}
            <AnimateOnScroll className="col-span-7 row-span-1 rounded-md img-hover-scale overflow-hidden" style={{ border: "1px solid var(--color-border)" }}>
              <Image
                src="/galeria/Image15.webp"
                alt="Monolit vasbeton szerkezet Veszprémben — Virág Gábor Építő Bt."
                width={960}
                height={640}
                className="w-full h-full object-cover"
                unoptimized
              />
            </AnimateOnScroll>

            {/* Right portrait — 5 cols, 2 rows (spans full height) */}
            <AnimateOnScroll className="col-span-5 row-span-2 rounded-md img-hover-scale overflow-hidden" delay={0.1} style={{ border: "1px solid var(--color-border)" }}>
              <Image
                src="/galeria/Image05.webp"
                alt="Vasbeton zsaluzás munka közben — Virág Gábor Építő Bt."
                width={640}
                height={960}
                className="w-full h-full object-cover"
                unoptimized
              />
            </AnimateOnScroll>

            {/* Bottom-left portrait — 4 cols */}
            <AnimateOnScroll className="col-span-4 row-span-1 rounded-md img-hover-scale overflow-hidden" delay={0.15} style={{ border: "1px solid var(--color-border)" }}>
              <Image
                src="/galeria/Image25.webp"
                alt="Vasbeton vasalás — Virág Gábor Építő Bt."
                width={640}
                height={480}
                className="w-full h-full object-cover"
                unoptimized
              />
            </AnimateOnScroll>

            {/* Bottom-right landscape — 3 cols */}
            <AnimateOnScroll className="col-span-3 row-span-1 rounded-md img-hover-scale overflow-hidden" delay={0.2} style={{ border: "1px solid var(--color-border)" }}>
              <Image
                src="/galeria/Image33.webp"
                alt="Betonozás Veszprém környékén — Virág Gábor Építő Bt."
                width={480}
                height={360}
                className="w-full h-full object-cover"
                unoptimized
              />
            </AnimateOnScroll>
          </div>

          {/* Mobile: 2-col grid */}
          <div className="grid md:hidden grid-cols-2 gap-2">
            {[
              { src: "/galeria/Image15.webp", alt: "Monolit vasbeton szerkezet Veszprémben" },
              { src: "/galeria/Image05.webp", alt: "Vasbeton zsaluzás munka közben" },
              { src: "/galeria/Image25.webp", alt: "Vasbeton vasalás" },
              { src: "/galeria/Image33.webp", alt: "Betonozás Veszprém környékén" },
            ].map((img, i) => (
              <div
                key={i}
                className="rounded-md img-hover-scale overflow-hidden"
                style={{ height: "160px", border: "1px solid var(--color-border)" }}
              >
                <Image
                  src={img.src}
                  alt={`${img.alt} — Virág Gábor Építő Bt.`}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
            ))}
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

      <ConcretePoLine />

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

      <ConcretePoLine />

      {/* CTA Section */}
      <section
        style={{ background: "var(--color-bg)" }}
        className="section-py"
      >
        <div
          className="container-site"
        >
          <AnimateOnScroll>
            <div
              className="p-10 md:p-16 rounded-xl"
              style={{
                background: "var(--color-bg-subtle)",
                borderLeft: "4px solid var(--color-primary)",
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
                Legyen szó födémről, falról, lépcsőről vagy egyéb vasbeton szerkezetről, vegye fel velünk a kapcsolatot! Veszprémben és az egész Balaton-felvidéken vállalunk munkákat.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/kapcsolat"
                  className="px-7 py-3.5 rounded-md font-semibold text-sm btn-amber"
                >
                  Ajánlatot kérek
                </Link>
                <a
                  href="tel:+36306857901"
                  className="px-7 py-3.5 rounded-md font-semibold text-sm border transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                  style={{
                    color: "var(--color-text-muted)",
                    borderColor: "var(--color-border-strong)",
                  }}
                >
                  06-30/685-7901
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
