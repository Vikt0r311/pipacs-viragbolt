import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";
import ConcretePoLine from "@/components/ConcretePoLine";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Kapcsolat — Vasbeton Szerkezetépítés Veszprémben",
  description:
    "Kapcsolat — Virág Gábor Építő Bt., Szentkirályszabadja. Kérjen ingyenes ajánlatot vasbeton munkákra Veszprém és környékén! Tel: 06-30/685-7901",
  openGraph: {
    title: "Kapcsolat | Virág Gábor Építő Bt.",
    description:
      "Kérjen ingyenes ajánlatot vasbeton munkákra Veszprém és környékén! Tel: 06-30/685-7901",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    url: "https://www.viragepito.hu/kapcsolat",
  },
};

const contactInfo = [
  {
    icon: Phone,
    label: "Telefon",
    value: "06-30/685-7901",
    href: "tel:+36306857901",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "viraggabi23@gmail.com",
    href: "mailto:viraggabi23@gmail.com",
  },
  {
    icon: MapPin,
    label: "Cím",
    value: "8225 Szentkirályszabadja, Gárdonyi utca 5.",
    href: "https://maps.google.com/?q=Szentkirályszabadja,+Gárdonyi+utca+5",
  },
  {
    icon: Clock,
    label: "Nyitvatartás",
    value: "Hétfő–Péntek: 07:00–17:00",
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
          background: "#1C1C1C",
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
            <span style={{ color: "var(--color-primary)" }}>Vasbeton Kivitelezés Veszprémben</span>
          </h1>
          <p className="text-base md:text-lg max-w-2xl" style={{ color: "var(--color-text-muted)" }}>
            Kérjen ingyenes ajánlatot! Veszprémben, Balatonalmádiban és az egész Balaton-felvidéken vállalunk vasbeton munkákat.
          </p>
        </div>
      </section>

      <ConcretePoLine />

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
                        style={{ background: "rgba(212,147,42,0.12)", color: "var(--color-primary)" }}
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

              {/* Social */}
              <div
                className="pt-5"
                style={{ borderTop: "1px solid var(--color-border)" }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-wider mb-3"
                  style={{ color: "var(--color-text-light)" }}
                >
                  Közösségi média
                </p>
                <a
                  href="https://www.facebook.com/profile.php?id=61550622090357"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-80"
                  style={{ color: "var(--color-primary)" }}
                >
                  <FaFacebook size={18} />
                  Virág Gábor Építő Bt. — Facebook
                </a>
              </div>

              {/* Legal */}
              <div
                className="mt-8 p-4 rounded-md"
                style={{ background: "var(--color-bg-subtle)", border: "1px solid var(--color-border)" }}
              >
                <p className="text-xs" style={{ color: "var(--color-text-light)" }}>
                  Virág Gábor Építő Betéti Társaság
                  <br />
                  Adószám: 29217731-2-19
                  <br />
                  Cégjegyzékszám: 19-06-510279
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

      <ConcretePoLine />

      {/* Google Maps */}
      <section style={{ background: "var(--color-bg-subtle)" }}>
        <div className="w-full" style={{ height: "400px" }}>
          <iframe
            src="https://maps.google.com/maps?q=Szentkir%C3%A1lyszabadja,+G%C3%A1rdonyi+utca+5&output=embed&z=15"
            width="100%"
            height="400"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.8)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Virág Gábor Építő Bt. — Szentkirályszabadja, Gárdonyi utca 5."
          />
        </div>
      </section>

      <ConcretePoLine />

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
              Szentkirályszabadjai székhelyünkről könnyedén elérjük Veszprémet, Balatonalmádit,
              Balatonfűzfőt, Litért, Királyszentistvánt, Vilonyát, Hajmáskért, Csopakot,
              Balatonfüredet, Felsőörst, Alsóörst, Berhidát, Papkeszit és a Balaton-felvidék
              további településeit.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              Szélesebb körben Veszprém megye egész területén és a Balaton-felvidék régióban is
              vállalunk vasbeton szerkezetépítési munkákat. Kérje ajánlatunkat — megoldjuk!
            </p>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
