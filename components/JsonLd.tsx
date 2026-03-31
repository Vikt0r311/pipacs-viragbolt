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
  openingHours: string[];  // e.g. ["Mo-Fr 08:00-17:00", "Sa 09:00-13:00"]
  priceRange?: string;     // e.g. "$$"
  areaServed: string[];    // min. 5 settlements
  sameAs?: string[];       // social URLs
  image?: string;
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
    "@type": "LocalBusiness",
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
    openingHoursSpecification: business.openingHours.map((oh) => ({
      "@type": "OpeningHoursSpecification",
      description: oh,
    })),
    priceRange: business.priceRange,
    areaServed: business.areaServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
    sameAs: business.sameAs ?? [],
    image: business.image,
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
