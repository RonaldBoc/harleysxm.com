# CLAUDE.md — harleysxm.com

## Mission

Code a complete, production-ready one-page website for **harleysxm.com** — a Harley-Davidson licensed merchandise shop located at Bobbys' Marina, Philipsburg, Sint Maarten. The site is purely informational and trust-building, targeting cruise ship tourists and HD enthusiasts visiting the island.

---

## Tech Stack

| Tool | Version / Detail |
|---|---|
| Framework | Astro |
| Animations | GSAP + ScrollTrigger plugin |
| Node.js | v20 |
| Package manager | pnpm |
| Deployment | Vercel (via GitHub) |
| i18n | Astro built-in i18n (EN / FR / ES) |
| Analytics | Google Analytics 4 |
| CSS | Scoped `<style>` in each `.astro` component |
| Images | `src/assets/` + Astro `<Image />` component |

---

## Project Setup

### Init & install

```bash
pnpm create astro@latest harleysxm -- --template minimal --no-install
cd harleysxm
pnpm install
pnpm add gsap
pnpm add @astrojs/vercel
```

### astro.config.mjs

```js
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  output: 'static',
  adapter: vercel(),
  site: 'https://harleysxm.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
```

### vercel.json (at project root)

```json
{
  "buildCommand": "pnpm build",
  "outputDirectory": "dist",
  "framework": "astro"
}
```

---

## File Structure

```
harleysxm/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── shop-front.jpg
│   │   └── shop-clothes.jpg
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Products.astro
│   │   ├── Banner.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── i18n/
│   │   ├── en.ts
│   │   ├── fr.ts
│   │   ├── es.ts
│   │   └── index.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       ├── index.astro
│       ├── fr/
│       │   └── index.astro
│       └── es/
│           └── index.astro
```

---

## i18n

### src/i18n/en.ts
```ts
export const en = {
  nav: { about: 'About', shop: 'Shop', find: 'Find Us' },
  hero: {
    eyebrow: 'Authentic Merchandise · Sint Maarten',
    sub: 'Shop · FWI Collection',
    desc: "The only authorized Harley-Davidson merchandise store in Sint Maarten. Exclusive Caribbean-edition tees, accessories, and collectibles — right at Bobbys' Marina, Philipsburg.",
    cta_primary: 'Explore the Shop',
    cta_outline: 'Find Us',
    scroll_hint: 'Scroll to discover',
  },
  about: {
    label: 'Our Story',
    title_line1: 'Authentic Harley',
    title_line2: 'in the Caribbean',
    p1: "Nestled at the iconic Bobbys' Marina in Philipsburg, Harley-Davidson FWI is your destination for genuine Harley-Davidson clothing and accessories in Sint Maarten. Every piece is 100% authentic — no imitations, no shortcuts.",
    p2: "Whether you're a dedicated rider or a first-time visitor looking for a unique souvenir, our exclusive Caribbean-edition collection captures the spirit of the island and the legend of the open road.",
    stat1_num: '100%', stat1_label: 'Authentic HD',
    stat2_num: 'SXM',  stat2_label: 'Exclusive Edition',
    stat3_num: '#1',   stat3_label: "At Bobbys' Marina",
  },
  products: {
    label: 'What We Carry',
    title: 'Our Collection',
    photo_label: 'Inside the Shop',
    card1_name: 'T-Shirts & Tops',
    card1_desc: 'Exclusive Caribbean-edition and classic Harley-Davidson tees. Over 50 designs in all sizes, from S to 3XL.',
    card2_name: 'Hats & Caps',
    card2_desc: 'Trucker hats, beanies, and snapbacks — all bearing the iconic Bar & Shield.',
    card3_name: 'Accessories',
    card3_desc: 'Keychains, pins, patches, bandanas, and more. The perfect memento of your island ride.',
    card4_name: 'SXM Exclusives',
    card4_desc: "Limited Sint Maarten editions you won't find anywhere else. Collectibles for true enthusiasts.",
  },
  banner: {
    title1: '100% Authentic.',
    title2: 'Zero Compromise.',
    sub: 'Every product carries the official Harley-Davidson license.',
    badge1: ['Official', 'Licensed'],
    badge2: ['Caribbean', 'Edition'],
    badge3: ['Rider', 'Approved'],
  },
  contact: {
    label: 'Come Visit Us',
    title: 'Find Us',
    address_label: 'Address',
    address_lines: ["Bobbys' Marina", '22H Juancho Yrausquin Blvd', 'Philipsburg, Sint Maarten'],
    phone_label: 'Phone',
    phone_value: '+1 (721) 542 5880',
    web_label: 'Website',
    web_value: 'harleysxm.com',
    email_label: 'Email',
    email_value: 'contact@harleysxm.com',
    map_tag: "Bobbys' Marina — Philipsburg",
    manager_role: 'Manager',
    assistant_role: 'Assistant Manager',
  },
  footer: {
    copy: "© 2025 Harley-Davidson FWI · Bobbys' Marina, Sint Maarten",
    tagline: 'Authentic Merchandise',
  },
};
```

