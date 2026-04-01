"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "cookie-consent";

type ConsentValue = "all" | "necessary" | null;

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as ConsentValue;
      if (!saved) setVisible(true);
    } catch {
      // localStorage not available
    }
  }, []);

  const handleConsent = (value: "all" | "necessary") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie hozzájárulás"
      className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6"
    >
      <div
        className="container-site"
      >
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-xl shadow-lg"
          style={{
            background: "var(--color-bg)",
            border: "1px solid var(--color-border)",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          <p
            className="text-sm flex-1 leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            Weboldalunk sütiket (cookie) használ a jobb felhasználói élmény
            érdekében. Az{" "}
            <a
              href="/adatvedelmi-tajekoztato"
              className="underline"
              style={{ color: "var(--color-primary)" }}
            >
              adatvédelmi tájékoztatóban
            </a>{" "}
            olvashat róluk bővebben.
          </p>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => handleConsent("necessary")}
              className="px-4 py-2 text-sm rounded-md font-medium border transition-colors"
              style={{
                color: "var(--color-text-muted)",
                borderColor: "var(--color-border)",
                background: "transparent",
              }}
            >
              Csak szükséges
            </button>
            <button
              onClick={() => handleConsent("all")}
              className="px-4 py-2 text-sm rounded-md font-semibold transition-colors"
              style={{
                background: "var(--color-primary)",
                color: "var(--color-text-inverse)",
              }}
            >
              Elfogadom
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
