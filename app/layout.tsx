import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import CookieBanner from "@/components/CookieBanner";

// TODO: Replace all placeholder values with client data
export const metadata: Metadata = {
  title: {
    template: "%s | Cégnév", // TODO: Replace "Cégnév"
    default: "Szolgáltatás Városban | Cégnév", // TODO: Replace
  },
  description: "TODO: Töltse ki az ügyfél leírásával.", // TODO
  metadataBase: new URL("https://example.hu"), // TODO: Replace with client domain
  openGraph: {
    type: "website",
    locale: "hu_HU",
    siteName: "Cégnév", // TODO: Replace
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
    <html lang="hu" className="h-full">
      <body
        className="flex flex-col"
        style={{ paddingTop: "var(--nav-height)" }}
      >
        <Navigation
          siteName="Cégnév" // TODO: Replace
          // phone="+36 30 123 4567" // TODO: Uncomment and set client phone
        />
        <main className="flex-1">{children}</main>
        <Footer
          companyName="Cégnév" // TODO: Replace
          // tagline="TODO: ügyfél szlogen"
          // phone="+36 30 123 4567"
          // email="info@pelda.hu"
          // address="1234 Budapest, Példa utca 1."
        />
        <FloatingCTA
          label="Hívjon most!" // TODO: Adjust label
          // phone="+36 30 123 4567" // TODO: Uncomment and set
        />
        <CookieBanner />
      </body>
    </html>
  );
}
