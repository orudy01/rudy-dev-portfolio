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
| `/` | Homepage — hero, showreel, about, photo carousel, contact form |
| `/work` | Case studies — B&B Auto Detailing, Sandra's Mini Pancakes, Gym Logger, AI Micro-Agency |
| `/services` | Pricing tiers — Landing Page, Business Site, Full Package |

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
```

## TODO Before Launch

- [ ] Replace `https://rudyortega.dev` placeholder with live domain (search the codebase)
- [ ] Add `/public/og-image.jpg` — 1200×630px for social sharing
- [ ] Update Resend `from:` address to a domain email once domain is live
- [ ] Add real project images to `/work` page
- [ ] Add real photos to marquee carousel on homepage
- [ ] Add showreel video or swap placeholder for a static image

## Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run lint     # ESLint
```
