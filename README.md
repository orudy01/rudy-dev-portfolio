# Rodolfo Ortega — Portfolio

Personal portfolio and client-facing website for Rodolfo Ortega, a creative director and full-stack developer based in Temecula, CA.

## Stack

- **Next.js 16** (App Router)
- **React 19** + TypeScript
- **Tailwind CSS v4**
- **Framer Motion v12** — scroll-triggered animations, marquee carousels, parallax
- **Resend** — contact form email delivery
- **shadcn/ui** + Radix UI primitives
- **Lucide React** — icons

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, studio HQ, about, photo carousel, contact form |
| `/work` | Case studies — Gym Logger, B&B Auto Detailing, Sandra's Mini Pancakes |
| `/services` | Pricing tiers — Landing Page, Custom Build |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create a `.env.local` file in the root:

```env
RESEND_API_KEY=re_your_key_here
```

Get a free API key at [resend.com](https://resend.com).

## Project Structure

```
app/
  page.tsx              # Homepage
  services/
    layout.tsx          # Services page metadata
    page.tsx            # Pricing page
  work/
    layout.tsx          # Work page metadata
    page.tsx            # Case studies
  api/
    contact/route.ts    # Contact form API route (Resend)
  layout.tsx            # Root layout + global metadata
  globals.css           # Tailwind + custom animations
  sitemap.ts            # Auto-generated /sitemap.xml
  robots.ts             # Auto-generated /robots.txt
components/
  nav.tsx               # Fixed responsive navbar
  footer.tsx            # Dark/light variant footer
  container.tsx         # Max-width wrapper
lib/
  motion.ts             # Framer Motion animation variants
  utils.ts              # cn() utility
  carousel-data.ts      # AUTO-GENERATED list of homepage carousel photos
scripts/
  gen-carousel.mjs      # Scans /public/carousel and rewrites lib/carousel-data.ts
public/
  carousel/             # Drop photos here; rebuild auto-picks them up
  work/                 # Project preview images
```

## Carousel Photos

The homepage photo carousel is filesystem-driven. To add or remove photos:

1. Drop a file in `/public/carousel/` (or delete one) — JPG, PNG, WebP, or AVIF
2. Restart `npm run dev` (the `predev` script regenerates `lib/carousel-data.ts`)

Photos are split alphabetically across three rows. To control row placement, prefix filenames (e.g. `1_hero.jpg`, `2_studio.jpg`).

## TODO Before Launch

- [ ] Replace `https://rudyortega.dev` placeholder with live domain (search the codebase)
- [ ] Add `/public/og-image.jpg` — 1200×630px for social sharing
- [ ] Update Resend `from:` address to a domain email once domain is live
- [ ] Add Sandra's Mini Pancakes case study + preview image (currently shows "Coming Soon" tile)
- [ ] Re-enable homepage Showreel section once highlight reel is finished (parked on `feature/showreel`)

## Scripts

```bash
npm run dev           # Development server (runs gen:carousel first via predev hook)
npm run build         # Production build (runs gen:carousel first via prebuild hook)
npm run lint          # ESLint
npm run gen:carousel  # Manually regenerate lib/carousel-data.ts from /public/carousel
```
