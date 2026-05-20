import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FaFacebook } from "react-icons/fa";

const navLinks = [
  { label: "Főoldal", href: "/" },
  { label: "Virágaink", href: "/viragaink" },
  { label: "Ajándék & Kézművesség", href: "/ajandek" },
  { label: "Alkotóműhely", href: "/alkotomuhely" },
  { label: "Rólam", href: "/rolam" },
  { label: "Kapcsolat", href: "/kapcsolat" },
];

const legalLinks = [
  { label: "Adatvédelmi tájékoztató", href: "/adatvedelmi-tajekoztato" },
  { label: "Impresszum", href: "/impresszum" },
];

const openingHours = [
  { day: "Hétfő", time: "12:00–19:00" },
  { day: "Kedd–Péntek", time: "09:00–19:00" },
  { day: "Szombat–Vasárnap", time: "09:00–14:00" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-green)", color: "var(--color-text-inverse)" }}>
      {/* Main footer content */}
      <div className="container-site py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Col 1 — Brand + Contact */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            <Link href="/" className="flex items-center" aria-label="Pipacs Virágbolt — Főoldal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="Pipacs Virágbolt"
                style={{ height: "52px", width: "auto" }}
              />
            </Link>

            <div className="flex flex-col gap-2.5 text-sm" style={{ color: "rgba(250,246,240,0.75)" }}>
              <a
                href="tel:+36203443448"
                className="flex items-center gap-2.5 hover:opacity-100 transition-opacity"
                style={{ color: "rgba(250,246,240,0.9)" }}
              >
                <Phone size={14} style={{ color: "var(--color-warm-light)", flexShrink: 0 }} />
                06-20/344-3448
              </a>
              <a
                href="mailto:info@novenyvilag.hu"
                className="flex items-center gap-2.5 hover:opacity-100 transition-opacity"
              >
                <Mail size={14} style={{ color: "var(--color-warm-light)", flexShrink: 0 }} />
                info@novenyvilag.hu
              </a>
              <span className="flex items-start gap-2.5">
                <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: "var(--color-warm-light)" }} />
                <span>
                  2119 Pécel, Szondi utca 53.
                  <br />
                  <span style={{ color: "rgba(250,246,240,0.55)", fontSize: "0.75rem" }}>
                    Bejárat: Fáy utca felőli kapu
                  </span>
                </span>
              </span>
              <a
                href="https://www.facebook.com/pipacsviragbolt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:opacity-100 transition-opacity"
              >
                <FaFacebook size={14} style={{ color: "var(--color-warm-light)", flexShrink: 0 }} />
                Pipacs a Facebookon
              </a>
            </div>
          </div>

          {/* Col 2 — Nyitvatartás */}
          <div className="flex flex-col gap-4">
            <p
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "rgba(250,246,240,0.5)" }}
            >
              Nyitvatartás
            </p>
            <div className="flex flex-col gap-2.5">
              {openingHours.map((item) => (
                <div key={item.day} className="flex justify-between gap-4 text-sm">
                  <span style={{ color: "rgba(250,246,240,0.65)" }}>{item.day}</span>
                  <span style={{ color: "rgba(250,246,240,0.9)" }} className="font-medium">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1.5 mt-1 text-xs" style={{ color: "rgba(250,246,240,0.5)" }}>
              <Clock size={11} />
              <span>Hétfőn 12:00-tól nyitva</span>
            </div>
          </div>

          {/* Col 3 — Linkek */}
          <div className="flex flex-col gap-4">
            <p
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "rgba(250,246,240,0.5)" }}
            >
              Linkek
            </p>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-opacity hover:opacity-100"
                    style={{ color: "rgba(250,246,240,0.7)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Kapcsolat gyors */}
          <div className="flex flex-col gap-4">
            <p
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "rgba(250,246,240,0.5)" }}
            >
              Kapcsolat
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+36203443448"
                className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold btn-primary w-fit"
              >
                <Phone size={13} />
                06-20/344-3448
              </a>
              <a
                href="https://m.me/pipacsviragbolt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-opacity hover:opacity-100"
                style={{ color: "rgba(250,246,240,0.7)" }}
              >
                Írj Messengeren →
              </a>
            </div>
            <div className="flex flex-col gap-1.5 mt-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs transition-opacity hover:opacity-100"
                  style={{ color: "rgba(250,246,240,0.45)" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(250,246,240,0.12)" }}>
        <div className="container-site py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs" style={{ color: "rgba(250,246,240,0.4)" }}>
            © Pipacs Virágbolt. Minden jog fenntartva.
          </p>
        </div>
      </div>
    </footer>
  );
}
