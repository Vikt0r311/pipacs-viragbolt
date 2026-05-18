import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Pipacs Virágbolt",
    default: "Pipacs Virágbolt Pécel — Virágkötészet, Ajándék, Alkotóműhely",
  },
  description:
    "Csokrot keresel, egyedi ajándékot, vagy alkotni szeretnél? Pécelben a Pipacs Virágboltban mindezt megtalálod — Klára várja a Szondi utca 53. alatt. Hívj: 06-20/344-3448",
  metadataBase: new URL("https://pipacsviragbolt.hu"),
  openGraph: {
    type: "website",
    locale: "hu_HU",
    siteName: "Pipacs Virágbolt",
    images: [
      {
        url: "/assets/images/hero-bolt-belso.png",
        width: 1200,
        height: 630,
        alt: "Pipacs Virágbolt belső tere — Pécel, Szondi utca 53.",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="hu"
      className={`h-full ${inter.variable} ${cormorant.variable}`}
      style={{ scrollBehavior: "smooth" }}
      data-scroll-behavior="smooth"
    >
      <body
        className="flex flex-col"
        style={{
          paddingTop: "var(--nav-height)",
          fontFamily: "var(--font-inter), var(--font-sans)",
        }}
      >
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA phone="+36203443448" label="Hívj most" />
        <CookieBanner />
      </body>
    </html>
  );
}
