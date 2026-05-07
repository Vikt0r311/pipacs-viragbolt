@AGENTS.md

# CLAUDE.md — Starter Project Instructions

## Project setup (run first after copying from starter)
Update package.json "name" field to match the project name:
e.g. "felepitjuk-hu", "pinter-tanya", "kovacs-villany"
Never leave it as "nextjs-starter-hu"

## Source of truth
- Read ALL files in `content/` before writing any code — this is the webpro output
- `content/szoveg/*.md` — every page's full Hungarian copy, use this word for word
- `content/cta-master.md` — business details, CTAs, contact info, brand tone
- `content/design-brief.json` — design dials (DESIGN_VARIANCE, MOTION_INTENSITY etc.)
- Do NOT invent any text, name, service or detail not present in content/
- `public/assets/` — generated images, icons, logo, favicon — use these

## Stack (always use these)
- Next.js 14+ with App Router
- Tailwind CSS
- Framer Motion
- Lucide React
- TypeScript

## Build completion workflow

### KÖTELEZŐ SZABÁLY — mockup-first fejlesztés
Minden oldal elkészítése előtt:
1. Nyisd meg és elemezd az adott oldal mockup képét (`public/assets/mockups/[oldal]-mockup.png`)
2. Sorold fel MINDEN szekciót amit látsz a mockupon (fejléc, hero, szekció1, szekció2... footer)
3. CSAK EZUTÁN írj kódot — pontosan azt építsd meg amit a mockupon látsz
4. Ha egy szekcióban ikon van → implementáld az ikont
5. Ha egy szekcióban kép van → implementáld a képet (`public/assets/images/` mappából)
6. Ha egy szekció 2 oszlopos → implementáld 2 oszloposan
7. Soha ne találj ki olyan szekciót vagy elemet ami nincs a mockupon

### Kötelező mockup fájlok oldalanként
- `public/assets/mockups/header-nav-mockup.png` → `app/layout.tsx` navigáció
- `public/assets/mockups/footer-mockup.png` → `app/layout.tsx` footer
- `public/assets/mockups/foooldal-mockup.png` → `app/page.tsx`
- Minden aloldal mockupja → az adott `app/[slug]/page.tsx`

### Build sorrend
1. Read ALL files in `content/` completely before writing any code
2. Read `public/assets/mockups/header-nav-mockup.png` és `footer-mockup.png`
3. Build pages in this order:
   - `app/layout.tsx` — Navigation + Footer a mockup alapján
   - `app/page.tsx` — főoldal (mockup + content/szoveg/foooldal.md)
   - Minden aloldal: mockup beolvasás → elemzés → kód
   - `app/kapcsolat/page.tsx` — ContactForm + Google Maps
   - `app/not-found.tsx` — brand-konzisztens 404
4. Run `npm run dev` automatically when done
5. Tell Viktor: "Kész, nézd meg: http://localhost:3000"
6. Wait — Viktor will review and request changes
7. Push/deploy ONLY when Viktor says: "pushold" vagy "deploy mehet"

## Change log
Create or update CHANGES.md at the start of every session.
Log every significant change: what, when, why.

## Netlify deployment
- netlify.toml in project root — NE tedd bele a `@netlify/plugin-nextjs` plugint (statikus exportnál elrontja a form beküldést)
- Contact form must use Netlify Forms — natív POST + sessionStorage pattern:
  - `method="POST"` + `action="/kapcsolat/"` a form tagen
  - `data-netlify="true"` + `data-netlify-honeypot="bot-field"`
  - Hidden input: `name="form-name"`
  - `onSubmit`: csak `sessionStorage.setItem("formSent","1")`, NEM preventDefault
  - `useEffect`: ellenőrzi sessionStorage-t, mutatja a siker üzenetet
  - GDPR checkbox required
  - ⚠️ NE használj fetch/AJAX beküldést — a ContactForm.tsx starter már a helyes pattern-t tartalmazza

## SEO/GEO (mandatory every project)
- LocalBusiness JSON-LD complete:
  - name, description, url, telephone, email
  - address, geo coordinates, openingHours, priceRange
  - areaServed: minimum 5 surrounding settlements
  - sameAs: Facebook, Instagram URLs
- FAQPage JSON-LD: minimum 5 questions, local search intent
- Sitemap.xml
- Every page meta title: [Szolgáltatás] [Városban] | [Cégnév]
- Every H1 contains primary location keyword
- Every page: at least one paragraph with natural local keywords
- og:tags on every page (og:title, og:description, og:image)

## Every project must include
- Custom 404 page — brand-consistent, friendly, nav links
- Sticky navigation
- Floating mobile CTA button
- Cookie consent banner (components/CookieBanner.tsx):
  - "Elfogadom" and "Csak szükséges" buttons
  - localStorage preference saving
  - GDPR compliant
- Google Maps embed on /kapcsolat
- /adatvedelmi-tajekoztato page
- /impresszum page
- Favicon matching brand identity
- Footer: © 2026 [Cégnév]
- No min-h-screen on root page elements

## Design rules (non-negotiable)
- NO symmetric card-grid layouts
- NO blue-dominant color schemes unless design-brief.json specifies
- NO generic AI corporate template aesthetics
- Follow design-brief.json dials exactly — DESIGN_VARIANCE drives layout uniqueness
- All design decisions reflect the differentiation strategy from content/pozicionalas.md

## Website content
- Always in Hungarian

## Behavior
- Only ask Viktor before major architectural decisions
- For smaller decisions: make the best choice and note it in CHANGES.md
- Never ask for information already in content/

## Ikonok

- SOHA ne importálj Facebook, Instagram, Youtube, Twitter ikonokat a lucide-react-ból
  — ezek nem léteznek a lucide-react-ban, build hibát okoznak
- Közösségi média ikonokhoz használj react-icons/fa-t:
  `import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"`
- SOHA ne használj emojikat ikonként — mindig lucide-react vagy react-icons

## Referencia URL-ek

- Ha a `content/versenytars-elemzes/` mappában van szintézis fájl, olvasd el — tartalmaz referencia URL-eket
- Töltsd be és elemezd a referencia oldalakat kód írása előtt
- Igazodj a referencia oldalak vizuális minőségéhez és hangulatához

## Hibamegelőzési szabályok

### Server vs Client komponensek
- Minden komponens, amely onClick, onChange, onMouseEnter, useState, useEffect-et használ,
  KÖTELEZŐEN tartalmazza a `"use client"` direktívát a fájl tetején
- Ha egy oldalon van `metadata` export ÉS eseménykezelő is kell,
  emeld ki az interaktív részt egy külön client komponensbe

### Scroll viselkedés (Next.js 16)
- A layout.tsx `<html>` taghez MINDKETTŐT add hozzá:
  - CSS: `scroll-behavior: smooth`
  - Attribútum: `data-scroll-behavior="smooth"`

### Sitemap
- CSAK `app/sitemap.ts`-t használj — soha ne hozz létre `public/sitemap.xml`-t
- Ütköznek egymással — a sitemap.ts prioritást élvez, de a public/sitemap.xml zavart okoz
- Ha létezik public/sitemap.xml, töröld ki

## Egyedi vizuális elem

- Minden projektnek legyen egy olyan egyedi vizuális eleme, amelyet egyetlen versenytárs sem használ
- Ez az elem a `content/pozicionalas.md`-ből következik — a differenciálási stratégiából vezedd le
- Ezt az elemet kiemelt gondossággal és kreativitással építsd meg