### src/i18n/fr.ts
Same structure. Key translations:
- hero.eyebrow → `"Merchandising Authentique · Saint-Martin"`
- hero.cta_primary → `"Découvrir la Boutique"`
- hero.cta_outline → `"Nous Trouver"`
- about.title_line1 → `"L'Authentique Harley"`, title_line2 → `"aux Caraïbes"`
- products.label → `"Notre Sélection"`, products.title → `"Notre Collection"`
- contact.label → `"Venez Nous Rendre Visite"`, contact.title → `"Nous Trouver"`
- All other strings translated to natural French.

### src/i18n/es.ts
Same structure. Key translations:
- hero.eyebrow → `"Merchandising Auténtico · Sint Maarten"`
- hero.cta_primary → `"Explorar la Tienda"`
- about.title_line1 → `"Harley Auténtico"`, title_line2 → `"en el Caribe"`
- All other strings translated to natural Spanish.

### src/i18n/index.ts
```ts
import { en } from './en';
import { fr } from './fr';
import { es } from './es';
export const languages = { en, fr, es };
export type Lang = keyof typeof languages;
export function useTranslations(lang: Lang) {
  return languages[lang];
}
```

---

## BaseLayout.astro

Accepts props: `lang`, `title`, `description`.  
Loads Google Fonts, sets global CSS variables and global styles, injects GA4 script.

```astro
---
const { lang = 'en', title, description } = Astro.props;
---
<!DOCTYPE html>
<html lang={lang}>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="keywords" content="Harley Davidson Sint Maarten, HD merchandise SXM, Harley Davidson shop Caribbean, Bobbys Marina Philipsburg" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content="https://harleysxm.com" />
  <link rel="canonical" href="https://harleysxm.com" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@400;600;700&family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
  <!-- Google Analytics 4 — replace G-XXXXXXXXXX with real Measurement ID -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  </script>
</head>
<body>
  <slot />
</body>
</html>

<style is:global>
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
  :root {
    --hd-orange: #FF6600;
    --hd-black:  #0a0a0a;
    --hd-dark:   #111111;
    --hd-grey:   #1a1a1a;
    --hd-light:  #f0ece4;
    --hd-muted:  #777777;
  }
  html { scroll-behavior: smooth; }
  body {
    background: var(--hd-black);
    color: var(--hd-light);
    font-family: 'Lato', sans-serif;
    overflow-x: hidden;
  }
  body::before {
    content: '';
    position: fixed; inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E");
    pointer-events: none; z-index: 9999; opacity: 0.35;
  }
  .section-label {
    font-family: 'Oswald', sans-serif; font-size: 11px; font-weight: 600;
    letter-spacing: 0.36em; text-transform: uppercase;
    color: var(--hd-orange); margin-bottom: 14px;
  }
  .section-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(44px, 5.5vw, 76px);
    line-height: 0.95; letter-spacing: 0.03em;
    color: var(--hd-light); margin-bottom: 22px;
  }
  .section-title em { color: var(--hd-orange); font-style: normal; }
  .divider { width: 56px; height: 3px; background: var(--hd-orange); margin-bottom: 40px; }
</style>
```

