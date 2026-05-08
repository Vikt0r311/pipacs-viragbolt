# Webprojekt Asset Workflow — Mockup, képek, ikonok, logó, favicon

## Contract

Input:
- Completed content phase.
- `szoveg/*.md`
- `cta-master.md`
- `design-brief.json`

Output:
- `assets/mockups/*.png`
- `assets/images/*`
- `assets/og-images/og-default.png`
- `assets/icons/svg/*` and `assets/icons/png/*` when custom icons are justified
- `assets/logo/svg/*` and `assets/logo/png/*`
- `assets/favicon/*`
- `assets/work/manifest/mockup-specs.json`
- `assets/work/manifest/mockup-qa.md`
- `assets/work/manifest/mockup-visual-audit.md`
- `assets/work/manifest/asset-requirements.md`
- `assets/work/manifest/asset-manifest.json`
- `assets/work/manifest/asset-audit.md`
- `assets/work/shared-asset-registry.json`
- `assets/work/page-jobs/page-asset-jobs.json`
- `assets/work/page-jobs/<page-slug>/job-result.json`

Completion:
- Required sentinel: `.done/03-assets.done`
- Created by: orchestrator only
- This reference file must NOT create sentinel files directly.
- The asset phase is complete only when `assets/work/manifest/mockup-specs.json`, `assets/work/manifest/mockup-qa.md`, `assets/work/manifest/mockup-visual-audit.md`, `assets/work/manifest/asset-requirements.md`, `assets/work/manifest/asset-manifest.json`, `assets/work/shared-asset-registry.json`, `assets/work/page-jobs/page-asset-jobs.json`, every page job `job-result.json`, `assets/work/manifest/asset-audit.md`, and every referenced production file exist.

Orchestrator boundary:
- This file describes what the spawned Codex asset process must do.
- Polling, timeout handling, and `.done/03-assets.done` creation belong to the orchestrator.

Ez a fájl a teljes asset generálási workflow Codex számára.
Olvasd el teljesen mielőtt bármit elindítasz, majd fázisról fázisra haladj.

---

## Logging contract — kötelező a spawnolt folyamatra

Ezt a fázist az orchestrator külön folyamatként indítja és figyeli. A liveness-detekció a `assets/work/codex-assets.log` fájl mtime-ján és tartalmán múlik.

- A spawn parancs `2>&1 | tee assets/work/codex-assets.log` alakban fut. Ne csendesítsd el a kimenetet: minden lépés után írj egy rövid haladás-sort.
- Csak akkor használd a `panic:`, `fatal:`, vagy `FATAL:` prefixeket, ha a hiba visszafordíthatatlan és a fázist meg kell szakítani. Ha ezek bármelyikét meglátja az orchestrator a logban, blockerként kezeli és leállítja a fázist. Visszanyerhető hibákhoz használj más szöveget (pl. `retrying`, `warn:`).
- NE módosítsd a `webpro-state.json` fájlt — ehhez csak az orchestrator nyúl.
- NE hozz létre fájlokat a `.done/` könyvtárban. A sentinelt az orchestrator írja a `validate-assets.py` után.

---

## KÖTELEZŐ SZABÁLY — képgenerálás

**Minden raszteres képet a beépített `image_gen` tool segítségével generálj (GPT Image 2.0).**
- NE írj Python scriptet képek rajzolásához
- NE használj Pillow / PIL / cairo / matplotlib könyvtárat képgenerálásra
- NE rajzolj programozottan placeholder képeket
- MINDEN mockup, oldalkép, OG kép és custom ikon forrás: `image_gen` tool hívással készül
- KIVÉTEL: a végleges production logó nem image_gen outputból készül. A mockup logója csak stílusreferencia; a production logó kézzel komponált SVG.

Ha az `image_gen` tool nem elérhető → jelezd, ne helyettesítsd Python scripttel.

---

## Alapelv

Ne az AI mockupból ments production assetet.

```
mockup        = vizuális referencia + ügyfél preview
production image  = külön generált kép
production icon   = külön generált vagy library SVG
production logo   = külön komponált, egyszerű SVG wordmark/monogram
favicon       = végleges logo-mark alapján
```

---

## Design strategy and dials — értelmezési útmutató

A `design-brief.json` `design_strategy` mezője a mockup elsődleges kreatív szerződése. A dials értékek (1–10 skála) másodlagos intenzitás-beállítások.

Olvasd el a `design_strategy` mezőt mielőtt az asset manifestet összeállítod vagy mockupot generálsz:
- `site_archetype`: milyen műfajú weboldalt kell építeni, pl. praktikus szolgáltatói landing, editorial portfólió, bizalom-first szakértői oldal, katalógus-first termékoldal.
- `hero_archetype`: milyen kompozíciós logikájú hero kell. Ez nem csak stílus, hanem layout szerződés.
- `section_rhythm`: az első 3-5 főoldali blokk dramaturgiája.
- `visual_story`: mit kell a vizuális világnak éreztetnie és bizonyítania.
- `conversion_logic`: milyen döntést kell megkönnyítenie.
- `avoid_patterns`: mely sablonos mintákat kell elkerülni.
- `evidence`: milyen kutatási/szöveges megfigyelések indokolják.

Ha a `design_strategy` hiányzik régi projektben, készíts rövid belső stratégiát a meglévő kutatási és szövegfájlokból, majd dokumentáld a `mockup-visual-audit.md` elején. Ne ess vissza automatikusan az általános bal-szöveg / jobb-kép hero mintára.

