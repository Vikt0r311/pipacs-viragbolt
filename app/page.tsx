import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

// TODO: Replace with real client metadata
export const metadata: Metadata = {
  title: "Szolgáltatás Városban | Cégnév", // TODO
  description: "TODO: Főoldal leírás — szolgáltatás, város, kulcsszavak.", // TODO
  openGraph: {
    title: "Szolgáltatás Városban | Cégnév", // TODO
    description: "TODO: OG leírás", // TODO
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }], // TODO
  },
};

// TODO: Fill in with real client data before going live
const businessData = {
  name: "Cégnév", // TODO
  description: "TODO: cég leírása", // TODO
  url: "https://example.hu", // TODO
  telephone: "+36301234567", // TODO
  email: "info@example.hu", // TODO
  address: {
    streetAddress: "Példa utca 1.", // TODO
    addressLocality: "Budapest", // TODO
    postalCode: "1234", // TODO
  },
  geo: { latitude: 47.4979, longitude: 19.0402 }, // TODO
  openingHours: ["Mo-Fr 08:00-17:00", "Sa 09:00-13:00"], // TODO
  priceRange: "$$", // TODO
  areaServed: [
    "Budapest", // TODO — add min. 5 nearby settlements
    "Pest megye",
    "Budaörs",
    "Érd",
    "Törökbálint",
  ],
  sameAs: [
    "https://www.facebook.com/TODO", // TODO
    "https://www.instagram.com/TODO", // TODO
  ],
};

const faqData = [
  {
    question: "TODO: Helyi keresési kérdés 1?", // TODO
    answer: "TODO: Válasz 1.", // TODO
  },
  {
    question: "TODO: Helyi keresési kérdés 2?", // TODO
    answer: "TODO: Válasz 2.", // TODO
  },
  {
    question: "TODO: Helyi keresési kérdés 3?", // TODO
    answer: "TODO: Válasz 3.", // TODO
  },
  {
    question: "TODO: Helyi keresési kérdés 4?", // TODO
    answer: "TODO: Válasz 4.", // TODO
  },
  {
    question: "TODO: Helyi keresési kérdés 5?", // TODO
    answer: "TODO: Válasz 5.", // TODO
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd business={businessData} faq={faqData} />

      {/* HERO — TODO: Replace placeholder text & image */}
      <section
        className="section-py"
        style={{ background: "var(--color-bg-subtle)" }}
      >
        <div className="container-site">
          <div className="max-w-2xl">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--color-secondary)" }}
            >
              TODO: Alcím / tagline
            </p>
            {/* H1 must contain primary location keyword */}
            <h1
              className="text-4xl md:text-5xl font-bold leading-tight mb-6"
              style={{ color: "var(--color-primary)" }}
            >
              TODO: Főcím — Szolgáltatás Városban
            </h1>
            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: "var(--color-text-muted)" }}
            >
              TODO: Bevezető szöveg. Természetes helyi kulcsszavak: Budapest,
              Pest megye, szolgáltatás területe.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/kapcsolat"
                className="px-6 py-3 rounded-md font-semibold transition-colors"
                style={{
                  background: "var(--color-primary)",
                  color: "var(--color-text-inverse)",
                }}
              >
                Kapcsolat felvétel
              </Link>
              <Link
                href="/szolgaltatasok"
                className="px-6 py-3 rounded-md font-semibold border transition-colors"
                style={{
                  color: "var(--color-primary)",
                  borderColor: "var(--color-border-strong)",
                  background: "var(--color-bg)",
                }}
              >
                Szolgáltatások
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW — TODO: Add real services */}
      <section className="section-py">
        <div className="container-site">
          <h2
            className="text-3xl font-bold mb-10"
            style={{ color: "var(--color-primary)" }}
          >
            Szolgáltatásaink
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="p-6 rounded-xl border"
                style={{
                  background: "var(--color-bg)",
                  borderColor: "var(--color-border)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg mb-4"
                  style={{ background: "var(--color-surface)" }}
                />
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "var(--color-text)" }}
                >
                  TODO: Szolgáltatás {i}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  TODO: Rövid leírás a szolgáltatásról.
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/szolgaltatasok"
              className="inline-flex text-sm font-semibold underline"
              style={{ color: "var(--color-primary)" }}
            >
              Összes szolgáltatás →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ — local search intent */}
      <section
        className="section-py"
        style={{ background: "var(--color-bg-subtle)" }}
      >
        <div className="container-site">
          <h2
            className="text-3xl font-bold mb-10"
            style={{ color: "var(--color-primary)" }}
          >
            Gyakori kérdések
          </h2>
          <div className="flex flex-col gap-4 max-w-3xl">
            {faqData.map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border"
                style={{
                  background: "var(--color-bg)",
                  borderColor: "var(--color-border)",
                }}
              >
                <h3
                  className="font-semibold mb-2"
                  style={{ color: "var(--color-text)" }}
                >
                  {item.question}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section-py">
        <div className="container-site text-center">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: "var(--color-primary)" }}
          >
            TODO: Cselekvésre ösztönző cím
          </h2>
          <p
            className="text-lg mb-8 max-w-xl mx-auto"
            style={{ color: "var(--color-text-muted)" }}
          >
            TODO: Motiváló szöveg, helyi utalással.
          </p>
          <Link
            href="/kapcsolat"
            className="inline-flex px-8 py-3 rounded-md font-semibold transition-colors"
            style={{
              background: "var(--color-secondary)",
              color: "var(--color-text-inverse)",
            }}
          >
            Ingyenes árajánlat kérése
          </Link>
        </div>
      </section>
    </>
  );
}