---

## Pages

### src/pages/index.astro
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Nav from '../components/Nav.astro';
import Hero from '../components/Hero.astro';
import About from '../components/About.astro';
import Products from '../components/Products.astro';
import Banner from '../components/Banner.astro';
import Contact from '../components/Contact.astro';
import Footer from '../components/Footer.astro';
const lang = 'en';
---
<BaseLayout lang={lang} title="Harley-Davidson Shop — Sint Maarten SXM" description="Official Harley-Davidson merchandise at Bobbys' Marina, Philipsburg. Authentic tees, accessories, Caribbean exclusives.">
  <Nav lang={lang} />
  <main>
    <Hero lang={lang} />
    <About lang={lang} />
    <Products lang={lang} />
    <Banner lang={lang} />
    <Contact lang={lang} />
  </main>
  <Footer lang={lang} />
</BaseLayout>
```

### src/pages/fr/index.astro
Same, `lang = 'fr'`, title and description in French.

### src/pages/es/index.astro
Same, `lang = 'es'`, title and description in Spanish.

---

## Components

All components accept `lang: string` as prop and import `useTranslations`.

---

### Nav.astro

**Structure:**
- `<nav>` fixed, height 70px, `background: rgba(10,10,10,0.94)`, `backdrop-filter: blur(14px)`, `border-bottom: 1px solid rgba(255,102,0,0.18)`. Adds class `scrolled` (border opacity 0.4) when `window.scrollY > 10`.
- **Left:** inline HD shield SVG (see Icons section) + `"HARLEY"` `"SXM"` in orange — Bebas Neue 21px
- **Right desktop:** anchor links (`#about`, `#products`, `#contact`) + language switcher
- **Language switcher:** links to `/` (EN), `/fr` (FR), `/es` (ES). Current locale in orange, others muted → hover orange. Separator `·` between them.
- **Mobile (< 768px):** hide links, show hamburger SVG button. On click, toggle `.menu-open` class on nav, which reveals a full-width dropdown with the links stacked vertically.

**Hamburger SVG (custom, no library):**
```svg
<svg width="22" height="16" viewBox="0 0 22 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
  <line x1="0" y1="2"  x2="22" y2="2"/>
  <line x1="0" y1="8"  x2="22" y2="8"/>
  <line x1="0" y1="14" x2="22" y2="14"/>
</svg>
```

---

### Hero.astro

**Layout:** `position: relative`, `height: 100vh`, `min-height: 680px`, `overflow: hidden`.

**Background:** Astro `<Image>` from `src/assets/shop-front.jpg` with class `hero-bg-img`, positioned absolutely, `width: 100%`, `height: 100%`, `object-fit: cover`, `z-index: 0`. A `<div class="hero-overlay">` sits above it with `position: absolute; inset: 0; background: linear-gradient(108deg, rgba(10,10,10,0.93) 38%, rgba(10,10,10,0.45) 100%); z-index: 1`.

**Bottom diagonal cut:** `::after` pseudo, `clip-path: polygon(0 100%, 100% 0, 100% 100%)`, height 100px, background `var(--hd-black)`, `position: absolute; bottom: -1px; left: 0; right: 0; z-index: 3`.

**Content** (`z-index: 2`, padding 0 80px, max-width 860px):
- `.hero-eyebrow` — orange, Oswald 11px, letter-spacing 0.32em, with `::before` 36px orange line
- `<h1>` — two lines: `t.hero.title_line1` ("HARLEY") in `var(--hd-light)`, `<span class="accent">SXM</span>` in orange, `display: block`. Bebas Neue, `clamp(76px, 11vw, 148px)`, line-height 0.88
- `.hero-sub` — Oswald 400, 26px, muted, letter-spacing 0.28em
- `<p>` — Lato 300, 15px, max-width 460px, line-height 1.8, color rgba(240,236,228,0.72)
- `.hero-ctas` — flex row, gap 16px:
  - Primary `<a href="#products">` — orange bg, chamfered clip-path, Oswald 13px 600 uppercase letter-spacing 0.16em, padding 15px 38px
  - Outline `<a href="#contact">` — transparent, border 1px rgba(240,236,228,0.25), same font
