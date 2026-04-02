import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ConcretePoLine from "@/components/ConcretePoLine";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Vasbeton Szerkezetek Kivitelezése Veszprém Megyében",
  description:
    "Vasbeton szerkezetek kivitelezése Veszprém megyében. Monolit födémek, falak, koszorúk, lépcsők zsaluzása, vasalása és betonozása. Virág Gábor Építő Bt. | 06-30/685-7901",
  openGraph: {
    title: "Vasbeton Szerkezetek Kivitelezése Veszprém Megyében | Virág Gábor Építő Bt.",
    description:
      "Monolit vasbeton szerkezetek: födémek, falak, koszorúk, lépcsők zsaluzása, vasalása, betonozása Veszprém és Balaton-felvidéken.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    url: "https://www.viragepito.hu/szolgaltatasok",
  },
};

const services = [
  {
    id: "fodem",
    title: "Monolit Vasbeton Födém",
    subtitle: "Zsaluzás · Vasalás · Betonozás",
    image: "/galeria/Image165.webp",
    imageAlt: "Monolit vasbeton födém betonozása Veszprémben — Virág Gábor Építő Bt.",
    paragraphs: [
      "A monolit vasbeton födém a modern építészet egyik legmegbízhatóbb megoldása. Panelzsaluzattal dolgozunk, amely lehetővé teszi, hogy bármilyen alaprajzi geometriához tökéletesen illeszkedő felső tömeget alkossunk — legyen szó szabálytalan alaprajzú Balaton-felvidéki nyaralóról, veszprémi társasházról vagy ipari csarnokról.",
      "A monolit technológia fő előnyei az előregyártott megoldásokkal szemben: nincs szükség utólagos vakolásra, kiemelkedő akusztikai és hőszigetelési tulajdonságokat kínál, és tökéletesen beilleszthető bármilyen épületgeometriába. A helyszínen öntött beton egységes, szünetmentes szerkezetet alkot.",
    ],
    specs: [
      "Tömör vasbeton és bordás (alibi) födémek",
      "Panelzsaluzat és hagyományos deszkazsaluzat",
      "Statikai terv szerinti vasalás",
      "C20/25 – C30/37 betonminőség",
    ],
  },
  {
    id: "falak",
    title: "Vasbeton Falak",
    subtitle: "Zsaluzás · Vasalás · Betonozás",
    image: "/galeria/Image200.webp",
    imageAlt: "Vasbeton fal panelzsaluzat Veszprém megye — Virág Gábor Építő Bt.",
    paragraphs: [
      "A monolit vasbeton teherhordó falak kivitelezése nagy panelzsaluzattal történik. A zsaluzati rendszer precíz beállításával biztosítjuk a falak tökéletes síkját és egyenességét — ami különösen fontos a belső burkolatokhoz.",
      "A vasbeton fal vékonyabb lehet, mint a hagyományos tégla- vagy blokkfal, miközben lényegesen nagyobb terhet visel el. Ez azt jelenti, hogy ugyanakkora külső méret mellett 5–6%-kal több hasznos belső alapterület érhető el. Veszprém-vidéki nyaralóknál és társasházoknál ez komoly értéknövelő tényező.",
    ],
    specs: [
      "Egyoldali és kétoldali panelzsaluzat",
      "Falvastagság: 15–40 cm",
      "Pillérek és falak integrált kialakítása",
      "Nyílások pontos kialakítása zsaluzattal",
    ],
  },
  {
    id: "koszoru",
    title: "Koszorú Készítés",
    subtitle: "Vasalás · Zsaluzás · Betonozás",
    image: "/galeria/Image125.webp",
    imageAlt: "Koszorú vasalás Veszprém környékén — Virág Gábor Építő Bt.",
    paragraphs: [
      "A koszorú a falszerkezet \"kapcsa\" — a teherhordó falak felső részén körbe futó vasbeton gerendaelem, amely összefogja a falakat és egyenletesen elosztja a tetőszerkezet terhét.",
      "Veszprém-vidéki és Balaton-felvidéki építkezéseken rendszeresen végzünk koszorúbetonozást. A koszorú kialakítása precíz zsaluzatot és gondos vasalást igényel — ezeket garantáljuk minden projektnél.",
    ],
    specs: [
      "Peremgerendás és talpas koszorúk",
      "Integrálás meglévő falszerkezetbe",
      "Statikai terv alapján",
      "Egyedi méretek szerint",
    ],
  },
  {
    id: "lepcsok",
    title: "Vasbeton Lépcsők",
    subtitle: "Zsaluzás · Vasalás · Betonozás",
    image: "/galeria/Image155.webp",
    imageAlt: "Vasbeton lépcső zsaluzat Veszprémben — Virág Gábor Építő Bt.",
    paragraphs: [
      "A helyszínen öntött monolit vasbeton lépcső az egyetlen megoldás, amely tökéletes geometriát biztosít bármilyen alaprajzi elrendezéshez. Egyenes, L-alakú, U-alakú, íves vagy egyedi formájú lépcsőket kivitelezünk — a statikai terv szerint, precíz zsaluzattal.",
      "Az előregyártott lépcsőelemekkel ellentétben a monolit lépcső egységesen kapcsolódik a szomszédos szerkezetekhez, így nincs repedési veszély az illesztéseknél. Tartóssága páratlan — évtizedekig tart értékvesztés nélkül.",
    ],
    specs: [
      "Egyenes, L-, U-alakú és íves lépcsők",
      "Fogadópihenős és fogadógerendás megoldások",
      "Mindenféle korlát-rögzítési megoldáshoz alkalmas",
      "Csúszásgátló felület kialakítható",
    ],
  },
  {
    id: "egyeb",
    title: "Egyéb Vasbeton Szerkezetek",
    subtitle: "Pillérek · Gerendák · Támfalak · Alapozás",
    image: "/galeria/Image35.webp",
    imageAlt: "Vasbeton pillér alapozás Veszprém megye — Virág Gábor Építő Bt.",
    paragraphs: [
      "Veszprém megye és a Balaton-felvidék építkezésein számos egyéb vasbeton szerkezeti elem kivitelezésére van szükség. Ezeket is teljes körűen vállaljuk: pillérek, gerendák, áthidalók, támfalak, sávos és lemezes alapozás, garázsmedencék és egyedi szerkezetek.",
      "Az egyedi megoldásoknál különösen fontos a zsaluzat kialakításának pontossága. Több évnyi tapasztalattal rendelkezünk ipari csarnokok, lakóépületek és Balaton-parti nyaralók egyedi vasbeton megoldásainak kivitelezésében.",
    ],
    specs: [
      "Oszlopok és pillérek",
      "Vasbeton gerendák és áthidalók",
      "Sávos és lemezes alapozás",
      "Vasbeton támfalak",
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
            Vasbeton Szerkezetek Kivitelezése{" "}
            <span style={{ color: "var(--color-primary)" }}>Veszprém Megyében</span>
          </h1>
          <p className="text-base md:text-lg max-w-2xl" style={{ color: "var(--color-text-muted)" }}>
            Monolit födémek, falak, koszorúk, lépcsők és egyéb szerkezetek szakszerű zsaluzása, vasalása és betonozása — Szentkirályszabadján és az egész Balaton-felvidéken.
          </p>
        </div>
      </section>

      {/* Services */}
      {services.map((service, i) => (
        <div key={service.id}>
          <section
            className="section-py"
            style={{ background: i % 2 === 0 ? "var(--color-bg)" : "var(--color-bg-subtle)" }}
          >
            <div className="container-site">
              <div className={`grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start`}>
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

                {/* Service image — 5 cols */}
                <AnimateOnScroll
                  className={`md:col-span-5 ${i % 2 === 1 ? "md:order-1" : ""}`}
                  delay={0.15}
                >
                  <div
                    className="w-full rounded-md img-hover-scale overflow-hidden"
                    style={{ aspectRatio: "4/3", border: "1px solid var(--color-border)" }}
                  >
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </section>
          <ConcretePoLine />
        </div>
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
                Veszprémben, Balatonalmádiban, Balatonfűzfőn és a Balaton-felvidék minden területén vállalunk vasbeton munkákat.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/kapcsolat" className="px-7 py-3.5 rounded-md font-semibold text-sm btn-amber">
                  Ajánlatot kérek
                </Link>
                <a
                  href="tel:+36306857901"
                  className="px-7 py-3.5 rounded-md font-semibold text-sm border transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                  style={{ color: "var(--color-text-muted)", borderColor: "var(--color-border-strong)" }}
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
