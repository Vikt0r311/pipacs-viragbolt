import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Virág Gábor Építő Bt.",
    default: "Monolit Vasbeton Szerkezetek Veszprémben | Virág Gábor Építő Bt.",
  },
  description:
    "Monolit vasbeton szerkezetek kivitelezése Veszprémben és a Balaton-felvidéken. Födémek, falak, koszorúk, lépcsők zsaluzása, vasalása, betonozása. Kérjen ajánlatot!",
  metadataBase: new URL("https://www.viragepito.hu"),
  openGraph: {
    type: "website",
    locale: "hu_HU",
    siteName: "Virág Gábor Építő Bt.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
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
      className={`h-full ${inter.variable}`}
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
        <Navigation
          siteName="Virág Gábor Építő Bt."
          phone="06-30/685-7901"
        />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA phone="+36306857901" label="Hívjon most!" />
        <CookieBanner />
      </body>
    </html>
  );
}
