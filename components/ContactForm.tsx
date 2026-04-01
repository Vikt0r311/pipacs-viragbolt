"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [gdpr, setGdpr] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!gdpr) return;

    setState("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });

      if (res.ok) {
        setState("success");
        form.reset();
        setGdpr(false);
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div
        className="flex flex-col items-center gap-4 py-12 px-6 rounded-xl text-center"
        style={{ background: "var(--color-surface)" }}
      >
        <CheckCircle
          size={48}
          style={{ color: "var(--color-success)" }}
        />
        <h3
          className="text-xl font-semibold"
          style={{ color: "var(--color-text)" }}
        >
          Üzenet elküldve!
        </h3>
        <p
          className="text-sm"
          style={{ color: "var(--color-text-muted)" }}
        >
          Hamarosan felvesszük Önnel a kapcsolatot.
        </p>
        <button
          onClick={() => setState("idle")}
          className="mt-2 text-sm underline"
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
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
    >
      {/* Netlify hidden fields */}
      <input type="hidden" name="form-name" value="kapcsolat" />
      <p className="hidden">
        <label>
          Ne töltse ki: <input name="bot-field" />
        </label>
      </p>

      {/* Name */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="nev"
          className="text-sm font-medium"
          style={{ color: "var(--color-text)" }}
        >
          Név <span aria-hidden>*</span>
        </label>
        <input
          id="nev"
          name="nev"
          type="text"
          required
          placeholder="Kovács János"
          className="w-full px-4 py-2.5 rounded-md border text-sm outline-none transition-colors focus:border-[var(--color-accent)]"
          style={{
            background: "var(--color-bg)",
            border: "1px solid var(--color-border)",
            color: "var(--color-text)",
          }}
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="email"
          className="text-sm font-medium"
          style={{ color: "var(--color-text)" }}
        >
          E-mail cím <span aria-hidden>*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="pelda@email.hu"
          className="w-full px-4 py-2.5 rounded-md border text-sm outline-none transition-colors focus:border-[var(--color-accent)]"
          style={{
            background: "var(--color-bg)",
            border: "1px solid var(--color-border)",
            color: "var(--color-text)",
          }}
        />
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="telefon"
          className="text-sm font-medium"
          style={{ color: "var(--color-text)" }}
        >
          Telefonszám
        </label>
        <input
          id="telefon"
          name="telefon"
          type="tel"
          placeholder="+36 30 123 4567"
          className="w-full px-4 py-2.5 rounded-md border text-sm outline-none transition-colors focus:border-[var(--color-accent)]"
          style={{
            background: "var(--color-bg)",
            border: "1px solid var(--color-border)",
            color: "var(--color-text)",
          }}
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="uzenet"
          className="text-sm font-medium"
          style={{ color: "var(--color-text)" }}
        >
          Üzenet <span aria-hidden>*</span>
        </label>
        <textarea
          id="uzenet"
          name="uzenet"
          required
          rows={5}
          placeholder="Írja le kérését..."
          className="w-full px-4 py-2.5 rounded-md border text-sm outline-none transition-colors resize-y focus:border-[var(--color-accent)]"
          style={{
            background: "var(--color-bg)",
            border: "1px solid var(--color-border)",
            color: "var(--color-text)",
          }}
        />
      </div>

      {/* GDPR checkbox */}
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          name="gdpr"
          checked={gdpr}
          onChange={(e) => setGdpr(e.target.checked)}
          required
          className="mt-0.5 shrink-0 accent-[var(--color-primary)]"
        />
        <span
          className="text-xs leading-relaxed"
          style={{ color: "var(--color-text-muted)" }}
        >
          Elolvastam és elfogadom az{" "}
          <a
            href="/adatvedelmi-tajekoztato"
            className="underline"
            style={{ color: "var(--color-primary)" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            adatvédelmi tájékoztatót
          </a>
          , és hozzájárulok személyes adataim kezeléséhez. *
        </span>
      </label>

      {/* Error state */}
      {state === "error" && (
        <div
          className="flex items-center gap-2 p-3 rounded-md text-sm"
          style={{
            background: "#fef2f2",
            color: "var(--color-error)",
            border: "1px solid #fecaca",
          }}
        >
          <AlertCircle size={16} />
          Hiba történt az üzenet küldése közben. Kérjük, próbálja újra.
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={state === "submitting" || !gdpr}
        className="flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold text-sm transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        style={{
          background: "var(--color-primary)",
          color: "var(--color-text-inverse)",
        }}
      >
        {state === "submitting" ? (
          "Küldés..."
        ) : (
          <>
            <Send size={16} />
            Üzenet küldése
          </>
        )}
      </button>
    </form>
  );
}
