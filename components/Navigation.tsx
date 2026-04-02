"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

interface NavigationProps {
  siteName?: string;
  items?: NavItem[];
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
  siteName = "Virág Gábor Építő Bt.",
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

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

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
        background: scrolled ? "rgba(26,26,26,0.97)" : "rgba(26,26,26,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled
          ? "1px solid var(--color-border)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 24px rgb(0 0 0 / 0.5)" : "none",
      }}
    >
      <div className="container-site h-full flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="shrink-0 transition-opacity hover:opacity-80">
          <Image
            src="/logo.png"
            alt="Virág Gábor Építő Bt."
            width={150}
            height={100}
            className="h-20 w-auto"
            unoptimized
          />
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
              href={`tel:${phone.replace(/[\s\-\/]/g, "")}`}
              className="flex items-center gap-1.5 text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: "var(--color-text-muted)" }}
            >
              <Phone size={14} />
              {phone}
            </a>
          )}
          <Link
            href="/kapcsolat"
            className="px-4 py-2 rounded-md text-sm font-semibold btn-amber"
          >
            Ajánlatot kérek
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
            background: "rgba(26,26,26,0.98)",
            borderColor: "var(--color-border)",
            boxShadow: "0 12px 40px rgb(0 0 0 / 0.6)",
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
                  className="px-3 py-3 rounded-md text-sm font-medium transition-colors"
                  style={{
                    color: isActive
                      ? "var(--color-primary)"
                      : "var(--color-text)",
                    background: isActive
                      ? "rgba(212,147,42,0.1)"
                      : "transparent",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
            {phone && (
              <a
                href={`tel:${phone.replace(/[\s\-\/]/g, "")}`}
                className="flex items-center gap-2 px-3 py-3 text-sm font-medium mt-2 border-t"
                style={{
                  color: "var(--color-primary)",
                  borderColor: "var(--color-border)",
                }}
              >
                <Phone size={16} />
                {phone}
              </a>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
