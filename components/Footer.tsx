import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
  companyName?: string;
  tagline?: string;
  phone?: string;
  email?: string;
  address?: string;
  serviceLinks?: FooterLink[];
  usefulLinks?: FooterLink[];
}

const defaultServiceLinks: FooterLink[] = [
  { label: "Szolgáltatás 1", href: "/szolgaltatasok" },
  { label: "Szolgáltatás 2", href: "/szolgaltatasok" },
  { label: "Szolgáltatás 3", href: "/szolgaltatasok" },
  { label: "Szolgáltatás 4", href: "/szolgaltatasok" },
  { label: "Szolgáltatás 5", href: "/szolgaltatasok" },
];

const defaultUsefulLinks: FooterLink[] = [
  { label: "Rólunk", href: "/rolunk" },
  { label: "Galéria", href: "/galeria" },
  { label: "Kapcsolat", href: "/kapcsolat" },
  { label: "Adatvédelmi tájékoztató", href: "/adatvedelmi-tajekoztato" },
  { label: "Impresszum", href: "/impresszum" },
];

export default function Footer({
  companyName = "Cégnév",
  tagline = "Rövid leírás a cégről és a szolgáltatásról.",
  phone = "+36 XX XXX XXXX",
  email = "info@example.hu",
  address = "1000 Városnév, Utca neve 1.",
  serviceLinks = defaultServiceLinks,
  usefulLinks = defaultUsefulLinks,
}: FooterProps) {
  return (
    <footer
      style={{
        background: "var(--color-bg-subtle)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="container-site py-14">
        {/* Outer grid: 1 col mobile, 3 cols desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1 — Brand (full width mobile, 1 col desktop) */}
          <div className="flex flex-col gap-4">
            <div>
              <p
                className="text-xl font-bold mb-1"
                style={{ color: "var(--color-text)" }}
              >
                <span style={{ color: "var(--color-primary)" }}>{companyName}</span>
              </p>
              <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                {tagline}
              </p>
            </div>

            <div className="flex flex-col gap-2 text-sm" style={{ color: "var(--color-text-muted)" }}>
              <a
                href={`tel:${phone.replace(/[\s\-\/]/g, "")}`}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Phone size={14} style={{ color: "var(--color-primary)" }} />
                {phone}
              </a>
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Mail size={14} style={{ color: "var(--color-primary)" }} />
                {email}
              </a>
              <span className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: "var(--color-primary)" }} />
                {address}
              </span>
            </div>
          </div>

          {/* Two link columns — side by side on mobile (grid-cols-2), flow into 3-col grid on desktop */}
          <div className="grid grid-cols-2 gap-10 md:contents">
            {/* Column 2 — Services */}
            <div>
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

            {/* Column 3 — Useful links */}
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "var(--color-text-muted)" }}
              >
                Hasznos linkek
              </p>
              <ul className="flex flex-col gap-2">
                {usefulLinks.map((link) => (
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
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <div className="container-site py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs" style={{ color: "var(--color-text-light)" }}>
            © 2026 {companyName}. Minden jog fenntartva.
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
