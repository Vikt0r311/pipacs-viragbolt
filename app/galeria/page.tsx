import type { Metadata } from "next";

// TODO: Replace with client data
export const metadata: Metadata = {
  title: "Galéria | Cégnév", // TODO
  description: "TODO: Galéria oldal leírás.", // TODO
  openGraph: {
    title: "Galéria | Cégnév", // TODO
    description: "TODO: OG leírás", // TODO
  },
};

export default function GaleriaPage() {
  return (
    <div className="section-py">
      <div className="container-site">
        {/* Page header */}
        <div className="mb-12 max-w-2xl">
          <h1
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ color: "var(--color-primary)" }}
          >
            Galéria — TODO: Városban {/* TODO: Add location keyword */}
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            TODO: Bevezető szöveg. Természetes helyi kulcsszavak.
          </p>
        </div>

        {/* Gallery grid — TODO: Replace placeholders with real images */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-lg overflow-hidden"
              style={{ background: "var(--color-surface)" }}
              aria-label={`TODO: Kép leírása ${i + 1}`}
            >
              {/* TODO: Replace with next/image component and real photos */}
              <div
                className="w-full h-full flex items-center justify-center text-xs"
                style={{ color: "var(--color-text-light)" }}
              >
                Kép {i + 1}
              </div>
            </div>
          ))}
        </div>

        <p
          className="mt-8 text-sm text-center"
          style={{ color: "var(--color-text-light)" }}
        >
          TODO: Képek hozzáadása a localhost review után.
        </p>
      </div>
    </div>
  );
}