- `.scroll-hint` — absolute bottom-left (bottom 40px, left 80px), Oswald 11px muted, letter-spacing 0.2em, contains `"↓"` + text

**GSAP (in `<script>`):** page load timeline + parallax (see Animations section).

---

### About.astro

- `<section id="about">`, `background: var(--hd-dark)`, padding 100px 80px
- CSS Grid: `grid-template-columns: 1fr 1fr`, gap 80px, align-items center
- **Left `.about-text`:** label → `<h2>` (two lines, second in `<em>`) → `.divider` → 2 `<p>` → `.about-stats` (flex, gap 44px, 3 `.stat` items each with left border 3px orange, `.stat-num` Bebas Neue 50px, `.stat-label` Oswald 10px muted uppercase)
- **Right `.about-image`:** position relative. `::before` offset frame (top -16px, left -16px, right +16px, bottom +16px, border 2px orange, z-index 0). Astro `<Image>` z-index 1, height 500px, object-fit cover, display block.
- **GSAP ScrollTrigger** on both columns (see Animations).

---

### Products.astro

- `<section id="products">`, `background: var(--hd-black)`, padding 100px 80px
- Section header: label + `<h2>` + `.divider`
- **CSS Grid** `.products-grid`: `grid-template-columns: repeat(3, 1fr)`, `grid-template-rows: auto auto`, gap 2px
  - `.product-photo` — `grid-column: 1`, `grid-row: 1 / 3`, min-height 520px, overflow hidden. Astro `<Image>` 100% width/height, object-fit cover. `::after` gradient overlay. `.product-photo-label` absolute bottom-left, Bebas Neue 22px, letter-spacing 0.1em. Hover: `transform: scale(1.04)` on image, transition 0.6s.
  - 4 `.product-card` elements at grid positions col2/row1, col3/row1, col2/row2, col3/row2
  - Each card inner: `.product-icon-wrap` (42×42, bg orange/8%, border orange/20%) + `.product-name` Bebas Neue 30px + `.product-desc` Lato 300 13px muted. Hover: bg `#1e1e1e`, border-left orange.
- **GSAP** stagger on `.product-card` (see Animations).

---

### Banner.astro

- `<div class="banner">`, `background: var(--hd-orange)`, padding 56px 80px
- Flex row, justify-content space-between, align-items center, gap 40px
- **Left `.banner-text`:** `<h2>` Bebas Neue 50px white (two lines via `<br>`), `<p>` 14px white/82%
- **Right `.banner-badges`:** flex row gap 40px, 3 `.badge` items (flex column, align center, gap 10px): SVG icon (36×36 white stroke) + `.badge-text` Oswald 11px white/88% centered

---

### Contact.astro

- `<section id="contact">`, `background: var(--hd-dark)`, padding 100px 80px
- CSS Grid: `grid-template-columns: 1fr 1fr`, gap 80px
- **Left:** label → `<h2>` → `.divider` → `.contact-info-block` (flex column, gap 28px) → `.team`
  - Each `.contact-item`: flex row gap 18px. `.contact-icon` 42×42 (bg orange/10%, border orange/25%, centered). `.contact-item-label` Oswald 10px orange uppercase. `.contact-item-value` Lato 15px light.
  - Phone: `<a href="tel:+17215425880">`, Email: `<a href="mailto:contact@harleysxm.com">` — inherit color, no underline, hover orange
  - `.team`: 2-col grid, padding-top 36px, border-top 1px rgba(255,255,255,0.07). Each member: `.team-role` Oswald 10px orange, `.team-name` Bebas Neue 22px, `.team-email` Lato 12px muted
