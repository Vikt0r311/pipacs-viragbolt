import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebook } from "react-icons/fa";

const serviceLinks = [
  { label: "Vasbeton födémek", href: "/szolgaltatasok" },
  { label: "Vasbeton falak", href: "/szolgaltatasok" },
  { label: "Koszorú készítés", href: "/szolgaltatasok" },
  { label: "Vasbeton lépcsők", href: "/szolgaltatasok" },
  { label: "Egyéb szerkezetek", href: "/szolgaltatasok" },
];

const pageLinks = [
  { label: "Rólunk", href: "/rolunk" },
  { label: "Galéria", href: "/galeria" },
  { label: "Kapcsolat", href: "/kapcsolat" },
  { label: "Adatvédelmi tájékoztató", href: "/adatvedelmi-tajekoztato" },
  { label: "Impresszum", href: "/impresszum" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-bg-subtle)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="container-site py-14">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10">
          {/* Column 1 — Brand (5 cols) */}
          <div className="col-span-2 md:col-span-5 flex flex-col gap-4">
            <div>
              <p
                className="text-xl font-bold mb-1"
                style={{ color: "var(--color-text)" }}
              >
                <span style={{ color: "var(--color-primary)" }}>Virág Gábor</span> Építő Bt.
              </p>
              <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                Monolit vasbeton szerkezetek kivitelezése Veszprémben és a Balaton-felvidéken.
              </p>
            </div>

            <div className="flex flex-col gap-2 text-sm" style={{ color: "var(--color-text-muted)" }}>
              <a
                href="tel:+36306857901"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Phone size={14} style={{ color: "var(--color-primary)" }} />
                06-30/685-7901
              </a>
              <a
                href="mailto:viraggabi23@gmail.com"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Mail size={14} style={{ color: "var(--color-primary)" }} />
                viraggabi23@gmail.com
              </a>
              <span className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: "var(--color-primary)" }} />
                8225 Szentkirályszabadja, Gárdonyi utca 5.
              </span>
            </div>

            <div className="flex items-center gap-3 mt-1">
              <a
                href="https://www.facebook.com/profile.php?id=61550622090357"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
                aria-label="Facebook"
                style={{ color: "var(--color-primary)" }}
              >
                <FaFacebook size={20} />
              </a>
            </div>

            <p className="text-xs mt-1" style={{ color: "var(--color-text-light)" }}>
              Adószám: 29217731-2-19 · Cégjegyzékszám: 19-06-510279
            </p>
          </div>

          {/* Column 2 — Services (3 cols) */}
          <div className="col-span-1 md:col-span-3">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--color-text-muted)" }}
            >
              Szolgáltatások
            </p>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:opacity-80"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Pages (4 cols) */}
          <div className="md:col-span-4">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--color-text-muted)" }}
            >
              Hasznos linkek
            </p>
            <ul className="flex flex-col gap-2">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:opacity-80"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <div className="container-site py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs" style={{ color: "var(--color-text-light)" }}>
            © 2026 Virág Gábor Építő Bt. Minden jog fenntartva.
          </p>
          <p className="text-xs" style={{ color: "var(--color-text-light)" }}>
            Weboldal készítette:{" "}
            <a
              href="https://cvmarketing.hu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              style={{ color: "var(--color-text-light)" }}
            >
              CV Marketing
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
