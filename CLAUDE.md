@AGENTS.md

# CLAUDE.md — Starter Project Instructions

## Project setup (run first after copying from starter)
Update package.json "name" field to match the project name:
e.g. "felepitjuk-hu", "pinter-tanya", "kovacs-villany"
Never leave it as "nextjs-starter-hu"

## Source of truth
- Read BRIEF.md before starting any work
- BRIEF.md contains all business details, design direction, 
  page structure, and build instructions
- Build everything based on BRIEF.md — do not invent details 
  not present in the brief

## Stack (always use these)
- Next.js 14+ with App Router
- Tailwind CSS
- Framer Motion
- Lucide React
- TypeScript

## Build completion workflow
1. Build the complete site from BRIEF.md
2. Run `npm run dev` automatically when done
3. Tell Viktor: "Kész, nézd meg: http://localhost:3000"
4. Wait — Viktor will review, add images, request changes
5. Push/deploy ONLY when Viktor says: "pushold" vagy "deploy mehet"

⚠️ Images are added AFTER localhost review — do not ask for them upfront.

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
- NO blue-dominant color schemes unless BRIEF.md specifies
- NO generic AI corporate template aesthetics
- Follow BRIEF.md design direction exactly
- All design decisions reflect the differentiation strategy from brief

## Website content
- Always in Hungarian

## Behavior
- Only ask Viktor before major architectural decisions
- For smaller decisions: make the best choice and note it in CHANGES.md
- Never ask for information already in BRIEF.md

## Ikonok

- SOHA ne importálj Facebook, Instagram, Youtube, Twitter ikonokat a lucide-react-ból
  — ezek nem léteznek a lucide-react-ban, build hibát okoznak
- Közösségi média ikonokhoz használj react-icons/fa-t:
  `import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"`
- SOHA ne használj emojikat ikonként — mindig lucide-react vagy react-icons

## Referencia URL-ek

- Ha a BRIEF.md referencia URL-eket tartalmaz, töltsd be és elemezd őket kód írása előtt
- Igazodj a referencia oldalak vizuális minőségéhez és hangulatához
- Jegyezd meg, mi teszi hatékonnyá az egyes referenciákat, és alkalmazd azokat az elveket

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

- Minden projektnek legyen egy olyan egyedi vizuális eleme, amelyet egyetlen versenytárs sem használ — ezt a BRIEF.md határozza meg
- Ezt az elemet kiemelt gondossággal és kreativitással építsd meg
