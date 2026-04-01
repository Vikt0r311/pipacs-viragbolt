import type { Metadata } from "next";
import Link from "next/link";

// TODO: Replace with client data
export const metadata: Metadata = {
  title: "Rólunk | Cégnév", // TODO
  description: "TODO: Rólunk oldal leírás — cégismertető, csapat.", // TODO
  openGraph: {
    title: "Rólunk | Cégnév", // TODO
    description: "TODO: OG leírás", // TODO
  },
};

export default function RolunkPage() {
  return (
    <div className="section-py">
      <div className="container-site">
        {/* Page header */}
        <div className="mb-12 max-w-2xl">
          <h1
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ color: "var(--color-primary)" }}
          >
            Rólunk — TODO: Városban {/* TODO: Add location keyword */}
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            TODO: Cégismertető bevezető. Természetes helyi kulcsszavak,
            pl. Budapest, Pest megye.
          </p>
        </div>

        {/* About section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Text */}
          <div className="flex flex-col gap-5">
            <h2
              className="text-2xl font-bold"
              style={{ color: "var(--color-primary)" }}
            >
              TODO: Cím — Ki vagyunk?
            </h2>
            <p
              className="leading-relaxed"
              style={{ color: "var(--color-text-muted)" }}
            >
              TODO: Bemutatkozó szöveg 1. bekezdés. Mikor alapítottuk, mivel
              foglalkozunk, hol vagyunk.
            </p>
            <p
              className="leading-relaxed"
              style={{ color: "var(--color-text-muted)" }}
            >
              TODO: Bemutatkozó szöveg 2. bekezdés. Tapasztalat, értékek,
              miért válasszanak minket.
            </p>

            {/* Key stats */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              {[
                { value: "TODO+", label: "Elégedett ügyfél" },
                { value: "TODO+", label: "Év tapasztalat" },
                { value: "TODO+", label: "Elvégzett munka" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl text-center"
                  style={{ background: "var(--color-surface)" }}
                >
                  <p
                    className="text-2xl font-black"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-xs mt-1"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image placeholder */}
          <div
            className="aspect-[4/3] rounded-xl flex items-center justify-center"
            style={{
              background: "var(--color-surface)",
              color: "var(--color-text-light)",
            }}
          >
            <p className="text-sm">TODO: Csapatkép / irodakép</p>
          </div>
        </div>

        {/* Values / Why choose us */}
        <div
          className="p-8 rounded-xl"
          style={{ background: "var(--color-bg-subtle)" }}
        >
          <h2
            className="text-2xl font-bold mb-8"
            style={{ color: "var(--color-primary)" }}
          >
            Miért válasszon minket?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "TODO: Érték 1", desc: "TODO: Rövid leírás." },
              { title: "TODO: Érték 2", desc: "TODO: Rövid leírás." },
              { title: "TODO: Érték 3", desc: "TODO: Rövid leírás." },
            ].map((item) => (
              <div key={item.title} className="flex flex-col gap-2">
                <div
                  className="w-8 h-8 rounded-lg"
                  style={{ background: "var(--color-surface)" }}
                />
                <h3
                  className="font-semibold"
                  style={{ color: "var(--color-text)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/kapcsolat"
            className="inline-flex px-8 py-3 rounded-md font-semibold transition-colors"
            style={{
              background: "var(--color-primary)",
              color: "var(--color-text-inverse)",
            }}
          >
            Vegye fel velünk a kapcsolatot
          </Link>
        </div>
      </div>
    </div>
  );
}
