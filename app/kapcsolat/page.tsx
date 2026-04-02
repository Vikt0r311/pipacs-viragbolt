import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Kapcsolat | Cégnév",
  description:
    "Kapcsolat — Cégnév, Városnév. Kérjen ingyenes ajánlatot! Tel: +36 XX XXX XXXX",
  openGraph: {
    title: "Kapcsolat | Cégnév",
    description: "Kérjen ingyenes ajánlatot! Városban és környékén.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    url: "https://www.example.hu/kapcsolat",
  },
};

// TODO: Replace with real contact info
const contactInfo = [
  {
    icon: Phone,
    label: "Telefon",
    value: "+36 XX XXX XXXX",
    href: "tel:+36XXXXXXXXX",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "info@example.hu",
    href: "mailto:info@example.hu",
  },
  {
    icon: MapPin,
    label: "Cím",
    value: "1000 Városnév, Utca neve 1.",
    href: "https://maps.google.com/?q=Városnév",
  },
  {
    icon: Clock,
    label: "Nyitvatartás",
    value: "Hétfő–Péntek: 08:00–17:00",
    href: null,
  },
];

export default function KapcsolatPage() {
  return (
    <>
      {/* Page Hero */}
      <section
        className="section-py-sm flex items-end"
        style={{
          background: "var(--color-bg-subtle)",
          borderBottom: "1px solid var(--color-border)",
          paddingTop: "6rem",
        }}
      >
        <div className="container-site">
          <div className="w-8 h-0.5 mb-4" style={{ background: "var(--color-primary)" }} />
          <h1
            className="font-black uppercase mb-4"
            style={{
              fontSize: "clamp(1.75rem, 5vw, 3.5rem)",
              letterSpacing: "-0.02em",
              color: "var(--color-text)",
              lineHeight: 1.05,
            }}
          >
            Kapcsolat —{" "}
            <span style={{ color: "var(--color-primary)" }}>Városnév</span>
          </h1>
          <p className="text-base md:text-lg max-w-2xl" style={{ color: "var(--color-text-muted)" }}>
            Kérjen ingyenes ajánlatot! Városban és a környező területeken vállalunk munkákat.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section style={{ background: "var(--color-bg)" }} className="section-py">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            {/* Contact Info — 5 cols */}
            <AnimateOnScroll className="md:col-span-5">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-6"
                style={{ color: "var(--color-primary)" }}
              >
                Elérhetőségeink
              </p>

              <div className="flex flex-col gap-5 mb-8">
                {contactInfo.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 flex items-center justify-center rounded-md shrink-0"
                        style={{ background: "rgba(37,99,235,0.1)", color: "var(--color-primary)" }}
                      >
                        <Icon size={18} />
                      </div>
                      <div>
                        <div
                          className="text-xs font-semibold uppercase tracking-wider mb-0.5"
                          style={{ color: "var(--color-text-light)" }}
                        >
                          {item.label}
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-sm font-medium transition-opacity hover:opacity-80"
                            style={{ color: "var(--color-text)" }}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-sm font-medium" style={{ color: "var(--color-text)" }}>
                            {item.value}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Legal info placeholder */}
              <div
                className="mt-8 p-4 rounded-md"
                style={{ background: "var(--color-bg-subtle)", border: "1px solid var(--color-border)" }}
              >
                <p className="text-xs" style={{ color: "var(--color-text-light)" }}>
                  TODO: Cégnév Kft. / Bt. / Zrt.
                  <br />
                  Adószám: TODO
                  <br />
                  Cégjegyzékszám: TODO
                </p>
              </div>
            </AnimateOnScroll>

            {/* Contact Form — 7 cols */}
            <AnimateOnScroll className="md:col-span-7" delay={0.15}>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-6"
                style={{ color: "var(--color-primary)" }}
              >
                Ajánlatkérő üzenet
              </p>
              <ContactForm />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Google Maps embed — TODO: Replace with real location */}
      <section style={{ background: "var(--color-bg-subtle)" }}>
        <div className="w-full" style={{ height: "400px" }}>
          {/* TODO: Replace the src with the real Google Maps embed URL for the business location */}
          <iframe
            src="https://maps.google.com/maps?q=Budapest&output=embed&z=13"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Térkép — Cégnév helyszíne"
          />
        </div>
      </section>

      {/* Service Area */}
      <section style={{ background: "var(--color-bg)" }} className="section-py">
        <div className="container-site max-w-3xl">
          <AnimateOnScroll>
            <h3
              className="text-xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              Szolgáltatási{" "}
              <span style={{ color: "var(--color-primary)" }}>Területünk</span>
            </h3>
            <p className="text-base leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
              TODO: Leírás a szolgáltatási területről — mely városokat, régiókat, kerületeket fednek le.
              Minimum 5 konkrét helyszín megemlítése ajánlott SEO szempontból.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              TODO: Második bekezdés — esetleges kiszállási díj, terület korlátai, stb.
            </p>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
