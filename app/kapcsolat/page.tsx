import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

// TODO: Replace with client data
export const metadata: Metadata = {
  title: "Kapcsolat | Cégnév", // TODO
  description: "TODO: Kapcsolat oldal leírás — cím, telefon, email.", // TODO
  openGraph: {
    title: "Kapcsolat | Cégnév", // TODO
    description: "TODO: OG leírás", // TODO
  },
};

export default function KapcsolatPage() {
  return (
    <div className="section-py">
      <div className="container-site">
        {/* Page header */}
        <div className="mb-12">
          <h1
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ color: "var(--color-primary)" }}
          >
            Kapcsolat — TODO: Városban {/* TODO: Add location keyword */}
          </h1>
          <p
            className="text-lg max-w-2xl"
            style={{ color: "var(--color-text-muted)" }}
          >
            TODO: Rövid bevezető szöveg. Keresse fel irodánkat vagy küldjön
            üzenetet az alábbi űrlapon.
          </p>
        </div>

        {/* 2-column layout: form left, info + map right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT — Contact form */}
          <div>
            <h2
              className="text-xl font-semibold mb-6"
              style={{ color: "var(--color-text)" }}
            >
              Küldjön üzenetet
            </h2>
            <ContactForm />
          </div>

          {/* RIGHT — Contact info + map */}
          <div className="flex flex-col gap-8">
            {/* Contact info */}
            <div>
              <h2
                className="text-xl font-semibold mb-5"
                style={{ color: "var(--color-text)" }}
              >
                Elérhetőségeink
              </h2>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <Phone
                    size={18}
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--color-secondary)" }}
                  />
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-wide mb-0.5"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      Telefon
                    </p>
                    <a
                      href="tel:+36301234567" // TODO: Replace
                      className="text-sm font-medium hover:underline"
                      style={{ color: "var(--color-text)" }}
                    >
                      +36 30 123 4567 {/* TODO: Replace */}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Mail
                    size={18}
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--color-secondary)" }}
                  />
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-wide mb-0.5"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      E-mail
                    </p>
                    <a
                      href="mailto:info@example.hu" // TODO: Replace
                      className="text-sm font-medium hover:underline"
                      style={{ color: "var(--color-text)" }}
                    >
                      info@example.hu {/* TODO: Replace */}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <MapPin
                    size={18}
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--color-secondary)" }}
                  />
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-wide mb-0.5"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      Cím
                    </p>
                    <address
                      className="text-sm font-medium not-italic"
                      style={{ color: "var(--color-text)" }}
                    >
                      1234 Budapest, Példa utca 1. {/* TODO: Replace */}
                    </address>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Clock
                    size={18}
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--color-secondary)" }}
                  />
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-wide mb-0.5"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      Nyitvatartás
                    </p>
                    <p
                      className="text-sm font-medium"
                      style={{ color: "var(--color-text)" }}
                    >
                      H–P: 08:00–17:00 {/* TODO: Replace */}
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      Szo: 09:00–13:00 {/* TODO: Replace */}
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Google Maps embed */}
            <div>
              {/* TODO: Replace with client's actual Google Maps embed URL */}
              {/* Get embed URL: Google Maps → Share → Embed a map → Copy HTML → extract src */}
              <div
                className="rounded-xl overflow-hidden border"
                style={{ borderColor: "var(--color-border)" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86203.42388372088!2d19.040235!3d47.497913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741c334d1d4cfc9%3A0x400c4290c1e1160!2sBudapest!5e0!3m2!1shu!2shu!4v1700000000000"
                  width="100%"
                  height="400"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Térkép — irodánk helye" // TODO: Update
                  className="w-full"
                />
              </div>
              <p
                className="text-xs mt-2"
                style={{ color: "var(--color-text-light)" }}
              >
                {/* TODO: Replace with client's actual Google Maps embed URL */}
                Térkép: Budapest belváros (placeholder — cserélje le az ügyfél pontos helyére)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
