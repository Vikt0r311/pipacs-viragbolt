# CHANGES.md

## 2026-04-02 — Teljes weboldal megépítése (Virág Gábor Építő Bt.)

### Elvégzett munkák
- `package.json` — név: `nextjs-starter-hu` → `virag-epito-hu`; `react-icons` telepítve
- `globals.css` — teljes átírás: dark industrial paletta (#1A1A1A bg, #D4932A Rebar Amber)
- `app/layout.tsx` — Inter font (next/font), valós metaadatok, komponens propok
- `public/sitemap.xml` — TÖRÖLVE (ütközött volna az app/sitemap.ts-sel)
- Új komponensek: ConcretePoLine, AnimateOnScroll, HeroSection, ProcessTimeline, StatsSection, FAQAccordion
- Frissített komponensek: Navigation, Footer, FloatingCTA, CookieBanner, ContactForm, JsonLd
- Oldalak teljes újraírása: főoldal, /szolgaltatasok, /rolunk, /kapcsolat, /galeria, /impresszum, /adatvedelmi-tajekoztato, /not-found
- `app/sitemap.ts` — automata sitemap, 7 oldal
- ⚠️ A "50+ projekt" statisztika becsült adat — ügyfél megerősítése szükséges

---

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