A `design-brief.json` dials értékei ezután meghatározzák a vizuális döntések erősségét minden fázisban. Ezek vezérlik a mockupok, képek és ikonok részletességét, de nem írhatják felül a `design_strategy` archetype döntéseit.

| Dial | 1–3 | 4–6 | 7–10 |
|---|---|---|---|
| **DESIGN_VARIANCE** | Szimmetrikus, konzervatív layout — azonos szekció-arányok, kevés vizuális változatosság | Mérsékelt változatosság — néhány eltérő szekció-arány, enyhe aszimmetria | Erős dinamika — bento grid, váltakozó szekció-típusok, merész tipográfiai kontraszt, markáns szín-blokkok |
| **MOTION_INTENSITY** | Statikus, nincs animáció — esetleg nagyon finom 200ms fade-in | Könnyű entrance animációk (fade-up belépésnél), hover-kiemelés gombokon | Parallax scroll, szekció-belépési slide animációk, hero háttér-mozgás vagy video loop |
| **VISUAL_DENSITY** | Levegős, sok whitespace — kevés elem oldalanként, nagy betűméret, minimális kártya | Kiegyensúlyozott — normál padding, 2–3 kártyasor, átlagos sűrűség | Információ-gazdag — több szekció egymás után, kisebb padding, sűrűbb kártyasorok, táblázatok |
| **BRAND_TRUST_LEVEL** | Minimális — csak kontaktadat és alap CTA, nincs dedikált bizalmi szekció | Vélemény-szekció (2–3 idézet), rövid bemutatkozó kép, 1–2 konkrét szám/tény | Kiemelt vélemény-galéria, nagy személyes portréfotó, tanúsítványok/logók sávja, statisztika-kiemelők |
| **IMAGE_USAGE_PRIORITY** | Ikonok és illusztrációk dominálnak — kevés vagy kis méretű fotó | Kiegyensúlyozott — hero fotó + 1–2 szekciókép, ikonok segédszerepben | Fotó minden szekcióban, nagy hero vizuál, galéria-szerű elrendezés, képek adják a layout gerincét |
| **LOCAL_BUSINESS_CLARITY** | Generikus, helyszín nem hangsúlyos — nincs lokális vizuális elem | Városnév megjelenik a hero-ban vagy egy dedikált sávban, térkép szekció ha releváns | Helyi terület prominensen kiemelve — hero szövegben, Google Map widget, szolgáltatási terület-lista, lokális képek |

**Hogyan alkalmazd:** Először a `design_strategy` dönt a szerkezetről, hero típusról és szekcióritmusról. Ezután minden vizuális döntésnél (mockup stílus, képgenerálási prompt, ikon részletesség) igazodj a megfelelő dial értékéhez. Ha egy dial 7–10 közé esik, az adott dimenzióban a magas értékű irányelvek érvényesek — ne a "biztonságos" középutat válaszd.

### Homepage archetype rules

A főoldal mockup előtt dokumentáld a választott archetype-okat az `asset-requirements.md` és később a `mockup-visual-audit.md` fájlban:

```text
Homepage design strategy:
- site_archetype:
- hero_archetype:
- section_rhythm:
- visual_story:
- conversion_logic:
- avoid_patterns:
- evidence:
```

Szabályok:
- A `hero_archetype` tényleges kompozíciós eltérést jelentsen. Nem elég más színt, más fotót vagy más ikonokat használni ugyanahhoz a split hero mintához.
- Ne használd alapértelmezésként a bal szöveg / jobb portré vagy munkakép hero-t. Csak akkor válaszd, ha a `design_strategy.evidence` alapján a személyes arc vagy a munkavégzés látványa a döntés fő bizalmi eleme.
- Ha az `avoid_patterns` tilt egy szerkezetet, a mockup nem használhatja domináns elemként. Például ha tiltott a generikus service-card grid, akkor a szolgáltatások lehetnek folyamatként, diagnosztikai választóként, portfólió-filterként, árlogikaként, térképes lefedettségként vagy más kutatásból következő formában.
- A kötelező navbar/footer/CTA jelenlét nem kényszerítheti vissza a főoldalt univerzális kisvállalkozói sablonba. Ezeket az archetype-hoz kell igazítani.
- A főoldal első három szekciója kövesse a `section_rhythm` mezőt. Ettől csak akkor térhetsz el, ha a mockup QA-ban konkrét okot dokumentálsz.

---

## Mappastruktúra

```
assets/
  mockups/
  og-images/
  images/
  icons/
    svg/
    png/
  logo/
    svg/
    png/
  favicon/
  work/
    manifest/
    page-jobs/
    source/
    cleaned/
    raw-svg/
    previews/
```

Production-ban ezek használhatók:
- assets/images/
- assets/og-images/
- assets/icons/svg/ és assets/icons/png/
- assets/logo/svg/ és assets/logo/png/
- assets/favicon/

A assets/work/ csak munkafájlokhoz való — NEM kerül production-ba.

---

## 1. Fázis — Tartalom és brand brief beolvasása

