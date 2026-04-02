/** JSON-LD structured data component — Server Component, no 'use client' needed */

export interface LocalBusinessData {
  name: string;
  description: string;
  url: string;
  telephone: string;
  email: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry?: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  openingHours: string[];
  priceRange?: string;
  areaServed: string[];
  sameAs?: string[];
  image?: string;
  type?: string;
  taxID?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

interface JsonLdProps {
  business: LocalBusinessData;
  faq?: FaqItem[];
}

function sanitize(obj: unknown): string {
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}

export default function JsonLd({ business, faq }: JsonLdProps) {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": business.type ?? "LocalBusiness",
    name: business.name,
    description: business.description,
    url: business.url,
    telephone: business.telephone,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.streetAddress,
      addressLocality: business.address.addressLocality,
      postalCode: business.address.postalCode,
      addressCountry: business.address.addressCountry ?? "HU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    openingHours: business.openingHours,
    priceRange: business.priceRange,
    areaServed: business.areaServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
    sameAs: business.sameAs ?? [],
    image: business.image,
    taxID: business.taxID,
  };

  const faqSchema = faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sanitize(localBusiness) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: sanitize(faqSchema) }}
        />
      )}
    </>
  );
}