- **Right `.map-wrap`:** position relative, height 520px, overflow hidden, border 1px rgba(255,255,255,0.05)
  - `.map-tag` absolute top-left, bg orange, Oswald 11px white bold, padding 7px 14px, z-index 2
  - `<iframe>` 100% width/height, border none, `loading="lazy"`, `allowfullscreen`
  - Map src: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5!2d-63.0525!3d18.0169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c0f5f12345678ab%3A0x9abcdef012345678!2sBobbys%27+Marina%2C+Philipsburg%2C+Sint+Maarten!5e0!3m2!1sen!2sus!4v1`
- **GSAP** stagger on `.contact-item` (see Animations).

---

### Footer.astro

- `<footer>`, `background: var(--hd-black)`, border-top `1px solid rgba(255,102,0,0.12)`, padding 38px 80px
- Flex row, justify-content space-between, align-items center
- Left: `.footer-logo` Bebas Neue 17px — `"HARLEY"` muted + `"SXM"` orange + `".COM"` muted
- Center: `<p>` Lato 12px muted/55%
- Right: `<span>` Oswald 11px #3a3a3a letter-spacing 0.16em uppercase

---

## Custom SVG Icons

**Zero emoji. All icons are inline SVG.**

### Product Icons (32×32, stroke `#FF6600`, stroke-width 1.3, linecap round, linejoin round, fill none)

**T-Shirts:**
```svg
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF6600" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
  <path d="M10 4 L4 9 L8 12 L8 28 L24 28 L24 12 L28 9 L22 4 Q20 7 16 7 Q12 7 10 4Z"/>
  <path d="M14 21 Q13 18 15 16 Q14 19 16 18 Q15 20 17 19 Q16 22 18 21 Q17 24 16 25 Q15 24 14 21Z"/>
</svg>
```

**Hats & Caps:**
```svg
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF6600" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
  <path d="M10 20 Q8 16 8 13 C8 8 11 5 16 5 C21 5 24 8 24 13 Q24 16 22 20 L22 23 L10 23 Z"/>
  <line x1="10" y1="23" x2="10" y2="26"/>
  <line x1="16" y1="23" x2="16" y2="26"/>
  <line x1="22" y1="23" x2="22" y2="26"/>
  <ellipse cx="13" cy="14" rx="2" ry="2.5"/>
  <ellipse cx="19" cy="14" rx="2" ry="2.5"/>
  <path d="M15 18 L16 17 L17 18"/>
  <path d="M11 5 Q10 2 12 1 Q11 3 13 2 Q12 4 14 3 Q13 5 15 5"/>
  <path d="M16 5 Q15 2 17 1 Q16 3 18 2 Q17 4 19 3 Q18 5 20 5"/>
</svg>
```

**Accessories:**
```svg
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF6600" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="16" cy="16" r="9"/>
  <circle cx="16" cy="16" r="5"/>
  <rect x="14.5" y="5"    width="3" height="3" rx="0.5"/>
  <rect x="14.5" y="24"   width="3" height="3" rx="0.5"/>
  <rect x="5"    y="14.5" width="3" height="3" rx="0.5"/>
  <rect x="24"   y="14.5" width="3" height="3" rx="0.5"/>
  <rect x="7.5"  y="7.5"  width="3" height="3" rx="0.5" transform="rotate(45 9 9)"/>
  <rect x="21.5" y="7.5"  width="3" height="3" rx="0.5" transform="rotate(-45 23 9)"/>
  <rect x="7.5"  y="21.5" width="3" height="3" rx="0.5" transform="rotate(-45 9 23)"/>
  <rect x="21.5" y="21.5" width="3" height="3" rx="0.5" transform="rotate(45 23 23)"/>
  <circle cx="16" cy="16" r="2" stroke-width="1.5"/>
</svg>
```