Olvasd be:
- szoveg/*.md (minden fájl)
- cta-master.md
- design-brief.json

Először készíts teljes asset leltárt: `assets/work/manifest/asset-requirements.md`.

A leltárnak oldalanként tartalmaznia kell:
- forrásfájl (`szoveg/*.md`)
- szükséges mockup fájl
- minden H2 szekció külön sorban, a hozzá tartozó vizuális döntéssel
- minden hero / szekció / szolgáltatás / galéria / CTA vizuál konkrét fájlútvonallal
- minden custom ikon, ha a szöveg, a mockup vagy a szekciólogika ikont használ
- standard library ikonok külön listában
- `assets/images/cta-bg.png` minden projektnél kötelező, akkor is, ha a szöveg nem írja külön
- ha egy szekcióhoz nem készül kép vagy ikon, azt `text_only` döntéssel és rövid indoklással kell jelölni

Ne lépj tovább mockup generálásra, amíg az összes `szoveg/*.md` oldal szerepel a leltárban.

Készíts asset manifestet: assets/work/manifest/asset-manifest.json

```json
{
  "brand": {
    "name": "",
    "slug": "",
    "colors": [],
    "tone": "",
    "style_keywords": []
  },
  "design_strategy": {
    "site_archetype": "",
    "hero_archetype": "",
    "section_rhythm": [],
    "visual_story": "",
    "conversion_logic": "",
    "avoid_patterns": [],
    "evidence": []
  },
  "pages": [
    {
      "name": "",
      "slug": "",
      "source": "szoveg/example.md",
      "mockup": "assets/mockups/example-mockup.png",
      "section_coverage": [
        {
          "heading": "A pontos H2 szekciócím a markdownból",
          "visual_decision": "image|custom_icon|library_icon|mixed|text_only",
          "visual_assets": ["assets/images/example.png"],
          "custom_icons": ["assets/icons/svg/icon-example.svg"],
          "library_icons": ["phone"],
          "section_reference_image": "assets/mockups/sections/example/example-section.png",
          "icon_contract": {
            "expected_custom_icon_count": 0,
            "must_use_custom_icons": false,
            "icon_style": "filled circle icon|outline icon|library icon|none",
            "forbid_number_badges": false,
            "forbid_generic_replacement": true
          },
          "layout_contract": {
            "pattern": "full_bleed_image_hero|split_image_card|text_only|card_grid|pricing_grid|custom",
            "image_treatment": "background_blended|image_card|inline_image|none",
            "overlay": "left_light_fade|left_dark_fade|right_fade|none",
            "image_position": "right|left|center|background",
            "must_not_change_pattern": true
          },
          "reason": "Miért ez a vizuális döntés"
        }
      ]
    }
  ],
  "images": [
    {
      "name": "example",
      "path": "assets/images/example.png",
      "usage": "section-specific production image",
      "allow_reuse": false
    }
  ],
  "custom_icons": [
    {
      "name": "example",
      "path": "assets/icons/svg/icon-example.svg",
      "png": "assets/icons/png/icon-example.png",
      "allow_dark_icon": false
    }
  ],
  "library_icons": [],
  "logos": [],
  "favicons": true,
  "coverage_notes": []
}
```

A custom_icons csak azok az ikonok, amik NEM standard UI ikonok (service category ikonok, brand-specifikus szimbólumok, iparág-specifikus illusztrációs ikonok).

`allow_reuse` csak tudatosan ismétlődő képre lehet `true` (pl. ugyanaz a service image több kapcsolódó kártyában). Ha nincs megadva, `false`-nak számít. Egy oldalon ugyanaz a kép legfeljebb két tartalmi szekcióban szerepelhet, kivéve ha `allow_reuse: true`.

`allow_dark_icon` csak akkor lehet `true`, ha az ikon szándékosan sötét és kizárólag világos háttéren lesz használva. Alapértelmezésben minden custom SVG legyen `currentColor` alapú vagy világos/sötét háttéren is kontrasztos. Hardcoded fekete `fill`/`stroke` nem mehet át kivétel nélkül.

A library_icons a standard UI ikonok listája (phone, mail, map-pin, clock, star, arrow-right, menu, facebook, instagram stb.) — ezeket NEM generáljuk AI-val és NEM töltjük le fájlként. A Next.js projektben `lucide-react` npm csomagként telepítjük, a manifestben csak nyilvántartjuk őket.

`section_coverage` kötelező. Minden H2 szekciót pontosan ugyanazzal a címmel kell felsorolni, ahogy a `szoveg/*.md` fájlban szerepel. A `text_only` csak akkor elfogadható, ha a szekció nem CTA, nem hero, nincs benne "Javasolt vizuál", és nem használ kártya/step/benefit ikonos logikát.

`section_reference_image` opcionális, belső technikai referencia. Nem ügyfélnek szánt review anyag, hanem a build agentnek szóló nagyobb/részletesebb vizuális cél. Csak vizuálisan kritikus szekcióknál használd:
- hero
- ár/pricing szekció
- CTA
- komplex szolgáltatás/benefit/step kártyák
- több egyedi ikont vagy több production képet használó szekció
- olyan full-page mockup részlet, amely túl kicsi a pontos kódoláshoz

Ha nincs szükség külön szekció referenciára, a mező maradjon üres string vagy maradjon ki.

`layout_contract` opcionális, de HERO szekciónál kötelező. Ez akadályozza meg, hogy a build agent a mockupon látott kompozíciót másik mintára cserélje. Példa: ha a mockupon a hero képe háttérként fut át a jobb oldalra és bal oldalon világos mosás/fade alatt van a szöveg, akkor a build nem cserélheti ezt split card layout-ra. Rögzítendő mezők:
- `pattern`: pl. `full_bleed_image_hero`, `split_image_card`, `image_left_text_right`, `card_grid`
- `image_treatment`: pl. `background_blended`, `image_card`, `inline_image`, `none`
- `overlay`: pl. `left_light_fade`, `left_dark_fade`, `right_fade`, `none`
- `image_position`: pl. `right`, `left`, `center`, `background`
- `must_not_change_pattern`: `true`, ha a kompozíció a mockup lényegi része

`icon_contract` opcionális, de kötelező minden olyan szekciónál, ahol a mockupon egyedi ikonok látszanak. Ez akadályozza meg, hogy a build agent custom ikonok helyett számozott badge-et vagy generikus lucide ikont tegyen be. Rögzítendő mezők:
- `expected_custom_icon_count`: hány custom ikon látszik a szekcióban
- `must_use_custom_icons`: `true`, ha a mockupon custom ikonok vannak
- `icon_style`: pl. `filled circle icon`, `outline icon`, `brand pictogram`
- `forbid_number_badges`: `true`, ha a mockupon nem számozás van
- `forbid_generic_replacement`: `true`, ha a custom ikon nem cserélhető library ikonra

---

## 2. Fázis — Oldalankénti mockup képek

Minden `szoveg/*.md` oldalhoz teljes oldalas, magas desktop mockup.

Kimenet: assets/mockups/[page-name]-mockup.png

Alap tervezési viewport:
- desktop mockup: 1440px széles design viewport
- wide desktop adaptáció: 1920px széles design viewport
- mobile adaptáció: 390px széles design viewport

A generált PNG tényleges pixelmérete eltérhet a design viewporttól. Ezt mindig mérd meg és dokumentáld.

**Kötelező mockupok minden projektnél** (a szoveg fájloktól függetlenül):
- `assets/mockups/foooldal-mockup.png`
- `assets/mockups/kapcsolat-mockup.png` — mindig kötelező; a kapcsolat oldal hero + form + térkép elrendezését mutatja brand-konzisztens stílusban

Szabályok:
- a mockupok száma: ÖSSZES `szoveg/*.md` fájl + `kapcsolat-mockup.png` (ha nincs `szoveg/kapcsolat.md`)
- minden oldal mockupján kötelező a felső navbar/header: logó/cégnév, fő navigációs linkek, telefonos vagy ajánlatkérő CTA
- a navbar a hero felett vagy a hero tetejére integrálva jelenjen meg; nem maradhat le a hero-ról
- minden oldal mockupján kötelező a footer: cégnév/logó, kontaktadatok, fő linkek, jogi linkek, CTA vagy telefon
- teljes oldalas, magas mockupot készíts, amely a footerig tart; ne csak első viewport vagy hero + pár szekció legyen
- minden mockuphoz rögzítsd: tényleges pixelméret, tervezett viewport, skálázási arány, és responsive adaptációs megjegyzések
- használja az adott oldal tényleges magyar szövegét
- tükrözze a brand stílusát
- legyen ügyfélnek bemutatható
- NE legyen production asset forrás
- NE vágjunk ki belőle ikont, logót vagy fotót

## 2.1. Fázis — Opcionális belső section reference képek

Az ügyfélnek továbbra is a teljes oldalas mockup a fő bemutatóanyag. Section reference képet csak belső pontossági segédletként készíts, amikor a full-page mockupon egy vizuálisan kritikus szekció túl kicsi vagy túl összetett a pontos buildhez.

Kimenet:

```text
assets/mockups/sections/<page-slug>/<section-slug>.png
```

Szabályok:
- nem kötelező minden szekcióhoz
- nem küldendő ügyfél-review-ra
- nem production asset forrás
- nem vágható ki belőle ikon, logó vagy fotó
- ugyanazt a szekciót mutassa nagyobb/részletesebb kompozícióban, mint ami a full-page mockupon szerepel
- ha elkészül, rögzítsd a hozzá tartozó `section_coverage[].section_reference_image` mezőben
- a `mockup-visual-audit.md` fájlban jelöld, hogy mely szekcióknál készült section reference és miért

## 2a. Fázis — Mockup méret és responsive specifikáció

Minden mockup elkészülte után készítsd el: `assets/work/manifest/mockup-specs.json`.

Mérd meg minden mockup tényleges képméretét (`sips`, `identify`, vagy más elérhető képméret-lekérdező eszköz), majd rögzítsd:

```json
{
  "default_design_viewport": {
    "name": "desktop",
    "width": 1440,
    "unit": "css_px"
  },
  "breakpoints": [
    { "name": "mobile", "width": 390 },
    { "name": "tablet", "width": 768 },
    { "name": "desktop", "width": 1440 },
    { "name": "wide", "width": 1920 }
  ],
  "mockups": [
    {
      "path": "assets/mockups/foooldal-mockup.png",
      "intended_viewport": "desktop",
      "intended_viewport_width": 1440,
      "actual_pixel_width": 1440,
      "actual_pixel_height": 3200,
      "scale_factor": 1,
      "responsive_adaptation": {
        "mobile": "Nav collapses to hamburger; service cards become single column; CTA image stacks below text.",
        "tablet": "Two-column sections collapse where text would become narrow.",
        "wide": "Max content width remains constrained; hero image may expand full-bleed."
      },
      "optional_variants": {
        "mobile_mockup": "assets/mockups/mobile/foooldal-mobile-mockup.png",
        "wide_mockup": "assets/mockups/wide/foooldal-wide-mockup.png"
      }
    }
  ]
}
```

Responsive variant mockupok:
- nem kötelező minden projektben automatikusan legenerálni, hogy ne nőjön indokolatlanul a generálási idő
- kötelező generálni, ha a user mobil / tablet / wide mockupot kér
- kötelező generálni a főoldalról mobil mockupot, ha a design erősen vizuális vagy bonyolult layoutot használ (`DESIGN_VARIANCE >= 7` vagy `VISUAL_DENSITY >= 7`)
- ha elkészül mobil vagy wide variant, ugyanúgy listázd a `mockup-specs.json`-ban és a `mockup-qa.md`-ban

## 2b. Fázis — Mockup QA

Minden mockup elkészülte után nyisd meg/nézd át a képet. Ha bármelyik mockupon hiányzik a navbar/header vagy a footer, regeneráld a mockupot javított prompttal.

Készíts QA fájlt: `assets/work/manifest/mockup-qa.md`.

Az első ellenőrzött sora legyen pontosan:

```text
Mockup QA status: PASS
```

Oldalanként rögzítsd:
- mockup fájlútvonal
- tényleges méret: `[width]x[height] px`
- tervezett viewport: pl. `desktop 1440 css px`
- responsive adaptáció dokumentálva a `mockup-specs.json`-ban: PASS
- navbar/header: PASS
- hero includes nav/header area: PASS
- footer: PASS
- full page reaches footer: PASS
- minden fő H2 szekció vizuálisan megjelenik vagy indokoltan kimarad: PASS

Ha bármelyik pont nem PASS, a mockup QA nem kész, és nem léphetsz tovább a mockup elemzés fázisra.

---

## 2c. Fázis — Mockup elemzés és manifest frissítés

**Ez a fázis kötelező. Ne ugorj át.**

Miután az összes mockup kép elkészült, olvasd be MINDEGYIKET és azonosítsd az összes vizuális elemet. Ez az image-to-code audit: a mockup nem inspiráció, hanem vizuális szerződés.

Készíts audit fájlt: `assets/work/manifest/mockup-visual-audit.md`.

Az első ellenőrzött sora legyen pontosan:

```text
Mockup visual audit status: PASS
```

Minden egyes mockupnál (`assets/mockups/*.png`) rögzítsd:
- mockup tényleges képméretét és tervezett CSS viewportját
- **Fotók / háttérképek**: melyik szekcióban jelenik meg, mekkora területen, milyen tartalom látható
- **Ikonok**: melyik szekcióban, hány db, milyen típus (service, trust, benefit, step stb.)
- **Logó megjelenések**: hol és melyik variáns (sötét/világos, vízszintes/álló)
- **Egyéb vizuális elemek**: illustráció, badge, sávkép stb.
- **Ismétlődés kontroll**: mely képek ismétlődhetnek tudatosan, és mely szekciókhoz kell egyedi asset
- **Responsive kockázat**: hero fókuszpont, kétoszlopos blokkok, sűrű kártyasorok, hosszú gombszövegek, ikonméretek
- **Section reference döntés**: mely szekcióknál készült külön `assets/mockups/sections/...` referencia, és melyeknél nem indokolt
- **Homepage design strategy**: a `design_strategy` mezők és hogy a mockup hogyan követi őket, különösen `site_archetype`, `hero_archetype`, `section_rhythm`, `avoid_patterns`
- **Hero layout contract**: a hero pontos kompozíciója: full-bleed vagy split, kép háttérként vagy kártyában, fade/overlay iránya, kép fókuszpontja, CTA sor és trust badge/kártyák helye, valamint melyik `hero_archetype` alapján készült
- **Icon contract**: minden mockupon látható custom ikon szekciónkénti száma, stílusa, és hogy tilos-e számozott/generikus helyettesítés

Majd frissítsd az `assets/work/manifest/asset-manifest.json` `images` és `custom_icons` listáját:
- Ha egy szekcióban fotó látható a mockupon → add hozzá az images listához (pl. `service-klimaszereles-outdoor.png`)
- Ha egy step/folyamat szekcióban ikonok vannak → add hozzá custom_icons-hoz
- `cta-bg.png` minden projektnél kötelező — ha nincs a listában, add hozzá
- Service-specifikus képekhez: `service-[name].png` vagy `service-[name]-extra.png`

Frissítsd az `asset-requirements.md`-t is, hogy minden mockupon talált vizuális elemhez legyen végleges asset útvonal.
Frissítsd a manifest `pages[].section_coverage` listáit is:
- minden markdown H2 szekció pontosan egyszer szerepeljen
- ha a mockupon a szekcióban fotó, háttér, badge vagy illusztráció látható, a `visual_assets` tartalmazza a külön generált production fájlt
- ha a mockupon custom ikon látható, a `custom_icons` tartalmazza az SVG production útvonalát
- ha a mockupon custom ikon látható, az `icon_contract.must_use_custom_icons` legyen `true`, az `expected_custom_icon_count` egyezzen a `custom_icons` darabszámával, és `forbid_generic_replacement` legyen `true`
- ha library ikon elég, a `library_icons` tartalmazza az ikon nevét
- ha készült belső section reference, a `section_reference_image` tartalmazza a fájlútvonalát
- HERO szekciónál a `layout_contract` mindig tartalmazza a kompozíciót és `must_not_change_pattern: true`
- CTA szekciónál mindig szerepeljen `assets/images/cta-bg.png` a `visual_assets` listában

**CSAK azután lépj a 3. fázisra, ha a `mockup-visual-audit.md`, a manifest és az asset-requirements teljes, minden `szoveg/*.md` oldalt lefed, és az összes mockupon látható vizuális elemhez tartozik production asset vagy library ikon döntés.**

---

## 2d. Fázis — Page-level parallel asset planning

Miután a mockupok, `mockup-visual-audit.md`, `asset-requirements.md` és az első `asset-manifest.json` elkészültek, az asset generálás oldalanként párhuzamosítható.

Alapelv:

```text
Először 1 mockup/planner worker dolgozik.
Ha a mockupok és a vizuális audit készen vannak, oldalanként max. 6 asset worker indul.
Egy worker = egy oldal.
Reuse first, generate only when the mockup/design intent requires a distinct asset.
```

Kötelező fájlok:

```text
assets/work/shared-asset-registry.json
assets/work/page-jobs/page-asset-jobs.json
assets/work/page-jobs/<page-slug>/job.json
assets/work/page-jobs/<page-slug>/job-result.json
```

`shared-asset-registry.json` célja:
- azonosítani, mely assetek közösek több oldalon
- megadni az owner oldalt, amely létrehozza az adott assetet
- megakadályozni, hogy több worker ugyanazt újragenerálja
- reuse-first döntéseket dokumentálni

`page-asset-jobs.json` szabályok:
- minden `asset-manifest.json pages[]` elemhez pontosan egy job tartozik
- `max_parallel_workers` mindig `6`
- ha 4 oldal van, 4 worker indul
- ha 6-nál több oldal van, a runner batch-eli őket, egyszerre legfeljebb 6 workerrel
- minden job tartalmazza:
  - `job_id`
  - `page_slug`
  - `source`
  - `mockup`
  - `section_coverage`
  - `owned_assets`
  - `reused_assets`
  - `result_path`
  - `log_path`

Worker szabályok:
- minden page worker csak a saját `owned_assets` listájában lévő production fájlokat generálhatja
- `reused_assets` elemeket nem generálhatja újra
- a manifestet, shared registryt, state fájlt és `.done/` sentineleket nem módosíthatja
- oldalán belül minden ikon/kép stílusa legyen konzisztens
- `job-result.json` nélkül a page worker nincs kész

Finalizer szabályok:
- miután minden page worker `status: PASS`, egy finalizer worker készíti el/ellenőrzi a globális asseteket: logó, favicon, OG kép, CTA háttér, WebP párok, optimalizálás
- csak a finalizer írhatja meg az `assets/work/manifest/asset-audit.md` fájlt
- `.done/03-assets.done` továbbra is csak az orchestrator által jöhet létre a validátor után

---

## 3. Fázis — Oldal képek

Hero, about, service, section és CTA képek — külön generálva, nem mockupból kivágva.

Kimenet:
- assets/images/hero.png
- assets/images/about.png
- assets/images/service-[name].png
- assets/images/kapcsolat-hero.png — kapcsolat oldal hero háttérképe (kötelező minden projektnél): iparághoz illő, széles banner arányú fotorealista kép — szöveg, logó nélkül
- assets/images/cta-bg.png — CTA szekció háttérképe (kötelező minden projektnél)

A cta-bg.png iparághoz illő, széles formátumú (banner arány), fotorealista belső vagy helyszín kép — szöveg, logó, UI elem nélkül. A CTA szekcióban háttérképként jelenik meg, a szöveg és gombok felette opacity réteggel.

Szabályok:
- page-level parallel módban ezeket az oldal workerök generálják a saját `owned_assets` listájuk alapján
- shared assetet csak az owner worker vagy a finalizer hozhat létre; más worker újrahasználja
- generáld le az asset-manifest.json `images` listájában szereplő ÖSSZES képet, nem csak a fenti példákat
- minden képhez később WebP pár is készüljön
- nagy felbontásból induljon
- fotós/realista képeknél NE legyen rajta szöveg, logó vagy UI elem
- ne tartalmazzon véletlenül feliratot vagy watermarkot

---

## 4. Fázis — Standard UI ikonok (library)

A library_icons listában szereplő ikonokat NE töltsd le és NE generáld AI-val.
Ezeket a Next.js projektben `lucide-react` npm csomagként kezeljük — nincs teendő ebben a fázisban.

---

## 5. Fázis — Egyedi brand/service ikonok

Csak azokat az ikonokat generáld AI-val, amik az asset-manifest.json custom_icons listájában szerepelnek.

Page-level parallel módban a custom ikonokat az az oldal worker generálja, amelyik az adott ikon owner-e a `shared-asset-registry.json` szerint. Más worker ugyanazt az ikont csak `reused_assets` elemként hivatkozhatja.

Ikononkénti workflow:

1. Generálj nagy forrásképet (1024x1024):
   - Prompt elv:
     "Create a single clean vector-style website icon. No text, no labels, no mockup, no card, no shadow. Single color subject. Large centered icon. Flat solid #ff00ff chroma-key background. Consistent stroke width. Simple enough to work as a small website icon."
   - Mentés: assets/work/source/icon-[name]-source.png

2. Távolítsd el a hátteret (chroma-key eltávolítás):
   python "${CODEX_HOME:-$HOME/.codex}/skills/.system/imagegen/scripts/remove_chroma_key.py" \
     --input assets/work/source/icon-[name]-source.png \
     --out assets/work/cleaned/icon-[name]-clean.png \
     --auto-key border --soft-matte --transparent-threshold 12 --opaque-threshold 220 --despill
   - Mentés: assets/work/cleaned/icon-[name]-clean.png

3. Vektorosítás potrace-szel:
   convert assets/work/cleaned/icon-[name]-clean.png -threshold 50% assets/work/cleaned/icon-[name]-bw.png
   potrace assets/work/cleaned/icon-[name]-bw.png -s -o assets/work/raw-svg/icon-[name]-raw.svg
   - Mentés: assets/work/raw-svg/icon-[name]-raw.svg

4. SVG tisztítás svgo-val:
   svgo assets/work/raw-svg/icon-[name]-raw.svg -o assets/icons/svg/icon-[name].svg
   - Ellenőrizd: legyen helyes viewBox, stroke/fill="currentColor", átlátszó háttér, nincs felesleges metadata
   - Mentés: assets/icons/svg/icon-[name].svg

5. PNG fallback export rsvg-convert-tel:
   rsvg-convert -w 512 -h 512 assets/icons/svg/icon-[name].svg -o assets/icons/png/icon-[name].png
   - Mentés: assets/icons/png/icon-[name].png

---

## 6. Fázis — Logó workflow

A logót NE vágd ki mockupból. A mockup csak stílusreferencia.
AI-generált raszteres logót NE használj production logóként és NE vektorizálj AI-logóképet végleges logóvá.

### 6.0 Mockup-alapú logó brief

Először olvasd vissza a mockupokon látható logó irányát, de csak ezeket a jellemzőket vedd át:
- lockup típusa: wordmark, monogram + wordmark, egyszerű geometrikus jel + wordmark
- betűhangulat: condensed/bold/geometric/elegáns/humanista
- színpár: primary/accent/light/dark
- formai motívum: legfeljebb egy egyszerű, iparághoz illő jel, pl. villám, tetővonal, levél, hópehely, csepp

A `mockup-visual-audit.md` fájlban rögzítsd külön:

```text
Logo intent contract:
- source: mockup style reference only
- final method: hand-composed SVG, no AI raster logo
- lockup:
- typography:
- mark concept:
- colors:
- small-size test risk:
```

Tiltott logóirányok:
- részletes illusztráció, kabala, jelenet, fotószerű elem
- több motívum összekeverése egy jelben
- AI által generált szöveg vagy pszeudo-betű
- zajos, organikus, nehezen vektorizálható forma
- bonyolult negatív tér, ami 16-32 px favicon méretben szétesik

### 6.1 Logójel (logo-mark)

1. Készíts kézzel komponált, egyszerű SVG logo-markot.
   - Használj alap SVG elemeket (`path`, `rect`, `circle`, `polygon`, `line`) vagy minimális kézzel írt pathot.
   - Legfeljebb 1-2 formai motívum legyen benne.
   - A jel működjön 16x16, 32x32, 64x64 és 128x128 méretben is.
   - A jel legyen átlátszó hátterű, helyes `viewBox`-szal, metadata nélkül.
   - Ne tartalmazzon szöveget, cégnevet vagy betűutánzatot.
   - Mentés: assets/logo/svg/logo-mark-dark.svg

2. Dark verzió (sötét, világos háttérre):
   - Mentés: assets/logo/svg/logo-mark-dark.svg
   - PNG export: assets/logo/png/logo-mark-dark.png

3. Light verzió (fehér/világos, sötét háttérre):
   - SVG-ben cseréld a fill/stroke értéket fehérre (#ffffff)
   - Mentés: assets/logo/svg/logo-mark-light.svg
   - PNG export: assets/logo/png/logo-mark-light.png

4. Minőségellenőrzés:
   - nyisd meg vagy rendereld a logo-mark SVG-t 16, 32, 64 és 128 px méretben
   - ha 32 px alatt nem felismerhető, egyszerűsítsd
   - ha a forma véletlenszerű rajznak tűnik, dobd el és készíts tisztább geometrikus jelet
   - ha nincs erős, tiszta jelötlet, használj betűalapú monogramot a cégnév kezdőbetűiből

### 6.2 Szöveges logó variánsok

A cégnév szövegét NE AI képből generáld — SVG-ben komponáld:
- választott Google Font vagy system font
- pontos cégnév a cta-master.md-ből
- brand színekkel
- átlátszó háttérrel
- viewBox helyes legyen
- A wordmark legyen a végleges márkajel elsődleges hordozója; a logo-mark csak kiegészítő, favicon és kis helyekre való.
- Ha a cég neve hosszú, használj vízszintes wordmarkot rövidített markkal, de a pontos cégnév maradjon olvasható.

Készítsd el mind a hat variánst:
- logo-horizontal-dark.svg + .png (logójel + szöveg egymás mellett, sötét)
- logo-horizontal-light.svg + .png (logójel + szöveg egymás mellett, világos)
- logo-vertical-dark.svg + .png (logójel szöveg felett, sötét)
- logo-vertical-light.svg + .png (logójel szöveg felett, világos)

Mentés: assets/logo/svg/ és assets/logo/png/

---

## 7. Fázis — Open Graph képek

Egy általános brand OG kép, 1200x630px — minden oldalon ugyanez szerepel a meta tagben.

Tartalom:
- cég neve + főoldal tagline (cta-master.md-ből)
- brandhez illő háttérvizuál
- magyar szöveg
- jól olvasható kompozíció

Kimenet: assets/og-images/og-default.png

---

## 8. Fázis — Favicon szett

A végleges logo-mark-dark.png alapján:

convert assets/logo/png/logo-mark-dark.png -resize 16x16 assets/favicon/favicon-16x16.png
convert assets/logo/png/logo-mark-dark.png -resize 32x32 assets/favicon/favicon-32x32.png
convert assets/logo/png/logo-mark-dark.png -resize 48x48 /tmp/favicon-48.png
convert assets/favicon/favicon-16x16.png assets/favicon/favicon-32x32.png /tmp/favicon-48.png assets/favicon/favicon.ico
convert assets/logo/png/logo-mark-dark.png -resize 180x180 -background white -flatten assets/favicon/apple-touch-icon.png
convert assets/logo/png/logo-mark-dark.png -resize 192x192 assets/favicon/android-chrome-192x192.png
convert assets/logo/png/logo-mark-dark.png -resize 512x512 assets/favicon/android-chrome-512x512.png

---

## 9. Fázis — Optimalizálás

### SVG optimalizálás (svgo)
svgo assets/icons/svg/*.svg
svgo assets/logo/svg/*.svg

### PNG optimalizálás (oxipng + pngquant)
oxipng -o 4 assets/icons/png/*.png
oxipng -o 4 assets/logo/png/*.png
oxipng -o 4 assets/favicon/*.png
pngquant --force --quality=80-95 --output assets/icons/png/ assets/icons/png/*.png
pngquant --force --quality=80-95 --output assets/logo/png/ assets/logo/png/*.png

### WebP konverzió (oldal képekhez)
for f in assets/images/*.png assets/images/*.jpg; do
  cwebp -q 85 "$f" -o "${f%.*}.webp"
done

### OG képek optimalizálása
oxipng -o 4 assets/og-images/*.png

---

## 10. Fázis — Asset audit

Ellenőrizd és készíts audit fájlt: assets/work/manifest/asset-audit.md

Az audit első ellenőrzött sora legyen pontosan:

```text
Asset completion status: PASS
```

Csak akkor írd ezt, ha nincs hiányzó mockup, kép, CTA háttér, custom ikon, logó, favicon, OG kép vagy WebP pár. Ha bármi hiányzik, az audit ne PASS legyen, hanem sorolja fel a hiányokat; ilyenkor a fázis nincs kész.

Ellenőrzési szempontok:
- [ ] `mockup-specs.json` létezik és minden mockup tényleges pixelméretét tartalmazza
- [ ] Minden mockuphoz szerepel intended viewport és responsive adaptációs terv
- [ ] `mockup-qa.md` létezik és `Mockup QA status: PASS`
- [ ] `mockup-visual-audit.md` létezik és `Mockup visual audit status: PASS`
- [ ] Minden mockup QA sor szerint tartalmaz navbart/headert
- [ ] Minden mockup QA sor szerint tartalmaz footert
- [ ] Minden mockup vizuális auditja felsorolja a fotókat/háttérképeket, ikonokat, logókat, ismétlődés kontrollt és responsive kockázatokat
- [ ] A `mockup-visual-audit.md` tartalmaz `Logo intent contract` blokkot
- [ ] `asset-requirements.md` létezik és minden `szoveg/*.md` oldalt felsorol
- [ ] `asset-manifest.json` pages listája pontosan lefedi az összes `szoveg/*.md` oldalt
- [ ] `asset-manifest.json` tartalmazza a `design_strategy` mezőt
- [ ] A főoldali mockup és audit követi a `design_strategy.site_archetype`, `hero_archetype` és `section_rhythm` döntéseket
- [ ] Az `avoid_patterns` listában tiltott sablonminták nem domináns szerkezetként jelennek meg a mockupban
- [ ] `shared-asset-registry.json` létezik és reuse-first döntéseket tartalmaz
- [ ] `page-asset-jobs.json` létezik, `max_parallel_workers: 6`, és pontosan egy jobot tartalmaz minden oldalhoz
- [ ] Minden page jobhoz létezik `job-result.json` és `status: PASS`
- [ ] Minden oldal minden H2 szekciója szerepel a `section_coverage` listában
- [ ] Egyetlen CTA / hero / javasolt vizuált tartalmazó szekció sincs `text_only` döntéssel
- [ ] Minden `section_coverage.visual_assets` és `section_coverage.custom_icons` útvonal létező production fájlra mutat
- [ ] Minden nem üres `section_reference_image` útvonal létező belső mockup fájlra mutat
- [ ] Minden hero szekció tartalmaz `layout_contract` mezőt és `must_not_change_pattern: true`
- [ ] Minden mockupon látható custom ikonos szekció tartalmaz `icon_contract` mezőt és tiltja a generikus/számozott helyettesítést, ha a mockup nem azt mutatja
- [ ] Egy oldalon ugyanaz a section image nem ismétlődik kettőnél több tartalmi szekcióban, kivéve ha `allow_reuse: true`
- [ ] Custom SVG ikon nem tartalmaz hardcoded fekete fill/stroke értéket, kivéve ha `allow_dark_icon: true`
- [ ] Minden oldalhoz létezik mockup
- [ ] Minden manifestben szereplő image fájl létezik
- [ ] `assets/images/cta-bg.png` létezik és szerepel a manifestben
- [ ] Minden manifestben szereplő image fájlhoz létezik WebP pár
- [ ] Minden mockupon látható production vizuál külön generált assetként vagy library ikon döntésként szerepel
- [ ] Minden production SVG megnyitható és valid
- [ ] A production logo-mark kézzel komponált SVG, nem AI raszteres logó vektorizálása
- [ ] A logo-mark 16, 32, 64 és 128 px méretben ellenőrizve és felismerhető
- [ ] Minden production PNG létezik a párjához
- [ ] Ikon PNG-k átlátszó hátterűek
- [ ] Logó PNG-k átlátszó hátterűek (kivéve apple-touch-icon)
- [ ] Ikonok négyzetesek
- [ ] Favicon szett teljes (6 fájl)
- [ ] Nincsenek work fájlok production mappákban
- [ ] Fájlnevek egységesek (kebab-case, kisbetűs)
- [ ] Mockupból NEM lett kivágva production asset
- [ ] WebP verziók léteznek az images/ mappában
- [ ] SVG-k optimalizálva (svgo)
- [ ] PNG-k optimalizálva (oxipng/pngquant)
