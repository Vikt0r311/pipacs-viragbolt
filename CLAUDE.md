@AGENTS.md

# CLAUDE.md — Starter Project Instructions

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
- netlify.toml in project root
- Contact form must use Netlify Forms:
  - data-netlify="true"
  - data-netlify-honeypot="bot-field"
  - Hidden input: name="form-name"
  - GDPR checkbox required
  - Success + error state handling

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

## Bug prevention rules

### Social media icons
- NEVER import Facebook, Instagram, Youtube, Twitter icons from lucide-react
- These do not exist in lucide-react — will cause build errors
- Use inline SVG or react-icons/fa instead
- Example: `import { FaFacebook } from "react-icons/fa"`

### Server vs Client components
- Any component using onMouseEnter, onMouseLeave, onClick, useState, useEffect
  MUST have `"use client"` directive at the top of the file
- If a page has `metadata` export AND needs event handlers,
  extract the interactive part into a separate client component

### Scroll behavior (Next.js 16)
- In layout.tsx add BOTH:
  - CSS: `scroll-behavior: smooth` on html element
  - Attribute: `data-scroll-behavior="smooth"` on `<html>` tag

### Sitemap
- Use ONLY `app/sitemap.ts` — never create `public/sitemap.xml`
- They conflict — sitemap.ts takes priority but public/sitemap.xml causes confusion
- Delete public/sitemap.xml if it exists