**SXM Exclusives:**
```svg
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF6600" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="16" cy="20" r="10"/>
  <circle cx="16" cy="20" r="3"/>
  <line x1="16" y1="10" x2="16" y2="17"/>
  <line x1="16" y1="23" x2="16" y2="30"/>
  <line x1="6"  y1="20" x2="13" y2="20"/>
  <line x1="19" y1="20" x2="26" y2="20"/>
  <line x1="8.9"  y1="12.9" x2="13.9" y2="17.9"/>
  <line x1="18.1" y1="22.1" x2="23.1" y2="27.1"/>
  <line x1="23.1" y1="12.9" x2="18.1" y2="17.9"/>
  <line x1="13.9" y1="22.1" x2="8.9"  y2="27.1"/>
  <line x1="16" y1="10" x2="16" y2="5"/>
  <path d="M16 5 Q14 3 11 4"/>
  <path d="M16 5 Q18 3 21 4"/>
  <path d="M16 6 Q14 4 12 5"/>
  <path d="M16 6 Q18 4 20 5"/>
</svg>
```

### Contact Icons (20×20, stroke `#FF6600`, stroke-width 1.4, linecap round)

**Pin:** `<path d="M10 2 C6.5 2 4 4.7 4 8 C4 12.5 10 18 10 18 C10 18 16 12.5 16 8 C16 4.7 13.5 2 10 2Z"/>` + `<circle cx="10" cy="8" r="2.2"/>`

**Phone:** `<path d="M5 3 L7 3 L8.5 7 L7 8.5 C7.8 10.5 9.5 12.2 11.5 13 L13 11.5 L17 13 L17 15 C17 16.1 16.1 17 15 17 C8.4 17 3 11.6 3 5 C3 3.9 3.9 3 5 3Z"/>`

**Globe:** `<circle cx="10" cy="10" r="7.5"/>` + 2 longitude curves + `<line x1="2.5" y1="10" x2="17.5" y2="10"/>`

**Envelope:** `<rect x="2" y="5" width="16" height="11" rx="1.5"/>` + `<path d="M2 6 L10 12 L18 6"/>`

### Banner Badge Icons (36×36, stroke white, stroke-width 1.5, linecap round)

**Padlock:** rect body + arch shackle + circle keyhole + short line

**Palm + waves:** vertical trunk + 2 frond pairs + 2 curved wave lines

**HD Shield:** shield path + 2 faint hatch lines + `"HD"` text centered

(Full SVG paths identical to those defined in the mockup v2 file.)

---

## Logo & Favicon

### Nav shield (inline SVG, 32×40)
```svg
<svg width="32" height="40" viewBox="0 0 32 40" fill="none">
  <path d="M4 3 L4 22 C4 33 16 39 16 39 C16 39 28 33 28 22 L28 3 Z" fill="none" stroke="#FF6600" stroke-width="1.5"/>
  <line x1="8" y1="8"  x2="24" y2="8"  stroke="#FF6600" stroke-width="0.6" opacity="0.5"/>
  <line x1="8" y1="12" x2="24" y2="12" stroke="#FF6600" stroke-width="0.6" opacity="0.5"/>
  <text x="16" y="26" font-family="'Bebas Neue', sans-serif" font-size="12" fill="#FF6600" text-anchor="middle" dominant-baseline="middle" letter-spacing="0.5">HD</text>
</svg>
```

### public/favicon.svg
Same shield, viewBox `0 0 32 40`, stroke `#FF6600`.

---

## GSAP Animations

Import in each component's `<script>` tag:
```js
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
```

### Hero — Page Load Timeline
```js
const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
tl.from('.hero-eyebrow', { y: 24, opacity: 0, duration: 0.7 })
  .from('.hero h1',      { y: 40, opacity: 0, duration: 0.8 }, '-=0.4')
  .from('.hero-sub',     { y: 20, opacity: 0, duration: 0.6 }, '-=0.5')
  .from('.hero-desc',    { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
  .from('.hero-ctas',    { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
  .from('.scroll-hint',  { opacity: 0, duration: 0.5 },        '-=0.2');
```

### Hero — Parallax
```js
gsap.to('.hero-bg-img', {
  yPercent: 25,
  ease: 'none',
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: true,
  },
});
```
> The hero background MUST be an absolutely positioned Astro `<Image>` with class `hero-bg-img` — not a CSS `background-image` property — so GSAP can transform its position.

