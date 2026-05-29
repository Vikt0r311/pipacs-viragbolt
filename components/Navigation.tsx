"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { label: "Főoldal", href: "/" },
  { label: "Virágaink", href: "/viragaink" },
  { label: "Ajándék", href: "/ajandek" },
  { label: "Alkotóműhely", href: "/alkotomuhely" },
  { label: "Galéria", href: "/galeria" },
  { label: "Rólam", href: "/rolam" },
  { label: "Kapcsolat", href: "/kapcsolat" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        height: "var(--nav-height)",
        background: "#faf6f0",
        borderBottom: "1px solid var(--color-border)",
        boxShadow: scrolled ? "0 2px 12px rgb(61 107 82 / 0.10)" : "none",
      }}
    >
      <div className="container-site h-full flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="shrink-0 flex items-center transition-opacity hover:opacity-80"
          aria-label="Pipacs Virágbolt — Főoldal"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="Pipacs Virágbolt"
            height={48}
            style={{ height: "clamp(38px, 5vw, 52px)", width: "auto" }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5" aria-label="Főmenü">
          {navItems.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors"
                style={{
                  color: isActive ? "var(--color-green)" : "var(--color-text-muted)",
                  background: isActive ? "rgba(61,107,82,0.08)" : "transparent",
                  fontWeight: isActive ? 600 : 500,
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <a
            href="tel:+36204474328"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all btn-primary"
          >
            <Phone size={14} />
            Telefonos egyeztetés
          </a>
        </div>

        {/* Mobile: phone pill + hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          <a
            href="tel:+36204474328"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-semibold btn-primary"
            aria-label="Telefonhívás"
          >
            <Phone size={13} />
            <span className="hidden sm:inline">Telefon</span>
          </a>
          <button
            className="p-2 rounded-md transition-colors"
            style={{ color: "var(--color-green)" }}
            aria-label={menuOpen ? "Menü bezárása" : "Menü megnyitása"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="lg:hidden absolute top-full inset-x-0 border-t"
          style={{
            background: "#faf6f0",
            borderColor: "var(--color-border)",
            boxShadow: "0 8px 32px rgb(61 107 82 / 0.15)",
          }}
        >
          <nav className="container-site flex flex-col py-4 gap-1" aria-label="Mobilmenü">
            {navItems.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-md text-sm font-medium transition-colors"
                  style={{
                    color: isActive ? "var(--color-green)" : "var(--color-text-muted)",
                    background: isActive ? "rgba(61,107,82,0.08)" : "transparent",
                    fontWeight: isActive ? 600 : 500,
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
