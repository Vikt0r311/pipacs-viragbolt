import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
  /** Company name — TODO: replace with client name */
  companyName?: string;
  /** Optional tagline under company name */
  tagline?: string;
  /** Optional phone */
  phone?: string;
  /** Optional email */
  email?: string;
  /** Optional address */
  address?: string;
  /** Column 2 links — defaults to services */
  serviceLinks?: FooterLink[];
  /** Column 3 links — defaults to useful links */
  usefulLinks?: FooterLink[];
}

const defaultServiceLinks: FooterLink[] = [
  { label: "Szolgáltatás 1", href: "/szolgaltatasok" },
  { label: "Szolgáltatás 2", href: "/szolgaltatasok" },
  { label: "Szolgáltatás 3", href: "/szolgaltatasok" },
];

const defaultUsefulLinks: FooterLink[] = [
  { label: "Rólunk", href: "/rolunk" },
  { label: "Galéria", href: "/galeria" },
  { label: "Kapcsolat", href: "/kapcsolat" },
  { label: "Adatvédelmi tájékoztató", href: "/adatvedelmi-tajekoztato" },
  { label: "Impresszum", href: "/impresszum" },
];

export default function Footer({
  companyName = "Cégnév", // TODO: Replace with client name
  tagline, // TODO: Add client tagline
  phone, // TODO: Add client phone
  email, // TODO: Add client email
  address, // TODO: Add client address
  serviceLinks = defaultServiceLinks,
  usefulLinks = defaultUsefulLinks,
}: FooterProps) {
  return (
    <footer
      className="border-t mt-auto"
      style={{
        background: "var(--color-bg-subtle)",
        borderColor: "var(--color-border)",
      }}
    >
      {/* Main footer grid */}
      <div className="container-site py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-3">
            <p
              className="text-lg font-bold"
              style={{ color: "var(--color-primary)" }}
            >
              {companyName}
            </p>
            {tagline && (
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-text-muted)" }}
              >
                {tagline}
              </p>
            )}
            <div
              className="flex flex-col gap-1 text-sm mt-1"
              style={{ color: "var(--color-text-muted)" }}
            >
              {phone && (
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="hover:underline"
                >
                  {phone}
                </a>
              )}
              {email && (
                <a href={`mailto:${email}`} className="hover:underline">
                  {email}
                </a>
              )}
              {address && <span>{address}</span>}
            </div>
          </div>

          {/* Column 2 — Services */}
          <div>
            <p
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ color: "var(--color-text)" }}
            >
              Szolgáltatások
            </p>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:underline"
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
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ color: "var(--color-text)" }}
            >
              Hasznos linkek
            </p>
            <ul className="flex flex-col gap-2">
              {usefulLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:underline"
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
        className="border-t"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div className="container-site py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p
            className="text-xs"
            style={{ color: "var(--color-text-light)" }}
          >
            © 2026 {companyName}. Minden jog fenntartva.
          </p>
          {/* DO NOT REMOVE — required on every project */}
          <p
            className="text-xs"
            style={{ color: "var(--color-text-light)" }}
          >
            Weboldal készítette:{" "}
            <a
              href="https://cvmarketing.hu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              style={{ color: "var(--color-text-light)" }}
            >
              CVMarketing
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