### About — Slide in from sides
```js
gsap.from('.about-text', {
  x: -60, opacity: 0, duration: 1, ease: 'power3.out',
  scrollTrigger: { trigger: '.about', start: 'top 75%' },
});
gsap.from('.about-image', {
  x: 60, opacity: 0, duration: 1, ease: 'power3.out',
  scrollTrigger: { trigger: '.about', start: 'top 75%' },
});
```

### Products — Stagger cards
```js
gsap.from('.product-card', {
  y: 50, opacity: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
  scrollTrigger: { trigger: '.products-grid', start: 'top 80%' },
});
```

### Contact — Stagger items
```js
gsap.from('.contact-item', {
  x: -30, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
  scrollTrigger: { trigger: '.contact-info-block', start: 'top 80%' },
});
```

---

## Responsive Breakpoints

### Desktop (≥ 1024px)
Full layout as described above.

### Tablet (768px – 1023px)
- About: `grid-template-columns: 1fr`, image below text
- Products: photo full-width top, 2×2 cards below
- Contact: `grid-template-columns: 1fr`, map below info
- Hero: padding 0 48px
- Sections: padding 80px 48px
- Banner: `flex-wrap: wrap`, gap 32px

### Mobile (< 768px)
- Nav: logo left, hamburger right (hide desktop links)
- Hero: padding 0 24px, H1 `font-size: 72px`, hide `.scroll-hint`
- All grids → `grid-template-columns: 1fr`
- Products: `.product-photo` height 280px; cards stack vertically
- Banner: `flex-direction: column`, badges remain in a row
- Sections: padding 64px 24px
- Footer: `flex-direction: column`, gap 16px, `text-align: center`
- Stats: `flex-direction: column`, gap 20px

---

## CSS Details

### Chamfered CTA button
```css
.btn-primary {
  clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
}
```

### Product card hover
```css
.product-card-inner {
  border-left: 3px solid transparent;
  transition: background 0.3s, border-color 0.3s;
}
.product-card:hover .product-card-inner {
  background: #1e1e1e;
  border-left-color: var(--hd-orange);
}
```

### About image frame
```css
.about-image::before {
  content: '';
  position: absolute;
  top: -16px; left: -16px; right: 16px; bottom: 16px;
  border: 2px solid var(--hd-orange);
  z-index: 0;
}
```

### Nav scroll state
```js
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('scrolled', window.scrollY > 10);
});
```
```css
nav { transition: border-color 0.3s; }
nav.scrolled { border-bottom-color: rgba(255,102,0,0.4); }
```

---

## Quality Checklist

- [ ] Zero emoji anywhere in the codebase
- [ ] All icons are inline SVG, gravure/stroke style, no fills except text glyphs
- [ ] GSAP + ScrollTrigger imported and `gsap.registerPlugin(ScrollTrigger)` called
- [ ] Hero background is an Astro `<Image>` with class `hero-bg-img` (not CSS background) for parallax
- [ ] i18n: 3 pages render with correct translated copy (EN at `/`, FR at `/fr`, ES at `/es`)
- [ ] Language switcher present in Nav, current locale highlighted orange
- [ ] GA4 script in BaseLayout (placeholder `G-XXXXXXXXXX` noted for replacement)
- [ ] `astro.config.mjs` has `@astrojs/vercel` adapter + i18n config
- [ ] `vercel.json` present at project root
- [ ] Images imported from `src/assets/` via Astro `<Image />`
- [ ] Google Maps iframe present in Contact section
- [ ] `tel:` and `mailto:` links on phone and email
- [ ] Responsive breakpoints at 1024px and 768px working
- [ ] Mobile hamburger menu functional
- [ ] `scroll-behavior: smooth` active
- [ ] Noise texture `body::before` in global styles
- [ ] First section has `padding-top: 70px` (or equivalent) to clear fixed nav
- [ ] `pnpm build` passes with zero errors before pushing to GitHub
