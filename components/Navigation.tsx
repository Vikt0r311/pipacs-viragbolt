"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

interface NavigationProps {
  /** Site name / logo text — TODO: replace with client brand */
  siteName?: string;
  /** Navigation links — defaults to standard HU small business nav */
  items?: NavItem[];
  /** Optional: phone number displayed in nav on desktop */
  phone?: string;
}

const defaultItems: NavItem[] = [
  { label: "Főoldal", href: "/" },
  { label: "Szolgáltatások", href: "/szolgaltatasok" },
  { label: "Galéria", href: "/galeria" },
  { label: "Rólunk", href: "/rolunk" },
  { label: "Kapcsolat", href: "/kapcsolat" },
];

export default function Navigation({
  siteName = "Cégnév", // TODO: Replace with client name
  items = defaultItems,
  phone,
}: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-shadow duration-200"
      style={{
        height: "var(--nav-height)",
        background: "var(--color-bg)",
        borderBottom: scrolled
          ? "1px solid var(--color-border)"
          : "1px solid transparent",
        boxShadow: scrolled ? "var(--shadow-sm)" : "none",
      }}
    >
      <div className="container-site h-full flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-lg shrink-0 transition-opacity hover:opacity-75"
          style={{ color: "var(--color-primary)" }}
        >
          {siteName}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {items.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors"
                style={{
                  color: isActive
                    ? "var(--color-primary)"
                    : "var(--color-text-muted)",
                  background: isActive ? "var(--color-surface)" : "transparent",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          {phone && (
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="text-sm font-medium transition-colors"
              style={{ color: "var(--color-text-muted)" }}
            >
              {phone}
            </a>
          )}
          <Link
            href="/kapcsolat"
            className="px-4 py-2 rounded-md text-sm font-semibold transition-colors"
            style={{
              background: "var(--color-primary)",
              color: "var(--color-text-inverse)",
            }}
          >
            Kapcsolat
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md transition-colors"
          style={{ color: "var(--color-text)" }}
          aria-label={menuOpen ? "Menü bezárása" : "Menü megnyitása"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden absolute top-full inset-x-0 border-t py-4"
          style={{
            background: "var(--color-bg)",
            borderColor: "var(--color-border)",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <nav className="container-site flex flex-col gap-1">
            {items.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2.5 rounded-md text-sm font-medium transition-colors"
                  style={{
                    color: isActive
                      ? "var(--color-primary)"
                      : "var(--color-text)",
                    background: isActive
                      ? "var(--color-surface)"
                      : "transparent",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
            {phone && (
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="px-3 py-2.5 text-sm font-medium mt-2"
                style={{ color: "var(--color-text-muted)" }}
              >
                📞 {phone}
              </a>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
