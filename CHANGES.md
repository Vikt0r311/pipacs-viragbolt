# CHANGES.md

## 2026-03-31 — Starter template scaffold

### Mit változtattam
- Felülírta a meglévő `app/layout.tsx` és `app/page.tsx` fájlokat — placeholder tartalom, lang="hu", CSS változókra épülő dizájn
- Létrehozta `app/globals.css` — teljes CSS változó rendszer, Tailwind v4 @theme inline
- Létrehozta `next.config.ts` — `output: 'export'`, `trailingSlash: true`, `images.unoptimized: true`
- Létrehozta `netlify.toml` — publish = "out", @netlify/plugin-nextjs, biztonsági fejlécek
- Létrehozta `components/Navigation.tsx` — sticky, mobile hamburger, prop-alapú nav elemek
- Létrehozta `components/Footer.tsx` — 3 oszlopos, © 2026, CVMarketing link
- Létrehozta `components/FloatingCTA.tsx` — csak mobilon (md:hidden)
- Létrehozta `components/CookieBanner.tsx` — GDPR, localStorage, "Elfogadom" / "Csak szükséges"
- Létrehozta `components/ContactForm.tsx` — Netlify Forms, honeypot, GDPR checkbox, siker/hiba állapot
- Létrehozta `components/JsonLd.tsx` — LocalBusiness + FAQPage typed props
- Létrehozta `app/not-found.tsx` — brand-konzisztens 404 oldal
- Létrehozta `app/kapcsolat/page.tsx` — 2 oszlopos, ContactForm + Google Maps placeholder
- Létrehozta `app/galeria/page.tsx` — galéria placeholder
- Létrehozta `app/szolgaltatasok/page.tsx` — szolgáltatások placeholder
- Létrehozta `app/rolunk/page.tsx` — rólunk placeholder
- Létrehozta `app/adatvedelmi-tajekoztato/page.tsx` — adatvédelmi tájékoztató placeholder
- Létrehozta `app/impresszum/page.tsx` — impresszum placeholder
- Létrehozta `public/sitemap.xml` — placeholder sitemap

### Miért
Template alap minden új ügyfélprojekthez. Nincs kliens-specifikus tartalom — minden placeholder.
