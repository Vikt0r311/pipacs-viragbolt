import type { Metadata } from "next";
import Link from "next/link";

// TODO: Replace with client data
export const metadata: Metadata = {
  title: "Szolgáltatások Városban | Cégnév", // TODO
  description: "TODO: Szolgáltatások oldal leírás — helyi kulcsszavak.", // TODO
  openGraph: {
    title: "Szolgáltatások Városban | Cégnév", // TODO
    description: "TODO: OG leírás", // TODO
  },
};

// TODO: Fill in with real service data
const services = [
  {
    id: 1,
    title: "TODO: Szolgáltatás 1",
    description:
      "TODO: Részletes leírás. Természetes helyi kulcsszavak: Budapest, Pest megye.",
    price: "TODO: Ártól",
  },
  {
    id: 2,
    title: "TODO: Szolgáltatás 2",
    description: "TODO: Részletes leírás a második szolgáltatásról.",
    price: "TODO: Ártól",
  },
  {
    id: 3,
    title: "TODO: Szolgáltatás 3",
    description: "TODO: Részletes leírás a harmadik szolgáltatásról.",
    price: "TODO: Ártól",
  },
  {
    id: 4,
    title: "TODO: Szolgáltatás 4",
    description: "TODO: Részletes leírás a negyedik szolgáltatásról.",
    price: "TODO: Ártól",
  },
];

export default function SzolgaltatasokPage() {
  return (
    <div className="section-py">
      <div className="container-site">
        {/* Page header */}
        <div className="mb-12 max-w-2xl">
          <h1
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ color: "var(--color-primary)" }}
          >
            Szolgáltatásaink — TODO: Városban {/* TODO: Add location keyword */}
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            TODO: Bevezető szöveg a szolgáltatásokról. Természetes helyi
            kulcsszavak, pl. Budapest, Pest megye, körzet.
          </p>
        </div>

        {/* Services list */}
        <div className="flex flex-col gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col sm:flex-row sm:items-start gap-6 p-6 rounded-xl border"
              style={{
                background: "var(--color-bg)",
                borderColor: "var(--color-border)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              {/* Icon placeholder */}
              <div
                className="w-12 h-12 rounded-lg shrink-0"
                style={{ background: "var(--color-surface)" }}
              />
              <div className="flex-1">
                <h2
                  className="text-xl font-semibold mb-2"
                  style={{ color: "var(--color-text)" }}
                >
                  {service.title}
                </h2>
                <p
                  className="text-sm leading-relaxed mb-3"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {service.description}
                </p>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "var(--color-secondary)" }}
                >
                  {service.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-12 p-8 rounded-xl text-center"
          style={{ background: "var(--color-surface)" }}
        >
          <h2
            className="text-2xl font-bold mb-3"
            style={{ color: "var(--color-primary)" }}
          >
            Kérdése van? Vegye fel velünk a kapcsolatot!
          </h2>
          <p
            className="mb-6"
            style={{ color: "var(--color-text-muted)" }}
          >
            TODO: CTA alszöveg.
          </p>
          <Link
            href="/kapcsolat"
            className="inline-flex px-6 py-3 rounded-md font-semibold transition-colors"
            style={{
              background: "var(--color-primary)",
              color: "var(--color-text-inverse)",
            }}
          >
            Ingyenes árajánlat
          </Link>
        </div>
      </div>
    </div>
  );
}
