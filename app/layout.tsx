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
    template: "%s | Cégnév",
    default: "Cégnév — Szolgáltatás Városban",
  },
  description: "Rövid cégleírás. Szolgáltatás Városban és környékén.",
  metadataBase: new URL("https://www.example.hu"),
  openGraph: {
    type: "website",
    locale: "hu_HU",
    siteName: "Cégnév",
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
          siteName="Cégnév"
          phone="+36 XX XXX XXXX"
        />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA phone="+36XXXXXXXXX" label="Hívjon most!" />
        <CookieBanner />
      </body>
    </html>
  );
}
