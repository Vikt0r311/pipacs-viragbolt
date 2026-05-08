# CHANGES.md

## 2026-05-08 — Build session: kapcsolat + jogi oldalak + sitemap

### Elvégzett feladatok

**app/kapcsolat/page.tsx — teljes újraépítés**
- Starter template eltávolítva ("Városnév", "Cégnév" placeholder)
- Új oldal mockup (kapcsolat-mockup.png) + content/szoveg/kapcsolat.md alapján
- Szekciók: Hero (left_light_fade, kapcsolat-hero.png), Kapcsolatfelvétel módja (4 kártya), Miért érdemes hívni (3 benefit), Nyitvatartás + elérhetőség, Cím + Google Maps embed, Záró CTA band
- OG metadata javítva Pipacs adatokra

**app/not-found.tsx — brand-konzisztens Pipacs 404**
- "Cégnév" → "Pipacs Virágbolt", kék szín → brand zöld/piros
- Pipacs botanikai motívum + nav linkek hozzáadva

**app/impresszum/page.tsx — valós Pipacs adatok**
- Starter placeholderek cserélve Pipacs / Posnyák Klára adataira

**app/adatvedelmi-tajekoztato/page.tsx — valós Pipacs adatok**
- Cégnév/example.hu placeholderek cserélve

**app/sitemap.ts — helyes URL és oldalak**
- BASE_URL: https://pipacsviragbolt.hu
- Oldalak: /, /viragaink, /ajandek, /alkotomuhely, /rolam, /kapcsolat, /adatvedelmi-tajekoztato, /impresszum

## [projekt indítása] — Starter alapján létrehozva
- Starter alapján létrehozva
