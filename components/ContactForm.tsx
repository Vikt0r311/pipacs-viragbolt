"use client";

import { useState, useEffect } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("formSent") === "1") {
      sessionStorage.removeItem("formSent");
      setShowSuccess(true);
    }
  }, []);

  const handleSubmit = () => {
    sessionStorage.setItem("formSent", "1");
  };

  const inputStyle = {
    background: "var(--color-bg)",
    border: "1px solid var(--color-border)",
    color: "var(--color-text)",
    outline: "none",
  };

  const labelStyle = {
    color: "var(--color-text)",
  };

  if (showSuccess) {
    return (
      <div
        className="flex flex-col items-center gap-4 py-14 px-6 rounded-xl text-center"
        style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
      >
        <CheckCircle size={48} style={{ color: "#22c55e" }} />
        <h3 className="text-xl font-bold" style={{ color: "var(--color-text)" }}>
          Köszönjük megkeresését!
        </h3>
        <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
          Hamarosan felvesszük Önnel a kapcsolatot.
        </p>
        <button
          onClick={() => setShowSuccess(false)}
          className="mt-2 text-sm underline transition-opacity hover:opacity-80"
          style={{ color: "var(--color-primary)" }}
        >
          Új üzenet küldése
        </button>
      </div>
    );
  }

  return (
    <form
      name="kapcsolat"
      method="POST"
      action="/kapcsolat/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
    >
      <input type="hidden" name="form-name" value="kapcsolat" />
      <p className="hidden">
        <label>
          Ne töltse ki: <input name="bot-field" />
        </label>
      </p>

      {/* Név */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="nev" className="text-sm font-medium" style={labelStyle}>
          Név <span aria-hidden>*</span>
        </label>
        <input
          id="nev"
          name="nev"
          type="text"
          required
          placeholder="Kovács János"
          className="w-full px-4 py-3 rounded-md border text-sm transition-colors"
          style={inputStyle}
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium" style={labelStyle}>
          E-mail cím <span aria-hidden>*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="pelda@email.hu"
          className="w-full px-4 py-3 rounded-md border text-sm transition-colors"
          style={inputStyle}
        />
      </div>

      {/* Telefon */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="telefon" className="text-sm font-medium" style={labelStyle}>
          Telefonszám
        </label>
        <input
          id="telefon"
          name="telefon"
          type="tel"
          placeholder="+36 30 123 4567"
          className="w-full px-4 py-3 rounded-md border text-sm transition-colors"
          style={inputStyle}
        />
      </div>

      {/* Üzenet */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="uzenet" className="text-sm font-medium" style={labelStyle}>
          Üzenet <span aria-hidden>*</span>
        </label>
        <textarea
          id="uzenet"
          name="uzenet"
          required
          rows={5}
          placeholder="Írja le kérését, a munkálat típusát és helyszínét..."
          className="w-full px-4 py-3 rounded-md border text-sm transition-colors resize-y"
          style={inputStyle}
        />
      </div>

      {/* GDPR */}
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          name="gdpr"
          required
          className="mt-0.5 shrink-0"
          style={{ accentColor: "var(--color-primary)" }}
        />
        <span className="text-xs leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
          Elolvastam és elfogadom az{" "}
          <a
            href="/adatvedelmi-tajekoztato"
            className="underline hover:opacity-80"
            style={{ color: "var(--color-primary)" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            adatvédelmi tájékoztatót
          </a>
          , és hozzájárulok személyes adataim kezeléséhez. *
        </span>
      </label>

      {/* Submit */}
      <button
        type="submit"
        className="flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold text-sm btn-amber"
      >
        <Send size={16} />
        Üzenet küldése
      </button>
    </form>
  );
}
